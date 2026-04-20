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
            <div className="mt-16 rounded-xl border border-border bg-card p-6 md:p-10 mb-8">
              <h2 className="font-heading text-xl font-semibold mb-2">Vista topologica di rete</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Architettura IoT a 4 livelli: sensori di campo, edge gateway, broker MQTT, cloud analytics e dashboard.
                </p>

            <svg width="100%" viewBox="0 0 800 500" role="img">
                  <title>Topologia piattaforma IoT industriale</title>
                  <desc>Gateway edge, broker MQTT ridondato, InfluxDB time-series, Grafana dashboard, manutenzione predittiva.</desc>

                  {/* Level dividers */}
                  <line x1="20" y1="110" x2="780" y2="110" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="220" x2="780" y2="220" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="330" x2="780" y2="330" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                  {/* Level labels */}
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="20">Livello 3 — Analytics e visualizzazione</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="125">Livello 2 — Broker MQTT e data pipeline</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="235">Livello 1 — Edge gateway (OPC-UA → MQTT)</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="345">Livello 0 — Campo · sensori e PLC</text>

                  {/* Level 3 — Analytics */}
                  <rect x="18" y="35" width="130" height="50" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="83" y="55" textAnchor="middle" dominantBaseline="central">Grafana</text>
                  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="83" y="75" textAnchor="middle" dominantBaseline="central">Dashboard KPI</text>

                  <rect x="168" y="35" width="135" height="50" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="235" y="55" textAnchor="middle" dominantBaseline="central">Predictive ML</text>
                  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="235" y="75" textAnchor="middle" dominantBaseline="central">Anomaly detection</text>

                  <rect x="398" y="35" width="135" height="50" rx="6" fill="#1f356e" stroke="#4A80F0" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="465" y="55" textAnchor="middle" dominantBaseline="central">InfluxDB</text>
                  <text fontFamily="inherit" fontSize="11" fill="#7EA8D0" x="465" y="75" textAnchor="middle" dominantBaseline="central">Time-series DB</text>

                  <rect x="555" y="35" width="165" height="50" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="642" y="52" textAnchor="middle" dominantBaseline="central">Alerting Engine</text>
                  <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="642" y="72" textAnchor="middle" dominantBaseline="central">Soglie · email/SMS</text>

                  {/* L3 → bus */}
                  <line x1="83" y1="85" x2="83" y2="110" stroke="#2563EB" strokeWidth="0.8"/>
                  <line x1="235" y1="85" x2="235" y2="110" stroke="#7F77DD" strokeWidth="0.8"/>
                  <line x1="465" y1="85" x2="465" y2="110" stroke="#4A80F0" strokeWidth="0.8"/>
                  <line x1="642" y1="85" x2="642" y2="110" stroke="#D85A30" strokeWidth="0.8"/>

                  {/* Level 2 — MQTT Brokers */}
                  <rect x="138" y="138" width="145" height="50" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="210" y="158" textAnchor="middle" dominantBaseline="central">MQTT Broker 1</text>
                  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="210" y="178" textAnchor="middle" dominantBaseline="central">Primario · HiveMQ</text>

                  <rect x="545" y="138" width="145" height="50" rx="6" fill="#1a3010" stroke="#3B6D11" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="617" y="158" textAnchor="middle" dominantBaseline="central">MQTT Broker 2</text>
                  <text fontFamily="inherit" fontSize="11" fill="#97C459" x="617" y="178" textAnchor="middle" dominantBaseline="central">Backup · cluster</text>

                  <line x1="283" y1="163" x2="545" y2="163" stroke="#1D9E75" strokeWidth="1.2" strokeDasharray="6 3"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="414" y="158" textAnchor="middle">sync</text>

                  {/* Bus → Brokers */}
                  <line x1="210" y1="110" x2="210" y2="138" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="617" y1="110" x2="617" y2="138" stroke="#3B6D11" strokeWidth="0.8"/>

                  <line x1="210" y1="188" x2="210" y2="220" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="617" y1="188" x2="617" y2="220" stroke="#3B6D11" strokeWidth="0.8"/>

                  {/* Level 1 — Edge Gateways */}
                  <rect x="55" y="248" width="115" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="112" y="268" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="112" y="288" textAnchor="middle" dominantBaseline="central">Linea A</text>

                  <rect x="260" y="248" width="115" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="317" y="268" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="317" y="288" textAnchor="middle" dominantBaseline="central">Linea B</text>

                  <rect x="465" y="248" width="115" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="522" y="268" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="522" y="288" textAnchor="middle" dominantBaseline="central">Linea C</text>

                  <rect x="670" y="248" width="115" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="727" y="268" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="727" y="288" textAnchor="middle" dominantBaseline="central">Linea D</text>

                  {/* Bus → Edge GWs */}
                  <line x1="112" y1="220" x2="112" y2="248" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="317" y1="220" x2="317" y2="248" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="522" y1="220" x2="522" y2="248" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="727" y1="220" x2="727" y2="248" stroke="#D97706" strokeWidth="0.8"/>

                  <line x1="112" y1="298" x2="112" y2="330" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="317" y1="298" x2="317" y2="330" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="522" y1="298" x2="522" y2="330" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="727" y1="298" x2="727" y2="330" stroke="#D97706" strokeWidth="0.8"/>

                  {/* Level 0 — PLC + Sensori (8 box, spaziatura uniforme) */}
                  {[
                    { x: 15,  cx: 57 },
                    { x: 112, cx: 154 },
                    { x: 209, cx: 251 },
                    { x: 306, cx: 348 },
                    { x: 403, cx: 445 },
                    { x: 500, cx: 542 },
                    { x: 597, cx: 639 },
                    { x: 694, cx: 736 },
                  ].map(({ x, cx }, i) => (
                    <g key={i}>
                      <line x1={cx} y1="330" x2={cx} y2="355" stroke="#2A7A40" strokeWidth="0.8"/>
                      <rect x={x} y="355" width="84" height="42" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                      <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x={cx} y="372" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                      <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x={cx} y="388" textAnchor="middle" dominantBaseline="central">250 I/O</text>
                    </g>
                  ))}

                  {/* Legend */}
                  <rect x="20" y="440" width="10" height="10" rx="2" fill="#2563EB"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="36" y="449">Grafana</text>

                  <rect x="108" y="440" width="10" height="10" rx="2" fill="#7F77DD"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="124" y="449">ML Analytics</text>

                  <rect x="230" y="440" width="10" height="10" rx="2" fill="#4A80F0"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="246" y="449">InfluxDB</text>

                  <rect x="326" y="440" width="10" height="10" rx="2" fill="#D85A30"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="342" y="449">Alerting</text>

                  <rect x="410" y="440" width="10" height="10" rx="2" fill="#1D9E75"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="426" y="449">MQTT Broker</text>

                  <rect x="532" y="440" width="10" height="10" rx="2" fill="#D97706"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="548" y="449">Edge Gateway</text>

                  <rect x="662" y="440" width="10" height="10" rx="2" fill="#2A7A40"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="678" y="449">PLC + Sensori</text>
                </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoIoT;