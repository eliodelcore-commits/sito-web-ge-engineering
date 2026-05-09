import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, AlertTriangle, Cpu, Network, FileCheck, Lock } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import safetyBg from "@/assets/automazione-software-hero.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "SIL 3 / PL e",
    description:
      "Progettazione di funzioni di sicurezza certificate secondo IEC 61508, IEC 62061 e ISO 13849-1 fino a SIL 3 e Performance Level e.",
  },
  {
    icon: Cpu,
    title: "F-CPU & F-Program",
    description:
      "Logica safety eseguita su CPU fail-safe Siemens (S7-1500F) con F-Program separato dal programma standard, controllo diversificato e watchdog hardware.",
  },
  {
    icon: Network,
    title: "PROFIsafe su Profinet",
    description:
      "Profilo black channel PROFIsafe: stesso cavo Profinet trasporta segnali standard e safety, con codici CRC, contatori e timeout per integrità dati.",
  },
  {
    icon: AlertTriangle,
    title: "Risk assessment",
    description:
      "Analisi dei rischi secondo ISO 12100, calcolo PL richiesto via SISTEMA, definizione delle SIF (Safety Instrumented Functions) e LOPA per processo.",
  },
  {
    icon: Lock,
    title: "Fail-safe by design",
    description:
      "Architettura de-energize-to-trip: in caso di guasto, perdita alimentazione o comunicazione, il sistema porta gli attuatori in stato sicuro.",
  },
  {
    icon: FileCheck,
    title: "Validazione & audit",
    description:
      "Test funzionali documentati, proof test programmati, gestione bypass tracciata, fascicolo tecnico completo per dichiarazione di conformità Direttiva Macchine.",
  },
];

const standards = [
  { code: "IEC 61508", desc: "Sicurezza funzionale sistemi E/E/PE" },
  { code: "IEC 61511", desc: "Safety di processo (industria di processo)" },
  { code: "IEC 62061", desc: "Sicurezza funzionale macchinario" },
  { code: "ISO 13849-1", desc: "Parti dei sistemi di comando legate alla sicurezza" },
  { code: "ISO 12100", desc: "Valutazione e riduzione del rischio" },
  { code: "Dir. 2006/42/CE", desc: "Direttiva Macchine" },
];

