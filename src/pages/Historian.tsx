import { Link } from "react-router-dom";
import { ArrowLeft, Database, TrendingUp, FileText, Search, Clock, HardDrive } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import historianBg from "@/assets/automazione-software-hero.jpg";

const features = [
  {
    icon: Database,
    title: "Archiviazione massiva",
    description:
      "Storico continuo di decine di migliaia di tag con compressione intelligente. Conservazione pluriennale dei dati di processo senza perdita di precisione.",
  },
  {
    icon: TrendingUp,
    title: "Trending avanzato",
    description:
      "Grafici di tendenza interattivi con zoom temporale, sovrapposizione di variabili eterogenee, scale multiple e correlazione tra processi.",
  },
  {
    icon: FileText,
    title: "Batch & Report",
    description:
      "Tracciabilità completa dei batch produttivi: ricette, parametri, deviazioni. Report automatici PDF/Excel per produzione, qualità e audit.",
  },
  {
    icon: Search,
    title: "Query SQL native",
    description:
      "Accesso ai dati storici via SQL standard, OPC-HA o REST API. Integrazione diretta con Power BI, Grafana, Tableau e sistemi MES/ERP.",
  },
  {
    icon: Clock,
    title: "Risoluzione temporale",
    description:
      "Campionamento configurabile da millisecondi a ore. Timestamp di alta precisione sincronizzati via NTP/PTP per analisi cause radice accurate.",
  },
  {
    icon: HardDrive,
    title: "Ridondanza dati",
    description:
      "Architettura ridondata con replica sincrona tra due Historian server. Backup automatico e disaster recovery integrati.",
  },
];

