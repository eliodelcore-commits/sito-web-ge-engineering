import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import heroImg from "@/assets/automazione-software-hero.jpg";
import plcImg from "@/assets/plc-siemens.jpg";
import programmingImg from "@/assets/programmazione-plc.jpg";
import touchImg from "@/assets/interfaccia-touch.jpg";

const sections = [
  {
    title: "PLC Siemens",
    description:
      "Programmiamo e configuriamo PLC Siemens delle serie S7-300, S7-400, S7-1200 e S7-1500 utilizzando l'ambiente TIA Portal. Sviluppiamo logiche di controllo in Ladder, Structured Text e Function Block Diagram per ogni tipo di processo industriale.",
    image: plcImg,
  },
  {
    title: "Programmazione e Commissioning",
    description:
      "Il nostro team di ingegneri specializzati si occupa dello sviluppo software, del debug on-site e della messa in servizio degli impianti. Dalla progettazione della logica di controllo al collaudo finale, seguiamo ogni fase del progetto.",
    image: programmingImg,
  },
  {
    title: "Interfacce Touch HMI / SCADA",
    description:
      "Realizziamo interfacce operatore intuitive su pannelli touch Siemens Comfort Panel e sistemi SCADA per la supervisione dei processi. Visualizzazione in tempo reale, storico allarmi, trending e gestione ricette per un controllo completo dell'impianto.",
    image: touchImg,
  },
];

const AutomazioneSoftware = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={heroImg}
          alt="Automazione Software"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium mb-2">Servizi</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Automazione Software
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sviluppo software PLC, programmazione e commissioning di impianti industriali.
              Realizziamo interfacce HMI e sistemi SCADA per il controllo completo dei processi produttivi.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="py-24">
        <div className="container mx-auto px-6 space-y-24">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.description}
                </p>
              </div>
              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl border border-border w-full"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AutomazioneSoftware;
