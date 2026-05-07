import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Zap, Lock, Activity, Eye } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import safetyBg from "@/assets/automazione-hardware-hero.jpg";

const features = [
  {
    icon: Shield,
    title: "Safety Integrated",
    description:
      "La CPU S7-1516F integra funzioni di sicurezza SIL3/PLe direttamente nel firmware. Nessun modulo safety esterno necessario per applicazioni fino a SIL3.",
  },
  {
    icon: AlertTriangle,
    title: "Allarmi e shutdown",
    description:
      "Gestione automatica degli Emergency Stop, rilevamento sovrapressioni, livelli eccessivi e temperature fuori range con reazioni deterministiche in millisecondi.",
  },
  {
    icon: Zap,
    title: "Prestazioni F-CPU",
    description:
      "Tempo di ciclo safety fino a 1 ms. Fino a 300 canali I/O safety gestibili direttamente sulla stessa CPU di automazione standard.",
  },
  {
    icon: Lock,
    title: "Redundancy safety",
    description:
      "Architetture ridondanti con due F-CPU in coppia per zero downtime. Sincronizzazione automatica del programma safety tra CPU primaria e backup.",
  },
  {
    icon: Activity,
    title: "Diagnostics integrato",
    description:
      "Ogni canale safety è continuamente monitorato: cross-circuit, differenze temporali, wire-break e short-circuit rilevati automaticamente.",
  },
  {
    icon: Eye,
    title: "Tracciabilità",
    description:
      "Ogni evento safety è loggato con timestamp preciso: chi ha avviato, chi ha bypassato, chi ha resettato. Audit trail conforme a IEC 61508.",
  },
];

