import { Anchor } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-primary"
        >
          <Anchor className="w-6 h-6" />
          <span className="font-heading text-xl font-bold text-foreground">VelaNova</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/#barche"
            onClick={(e) => handleAnchorClick(e, "barche")}
            className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors"
          >
            Barche
          </Link>
          <Link
            to="/#tecnologia"
            onClick={(e) => handleAnchorClick(e, "tecnologia")}
            className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors"
          >
            Tecnologia
          </Link>
          <Link
            to="/contatti"
            className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors"
          >
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
