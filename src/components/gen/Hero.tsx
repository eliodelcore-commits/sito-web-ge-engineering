import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-hero.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] min-h-[calc(100vh-4rem)]">
        {/* Left column: navbar background, logo + description */}
        <div className="bg-background flex flex-col px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12">
          <div className="self-start mb-16 md:mb-24 lg:mb-28">
            <img
              src={logo}
              alt="GEENGINEERING SRL"
              className="h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain"
            />
            {/* Abstract low-poly line pattern inspired by the brand business card */}
            <svg
              viewBox="0 0 400 110"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mt-3 w-full max-w-[420px] h-auto opacity-70"
              preserveAspectRatio="none"
            >
              <g
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="5,80 45,30 95,70 60,100 5,80" />
                <polyline points="45,30 110,15 150,55 95,70" />
                <polyline points="110,15 175,40 150,55" />
                <polyline points="150,55 210,25 260,60 175,40" />
                <polyline points="210,25 285,10 330,45 260,60" />
                <polyline points="285,10 360,30 395,70 330,45" />
                <polyline points="95,70 150,95 210,75 260,60" />
                <polyline points="150,95 220,105 280,90 260,60" />
                <polyline points="280,90 340,100 395,70 330,45" />
                <polyline points="60,100 150,95 95,70" />
                <line x1="45" y1="30" x2="150" y2="55" />
                <line x1="110" y1="15" x2="210" y2="25" />
                <line x1="175" y1="40" x2="260" y2="60" />
                <line x1="210" y1="75" x2="280" y2="90" />
                <line x1="95" y1="70" x2="220" y2="105" />
              </g>
            </svg>
          </div>

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
