import BoatCard from "./BoatCard";
import { boats } from "@/data/boats";
import { motion } from "framer-motion";

const FeaturedBoats = () => {
  return (
    <section id="barche" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Collezione
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Barche a Vela di <span className="italic text-gradient-gold">Ultima Generazione</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Dalle regate oceaniche al cruising eco-sostenibile: ecco i modelli che stanno ridefinendo il mondo della vela.
          </p>
        </motion.div>
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
