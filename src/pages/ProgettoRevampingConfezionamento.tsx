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

            <div className="rounded-xl border border-border bg-card p-6">
              <svg width="100%" viewBox="0 0 900 490" role="img">

                <title>Revamping linea confezionamento — Topologia Profinet</title>

                <desc>Upgrade S7-300 a S7-1516F Safety, KEB F5 a SEW MOVIDRIVE B, 4 cobot etichettatura.</desc>

                <line x1="30" y1="112" x2="870" y2="112" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                <line x1="30" y1="206" x2="870" y2="206" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                <line x1="30" y1="310" x2="870" y2="310" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="24">Livello 2 — Supervisione</text>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="126">Livello 1 — Profinet (Scalance XC224)</text>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="220">Livello 0a — Controllo · Safety + Motion</text>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="30" y="324">Livello 0b — Campo · Linea confezionamento</text>

                <line x1="220" y1="58" x2="680" y2="58" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5 3"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="52" textAnchor="middle">ridondanza hot-standby</text>

                <rect x="50" y="34" width="170" height="48" rx="6" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="135" y="54" textAnchor="middle" dominantBaseline="central">Server WinCC</text>

                <text fontFamily="inherit" fontSize="12" fill="#94A3B8" x="135" y="72" textAnchor="middle" dominantBaseline="central">SCADA primario</text>

                <rect x="680" y="34" width="170" height="48" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="765" y="54" textAnchor="middle" dominantBaseline="central">Supervisore</text>

                <text fontFamily="inherit" fontSize="12" fill="#94A3B8" x="765" y="72" textAnchor="middle" dominantBaseline="central">Operatore HMI</text>

                <path d="M135,82 L135,114 L310,114 L310,138" stroke="#3B82F6" strokeWidth="0.9" fill="none"/>

                <path d="M765,82 L765,114 L590,114 L590,138" stroke="#7F77DD" strokeWidth="0.9" fill="none"/>

                <rect x="310" y="138" width="280" height="48" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="450" y="158" textAnchor="middle" dominantBaseline="central">Scalance XC224</text>

                <text fontFamily="inherit" fontSize="12" fill="#9FE1CB" x="450" y="176" textAnchor="middle" dominantBaseline="central">Switch backbone Profinet</text>

                <path d="M450,186 L450,226 L175,226 L175,238" stroke="#1D9E75" strokeWidth="1.2" fill="none"/>

                <path d="M450,186 L450,226 L725,226 L725,238" stroke="#475569" strokeWidth="1" fill="none"/>

                <rect x="60" y="238" width="230" height="52" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="175" y="258" textAnchor="middle" dominantBaseline="central">S7-1516F</text>

                <text fontFamily="inherit" fontSize="12" fill="#F0997B" x="175" y="278" textAnchor="middle" dominantBaseline="central">Safety CPU · F-Program</text>

                <rect x="610" y="238" width="230" height="52" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="725" y="258" textAnchor="middle" dominantBaseline="central">S7-1515</text>

                <text fontFamily="inherit" fontSize="12" fill="#94A3B8" x="725" y="278" textAnchor="middle" dominantBaseline="central">Motion control</text>

                <line x1="290" y1="264" x2="610" y2="264" stroke="#1D9E75" strokeWidth="0.8" strokeDasharray="4 2"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="450" y="258" textAnchor="middle">S7 ↔ S7 Profinet</text>

                <path d="M175,290 L175,298 L110,298 L110,354" stroke="#D85A30" strokeWidth="0.8" strokeDasharray="4 3" fill="none"/>

                <path d="M175,290 L175,298 L265,298 L265,354" stroke="#D85A30" strokeWidth="0.8" strokeDasharray="4 3" fill="none"/>

                <path d="M725,290 V302" stroke="#475569" strokeWidth="0.8" fill="none"/>

                <line x1="366" y1="302" x2="876" y2="302" stroke="#475569" strokeWidth="0.8"/>

                <line x1="426" y1="302" x2="426" y2="354" stroke="#475569" strokeWidth="0.8"/>

                <line x1="554" y1="302" x2="554" y2="354" stroke="#475569" strokeWidth="0.8"/>

                <line x1="682" y1="302" x2="682" y2="354" stroke="#475569" strokeWidth="0.8"/>

                <line x1="810" y1="302" x2="810" y2="354" stroke="#475569" strokeWidth="0.8"/>

                <rect x="40" y="354" width="140" height="42" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="110" y="371" textAnchor="middle" dominantBaseline="central">ET200SP-F</text>

                <text fontFamily="inherit" fontSize="11" fill="#F0997B" x="110" y="387" textAnchor="middle" dominantBaseline="central">Safe DI/DQ</text>

                <rect x="192" y="354" width="155" height="42" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="269" y="371" textAnchor="middle" dominantBaseline="central">PROFIsafe</text>

                <text fontFamily="inherit" fontSize="11" fill="#F0997B" x="269" y="387" textAnchor="middle" dominantBaseline="central">E-stop / safety gate</text>

                {[{x:366,cx:426,n:"01"},{x:494,cx:554,n:"02"},{x:622,cx:682,n:"03"},{x:750,cx:810,n:"04"}].map(({x,cx,n}) => (

                  <g key={n}>

                    <rect x={x} y="354" width="120" height="42" rx="4" fill="#3d2808" stroke="#BA7517" strokeWidth="0.8"/>

                    <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x={cx} y="371" textAnchor="middle" dominantBaseline="central">MOVIDRIVE B</text>

                    <text fontFamily="inherit" fontSize="11" fill="#EF9F27" x={cx} y="387" textAnchor="middle" dominantBaseline="central">SEW {n} · ↑ KEB F5</text>

                  </g>

                ))}

                {[426,554,682,810].map((cx) => (

                  <line key={cx} x1={cx} y1="396" x2={cx} y2="414" stroke="#475569" strokeWidth="0.8"/>

                ))}

                {[{x:366,cx:426,n:"01"},{x:494,cx:554,n:"02"},{x:622,cx:682,n:"03"},{x:750,cx:810,n:"04"}].map(({x,cx,n}) => (

                  <g key={n}>

                    <rect x={x} y="414" width="120" height="42" rx="4" fill="#1a3010" stroke="#3B6D11" strokeWidth="0.8"/>

                    <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x={cx} y="430" textAnchor="middle" dominantBaseline="central">Cobot {n}</text>

                    <text fontFamily="inherit" fontSize="11" fill="#97C459" x={cx} y="446" textAnchor="middle" dominantBaseline="central">Etichettatura</text>

                  </g>

                ))}

                <rect x="30"  y="470" width="10" height="10" rx="2" fill="#3B82F6"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="46"  y="479">SCADA</text>

                <rect x="114" y="470" width="10" height="10" rx="2" fill="#7F77DD"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="130" y="479">Supervisore</text>

                <rect x="236" y="470" width="10" height="10" rx="2" fill="#1D9E75"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="252" y="479">Switch Profinet</text>

                <rect x="374" y="470" width="10" height="10" rx="2" fill="#D85A30"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="390" y="479">Safety (↑ S7-300)</text>

                <rect x="520" y="470" width="10" height="10" rx="2" fill="#BA7517"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="536" y="479">MOVIDRIVE B (↑ KEB F5)</text>

                <rect x="718" y="470" width="10" height="10" rx="2" fill="#3B6D11"/>

                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="734" y="479">Cobot etichettatura</text>

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
