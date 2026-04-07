import heroImage from "@/assets/hero-sailing.jpg";
import { Anchor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Yacht a vela di ultima generazione al tramonto"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center">
        <Anchor className="mx-auto mb-6 h-10 w-10 text-primary" />
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Vele del <span className="text-gradient-gold italic">Futuro</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Scopri le barche a vela più innovative e tecnologiche al mondo.
          Fibra di carbonio, foil e design all'avanguardia.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
