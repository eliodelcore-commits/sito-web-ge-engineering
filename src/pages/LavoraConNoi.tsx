import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import { Briefcase, GraduationCap, Users, Sparkles, Mail } from "lucide-react";
import { useState } from "react";

const LavoraConNoi = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    ruolo: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Candidatura - ${formData.ruolo || "Spontanea"}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nRuolo di interesse: ${formData.ruolo}\n\n${formData.messaggio}`
    );
    window.location.href = `mailto:info@geenginering.com?subject=${subject}&body=${body}`;
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
              <p className="text-xs text-muted-foreground">
                Allega il tuo CV rispondendo all'email che si aprirà dopo l'invio.
              </p>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Invia candidatura
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
