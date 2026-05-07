import { Link } from "react-router-dom";
import { ArrowLeft, Monitor, Hand, Bell, Languages, ShieldCheck, Layers } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import hmiBg from "@/assets/automazione-software-hero.jpg";

const features = [
  {
    icon: Monitor,
    title: "Sinottici di processo",
    description:
      "Pagine grafiche vettoriali che rappresentano impianto, linee, reattori e flussi in tempo reale, con animazioni di stato, allarmi e setpoint editabili.",
  },
  {
    icon: Hand,
    title: "Touch & gesture",
    description:
      "Pannelli touch industriali multi-touch con gesture, tastiere virtuali, popup numerici e conferme operatore per comandi critici.",
  },
  {
    icon: Bell,
    title: "Allarmi & eventi",
    description:
      "Lista allarmi con priorità, ack, filtro per area e archivio storico. Notifiche acustiche e relè verso torrette luminose.",
  },
  {
    icon: Languages,
    title: "Multilingua",
    description:
      "Cambio lingua a runtime (IT/EN/DE), unità di misura configurabili, gestione fuso orario per impianti su più siti.",
  },
  {
    icon: ShieldCheck,
    title: "Utenti & ruoli",
    description:
      "Login operatore/manutentore/admin con audit trail su ogni comando. Lockout automatico, password policy e firma elettronica.",
  },
  {
    icon: Layers,
    title: "Integrazione SCADA",
    description:
      "Tag condivisi via OPC-UA con SCADA e PLC. Comune al WinCC server: stesse variabili, stessi allarmi, coerenza dato di campo.",
  },
];

