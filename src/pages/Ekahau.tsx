import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Radio, Map, BarChart3, Cpu, Sparkles } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import bg from "@/assets/ekahau-hero-bg.jpg";
import sidekick2Img from "@/assets/ekahau-sidekick2.png";
import surveyAppImg from "@/assets/ekahau-survey-app.png";
import analyzerAppImg from "@/assets/ekahau-analyzer-app.png";
import aiproChannel from "@/assets/ekahau-aipro-channel.png";
import aiproInspect from "@/assets/ekahau-aipro-inspect.png";
import sk2Radios from "@/assets/ekahau-sidekick2-radios.png";
import sk2Antennas from "@/assets/ekahau-sidekick2-antennas.png";

const hardware = [
  {
    name: "Ekahau Sidekick 2",
    desc: "Strumento all-in-one per site survey professionali. Integra due radio Wi-Fi 6/6E tri-band (2.4 / 5 / 6 GHz), spectrum analyzer dual-band e GPS. Misure simultanee attive e passive in un'unica passata, con accuratezza calibrata in fabbrica.",
    specs: ["Wi-Fi 6E (2.4/5/6 GHz)", "Spectrum analyzer integrato", "8 antenne calibrate", "USB-C su laptop o iPhone/iPad"],
  },
  {
    name: "Ekahau Sidekick (gen 1)",
    desc: "Predecessore del Sidekick 2, supporta Wi-Fi 5 e analisi spettro 2.4/5 GHz. Ancora ampiamente utilizzato per audit e survey su reti legacy.",
    specs: ["Wi-Fi 5 (802.11ac)", "Spectrum analyzer", "Bande 2.4/5 GHz"],
  },
];

const software = [
  {
    name: "Ekahau AI Pro",
    icon: Sparkles,
    desc: "Suite desktop per progettazione predittiva, survey attivo/passivo, analisi 3D multi-piano e auto-planner AI. Genera posizionamento ottimale degli AP, channel plan e BoM in pochi click.",
  },
  {
    name: "Ekahau Survey (Analyzer)",
    icon: Map,
    desc: "Modulo di acquisizione e analisi misure on-site: heatmap di copertura (RSSI), SNR, channel overlap, data rate, packet loss, roaming e capacity planning per client density elevata.",
  },
  {
    name: "Ekahau Capture",
    icon: Radio,
    desc: "Packet capture wireless multi-canale con timestamp sincronizzati, integrato con Sidekick 2. Ideale per analisi roaming, 802.11k/v/r e troubleshooting di disconnessioni AGV/RGV.",
  },
  {
    name: "Ekahau Analyzer (mobile)",
    icon: Wifi,
    desc: "App per iPhone/iPad con Sidekick 2 collegato in USB-C: walk-test rapidi, validazione post-installazione e troubleshooting puntuale direttamente in campo.",
  },
  {
    name: "Ekahau Cloud",
    icon: Cpu,
    desc: "Sincronizzazione progetti tra team, versioning, condivisione planimetrie e report con il cliente. Lavoro collaborativo tra progettisti predittivi e tecnici sul campo.",
  },
  {
    name: "Ekahau Insights",
    icon: BarChart3,
    desc: "Monitoraggio continuo della qualità Wi-Fi post go-live: trend di copertura, capacità e performance nel tempo, con alert su degrado e drift di canale.",
  },
];

