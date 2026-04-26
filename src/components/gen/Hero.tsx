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
          <div className="relative w-full mb-16 md:mb-24 lg:mb-28">
            {/* Abstract low-poly line pattern inspired by the brand business card */}
            <svg
              viewBox="0 0 400 220"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
              preserveAspectRatio="none"
            >
              <g
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top half */}
                <polyline points="5,40 60,10 130,30 90,70 5,40" />
                <polyline points="60,10 150,5 200,35 130,30" />
                <polyline points="150,5 230,20 200,35" />
                <polyline points="200,35 280,15 340,40 230,20" />
                <polyline points="280,15 360,5 395,35 340,40" />
                <polyline points="130,30 200,75 90,70" />
                <polyline points="200,75 280,55 340,40" />
                <polyline points="200,75 290,90 360,70 395,35" />
                {/* Middle band (behind the logo) */}
                <polyline points="5,110 80,95 160,115 220,100 300,120 380,105 395,140" />
                <polyline points="5,140 70,125 140,150 210,130 290,155 370,135 395,170" />
                {/* Bottom half */}
                <polyline points="5,180 60,150 130,175 90,210 5,180" />
                <polyline points="60,150 150,140 200,170 130,175" />
                <polyline points="200,170 280,150 340,180 230,160" />
                <polyline points="280,150 360,140 395,175 340,180" />
                <polyline points="130,175 200,215 90,210" />
                <polyline points="200,215 280,195 340,180" />
                <polyline points="200,215 290,200 360,215 395,175" />
                <line x1="60" y1="10" x2="200" y2="75" />
                <line x1="150" y1="5" x2="290" y2="90" />
                <line x1="60" y1="150" x2="200" y2="215" />
                <line x1="150" y1="140" x2="290" y2="200" />
              </g>
            </svg>
            <img
              src={logo}
              alt="GEENGINEERING SRL"
              className="relative h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain"
            />
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
