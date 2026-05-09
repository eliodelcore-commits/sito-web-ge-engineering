import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, Network, ShieldCheck, Gauge, Layers, Workflow } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import siemensBg from "@/assets/siemens-bg.jpg";

const families = [
  {
    icon: Cpu,
    title: "SIMATIC S7-1500 / S7-1500F",
    description:
      "CPU di fascia alta della famiglia TIA Portal. Versione standard per controllo di processo e versione F (Fail-safe) per logiche di sicurezza fino a SIL 3 / PLe. Supporta Profinet IRT, OPC-UA server integrato e Web server.",
    tags: ["S7-1516F", "S7-1515 Motion", "S7-1518", "F-CPU"],
  },
  {
    icon: Layers,
    title: "SIMATIC S7-1200",
    description:
      "Compact controller modulare per macchine di piccola e media taglia. Profinet onboard, librerie Motion Control, integrazione nativa con HMI Basic e Comfort Panel via TIA Portal.",
    tags: ["CPU 1212C", "CPU 1214C", "CPU 1215C", "Web server"],
  },
  {
    icon: Workflow,
    title: "SIMATIC ET 200SP",
    description:
      "Sistema di I/O distribuito di nuova generazione, ultracompatto su BaseUnit. Disponibile in versione standard, ET 200SP-F (safety PROFIsafe) e ET 200SP HA per processo. Hot-swap dei moduli sotto tensione.",
    tags: ["ET200SP", "ET200SP-F", "F-DI / F-DQ", "BaseUnit"],
  },
  {
    icon: Gauge,
    title: "SIMATIC ET 200 (M / pro / eco)",
    description:
      "Famiglia completa di periferia decentrata: ET 200M modulare per quadro, ET 200pro IP65 per montaggio in campo, ET 200eco per soluzioni economiche. Tutte connesse via Profinet o Profibus.",
    tags: ["ET200M", "ET200pro", "ET200eco", "IP65"],
  },
  {
    icon: Network,
    title: "Scalance X — Switch industriali",
    description:
      "Switch managed industriali per reti Profinet. Gestione MRP per topologia ad anello (recovery <200 ms), VLAN, port mirroring, diagnostica integrata via SNMP e PROFINET. Versioni rugged per quadro e armadio.",
    tags: ["Scalance X204", "Scalance XC224", "Scalance XR500", "MRP Manager"],
  },
  {
    icon: ShieldCheck,
    title: "Scalance S / SC — Security",
    description:
      "Firewall industriali e router VPN per segregazione OT/IT, DMZ industriale e accessi remoti sicuri. Supporto IPsec, OpenVPN, regole stateful firewall, integrazione con Sinec NMS per gestione centralizzata.",
    tags: ["Scalance SC636", "Scalance S615", "VPN IPsec", "Stateful FW"],
  },
];

const ecosystem = [
  { label: "TIA Portal V18+", desc: "Engineering integrato" },
  { label: "WinCC Unified / V8", desc: "SCADA & HMI" },
  { label: "PROFINET IO", desc: "RT 1 ms · IRT 31.25 µs" },
  { label: "PROFIsafe", desc: "Safety SIL 3 su Profinet" },
  { label: "OPC-UA Server", desc: "Integrato in CPU 1500" },
  { label: "SINAMICS / SIMOTION", desc: "Drive & motion control" },
];