const Ekahau = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px]">
        <img
          src={bg}
          alt="Ekahau Sidekick 2 e Survey Analyzer"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <Link
              to="/servizi/wireless-planning"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wireless Planning
            </Link>
            <p className="text-primary text-sm font-medium mb-2">Tecnologia</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Ekahau AI
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lo standard di riferimento per il design, il survey e l'ottimizzazione di reti
              Wi-Fi mission critical. Hardware Sidekick 2 + suite software per coprire l'intero
              ciclo di vita della rete wireless.
            </p>
          </div>
        </div>
      </div>

      {/* Sidekick 2 hero showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-medium mb-2">Hardware</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ekahau Sidekick 2</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lo strumento di misura Wi-Fi più veloce e accurato disponibile, ottimizzato per reti
                tri-band 2.4 / 5 / 6 GHz. Integra 4 radio, 9 antenne wideband calibrate, spectrum
                analyzer dual-band e GPS in un unico dispositivo collegato via USB-C a laptop o
                iPhone/iPad.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["4", "Radio tri-band"],
                  ["9", "Antenne wideband"],
                  ["6 GHz", "Wi-Fi 6E ready"],
                  ["8 h", "Autonomia batteria"],
                ].map(([v, l]) => (
                  <div key={l} className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-2xl font-heading font-bold text-primary">{v}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={sidekick2Img}
                alt="Ekahau Sidekick 2 con Survey App"
                className="w-full rounded-xl"
                loading="lazy"
                width={2550}
                height={2550}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="p-6 rounded-xl border border-border bg-card">
              <img src={sk2Radios} alt="4 radio tri-band" className="w-full h-48 object-contain mb-4" loading="lazy" />
              <h3 className="font-heading text-lg font-semibold mb-2">4 radio tri-band</h3>
              <p className="text-sm text-muted-foreground">
                Acquisizione simultanea su 2.4, 5 e 6 GHz: survey più rapidi e dataset completi in una singola passata.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <img src={sk2Antennas} alt="9 antenne wideband calibrate" className="w-full h-48 object-contain mb-4" loading="lazy" />
              <h3 className="font-heading text-lg font-semibold mb-2">9 antenne calibrate</h3>
              <p className="text-sm text-muted-foreground">
                Calibrazione di fabbrica che garantisce misure ripetibili e accurate per design e validazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekahau AI Pro showcase */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <p className="text-primary text-sm font-medium mb-2">Software</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ekahau AI Pro</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La piattaforma desktop per la progettazione predittiva, il survey attivo/passivo e
                la validazione 3D multi-piano di reti Wi-Fi enterprise. Auto-planner basato su AI,
                channel plan automatico, BoM degli AP e analisi di capacità in pochi click.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>Design predittivo su planimetrie CAD/BIM importate</li>
                <li>Heatmap RSSI, SNR, throughput, channel overlap, roaming</li>
                <li>Supporto completo Wi-Fi 6 / 6E e bande 6 GHz</li>
                <li>Auto-Planner AI: posizionamento e configurazione AP ottimale</li>
                <li>Report PDF, esportazione channel plan e BoM</li>
              </ul>
            </div>
            <div className="lg:order-1">
              <img
                src={aiproInspect}
                alt="Interfaccia Ekahau AI Pro - Inspect view"
                className="w-full rounded-xl border border-border"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <figure className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={aiproChannel} alt="Ekahau AI Pro - Channel planner" className="w-full" loading="lazy" />
              <figcaption className="p-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Channel Planner</span> — assegnazione automatica dei canali e gestione co-channel/adjacent.
              </figcaption>
            </figure>
            <figure className="rounded-xl overflow-hidden border border-border bg-card">
              <img src={surveyAppImg} alt="Ekahau Survey app con Sidekick 2" className="w-full" loading="lazy" />
              <figcaption className="p-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Ekahau Survey</span> — acquisizione attiva/passiva on-site con Sidekick 2.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Suite Ekahau Connect</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Dalla progettazione predittiva al monitoraggio continuo: una piattaforma integrata per ogni fase del progetto Wi-Fi.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 max-w-md mx-auto">
            <img src={analyzerAppImg} alt="Ekahau Analyzer mobile app" className="w-full rounded-xl border border-border" loading="lazy" />
            <p className="text-center text-xs text-muted-foreground mt-3">Ekahau Analyzer su iPhone con Sidekick 2 collegato via USB-C</p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">Il nostro workflow Ekahau</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Predittivo", d: "Import CAD, modello materiali, posizionamento AP simulato in Ekahau AI Pro." },
              { n: "02", t: "Survey on-site", d: "Acquisizione attiva/passiva con Sidekick 2 + spectrum analysis." },
              { n: "03", t: "Analisi", d: "Heatmap RSSI/SNR, roaming, capacity, channel plan e BoM finale." },
              { n: "04", t: "Validazione", d: "Survey post-installazione e report condiviso via Ekahau Cloud." },
            ].map((step) => (
              <div key={step.n} className="p-5 rounded-xl border border-border bg-card">
                <p className="text-primary font-heading text-sm mb-2">{step.n}</p>
                <h3 className="font-heading font-semibold mb-2">{step.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ekahau;