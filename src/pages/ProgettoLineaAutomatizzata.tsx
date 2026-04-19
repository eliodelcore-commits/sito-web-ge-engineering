import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const tags = [
  "PLC Siemens S7",
  "Profinet",
  "WinCC SCADA",
  "Scalance X",
  "Safety",
  "Visione Artificiale",
];

const switches = [
  { x: 70, cx: 108, id: "SW-01" },
  { x: 218, cx: 256, id: "SW-02" },
  { x: 364, cx: 402, id: "SW-03" },
  { x: 510, cx: 548, id: "SW-04" },
];

const switchToPlcs: Array<[number, number[]]> = [
  [108, [62, 108, 154]],
  [256, [202, 250, 298]],
  [402, [348, 396, 444]],
  [548, [492, 540, 588]],
];

const plcCols = [
  [40, 86, 132],
  [180, 226, 272],
  [326, 372, 418],
  [470, 516, 562],
];

const ProgettoLineaAutomatizzata = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to="/progetti"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tutti i progetti
          </Link>

          <p className="text-primary text-sm font-medium mb-2">
            Automazione Hardware
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Linea di produzione automatizzata
          </h1>

          <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-3xl">
            Architettura Profinet ad anello con 12 PLC Siemens S7 distribuiti su 4 switch Scalance X,
            2 server SCADA WinCC in ridondanza hot-standby e postazione supervisore operatore HMI.
            Sistema di visione artificiale integrato per controllo qualità inline.
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-3">
              Vista topologica di rete
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
              Topologia Profinet a tre livelli: supervisione SCADA, rete ad anello con switch Scalance X,
              12 PLC S7 di campo.
            </p>

            <div className="rounded-xl border border-border bg-card p-6 overflow-x-auto">
