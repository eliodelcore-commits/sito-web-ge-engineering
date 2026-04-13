import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const projects = [
  {
    title: "Linea di produzione automatizzata",
    category: "Automazione Hardware",
    description: "Progettazione e installazione completa di una linea di produzione con 12 PLC interconnessi e sistema di visione artificiale.",
    tags: ["PLC Siemens", "Visione Artificiale", "Safety"],
  },
  {
    title: "Sistema SCADA stabilimento chimico",
    category: "Automazione Software",
    description: "Sviluppo sistema SCADA per il monitoraggio e controllo di un impianto chimico con oltre 2000 punti I/O.",
    tags: ["SCADA", "HMI", "Historian"],
  },
  {
    title: "Wireless survey magazzino logistico",
    category: "Wireless Planning",
    description: "Site survey e progettazione rete Wi-Fi 6 per magazzino da 15.000 mq con Ekahau AI. Copertura ottimale per 200+ dispositivi mobili.",
    tags: ["Ekahau AI", "Wi-Fi 6", "Site Survey"],
  },
  {
    title: "Revamping impianto packaging",
    category: "Automazione Hardware",
    description: "Aggiornamento completo dell'automazione di una linea di confezionamento con integrazione robot collaborativi.",
    tags: ["Cobot", "PLC", "Servo Drive"],
  },
  {
    title: "Piattaforma IoT industriale",
    category: "Automazione Software",
    description: "Sviluppo piattaforma IoT per raccolta dati da sensori industriali con dashboard di analisi e manutenzione predittiva.",
    tags: ["IoT", "Dashboard", "Predictive Maintenance"],
  },
  {
    title: "Copertura wireless stabilimento produttivo",
    category: "Wireless Planning",
    description: "Progettazione e validazione rete wireless per stabilimento multi-piano con ambienti RF complessi.",
    tags: ["Ekahau AI", "RF Design", "Validazione"],
  },
];

const Progetti = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <p className="text-primary text-sm font-medium mb-2">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            I nostri progetti
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Una selezione dei progetti realizzati in ambito automazione industriale, 
            sviluppo software e wireless planning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <p className="text-xs text-primary font-medium mb-3">
                  {project.category}
                </p>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
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

export default Progetti;
