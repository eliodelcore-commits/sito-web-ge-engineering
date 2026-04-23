import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-white.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left column: navbar background, logo + description */}
        <div className="bg-background flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-0">
          <img
            src={logo}
            alt="GEENGINEERING SRL"
            className="h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain mb-8 md:mb-10"
            style={{
              filter: "brightness(1.25) contrast(1.15) drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
            }}
          />

          <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Automazione Industriale
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluzioni di
            <br />
            <span className="text-gradient-brand">automazione</span>
            <br />
            industriale
          </h1>

          <p className="text-base md:text-lg text-white max-w-xl mb-8 leading-relaxed">
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

        {/* Right column: drives photo */}
        <div
          className="relative bg-cover bg-center min-h-[40vh] md:min-h-0"
          style={{ backgroundImage: `url(${bgDrives})` }}
          aria-hidden="true"
        >
          {/* Soft seam blending into the left column */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
