import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, Droplets, Phone, Mail, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import holisticHero from "@/assets/holistic-hero.jpg";
import holisticLogo from "@/assets/holistic-logo.png";
import holisticMassage from "@/assets/holistic-massage.jpg";
import holisticWellness from "@/assets/holistic-wellness.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const services = [
  {
    icon: Heart,
    title: "Massaggio Olistico",
    desc: "Un trattamento completo che armonizza corpo, mente e spirito attraverso tecniche manuali profonde e intuitive.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: Droplets,
    title: "Aromaterapia",
    desc: "Oli essenziali selezionati per rilassare, energizzare e riequilibrare i tuoi sensi e il tuo stato emotivo.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Riflessologia Plantare",
    desc: "Stimolazione dei punti riflessi dei piedi per ristabilire l'equilibrio energetico di tutto l'organismo.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Leaf,
    title: "Massaggio Ayurvedico",
    desc: "Antica pratica indiana con oli caldi per rilasciare le tensioni e stimolare il flusso vitale del corpo.",
    color: "from-violet-400 to-purple-500",
  },
];

const testimonials = [
  {
    name: "Giulia M.",
    text: "Un'esperienza trasformativa. Dopo ogni seduta mi sento rinata, con un'energia completamente nuova.",
    stars: 5,
  },
  {
    name: "Marco R.",
    text: "Professionalità e accoglienza straordinarie. Il massaggio olistico ha alleviato le mie tensioni croniche.",
    stars: 5,
  },
  {
    name: "Elena B.",
    text: "L'aromaterapia qui è un viaggio sensoriale unico. Consiglio a tutti di provare almeno una volta.",
    stars: 5,
  },
];

