import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Power, Activity, GitBranch, FileCheck, Siren } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import esdBg from "@/assets/automazione-software-hero.jpg";

const features = [
  {
    icon: ShieldAlert,
    title: "SIL 3 certificato",
    description:
      "Sistema strumentato di sicurezza certificato SIL 3 secondo IEC 61508 / IEC 61511. Logica safety eseguita su F-CPU Siemens ridondata.",
  },
  {
    icon: Power,
    title: "Shutdown sequenziale",
    description:
      "Sequenze di emergency shutdown configurabili per livelli (PSD, USD, ESD-1, ESD-2) con logica di causa-effetto matrix dedicata.",
  },
  {
    icon: Activity,
    title: "Indipendenza dal DCS",
    description:
      "L'ESD opera in modo indipendente dal sistema di controllo di processo (BPCS): cablaggi, alimentazione e CPU separati per garantire layer di protezione.",
  },
  {
    icon: GitBranch,
    title: "Logica causa-effetto",
    description:
      "Matrice causa-effetto (C&E matrix) implementata in F-Program. Ogni input di sicurezza attiva azioni multiple su valvole, pompe, blower.",
  },
  {
    icon: FileCheck,
    title: "Proof test & SIF",
    description:
      "Gestione delle Safety Instrumented Functions con proof test programmati, bypass tracciati e audit trail completo per conformità normativa.",
  },
  {
    icon: Siren,
    title: "Allarmi prioritari",
    description:
      "Allarmi ESD a priorità massima sull'HMI operatore, con segnalazione acustica, lampeggianti e notifica al sistema antincendio dello stabilimento.",
  },
];

const ESD = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${esdBg})` }}
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
              to="/progetti/scada-chimico"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Progetto SCADA chimico
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia · Safety</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            ESD — Emergency Shutdown System
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            L'ESD (Emergency Shutdown System) è il sistema di sicurezza strumentato
            che porta l'impianto in stato sicuro in caso di anomalia grave: incendio,
            sovrappressione, perdita di contenimento, gas tossico. Opera in modo
            indipendente dal sistema di controllo di processo (BPCS / DCS) e
            costituisce un layer di protezione SIL certificato secondo IEC 61511.
          </p>

          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
              Caratteristiche principali
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SIL 3 (IEC 61508/61511)",
                "F-CPU Siemens ridondata",
                "PROFIsafe",
                "Cause & Effect matrix",
                "Proof test SIF",
                "Bypass tracciato",
                "Indipendenza dal BPCS",
                "Fail-safe de-energize",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
            <h2 className="font-heading text-xl font-semibold mb-2">
              Esempio di matrice Causa-Effetto
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Cause (sensori safety) sulle righe, effetti (azioni di shutdown) sulle colonne.
              Il pallino indica l'azione attivata in caso di trigger.
            </p>

            <svg width="100%" viewBox="0 0 900 420" role="img">
              <title>ESD Cause &amp; Effect matrix</title>
              <desc>Matrice di causa-effetto del sistema ESD del reparto reazione.</desc>

              <rect x="0" y="0" width="900" height="420" rx="10" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

              {/* Top bar */}
              <rect x="0" y="0" width="900" height="36" rx="10" fill="#0f172a"/>
              <circle cx="22" cy="18" r="6" fill="#ef4444"/>
              <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="38" y="23">ESD-01 · Reparto Reazione · Cause &amp; Effect</text>
              <text fontFamily="inherit" fontSize="11" fill="#94a3b8" x="700" y="23">SIL 3 · F-CPU 1518F-4 PN/DP</text>

              {/* Header columns */}
              <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="68">CAUSA \ EFFETTO</text>
              <g fontFamily="inherit" fontSize="10" fill="#94a3b8">
                <text x="280" y="56" textAnchor="middle">XV-101</text>
                <text x="280" y="68" textAnchor="middle">chiusa</text>
                <text x="360" y="56" textAnchor="middle">XV-102</text>
                <text x="360" y="68" textAnchor="middle">chiusa</text>
                <text x="440" y="56" textAnchor="middle">P-201</text>
                <text x="440" y="68" textAnchor="middle">stop</text>
                <text x="520" y="56" textAnchor="middle">P-202</text>
                <text x="520" y="68" textAnchor="middle">stop</text>
                <text x="600" y="56" textAnchor="middle">M-301</text>
                <text x="600" y="68" textAnchor="middle">stop</text>
                <text x="680" y="56" textAnchor="middle">PSV</text>
                <text x="680" y="68" textAnchor="middle">vent</text>
                <text x="760" y="56" textAnchor="middle">N2</text>
                <text x="760" y="68" textAnchor="middle">purge</text>
                <text x="840" y="56" textAnchor="middle">F&amp;G</text>
                <text x="840" y="68" textAnchor="middle">trip</text>
              </g>

              {/* Vertical separators */}
              {[240,320,400,480,560,640,720,800,880].map((x) => (
                <line key={x} x1={x} y1="78" x2={x} y2="380" stroke="#1e293b" strokeWidth="0.6"/>
              ))}
              <line x1="20" y1="78" x2="880" y2="78" stroke="#334155" strokeWidth="0.8"/>

              {/* Rows */}
              {[
                {
                  y: 100, sev: "#ef4444", code: "PT-101 HH", desc: "Pressione molto alta reattore",
                  effects: [280, 360, 440, 520, 600, 680],
                },
                {
                  y: 138, sev: "#ef4444", code: "TT-201 HH", desc: "Temperatura molto alta scambiatore",
                  effects: [280, 440, 520, 600],
                },
                {
                  y: 176, sev: "#facc15", code: "LT-301 LL", desc: "Livello bassissimo serbatoio reagente",
                  effects: [440, 520, 600],
                },
                {
                  y: 214, sev: "#ef4444", code: "GD-401 (gas)", desc: "Rilevatore gas tossico > 50% LEL",
                  effects: [280, 360, 440, 520, 600, 680, 760, 840],
                },
                {
                  y: 252, sev: "#ef4444", code: "FD-402 (fuoco)", desc: "Rilevatore fiamma confermato",
                  effects: [280, 360, 440, 520, 600, 760, 840],
                },
                {
                  y: 290, sev: "#facc15", code: "PB ESD-MAN", desc: "Pulsante emergency shutdown manuale",
                  effects: [280, 360, 440, 520, 600, 680, 760],
                },
                {
                  y: 328, sev: "#3B82F6", code: "BPCS fail", desc: "Perdita comunicazione con BPCS > 5s",
                  effects: [440, 520, 600],
                },
              ].map((row) => (
                <g key={row.code}>
                  <line x1="20" y1={row.y + 18} x2="880" y2={row.y + 18} stroke="#1e293b" strokeWidth="0.6"/>
                  <circle cx="32" cy={row.y + 6} r="4" fill={row.sev}/>
                  <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="44" y={row.y + 10}>{row.code}</text>
                  <text fontFamily="inherit" fontSize="10" fill="#94a3b8" x="44" y={row.y + 24}>{row.desc}</text>
                  {row.effects.map((cx) => (
                    <circle key={cx} cx={cx} cy={row.y + 6} r="6" fill="#ef4444" opacity="0.85"/>
                  ))}
                </g>
              ))}

              {/* Footer / status */}
              <rect x="20" y="384" width="860" height="28" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="0.6"/>
              <circle cx="34" cy="398" r="5" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="46" y="402">F-CPU sana · Watchdog OK</text>
              <circle cx="240" cy="398" r="5" fill="#22c55e"/>
              <text fontFamily="inherit" fontSize="10" fill="#86efac" x="252" y="402">PROFIsafe · 0 errori CRC</text>
              <circle cx="450" cy="398" r="5" fill="#facc15"/>
              <text fontFamily="inherit" fontSize="10" fill="#fde68a" x="462" y="402">2 SIF in bypass (manutenzione tracciata)</text>
              <text fontFamily="inherit" fontSize="10" fill="#64748B" x="740" y="402">Prossimo proof test: 14/06/2026</text>
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ESD;