<svg width="100%" viewBox="0 0 900 420" role="img" style={{ maxWidth: "100%", minWidth: "600px" }}>

  <title>Linea di produzione automatizzata — Topologia Profinet</title>

  <desc>2 server SCADA WinCC, supervisore HMI, 4 switch Scalance ad anello, 12 PLC Siemens S7.</desc>

  <line x1="30" y1="108" x2="870" y2="108" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <line x1="30" y1="210" x2="870" y2="210" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <line x1="30" y1="320" x2="870" y2="320" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="22">Livello 2 — Supervisione</text>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="124">Livello 1 — Rete Profinet ad anello (Scalance X)</text>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="226">Livello 0 — Campo · 12 PLC S7 (3 per switch)</text>

  <line x1="180" y1="58" x2="720" y2="58" stroke="#2563EB" strokeWidth="1" strokeDasharray="5 3"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="52" textAnchor="middle">ridondanza hot-standby</text>

  <rect x="30" y="34" width="150" height="48" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="105" y="54" textAnchor="middle" dominantBaseline="central">Server 1</text>

  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="105" y="72" textAnchor="middle" dominantBaseline="central">SCADA Primary</text>

  <rect x="375" y="34" width="150" height="48" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="450" y="54" textAnchor="middle" dominantBaseline="central">Supervisore</text>

  <text fontFamily="inherit" fontSize="11" fill="#C4B5FD" x="450" y="72" textAnchor="middle" dominantBaseline="central">Operatore HMI</text>

  <rect x="720" y="34" width="150" height="48" rx="6" fill="#0f2847" stroke="#2563EB" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="795" y="54" textAnchor="middle" dominantBaseline="central">Server 2</text>

  <text fontFamily="inherit" fontSize="11" fill="#93C5FD" x="795" y="72" textAnchor="middle" dominantBaseline="central">SCADA Backup</text>

  <path d="M75,82 L75,115 L140,115 L140,138" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <path d="M135,82 L135,115 L340,115 L340,138" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <path d="M415,82 L415,115 L340,115 L340,138" stroke="#7F77DD" strokeWidth="0.8" fill="none"/>

  <path d="M485,82 L485,115 L560,115 L560,138" stroke="#7F77DD" strokeWidth="0.8" fill="none"/>

  <path d="M755,82 L755,115 L560,115 L560,138" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <path d="M815,82 L815,115 L760,115 L760,138" stroke="#2563EB" strokeWidth="0.8" fill="none"/>

  <rect x="80" y="138" width="120" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="140" y="156" textAnchor="middle" dominantBaseline="central">SW-01</text>

  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="140" y="172" textAnchor="middle" dominantBaseline="central">Scalance X</text>

  <rect x="280" y="138" width="120" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="340" y="156" textAnchor="middle" dominantBaseline="central">SW-02</text>

  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="340" y="172" textAnchor="middle" dominantBaseline="central">Scalance X</text>

  <rect x="500" y="138" width="120" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="560" y="156" textAnchor="middle" dominantBaseline="central">SW-03</text>

  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="560" y="172" textAnchor="middle" dominantBaseline="central">Scalance X</text>

  <rect x="700" y="138" width="120" height="44" rx="5" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="760" y="156" textAnchor="middle" dominantBaseline="central">SW-04</text>

  <text fontFamily="inherit" fontSize="11" fill="#9FE1CB" x="760" y="172" textAnchor="middle" dominantBaseline="central">Scalance X</text>

  <line x1="200" y1="160" x2="280" y2="160" stroke="#1D9E75" strokeWidth="2.5"/>

  <line x1="400" y1="160" x2="500" y2="160" stroke="#1D9E75" strokeWidth="2.5"/>

  <line x1="620" y1="160" x2="700" y2="160" stroke="#1D9E75" strokeWidth="2.5"/>

  <path d="M140,182 V246" stroke="#C2702A" strokeWidth="0.8" fill="none"/>

  <line x1="78" y1="246" x2="202" y2="246" stroke="#C2702A" strokeWidth="0.8"/>

  <line x1="78"  y1="246" x2="78"  y2="282" stroke="#C2702A" strokeWidth="0.8"/>

  <line x1="140" y1="246" x2="140" y2="282" stroke="#C2702A" strokeWidth="0.8"/>

  <line x1="202" y1="246" x2="202" y2="282" stroke="#C2702A" strokeWidth="0.8"/>

  <rect x="50"  y="282" width="56" height="32" rx="4" fill="#2a1506" stroke="#C2702A" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="78"  y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="78"  y="308" textAnchor="middle" dominantBaseline="central">01</text>

  <rect x="112" y="282" width="56" height="32" rx="4" fill="#2a1506" stroke="#C2702A" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="140" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="140" y="308" textAnchor="middle" dominantBaseline="central">02</text>

  <rect x="174" y="282" width="56" height="32" rx="4" fill="#2a1506" stroke="#C2702A" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="202" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="202" y="308" textAnchor="middle" dominantBaseline="central">03</text>

  <text fontFamily="inherit" fontSize="10" fill="#C2702A" x="140" y="334" textAnchor="middle">Zona alimentazione</text>

  <path d="M340,182 V246" stroke="#A07820" strokeWidth="0.8" fill="none"/>

  <line x1="278" y1="246" x2="402" y2="246" stroke="#A07820" strokeWidth="0.8"/>

  <line x1="278" y1="246" x2="278" y2="282" stroke="#A07820" strokeWidth="0.8"/>

  <line x1="340" y1="246" x2="340" y2="282" stroke="#A07820" strokeWidth="0.8"/>

  <line x1="402" y1="246" x2="402" y2="282" stroke="#A07820" strokeWidth="0.8"/>

  <rect x="250" y="282" width="56" height="32" rx="4" fill="#1f1a06" stroke="#A07820" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="278" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#F5C842" x="278" y="308" textAnchor="middle" dominantBaseline="central">04</text>

  <rect x="312" y="282" width="56" height="32" rx="4" fill="#1f1a06" stroke="#A07820" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="340" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#F5C842" x="340" y="308" textAnchor="middle" dominantBaseline="central">05</text>

  <rect x="374" y="282" width="56" height="32" rx="4" fill="#1f1a06" stroke="#A07820" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="402" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#F5C842" x="402" y="308" textAnchor="middle" dominantBaseline="central">06</text>

  <text fontFamily="inherit" fontSize="10" fill="#A07820" x="340" y="334" textAnchor="middle">Zona lavorazione</text>

  <path d="M560,182 V246" stroke="#2A7A40" strokeWidth="0.8" fill="none"/>

  <line x1="498" y1="246" x2="622" y2="246" stroke="#2A7A40" strokeWidth="0.8"/>

  <line x1="498" y1="246" x2="498" y2="282" stroke="#2A7A40" strokeWidth="0.8"/>

  <line x1="560" y1="246" x2="560" y2="282" stroke="#2A7A40" strokeWidth="0.8"/>

  <line x1="622" y1="246" x2="622" y2="282" stroke="#2A7A40" strokeWidth="0.8"/>

  <rect x="470" y="282" width="56" height="32" rx="4" fill="#0a2010" stroke="#2A7A40" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="498" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="498" y="308" textAnchor="middle" dominantBaseline="central">07</text>

  <rect x="532" y="282" width="56" height="32" rx="4" fill="#0a2010" stroke="#2A7A40" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="560" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="560" y="308" textAnchor="middle" dominantBaseline="central">08</text>

  <rect x="594" y="282" width="56" height="32" rx="4" fill="#0a2010" stroke="#2A7A40" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="622" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#6BC98A" x="622" y="308" textAnchor="middle" dominantBaseline="central">09</text>

  <text fontFamily="inherit" fontSize="10" fill="#2A7A40" x="560" y="334" textAnchor="middle">Zona assemblaggio</text>

  <path d="M760,182 V246" stroke="#4A6090" strokeWidth="0.8" fill="none"/>

  <line x1="698" y1="246" x2="822" y2="246" stroke="#4A6090" strokeWidth="0.8"/>

  <line x1="698" y1="246" x2="698" y2="282" stroke="#4A6090" strokeWidth="0.8"/>

  <line x1="760" y1="246" x2="760" y2="282" stroke="#4A6090" strokeWidth="0.8"/>

  <line x1="822" y1="246" x2="822" y2="282" stroke="#4A6090" strokeWidth="0.8"/>

  <rect x="670" y="282" width="56" height="32" rx="4" fill="#141e30" stroke="#4A6090" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="698" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="698" y="308" textAnchor="middle" dominantBaseline="central">10</text>

  <rect x="732" y="282" width="56" height="32" rx="4" fill="#141e30" stroke="#4A6090" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="760" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="760" y="308" textAnchor="middle" dominantBaseline="central">11</text>

  <rect x="794" y="282" width="56" height="32" rx="4" fill="#141e30" stroke="#4A6090" strokeWidth="0.8"/>

  <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="822" y="294" textAnchor="middle" dominantBaseline="central">PLC</text>

  <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="822" y="308" textAnchor="middle" dominantBaseline="central">12</text>

  <text fontFamily="inherit" fontSize="10" fill="#4A6090" x="760" y="334" textAnchor="middle">Zona confezionamento</text>

  <rect x="30"  y="360" width="10" height="10" rx="2" fill="#2563EB"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46"  y="369">Server SCADA</text>

  <rect x="168" y="360" width="10" height="10" rx="2" fill="#7F77DD"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="184" y="369">Supervisore HMI</text>

  <rect x="316" y="360" width="10" height="10" rx="2" fill="#1D9E75"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="332" y="369">Switch Scalance</text>

  <rect x="460" y="360" width="10" height="10" rx="2" fill="#C2702A"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="476" y="369">PLC 01-03 · Alimentazione</text>

  <rect x="650" y="360" width="10" height="10" rx="2" fill="#A07820"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="666" y="369">PLC 04-06 · Lavorazione</text>

  <rect x="30"  y="384" width="10" height="10" rx="2" fill="#2A7A40"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46"  y="393">PLC 07-09 · Assemblaggio</text>

  <rect x="240" y="384" width="10" height="10" rx="2" fill="#4A6090"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="256" y="393">PLC 10-12 · Confezionamento</text>

  <line x1="430" y1="389" x2="470" y2="389" stroke="#1D9E75" strokeWidth="2.5"/>

  <text fontFamily="inherit" fontSize="11" fill="#64748B" x="476" y="393">Anello Profinet</text>

</svg>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoLineaAutomatizzata;