const Safety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${safetyBg})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 55%, hsl(var(--background) / 0.6) 100%)",
        }}
        aria-hidden="true"
      />
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <Link
            to="/progetti"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tutti i progetti
          </Link>

          <p className="text-primary text-sm font-medium mb-2">Tecnologia · Sicurezza funzionale</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Safety — Sicurezza funzionale industriale
          </h1>

          <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-3xl">
            Progettiamo, implementiamo e validiamo funzioni di sicurezza certificate per macchine
            e impianti di processo. Dalla valutazione del rischio iniziale alla messa in servizio,
            con architetture F-CPU Siemens e bus PROFIsafe fino a SIL 3 / PL e.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mb-16">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-border bg-card/85 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-3">Architettura safety tipica</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
              Sensori safety (pulsanti emergenza, barriere, scanner laser) collegati a moduli ET200SP-F
              tramite ingressi F-DI, F-CPU che esegue il programma fail-safe, attuatori safety
              (valvole, contattori) pilotati da uscite F-DQ.
            </p>
            <div className="rounded-xl border border-border bg-card p-6">
              <svg width="100%" viewBox="0 0 900 320" role="img">
                <title>Catena safety</title>
                <desc>Sensori safety, ET200SP-F, F-CPU S7-1516F, attuatori safety.</desc>

                <line x1="20" y1="50" x2="880" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                <line x1="20" y1="170" x2="880" y2="170" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="20">Campo · sensori &amp; attuatori safety</text>
                <text fontFamily="inherit" fontSize="11" fill="#64748B" x="20" y="190">Logica safety · F-CPU + PROFIsafe</text>

                {/* Sensori */}
                <rect x="40" y="60" width="120" height="40" rx="5" fill="#3a1010" stroke="#dc2626"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="100" y="76" textAnchor="middle">E-Stop</text>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="100" y="90" textAnchor="middle">pulsante emergenza</text>

                <rect x="180" y="60" width="120" height="40" rx="5" fill="#3a1010" stroke="#dc2626"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="240" y="76" textAnchor="middle">Light curtain</text>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="240" y="90" textAnchor="middle">barriera ottica</text>

                <rect x="320" y="60" width="120" height="40" rx="5" fill="#3a1010" stroke="#dc2626"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="380" y="76" textAnchor="middle">Safety scanner</text>
                <text fontFamily="inherit" fontSize="10" fill="#fca5a5" x="380" y="90" textAnchor="middle">scanner laser</text>

                {/* Attuatori */}
                <rect x="500" y="60" width="120" height="40" rx="5" fill="#0a3d2e" stroke="#1D9E75"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="560" y="76" textAnchor="middle">Contattore</text>
                <text fontFamily="inherit" fontSize="10" fill="#9FE1CB" x="560" y="90" textAnchor="middle">drive STO</text>

                <rect x="640" y="60" width="120" height="40" rx="5" fill="#0a3d2e" stroke="#1D9E75"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="700" y="76" textAnchor="middle">Valvola safety</text>
                <text fontFamily="inherit" fontSize="10" fill="#9FE1CB" x="700" y="90" textAnchor="middle">de-energize trip</text>

                {/* I/O safety */}
                <rect x="100" y="200" width="180" height="44" rx="5" fill="#141e30" stroke="#4A6090"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="190" y="218" textAnchor="middle">ET200SP-F (F-DI)</text>
                <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="190" y="234" textAnchor="middle">ingressi safety</text>

                <rect x="540" y="200" width="180" height="44" rx="5" fill="#141e30" stroke="#4A6090"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="630" y="218" textAnchor="middle">ET200SP-F (F-DQ)</text>
                <text fontFamily="inherit" fontSize="10" fill="#7EA8D0" x="630" y="234" textAnchor="middle">uscite safety</text>

                {/* CPU */}
                <rect x="340" y="200" width="180" height="60" rx="6" fill="#1f1306" stroke="#C2702A"/>
                <text fontFamily="inherit" fontSize="14" fontWeight="600" fill="#F1F5F9" x="430" y="222" textAnchor="middle">F-CPU S7-1516F</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="430" y="238" textAnchor="middle">F-Program · SIL 3 / PL e</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="430" y="252" textAnchor="middle">PROFIsafe black channel</text>

                {/* Connessioni */}
                <line x1="100" y1="100" x2="160" y2="200" stroke="#dc2626" strokeWidth="1"/>
                <line x1="240" y1="100" x2="190" y2="200" stroke="#dc2626" strokeWidth="1"/>
                <line x1="380" y1="100" x2="220" y2="200" stroke="#dc2626" strokeWidth="1"/>

                <line x1="280" y1="222" x2="340" y2="222" stroke="#C2702A" strokeWidth="2"/>
                <line x1="520" y1="222" x2="540" y2="222" stroke="#C2702A" strokeWidth="2"/>

                <line x1="560" y1="100" x2="600" y2="200" stroke="#1D9E75" strokeWidth="1"/>
                <line x1="700" y1="100" x2="660" y2="200" stroke="#1D9E75" strokeWidth="1"/>

                <text fontFamily="inherit" fontSize="10" fill="#C2702A" x="430" y="290" textAnchor="middle">PROFIsafe su Profinet — CRC, sequence number, timeout</text>
              </svg>
            </div>
          </section>

          <section className="max-w-6xl">
            <h2 className="font-heading text-2xl font-semibold mb-6">Norme di riferimento</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {standards.map((s) => (
                <div
                  key={s.code}
                  className="p-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm"
                >
                  <div className="font-heading font-semibold text-base mb-1">{s.code}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              <h3 className="font-heading text-lg font-semibold mb-3">Tecnologie correlate</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <Link to="/s7-safety" className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors">S7-1516F Safety</Link>
                <Link to="/esd" className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors">ESD</Link>
                <Link to="/profinet" className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors">Profinet / PROFIsafe</Link>
                <Link to="/siemens" className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors">Device Siemens</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
