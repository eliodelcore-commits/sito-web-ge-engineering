import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-genginering-new.png";

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
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const NavDropdown = ({ label, links, isActive, isOpen, onToggle, onClose }: DropdownProps) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    // Use setTimeout to avoid the same click event closing it
    const timer = setTimeout(() => {
      document.addEventListener("click", handler);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handler);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-white"
        }`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg py-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                (location.pathname + location.search) === link.to
                  ? "text-primary font-medium"
                  : "text-white"
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = useCallback((menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const close = useCallback(() => setOpenMenu(null), []);

  // close on navigation
  useEffect(() => { close(); }, [location.pathname, location.search, close]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="GENGINERING Solutions" className="h-20 mix-blend-screen" style={{ backgroundColor: '#0F172A' }} />
          <span className="hidden lg:block text-base text-white whitespace-nowrap">
            Via Idice 47, 40050 Monterenzio (BO), Italia
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-white"
            }`}
          >
            Home
          </Link>

          <NavDropdown
            label="Servizi"
            links={serviceLinks}
            isActive={location.pathname.startsWith("/servizi")}
            isOpen={openMenu === "servizi"}
            onToggle={() => toggle("servizi")}
            onClose={close}
          />

          <NavDropdown
            label="Progetti"
            links={projectLinks}
            isActive={location.pathname.startsWith("/progetti")}
            isOpen={openMenu === "progetti"}
            onToggle={() => toggle("progetti")}
            onClose={close}
          />

          <Link
            to="/contatti"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/contatti" ? "text-primary" : "text-white"
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
