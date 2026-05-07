import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, TrendingUp, Bell, Database, Shield, Users } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import scadaBg from "@/assets/scada-bg.webp";
import touchImg from "@/assets/interfaccia-touch.jpg";

const features = [
  {
    icon: Monitor,
    title: "Supervisione in tempo reale",
    description:
      "Visualizzazione grafica dell'intero impianto con sinottici animati, stato delle macchine, valori di processo e allarmi in tempo reale.",
  },
  {
    icon: TrendingUp,
    title: "Trending storico",
    description:
      "Grafici di tendenza per analizzare l'andamento delle variabili di processo nel tempo. Esportazione dati in Excel e report automatici.",
  },
  {
    icon: Bell,
    title: "Gestione allarmi",
    description:
      "Sistema allarmi classificati per priorità con notifiche visive, acustiche e via email/SMS. Storico completo con analisi cause.",
  },
  {
    icon: Database,
    title: "Archiviazione dati",
    description:
      "Database integrato per lo storico di produzione, batch report, tracciabilità e conformità alle normative di settore.",
  },
  {
    icon: Shield,
    title: "Sicurezza e autorizzazioni",
    description:
      "Controllo accessi basato su ruoli: operatore, manutentore, responsabile produzione, amministratore. Audit trail completo.",
  },
  {
    icon: Users,
    title: "Multi-stazione",
    description:
      "Architettura client/server con fino a 32 stazioni operatore simultanee. Ridondanza server hot-standby per alta disponibilità.",
  },
];