const S7Safety = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${safetyBg})` }}
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

          <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            S7-1516F Safety
          </h1>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              La CPU S7-1516F è il cuore di un sistema di automazione safety integrato Siemens.
              Combina le prestazioni di un PLC S7-1500 standard con la logica di sicurezza certificata SIL3
              in un'unica unità. Ideale per applicazioni safety-critical in impianti chimici, petrolchimici,
              alimentari e farmaceutici dove la protezione di persone e impianti è prioritaria.
            </p>

            <div className="mb-10 max-w-3xl">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">
                Caratteristiche principali
              </h3>
              <div className="flex flex-wrap gap-2">
                {["SIL3 / PLe","Safety Integrated","F-CPU S7-1500","TIA Portal","ET200SP Safety","Profinet Safe","F-DI / F-DQ","Diagnostic integrato"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mb-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Esempio architettura safety SVG */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-10 max-w-5xl">
              <h2 className="font-heading text-xl font-semibold mb-2">
                Esempio di architettura safety — Zona reattori
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Schema di una zona reattori con F-CPU S7-1516F, moduli ET200SP safety, sensori e attuatori protetti SIL3.
              </p>

              <svg width="100%" viewBox="0 0 900 400" role="img">
                <title>Architettura safety S7-1516F — Zona reattori</title>
                <desc>F-CPU S7-1516F con ET200SP safety, sensori di livello, pressione, temperatura, pulsanti emergenza e valvole safety.</desc>

                {/* Sfondo */}
                <rect x="0" y="0" width="900" height="400" rx="8" fill="#0b1220" stroke="#1e293b" strokeWidth="1"/>

                {/* Titolo */}
                <rect x="0" y="0" width="900" height="32" rx="8" fill="#0f172a"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="16" y="20">Sistema Safety SIL3 — Zona Reattori R-101 / R-102</text>
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="740" y="20">IEC 61508 · ISO 13849 · S7-1516F</text>

                {/* Livello IT/SCADA */}
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="16" y="52">Supervisione SCADA (rete IT — non safety)</text>
                <line x1="12" y1="56" x2="888" y2="56" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                {/* SCADA */}
                <rect x="16" y="64" width="120" height="40" rx="6" fill="#0f2040" stroke="#2563EB" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="76" y="82" textAnchor="middle">SCADA WinCC</text>
                <text fontFamily="inherit" fontSize="10" fill="#93C5FD" x="76" y="96" textAnchor="middle">Visualizzazione</text>

                {/* Allarmi */}
                <rect x="152" y="64" width="100" height="40" rx="6" fill="#3d1208" stroke="#D85A30" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="202" y="82" textAnchor="middle">Alerting</text>
                <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="202" y="96" textAnchor="middle">Email · SMS</text>

                {/* Connessione verso safety */}
                <line x1="76" y1="104" x2="76" y2="118" stroke="#2563EB" strokeWidth="0.8"/>
                <line x1="76" y1="118" x2="360" y2="118" stroke="#2563EB" strokeWidth="0.8"/>
                <line x1="360" y1="118" x2="360" y2="128" stroke="#2563EB" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="9" fill="#64748B" x="200" y="114">OPC-UA / Profinet (standard)</text>

                {/* Livello Safety */}
                <text fontFamily="inherit" fontSize="10" fill="#7f1d1d" x="16" y="142">Rete Safety — Profinet Safe (iso 1 ms, deterministico)</text>
                <line x1="12" y1="146" x2="888" y2="146" stroke="#7f1d1d" strokeWidth="0.5" strokeDasharray="4 3"/>

                {/* F-CPU S7-1516F */}
                <rect x="280" y="154" width="160" height="72" rx="6" fill="#3d0808" stroke="#D85A30" strokeWidth="1.2"/>
                <text fontFamily="inherit" fontSize="13" fontWeight="600" fill="#F1F5F9" x="360" y="176" textAnchor="middle">F-CPU S7-1516F</text>
                <text fontFamily="inherit" fontSize="10" fill="#F0997B" x="360" y="192" textAnchor="middle">Safety Integrated · SIL3</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="360" y="208" textAnchor="middle">Ciclo safety: 10 ms · F-DI: 24 · F-DQ: 16</text>
                <rect x="290" y="162" width="14" height="14" rx="3" fill="#ef4444"/>
                <text fontFamily="inherit" fontSize="8" fill="#fff" x="297" y="172" textAnchor="middle" fontWeight="700">F</text>

                {/* ET200SP Safety 1 */}
                <rect x="16" y="154" width="140" height="72" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="86" y="172" textAnchor="middle">ET200SP Safety</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="86" y="188" textAnchor="middle">F-DI 8x24V · F-DQ 4x24V</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="86" y="204" textAnchor="middle">Zona Reattore R-101</text>

                {/* ET200SP Safety 2 */}
                <rect x="564" y="154" width="140" height="72" rx="6" fill="#2a1506" stroke="#D97706" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="634" y="172" textAnchor="middle">ET200SP Safety</text>
                <text fontFamily="inherit" fontSize="10" fill="#FBB07A" x="634" y="188" textAnchor="middle">F-DI 8x24V · F-DQ 4x24V</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="634" y="204" textAnchor="middle">Zona Reattore R-102</text>

                {/* ET200SP Safety 3 */}
                <rect x="724" y="154" width="140" height="72" rx="6" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="12" fontWeight="600" fill="#F1F5F9" x="794" y="172" textAnchor="middle">ET200SP Safety</text>
                <text fontFamily="inherit" fontSize="10" fill="#9FE1CB" x="794" y="188" textAnchor="middle">F-DI 8x24V · F-DQ 4x24V</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="794" y="204" textAnchor="middle">Zona Distillazione</text>

                {/* Connessioni verso F-CPU */}
                <line x1="156" y1="190" x2="280" y2="190" stroke="#D97706" strokeWidth="1"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="218" y="186" textAnchor="middle">Profinet Safe</text>

                <line x1="440" y1="190" x2="564" y2="190" stroke="#D97706" strokeWidth="1"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="502" y="186" textAnchor="middle">Profinet Safe</text>

                <line x1="440" y1="198" x2="724" y2="198" stroke="#1D9E75" strokeWidth="1"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="582" y="194" textAnchor="middle">Profinet Safe</text>

                {/* Livello Campo */}
                <text fontFamily="inherit" fontSize="10" fill="#64748B" x="16" y="244">Campo — Sensori e attuatori safety (doppio canale, SIL3)</text>
                <line x1="12" y1="248" x2="888" y2="248" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 3"/>

                {/* Sensori R-101 */}
                <rect x="16" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="50" y="272" textAnchor="middle">LSH-101</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="50" y="286" textAnchor="middle">Livello alto</text>
                <circle cx="50" cy="300" r="4" fill="#22c55e"/>

                <rect x="92" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="126" y="272" textAnchor="middle">PSH-101</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="126" y="286" textAnchor="middle">Press. alta</text>
                <circle cx="126" cy="300" r="4" fill="#22c55e"/>

                {/* E-Stop R-101 */}
                <rect x="16" y="316" width="68" height="44" rx="5" fill="#450a0a" stroke="#ef4444" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#fca5a5" x="50" y="332" textAnchor="middle">E-Stop</text>
                <text fontFamily="inherit" fontSize="8" fill="#fca5a5" x="50" y="346" textAnchor="middle">R-101 A</text>
                <circle cx="50" cy="360" r="4" fill="#22c55e"/>

                <rect x="92" y="316" width="68" height="44" rx="5" fill="#450a0a" stroke="#ef4444" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#fca5a5" x="126" y="332" textAnchor="middle">E-Stop</text>
                <text fontFamily="inherit" fontSize="8" fill="#fca5a5" x="126" y="346" textAnchor="middle">R-101 B</text>
                <circle cx="126" cy="360" r="4" fill="#22c55e"/>

                {/* Valvole safety R-101 */}
                <rect x="16" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="50" y="386" textAnchor="middle">XV-101</text>

                <rect x="92" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="126" y="386" textAnchor="middle">XV-102</text>

                {/* Sensori R-102 */}
                <rect x="564" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="598" y="272" textAnchor="middle">TSH-201</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="598" y="286" textAnchor="middle">Temp. alta</text>
                <circle cx="598" cy="300" r="4" fill="#22c55e"/>

                <rect x="640" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="674" y="272" textAnchor="middle">LSH-201</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="674" y="286" textAnchor="middle">Livello alto</text>
                <circle cx="674" cy="300" r="4" fill="#22c55e"/>

                {/* E-Stop R-102 */}
                <rect x="564" y="316" width="68" height="44" rx="5" fill="#450a0a" stroke="#ef4444" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#fca5a5" x="598" y="332" textAnchor="middle">E-Stop</text>
                <text fontFamily="inherit" fontSize="8" fill="#fca5a5" x="598" y="346" textAnchor="middle">R-102</text>
                <circle cx="598" cy="360" r="4" fill="#22c55e"/>

                {/* Valvole safety R-102 */}
                <rect x="564" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="598" y="386" textAnchor="middle">XV-201</text>

                <rect x="640" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="674" y="386" textAnchor="middle">XV-202</text>

                {/* Sensori Distillazione */}
                <rect x="724" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="758" y="272" textAnchor="middle">PSH-301</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="758" y="286" textAnchor="middle">Press. alta</text>
                <circle cx="758" cy="300" r="4" fill="#22c55e"/>

                <rect x="800" y="256" width="68" height="44" rx="5" fill="#0f172a" stroke="#475569" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="9" fontWeight="600" fill="#F1F5F9" x="834" y="272" textAnchor="middle">TSH-301</text>
                <text fontFamily="inherit" fontSize="8" fill="#94a3b8" x="834" y="286" textAnchor="middle">Temp. alta</text>
                <circle cx="834" cy="300" r="4" fill="#22c55e"/>

                {/* Valvole safety Distillazione */}
                <rect x="724" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="758" y="386" textAnchor="middle">XV-301</text>

                <rect x="800" y="372" width="68" height="22" rx="4" fill="#0a3d2e" stroke="#1D9E75" strokeWidth="0.6"/>
                <text fontFamily="inherit" fontSize="8" fill="#9FE1CB" x="834" y="386" textAnchor="middle">XV-302</text>

                {/* Schema logico safety */}
                <rect x="200" y="256" width="340" height="140" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.8"/>
                <text fontFamily="inherit" fontSize="11" fontWeight="600" fill="#F1F5F9" x="212" y="274">Logica safety — Esempio: Livello alto reattore R-101</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="212" y="292">1. LSH-101 (canale A+B) rileva livello oltre 95%</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="212" y="308">2. Cross-circuit check: differenza &lt; 50 ms</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="212" y="324">3. F-CPU esegue shutdown in 20 ms</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="212" y="340">4. XV-101 e XV-102 chiudono (doppio canale F-DQ)</text>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="212" y="356">5. Allarme inviato a SCADA + Alerting</text>
                <text fontFamily="inherit" fontSize="9" fill="#4ade80" x="212" y="376">SIL3: PFD = 2.5×10⁻⁴ · MTBF = 150 anni</text>

                {/* Legenda */}
                <rect x="16" y="148" width="10" height="10" rx="2" fill="#ef4444"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="30" y="156">Rete Safety</text>
                <rect x="100" y="148" width="10" height="10" rx="2" fill="#22c55e"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="114" y="156">Canale OK</text>
                <rect x="180" y="148" width="10" height="10" rx="2" fill="#D97706"/>
                <text fontFamily="inherit" fontSize="9" fill="#94a3b8" x="194" y="156">ET200SP Safety</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default S7Safety;
