import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoRevampingConfezionamento = () => {
  const drives = [
    { x: 366, cx: 426, n: "01" },
    { x: 494, cx: 554, n: "02" },
    { x: 622, cx: 682, n: "03" },
    { x: 750, cx: 810, n: "04" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link to="/progetti?cat=Automazione+Hardware" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tutti i progetti
          </Link>

          <div className="mb-6">
            <p className="text-primary text-sm font-medium mb-2">Automazione Hardware</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Revamping linea di confezionamento
            </h1>
          </div>

          <div className="max-w-3xl mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Aggiornamento completo dell'automazione di una linea di confezionamento: upgrade da S7-300
              a S7-1516F con Safety Integrated, sostituzione drive KEB F5 con SEW MOVIDRIVE B su Profinet,
              inserimento di 4 cobot collaborativi per l'etichettatura del packaging.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-16">
            {["S7-1516F Safety", "Profinet", "SEW MOVIDRIVE B", "PROFIsafe", "Cobot", "TIA Portal", "da S7-300", "da KEB F5"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">Vista topologica di rete</h3>
              <p className="text-muted-foreground text-sm">
                Architettura Profinet post-revamping: S7-1516F Safety, S7-1515 Motion, 4 drive SEW MOVIDRIVE B, 4 cobot etichettatura.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-10">
              <svg width="100%" viewBox="0 0 900 490" role="img">
                <defs>
                  <linearGradient id="srvR1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2A2A2A"/>
                    <stop offset="100%" stopColor="#3A3A3A"/>
                  </linearGradient>
                  <marker id="arrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10" fill="none" stroke="#6B7280"/>
                  </marker>
                </defs>

                <text x="30" y="18" fontSize="12" fontWeight="600" fill="#9CA3AF">Livello 2 — Supervisione</text>
                <text x="30" y="112" fontSize="12" fontWeight="600" fill="#9CA3AF">Livello 1 — Profinet (Scalance XC224)</text>
                <text x="30" y="212" fontSize="12" fontWeight="600" fill="#9CA3AF">Livello 0a — Controllo Safety + Motion</text>
                <text x="30" y="312" fontSize="12" fontWeight="600" fill="#9CA3AF">Livello 0b — Campo · Linea confezionamento</text>

                <rect x="300" y="30" width="160" height="50" rx="8" fill="url(#srvR1)" stroke="#4A4A4A" strokeWidth="1"/>
                <text x="380" y="55" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">ridondanza hot-standby</text>
                <rect x="40" y="30" width="120" height="50" rx="8" fill="url(#srvR1)" stroke="#4A4A4A" strokeWidth="1"/>
                <text x="100" y="50" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">Server WinCC</text>
                <text x="100" y="66" textAnchor="middle" fontSize="11" fill="#9CA3AF">SCADA primario</text>
                <rect x="180" y="30" width="110" height="50" rx="8" fill="url(#srvR1)" stroke="#4A4A4A" strokeWidth="1"/>
                <text x="235" y="50" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">Supervisore</text>
                <text x="235" y="66" textAnchor="middle" fontSize="11" fill="#9CA3AF">Operatore HMI</text>
                <line x1="480" y1="55" x2="590" y2="55" stroke="#6B7280" strokeDasharray="4"/>

                <rect x="370" y="130" width="160" height="50" rx="8" fill="#1a2a10" stroke="#2A7A40" strokeWidth="1"/>
                <text x="450" y="155" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">Scalance XC224</text>
                <text x="450" y="171" textAnchor="middle" fontSize="11" fill="#6BC98A">Switch backbone Profinet</text>

                <rect x="30" y="230" width="130" height="60" rx="8" fill="#1a2a10" stroke="#2A7A40" strokeWidth="1.5"/>
                <text x="95" y="253" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">S7-1516F</text>
                <text x="95" y="273" textAnchor="middle" fontSize="11" fill="#6BC98A">Safety CPU · F-Program</text>
                <rect x="180" y="230" width="130" height="60" rx="8" fill="#1a2a10" stroke="#2A7A40" strokeWidth="1"/>
                <text x="245" y="253" textAnchor="middle" fontSize="13" fontWeight="600" fill="#E5E7EB">S7-1515</text>
                <text x="245" y="273" textAnchor="middle" fontSize="11" fill="#6BC98A">Motion control</text>
                <text x="320" y="262" textAnchor="middle" fontSize="10" fill="#9CA3AF">S7 - S7 Profinet</text>

                <rect x="200" y="330" width="100" height="60" rx="8" fill="#2A0A0A" stroke="#7A2A2A" strokeWidth="1"/>
                <text x="250" y="353" textAnchor="middle" fontSize="12" fontWeight="600" fill="#E5E7EB">ET200SP-F</text>
                <text x="250" y="373" textAnchor="middle" fontSize="10" fill="#C98A6B">Safe DI/DQ</text>
                <text x="370" y="360" fontSize="10" fill="#C98A6B" fontWeight="600">PROFIsafe</text>
                <text x="370" y="375" fontSize="10" fill="#C98A6B">E-stop / safety gate</text>
                {drives.map(({ x, cx, n }) => (
                  <g key={n}>
                    <rect x={x} y="330" width="120" height="60" rx="8" fill="#1a1f2a" stroke="#2A4A7A" strokeWidth="1"/>
                    <text x={cx} y="353" textAnchor="middle" fontSize="12" fontWeight="600" fill="#E5E7EB">MOVIDRIVE B</text>
                    <text x={cx} y="373" textAnchor="middle" fontSize="10" fill="#6B8AC9">SEW {n} · da KEB F5</text>
                  </g>
                ))}

                <g transform="translate(0, 420)">
                  {drives.map(({ x, cx, n }) => (
                    <g key={`cobot-${n}`}>
                      <rect x={x} y="0" width="120" height="50" rx="8" fill="#2a2a1a" stroke="#7A7A2A" strokeWidth="1"/>
                      <text x={cx} y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#E5E7EB">Cobot {n}</text>
                      <text x={cx} y="36" textAnchor="middle" fontSize="10" fill="#C9C96B">Etichettatura</text>
                    </g>
                  ))}
                </g>

                <text x="30" y="485" fontSize="10" fill="#9CA3AF">SCADA</text>
                <text x="370" y="485" fontSize="10" fill="#9CA3AF">Supervisore</text>
                <text x="450" y="205" fontSize="10" fill="#9CA3AF">Switch Profinet</text>
                <text x="30" y="305" fontSize="10" fill="#9CA3AF">Safety (da S7-300)</text>
                <text x="366" y="405" fontSize="10" fill="#9CA3AF">MOVIDRIVE B (da KEB F5)</text>
                <text x="366" y="475" fontSize="10" fill="#9CA3AF">Cobot etichettatura</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoRevampingConfezionamento;