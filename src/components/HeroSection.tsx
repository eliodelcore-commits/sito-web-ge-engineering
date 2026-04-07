import heroImage from "@/assets/hero-sailing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Barca a vela di lusso al tramonto"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-6">
          Il Futuro della Navigazione
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-gradient-gold">Barche a Vela</span>
          <br />
          <span className="text-foreground">di Ultima Generazione</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Innovazione, tecnologia e design all'avanguardia per solcare i mari del futuro. 
          Scopri le imbarcazioni che stanno rivoluzionando il mondo della vela.
        </p>
        <a
          href="#barche"
          className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
        >
          Scopri di Più
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
