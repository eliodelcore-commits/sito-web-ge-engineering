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
              <svg
                viewBox="0 0 640 520"
                className="w-full h-auto"
                role="img"
                aria-label="Topologia a tre livelli: supervisore HMI e server SCADA in alto, switch Scalance ad anello al centro, 12 PLC S7 di campo in basso."
              >
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--muted-foreground))" />
                  </marker>
                </defs>

                {/* Level labels */}
                <text x="10" y="20" className="fill-muted-foreground" fontSize="11">Livello 2 — Supervisione</text>
                <text x="10" y="190" className="fill-muted-foreground" fontSize="11">Livello 1 — Rete Profinet ad anello (Scalance X)</text>
                <text x="10" y="340" className="fill-muted-foreground" fontSize="11">Livello 0 — Campo · Linea di produzione automatizzata</text>

                {/* Level 2: SCADA + HMI */}
                <g>
                  <rect x="60" y="40" width="140" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="130" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Server 1</text>
                  <text x="130" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">SCADA Primary</text>

                  <rect x="250" y="40" width="140" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="320" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Supervisore</text>
                  <text x="320" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">Operatore HMI</text>

                  <rect x="440" y="40" width="140" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="510" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Server 2</text>
                  <text x="510" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">SCADA Backup</text>

                  {/* SCADA redundancy */}
                  <line x1="200" y1="70" x2="250" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="390" y1="70" x2="440" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
                  <text x="225" y="62" textAnchor="middle" className="fill-muted-foreground" fontSize="9">ridondanza</text>
                  <text x="415" y="62" textAnchor="middle" className="fill-muted-foreground" fontSize="9">ridondanza</text>
                </g>

                {/* Down-links from supervision to switches */}
                <line x1="130" y1="100" x2="108" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="320" y1="100" x2="256" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="320" y1="100" x2="402" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="510" y1="100" x2="548" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* Level 1: Scalance switches */}
                {switches.map((s) => (
                  <g key={s.id}>
                    <rect x={s.x} y={210} width="76" height="50" rx="6" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
                    <text x={s.cx} y={232} textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">{s.id}</text>
                    <text x={s.cx} y={248} textAnchor="middle" className="fill-muted-foreground" fontSize="9">Scalance X</text>
                  </g>
                ))}

                {/* Profinet ring connections between switches */}
                <line x1="146" y1="235" x2="218" y2="235" stroke="hsl(var(--primary))" strokeWidth="2" />
                <line x1="294" y1="235" x2="364" y2="235" stroke="hsl(var(--primary))" strokeWidth="2" />
                <line x1="440" y1="235" x2="510" y2="235" stroke="hsl(var(--primary))" strokeWidth="2" />
                {/* Ring closure */}
                <path d="M 108 260 Q 108 290 320 295 Q 548 290 548 260" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" />

                {/* Switch -> PLC links */}
                {switchToPlcs.map(([sw, plcs]) =>
                  plcs.map((px) => (
                    <line
                      key={`${sw}-${px}`}
                      x1={sw}
                      y1={260}
                      x2={px}
                      y2={370}
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth="1"
                    />
                  ))
                )}

                {/* Level 0: 12 PLCs */}
                {Array.from({ length: 12 }, (_, i) => {
                  const x = plcCols[Math.floor(i / 3)][i % 3];
                  return (
                    <g key={i}>
                      <rect x={x - 22} y={370} width="44" height="50" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                      <text x={x} y={390} textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">PLC</text>
                      <text x={x} y={406} textAnchor="middle" className="fill-muted-foreground" fontSize="10">{String(i + 1).padStart(2, "0")}</text>
                    </g>
                  );
                })}

                {/* Legend */}
                <g transform="translate(10, 460)">
                  <rect x="0" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="20" y="9" className="fill-muted-foreground" fontSize="10">Server SCADA</text>

                  <rect x="120" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="140" y="9" className="fill-muted-foreground" fontSize="10">Supervisore HMI</text>

                  <rect x="250" y="0" width="14" height="10" className="fill-primary/15 stroke-primary" strokeWidth="1" />
                  <text x="270" y="9" className="fill-muted-foreground" fontSize="10">Switch Scalance</text>

                  <rect x="380" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="400" y="9" className="fill-muted-foreground" fontSize="10">PLC Siemens S7</text>

                  <line x1="500" y1="5" x2="525" y2="5" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="530" y="9" className="fill-muted-foreground" fontSize="10">Anello Profinet</text>
                </g>
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