const WinCCSCADA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${scadaBg})` }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 55%, hsl(var(--background) / 0.55) 100%)",
        }}
      />
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/progetti/scada-chimico"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Progetto SCADA chimico
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            WinCC SCADA
          </h1>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Siemens WinCC (Windows Control Center) è il sistema SCADA di riferimento per la supervisione
              degli impianti industriali. Offre una piattaforma completa per la visualizzazione, il controllo
              e l'archiviazione dei dati di processo, dalla singola macchina fino all'intero stabilimento.
            </p>

            <div className="mb-10 max-w-3xl">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                Caratteristiche principali
              </h3>
              <div className="flex flex-wrap gap-2">
                {["WinCC Runtime","Sinottici animati","Allarmi e messaggi","Trending","User Administration","Recipe Management","Report Designer","OPC-UA/DA"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Immagine interfaccia HMI */}
            <div className="mb-10 max-w-3xl">
              <img
                src={touchImg}
                alt="Interfaccia operatore WinCC SCADA su pannello touch"
                className="rounded-xl border border-border w-full"
                loading="lazy"
                width={1280}
                height={720}
              />
              <p className="text-sm text-muted-foreground mt-3">
                Esempio di interfaccia operatore su pannello touch Siemens Comfort Panel con WinCC Runtime.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Esempio sinottico SVG */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
              <h2 className="font-heading text-xl font-semibold mb-2">
                Esempio di sinottico SCADA
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Vista sintetica di una linea di produzione con stato macchine, allarmi attivi e indicazioni di processo.
              </p>

              <svg width="100%" viewBox="0 0 900 320" role="img">
                <title>Esempio sinottico WinCC SCADA — Linea produzione</title>
                <desc>Layout di una linea produttiva con serbatoi, pompe, nastri trasportatori e pannello allarmi.</desc>

                {/* Sfondo pannello */}
                <rect x="0" y="0" width="900" height="320" rx="8" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

                {/* Barra titolo */}
                <rect x="0" y="0" width="900" height="36" rx="8" fill="#0f172a"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="16" y="23">Linea Produzione LP-01 — Stabilimento Chimico</text>
                <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="720" y="23">22/05/2026  14:32:07</text>

                {/* Allarmi */}
                <rect x="12" y="48" width="200" height="80" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#fca5a5" x="24" y="66">ALLARMI ATTIVI</text>
                <rect x="24" y="76" width="176" height="18" rx="3" fill="#450a0a"/>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="30" y="88">10:42  Livello alto TK-101</text>
                <rect x="24" y="98" width="176" height="18" rx="3" fill="#451a03"/>
                <text fontFamily="inherit" fontSize="10" fill="#fcd34d" x="30" y="110">11:15  Pressione bassa P-203</text>

                {/* KPI */}
                <rect x="224" y="48" width="200" height="80" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#93c5fd" x="236" y="66">PRODUZIONE ODIERNA</text>
                <text fontFamily="inherit" fontSize="24" fontWeight="700" fill="#60a5fa" x="236" y="100">1.247</text>
                <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="310" y="100">ton</text>
                <text fontFamily="inherit" fontSize="10" fill="#4ade80" x="236" y="120">+3.2% vs ieri</text>

                {/* Serbatoio 1 */}
                <rect x="12" y="148" width="140" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="20" y="166">TK-101 — Reagente A</text>
                <rect x="30" y="178" width="50" height="56" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                <rect x="32" y="210" width="46" height="22" rx="2" fill="#2563eb" opacity="0.8"/>
                <text fontFamily="inherit" fontSize="10" fill="#F1F5F9" x="55" y="226" textAnchor="middle">78%</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="94" y="200">T: 42°C</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="94" y="216">P: 2.1 bar</text>

                {/* Pompa */}
                <rect x="168" y="148" width="80" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="176" y="166">P-201</text>
                <circle cx="208" cy="205" r="18" fill="#0f172a" stroke="#22c55e" strokeWidth="2"/>
                <text fontFamily="inherit" fontSize="10" fill="#22c55e" x="208" y="209" textAnchor="middle">ON</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="176" y="240">1450 rpm</text>

                {/* Serbatoio 2 */}
                <rect x="264" y="148" width="140" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="272" y="166">TK-102 — Reagente B</text>
                <rect x="282" y="178" width="50" height="56" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                <rect x="284" y="196" width="46" height="36" rx="2" fill="#2563eb" opacity="0.8"/>
                <text fontFamily="inherit" fontSize="10" fill="#F1F5F9" x="305" y="220" textAnchor="middle">65%</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="346" y="200">T: 38°C</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="346" y="216">P: 1.9 bar</text>

                {/* Reattore */}
                <rect x="420" y="148" width="140" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="428" y="166">RX-301 — Reattore</text>
                <rect x="438" y="178" width="60" height="56" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                <rect x="440" y="200" width="56" height="32" rx="6" fill="#16a34a" opacity="0.6"/>
                <text fontFamily="inherit" fontSize="10" fill="#F1F5F9" x="468" y="222" textAnchor="middle">RUN</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="508" y="200">T: 85°C</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="508" y="216">P: 4.5 bar</text>

                {/* Nastro */}
                <rect x="576" y="148" width="140" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="584" y="166">CV-401 — Nastro</text>
                <rect x="594" y="182" width="100" height="20" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                <rect x="596" y="184" width="20" height="16" rx="3" fill="#f59e0b" opacity="0.8">
                  <animate attributeName="x" values="596;676;596" dur="3s" repeatCount="indefinite"/>
                </rect>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="594" y="220">Vel: 1.2 m/s</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="594" y="236">Carico: 85%</text>

                {/* Silos */}
                <rect x="732" y="148" width="140" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="740" y="166">SL-501 — Silos</text>
                <polygon points="750,234 790,178 830,234" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                <polygon points="752,232 790,184 828,232" fill="#2563eb" opacity="0.6"/>
                <text fontFamily="inherit" fontSize="10" fill="#F1F5F9" x="790" y="216" textAnchor="middle">92%</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="840" y="200">T: 25°C</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="840" y="216">P: atm</text>

                {/* Pipeline */}
                <line x1="152" y1="198" x2="168" y2="198" stroke="#475569" strokeWidth="3"/>
                <line x1="248" y1="198" x2="264" y2="198" stroke="#475569" strokeWidth="3"/>
                <line x1="404" y1="198" x2="420" y2="198" stroke="#475569" strokeWidth="3"/>
                <line x1="560" y1="198" x2="576" y2="198" stroke="#475569" strokeWidth="3"/>
                <line x1="716" y1="198" x2="732" y2="198" stroke="#475569" strokeWidth="3"/>

                {/* Legenda */}
                <rect x="12" y="268" width="10" height="10" rx="2" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="28" y="277">In funzione</text>
                <rect x="110" y="268" width="10" height="10" rx="2" fill="#f59e0b"/>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="126" y="277">Stand-by</text>
                <rect x="210" y="268" width="10" height="10" rx="2" fill="#ef4444"/>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="226" y="277">Allarme</text>
                <rect x="310" y="268" width="10" height="10" rx="2" fill="#475569"/>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="326" y="277">Spento</text>
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="780" y="277">WinCC V8.0 — Siemens</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WinCCSCADA;
