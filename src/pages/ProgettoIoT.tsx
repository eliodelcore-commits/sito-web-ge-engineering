import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoIoT = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/progetti?cat=Automazione%20Software"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tutti i progetti
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Automazione Software</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Piattaforma IoT industriale
          </h1>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sviluppo piattaforma IoT per raccolta dati da sensori industriali con dashboard di analisi e manutenzione predittiva.
              Gateway edge su ogni linea produttiva, broker MQTT ridondato, pipeline dati verso database time-series InfluxDB
              e dashboard Grafana per visualizzazione KPI e anomalie in tempo reale.
            </p>

            <div className="mb-10">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Tecnologie</h3>
              <div className="flex flex-wrap gap-2">
                {["IoT","MQTT","InfluxDB","Grafana","Edge Gateway","Dashboard","Predictive Maintenance","OPC-UA"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* SVG Topologia */}
            <div className="rounded-xl border border-border bg-card overflow-hidden mb-8">
              <div className="px-5 py-4 border-b border-border">
                <p className="font-heading font-semibold">Vista topologica di rete</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4">
                  Architettura IoT a 4 livelli: sensori di campo, edge gateway, broker MQTT, cloud analytics e dashboard.
                </p>

                <svg width="100%" viewBox="0 0 900 430" role="img">
                  <title>Topologia piattaforma IoT industriale</title>
                  <desc>Gateway edge, broker MQTT ridondato, InfluxDB time-series, Grafana dashboard, manutenzione predittiva.</desc>

                  {/* Level dividers */}
                  <line x1="20" y1="98" x2="880" y2="98" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="190" x2="880" y2="190" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="290" x2="880" y2="290" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="18">Livello 3 — Analytics e visualizzazione</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="112">Livello 2 — Broker MQTT e data pipeline</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="212">Livello 1 — Edge gateway (OPC-UA → MQTT)</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="312">Livello 0 — Campo · sensori e PLC</text>

                  {/* Level 3 — Analytics & Dashboard */}
                  <rect x="30" y="34" width="120" height="44" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="90" y="50" textAnchor="middle" dominantBaseline="central">Grafana</text>
                  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="90" y="68" textAnchor="middle" dominantBaseline="central">Dashboard KPI</text>

                  <rect x="170" y="34" width="140" height="44" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="240" y="50" textAnchor="middle" dominantBaseline="central">Predictive ML</text>
                  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="240" y="68" textAnchor="middle" dominantBaseline="central">Anomaly detection</text>

                  <rect x="330" y="34" width="130" height="44" rx="6" fill="#1f356e" stroke="#4A80F0" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="395" y="50" textAnchor="middle" dominantBaseline="central">InfluxDB</text>
                  <text fontFamily="inherit" fontSize="11" fill="#7EA8D0" x="395" y="68" textAnchor="middle" dominantBaseline="central">Time-series DB</text>

                  <rect x="480" y="34" width="130" height="44" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="545" y="50" textAnchor="middle" dominantBaseline="central">Alerting Engine</text>
                  <text fontFamily="inherit" fontSize="11" fill="#F0997B" x="545" y="68" textAnchor="middle" dominantBaseline="central">Soglie · notifiche email/SMS</text>

                  {/* Connections to MQTT Brokers */}
                  <path d="M90,78 L90,104" stroke="#2563EB" strokeWidth="0.8" fill="none"/>
                  <path d="M240,78 L240,92 L400,92 L400,104" stroke="#7F77DD" strokeWidth="0.8" fill="none"/>
                  <path d="M395,78 L395,104" stroke="#4A80F0" strokeWidth="0.8" fill="none"/>
                  <path d="M545,78 L545,92 L400,92" stroke="#D85A30" strokeWidth="0.8" fill="none"/>

                  {/* Level 2 — MQTT Brokers */}
                  <rect x="30" y="114" width="140" height="44" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="100" y="130" textAnchor="middle" dominantBaseline="central">MQTT Broker 1</text>
                  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="100" y="148" textAnchor="middle" dominantBaseline="central">Primario · HiveMQ</text>

                  <rect x="330" y="114" width="140" height="44" rx="6" fill="#1a3010" stroke="#3B6D11" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="400" y="130" textAnchor="middle" dominantBaseline="central">MQTT Broker 2</text>
                  <text fontFamily="inherit" fontSize="11" fill="#97C459" x="400" y="148" textAnchor="middle" dominantBaseline="central">Backup · cluster</text>

                  <line x1="170" y1="136" x2="330" y2="136" stroke="#1D9E75" strokeWidth="1.5"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="250" y="130" textAnchor="middle">sync</text>

                  {/* Connections to Edge Gateways */}
                  <path d="M100,158 V174" stroke="#1D9E75" strokeWidth="0.8" fill="none"/>
                  <path d="M400,158 V174" stroke="#3B6D11" strokeWidth="0.8" fill="none"/>

                  <line x1="30" y1="174" x2="870" y2="174" stroke="#475569" strokeWidth="0.6"/>

                  {/* Level 1 — Edge Gateways */}
                  <rect x="30" y="196" width="100" height="44" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="80" y="212" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="80" y="230" textAnchor="middle" dominantBaseline="central">Linea A</text>

                  <rect x="150" y="196" width="100" height="44" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="200" y="212" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="200" y="230" textAnchor="middle" dominantBaseline="central">Linea B</text>

                  <rect x="270" y="196" width="100" height="44" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="320" y="212" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="320" y="230" textAnchor="middle" dominantBaseline="central">Linea C</text>

                  <rect x="390" y="196" width="100" height="44" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="440" y="212" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="440" y="230" textAnchor="middle" dominantBaseline="central">Linea D</text>

                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="252">OPC-UA → MQTT</text>

                  {/* Connections to Field Level */}
                  <line x1="80" y1="240" x2="80" y2="264" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="200" y1="240" x2="200" y2="264" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="320" y1="240" x2="320" y2="264" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="440" y1="240" x2="440" y2="264" stroke="#D97706" strokeWidth="0.8"/>

                  <line x1="30" y1="264" x2="870" y2="264" stroke="#475569" strokeWidth="0.6"/>

                  {/* Level 0 — Field devices */}
                  {[
                    {x:30,  cx:80,  fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:168, cx:220, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:240, cx:290, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:378, cx:430, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:448, cx:500, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:588, cx:640, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:658, cx:710, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                    {x:798, cx:850, fill:"#1a2a10", stroke:"#2A7A40", sub:"#6BC98A", lbl:"PLC+Sens."},
                  ].map(({x, cx, fill, stroke, sub, lbl}, i) => (
                    <g key={i}>
                      <rect x={x} y="280" width="100" height="40" rx="4" fill={fill} stroke={stroke} strokeWidth="0.8"/>
                      <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x={cx} y="296" textAnchor="middle" dominantBaseline="central">{lbl}</text>
                      <text fontFamily="inherit" fontSize="10" fill={sub} x={cx} y="312" textAnchor="middle" dominantBaseline="central">250 I/O</text>
                    </g>
                  ))}

                  {/* Legend */}
                  <rect x="30" y="420" width="10" height="10" rx="2" fill="#2563EB"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46" y="429">Grafana</text>

                  <rect x="110" y="420" width="10" height="10" rx="2" fill="#7F77DD"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="126" y="429">ML Analytics</text>

                  <rect x="214" y="420" width="10" height="10" rx="2" fill="#4A80F0"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="230" y="429">InfluxDB</text>

                  <rect x="308" y="420" width="10" height="10" rx="2" fill="#D85A30"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="324" y="429">Alerting</text>

                  <rect x="400" y="420" width="10" height="10" rx="2" fill="#1D9E75"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="416" y="429">MQTT Broker</text>

                  <rect x="510" y="420" width="10" height="10" rx="2" fill="#D97706"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="526" y="429">Edge Gateway</text>

                  <rect x="630" y="420" width="10" height="10" rx="2" fill="#2A7A40"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="646" y="429">PLC + Sensori</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoIoT;