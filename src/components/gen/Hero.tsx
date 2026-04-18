import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-e6f53b.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const stats = [
  { value: "15+", label: "anni di esperienza" },
  { value: "200+", label: "impianti realizzati" },
  { value: "24/7", label: "assistenza tecnica" },
] as const;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[4px] scale-105"
        style={{
          backgroundImage: `url(${bgDrives})`,
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.45) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative h-full">
          <img
            src={logo}
            alt="GEENGINBEERING Solutions"
            className="absolute left-2 top-20 h-32 sm:h-40 md:left-4 md:top-24 md:h-56 lg:left-6 lg:top-28 lg:h-72 xl:h-80 max-w-[95vw] object-contain rounded-3xl"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-background/35" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="h-72 md:h-80 lg:h-[22rem] xl:h-[24rem]" aria-hidden="true" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Automazione Industriale
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluzioni di
            <br />
            <span className="text-gradient-brand">automazione</span>
            <br />
            industriale
          </h1>

          <p className="text-lg text-white max-w-xl mb-10 leading-relaxed">
            Hardware, software e wireless planning per l'industria.
            Progettiamo e realizziamo impianti di automazione con strumentazione
            all'avanguardia, inclusa la piattaforma Ekahau AI.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Scopri i servizi
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Contattaci
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-border/40 pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient-brand">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
