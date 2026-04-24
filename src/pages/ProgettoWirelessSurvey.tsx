import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoWirelessSurvey = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/progetti?cat=Wireless%20Planning"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tutti i progetti
            </Link>
          </div>

          <p className="text-primary text-sm font-medium mb-2">Wireless Planning</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Wireless survey magazzino logistico automatico
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Site survey predittivo, attivo e passivo con Ekahau AI per un magazzino logistico
            automatico da 15.000 mq. Progettazione e validazione della copertura Wi-Fi 5 e Wi-Fi 6
            per oltre 200 dispositivi mobili (terminali AGV, palmari, scanner barcode).
            Upgrade dell'infrastruttura wireless dalla banda 2.4 GHz alle bande 5 GHz e 6 GHz
            per ridurre interferenze, aumentare throughput e garantire roaming seamless tra le aree
            di stoccaggio automatizzato e le baie di carico.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">15.000</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">mq coperti</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">200+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">device mobili</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">Wi-Fi 6</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">5 / 6 GHz</p>
            </div>
          </div>

          <div className="mb-12 max-w-3xl">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Tecnologie</h3>
            <div className="flex flex-wrap gap-2">
              {["Ekahau AI", "Wi-Fi 5", "Wi-Fi 6", "Upgrade 2.4→5/6 GHz", "Site Survey", "Roaming Analysis"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-lg font-semibold mb-3">Attività svolte</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Survey predittivo su planimetria CAD</li>
                <li>Survey attivo e passivo on-site</li>
                <li>Analisi spettro RF e interferenze 2.4 GHz</li>
                <li>Posizionamento e tilt access point</li>
                <li>Validazione post-installazione</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-lg font-semibold mb-3">Risultati</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Copertura uniforme ≥ -65 dBm</li>
                <li>SNR &gt; 25 dB su tutta l'area</li>
                <li>Roaming &lt; 50 ms tra AP</li>
                <li>Eliminazione zone d'ombra in scaffalatura</li>
                <li>Throughput sostenuto per AGV in movimento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoWirelessSurvey;