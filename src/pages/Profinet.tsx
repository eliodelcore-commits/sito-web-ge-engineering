import { Link } from "react-router-dom";
import { ArrowLeft, Network, Zap, Shield, Layers, Activity, GitBranch } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import bg from "@/assets/profinet-bg.jpg";

const features = [
  {
    icon: Zap,
    title: "Real-time deterministico",
    description:
      "Profinet IRT garantisce tempi di ciclo fino a 31,25 µs con jitter < 1 µs, indispensabile per motion control e sincronizzazione assi.",
  },
  {
    icon: Layers,
    title: "Ethernet standard",
    description:
      "Basato su Ethernet TCP/IP standard: stessi cavi, switch e protocolli di rete IT. Coesistenza nativa con HTTP, OPC-UA, web server diagnostici.",
  },
  {
    icon: Network,
    title: "Topologia flessibile",
    description:
      "Stella, linea, anello (MRP) o albero. Supporta media in rame, fibra ottica e wireless con gli stessi profili di comunicazione.",
  },
  {
    icon: Shield,
    title: "PROFIsafe integrato",
    description:
      "Profilo safety SIL 3 / Cat. 4 PL e che viaggia sullo stesso cavo del traffico standard. Black-channel principle, nessun cablaggio dedicato.",
  },
  {
    icon: Activity,
    title: "Diagnostica profonda",
    description:
      "Allarmi diagnostici per modulo/canale, identificazione I&M, sostituzione device senza programmatore (LLDP topology check).",
  },
  {
    icon: GitBranch,
    title: "Ridondanza MRP",
    description:
      "Media Redundancy Protocol con tempi di riconfigurazione < 200 ms su anello. S2/R1 system redundancy per controller ridondati H/F.",
  },
];