const HMI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${hmiBg})` }}
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
              to="/progetti"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tutti i progetti
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">HMI</h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            L'HMI (Human-Machine Interface) è l'interfaccia operatore di campo o
            postazione: pannelli touch industriali e applicazioni SCADA che
            permettono di visualizzare lo stato dell'impianto, gestire allarmi,
            modificare ricette e parametri, e impartire comandi al PLC in modo
            sicuro e tracciato.
          </p>

          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
              Caratteristiche principali
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Touch industriale",
                "Sinottici vettoriali",
                "Allarmi con ack",
                "Multilingua IT/EN/DE",
                "Audit trail comandi",
                "OPC-UA",
                "Profinet",
                "WinCC Unified / TIA",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Esempio di pannello HMI — Reattore R-101
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Sinottico operatore con sinottico di processo, setpoint editabili,
              barra allarmi e comandi START/STOP/RESET.
            </p>

            <svg width="100%" viewBox="0 0 900 480" role="img">
              <title>Pannello HMI — Reattore R-101</title>
              <desc>Esempio di sinottico operatore con valori di processo, allarmi e comandi.</desc>

              <rect x="0" y="0" width="900" height="480" rx="10" fill="#0b1220" stroke="#1e293b" strokeWidth="1" />

              {/* Top bar */}
              <rect x="0" y="0" width="900" height="44" rx="10" fill="#0f172a" />
              <circle cx="22" cy="22" r="6" fill="#22c55e" />
              <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="38" y="27">RX-301 · Reattore principale</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="640" y="27">Operatore: M.Rossi</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="780" y="27">22/05/2026 14:08</text>

              {/* Left: process mimic */}
              <rect x="20" y="60" width="520" height="320" rx="8" fill="#0a1525" stroke="#1e293b" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="32" y="80">Sinottico di processo</text>

              {/* Tank */}
              <rect x="180" y="120" width="200" height="220" rx="14" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <rect x="184" y="220" width="192" height="116" rx="10" fill="#1e3a5f" />
              <rect x="184" y="220" width="192" height="6" fill="#3B82F6" />
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="280" y="115" textAnchor="middle">RX-301</text>
              <text fontFamily="inherit" fontSize="22" fontWeight="700" fill="#F1F5F9" x="280" y="285" textAnchor="middle">68%</text>
              <text fontFamily="inherit" fontSize="11" fill="#93c5fd" x="280" y="305" textAnchor="middle">Livello</text>

              {/* Inlet pipe + valve */}
              <line x1="60" y1="150" x2="180" y2="150" stroke="#475569" strokeWidth="6" />
              <polygon points="105,150 130,138 130,162" fill="#22c55e" stroke="#0F6E56" strokeWidth="1" />
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="118" y="178" textAnchor="middle">V-101 OPEN</text>

              {/* Outlet pipe + valve */}
              <line x1="380" y1="320" x2="500" y2="320" stroke="#475569" strokeWidth="6" />
              <polygon points="425,320 450,308 450,332" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1" />
              <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="438" y="348" textAnchor="middle">V-102 CLOSED</text>

              {/* Stirrer */}
              <circle cx="280" cy="170" r="14" fill="#1e293b" stroke="#3B82F6" strokeWidth="1.2" />
              <line x1="266" y1="170" x2="294" y2="170" stroke="#93c5fd" strokeWidth="2" />
              <text fontFamily="inherit" fontSize="10" fill="#93c5fd" x="280" y="195" textAnchor="middle">M-01 · 320 rpm</text>

              {/* Sensor labels */}
              <rect x="40" y="240" width="120" height="58" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.6" />
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="50" y="258">TT-301 Temp</text>
              <text fontFamily="inherit" fontSize="18" fontWeight="700" fill="#fca5a5" x="50" y="280">82.4 °C</text>

              <rect x="400" y="120" width="120" height="58" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.6" />
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="410" y="138">PT-301 Press</text>
              <text fontFamily="inherit" fontSize="18" fontWeight="700" fill="#93c5fd" x="410" y="160">3.2 bar</text>

              {/* Right: setpoints */}
              <rect x="560" y="60" width="320" height="200" rx="8" fill="#0a1525" stroke="#1e293b" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="572" y="80">Setpoint operatore</text>

              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="572" y="108">Temperatura SP</text>
              <rect x="572" y="116" width="200" height="30" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="582" y="136">85.0 °C</text>
              <rect x="780" y="116" width="44" height="30" rx="4" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#93c5fd" x="802" y="137" textAnchor="middle">−</text>
              <rect x="830" y="116" width="44" height="30" rx="4" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#93c5fd" x="852" y="137" textAnchor="middle">+</text>

              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="572" y="170">Velocità agitatore</text>
              <rect x="572" y="178" width="200" height="30" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="582" y="198">320 rpm</text>
              <rect x="780" y="178" width="44" height="30" rx="4" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#93c5fd" x="802" y="199" textAnchor="middle">−</text>
              <rect x="830" y="178" width="44" height="30" rx="4" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#93c5fd" x="852" y="199" textAnchor="middle">+</text>

              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="572" y="232">Ricetta attiva</text>
              <rect x="572" y="240" width="302" height="14" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.6" />
              <text fontFamily="inherit" fontSize="10" fill="#C4B5FD" x="582" y="251">RIC-014 · Polimero standard</text>

              {/* Commands */}
              <rect x="560" y="278" width="320" height="102" rx="8" fill="#0a1525" stroke="#1e293b" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="572" y="298">Comandi</text>
              <rect x="572" y="310" width="92" height="56" rx="6" fill="#052e16" stroke="#22c55e" strokeWidth="1.2" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#86efac" x="618" y="345" textAnchor="middle">START</text>
              <rect x="676" y="310" width="92" height="56" rx="6" fill="#3d0a0a" stroke="#ef4444" strokeWidth="1.2" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#fca5a5" x="722" y="345" textAnchor="middle">STOP</text>
              <rect x="780" y="310" width="92" height="56" rx="6" fill="#1e1b4b" stroke="#7F77DD" strokeWidth="1.2" />
              <text fontFamily="inherit" fontSize="14" fontWeight="700" fill="#C4B5FD" x="826" y="345" textAnchor="middle">RESET</text>

              {/* Alarm bar */}
              <rect x="20" y="395" width="860" height="68" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="32" y="413">Allarmi attivi</text>
              <circle cx="42" cy="434" r="5" fill="#ef4444" />
              <text fontFamily="inherit" fontSize="11" fill="#fca5a5" x="54" y="438">14:06:22 · TT-301 Alta temperatura · 82.4 °C &gt; 80 °C</text>
              <rect x="780" y="422" width="80" height="26" rx="4" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8" />
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#93c5fd" x="820" y="439" textAnchor="middle">ACK</text>
              <circle cx="42" cy="455" r="4" fill="#facc15" />
              <text fontFamily="inherit" fontSize="10" fill="#fde68a" x="54" y="458">13:58:11 · V-102 chiusa &gt; 5 min con livello &gt; 60% (warning)</text>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HMI;