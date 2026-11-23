import { ArrowUpRight, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/gen/Footer";
import MeshBackground from "@/components/gen/MeshBackground";
import Navbar from "@/components/gen/Navbar";
import { industrialTopics, technologyTopicPath } from "@/data/industrialTopics";

const TechnologyIndex = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-1 overflow-hidden bg-background pt-28 pb-24">
        <MeshBackground
          focal={{ x: 0.2, y: 0.15 }}
          cols={72}
          rows={90}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        />
        <div className="container relative z-10 mx-auto px-6">
          <p className="mb-2 text-sm font-medium text-primary">Tecnologie</p>
          <h1 className="mb-4 font-heading text-4xl font-bold md:text-5xl">
            Le tecnologie dei nostri progetti
          </h1>
          <p className="mb-12 max-w-3xl leading-relaxed text-muted-foreground">
            Schede illustrative dei dispositivi, dei protocolli e degli strumenti presenti nelle pagine di progetto.
            Ogni tag del sito porta qui o alla pagina tecnica che lo descrive.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industrialTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={technologyTopicPath(topic.slug)}
                className="group flex h-full flex-col rounded-xl border border-border bg-card/90 p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Workflow className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mb-2 text-xs font-medium text-primary">{topic.category}</p>
                <h2 className="mb-3 font-heading text-xl font-semibold">{topic.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{topic.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyIndex;
