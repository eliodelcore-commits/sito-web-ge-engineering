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
            Aggiornamento completo dell'automazione di una linea di confezionamento:
            upgrade da S7-300 a S7-1516F con Safety Integrated, sostituzione drive KEB F5
            con SEW MOVIDRIVE B su Profinet, inserimento di 4 cobot collaborativi per
            l'etichettatura del packaging.
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {["S7-1516F Safety","Profinet","SEW MOVIDRIVE B","PROFIsafe","Cobot","TIA Portal","↑ da S7-300","↑ da KEB F5"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-3">
              Vista topologica di rete
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
              Architettura Profinet post-revamping: S7-1516F Safety + S7-1515 Motion, 4 drive SEW MOVIDRIVE B, 4 cobot etichettatura.
            </p>

            <div className="rounded-xl border border-border bg-card p-6 overflow-x-auto">
              <svg
                viewBox="0 0 720 560"
                className="w-full h-auto"
                role="img"
                aria-label="Upgrade S7-300 a S7-1516F Safety, KEB F5 a SEW MOVIDRIVE B, 4 cobot etichettatura su Profinet a tre livelli."
              >
                <text x="10" y="20" className="fill-muted-foreground" fontSize="11">Livello 2 — Supervisione</text>
                <text x="10" y="190" className="fill-muted-foreground" fontSize="11">Livello 1 — Rete Profinet (Scalance XC224)</text>
                <text x="10" y="280" className="fill-muted-foreground" fontSize="11">Livello 0a — Controllo · Safety + Motion</text>
                <text x="10" y="410" className="fill-muted-foreground" fontSize="11">Livello 0b — Campo · Linea confezionamento (post-revamping)</text>

                <g>
                  <rect x="60" y="40" width="150" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="135" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Server WinCC</text>
                  <text x="135" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">SCADA primario</text>

                  <rect x="260" y="40" width="150" height="60" rx="8" className="fill-secondary stroke-primary" strokeWidth="1.5" />
                  <text x="335" y="65" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="600">Supervisore</text>
                  <text x="335" y="83" textAnchor="middle" className="fill-muted-foreground" fontSize="10">Operatore HMI</text>

                  <line x1="210" y1="70" x2="260" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 3" />
                  <text x="235" y="62" textAnchor="middle" className="fill-muted-foreground" fontSize="9">ridondanza hot-standby</text>

                  <line x1="135" y1="100" x2="360" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                  <line x1="335" y1="100" x2="360" y2="210" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                </g>

                <g>
                  <rect x="320" y="210" width="80" height="50" rx="6" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
                  <text x="360" y="232" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">Scalance XC224</text>
                  <text x="360" y="248" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Backbone Profinet</text>
                </g>

                <g>
                  <line x1="360" y1="260" x2="240" y2="310" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                  <line x1="360" y1="260" x2="480" y2="310" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                </g>

                <g>
                  <rect x="180" y="310" width="120" height="50" rx="6" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="240" y="332" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">S7-1516F</text>
                  <text x="240" y="348" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Safety · F-Program</text>

                  <rect x="420" y="310" width="120" height="50" rx="6" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="480" y="332" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">S7-1515</text>
                  <text x="480" y="348" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Motion control</text>

                  <line x1="300" y1="335" x2="420" y2="335" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="360" y="328" textAnchor="middle" className="fill-muted-foreground" fontSize="9">S7 ↔ S7 Profinet</text>

                  <line x1="240" y1="360" x2="240" y2="430" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                  <line x1="480" y1="360" x2="480" y2="430" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                </g>

                <g>
                  <rect x="160" y="430" width="100" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="210" y="448" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">ET200SP-F</text>
                  <text x="210" y="462" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Safe DI/DQ</text>

                  <rect x="280" y="430" width="100" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                  <text x="330" y="448" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">PROFIsafe</text>
                  <text x="330" y="462" textAnchor="middle" className="fill-muted-foreground" fontSize="9">E-stop / gate</text>

                  <line x1="240" y1="360" x2="210" y2="430" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                  <line x1="240" y1="360" x2="330" y2="430" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                </g>

                <g>
                  {[336, 416, 496, 576].map((x) => (
                    <line key={`s7-movi-${x}`} x1="480" y1="360" x2={x} y2="430" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                  ))}

                  {[
                    { x: 296, cx: 336, n: "01" },
                    { x: 384, cx: 424, n: "02" },
                    { x: 472, cx: 512, n: "03" },
                    { x: 560, cx: 600, n: "04" },
                  ].map(({ x, cx, n }) => (
                    <g key={`movi-${n}`}>
                      <rect x={x} y="430" width="80" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                      <text x={cx} y="448" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">MOVI-B</text>
                      <text x={cx} y="462" textAnchor="middle" className="fill-muted-foreground" fontSize="9">SEW {n}</text>
                    </g>
                  ))}
                </g>

                <g>
                  {[336, 416, 496, 576].map((x) => (
                    <line key={`movi-cobot-${x}`} x1={x + 40} y1="470" x2={x + 40} y2="500" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                  ))}

                  {[
                    { x: 296, cx: 336, n: "01" },
                    { x: 384, cx: 424, n: "02" },
                    { x: 472, cx: 512, n: "03" },
                    { x: 560, cx: 600, n: "04" },
                  ].map(({ x, cx, n }) => (
                    <g key={`cobot-${n}`}>
                      <rect x={x} y="500" width="80" height="40" rx="5" className="fill-card stroke-primary" strokeWidth="1.5" />
                      <text x={cx} y="518" textAnchor="middle" className="fill-foreground" fontSize="10" fontWeight="600">Cobot {n}</text>
                      <text x={cx} y="532" textAnchor="middle" className="fill-muted-foreground" fontSize="9">Etichettatura</text>
                    </g>
                  ))}
                </g>

                <g transform="translate(10, 520)">
                  <rect x="0" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="20" y="9" className="fill-muted-foreground" fontSize="10">SCADA</text>

                  <rect x="70" y="0" width="14" height="10" className="fill-secondary stroke-primary" strokeWidth="1" />
                  <text x="90" y="9" className="fill-muted-foreground" fontSize="10">Supervisore</text>

                  <rect x="170" y="0" width="14" height="10" className="fill-primary/15 stroke-primary" strokeWidth="1" />
                  <text x="190" y="9" className="fill-muted-foreground" fontSize="10">Switch Profinet</text>

                  <rect x="290" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="310" y="9" className="fill-muted-foreground" fontSize="10">Safety (↑ S7-300)</text>

                  <rect x="420" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="440" y="9" className="fill-muted-foreground" fontSize="10">MOVIDRIVE B (↑ KEB F5)</text>

                  <rect x="590" y="0" width="14" height="10" className="fill-card stroke-primary" strokeWidth="1" />
                  <text x="610" y="9" className="fill-muted-foreground" fontSize="10">Cobot</text>
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