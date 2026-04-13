import { useParams, Link } from "react-router-dom";
import { techTopics } from "@/data/techTopics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Leaf, Compass, Shield } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  "foiling-technology": Zap,
  "propulsione-green": Leaf,
  "navigazione-ai": Compass,
  "materiali-avanzati": Shield,
};

const TechDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = techTopics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Pagina non trovata</h1>
          <Link to="/#tecnologia" className="text-primary hover:underline">← Torna alla tecnologia</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[topic.slug] || Zap;
  const otherTopics = techTopics.filter((t) => t.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 border-b border-border">
        <div className="mx-auto max-w-4xl">
          <Link to="/#tecnologia" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Tutte le tecnologie
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{topic.category}</span>
            <div className="flex items-center gap-4 mt-3 mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold">{topic.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{topic.heroDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-10">
          {topic.sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-4">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-heading text-2xl font-bold mb-6">Dati Tecnici</h2>
            <div className="rounded-lg border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              {topic.specs.map((spec, i) => (
                <div key={spec.label} className={`flex justify-between px-5 py-3.5 text-sm ${i !== topic.specs.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other topics */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold mb-8">Altre Tecnologie</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherTopics.map((t) => {
              const OtherIcon = iconMap[t.slug] || Zap;
              return (
                <Link
                  key={t.slug}
                  to={`/tecnologia/${t.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary shrink-0">
                    <OtherIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechDetail;
