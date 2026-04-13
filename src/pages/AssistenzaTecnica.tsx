import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import { Wrench, Monitor, Phone, Clock, CheckCircle2 } from "lucide-react";
import assistenzaRobot from "@/assets/assistenza-robot.jpg";
import assistenzaTrasloelevatori from "@/assets/assistenza-trasloelevatori.jpg";
import assistenzaVeicoli from "@/assets/assistenza-veicoli.jpg";
import assistenzaRemota from "@/assets/assistenza-remota.jpg";

const onSiteServices = [
  {
    image: assistenzaRobot,
    title: "Manutenzione Robot Industriali",
    description:
      "Interventi elettrici e meccanici su robot antropomorfi e cartesiani. Diagnostica avanzata, sostituzione componenti e tarature per garantire la massima efficienza produttiva.",
  },
  {
    image: assistenzaTrasloelevatori,
    title: "Trasloelevatori & Magazzini Automatici",
    description:
      "Manutenzione preventiva e correttiva su trasloelevatori, sistemi di stoccaggio automatico e convogliatori. Controllo meccanico, elettrico e regolazione fine dei parametri di movimento.",
  },
  {
    image: assistenzaVeicoli,
    title: "Veicoli AGV / LGV",
    description:
      "Assistenza completa su veicoli a guida automatica: diagnostica elettrica, riparazione meccanica, aggiornamento firmware e calibrazione dei sistemi di navigazione.",
  },
];

const remoteFeatures = [
  "Connessione sicura VPN agli impianti",
  "Monitoraggio real-time di PLC e SCADA",
  "Diagnostica e troubleshooting da remoto",
  "Aggiornamenti firmware e software a distanza",
  "Tempi di risposta ridotti al minimo",
  "Report dettagliati post-intervento",
];

const AssistenzaTecnica = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <p className="text-primary text-sm font-medium mb-2">Servizi</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Assistenza Tecnica
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Interventi on-site e supporto remoto per garantire il massimo uptime
            dei vostri impianti di automazione industriale.
          </p>

          {/* On-site Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                Assistenza On-Site
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {onSiteServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    width={1280}
                    height={768}
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remote Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                Assistenza Remota
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={assistenzaRemota}
                alt="Tecnico che lavora da remoto con tre monitor"
                className="w-full rounded-xl border border-border"
                loading="lazy"
                width={1280}
                height={768}
              />
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Il nostro team di specialisti fornisce supporto tecnico remoto
                  in tempo reale, collegandosi direttamente ai vostri impianti
                  tramite connessioni VPN sicure. Tre postazioni video
                  consentono il monitoraggio simultaneo di più linee produttive.
                </p>
                <div className="space-y-3">
                  {remoteFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center p-12 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-primary" />
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold mb-2">
              Hai bisogno di assistenza?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Il nostro team è disponibile per interventi urgenti e
              manutenzione programmata. Contattaci per un preventivo
              personalizzato.
            </p>
            <a
              href="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contattaci
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AssistenzaTecnica;
