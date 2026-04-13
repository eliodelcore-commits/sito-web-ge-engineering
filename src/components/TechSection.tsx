import { Zap, Leaf, Compass, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    slug: "foiling-technology",
    icon: Zap,
    title: "Foiling Technology",
    description: "I foil in carbonio permettono allo scafo di sollevarsi dall'acqua, riducendo l'attrito e raggiungendo velocità impensabili.",
  },
  {
    slug: "propulsione-green",
    icon: Leaf,
    title: "Propulsione Green",
    description: "Motori elettrici ibridi, pannelli solari e idrogeneratori rendono la navigazione sempre più sostenibile.",
  },
  {
    slug: "navigazione-ai",
    icon: Compass,
    title: "Navigazione AI",
    description: "Sistemi di intelligenza artificiale analizzano vento, correnti e meteo per ottimizzare la rotta in tempo reale.",
  },
  {
    slug: "materiali-avanzati",
    icon: Shield,
    title: "Materiali Avanzati",
    description: "Fibra di carbonio, kevlar e resine epossidiche di ultima generazione per scafi ultraleggeri e resistenti.",
  },
];

const TechSection = () => {
  return (
    <section id="tecnologia" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Innovazione
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Tecnologia <span className="italic text-gradient-gold">all'Avanguardia</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Link key={f.slug} to={`/tecnologia/${f.slug}`}>
              <motion.div
                className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 cursor-pointer h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold text-primary uppercase tracking-wider group-hover:underline">
                  Scopri di più →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
