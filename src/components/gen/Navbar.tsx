import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/logo-genginering-new.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = useCallback((menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const close = useCallback(() => setOpenMenu(null), []);

  // close on navigation
  useEffect(() => {
    close();
    setMobileOpen(false);
  }, [location.pathname, location.search, close]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 md:gap-4 min-w-0">
          <img
            src={logo}
            alt="GENGINERING Solutions"
            className="h-10 md:h-14 mix-blend-screen rounded-2xl shrink-0"
            style={{ backgroundColor: '#0F172A' }}
          />
          <span className="hidden lg:block text-base text-white whitespace-nowrap">
            Via Idice 47, 40050 Monterenzio (BO), Italia
          </span>
        </Link>

        {/* Desktop nav */}
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

          <Link
            to="/auth"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Accedi
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Apri menu"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white hover:bg-accent/50 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm bg-background border-border p-0">
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
              <SheetTitle className="text-left text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-4 gap-1">
              <Link
                to="/"
                className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-primary bg-accent/30"
                    : "text-white hover:bg-accent/30"
                }`}
              >
                Home
              </Link>

              <Accordion type="multiple" className="w-full">
                <AccordionItem value="servizi" className="border-none">
                  <AccordionTrigger
                    className={`px-3 py-3 rounded-lg text-base font-medium hover:no-underline hover:bg-accent/30 ${
                      location.pathname.startsWith("/servizi") ? "text-primary" : "text-white"
                    }`}
                  >
                    Servizi
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <div className="flex flex-col pl-3">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            location.pathname === link.to
                              ? "text-primary"
                              : "text-white hover:bg-accent/30"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="progetti" className="border-none">
                  <AccordionTrigger
                    className={`px-3 py-3 rounded-lg text-base font-medium hover:no-underline hover:bg-accent/30 ${
                      location.pathname.startsWith("/progetti") ? "text-primary" : "text-white"
                    }`}
                  >
                    Progetti
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <div className="flex flex-col pl-3">
                      {projectLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            (location.pathname + location.search) === link.to
                              ? "text-primary"
                              : "text-white hover:bg-accent/30"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                to="/contatti"
                className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === "/contatti"
                    ? "text-primary bg-accent/30"
                    : "text-white hover:bg-accent/30"
                }`}
              >
                Contatti
              </Link>

              <Link
                to="/auth"
                className="mt-2 px-3 py-3 rounded-lg text-base font-medium text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Accedi
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
