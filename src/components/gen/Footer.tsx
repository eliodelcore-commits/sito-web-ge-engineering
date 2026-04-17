import logo from "@/assets/logo-genginering-transparent.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/">
               <img src={logo} alt="GENGINERING Solutions" className="h-20 opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-base text-white whitespace-nowrap">
              Via Idice 47, 40050 Monterenzio (BO), Italia
            </span>
          </div>
          <p className="text-xs text-white">
            © {new Date().getFullYear()} GEENGINEERING Solution srl. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
