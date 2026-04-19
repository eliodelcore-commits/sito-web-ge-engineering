import { Link } from "react-router-dom";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import { ArrowLeft } from "lucide-react";

const ProgettoRevampingConfezionamento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link
            to="/progetti?cat=Automazione+Hardware"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tutti i progetti
          </Link>

          <p className="text-primary text-sm font-medium mb-2">Automazione Hardware</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Revamping linea di confezionamento
          </h1>

          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Upgrade da S7-300 a S7-1516F Safety, sostituzione drive KEB F5 con SEW MOVIDRIVE B su Profinet, inserimento 4 cobot per etichettatura packaging.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoRevampingConfezionamento;
