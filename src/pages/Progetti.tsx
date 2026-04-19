import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const projects = [
  {
    title: "Linea di produzione automatizzata",
    category: "Automazione Hardware",
    description: "Progettazione e realizzazione completa dell'automazione di una linea produttiva. Architettura Profinet ad anello con 12 PLC Siemens S7 distribuiti su 4 switch Scalance X, 2 server SCADA WinCC in ridondanza hot-standby e postazione supervisore operatore HMI. Sistema di visione artificiale integrato per controllo qualità inline.",
    tags: ["PLC Siemens S7", "Profinet", "WinCC SCADA", "Scalance X", "Safety", "Visione Artificiale"],
  },
  {
    title: "Sistema SCADA stabilimento chimico",
    slug: "scada-chimico",
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
    title: "Revamping linea di confezionamento",
    category: "Automazione Hardware",
    description: "Upgrade da S7-300 a S7-1516F Safety, sostituzione drive KEB F5 con SEW MOVIDRIVE B su Profinet, inserimento 4 cobot collaborativi per etichettatura packaging.",
    tags: ["S7-1516F Safety", "SEW MOVIDRIVE B", "PROFIsafe", "Cobot", "TIA Portal"],
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
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const filtered = cat ? projects.filter((p) => p.category === cat) : projects;

  return (
    <div className="min-h-screen flex flex-col">
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
            {filtered.map((project) => {
              const isLinea = project.title === "Linea di produzione automatizzata";
              const isRevamping = project.title === "Revamping linea di confezionamento";
              const isSCADA = project.slug === "scada-chimico";
              const card = (
                <div
                  className={`group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col h-full ${
                    isLinea || isRevamping ? "cursor-pointer" : ""
                  }`}
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
              );

              if (isLinea) {
                return (
                  <Link key={project.title} to="/progetti/linea-automatizzata">
                    {card}
                  </Link>
                );
              }

              if (isSCADA) {
                return (
                  <Link key={project.title} to="/progetti/scada-chimico">
                    {card}
                  </Link>
                );
              }

              return <div key={project.title}>{card}</div>;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progetti;
