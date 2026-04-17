import logo from "@/assets/logo-genginering-new.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/">
               <img src={logo} alt="GENGINERING Solutions" className="h-20 mix-blend-screen rounded-2xl opacity-90 hover:opacity-100 transition-opacity" style={{ backgroundColor: '#0F172A' }} />
            </Link>
            <span className="text-base text-white whitespace-nowrap leading-none">
              Via Idice 47, 40050 Monterenzio (BO), Italia
            </span>
          </div>
          <p className="text-base text-white whitespace-nowrap leading-none">
            © {new Date().getFullYear()} GEENGINEERING Solution srl. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
