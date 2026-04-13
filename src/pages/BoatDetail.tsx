import { useParams, Link } from "react-router-dom";
import { boats } from "@/data/boats";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Ruler, Wind, Users, ChevronRight } from "lucide-react";

const BoatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const boat = boats.find((b) => b.slug === slug);

  if (!boat) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Barca non trovata</h1>
          <Link to="/#barche" className="text-primary hover:underline">← Torna alle barche</Link>
        </div>
      </div>
    );
  }

  const otherBoats = boats.filter((b) => b.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={boat.image} alt={boat.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 z-10">
          <Link to="/#barche" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" /> Tutte le barche
          </Link>
          <span className="block rounded-sm bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground w-fit mb-3">
            {boat.category}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold">{boat.name}</h1>
        </div>
      </div>

      {/* Specs bar */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-wrap justify-center gap-12">
          <div className="flex items-center gap-3">
            <Ruler className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Lunghezza</p>
              <p className="text-lg font-bold">{boat.specs.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Velocità</p>
              <p className="text-lg font-bold">{boat.specs.speed}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Equipaggio</p>
              <p className="text-lg font-bold">{boat.specs.crew}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-heading text-2xl font-bold mb-6">Panoramica</h2>
          <p className="text-muted-foreground leading-relaxed text-base">{boat.longDescription}</p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-heading text-2xl font-bold mb-6">Scheda Tecnica</h2>
          <div className="rounded-lg border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            {boat.details.map((d, i) => (
              <div key={d.label} className={`flex justify-between px-5 py-3.5 text-sm ${i !== boat.details.length - 1 ? "border-b border-border" : ""}`}>
                <span className="text-muted-foreground">{d.label}</span>
                <span className="font-semibold text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other boats */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-heading text-2xl font-bold mb-8">Altre Barche</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherBoats.map((b) => (
              <Link
                key={b.slug}
                to={`/barche/${b.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img src={b.image} alt={b.name} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{b.name}</p>
                  <p className="text-xs text-muted-foreground">{b.category}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BoatDetail;
