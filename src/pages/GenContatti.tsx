import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const GenContatti = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Messaggio inviato! Ti ricontatteremo presto.");
    setFormData({ nome: "", email: "", messaggio: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative pt-32 pb-24 overflow-hidden bg-background flex-1">
        {/* Decorative ambient mesh background */}
        <MeshBackground
          focal={{ x: 0.18, y: 0.18 }}
          cols={80}
          rows={130}
          strokeWidth={0.22}
          nodeRadius={0.45}
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
                  required
                  className="contact-input w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                  className="contact-input w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="la.tua@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Messaggio</label>
                <textarea
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  required
                  rows={5}
                  className="contact-input w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Descrivi il tuo progetto..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Invia messaggio
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
                    href="https://www.google.com/maps/search/?api=1&query=Via+Idice+47%2C+40050+Monterenzio+BO%2C+Italia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Via Idice 47 - 40050 Monterenzio (BO)
                  </a>
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

export default GenContatti;
