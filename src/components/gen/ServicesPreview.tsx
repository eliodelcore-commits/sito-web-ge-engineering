import { Cpu, Wifi, MonitorSmartphone, Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automazione Hardware",
    description: "Progettazione e installazione di PLC, sensori, attuatori e quadri di automazione per linee produttive.",
    link: "/servizi/automazione-hardware",
  },
  {
    icon: MonitorSmartphone,
    title: "Automazione Software",
    description: "Sviluppo SCADA, HMI e sistemi di supervisione per il controllo completo dei processi industriali.",
    link: "/servizi/automazione-software",
  },
  {
    icon: Wifi,
    title: "Wireless Planning",
    description: "Site survey e progettazione reti wireless industriali con Ekahau AI per copertura e performance ottimali.",
    link: "/servizi/wireless-planning",
  },
  {
    icon: Wrench,
    title: "Assistenza & Manutenzione",
    description: "Supporto tecnico continuo, manutenzione preventiva e interventi rapidi su impianti di automazione.",
    link: "/servizi/assistenza-tecnica",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-medium mb-2">Servizi</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Cosa facciamo
            </h2>
          </div>
          <Link
            to="/servizi"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Tutti i servizi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
