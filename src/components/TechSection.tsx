import { Wind, Zap, Leaf } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Foiling Technology",
    description: "I foil in carbonio permettono agli scafi di sollevarsi dall'acqua, riducendo l'attrito e raggiungendo velocità impensabili fino a pochi anni fa.",
  },
  {
    icon: Zap,
    title: "Materiali Avanzati",
    description: "Fibra di carbonio, Kevlar e resine epossidiche di ultima generazione rendono le barche più leggere, rigide e performanti che mai.",
  },
  {
    icon: Leaf,
    title: "Propulsione Ibrida",
    description: "Motori elettrici integrati, pannelli solari e idrogeneratori permettono una navigazione a zero emissioni anche in assenza di vento.",
  },
];

const TechSection = () => {
  return (
    <section id="tecnologia" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
          Innovazione
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
          La Tecnologia che Cambia Tutto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
