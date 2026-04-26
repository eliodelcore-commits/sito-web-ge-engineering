import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-hero.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] min-h-[calc(100vh-4rem)]">
        {/* Left column: navbar background, logo + description */}
        <div className="relative bg-background flex flex-col px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12">
          {/* Abstract low-poly line web — single connected drawing inspired by the business card.
              Spans from the top-left of the column (under the navbar) down to just above the
              "Automazione Industriale" badge, and horizontally extends past the column into
              ~30% of the right background area. */}
          <svg
            viewBox="0 0 400 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="absolute left-0 top-0 w-[140%] h-[38%] opacity-50 pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <g
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* One continuous interconnected mesh of triangles, like the business card sketch */}
              <path d="M 5 25 L 70 10 L 140 35 L 60 65 Z" />
              <path d="M 70 10 L 140 35 L 200 8 Z" />
              <path d="M 200 8 L 140 35 L 230 55 Z" />
              <path d="M 200 8 L 230 55 L 290 20 Z" />
              <path d="M 290 20 L 230 55 L 320 75 Z" />
              <path d="M 290 20 L 320 75 L 395 30 Z" />
              <path d="M 395 30 L 320 75 L 395 95 Z" />
              <path d="M 60 65 L 140 35 L 130 110 Z" />
              <path d="M 140 35 L 230 55 L 200 120 Z" />
              <path d="M 230 55 L 320 75 L 280 130 Z" />
              <path d="M 320 75 L 395 95 L 360 150 Z" />
              <path d="M 5 25 L 60 65 L 20 130 Z" />
              <path d="M 60 65 L 130 110 L 20 130 Z" />
              <path d="M 130 110 L 200 120 L 90 175 Z" />
              <path d="M 200 120 L 280 130 L 210 195 Z" />
              <path d="M 280 130 L 360 150 L 320 215 Z" />
              <path d="M 360 150 L 395 95 L 395 200 Z" />
              <path d="M 20 130 L 130 110 L 90 175 Z" />
              <path d="M 90 175 L 200 120 L 210 195 Z" />
              <path d="M 210 195 L 280 130 L 320 215 Z" />
              <path d="M 320 215 L 360 150 L 395 200 Z" />
              <path d="M 20 130 L 90 175 L 5 220 Z" />
              <path d="M 90 175 L 210 195 L 130 250 Z" />
              <path d="M 210 195 L 320 215 L 250 270 Z" />
              <path d="M 320 215 L 395 200 L 395 280 Z" />
              <path d="M 5 220 L 90 175 L 130 250 Z" />
              <path d="M 5 220 L 130 250 L 60 305 Z" />
              <path d="M 130 250 L 210 195 L 250 270 Z" />
              <path d="M 130 250 L 250 270 L 180 315 Z" />
              <path d="M 250 270 L 320 215 L 395 280 Z" />
              <path d="M 250 270 L 395 280 L 330 315 Z" />
              <path d="M 60 305 L 130 250 L 180 315 Z" />
              <path d="M 180 315 L 250 270 L 330 315 Z" />
            </g>
          </svg>

          <div className="relative z-10 mb-16 md:mb-24 lg:mb-28">
            <img
              src={logo}
              alt="GEENGINEERING SRL"
              className="h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain"
            />
          </div>

          <div className="relative z-10 inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Automazione Industriale
          </div>

          <h1 className="relative z-10 font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluzioni di
            <br />
            <span className="text-gradient-brand">automazione</span>
            <br />
            industriale
          </h1>

          <p className="relative z-10 text-base md:text-lg text-white max-w-xl mb-8 leading-relaxed">
            Hardware, software e wireless planning per l'industria.
            Progettiamo e realizziamo impianti di automazione con strumentazione
            all'avanguardia, inclusa la piattaforma Ekahau AI.
          </p>

          <div className="relative z-10 flex flex-wrap gap-4">
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
          {/* Chiaroscuro overlay: dark on the left fading to transparent on the right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.9) 35%, hsl(var(--background) / 0.55) 70%, hsl(var(--background) / 0.2) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
