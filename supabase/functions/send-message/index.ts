// supabase function: send-message
// Invia i messaggi del sito alla casella aziendale tramite l'account Gmail collegato.
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const RECIPIENT = "info@geenginering.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));

// I testi in italiano contengono accenti: le intestazioni vanno codificate RFC 2047.
const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  nome?: unknown;
  email?: unknown;
  messaggio?: unknown;
  telefono?: unknown;
  oggetto?: unknown;
  sito?: unknown;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.replace(/\r\n?/g, "\n").trim().slice(0, max) : "";
}

function buildRawEmail(args: {
  to: string;
  replyTo: string;
  subject: string;
  body: string;
}): string {
  const email = [
    `To: ${args.to}`,
    `Reply-To: ${args.replyTo}`,
    `Subject: ${header(args.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    args.body,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (status: number, body: unknown) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    if (req.method !== "POST") return json(405, { error: "Metodo non consentito" });

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_MAIL_API_KEY = Deno.env.get("GOOGLE_MAIL_API_KEY");
    if (!LOVABLE_API_KEY || !GOOGLE_MAIL_API_KEY) {
      console.error("send-message: credenziali email non disponibili");
      return json(500, { error: "Servizio email non configurato" });
    }

    const payload = (await req.json().catch(() => ({}))) as Payload;

    // Trappola anti spam: i bot compilano il campo nascosto, le persone no.
    if (clean(payload.sito, 200) !== "") {
      return json(200, { ok: true });
    }

    const nome = clean(payload.nome, 100);
    const email = clean(payload.email, 255);
    const messaggio = clean(payload.messaggio, 2000);
    const telefono = clean(payload.telefono, 30);
    const oggetto = clean(payload.oggetto, 120);

    if (nome.length < 2) return json(400, { error: "Nome mancante o troppo corto" });
    if (!EMAIL_RE.test(email) || email.length < 6) {
      return json(400, { error: "Email non valida" });
    }
    if (messaggio.length < 10) {
      return json(400, { error: "Messaggio troppo corto" });
    }

    const righe = [`Nome: ${nome}`, `Email: ${email}`];
    if (telefono) righe.push(`Telefono: ${telefono}`);
    righe.push("", messaggio);

    const raw = buildRawEmail({
      to: RECIPIENT,
      replyTo: email,
      subject: oggetto || `Nuovo messaggio dal sito da ${nome}`,
      body: righe.join("\n"),
    });

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`send-message fallita [${response.status}]: ${errorBody}`);
      return json(response.status, {
        error: "Invio email non riuscito",
        status: response.status,
        details: errorBody,
      });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("send-message: errore imprevisto", err);
    return json(500, { error: "Errore imprevisto durante l'invio" });
  }
});
