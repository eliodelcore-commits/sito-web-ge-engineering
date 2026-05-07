import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import scadaBg from "@/assets/scada-bg.webp";

const WinCCSCADALinea = () => {
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
              to="/progetti/linea-automatizzata"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Progetto linea automatizzata
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            WinCC SCADA — Linea automatizzata
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Sinottico operatore WinCC dedicato a una linea di produzione automatizzata:
            ingresso prodotto, stazioni di lavoro robotizzate, sistema di visione per
            controllo qualità, scarto pezzi NOK e palettizzazione finale.
            I dati arrivano dai 12 PLC S7 via Profinet e vengono pubblicati alle
            stazioni operatore in ridondanza hot-standby.
          </p>

          <div className="rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Esempio di sinottico — Linea LP-A02
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Vista completa della linea: stato stazioni, contatori OEE, allarmi e flusso pezzi in tempo reale.
            </p>

            <svg width="100%" viewBox="0 0 900 420" role="img">
              <title>Sinottico WinCC — Linea automatizzata LP-A02</title>
              <desc>Linea con 4 stazioni robotizzate, visione, scarto NOK e palettizzatore.</desc>

              <rect x="0" y="0" width="900" height="420" rx="10" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

              {/* Top bar */}
              <rect x="0" y="0" width="900" height="36" rx="10" fill="#0f172a"/>
              <circle cx="22" cy="18" r="6" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="38" y="23">Linea LP-A02 — Assemblaggio &amp; Palettizzazione</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="640" y="23">Server: WCS-01 (primario)</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="800" y="23">14:32:07</text>

              {/* KPI bar */}
              <rect x="12" y="48" width="170" height="60" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
              <text fontFamily="inherit" fontSize="10" fill="#93c5fd" x="22" y="64">PEZZI / TURNO</text>
              <text fontFamily="inherit" fontSize="22" fontWeight="700" fill="#60a5fa" x="22" y="92">8.412</text>
              <text fontFamily="inherit" fontSize="10" fill="#4ade80" x="100" y="92">▲ +2.4%</text>

              <rect x="190" y="48" width="170" height="60" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="200" y="64">OEE</text>
              <text fontFamily="inherit" fontSize="22" fontWeight="700" fill="#22c55e" x="200" y="92">87,3 %</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="278" y="92">target 85%</text>

              <rect x="368" y="48" width="170" height="60" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
              <text fontFamily="inherit" fontSize="10" fill="#fcd34d" x="378" y="64">SCARTO NOK</text>
              <text fontFamily="inherit" fontSize="22" fontWeight="700" fill="#facc15" x="378" y="92">1,2 %</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="446" y="92">102 pezzi</text>

              <rect x="546" y="48" width="342" height="60" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.6"/>
              <text fontFamily="inherit" fontSize="10" fontWeight="600" fill="#fca5a5" x="556" y="64">ALLARMI ATTIVI</text>
              <rect x="556" y="72" width="320" height="14" rx="2" fill="#450a0a"/>
              <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="562" y="82">14:21  ST-03 Robot timeout ciclo (ack richiesto)</text>
              <rect x="556" y="89" width="320" height="14" rx="2" fill="#451a03"/>
              <text fontFamily="inherit" fontSize="10" fill="#fcd34d" x="562" y="99">14:08  Visione VIS-01 luminosità sotto soglia</text>

              {/* Conveyor backbone */}
              <rect x="40" y="220" width="820" height="22" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="0.8"/>
              <rect x="44" y="222" width="20" height="18" rx="2" fill="#f59e0b" opacity="0.85">
                <animate attributeName="x" values="44;820;44" dur="6s" repeatCount="indefinite"/>
              </rect>
              <rect x="44" y="222" width="20" height="18" rx="2" fill="#3b82f6" opacity="0.85">
                <animate attributeName="x" values="44;820;44" dur="6s" begin="-2s" repeatCount="indefinite"/>
              </rect>
              <rect x="44" y="222" width="20" height="18" rx="2" fill="#22c55e" opacity="0.85">
                <animate attributeName="x" values="44;820;44" dur="6s" begin="-4s" repeatCount="indefinite"/>
              </rect>
              <text fontFamily="inherit" fontSize="10" fill="#64748B" x="40" y="258">CV-100 · Nastro principale · 1,2 m/s</text>

              {/* Stations */}
              {/* ST-01 Carico */}
              <rect x="40" y="138" width="150" height="78" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="50" y="156">ST-01 · Carico</text>
              <circle cx="62" cy="178" r="9" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="78" y="182">RUN</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="50" y="202">Ciclo: 4,8 s</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="118" y="202">PLC-01</text>
              <line x1="115" y1="216" x2="115" y2="220" stroke="#475569" strokeWidth="2"/>

              {/* ST-02 Robot */}
              <rect x="208" y="138" width="150" height="78" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="218" y="156">ST-02 · Robot pick</text>
              <circle cx="230" cy="178" r="9" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="246" y="182">RUN</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="218" y="202">Ciclo: 5,1 s</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="288" y="202">PLC-04</text>
              <line x1="283" y1="216" x2="283" y2="220" stroke="#475569" strokeWidth="2"/>

              {/* ST-03 Robot in ALARM */}
              <rect x="376" y="138" width="150" height="78" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="1.4"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="386" y="156">ST-03 · Robot avvita</text>
              <circle cx="398" cy="178" r="9" fill="#ef4444">
                <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
              </circle>
              <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="414" y="182">ALARM</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="386" y="202">Timeout 6,5s</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="456" y="202">PLC-07</text>
              <line x1="451" y1="216" x2="451" y2="220" stroke="#475569" strokeWidth="2"/>

              {/* ST-04 Visione */}
              <rect x="544" y="138" width="150" height="78" rx="6" fill="#1e293b" stroke="#facc15" strokeWidth="1"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="554" y="156">VIS-01 · Visione QC</text>
              <circle cx="566" cy="178" r="9" fill="#facc15"/>
              <text fontFamily="inherit" fontSize="10" fill="#fde68a" x="582" y="182">WARN</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="554" y="202">OK 98,8%</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="624" y="202">PLC-10</text>
              <line x1="619" y1="216" x2="619" y2="220" stroke="#475569" strokeWidth="2"/>

              {/* Palettizzatore */}
              <rect x="712" y="138" width="148" height="78" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="722" y="156">PAL-01 · Palettizzatore</text>
              <circle cx="734" cy="178" r="9" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="750" y="182">RUN</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="722" y="202">Pallet: 23/30</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="800" y="202">PLC-12</text>
              <line x1="786" y1="216" x2="786" y2="220" stroke="#475569" strokeWidth="2"/>

              {/* NOK reject */}
              <rect x="544" y="262" width="150" height="58" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#fca5a5" x="554" y="280">Scarto NOK</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="554" y="298">Pezzi turno: 102</text>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="554" y="312">Cassetta: 78%</text>
              <line x1="619" y1="242" x2="619" y2="262" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3"/>

              {/* Output / pallets */}
              <rect x="712" y="262" width="148" height="58" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="722" y="280">Magazzino uscita</text>
              <rect x="722" y="290" width="20" height="20" rx="2" fill="#3b82f6" opacity="0.7"/>
              <rect x="746" y="290" width="20" height="20" rx="2" fill="#3b82f6" opacity="0.7"/>
              <rect x="770" y="290" width="20" height="20" rx="2" fill="#3b82f6" opacity="0.7"/>
              <rect x="794" y="290" width="20" height="20" rx="2" fill="#475569" opacity="0.7"/>
              <rect x="818" y="290" width="20" height="20" rx="2" fill="#475569" opacity="0.7"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="722" y="318">3 pallet pronti · 2 in coda</text>
              <line x1="786" y1="242" x2="786" y2="262" stroke="#475569" strokeWidth="2"/>

              {/* Bottom bar - server status */}
              <rect x="12" y="350" width="876" height="56" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8"/>
              <text fontFamily="inherit" fontSize="10" fill="#64748B" x="22" y="368">Architettura SCADA</text>
              <circle cx="28" cy="384" r="5" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="40" y="388">WCS-01 primario · 12/12 PLC online</text>
              <circle cx="280" cy="384" r="5" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="292" y="388">WCS-02 hot-standby sincronizzato</text>
              <circle cx="540" cy="384" r="5" fill="#3B82F6"/>
              <text fontFamily="inherit" fontSize="10" fill="#93c5fd" x="552" y="388">3 stazioni operatore connesse</text>
              <text fontFamily="inherit" fontSize="10" fill="#64748B" x="760" y="388">WinCC V8.0 · Siemens</text>

              {/* Legenda */}
              <rect x="12" y="266" width="10" height="10" rx="2" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="28" y="275">Run</text>
              <rect x="12" y="282" width="10" height="10" rx="2" fill="#facc15"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="28" y="291">Warning</text>
              <rect x="12" y="298" width="10" height="10" rx="2" fill="#ef4444"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="28" y="307">Allarme</text>
              <rect x="12" y="314" width="10" height="10" rx="2" fill="#475569"/>
              <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="28" y="323">Spento</text>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WinCCSCADALinea;