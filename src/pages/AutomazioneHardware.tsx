import Navbar from "@/components/gen/Navbar";
import Footer from "@/components/gen/Footer";
import heroImg from "@/assets/automazione-hardware-hero.jpg";
import trasloelevatore from "@/assets/trasloelevatore.jpg";
import robot from "@/assets/robot-industriale.jpg";
import lgv from "@/assets/lgv-veicolo.jpg";

const machines = [
  {
    title: "Trasloelevatori",
    description:
      "Sistemi automatici per lo stoccaggio e il prelievo di pallet e cassette in magazzini verticali ad alta densità. Gestione ottimizzata degli spazi con velocità e precisione elevate.",
    image: trasloelevatore,
  },
  {
    title: "Robot Industriali",
    description:
      "Bracci robotici per operazioni di picking, pallettizzazione, manipolazione e assemblaggio. Integrazione completa con i sistemi di gestione del magazzino.",
    image: robot,
  },
  {
    title: "Veicoli a Guida Laser (LGV)",
    description:
      "Veicoli autonomi a guida laser per il trasporto automatizzato di materiali all'interno dello stabilimento. Navigazione precisa, sicura e flessibile senza infrastrutture fisse.",
    image: lgv,
  },
];

const AutomazioneHardware = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={heroImg}
          alt="Magazzino automatico"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <p className="text-primary text-sm font-medium mb-2">Automazione Hardware</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Magazzini Automatici
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Progettiamo e integriamo sistemi completi per la logistica automatizzata:
            trasloelevatori, robot industriali e veicoli a guida laser per magazzini
            ad alte prestazioni.
          </p>
        </div>
      </div>

      {/* Machines */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          {machines.map((machine, i) => (
            <div
              key={machine.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  {machine.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {machine.description}
                </p>
              </div>
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <img
                  src={machine.image}
                  alt={machine.title}
                  className="rounded-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomazioneHardware;
