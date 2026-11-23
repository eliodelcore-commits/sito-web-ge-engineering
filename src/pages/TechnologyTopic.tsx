import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Cpu,
  Database,
  Gauge,
  Network,
  ShieldCheck,
  Wifi,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import Navbar from "@/components/gen/Navbar";
import { industrialTopics, technologyTopicPath } from "@/data/industrialTopics";
import NotFound from "@/pages/NotFound";

const iconForTopic = (category: string, slug: string): LucideIcon => {
  if (slug === "cobot") return Bot;
  if (slug === "sew-movidrive") return Gauge;
  if (category.includes("Wireless")) return Wifi;
  if (category.includes("Sicurezza")) return ShieldCheck;
  if (category.includes("dati") || category.includes("Visualizzazione")) return Database;
  if (category.includes("Networking") || category.includes("Interoperabilità") || category.includes("Bus")) return Network;
  if (category.includes("PLC") || category.includes("Periferia") || category.includes("Engineering")) return Cpu;
  return Workflow;
};

const TechnologyTopic = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = industrialTopics.find((item) => item.slug === slug);

  if (!topic) return <NotFound />;

  const Icon = iconForTopic(topic.category, topic.slug);
  const topicIndex = industrialTopics.findIndex((item) => item.slug === topic.slug);
  const otherTopics = [1, 2, 3].map(
    (offset) => industrialTopics[(topicIndex + offset) % industrialTopics.length],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-1 overflow-hidden bg-background pt-28 pb-24">
        <MeshBackground
          focal={{ x: 0.18, y: 0.16 }}
          cols={72}
          rows={100}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Link
              to="/progetti"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Tutti i progetti
            </Link>
            <Link to="/tecnologie" className="text-sm text-primary hover:underline">
              Tutte le tecnologie
            </Link>
          </div>

          <header className="mb-12 max-w-4xl">
            <p className="mb-3 text-sm font-medium text-primary">{topic.category}</p>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-heading text-4xl font-bold md:text-5xl">{topic.title}</h1>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">{topic.summary}</p>
          </header>

          <div className="grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <section className="rounded-xl border border-border bg-card/90 p-6 md:p-8">
                <h2 className="mb-4 font-heading text-2xl font-semibold">Come funziona</h2>
                <p className="leading-relaxed text-muted-foreground">{topic.explanation}</p>
              </section>
              <section className="rounded-xl border border-border bg-card/90 p-6 md:p-8">
                <h2 className="mb-4 font-heading text-2xl font-semibold">Dove lo vedi nei progetti</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">{topic.application}</p>
                <Link
                  to={topic.related.path}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {topic.related.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </section>
            </div>

            <aside className="h-fit rounded-xl border border-border bg-card/90 p-6">
              <h2 className="mb-5 font-heading text-xl font-semibold">Punti chiave</h2>
              <ul className="space-y-4">
                {topic.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <section className="mt-16 max-w-6xl border-t border-border pt-10">
            <h2 className="mb-6 font-heading text-2xl font-semibold">Altre tecnologie</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherTopics.map((other) => (
                <Link
                  key={other.slug}
                  to={technologyTopicPath(other.slug)}
                  className="group rounded-xl border border-border bg-card/90 p-5 transition-colors hover:border-primary/50"
                >
                  <p className="mb-2 text-xs text-primary">{other.category}</p>
                  <h3 className="mb-2 font-heading text-lg font-semibold group-hover:text-primary">{other.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    Apri la scheda <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyTopic;
