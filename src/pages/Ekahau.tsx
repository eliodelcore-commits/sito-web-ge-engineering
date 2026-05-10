import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Radio, Map, BarChart3, Cpu, Sparkles } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import bg from "@/assets/ekahau-bg.jpg";

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
      <div className="relative h-[60vh] min-h-[420px]">
        <img
          src={bg}
          alt="Ekahau Sidekick 2 e Survey Analyzer"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
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

      {/* Hardware */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Hardware</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Sonde di misura calibrate che sostituiscono decine di adattatori USB e analizzatori spettrali separati.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {hardware.map((h) => (
              <div key={h.name} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">{h.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{h.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {h.specs.map((s) => (
                    <span key={s} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Suite software</h2>
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
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20">
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