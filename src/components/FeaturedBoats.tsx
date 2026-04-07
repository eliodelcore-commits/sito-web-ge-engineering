import BoatCard from "./BoatCard";
import boatFoiling from "@/assets/boat-foiling.jpg";
import boatCatamaran from "@/assets/boat-catamaran.jpg";
import boatPerformance from "@/assets/boat-performance.jpg";
import boatEco from "@/assets/boat-eco.jpg";

const boats = [
  {
    image: boatFoiling,
    name: "AC75 Foiling Monohull",
    category: "Racing",
    description:
      "L'imbarcazione protagonista dell'America's Cup. Grazie ai foil in carbonio, vola letteralmente sull'acqua raggiungendo velocità fino a 50 nodi. Rappresenta il vertice della tecnologia velica moderna.",
    specs: [
      { label: "Lunghezza", value: "22.7m" },
      { label: "Velocità Max", value: "50 kn" },
      { label: "Equipaggio", value: "11" },
    ],
  },
  {
    image: boatCatamaran,
    name: "Lagoon Seventy 7",
    category: "Crociera",
    description:
      "Il catamarano da crociera definitivo: 23 metri di puro lusso con 4 cabine, flybridge panoramico e prestazioni eccezionali. Comfort da superyacht con l'anima di una barca a vela.",
    specs: [
      { label: "Lunghezza", value: "23m" },
      { label: "Cabine", value: "4+1" },
      { label: "Superficie Vele", value: "340m²" },
    ],
  },
  {
    image: boatPerformance,
    name: "ClubSwan 80",
    category: "Performance",
    description:
      "Lo yacht da regata-crociera firmato Nautor's Swan. Scafo in fibra di carbonio, albero in carbonio e un design Juan K che coniuga prestazioni da regata e comfort per la crociera d'altura.",
    specs: [
      { label: "Lunghezza", value: "24.4m" },
      { label: "Dislocamento", value: "28t" },
      { label: "Cantiere", value: "Swan" },
    ],
  },
  {
    image: boatEco,
    name: "Solar Sail 80 Concept",
    category: "Eco-Yacht",
    description:
      "Il futuro della vela sostenibile: pannelli solari integrati, propulsione ibrida e materiali riciclati. Un concept che dimostra come lusso e sostenibilità possano navigare insieme.",
    specs: [
      { label: "Lunghezza", value: "24m" },
      { label: "Emissioni", value: "Zero" },
      { label: "Autonomia", value: "∞" },
    ],
  },
];

const FeaturedBoats = () => {
  return (
    <section id="barche" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Selezione Esclusiva
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Le Barche del Futuro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boats.map((boat) => (
            <BoatCard key={boat.name} {...boat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBoats;
