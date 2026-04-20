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

          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Sviluppo sistema SCADA per il monitoraggio e controllo di un impianto chimico con oltre 2000 punti I/O.
              Architettura ridondante con server WinCC in hot-standby, Historian per l'archiviazione storica dei dati di processo,
              4 PLC di zona su rete OPC-UA con firewall perimetrale OT/IT. Sistema ESD Safety Integrated su F-CPU Siemens.
            </p>

            <div className="mb-10 max-w-3xl">
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
            <div className="mt-16 rounded-xl border border-border bg-card p-6 md:p-10 mb-8">
              <h2 className="font-heading text-xl font-semibold mb-2">Vista topologica di rete</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Architettura SCADA a 4 livelli: supervisione, firewall OT/IT, rete di processo, controllo PLC e I/O di campo.
                </p>

<svg width="100%" viewBox="0 0 900 410" role="img">

  <title>Sistema SCADA stabilimento chimico — Topologia</title>

  <desc>Server SCADA ridondati, Historian, firewall OT/IT, core switch, 4 PLC di zona, 8 nodi ET200SP remoti.</desc>

  <line x1="30" y1="92" x2="870" y2="92" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <line x1="30" y1="162" x2="870" y2="162" stroke="#7f1d1d" strokeWidth="0.5" strokeDasharray="2 2"/>

  <line x1="30" y1="228" x2="870" y2="228" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <line x1="30" y1="314" x2="870" y2="314" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="20">Livello 3 — Supervisione SCADA (rete IT)</text>

  <text fontFamily="inherit" fontSize="11" fill="#7f1d1d" x="30" y="108">Perimetro sicurezza OT/IT</text>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="178">Livello 2 — Rete di processo (OPC-UA)</text>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="244">Livello 1 — Controllo PLC</text>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="328">Livello 0 — Campo · ET200SP remoti (2000+ I/O)</text>

  <line x1="175" y1="52" x2="197" y2="52" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 2"/>

  <text fontFamily="inherit" fontSize="10" fill="#64748B" x="186" y="46" textAnchor="middle">ridond.</text>

  <rect x="20" y="28" width="155" height="48" rx="6" fill="#0f2040" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="97" y="47" textAnchor="middle" dominantBaseline="central">Server SCADA 1</text>

  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="97" y="65" textAnchor="middle" dominantBaseline="central">WinCC Primario</text>

  <rect x="197" y="28" width="155" height="48" rx="6" fill="#0f2040" stroke="#1D4ED8" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="274" y="47" textAnchor="middle" dominantBaseline="central">Server SCADA 2</text>

  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="274" y="65" textAnchor="middle" dominantBaseline="central">WinCC Backup</text>

  <rect x="530" y="28" width="155" height="48" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="607" y="47" textAnchor="middle" dominantBaseline="central">Historian</text>

  <text fontFamily="inherit" fontSize="11" fill="#5DCAA5" x="607" y="65" textAnchor="middle" dominantBaseline="central">30.000 tag · SQL</text>

  <rect x="710" y="28" width="160" height="48" rx="6" fill="#1e1040" stroke="#534AB7" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="790" y="47" textAnchor="middle" dominantBaseline="central">Engineering WS</text>

  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="790" y="65" textAnchor="middle" dominantBaseline="central">TIA Portal · Config.</text>

  <path d="M97,76 L97,100 L370,100 L370,116" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <path d="M274,76 L274,100 L400,100 L400,116" stroke="#1D4ED8" strokeWidth="0.8" fill="none"/>

  <path d="M607,76 L607,100 L500,100 L500,116" stroke="#0F6E56" strokeWidth="0.8" fill="none"/>

  <path d="M790,76 L790,100 L530,100 L530,116" stroke="#534AB7" strokeWidth="0.8" fill="none"/>

  <rect x="310" y="116" width="260" height="34" rx="5" fill="#3d0808" stroke="#991B1B" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="440" y="129" textAnchor="middle" dominantBaseline="central">Firewall perimetrale</text>

  <text fontFamily="inherit" fontSize="11" fill="#FCA5A5" x="440" y="143" textAnchor="middle" dominantBaseline="central">Separazione OT / IT</text>

  <path d="M440,150 V182" stroke="#991B1B" strokeWidth="1" fill="none"/>

  <rect x="240" y="182" width="420" height="36" rx="5" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="450" y="196" textAnchor="middle" dominantBaseline="central">Core Ethernet Switch</text>

  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="450" y="210" textAnchor="middle" dominantBaseline="central">Rete di processo · OPC-UA · Profinet</text>

  <path d="M450,218 L450,240 L120,240 L120,252" stroke="#D97706" strokeWidth="1" fill="none"/>

  <path d="M450,218 L450,240 L340,240 L340,252" stroke="#2563EB" strokeWidth="1" fill="none"/>

  <path d="M450,218 L450,240 L560,240 L560,252" stroke="#D85A30" strokeWidth="1" fill="none"/>

  <path d="M450,218 L450,240 L780,240 L780,252" stroke="#0F6E56" strokeWidth="1" fill="none"/>

  <rect x="30" y="252" width="180" height="50" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="120" y="270" textAnchor="middle" dominantBaseline="central">PLC-01 Reattori</text>

  <text fontFamily="inherit" fontSize="11" fill="#FBB07A" x="120" y="288" textAnchor="middle" dominantBaseline="central">S7-1516 · 800 I/O</text>

  <rect x="250" y="252" width="180" height="50" rx="6" fill="#0c1e38" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="340" y="270" textAnchor="middle" dominantBaseline="central">PLC-02 Distillaz.</text>

  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="340" y="288" textAnchor="middle" dominantBaseline="central">S7-1515 · 500 I/O</text>

  <rect x="470" y="252" width="180" height="50" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="560" y="270" textAnchor="middle" dominantBaseline="central">PLC-03 ESD Safety</text>

  <text fontFamily="inherit" fontSize="11" fill="#F0997B" x="560" y="288" textAnchor="middle" dominantBaseline="central">S7-1516F · 400 I/O safe</text>

  <rect x="690" y="252" width="180" height="50" rx="6" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="780" y="270" textAnchor="middle" dominantBaseline="central">PLC-04 Utilities</text>

  <text fontFamily="inherit" fontSize="11" fill="#5DCAA5" x="780" y="288" textAnchor="middle" dominantBaseline="central">S7-1515 · 300 I/O</text>

  <path d="M120,302 V320" stroke="#D97706" strokeWidth="0.8" fill="none"/>

  <line x1="73" y1="320" x2="167" y2="320" stroke="#D97706" strokeWidth="0.8"/>

  <line x1="73" y1="320" x2="73" y2="338" stroke="#D97706" strokeWidth="0.8"/>

  <line x1="167" y1="320" x2="167" y2="338" stroke="#D97706" strokeWidth="0.8"/>

  <path d="M340,302 V320" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <line x1="293" y1="320" x2="387" y2="320" stroke="#2563EB" strokeWidth="0.8"/>

  <line x1="293" y1="320" x2="293" y2="338" stroke="#2563EB" strokeWidth="0.8"/>

  <line x1="387" y1="320" x2="387" y2="338" stroke="#2563EB" strokeWidth="0.8"/>

  <path d="M560,302 V320" stroke="#D85A30" strokeWidth="0.8" fill="none"/>

  <line x1="513" y1="320" x2="607" y2="320" stroke="#D85A30" strokeWidth="0.8"/>

  <line x1="513" y1="320" x2="513" y2="338" stroke="#D85A30" strokeWidth="0.8"/>

  <line x1="607" y1="320" x2="607" y2="338" stroke="#D85A30" strokeWidth="0.8"/>

  <path d="M780,302 V320" stroke="#0F6E56" strokeWidth="0.8" fill="none"/>

  <line x1="733" y1="320" x2="827" y2="320" stroke="#0F6E56" strokeWidth="0.8"/>

  <line x1="733" y1="320" x2="733" y2="338" stroke="#0F6E56" strokeWidth="0.8"/>

  <line x1="827" y1="320" x2="827" y2="338" stroke="#0F6E56" strokeWidth="0.8"/>

  <rect x="30" y="338" width="86" height="32" rx="4" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="73" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="73" y="363" textAnchor="middle" dominantBaseline="central">Zona R-01</text>

  <rect x="124" y="338" width="86" height="32" rx="4" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="167" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="167" y="363" textAnchor="middle" dominantBaseline="central">Zona R-02</text>

  <rect x="250" y="338" width="86" height="32" rx="4" fill="#0c1e38" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="293" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#93C5FD" x="293" y="363" textAnchor="middle" dominantBaseline="central">Zona D-01</text>

  <rect x="344" y="338" width="86" height="32" rx="4" fill="#0c1e38" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="387" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#93C5FD" x="387" y="363" textAnchor="middle" dominantBaseline="central">Zona D-02</text>

  <rect x="470" y="338" width="86" height="32" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="513" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="513" y="363" textAnchor="middle" dominantBaseline="central">Zona E-01</text>

  <rect x="564" y="338" width="86" height="32" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="607" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="607" y="363" textAnchor="middle" dominantBaseline="central">Zona E-02</text>

  <rect x="690" y="338" width="86" height="32" rx="4" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="733" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="733" y="363" textAnchor="middle" dominantBaseline="central">Zona U-01</text>

  <rect x="784" y="338" width="86" height="32" rx="4" fill="#052828" stroke="#0F6E56" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="827" y="350" textAnchor="middle" dominantBaseline="central">ET200SP</text>

  <text fontFamily="inherit" fontSize="10" fill="#5DCAA5" x="827" y="363" textAnchor="middle" dominantBaseline="central">Zona U-02</text>

  <rect x="30" y="384" width="10" height="10" rx="2" fill="#2563EB"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46" y="393">SCADA WinCC</text>

  <rect x="158" y="384" width="10" height="10" rx="2" fill="#0F6E56"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="174" y="393">Historian</text>

  <rect x="256" y="384" width="10" height="10" rx="2" fill="#534AB7"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="272" y="393">Engineering WS</text>

  <rect x="400" y="384" width="10" height="10" rx="2" fill="#991B1B"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="416" y="393">Firewall OT/IT</text>

  <rect x="508" y="384" width="10" height="10" rx="2" fill="#1D9E75"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="524" y="393">Core Switch</text>

  <rect x="610" y="384" width="10" height="10" rx="2" fill="#D97706"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="626" y="393">PLC Reattori</text>

  <rect x="714" y="384" width="10" height="10" rx="2" fill="#D85A30"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="730" y="393">ESD Safety</text>

  <rect x="808" y="384" width="10" height="10" rx="2" fill="#0F6E56"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="824" y="393">Utilities</text>

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