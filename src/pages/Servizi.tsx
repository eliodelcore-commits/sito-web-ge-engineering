import { Link } from "react-router-dom";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import { Cpu, Wifi, MonitorSmartphone, Wrench, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automazione Hardware",
    description: "Progettazione completa di impianti di automazione industriale con componentistica di ultima generazione.",
    features: ["PLC Siemens", "Azionamenti SEW", "Azionamenti Vacon", "Azionamenti KEB", "Azionamenti Siemens"],
    link: "/servizi/automazione-hardware",
  },
  {
    icon: MonitorSmartphone,
    title: "Automazione Software",
    description: "Sviluppo software per il controllo e la supervisione dei processi produttivi industriali.",
    features: ["Sistemi SCADA e HMI", "Programmazione PLC (Ladder, ST, FBD)", "Interfacce operatore touch screen", "Integrazione MES e ERP"],
  },
  {
    icon: Wifi,
    title: "Wireless Planning con Ekahau AI",
    description: "Progettazione professionale di reti wireless industriali utilizzando la piattaforma Ekahau AI.",
    features: ["Site survey pre e post installazione", "Analisi predittiva con Ekahau AI", "Ottimizzazione copertura e capacità", "Report dettagliati e documentazione"],
  },
  {
    icon: Wrench,
    title: "Assistenza Tecnica",
    description: "Supporto continuo per garantire il massimo uptime dei vostri impianti produttivi.",
    features: ["Manutenzione preventiva e predittiva", "Interventi rapidi on-site", "Teleassistenza e monitoraggio remoto", "Contratti di assistenza personalizzati"],
  },
];

const Servizi = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <p className="text-primary text-sm font-medium mb-2">Servizi</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            I nostri servizi
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Offriamo soluzioni complete per l'automazione industriale, dalla progettazione 
            hardware alla configurazione software, fino al wireless planning professionale.
          </p>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-8 p-8 rounded-xl border border-border bg-card"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold mb-3">
                    {service.link ? (
                      <Link to={service.link} className="hover:text-primary transition-colors">
                        {service.title} →
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servizi;
