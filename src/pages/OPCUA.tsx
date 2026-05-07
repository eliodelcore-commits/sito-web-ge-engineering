import { Link } from "react-router-dom";
import { ArrowLeft, Server, Network, Lock, Eye, Cpu, Layers } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import opcBg from "@/assets/automazione-software-hero.jpg";

const features = [
  {
    icon: Server,
    title: "Server OPC-UA",
    description:
      "Ogni dispositivo espone un modello informativo standardizzato: variabili, allarmi, metodi e storico accessibili da qualsiasi client compatibile.",
  },
  {
    icon: Network,
    title: "Interoperabilità",
    description:
      "Protocollo aperto e indipendente dal vendor. Collega PLC Siemens, Rockwell, Schneider, Beckhoff e sistemi SCADA/MES senza gateway proprietari.",
  },
  {
    icon: Lock,
    title: "Sicurezza integrata",
    description:
      "Certificati X.509, crittografia TLS, autenticazione utente e controllo degli accessi a livello di nodo per una comunicazione OT sicura.",
  },
  {
    icon: Eye,
    title: "Modello informativo",
    description:
      "Organizzazione dei dati in namespace gerarchici con tipi complessi, oggetti, variabili e metodi che descrivono semanticamente l'impianto.",
  },
  {
    icon: Cpu,
    title: "Pub/Sub real-time",
    description:
      "Oltre al classico client/server, OPC-UA Pub/Sub su UDP/TSN permette broadcasting deterministico per applicazioni di motion control.",
  },
  {
    icon: Layers,
    title: "Companion specifications",
    description:
      "Specifiche di accompagnamento per settori: EUROMAP per plastica, PackML per packaging, MTConnect per macchine utensili, ISA-95 per MES.",
  },
];

