import logo from "@/assets/logo-genginering-new.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-5 md:py-0 md:h-16 flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="GENGINERING Solutions"
                className="h-10 md:h-14 mix-blend-screen rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: '#0F172A' }}
              />
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Idice+47%2C+40050+Monterenzio+BO%2C+Italia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white leading-snug md:whitespace-nowrap hover:text-primary transition-colors"
            >
              Via Idice 47, 40050 Monterenzio (BO), Italia
            </a>
          </div>
          <p className="text-xs md:text-base text-white leading-snug md:whitespace-nowrap">
            © {new Date().getFullYear()} GEENGINEERING Solution srl. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
