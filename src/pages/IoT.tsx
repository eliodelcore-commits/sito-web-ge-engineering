import { Link } from "react-router-dom";
import { ArrowLeft, Cloud, Cpu, Database, Network, Activity, Shield } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import iotBg from "@/assets/iot-concept-bg.jpg";

const layers = [
  { icon: Cpu, title: "Livello 0 — Campo", desc: "Sensori, attuatori, PLC e dispositivi di campo che generano dati grezzi: temperatura, vibrazione, pressione, energia, conteggi produzione." },
  { icon: Network, title: "Livello 1 — Edge Gateway", desc: "Gateway industriali (OPC-UA → MQTT) che normalizzano i dati, applicano filtri e logiche locali a bassa latenza." },
  { icon: Cloud, title: "Livello 2 — Connettività & Broker", desc: "Broker MQTT ridondati, message queue e protocolli sicuri (TLS, AMQP, HTTPS) per il trasporto affidabile verso il cloud." },
  { icon: Database, title: "Livello 3 — Data Platform", desc: "Time-series database (InfluxDB, TimescaleDB), data lake e pipeline ETL per storage e aggregazione su larga scala." },
  { icon: Activity, title: "Livello 4 — Analytics & AI", desc: "Dashboard real-time (Grafana), KPI di produzione, anomaly detection e modelli predittivi per la manutenzione." },
  { icon: Shield, title: "Sicurezza trasversale", desc: "Segmentazione di rete, identità dispositivo, certificati X.509, hardening edge e cifratura end-to-end dei dati." },
];

const protocols = [
  { name: "MQTT", desc: "Pub/sub leggero, ideale per dispositivi vincolati e reti instabili." },
  { name: "OPC-UA", desc: "Standard industriale per interoperabilità tra PLC, SCADA e MES." },
  { name: "Modbus TCP", desc: "Diffuso su dispositivi legacy, semplice da integrare via gateway." },
  { name: "AMQP", desc: "Messaging affidabile orientato a code e routing complessi." },
  { name: "HTTPS / REST", desc: "Integrazione con servizi cloud, API e microservizi." },
  { name: "Sparkplug B", desc: "Specifica MQTT per dati industriali strutturati e stateful." },
];

const benefits = [
  "Manutenzione predittiva: meno fermi macchina e costi di intervento.",
  "OEE e KPI in tempo reale per produzione e qualità.",
  "Tracciabilità completa di lotti, materiali ed energia.",
  "Decisioni data-driven a livello di linea, plant e gruppo.",
  "Integrazione MES/ERP senza interventi invasivi sui PLC.",
  "Scalabilità da singola macchina a centinaia di siti.",
];

const IoT = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${iotBg})` }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.96) 0%, hsl(var(--background) / 0.88) 55%, hsl(var(--background) / 0.55) 100%)",
        }}
      />
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Indietro
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Industrial IoT</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Internet of Things industriale
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mb-16">
            L'IoT industriale (IIoT) connette macchine, sensori e sistemi informativi per
            trasformare i dati di campo in informazioni operative. Una piattaforma IoT ben
            progettata abilita manutenzione predittiva, ottimizzazione dei processi e
            decisioni in tempo reale, dal singolo sensore fino al cloud.
          </p>

          <section className="mb-20">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
              Architettura a livelli
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {layers.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card/80 backdrop-blur p-6"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
              Protocolli di comunicazione
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {protocols.map((p) => (
                <div
                  key={p.name}
                  className="rounded-lg border border-border bg-card/80 backdrop-blur p-5"
                >
                  <div className="font-heading font-semibold text-primary mb-1">{p.name}</div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
              Benefici operativi
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 max-w-4xl">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card/70 backdrop-blur px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <div className="rounded-xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 max-w-3xl">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Vuoi vedere un caso reale?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Esplora un progetto completo di piattaforma IoT industriale realizzato da GenGinering.
            </p>
            <Link
              to="/progetti/iot-industriale"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Vai al progetto IoT industriale →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IoT;