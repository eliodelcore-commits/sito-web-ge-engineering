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
              <svg width="100%" viewBox="0 0 900 480" role="img" style={{ minWidth: "600px" }}>

  <title>Revamping linea confezionamento — Topologia Profinet</title>

  <desc>Upgrade S7-300 a S7-1516F Safety, KEB F5 a SEW MOVIDRIVE B, 4 cobot etichettatura su Profinet.</desc>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="16" textAnchor="middle">Livello 2 — Supervisione</text>

  <line x1="30" y1="108" x2="870" y2="108" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="122" textAnchor="middle">Livello 1 — Rete Profinet (Scalance XC224)</text>

  <line x1="30" y1="202" x2="870" y2="202" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="216" textAnchor="middle">Livello 0a — Controllo · Safety + Motion</text>

  <line x1="30" y1="304" x2="870" y2="304" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="318" textAnchor="middle">Livello 0b — Campo · Linea confezionamento (post-revamping)</text>

  <line x1="220" y1="56" x2="680" y2="56" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5 3"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="50" textAnchor="middle">ridondanza hot-standby</text>

  <rect x="50" y="32" width="170" height="48" rx="6" fill="#1e3a5f" stroke="#3B82F6" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,fill:"#F1F5F9"}} x="135" y="51" textAnchor="middle" dominantBaseline="central">Server WinCC</text>

  <text style={{fontFamily:"inherit",fontSize:"12px",fill:"#94A3B8"}} x="135" y="69" textAnchor="middle" dominantBaseline="central">SCADA primario</text>

  <rect x="680" y="32" width="170" height="48" rx="6" fill="#2d1f6e" stroke="#7F77DD" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,fill:"#F1F5F9"}} x="765" y="51" textAnchor="middle" dominantBaseline="central">Supervisore</text>

  <text style={{fontFamily:"inherit",fontSize:"12px",fill:"#94A3B8"}} x="765" y="69" textAnchor="middle" dominantBaseline="central">Operatore HMI</text>

  <path d="M135,80 L135,112 L310,112 L310,140" stroke="#3B82F6" strokeWidth="0.9" fill="none"/>

  <path d="M765,80 L765,112 L590,112 L590,140" stroke="#7F77DD" strokeWidth="0.9" fill="none"/>

  <rect x="310" y="140" width="280" height="48" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,fill:"#F1F5F9"}} x="450" y="159" textAnchor="middle" dominantBaseline="central">Scalance XC224</text>

  <text style={{fontFamily:"inherit",fontSize:"12px",fill:"#94A3B8"}} x="450" y="177" textAnchor="middle" dominantBaseline="central">Switch backbone Profinet</text>

  <path d="M450,188 L450,210 L175,210 L175,236" stroke="#1D9E75" strokeWidth="1.2" fill="none"/>

  <path d="M450,188 L450,210 L725,210 L725,236" stroke="#475569" strokeWidth="1" fill="none"/>

  <rect x="60" y="236" width="230" height="52" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,fill:"#F1F5F9"}} x="175" y="255" textAnchor="middle" dominantBaseline="central">S7-1516F</text>

  <text style={{fontFamily:"inherit",fontSize:"12px",fill:"#F0997B"}} x="175" y="275" textAnchor="middle" dominantBaseline="central">Safety CPU · F-Program</text>

  <rect x="610" y="236" width="230" height="52" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"14px",fontWeight:600,fill:"#F1F5F9"}} x="725" y="255" textAnchor="middle" dominantBaseline="central">S7-1515</text>

  <text style={{fontFamily:"inherit",fontSize:"12px",fill:"#94A3B8"}} x="725" y="275" textAnchor="middle" dominantBaseline="central">Motion control</text>

  <line x1="290" y1="262" x2="610" y2="262" stroke="#1D9E75" strokeWidth="0.8" strokeDasharray="4 2"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="450" y="256" textAnchor="middle">S7 ↔ S7 Profinet</text>

  <path d="M175,288 L110,336" stroke="#D85A30" strokeWidth="0.8" strokeDasharray="4 3" fill="none"/>

  <path d="M175,288 L175,316 L265,316 L265,336" stroke="#D85A30" strokeWidth="0.8" strokeDasharray="4 3" fill="none"/>

  <rect x="40" y="336" width="140" height="40" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"13px",fontWeight:600,fill:"#F1F5F9"}} x="110" y="352" textAnchor="middle" dominantBaseline="central">ET200SP-F</text>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#F0997B"}} x="110" y="368" textAnchor="middle" dominantBaseline="central">Safe DI/DQ</text>

  <rect x="195" y="336" width="145" height="40" rx="4" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>

  <text style={{fontFamily:"inherit",fontSize:"13px",fontWeight:600,fill:"#F1F5F9"}} x="267" y="352" textAnchor="middle" dominantBaseline="central">PROFIsafe</text>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#F0997B"}} x="267" y="368" textAnchor="middle" dominantBaseline="central">E-stop / safety gate</text>

  <path d="M725,288 V316" stroke="#475569" strokeWidth="0.8" fill="none"/>

  <line x1="390" y1="316" x2="860" y2="316" stroke="#475569" strokeWidth="0.8"/>

  {[430,540,650,760].map((cx) => (

    <line key={cx} x1={cx} y1="316" x2={cx} y2="336" stroke="#475569" strokeWidth="0.8"/>

  ))}

  {[{x:390,cx:430,n:"01"},{x:500,cx:540,n:"02"},{x:610,cx:650,n:"03"},{x:720,cx:760,n:"04"}].map(({x,cx,n}) => (

    <g key={n}>

      <rect x={x} y="336" width="100" height="40" rx="4" fill="#3d2808" stroke="#BA7517" strokeWidth="0.8"/>

      <text style={{fontFamily:"inherit",fontSize:"13px",fontWeight:600,fill:"#F1F5F9"}} x={cx} y="352" textAnchor="middle" dominantBaseline="central">MOVIDRIVE B</text>

      <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#EF9F27"}} x={cx} y="368" textAnchor="middle" dominantBaseline="central">SEW {n} ↑ KEB F5</text>

    </g>

  ))}

  {[430,540,650,760].map((cx) => (

    <line key={cx} x1={cx} y1="376" x2={cx} y2="394" stroke="#475569" strokeWidth="0.8"/>

  ))}

  {[{x:390,cx:430,n:"01"},{x:500,cx:540,n:"02"},{x:610,cx:650,n:"03"},{x:720,cx:760,n:"04"}].map(({x,cx,n}) => (

    <g key={n}>

      <rect x={x} y="394" width="100" height="40" rx="4" fill="#1a3010" stroke="#3B6D11" strokeWidth="0.8"/>

      <text style={{fontFamily:"inherit",fontSize:"13px",fontWeight:600,fill:"#F1F5F9"}} x={cx} y="410" textAnchor="middle" dominantBaseline="central">Cobot {n}</text>

      <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#97C459"}} x={cx} y="426" textAnchor="middle" dominantBaseline="central">Etichettatura</text>

    </g>

  ))}

  <rect x="30" y="452" width="10" height="10" rx="2" fill="#3B82F6"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="46" y="461">SCADA</text>

  <rect x="110" y="452" width="10" height="10" rx="2" fill="#7F77DD"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="126" y="461">Supervisore</text>

  <rect x="230" y="452" width="10" height="10" rx="2" fill="#1D9E75"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="246" y="461">Switch Profinet</text>

  <rect x="368" y="452" width="10" height="10" rx="2" fill="#D85A30"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="384" y="461">Safety (↑ S7-300)</text>

  <rect x="514" y="452" width="10" height="10" rx="2" fill="#BA7517"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="530" y="461">MOVIDRIVE B (↑ KEB F5)</text>

  <rect x="710" y="452" width="10" height="10" rx="2" fill="#3B6D11"/>

  <text style={{fontFamily:"inherit",fontSize:"11px",fill:"#64748B"}} x="726" y="461">Cobot etichettatura</text>

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
