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

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isServizi = location.pathname.startsWith("/servizi");

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

          {/* Servizi dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isServizi ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Servizi
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg py-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                      location.pathname === link.to
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

          <Link
            to="/progetti"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/progetti" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Progetti
          </Link>
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