const Historian = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${historianBg})` }}
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
            Historian
          </h1>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              L'Historian è il sistema di archiviazione storica dei dati di processo:
              raccoglie continuamente milioni di valori da PLC, SCADA e sensori, li comprime
              in modo intelligente e li rende disponibili per analisi, report, manutenzione
              predittiva e conformità normativa. È la memoria a lungo termine dell'impianto.
            </p>

            <div className="mb-10 max-w-3xl">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                Caratteristiche principali
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Time-series DB","30.000+ tag","SQL / OPC-HA","Compressione swinging-door","Batch report","Audit trail","NTP/PTP sync","Ridondanza"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
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
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
              <h2 className="font-heading text-xl font-semibold mb-2">
                Esempio di trending Historian — Reattore R-101
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Andamento di temperatura, pressione e livello reattore nelle ultime 8 ore con sovrapposizione su scala temporale comune.
              </p>

              <svg width="100%" viewBox="0 0 900 360" role="img">
                <title>Trending Historian — Reattore R-101</title>
                <desc>Grafico storico con tre variabili di processo: temperatura, pressione e livello su 8 ore.</desc>

                <rect x="0" y="0" width="900" height="360" rx="8" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>
                <rect x="0" y="0" width="900" height="32" rx="8" fill="#0f172a"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="16" y="20">Historian Trend — RX-301 Reattore principale</text>
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="700" y="20">Range: 06:00 - 14:00 · 22/05/2026</text>

                <rect x="16" y="48" width="200" height="68" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="28" y="66">Tag visualizzati</text>
                <rect x="28" y="74" width="8" height="8" fill="#ef4444"/>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="42" y="82">RX301.Temperatura</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="160" y="82">°C</text>
                <rect x="28" y="88" width="8" height="8" fill="#3b82f6"/>
                <text fontFamily="inherit" fontSize="10" fill="#93c5fd" x="42" y="96">RX301.Pressione</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="160" y="96">bar</text>
                <rect x="28" y="102" width="8" height="8" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="10" fill="#86efac" x="42" y="110">RX301.Livello</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="160" y="110">%</text>

                <rect x="232" y="48" width="200" height="68" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="244" y="66">Statistiche periodo</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="244" y="82">Min/Max T:</text>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="340" y="82">62 / 92 °C</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="244" y="96">Min/Max P:</text>
                <text fontFamily="inherit" fontSize="10" fill="#93c5fd" x="340" y="96">2.1 / 4.8 bar</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="244" y="110">Campioni:</text>
                <text fontFamily="inherit" fontSize="10" fill="#86efac" x="340" y="110">28.800 valori</text>

                <rect x="448" y="48" width="220" height="68" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="460" y="66">Historian Server</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="460" y="82">Tag totali archiviati:</text>
                <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="600" y="82">30.412</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="460" y="96">Spazio occupato:</text>
                <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="600" y="96">428 GB</text>
                <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="460" y="110">Ritenzione:</text>
                <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="600" y="110">5 anni</text>

                <rect x="684" y="48" width="200" height="68" rx="6" fill="#1e1040" stroke="#534AB7" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="696" y="66">Esportazione</text>
                <rect x="696" y="74" width="50" height="20" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#C4B5FD" x="721" y="88" textAnchor="middle">CSV</text>
                <rect x="754" y="74" width="50" height="20" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#C4B5FD" x="779" y="88" textAnchor="middle">Excel</text>
                <rect x="812" y="74" width="50" height="20" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="0.5"/>
                <text fontFamily="inherit" fontSize="9" fill="#C4B5FD" x="837" y="88" textAnchor="middle">PDF</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="696" y="110">REST API · OPC-HA · SQL</text>

                <rect x="16" y="132" width="868" height="180" rx="6" fill="#0a1525" stroke="#1e293b" strokeWidth="0.8"/>
                <line x1="60" y1="150" x2="868" y2="150" stroke="#1e293b" strokeWidth="0.4"/>
                <line x1="60" y1="186" x2="868" y2="186" stroke="#1e293b" strokeWidth="0.4"/>
                <line x1="60" y1="222" x2="868" y2="222" stroke="#1e293b" strokeWidth="0.4"/>
                <line x1="60" y1="258" x2="868" y2="258" stroke="#1e293b" strokeWidth="0.4"/>
                <line x1="60" y1="294" x2="868" y2="294" stroke="#334155" strokeWidth="0.6"/>

                <text fontFamily="inherit" fontSize="9" fill="#fca5a5" x="50" y="153" textAnchor="end">100°C</text>
                <text fontFamily="inherit" fontSize="9" fill="#fca5a5" x="50" y="189" textAnchor="end">85°C</text>
                <text fontFamily="inherit" fontSize="9" fill="#fca5a5" x="50" y="225" textAnchor="end">70°C</text>
                <text fontFamily="inherit" fontSize="9" fill="#fca5a5" x="50" y="261" textAnchor="end">55°C</text>
                <text fontFamily="inherit" fontSize="9" fill="#fca5a5" x="50" y="297" textAnchor="end">40°C</text>

                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="60" y="308" textAnchor="middle">06:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="161" y="308" textAnchor="middle">07:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="262" y="308" textAnchor="middle">08:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="363" y="308" textAnchor="middle">09:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="464" y="308" textAnchor="middle">10:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="565" y="308" textAnchor="middle">11:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="666" y="308" textAnchor="middle">12:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="767" y="308" textAnchor="middle">13:00</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="868" y="308" textAnchor="middle">14:00</text>

                <path d="M60,265 L100,260 L140,250 L180,235 L220,215 L260,195 L300,180 L340,170 L380,165 L420,168 L460,175 L500,185 L540,175 L580,165 L620,170 L660,185 L700,200 L740,215 L780,225 L820,230 L868,232" stroke="#ef4444" strokeWidth="1.6" fill="none"/>
                <path d="M60,275 L100,272 L140,265 L180,255 L220,240 L260,225 L300,210 L340,200 L380,195 L420,198 L460,205 L500,212 L540,205 L580,198 L620,202 L660,212 L700,222 L740,235 L780,245 L820,255 L868,260" stroke="#3b82f6" strokeWidth="1.6" fill="none"/>
                <path d="M60,250 L100,245 L140,238 L180,228 L220,220 L260,212 L300,205 L340,200 L380,198 L420,200 L460,205 L500,210 L540,212 L580,210 L620,208 L660,205 L700,200 L740,195 L780,192 L820,190 L868,188" stroke="#22c55e" strokeWidth="1.6" fill="none"/>

                <line x1="380" y1="140" x2="380" y2="294" stroke="#facc15" strokeWidth="0.8" strokeDasharray="3 3"/>
                <text fontFamily="inherit" fontSize="9" fill="#facc15" x="383" y="148">Batch B-2451 start</text>
                <line x1="660" y1="140" x2="660" y2="294" stroke="#facc15" strokeWidth="0.8" strokeDasharray="3 3"/>
                <text fontFamily="inherit" fontSize="9" fill="#facc15" x="663" y="148">Batch B-2451 end</text>

                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="16" y="334">Aggregazione: media 1 min · Compressione: swinging-door 0.5%</text>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="600" y="334">Latenza ingestione media: 850 ms</text>
                <text fontFamily="inherit" fontSize="9" fill="#4ade80" x="800" y="334">● Server primario online</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Historian;