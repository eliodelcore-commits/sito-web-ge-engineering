import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoRevampingConfezionamento = () => {
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
            Revamping linea di confezionamento
          </h1>

          <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-3xl">
            Aggiornamento completo dell'automazione di una linea di confezionamento: upgrade da S7-300 a S7-1516F con Safety Integrated, sostituzione drive KEB F5 con SEW MOVIDRIVE B su Profinet, inserimento di 4 cobot collaborativi per l'etichettatura del packaging.
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {["S7-1516F Safety","Profinet","SEW MOVIDRIVE B","PROFIsafe","Cobot","TIA Portal","↑ da S7-300","↑ da KEB F5"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">{tag}</span>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-3">
              Vista topologica di rete
            </h2>

            <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
              Architettura Profinet post-revamping a tre livelli: supervisione, controllo safety + motion, campo.
            </p>

            <div className="rounded-xl border border-border bg-card p-6 overflow-x-auto">
              <svg
                viewBox="0 0 880 600"
                className="w-full h-auto"
                role="img"
                aria-label="Upgrade S7-300 a S7-1516F Safety, KEB F5 a SEW MOVIDRIVE B, 4 cobot etichettatura su Profinet."
              >
                {/* --- livello labels --- */}
                <text x="10" y="20" className="fill-muted-foreground" fontSize="11">Livello 2 — Supervisione</text>
                <text x="10" y="130" className="fill-muted-foreground" fontSize="11">Livello 1 — Rete Profinet (Scalance XC224)</text>
                <text x="10" y="220" className="fill-muted-foreground" fontSize="11">Livello 0a — Controllo · Safety + Motion</text>
                <text x="10" y="380" className="fill-muted-foreground" fontSize="11">Livello 0b — Campo · Linea confezionamento (post-revamping)</text>

                {/* --- ridondanza line --- */}
                <line x1="220" y1="70" x2="360" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
                <text x="290" y="62" textAnchor="middle" className="fill-muted-foreground" fontSize="9">ridondanza hot-standby</text>

                {/* --- L2: Server + Supervisore --- */}
                <g>
                  <rect x="80" y="40" width="140" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="150" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Server WinCC</text>
                  <text x="150" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">SCADA primario</text>
                </g>
                <g>
                  <rect x="360" y="40" width="140" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="430" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Supervisore</text>
                  <text x="430" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">Operatore HMI</text>
                </g>

                {/* --- L2 → L1 connections --- */}
                <line x1="150" y1="100" x2="440" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="430" y1="100" x2="440" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* --- L1: Scalance XC224 (centered) --- */}
                <g>
                  <rect x="400" y="150" width="120" height="50" rx="6" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
                  <text x="460" y="172" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">Scalance XC224</text>
                  <text x="460" y="188" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Switch backbone Profinet</text>
                </g>

                {/* --- L1 → L0a connections --- */}
                <line x1="460" y1="200" x2="220" y2="260" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                <line x1="460" y1="200" x2="700" y2="260" stroke="hsl(var(--primary))" strokeWidth="1.5" />

                {/* --- L0a: PLCs --- */}
                <g>
                  <rect x="160" y="260" width="120" height="50" rx="6" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="220" y="282" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">S7-1516F</text>
                  <text x="220" y="298" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Safety CPU · F-Program</text>
                </g>
                <g>
                  <rect x="640" y="260" width="120" height="50" rx="6" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="700" y="282" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">S7-1515</text>
                  <text x="700" y="298" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Motion control</text>
                </g>

                {/* --- S7 ↔ S7 Profinet --- */}
                <line x1="280" y1="285" x2="640" y2="285" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="460" y="278" textAnchor="middle" className="fill-muted-foreground" fontSize="9">S7 ↔ S7 Profinet</text>

                {/* --- Safety connections (dashed PROFIsafe) --- */}
                <line x1="220" y1="310" x2="220" y2="380" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />

                {/* --- L0b Safety zone --- */}
                <g>
                  <rect x="140" y="380" width="100" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="190" y="398" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">ET200SP-F</text>
                  <text x="190" y="412" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Safe DI/DQ</text>
                </g>
                <g>
                  <rect x="260" y="380" width="100" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="310" y="398" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">PROFIsafe</text>
                  <text x="310" y="412" textAnchor="middle" className="fill-muted-foreground" fontSize="9">E-stop / safety gate</text>
                </g>

                {/* --- Bus from S7-1515 to drives --- */}
                <line x1="700" y1="310" x2="430" y2="440" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="700" y1="310" x2="540" y2="440" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="700" y1="310" x2="650" y2="440" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <line x1="700" y1="310" x2="760" y2="440" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* --- L0b: MOVIDRIVE B x4 --- */}
                {[{x:390,cx:430,n:"01"},{x:500,cx:540,n:"02"},{x:610,cx:650,n:"03"},{x:720,cx:760,n:"04"}].map(({x,cx,n})=>{
                  const upg = n === "01" ? " ↑ KEB F5" : " ↑ KEB";
                  return (
                    <g key={`movi-${n}`}>
                      <rect x={x} y="440" width="80" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                      <text x={cx} y="458" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">MOVIDRIVE B</text>
                      <text x={cx} y="472" textAnchor="middle" className="fill-muted-foreground" fontSize="9">SEW {n}{upg}</text>
                    </g>
                  );
                })}

                {/* --- Drives → Cobots lines --- */}
                {[430,540,650,760].map((cx)=>{
                  return <line key={`line-${cx}`} x1={cx} y1="480" x2={cx} y2="520" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />;
                })}

                {/* --- L0b: Cobots x4 --- */}
                {[{x:390,cx:430,n:"01"},{x:500,cx:540,n:"02"},{x:610,cx:650,n:"03"},{x:720,cx:760,n:"04"}].map(({x,cx,n})=>{
                  return (
                    <g key={`cobot-${n}`}>
                      <rect x={x} y="520" width="80" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                      <text x={cx} y="538" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">Cobot {n}</text>
                      <text x={cx} y="552" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Etichettatura</text>
                    </g>
                  );
                })}

                {/* --- Legend --- */}
                <g transform="translate(10, 580)">
                  <rect x="0" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="20" y="9" className="fill-muted-foreground" fontSize="10">SCADA</text>

                  <rect x="80" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="100" y="9" className="fill-muted-foreground" fontSize="10">Supervisore</text>

                  <rect x="180" y="0" width="14" height="10" className="fill-primary/15 stroke-primary" strokeWidth="1" />
                  <text x="200" y="9" className="fill-muted-foreground" fontSize="10">Switch Profinet</text>

                  <rect x="310" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="330" y="9" className="fill-muted-foreground" fontSize="10">Safety (↑ S7-300)</text>

                  <rect x="470" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="490" y="9" className="fill-muted-foreground" fontSize="10">MOVIDRIVE B (↑ KEB F5)</text>

                  <rect x="660" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="680" y="9" className="fill-muted-foreground" fontSize="10">Cobot etichettatura</text>
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

export default ProgettoRevampingConfezionamento;
