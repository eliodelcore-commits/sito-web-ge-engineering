import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-genginering-nobg.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Logo in alto a destra */}
      <img
        src={logo}
        alt="GenGinering SRL Solutions"
        className="hidden md:block absolute h-48 lg:h-60 opacity-90"
        style={{ top: '80px', right: '140px' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
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
