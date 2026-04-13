import BoatCard from "./BoatCard";
import { boats } from "@/data/boats";

const FeaturedBoats = () => {
  return (
    <section id="barche" className="relative px-6 py-24 md:py-32">
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
