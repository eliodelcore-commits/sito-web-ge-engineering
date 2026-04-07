import BoatCard from "./BoatCard";
import boatRacing from "@/assets/boat-racing.jpg";
import boatCruiser from "@/assets/boat-cruiser.jpg";
import boatFoiling from "@/assets/boat-foiling.jpg";
import boatEco from "@/assets/boat-eco.jpg";

const boats = [
  {
    name: "ClubSwan 80",
    category: "Performance Racing",
    description:
      "Progettata da Juan Kouyoumdjian, questa 80 piedi combina prestazioni da regata pura con un design elegante. Scafo in fibra di carbonio, chiglia basculante e vele 3Di per dominare le regate d'altura.",
    image: boatRacing,
    specs: { length: "24.4 m", speed: "25+ kn", crew: "12-16" },
  },
  {
    name: "Fountaine Pajot Aura 51",
    category: "Catamarano Luxury",
    description:
      "Il nuovo punto di riferimento per la crociera in catamarano. Spazi interni luminosi, pannelli solari integrati e un sistema di propulsione ibrido elettrico per navigare in silenzio e nel rispetto dell'ambiente.",
    image: boatCruiser,
    specs: { length: "15.1 m", speed: "12 kn", crew: "2-4" },
  },
  {
    name: "AC75 – America's Cup",
    category: "Foiling Monoscafo",
    description:
      "La barca più estrema della vela moderna. Grazie ai foil a T, questo monoscafo di 75 piedi vola letteralmente sull'acqua a velocità superiori ai 50 nodi, spingendo i limiti dell'ingegneria navale.",
    image: boatFoiling,
    specs: { length: "22.8 m", speed: "50+ kn", crew: "8-11" },
  },
  {
    name: "Solar Sail 80 Concept",
    category: "Eco-Yacht",
    description:
      "Il futuro della vela sostenibile: pannelli solari integrati, propulsione ibrida e materiali riciclati. Un concept che dimostra come lusso e sostenibilità possano navigare insieme.",
    image: boatEco,
    specs: { length: "24 m", speed: "15 kn", crew: "2-6" },
  },
];

const FeaturedBoats = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Collezione
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Barche a Vela di <span className="italic text-gradient-gold">Ultima Generazione</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Dalle regate oceaniche al cruising eco-sostenibile: ecco i modelli che stanno ridefinendo il mondo della vela.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {boats.map((boat, i) => (
            <BoatCard key={boat.name} {...boat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBoats;
