import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoSCADAChimico = () => {
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
            Sistema SCADA stabilimento chimico
          </h1>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sviluppo sistema SCADA per il monitoraggio e controllo di un impianto chimico con oltre 2000 punti I/O.
              Architettura ridondante con server WinCC in hot-standby, Historian per l'archiviazione storica dei dati di processo,
              4 PLC di zona su rete OPC-UA con firewall perimetrale OT/IT. Sistema ESD Safety Integrated su F-CPU Siemens.
            </p>

            <div className="mb-10">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Tecnologie</h3>
              <div className="flex flex-wrap gap-2">
                {["WinCC SCADA","OPC-UA","S7-1516F Safety","Historian","ESD","HMI","Profinet","2000+ I/O"].map((tag) => (
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
                  Architettura SCADA a 4 livelli: supervisione, firewall OT/IT, rete di processo, controllo PLC e I/O di campo.
                </p>

                <svg
                  width="100%"
                  viewBox="0 0 900 410"
                  role="img"
                >
                  <title>Topologia SCADA impianto chimico</title>
                  <desc>Server SCADA ridondati, Historian, firewall OT/IT, core switch, 4 PLC di zona, 8 nodi ET200SP remoti, 2000+ punti I/O.</desc>

                  {/* Level dividers */}
                  <line x1="20" y1="106" x2="880" y2="106" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="208" x2="880" y2="208" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                  <line x1="20" y1="318" x2="880" y2="318" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="20">Livello 3 — Supervisione SCADA (rete IT)</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="190" y="122" textAnchor="middle">Perimetro sicurezza OT/IT</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="222">Livello 2 — Rete di processo (OPC-UA)</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="332">Livello 1 — Controllo PLC</text>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="476" textAnchor="middle">Livello 0 — Campo · ET200SP remoti (2000+ I/O)</text>

                  {/* SCADA Servers - Level 3 */}
                  <line x1="170" y1="62" x2="550" y2="62" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="5 3"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="58" textAnchor="middle">ridond.</text>

                  <rect x="30" y="38" width="140" height="46" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="100" y="57" textAnchor="middle" dominantBaseline="central">Server SCADA 1</text>
                  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="100" y="75" textAnchor="middle" dominantBaseline="central">WinCC Primario</text>

                  <rect x="190" y="38" width="140" height="46" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="260" y="57" textAnchor="middle" dominantBaseline="central">Server SCADA 2</text>
                  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="260" y="75" textAnchor="middle" dominantBaseline="central">WinCC Backup</text>

                  <rect x="370" y="38" width="120" height="46" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="430" y="57" textAnchor="middle" dominantBaseline="central">Historian</text>
                  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="430" y="75" textAnchor="middle" dominantBaseline="central">30.000 tag · SQL</text>

                  <rect x="530" y="38" width="140" height="46" rx="6" fill="#1f356e" stroke="#4A80F0" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="600" y="57" textAnchor="middle" dominantBaseline="central">Engineering WS</text>
                  <text fontFamily="inherit" fontSize="11" fill="#7EA8D0" x="600" y="75" textAnchor="middle" dominantBaseline="central">TIA Portal · Config.</text>

                  {/* Connections to Firewall */}
                  <path d="M100,84 L100,115" stroke="#2563EB" strokeWidth="0.8" fill="none"/>
                  <path d="M260,84 L260,100 L530,100 L530,115" stroke="#2563EB" strokeWidth="0.8" fill="none"/>
                  <path d="M430,84 L430,115" stroke="#7F77DD" strokeWidth="0.8" fill="none"/>
                  <path d="M600,84 L600,115" stroke="#4A80F0" strokeWidth="0.8" fill="none"/>

                  {/* Firewall - Level 2 */}
                  <rect x="20" y="120" width="140" height="46" rx="6" fill="#1a0e4f" stroke="#8B5CF6" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="90" y="139" textAnchor="middle" dominantBaseline="central">Firewall perimetrale</text>
                  <text fontFamily="inherit" fontSize="11" fill="#A78BFA" x="90" y="157" textAnchor="middle" dominantBaseline="central">Separazione OT / IT</text>

                  {/* Core Switch - Level 2 */}
                  <path d="M160,143 L240,143" stroke="#8B5CF6" strokeWidth="1.5"/>
                  <rect x="240" y="120" width="320" height="46" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="400" y="139" textAnchor="middle" dominantBaseline="central">Core Ethernet Switch</text>
                  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="400" y="157" textAnchor="middle" dominantBaseline="central">Rete di processo · OPC-UA · Profinet</text>

                  {/* Connections to PLC - Level 1 */}
                  <line x1="320" y1="166" x2="320" y2="198" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="400" y1="166" x2="400" y2="198" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="480" y1="166" x2="480" y2="198" stroke="#1D9E75" strokeWidth="0.8"/>
                  <line x1="560" y1="166" x2="560" y2="198" stroke="#1D9E75" strokeWidth="0.8"/>

                  {/* PLCs */}
                  <rect x="240" y="204" width="160" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="320" y="225" textAnchor="middle" dominantBaseline="central">PLC-01 Reattori</text>
                  <text fontFamily="inherit" fontSize="12" fill="#FBB07A" x="320" y="245" textAnchor="middle" dominantBaseline="central">S7-1516 · 800 I/O</text>

                  <rect x="420" y="204" width="160" height="50" rx="6" fill="#1f1a06" stroke="#A07820" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="500" y="225" textAnchor="middle" dominantBaseline="central">PLC-02 Distillaz.</text>
                  <text fontFamily="inherit" fontSize="12" fill="#F5C842" x="500" y="245" textAnchor="middle" dominantBaseline="central">S7-1515 · 500 I/O</text>

                  <rect x="600" y="204" width="160" height="50" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="680" y="225" textAnchor="middle" dominantBaseline="central">PLC-03 ESD Safety</text>
                  <text fontFamily="inherit" fontSize="12" fill="#F0997B" x="680" y="245" textAnchor="middle" dominantBaseline="central">S7-1516F · 400 I/O safe</text>

                  <rect x="720" y="204" width="160" height="50" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>
                  <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="800" y="225" textAnchor="middle" dominantBaseline="central">PLC-04 Utilities</text>
                  <text fontFamily="inherit" fontSize="12" fill="#5DCAA5" x="800" y="245" textAnchor="middle" dominantBaseline="central">S7-1515 · 300 I/O</text>

                  {/* Connections to Field Level */}
                  <path d="M320,254 V274" stroke="#D97706" strokeWidth="0.8" fill="none"/>
                  <path d="M500,254 V274" stroke="#A07820" strokeWidth="0.8" fill="none"/>
                  <path d="M680,254 V274" stroke="#D85A30" strokeWidth="0.8" fill="none"/>
                  <path d="M800,254 V274" stroke="#0F6E56" strokeWidth="0.8" fill="none"/>

                  <line x1="68" y1="274" x2="832" y2="274" stroke="#475569" strokeWidth="0.6"/>

                  {/* Field Level - ET200SP nodes */}
                  {[
                    {x:20, cx:53, fill:"#2a1506", stroke:"#D97706", sub:"#FBB07A", z:"R-01"},
                    {x:108, cx:161, fill:"#2a1506", stroke:"#D97706", sub:"#FBB07A", z:"R-02"},
                    {x:223, cx:256, fill:"#0c1e38", stroke:"#2563EB", sub:"#93C5FD", z:"D-01"},
                    {x:331, cx:364, fill:"#0c1e38", stroke:"#2563EB", sub:"#93C5FD", z:"D-02"},
                    {x:523, cx:556, fill:"#3d1208", stroke:"#D85A30", sub:"#F0997B", z:"E-01"},
                    {x:631, cx:664, fill:"#3d1208", stroke:"#D85A30", sub:"#F0997B", z:"E-02"},
                    {x:708, cx:741, fill:"#052828", stroke:"#0F6E56", sub:"#5DCAA5", z:"U-01"},
                    {x:816, cx:849, fill:"#052828", stroke:"#0F6E56", sub:"#5DCAA5", z:"U-02"},
                  ].map(({x, cx, fill, stroke, sub, z}) => (
                    <g key={z}>
                      <rect x={x} y="300" width="66" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="0.8"/>
                      <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x={cx} y="318" textAnchor="middle" dominantBaseline="central">ET200SP</text>
                      <text fontFamily="inherit" fontSize="10" fill={sub} x={cx} y="334" textAnchor="middle" dominantBaseline="central">Zona {z}</text>
                    </g>
                  ))}

                  {/* Legend */}
                  <rect x="30" y="450" width="10" height="10" rx="2" fill="#2563EB"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46" y="459">SCADA WinCC</text>

                  <rect x="150" y="450" width="10" height="10" rx="2" fill="#7F77DD"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="166" y="459">Historian</text>

                  <rect x="244" y="450" width="10" height="10" rx="2" fill="#4A80F0"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="260" y="459">Engineering WS</text>

                  <rect x="368" y="450" width="10" height="10" rx="2" fill="#8B5CF6"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="384" y="459">Firewall OT/IT</text>

                  <rect x="492" y="450" width="10" height="10" rx="2" fill="#1D9E75"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="508" y="459">Switch Profinet</text>

                  <rect x="632" y="450" width="10" height="10" rx="2" fill="#D97706"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="648" y="459">PLC Reattori</text>

                  <rect x="756" y="450" width="10" height="10" rx="2" fill="#D85A30"/>
                  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="772" y="459">ESD Safety</text>
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

export default ProgettoSCADAChimico;