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
            {/* Low-poly triangulated mesh inspired by the blue band of the brand business card */}
            <svg
              viewBox="0 0 400 120"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mt-3 w-full max-w-[420px] h-auto opacity-80"
              preserveAspectRatio="none"
            >
              <g
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Dense triangulated low-poly mesh — no radial bursts */}
                <polygon points="8,18 52,8 70,42" />
                <polygon points="52,8 110,22 70,42" />
                <polygon points="110,22 160,6 175,40" />
                <polygon points="160,6 220,18 175,40" />
                <polygon points="220,18 270,4 285,36" />
                <polygon points="270,4 330,20 285,36" />
                <polygon points="330,20 392,10 380,48" />
                <polygon points="330,20 380,48 320,55" />
                <polygon points="285,36 330,20 320,55" />
                <polygon points="285,36 320,55 250,60" />
                <polygon points="220,18 285,36 250,60" />
                <polygon points="175,40 220,18 250,60" />
                <polygon points="175,40 250,60 200,75" />
                <polygon points="110,22 175,40 140,65" />
                <polygon points="175,40 200,75 140,65" />
                <polygon points="70,42 110,22 140,65" />
                <polygon points="70,42 140,65 90,80" />
                <polygon points="8,18 70,42 30,70" />
                <polygon points="70,42 90,80 30,70" />
                <polygon points="30,70 90,80 50,105" />
                <polygon points="90,80 140,65 130,100" />
                <polygon points="90,80 130,100 50,105" />
                <polygon points="140,65 200,75 180,108" />
                <polygon points="140,65 180,108 130,100" />
                <polygon points="200,75 250,60 240,95" />
                <polygon points="200,75 240,95 180,108" />
                <polygon points="250,60 320,55 300,92" />
                <polygon points="250,60 300,92 240,95" />
                <polygon points="320,55 380,48 360,90" />
                <polygon points="320,55 360,90 300,92" />
                <polygon points="380,48 392,10 395,90" />
                <polygon points="380,48 395,90 360,90" />
                <polygon points="50,105 130,100 95,118" />
                <polygon points="130,100 180,108 160,118" />
                <polygon points="180,108 240,95 235,118" />
                <polygon points="240,95 300,92 295,118" />
                <polygon points="300,92 360,90 355,118" />
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
