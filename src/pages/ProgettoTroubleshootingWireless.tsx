import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";

const ProgettoTroubleshootingWireless = () => {
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
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 max-w-4xl">
            Analisi e troubleshooting su reti wireless in un magazzino automatico su due piani con ambienti RF complessi
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Intervento di analisi e troubleshooting su rete wireless di un magazzino automatico
            distribuito su due piani, caratterizzato da scaffalature metalliche dense, AGV in
            movimento e ambienti RF complessi con elevata riflessione e attenuazione del segnale.
            Identificazione delle cause di disconnessioni, roaming lento e perdita pacchetti,
            con conseguente riprogettazione del posizionamento degli access point e revisione
            del piano canali su 5 GHz e 6 GHz.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl">
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">2</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">piani analizzati</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">RF</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">ambienti complessi</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-3xl font-heading font-bold text-primary mb-1">5/6</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">GHz ottimizzati</p>
            </div>
          </div>

          <div className="mb-12 max-w-3xl">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3">Tecnologie</h3>
            <div className="flex flex-wrap gap-2">
              {["Ekahau AI", "Spectrum Analyzer", "Packet Capture", "RF Design", "Roaming Tuning", "Validazione"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-lg font-semibold mb-3">Attività di troubleshooting</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Survey passivo on-site su entrambi i piani</li>
                <li>Analisi spettrale e identificazione interferenti</li>
                <li>Packet capture e analisi roaming AGV</li>
                <li>Verifica configurazioni controller e AP</li>
                <li>Analisi co-channel e adiacenti</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-lg font-semibold mb-3">Risultati ottenuti</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Riduzione disconnessioni AGV &gt; 90%</li>
                <li>Roaming &lt; 50 ms tra AP</li>
                <li>Eliminazione interferenze co-channel</li>
                <li>Copertura uniforme su entrambi i piani</li>
                <li>Throughput stabile per terminali mobili</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgettoTroubleshootingWireless;