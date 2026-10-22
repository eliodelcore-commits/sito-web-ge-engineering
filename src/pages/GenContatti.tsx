import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { FunctionsHttpError } from "@supabase/supabase-js";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Il nome deve avere almeno 2 caratteri").max(100, "Nome troppo lungo"),
  email: z.string().trim().email("Email non valida").max(255, "Email troppo lunga"),
  messaggio: z.string().trim().min(10, "Il messaggio deve avere almeno 10 caratteri").max(2000, "Messaggio troppo lungo"),
});

// Segnaposto della sede: Via Idice 47, 40050 Monterenzio (BO)
const MAP_PLACE_ID = "ChIJO3JkS14pKxMRyfevnNDHOmk";
const MAPS_BROWSER_KEY = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
const MAP_EMBED_URL = MAPS_BROWSER_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_BROWSER_KEY}&q=place_id:${MAP_PLACE_ID}&zoom=16&maptype=roadmap`
  : "";

const GenContatti = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "", sito: "" });
  const [errors, setErrors] = useState<{ nome?: string; email?: string; messaggio?: string }>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof typeof errors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Controlla i campi del modulo");
      return;
    }
    setErrors({});
    const { nome, email, messaggio } = result.data;
    setSending(true);
    const { error } = await supabase.functions.invoke("send-message", {
      body: { nome, email, messaggio, sito: formData.sito },
    });
    setSending(false);
    if (error) {
      const details =
        error instanceof FunctionsHttpError ? await error.context.text() : error.message;
      console.error("send-message failed:", details);
      toast.error("Invio non riuscito. Riprova o scrivi a info@geenginering.com");
      return;
    }
    toast.success("Messaggio inviato: ti risponderemo al più presto.");
    setFormData({ nome: "", email: "", messaggio: "", sito: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative pt-32 pb-24 overflow-hidden bg-background flex-1">
        {/* Decorative ambient mesh background */}
        <MeshBackground
          focal={{ x: 0.18, y: 0.18 }}
          cols={72}
          rows={115}
          strokeWidth={0.22}
          nodeRadius={0.25}
          className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-90"
        />
        <div className="container mx-auto px-6 relative z-10">
          <p className="text-primary text-sm font-medium mb-2">Contatti</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Parliamone
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Hai un progetto in mente? Contattaci per una consulenza gratuita.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black"
                  placeholder="Il tuo nome"
                />
                {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black"
                  placeholder="la.tua@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Messaggio</label>
                <textarea
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none focus:bg-white focus:text-black [&:not(:placeholder-shown)]:bg-white [&:not(:placeholder-shown)]:text-black"
                  placeholder="Descrivi il tuo progetto..."
                />
                {errors.messaggio && <p className="text-destructive text-xs mt-1">{errors.messaggio}</p>}
              </div>
              {/* Trappola anti spam: non compilare questo campo */}
              <input
                type="text"
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
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Invio in corso..." : "Invia messaggio"}
              </button>
            </form>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Email</h3>
                  <a href="mailto:info@geenginering.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@geenginering.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Telefono</h3>
                  <a href="tel:+39051568908" className="text-muted-foreground text-sm hover:text-primary transition-colors">+39-051 568908</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Sede</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Idice+47%2C+40050+Monterenzio+BO%2C+Italia" target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Via Idice 47 - 40050 Monterenzio (BO)
                  </a>
                </div>
              </div>

              {MAP_EMBED_URL && (
                <div className="rounded-lg overflow-hidden border border-border bg-card">
                  <iframe
                    title="Mappa della sede: Via Idice 47, 40050 Monterenzio (BO)"
                    src={MAP_EMBED_URL}
                    className="w-full h-72"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenContatti;