const Profinet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
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

          <p className="text-primary text-sm font-medium mb-2">Tecnologia · Bus di campo</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Profinet
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Profinet è lo standard Ethernet industriale aperto (IEC 61158 / 61784) per
            l'automazione di fabbrica e di processo. Combina la velocità e la
            determinazione del real-time industriale con la compatibilità totale con
            l'Ethernet standard TCP/IP, permettendo di trasportare sullo stesso cavo
            traffico di campo, safety (PROFIsafe), motion control (IRT), diagnostica e
            connessioni IT verso MES/ERP.
          </p>

          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
              Caratteristiche principali
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "RT (1 ms)",
                "IRT (31,25 µs)",
                "PROFIsafe SIL 3",
                "MRP < 200 ms",
                "S2 / R1 ridondanza",
                "GSDML device",
                "LLDP topology",
                "TSN ready",
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

          <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl mb-8">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Classi di comunicazione Profinet
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tre livelli di servizio coesistono sullo stesso cavo: NRT per
              parametrizzazione e diagnostica, RT per dati ciclici di processo,
              IRT per motion control sincrono.
            </p>

            <svg width="100%" viewBox="0 0 900 240" role="img">
              <title>Classi Profinet — NRT, RT, IRT</title>
              <rect x="0" y="0" width="900" height="240" rx="10" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

              <rect x="20" y="24" width="270" height="200" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="700" fill="#93c5fd" x="36" y="48">NRT — Standard</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="36" y="72">Ciclo: &gt; 100 ms</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="36" y="92">Stack TCP/IP completo</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="36" y="112">Web server, OPC-UA, HTTP</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="36" y="132">Parametrizzazione, diagnostica</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="36" y="172">Esempio: lettura parametri</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="36" y="188">drive da supervisore PC</text>

              <rect x="312" y="24" width="270" height="200" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="700" fill="#86efac" x="328" y="48">RT — Real-Time</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="328" y="72">Ciclo: 1 - 10 ms</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="328" y="92">Bypassa stack TCP/IP</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="328" y="112">Priorità VLAN 802.1Q</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="328" y="132">Dati ciclici I/O di processo</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="328" y="172">Esempio: PLC ↔ ET200SP,</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="328" y="188">PLC ↔ MOVIDRIVE</text>

              <rect x="604" y="24" width="276" height="200" rx="8" fill="#1e293b" stroke="#facc15" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="700" fill="#fde68a" x="620" y="48">IRT — Isochronous</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="620" y="72">Ciclo: 31,25 µs - 1 ms</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="620" y="92">Jitter &lt; 1 µs · slot temporali</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="620" y="112">Switch ASIC dedicati (ERTEC)</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="620" y="132">Sincronizzazione assi multipli</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="620" y="172">Esempio: motion control</text>
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="620" y="188">cambio elettrico, robot, CNC</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Esempio di topologia ad anello con MRP
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Anello Profinet con 4 switch Scalance e Media Redundancy Protocol:
              in caso di rottura di un tratto, il manager riconfigura il percorso in &lt; 200 ms
              senza perdita di comunicazione I/O.
            </p>

            <svg width="100%" viewBox="0 0 900 380" role="img">
              <title>Anello Profinet con MRP</title>
              <desc>Topologia ad anello con 4 switch Scalance e PLC controller.</desc>
              <rect x="0" y="0" width="900" height="380" rx="10" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

              {/* PLC */}
              <rect x="380" y="30" width="140" height="56" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="1"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="450" y="54" textAnchor="middle">S7-1516F</text>
              <text fontFamily="inherit" fontSize="11" fill="#F0997B" x="450" y="72" textAnchor="middle">MRP Manager</text>

              {/* Ring switches positions */}
              {[
                { x: 200, y: 170, id: "SW-01" },
                { x: 700, y: 170, id: "SW-02" },
                { x: 200, y: 280, id: "SW-03" },
                { x: 700, y: 280, id: "SW-04" },
              ].map((sw) => (
                <g key={sw.id}>
                  <rect x={sw.x - 60} y={sw.y - 22} width="120" height="44" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="1"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x={sw.x} y={sw.y - 4} textAnchor="middle">Scalance X</text>
                  <text fontFamily="inherit" fontSize="10" fill="#9FE1CB" x={sw.x} y={sw.y + 12} textAnchor="middle">{sw.id}</text>
                </g>
              ))}

              {/* PLC down to ring */}
              <line x1="450" y1="86" x2="450" y2="120" stroke="#1D9E75" strokeWidth="1.4"/>
              <line x1="200" y1="120" x2="700" y2="120" stroke="#1D9E75" strokeWidth="1.4"/>
              <line x1="200" y1="120" x2="200" y2="148" stroke="#1D9E75" strokeWidth="1.4"/>
              <line x1="700" y1="120" x2="700" y2="148" stroke="#1D9E75" strokeWidth="1.4"/>

              {/* Ring connections */}
              <line x1="200" y1="192" x2="200" y2="258" stroke="#1D9E75" strokeWidth="1.4"/>
              <line x1="700" y1="192" x2="700" y2="258" stroke="#1D9E75" strokeWidth="1.4"/>
              <line x1="200" y1="280" x2="700" y2="280" stroke="#facc15" strokeWidth="1.4" strokeDasharray="6 4"/>
              <text fontFamily="inherit" fontSize="10" fill="#fde68a" x="450" y="274" textAnchor="middle">tratto in standby (MRP)</text>

              {/* Devices */}
              {[
                { x: 80, y: 170, label: "ET200SP", sub: "I/O reattore" },
                { x: 820, y: 170, label: "MOVIDRIVE", sub: "Drive 01" },
                { x: 80, y: 280, label: "ET200SP-F", sub: "Safety" },
                { x: 820, y: 280, label: "Robot", sub: "Cobot 01" },
              ].map((d) => (
                <g key={d.label + d.x}>
                  <line
                    x1={d.x < 450 ? 140 : 760}
                    y1={d.y}
                    x2={d.x < 450 ? d.x + 40 : d.x - 40}
                    y2={d.y}
                    stroke="#475569"
                    strokeWidth="1"
                  />
                  <rect x={d.x - 40} y={d.y - 18} width="80" height="36" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="10" fontWeight="600" fill="#F1F5F9" x={d.x} y={d.y - 2} textAnchor="middle">{d.label}</text>
                  <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x={d.x} y={d.y + 12} textAnchor="middle">{d.sub}</text>
                </g>
              ))}

              {/* Legend */}
              <line x1="20" y1="350" x2="50" y2="350" stroke="#1D9E75" strokeWidth="1.4"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="58" y="354">Tratto attivo Profinet RT/IRT</text>
              <line x1="280" y1="350" x2="310" y2="350" stroke="#facc15" strokeWidth="1.4" strokeDasharray="6 4"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="318" y="354">Tratto standby (MRP)</text>
              <text fontFamily="inherit" fontSize="10" fill="#64748B" x="700" y="354">Riconfigurazione &lt; 200 ms</text>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profinet;