import { Zap, Leaf, Compass, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Foiling Technology",
    description: "I foil in carbonio permettono allo scafo di sollevarsi dall'acqua, riducendo l'attrito e raggiungendo velocità impensabili.",
  },
  {
    icon: Leaf,
    title: "Propulsione Green",
    description: "Motori elettrici ibridi, pannelli solari e idrogeneratori rendono la navigazione sempre più sostenibile.",
  },
  {
    icon: Compass,
    title: "Navigazione AI",
    description: "Sistemi di intelligenza artificiale analizzano vento, correnti e meteo per ottimizzare la rotta in tempo reale.",
  },
  {
    icon: Shield,
    title: "Materiali Avanzati",
    description: "Fibra di carbonio, kevlar e resine epossidiche di ultima generazione per scafi ultraleggeri e resistenti.",
  },
];

const TechSection = () => {
  return (
    <section id="tecnologia" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Innovazione
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Tecnologia <span className="italic text-gradient-gold">all'Avanguardia</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