const Siemens = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${siemensBg})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 55%, hsl(var(--background) / 0.6) 100%)",
        }}
        aria-hidden="true"
      />
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <Link
            to="/progetti"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tutti i progetti
          </Link>

          <p className="text-primary text-sm font-medium mb-2">
            Tecnologia · Ecosistema Siemens
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            PLC & device industriali Siemens
          </h1>

          <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-3xl">
            Panoramica delle CPU SIMATIC, della periferia decentrata ET 200, degli switch industriali
            Scalance e dei componenti di rete che ricorrono nei nostri progetti di automazione.
            Tutti i tag &quot;Siemens&quot; che trovi nelle pagine di progetto puntano qui.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mb-16">
            {families.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-border bg-card/85 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {f.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-3">
              Architettura tipica di un quadro Siemens
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
              CPU S7-1500 in testa al quadro, switch Scalance per la rete Profinet ad anello,
              periferia ET 200SP distribuita verso il campo, drive SINAMICS e firewall Scalance SC
              verso la rete IT.
            </p>
            <div className="rounded-xl border border-border bg-card p-6">
              <svg width="100%" viewBox="0 0 900 360" role="img">
                <title>Architettura quadro Siemens</title>
                <desc>CPU S7-1500F, Scalance XC224 ad anello, ET200SP, SINAMICS, firewall Scalance SC.</desc>

                {/* Livelli */}
                <line x1="20" y1="60" x2="880" y2="60" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                <line x1="20" y1="170" x2="880" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                <line x1="20" y1="280" x2="880" y2="280" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="20">IT / SCADA</text>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="78">Anello Profinet — Scalance XC224</text>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="188">Controller — CPU S7-1500</text>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="298">Campo — ET200SP &amp; drive SINAMICS</text>

                {/* Firewall */}
                <rect x="370" y="22" width="160" height="32" rx="6" fill="#3a1a1a" stroke="#dc2626" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="450" y="42" textAnchor="middle">Scalance SC636 · Firewall</text>

                {/* Switch ring */}
                <rect x="120" y="90" width="140" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="190" y="108" textAnchor="middle">SW-A</text>
                <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="190" y="124" textAnchor="middle">Scalance XC224</text>

                <rect x="380" y="90" width="140" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="450" y="108" textAnchor="middle">SW-B</text>
                <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="450" y="124" textAnchor="middle">Scalance XC224 · MRP</text>

                <rect x="640" y="90" width="140" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="710" y="108" textAnchor="middle">SW-C</text>
                <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="710" y="124" textAnchor="middle">Scalance XC224</text>

                <line x1="260" y1="112" x2="380" y2="112" stroke="#1D9E75" strokeWidth="2.5"/>
                <line x1="520" y1="112" x2="640" y2="112" stroke="#1D9E75" strokeWidth="2.5"/>
                <path d="M120,112 C60,112 60,200 60,200 L60,300 L100,300" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                <path d="M780,112 C840,112 840,200 840,200 L840,300 L800,300" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>

                <line x1="450" y1="54" x2="450" y2="90" stroke="#dc2626" strokeWidth="1"/>

                {/* PLC */}
                <rect x="380" y="200" width="140" height="48" rx="5" fill="#1f1306" stroke="#C2702A"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="450" y="220" textAnchor="middle">CPU S7-1516F</text>
                <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="450" y="236" textAnchor="middle">F-CPU · OPC-UA · Web</text>
                <line x1="450" y1="134" x2="450" y2="200" stroke="#1D9E75" strokeWidth="1.5"/>

                {/* ET200SP */}
                <rect x="100" y="290" width="120" height="40" rx="4" fill="#141e30" stroke="#4A6090"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="160" y="306" textAnchor="middle">ET200SP</text>
                <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="160" y="320" textAnchor="middle">DI/DO/AI</text>

                <rect x="240" y="290" width="120" height="40" rx="4" fill="#141e30" stroke="#4A6090"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="300" y="306" textAnchor="middle">ET200SP-F</text>
                <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="300" y="320" textAnchor="middle">F-DI / F-DQ Safety</text>

                <rect x="400" y="290" width="120" height="40" rx="4" fill="#141e30" stroke="#4A6090"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="460" y="306" textAnchor="middle">ET200pro</text>
                <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="460" y="320" textAnchor="middle">IP65 in campo</text>

                <rect x="540" y="290" width="120" height="40" rx="4" fill="#2a1006" stroke="#C2702A"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="600" y="306" textAnchor="middle">SINAMICS G120</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="600" y="320" textAnchor="middle">Drive Profinet</text>

                <rect x="680" y="290" width="120" height="40" rx="4" fill="#2a1006" stroke="#C2702A"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="740" y="306" textAnchor="middle">SINAMICS S120</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="740" y="320" textAnchor="middle">Servo motion</text>

                <line x1="160" y1="290" x2="160" y2="134" stroke="#4A6090" strokeWidth="1"/>
                <line x1="300" y1="290" x2="300" y2="134" stroke="#4A6090" strokeWidth="1"/>
                <line x1="460" y1="290" x2="460" y2="248" stroke="#4A6090" strokeWidth="1"/>
                <line x1="600" y1="290" x2="600" y2="134" stroke="#C2702A" strokeWidth="1"/>
                <line x1="740" y1="290" x2="740" y2="134" stroke="#C2702A" strokeWidth="1"/>
              </svg>
            </div>
          </section>

          <section className="max-w-6xl">
            <h2 className="font-heading text-2xl font-semibold mb-6">Ecosistema correlato</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ecosystem.map((e) => (
                <div
                  key={e.label}
                  className="p-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm"
                >
                  <div className="font-heading font-semibold text-base mb-1">{e.label}</div>
                  <div className="text-xs text-muted-foreground">{e.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Siemens;
