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

                <svg width="100%" viewBox="0 0 900 400" role="img">
                  <title>Topologia piattaforma IoT industriale</title>
                  <desc>Gateway edge, broker MQTT ridondato, InfluxDB time-series, Grafana dashboard, manutenzione predittiva.</desc>

                  <line x1="20" y1="90" x2="880" y2="90" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="178" x2="880" y2="178" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="268" x2="880" y2="268" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="16">Livello 3 — Analytics e visualizzazione</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="104">Livello 2 — Broker MQTT e data pipeline</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="194">Livello 1 — Edge gateway (OPC-UA → MQTT)</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="282">Livello 0 — Campo · sensori e PLC</text>

                  <rect x="20" y="24" width="140" height="46" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="90" y="44" textAnchor="middle" dominantBaseline="central">Grafana</text>
                  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="90" y="62" textAnchor="middle" dominantBaseline="central">Dashboard KPI</text>

                  <rect x="185" y="24" width="145" height="46" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="257" y="44" textAnchor="middle" dominantBaseline="central">Predictive ML</text>
                  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="257" y="62" textAnchor="middle" dominantBaseline="central">Anomaly detection</text>

                  <rect x="430" y="24" width="145" height="46" rx="6" fill="#1f356e" stroke="#4A80F0" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="502" y="44" textAnchor="middle" dominantBaseline="central">InfluxDB</text>
                  <text fontFamily="inherit" fontSize="11" fill="#7EA8D0" x="502" y="62" textAnchor="middle" dominantBaseline="central">Time-series DB</text>

                  <rect x="600" y="24" width="180" height="46" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="690" y="40" textAnchor="middle" dominantBaseline="central">Alerting Engine</text>
                  <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="690" y="60" textAnchor="middle" dominantBaseline="central">Soglie · email/SMS</text>

                  <line x1="90" y1="70" x2="90" y2="90" stroke="#2563EB" strokeWidth="0.8"/>
                  <line x1="257" y1="70" x2="257" y2="90" stroke="#7F77DD" strokeWidth="0.8"/>
                  <line x1="502" y1="70" x2="502" y2="90" stroke="#4A80F0" strokeWidth="0.8"/>
                  <line x1="690" y1="70" x2="690" y2="90" stroke="#D85A30" strokeWidth="0.8"/>

                  <rect x="149" y="112" width="160" height="46" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="229" y="132" textAnchor="middle" dominantBaseline="central">MQTT Broker 1</text>
                  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="229" y="150" textAnchor="middle" dominantBaseline="central">Primario · HiveMQ</text>

                  <rect x="590" y="112" width="160" height="46" rx="6" fill="#1a3010" stroke="#3B6D11" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="670" y="132" textAnchor="middle" dominantBaseline="central">MQTT Broker 2</text>
                  <text fontFamily="inherit" fontSize="11" fill="#97C459" x="670" y="150" textAnchor="middle" dominantBaseline="central">Backup · cluster</text>

                  <line x1="309" y1="135" x2="590" y2="135" stroke="#1D9E75" strokeWidth="1.2" strokeDasharray="6 3"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="130" textAnchor="middle">sync</text>

                  <line x1="229" y1="90" x2="229" y2="112" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="670" y1="90" x2="670" y2="112" stroke="#3B6D11" strokeWidth="0.8"/>

                  <line x1="229" y1="158" x2="229" y2="178" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="670" y1="158" x2="670" y2="178" stroke="#3B6D11" strokeWidth="0.8"/>

                  <rect x="59" y="200" width="120" height="46" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="119" y="220" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="119" y="238" textAnchor="middle" dominantBaseline="central">Linea A</text>

                  <rect x="280" y="200" width="120" height="46" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="340" y="220" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="340" y="238" textAnchor="middle" dominantBaseline="central">Linea B</text>

                  <rect x="500" y="200" width="120" height="46" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="560" y="220" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="560" y="238" textAnchor="middle" dominantBaseline="central">Linea C</text>

                  <rect x="721" y="200" width="120" height="46" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="781" y="220" textAnchor="middle" dominantBaseline="central">Edge GW</text>
                  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="781" y="238" textAnchor="middle" dominantBaseline="central">Linea D</text>

                  <line x1="119" y1="178" x2="119" y2="200" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="340" y1="178" x2="340" y2="200" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="560" y1="178" x2="560" y2="200" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="781" y1="178" x2="781" y2="200" stroke="#D97706" strokeWidth="0.8"/>

                  <line x1="119" y1="246" x2="119" y2="268" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="340" y1="246" x2="340" y2="268" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="560" y1="246" x2="560" y2="268" stroke="#D97706" strokeWidth="0.8"/>
                  <line x1="781" y1="246" x2="781" y2="268" stroke="#D97706" strokeWidth="0.8"/>

                  <line x1="64"  y1="268" x2="64"  y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="174" y1="268" x2="174" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="285" y1="268" x2="285" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="395" y1="268" x2="395" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="505" y1="268" x2="505" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="615" y1="268" x2="615" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="725" y1="268" x2="725" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>
                  <line x1="836" y1="268" x2="836" y2="292" stroke="#2A7A40" strokeWidth="0.8"/>

                  <rect x="20"  y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="64"  y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="64"  y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="130" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="174" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="174" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="241" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="285" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="285" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="351" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="395" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="395" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="461" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="505" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="505" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="571" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="615" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="615" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="681" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="725" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="725" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="792" y="292" width="88" height="40" rx="4" fill="#1a2a10" stroke="#2A7A40" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="836" y="308" textAnchor="middle" dominantBaseline="central">PLC+Sens.</text>
                  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="836" y="324" textAnchor="middle" dominantBaseline="central">250 I/O</text>

                  <rect x="20"  y="356" width="10" height="10" rx="2" fill="#2563EB"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="36"  y="365">Grafana</text>

                  <rect x="108" y="356" width="10" height="10" rx="2" fill="#7F77DD"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="124" y="365">ML Analytics</text>

                  <rect x="230" y="356" width="10" height="10" rx="2" fill="#4A80F0"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="246" y="365">InfluxDB</text>

                  <rect x="326" y="356" width="10" height="10" rx="2" fill="#D85A30"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="342" y="365">Alerting</text>

                  <rect x="410" y="356" width="10" height="10" rx="2" fill="#1D9E75"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="426" y="365">MQTT Broker</text>

                  <rect x="532" y="356" width="10" height="10" rx="2" fill="#D97706"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="548" y="365">Edge Gateway</text>

                  <rect x="662" y="356" width="10" height="10" rx="2" fill="#2A7A40"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="678" y="365">PLC + Sensori</text>
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