import { Anchor } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-primary">
          <Anchor className="w-6 h-6" />
          <span className="font-heading text-xl font-bold text-foreground">VelaNova</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#barche" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors">
            Barche
          </a>
          <a href="#tecnologia" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors">
            Tecnologia
          </a>
          <a href="#contatti" className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors">
            Contatti
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
