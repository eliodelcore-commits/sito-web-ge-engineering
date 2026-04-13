import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import heroImg from "@/assets/wireless-hero.jpg";
import predittivaImg from "@/assets/ekahau-predittiva.jpg";
import surveyImg from "@/assets/site-survey.jpg";
import reportImg from "@/assets/ekahau-report.jpg";

const sections = [
  {
    title: "Analisi Predittiva con Ekahau AI",
    description:
      "Utilizziamo Ekahau AI Pro per realizzare analisi predittive dettagliate della copertura wireless. Progettiamo il posizionamento ottimale degli access point su planimetrie 2D e 3D, simulando la propagazione del segnale e identificando zone critiche prima dell'installazione.",
    image: predittivaImg,
  },
  {
    title: "Site Survey Pre e Post Installazione",
    description:
      "Eseguiamo site survey professionali con Ekahau Sidekick per misurare la copertura reale del segnale WiFi. Verifichiamo le prestazioni della rete dopo l'installazione, identificando interferenze, zone morte e opportunità di ottimizzazione.",
    image: surveyImg,
  },
  {
    title: "Report e Documentazione",
    description:
      "Generiamo report completi con mappe di copertura, analisi delle interferenze, grafici delle prestazioni e raccomandazioni tecniche. Documentiamo ogni progetto con dati misurabili per garantire la massima qualità della rete wireless.",
    image: reportImg,
  },
];

const WirelessPlanning = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={heroImg}
          alt="Wireless Planning con Ekahau AI"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-medium mb-2">Servizi</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Wireless Planning
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Progettazione professionale di reti wireless con Ekahau AI.
              Site survey, analisi predittive e ottimizzazione della copertura per ambienti industriali e commerciali.
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
              className={`grid md:grid-cols-2 gap-12 items-center`}
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

export default WirelessPlanning;
