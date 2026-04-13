import logo from "@/assets/logo-genginering.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <img src={logo} alt="GenGinering Solutions" className="h-6 opacity-60 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GenGinering SRL Solutions. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
