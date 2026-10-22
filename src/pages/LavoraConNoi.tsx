import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import { Briefcase, GraduationCap, Users, Sparkles, Mail } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { toast } from "sonner";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(",")[1] ?? "");
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });

const LavoraConNoi = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    ruolo: "",
    messaggio: "",
    sito: "",
  });
  const [cv, setCv] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleFile = (f: File | null) => {
    if (f && !CV_TYPES.includes(f.type)) {
      toast.error("Il CV deve essere in formato PDF o Word.");
      setCv(null);
      return;
    }
    if (f && f.size > MAX_CV_BYTES) {
      toast.error("Il CV non può superare i 5 MB.");
      setCv(null);
      return;
    }
    setCv(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cv) {
      toast.error("Allega il tuo CV per inviare la candidatura.");
      return;
    }
    setSending(true);
    try {
      const base64 = await fileToBase64(cv);
      const { error } = await supabase.functions.invoke("send-message", {
        body: {
          nome: formData.nome,
          email: formData.email,
          oggetto: `Candidatura - ${formData.ruolo || "Spontanea"} - ${formData.nome}`,
          messaggio: `Ruolo di interesse: ${formData.ruolo || "Candidatura spontanea"}\n\n${formData.messaggio}`,
          sito: formData.sito,
          allegato: { nome: cv.name, tipo: cv.type, base64 },
        },
      });
      if (error) {
        const details = error instanceof FunctionsHttpError ? await error.context.text() : error.message;
        console.error("send-message failed:", details);
        let msg = "Invio non riuscito, riprova più tardi.";
        try { msg = JSON.parse(details).error || msg; } catch { /* testo semplice */ }
        toast.error(msg);
        return;
      }
      toast.success("Candidatura inviata! Ti contatteremo al più presto.");
      setFormData({ nome: "", email: "", ruolo: "", messaggio: "", sito: "" });
      setCv(null);
      setFormKey((k) => k + 1);
    } catch (err) {
      console.error(err);
      toast.error("Invio non riuscito, riprova più tardi.");
    } finally {
      setSending(false);
    }
  };

  const valori = [
    {
      icon: Briefcase,
      title: "Progetti reali",
      desc: "Lavorerai su impianti industriali e sistemi di automazione per clienti di settore.",
    },
    {
      icon: GraduationCap,
      title: "Formazione continua",
      desc: "Crescita tecnica costante su PLC, SCADA, reti wireless industriali e IoT.",
    },
    {
      icon: Users,
      title: "Team affiatato",
      desc: "Una squadra piccola dove le tue idee contano e l'ambiente è collaborativo.",
    },
    {
      icon: Sparkles,
      title: "Tecnologie attuali",
      desc: "Strumenti, brand e soluzioni leader del mercato dell'automazione industriale.",
    },
  ];

  const fieldClass =
    "w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative pt-32 pb-24 overflow-hidden bg-background flex-1">
        <MeshBackground
          focal={{ x: 0.18, y: 0.18 }}
          cols={72}
          rows={115}
          strokeWidth={0.22}
          nodeRadius={0.25}
          className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-90"
        />
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-primary text-sm font-medium mb-2">Carriere</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Lavora con noi
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Cerchiamo persone curiose, appassionate di automazione industriale e
            pronte a crescere insieme a noi. Inviaci la tua candidatura: anche
            spontanea.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {valori.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-heading text-2xl font-bold">
                Invia la tua candidatura
              </h2>
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className={fieldClass}
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={fieldClass}
                  placeholder="la.tua@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ruolo di interesse
                </label>
                <input
                  type="text"
                  value={formData.ruolo}
                  onChange={(e) => setFormData({ ...formData, ruolo: e.target.value })}
                  className={fieldClass}
                  placeholder="es. Programmatore PLC, Tecnico di campo..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Presentazione
                </label>
                <textarea
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="Raccontaci di te, della tua esperienza e perché vorresti lavorare con noi..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="cv">
                  Curriculum (PDF o Word, max 5 MB)
                </label>
                <input
                  key={formKey}
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                  required
                  className="w-full text-sm text-muted-foreground file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary file:font-medium hover:file:bg-primary/20 file:cursor-pointer"
                />
              </div>
              <input
                type="text"
                name="sito"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.sito}
                onChange={(e) => setFormData({ ...formData, sito: e.target.value })}
                className="hidden"
              />
              <button
                type="submit"
                disabled={sending}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {sending ? "Invio in corso..." : "Invia candidatura"}
              </button>
            </form>

            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Profili che cerchiamo
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Programmatori PLC (Siemens, Rockwell, Schneider)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Sviluppatori SCADA / HMI</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Tecnici di campo per assistenza e messa in servizio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Esperti di reti wireless industriali</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Tecnici elettrici</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Tecnici meccanici</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Tecnici elettromeccanici</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Stagisti e neolaureati in ingegneria</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      Candidatura diretta
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Preferisci inviare il CV direttamente via email?
                    </p>
                    <a
                      href="mailto:info@geenginering.com?subject=Candidatura%20spontanea"
                      className="text-primary text-sm hover:underline"
                    >
                      info@geenginering.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LavoraConNoi;
