import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-hero.png";
import bgDrives from "@/assets/home-bg-drives.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] min-h-[calc(100vh-4rem)]">
        {/* Left column: navbar background, logo + description */}
        <div className="relative bg-background flex flex-col px-6 md:px-10 lg:px-16 pt-8 md:pt-10 lg:pt-12 pb-12 overflow-hidden">
          {/* Decorative low-poly mesh background — top-left to bottom-right */}
          <svg
            viewBox="0 0 400 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-25 z-0"
          >
            <g
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Triangulated mesh sweeping from top-left to bottom-right */}
              <polygon points="0,0 60,20 30,80" />
              <polygon points="60,20 130,5 110,60" />
              <polygon points="130,5 200,30 170,70" />
              <polygon points="200,30 280,10 260,55" />
              <polygon points="280,10 360,40 330,85" />
              <polygon points="60,20 110,60 30,80" />
              <polygon points="110,60 170,70 130,5" />
              <polygon points="170,70 260,55 200,30" />
              <polygon points="260,55 330,85 280,10" />
              <polygon points="30,80 110,60 90,150" />
              <polygon points="110,60 170,70 160,140" />
              <polygon points="170,70 260,55 240,135" />
              <polygon points="260,55 330,85 320,160" />
              <polygon points="330,85 400,120 380,200" />
              <polygon points="90,150 160,140 130,220" />
              <polygon points="160,140 240,135 210,210" />
              <polygon points="240,135 320,160 300,230" />
              <polygon points="320,160 380,200 360,260" />
              <polygon points="0,140 90,150 50,230" />
              <polygon points="50,230 130,220 90,150" />
              <polygon points="130,220 210,210 160,140" />
              <polygon points="210,210 300,230 240,135" />
              <polygon points="300,230 360,260 320,160" />
              <polygon points="50,230 130,220 110,310" />
              <polygon points="130,220 210,210 200,300" />
              <polygon points="210,210 300,230 280,310" />
              <polygon points="300,230 360,260 360,340" />
              <polygon points="0,260 50,230 30,330" />
              <polygon points="30,330 110,310 50,230" />
              <polygon points="110,310 200,300 130,220" />
              <polygon points="200,300 280,310 210,210" />
              <polygon points="280,310 360,340 300,230" />
              <polygon points="30,330 110,310 90,420" />
              <polygon points="110,310 200,300 180,400" />
              <polygon points="200,300 280,310 270,410" />
              <polygon points="280,310 360,340 360,430" />
              <polygon points="0,360 30,330 20,440" />
              <polygon points="20,440 90,420 30,330" />
              <polygon points="90,420 180,400 110,310" />
              <polygon points="180,400 270,410 200,300" />
              <polygon points="270,410 360,430 280,310" />
              <polygon points="20,440 90,420 70,520" />
              <polygon points="90,420 180,400 170,500" />
              <polygon points="180,400 270,410 260,510" />
              <polygon points="270,410 360,430 360,530" />
              <polygon points="0,470 20,440 10,560" />
              <polygon points="10,560 70,520 20,440" />
              <polygon points="70,520 170,500 90,420" />
              <polygon points="170,500 260,510 180,400" />
              <polygon points="260,510 360,530 270,410" />
              <polygon points="10,560 70,520 60,600" />
              <polygon points="70,520 170,500 160,600" />
              <polygon points="170,500 260,510 250,600" />
              <polygon points="260,510 360,530 360,600" />
            </g>
          </svg>

          <div className="relative z-10 self-start mb-16 md:mb-24 lg:mb-28">
            <img
              src={logo}
              alt="GEENGINEERING SRL"
              className="h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 w-auto object-contain"
            />
          </div>

          <div className="relative z-10 inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
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
