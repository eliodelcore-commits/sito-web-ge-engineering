import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-hero.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] min-h-[calc(100vh-4rem)] relative">
        {/* Left column: navbar background, logo + description */}
        <div className="relative bg-background flex flex-col px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12">
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

        {/* Abstract low-poly line pattern — replicates the business card layout.
            Spider-web of triangles hanging from the top edge, confined to the
            dark blue background area (left 30% of right column). Stays clear of
            the logo on the left and the SEW inverter photo on the right. */}
        <div className="absolute inset-0 pointer-events-none z-[5]">
          <svg
            viewBox="0 0 300 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="absolute top-0 h-full opacity-60"
            style={{
              left: "30%",
              width: "22%",
              maskImage:
                "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
            }}
          >
            <g
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Top spikes touching the upper edge — like the card */}
              <path d="M 40 0 L 70 90" />
              <path d="M 80 0 L 70 90" />
              <path d="M 90 0 L 140 80" />
              <path d="M 150 0 L 140 80" />
              <path d="M 170 0 L 210 95" />
              <path d="M 220 0 L 210 95" />
              <path d="M 240 0 L 270 85" />

              {/* First polygon cluster — left */}
              <path d="M 70 90 L 20 150 L 60 220 L 130 180 L 140 80 Z" />
              <path d="M 70 90 L 140 80 L 110 150 Z" />
              <path d="M 140 80 L 130 180 L 110 150 Z" />
              <path d="M 20 150 L 60 220 L 30 260 Z" />
              <path d="M 60 220 L 130 180 L 100 260 Z" />

              {/* Middle polygon cluster */}
              <path d="M 140 80 L 210 95 L 180 170 L 130 180 Z" />
              <path d="M 210 95 L 270 85 L 250 180 L 180 170 Z" />
              <path d="M 180 170 L 250 180 L 220 250 L 160 240 Z" />
              <path d="M 130 180 L 180 170 L 160 240 L 100 260 Z" />

              {/* Lower descending lines — sparse spider web going down */}
              <path d="M 30 260 L 100 260 L 70 350 Z" />
              <path d="M 100 260 L 160 240 L 140 340 Z" />
              <path d="M 160 240 L 220 250 L 200 340 Z" />
              <path d="M 220 250 L 270 270 L 240 360 Z" />

              <path d="M 70 350 L 140 340 L 110 430 Z" />
              <path d="M 140 340 L 200 340 L 170 430 Z" />
              <path d="M 200 340 L 240 360 L 220 440 Z" />

              <path d="M 110 430 L 170 430 L 140 510 Z" />
              <path d="M 170 430 L 220 440 L 195 520 Z" />

              <path d="M 140 510 L 195 520 L 165 590 Z" />

              {/* Extra connecting strands */}
              <path d="M 70 350 L 110 430" />
              <path d="M 240 360 L 220 440" />
              <path d="M 30 260 L 70 350" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