const OPCUA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${opcBg})` }}
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
            OPC-UA
          </h1>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              OPC Unified Architecture è lo standard industriale per l'interoperabilità
              dei dati tra macchine, PLC, sistemi SCADA e software MES/ERP. Sostituisce
              i vecchi driver proprietari con un modello informativo aperto, sicuro e scalabile
              che descrive semanticamente ogni aspetto dell'impianto.
            </p>

            <div className="mb-10 max-w-3xl">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                Caratteristiche principali
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Client/Server","Pub/Sub","Modello informativo","Sicurezza TLS","Companion specs","Namespace","Historian","Alarms&Conditions"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
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

            {/* Esempio architettura OPC-UA SVG */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
              <h2 className="font-heading text-xl font-semibold mb-2">
                Esempio di architettura OPC-UA in impianto chimico
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Server OPC-UA embedded sui PLC espongono il modello informativo verso client SCADA, MES e cloud gateway con sicurezza TLS.
              </p>

              <svg width="100%" viewBox="0 0 900 420" role="img">
                <title>Architettura OPC-UA impianto chimico</title>
                <desc>Server OPC-UA su PLC Siemens, client SCADA WinCC, gateway MES e cloud con crittografia TLS.</desc>

                {/* Sfondo */}
                <rect x="0" y="0" width="900" height="420" rx="8" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

                {/* Titolo */}
                <rect x="0" y="0" width="900" height="32" rx="8" fill="#0f172a"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="16" y="20">Architettura OPC-UA — Stabilimento Chimico</text>
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="740" y="20">Livello OT/IT convergenza</text>

                {/* Livello IT */}
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="16" y="52">Livello IT — Cloud / MES / ERP</text>
                <line x1="12" y1="56" x2="888" y2="56" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                {/* Cloud */}
                <rect x="16" y="64" width="120" height="44" rx="6" fill="#1e1040" stroke="#534AB7" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="76" y="82" textAnchor="middle">Cloud AWS</text>
                <text fontFamily="inherit" fontSize="10" fill="#C4B5FD" x="76" y="98" textAnchor="middle">Analytics · AI</text>

                {/* MES */}
                <rect x="152" y="64" width="120" height="44" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="212" y="82" textAnchor="middle">MES</text>
                <text fontFamily="inherit" fontSize="10" fill="#9FE1CB" x="212" y="98" textAnchor="middle">Ordini · Batch</text>

                {/* SCADA */}
                <rect x="288" y="64" width="120" height="44" rx="6" fill="#0f2040" stroke="#2563EB" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="348" y="82" textAnchor="middle">SCADA WinCC</text>
                <text fontFamily="inherit" fontSize="10" fill="#93C5FD" x="348" y="98" textAnchor="middle">Client OPC-UA</text>

                {/* Storico */}
                <rect x="424" y="64" width="120" height="44" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="484" y="82" textAnchor="middle">Historian</text>
                <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="484" y="98" textAnchor="middle">Time-series DB</text>

                {/* Firewall / DMZ */}
                <rect x="220" y="124" width="280" height="30" rx="5" fill="#3d0808" stroke="#991B1B" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="360" y="143" textAnchor="middle">Firewall DMZ — OPC-UA Reverse Connect / TLS 1.3</text>

                {/* Connessioni verso firewall */}
                <line x1="76" y1="108" x2="76" y2="124" stroke="#534AB7" strokeWidth="0.8"/>
                <line x1="212" y1="108" x2="212" y2="124" stroke="#1D9E75" strokeWidth="0.8"/>
                <line x1="348" y1="108" x2="348" y2="124" stroke="#2563EB" strokeWidth="0.8"/>
                <line x1="484" y1="108" x2="484" y2="124" stroke="#0F6E56" strokeWidth="0.8"/>

                {/* Livello OT */}
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="16" y="176">Livello OT — Rete di processo (OPC-UA + Profinet)</text>
                <line x1="12" y1="180" x2="888" y2="180" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                {/* Core switch */}
                <rect x="340" y="188" width="220" height="30" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="450" y="207" textAnchor="middle">Core Ethernet Switch · VLAN OT</text>

                {/* Connessioni verso switch */}
                <line x1="360" y1="154" x2="360" y2="188" stroke="#991B1B" strokeWidth="0.8" strokeDasharray="4 2"/>
                <line x1="450" y1="154" x2="450" y2="188" stroke="#991B1B" strokeWidth="0.8" strokeDasharray="4 2"/>

                {/* PLC 1 */}
                <rect x="16" y="228" width="180" height="80" rx="6" fill="#0c1e38" stroke="#2563EB" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="106" y="248" textAnchor="middle">PLC-01 Reattori</text>
                <text fontFamily="inherit" fontSize="10" fill="#93C5FD" x="106" y="264" textAnchor="middle">S7-1516 · OPC-UA Server</text>
                <rect x="30" y="274" width="152" height="22" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="106" y="288" textAnchor="middle">ns=2;s=Reattore.Temperatura</text>

                {/* PLC 2 */}
                <rect x="212" y="228" width="180" height="80" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="302" y="248" textAnchor="middle">PLC-02 Distillazione</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="302" y="264" textAnchor="middle">S7-1515 · OPC-UA Server</text>
                <rect x="226" y="274" width="152" height="22" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="302" y="288" textAnchor="middle">ns=2;s=Colonna.Pressione</text>

                {/* PLC 3 Safety */}
                <rect x="408" y="228" width="180" height="80" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="498" y="248" textAnchor="middle">PLC-03 ESD Safety</text>
                <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="498" y="264" textAnchor="middle">S7-1516F · OPC-UA Server</text>
                <rect x="422" y="274" width="152" height="22" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="498" y="288" textAnchor="middle">ns=2;s=Safety.EmergencyStop</text>

                {/* PLC 4 */}
                <rect x="604" y="228" width="180" height="80" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="694" y="248" textAnchor="middle">PLC-04 Utilities</text>
                <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="694" y="264" textAnchor="middle">S7-1515 · OPC-UA Server</text>
                <rect x="618" y="274" width="152" height="22" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="694" y="288" textAnchor="middle">ns=2;s=Utility.FlussoAcqua</text>

                {/* Gateway edge */}
                <rect x="800" y="228" width="90" height="80" rx="6" fill="#1e293b" stroke="#7F77DD" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="845" y="252" textAnchor="middle">Edge</text>
                <text fontFamily="inherit" fontSize="10" fill="#C4B5FD" x="845" y="268" textAnchor="middle">Gateway</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="845" y="288" textAnchor="middle">MQTT→OPC</text>

                {/* Connessioni PLC verso switch */}
                <line x1="106" y1="228" x2="106" y2="210" stroke="#2563EB" strokeWidth="0.8"/>
                <line x1="106" y1="210" x2="400" y2="210" stroke="#2563EB" strokeWidth="0.8"/>
                <line x1="400" y1="210" x2="400" y2="218" stroke="#2563EB" strokeWidth="0.8"/>
                <circle cx="400" cy="218" r="2" fill="#2563EB"/>

                <line x1="302" y1="228" x2="302" y2="210" stroke="#D97706" strokeWidth="0.8"/>
                <line x1="302" y1="210" x2="400" y2="210" stroke="#D97706" strokeWidth="0.8"/>

                <line x1="498" y1="228" x2="498" y2="210" stroke="#D85A30" strokeWidth="0.8"/>
                <line x1="498" y1="210" x2="500" y2="210" stroke="#D85A30" strokeWidth="0.8"/>
                <line x1="500" y1="210" x2="500" y2="218" stroke="#D85A30" strokeWidth="0.8"/>
                <circle cx="500" cy="218" r="2" fill="#D85A30"/>

                <line x1="694" y1="228" x2="694" y2="210" stroke="#0F6E56" strokeWidth="0.8"/>
                <line x1="694" y1="210" x2="500" y2="210" stroke="#0F6E56" strokeWidth="0.8"/>

                <line x1="845" y1="228" x2="845" y2="210" stroke="#7F77DD" strokeWidth="0.8"/>
                <line x1="845" y1="210" x2="500" y2="210" stroke="#7F77DD" strokeWidth="0.8"/>

                {/* Modello informativo dettaglio */}
                <rect x="16" y="328" width="400" height="80" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="28" y="346">Modello informativo OPC-UA — Namespace ns=2</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="28" y="362">Objects</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="80" y="362">└ ReattoreR101</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="180" y="362">├ Temperatura: 85.4 °C</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="180" y="376">├ Pressione: 4.52 bar</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="180" y="390">├ Livello: 78.2 %</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="180" y="404">└ Agitatore: ON · 1450 rpm</text>

                {/* Sicurezza */}
                <rect x="432" y="328" width="220" height="80" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="444" y="346">Sicurezza OPC-UA</text>
                <rect x="444" y="356" width="10" height="10" rx="2" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="460" y="364">Certificato X.509 valido</text>
                <rect x="444" y="374" width="10" height="10" rx="2" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="460" y="382">TLS 1.3 attivo</text>
                <rect x="444" y="392" width="10" height="10" rx="2" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="460" y="400">Sign&Encrypt policy</text>

                {/* Performance */}
                <rect x="668" y="328" width="220" height="80" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="680" y="346">Prestazioni rete</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="680" y="362">Campionamento variabili: 500 ms</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="680" y="376">Tag sottoscritti: 2.400</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="680" y="390">Latency media: 12 ms</text>
                <text fontFamily="inherit" fontSize="9" fill="#4ade80" x="680" y="404">Throughput: 15.000 msg/s</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OPCUA;
