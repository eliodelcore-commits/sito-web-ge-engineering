import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-genginering.png";

const serviceLinks = [
  { to: "/servizi", label: "Tutti i Servizi" },
  { to: "/servizi/automazione-hardware", label: "Automazione Hardware" },
  { to: "/servizi/automazione-software", label: "Automazione Software" },
  { to: "/servizi/wireless-planning", label: "Wireless Planning" },
  { to: "/servizi/assistenza-tecnica", label: "Assistenza Tecnica" },
];

const projectLinks = [
  { to: "/progetti", label: "Tutti i Progetti" },
  { to: "/progetti?cat=Automazione+Hardware", label: "Automazione Hardware" },
  { to: "/progetti?cat=Automazione+Software", label: "Automazione Software" },
  { to: "/progetti?cat=Wireless+Planning", label: "Wireless Planning" },
];

interface DropdownProps {
  label: string;
  links: { to: string; label: string }[];
  isActive: boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const NavDropdown = ({ label, links, isActive, open, setOpen }: DropdownProps) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpen]);

  useEffect(() => { setOpen(false); }, [location.pathname, location.search, setOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg py-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                (location.pathname + location.search) === link.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [openServizi, setOpenServizi] = useState(false);
  const [openProgetti, setOpenProgetti] = useState(false);

  // close one when the other opens
  const handleServizi = (v: boolean) => { setOpenServizi(v); if (v) setOpenProgetti(false); };
  const handleProgetti = (v: boolean) => { setOpenProgetti(v); if (v) setOpenServizi(false); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="GenGinering Solutions" className="h-12" />
          <span className="hidden lg:block text-xs text-muted-foreground leading-tight">
            Via Idice 47, 40050<br />Monterenzio (BO)
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>

          <NavDropdown
            label="Servizi"
            links={serviceLinks}
            isActive={location.pathname.startsWith("/servizi")}
            open={openServizi}
            setOpen={handleServizi}
          />

          <NavDropdown
            label="Progetti"
            links={projectLinks}
            isActive={location.pathname.startsWith("/progetti")}
            open={openProgetti}
            setOpen={handleProgetti}
          />

          <Link
            to="/contatti"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/contatti" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