const HolisticLanding = () => {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#3d3229] overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8ddd0]">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={holisticLogo} alt="Armonia Olistica" className="h-10 w-10" />
            <span className="font-heading text-xl font-semibold text-[#3d3229]">
              Armonia <span className="text-[#c8956c]">Olistica</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Chi Siamo", "Trattamenti", "Testimonianze", "Contatti"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-[#7a6b5d] hover:text-[#c8956c] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contatti"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#c8956c] to-[#d4a574] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#c8956c]/25 transition-all"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={holisticHero}
            alt="Studio olistico con candele e ambiente zen"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d3229]/80 via-[#3d3229]/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8956c]/40 bg-[#c8956c]/10 text-[#e8c9a8] text-xs font-medium mb-8"
            >
              <Leaf className="w-3.5 h-3.5" />
              Studio Olistico & Benessere
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Ritrova il tuo{" "}
              <span className="bg-gradient-to-r from-[#e8c9a8] via-[#c8956c] to-[#d4a574] bg-clip-text text-transparent">
                equilibrio
              </span>{" "}
              interiore
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[#d4c8b8] max-w-xl mb-10 leading-relaxed"
            >
              Un percorso di benessere personalizzato attraverso massaggi olistici,
              aromaterapia e tecniche naturali per riconnetterti con te stesso.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <a
                href="#trattamenti"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c8956c] to-[#d4a574] text-white font-medium hover:shadow-xl hover:shadow-[#c8956c]/30 transition-all hover:-translate-y-0.5"
              >
                Scopri i Trattamenti
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
              >
                Contattaci
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-[#c8956c] text-sm font-medium mb-2 uppercase tracking-wider">
                Chi Siamo
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold mb-6 text-[#3d3229]">
                Un rifugio per il tuo{" "}
                <span className="bg-gradient-to-r from-[#c8956c] to-[#d4a574] bg-clip-text text-transparent">
                  benessere
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-[#7a6b5d] leading-relaxed mb-4">
                Da oltre 10 anni crediamo che il vero benessere nasca dall'armonia 
                tra corpo, mente e spirito. Il nostro studio è uno spazio sicuro 
                dove puoi lasciarti andare e ritrovare il tuo centro.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-[#7a6b5d] leading-relaxed mb-8">
                Ogni trattamento è pensato su misura per te, con prodotti 
                naturali e biologici, in un ambiente accogliente e rilassante 
                che stimola tutti i sensi.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} className="flex gap-8">
                {[
                  { num: "10+", label: "Anni di esperienza" },
                  { num: "2000+", label: "Clienti soddisfatti" },
                  { num: "8", label: "Trattamenti unici" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[#c8956c] to-[#d4a574] bg-clip-text text-transparent">
                      {stat.num}
                    </div>
                    <div className="text-xs text-[#9a8b7d] mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c8956c]/20 to-[#e8c9a8]/20 rounded-3xl blur-2xl" />
              <img
                src={holisticMassage}
                alt="Trattamento massaggio olistico"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trattamenti */}
      <section id="trattamenti" className="py-24 bg-gradient-to-b from-[#f3ece3] to-[#faf7f2]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[#c8956c] text-sm font-medium mb-2 uppercase tracking-wider">
              Trattamenti
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold text-[#3d3229]">
              I nostri percorsi di benessere
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#e8ddd0]/50"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-[#3d3229]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#7a6b5d] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Atmosphere */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={holisticWellness}
                alt="Oli essenziali e cristalli"
                className="rounded-2xl shadow-xl w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-[#c8956c] text-sm font-medium mb-2 uppercase tracking-wider">
                La Nostra Filosofia
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold mb-6 text-[#3d3229]">
                Natura, energia e{" "}
                <span className="bg-gradient-to-r from-[#c8956c] to-emerald-500 bg-clip-text text-transparent">
                  guarigione
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-[#7a6b5d] leading-relaxed mb-6">
                Utilizziamo solo prodotti naturali e biologici certificati. 
                Ogni olio essenziale, ogni pietra, ogni erba è scelta con cura 
                per le sue proprietà terapeutiche e il suo potere riequilibrante.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3">
                {["Prodotti 100% naturali e bio", "Ambiente certificato e igienizzato", "Percorsi personalizzati", "Operatori qualificati e certificati"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#5a4d41]">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c8956c] to-[#d4a574]" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonianze" className="py-24 bg-gradient-to-b from-[#faf7f2] to-[#f3ece3]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[#c8956c] text-sm font-medium mb-2 uppercase tracking-wider">
              Testimonianze
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold text-[#3d3229]">
              Cosa dicono i nostri clienti
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8ddd0]/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
                  ))}
                </div>
                <p className="text-[#5a4d41] leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8956c] to-[#e8c9a8] flex items-center justify-center text-white font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-medium text-[#3d3229]">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contatti" className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d3229] via-[#5a4d41] to-[#3d3229]" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #c8956c 0%, transparent 50%), radial-gradient(circle at 70% 80%, #d4a574 0%, transparent 50%)" }} />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-16">
              <div>
                <p className="text-[#c8956c] text-sm font-medium mb-2 uppercase tracking-wider">Contatti</p>
                <h2 className="font-heading text-4xl font-bold text-white mb-6">
                  Prenota il tuo momento di{" "}
                  <span className="bg-gradient-to-r from-[#e8c9a8] to-[#c8956c] bg-clip-text text-transparent">
                    pace
                  </span>
                </h2>
                <p className="text-[#b8a899] leading-relaxed mb-8">
                  Scrivici o chiamaci per prenotare un trattamento. 
                  Il nostro team ti guiderà nella scelta del percorso più adatto a te.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Phone, text: "+39 345 678 9012" },
                    { icon: Mail, text: "info@armoniaolistica.it" },
                    { icon: MapPin, text: "Via della Pace 22, Bologna" },
                    { icon: Clock, text: "Lun-Sab: 9:00 - 20:00" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-[#d4c8b8]">
                      <Icon className="w-5 h-5 text-[#c8956c]" />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="font-heading text-xl font-semibold text-white mb-6">
                  Richiedi informazioni
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nome e cognome"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8956c] transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8956c] transition-colors text-sm"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white/60 focus:outline-none focus:border-[#c8956c] transition-colors text-sm">
                    <option value="">Scegli un trattamento</option>
                    <option>Massaggio Olistico</option>
                    <option>Aromaterapia</option>
                    <option>Riflessologia Plantare</option>
                    <option>Massaggio Ayurvedico</option>
                  </select>
                  <textarea
                    placeholder="Messaggio (opzionale)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c8956c] transition-colors text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c8956c] to-[#d4a574] text-white font-medium hover:shadow-lg hover:shadow-[#c8956c]/25 transition-all"
                  >
                    Invia Richiesta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#e8ddd0]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={holisticLogo} alt="Armonia Olistica" className="h-8 w-8" />
              <span className="font-heading font-semibold text-[#3d3229]">
                Armonia Olistica
              </span>
            </div>
            <p className="text-sm text-[#9a8b7d]">
              © 2026 Armonia Olistica. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HolisticLanding;
