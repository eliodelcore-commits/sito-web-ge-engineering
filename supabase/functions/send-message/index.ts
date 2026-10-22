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
  allegato?: unknown;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.replace(/\r\n?/g, "\n").trim().slice(0, max) : "";
}

type Attachment = { nome: string; tipo: string; base64: string };

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_ATTACHMENT_B64 = 7_000_000; // ~5 MB di file

function parseAttachment(v: unknown): Attachment | null | "invalid" {
  if (v == null) return null;
  if (typeof v !== "object") return "invalid";
  const a = v as Record<string, unknown>;
  const nome = clean(a.nome, 150).replace(/["\\\n]/g, "_");
  const tipo = clean(a.tipo, 120);
  const base64 = typeof a.base64 === "string" ? a.base64.replace(/\s/g, "") : "";
  if (!nome || !ALLOWED_TYPES.includes(tipo)) return "invalid";
  if (!base64 || base64.length > MAX_ATTACHMENT_B64 || !/^[A-Za-z0-9+/=]+$/.test(base64)) {
    return "invalid";
  }
  return { nome, tipo, base64 };
}

function buildRawEmail(args: {
  to: string;
  replyTo: string;
  subject: string;
  body: string;
  attachment?: Attachment | null;
}): string {
  const head = [
    `To: ${args.to}`,
    `Reply-To: ${args.replyTo}`,
    `Subject: ${header(args.subject)}`,
    "MIME-Version: 1.0",
  ];
  let email: string;
  if (args.attachment) {
    const boundary = `b_${crypto.randomUUID()}`;
    const a = args.attachment;
    const chunked = a.base64.match(/.{1,76}/g)?.join("\r\n") ?? "";
    email = [
      ...head,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      args.body,
      `--${boundary}`,
      `Content-Type: ${a.tipo}; name="${header(a.nome)}"`,
      `Content-Disposition: attachment; filename="${header(a.nome)}"`,
      "Content-Transfer-Encoding: base64",
      "",
      chunked,
      `--${boundary}--`,
    ].join("\r\n");
  } else {
    email = [...head, 'Content-Type: text/plain; charset="UTF-8"', "", args.body].join("\r\n");
  }
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

    const allegato = parseAttachment(payload.allegato);
    if (allegato === "invalid") {
      return json(400, { error: "Allegato non valido: usa PDF o Word fino a 5 MB" });
    }

    const righe = [`Nome: ${nome}`, `Email: ${email}`];
    if (telefono) righe.push(`Telefono: ${telefono}`);
    righe.push("", messaggio);

    const raw = buildRawEmail({
      to: RECIPIENT,
      replyTo: email,
      subject: oggetto || `Nuovo messaggio dal sito da ${nome}`,
      body: righe.join("\n"),
      attachment: allegato,
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
