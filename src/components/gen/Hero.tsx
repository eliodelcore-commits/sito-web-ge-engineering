import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55 blur-[4px] scale-105"
        style={{ backgroundImage: `url(${bgDrives})` }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto relative h-full px-6">
          <img
            src={logo}
            alt="GEENGINBEERING Solutions"
            className="absolute left-6 top-28 h-56 md:top-32 md:h-72 lg:top-36 lg:h-80 xl:h-96 max-w-full object-contain"
            style={{ mixBlendMode: 'screen', filter: 'brightness(2.5) contrast(1.5) saturate(1.4)' }}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-background/35" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Automazione Industriale
          </div>

          <div className="h-44 md:h-56 lg:h-64 xl:h-72 mb-6" aria-hidden="true" />

          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluzioni di
            <br />
            <span className="text-gradient-brand">automazione</span>
            <br />
            industriale
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Hardware, software e wireless planning per l'industria.
            Progettiamo e realizziamo impianti di automazione con strumentazione
            all'avanguardia, inclusa la piattaforma Ekahau AI.
          </p>

          <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
