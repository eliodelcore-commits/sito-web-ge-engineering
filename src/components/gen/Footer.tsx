import logo from "@/assets/logo-genginering.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link to="/">
               <img src={logo} alt="GEENGINBEERING Solutions" className="h-16 rounded-2xl opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              Via Idice 47, 40050 Monterenzio (BO), Italia
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GEENGINBEERING Solutions. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
