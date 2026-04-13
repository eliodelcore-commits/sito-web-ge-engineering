import lunaRossaImg from "@/assets/luna-rossa.jpg";
import { Trophy, Flag, Gauge, Users, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Gauge, label: "Velocità Max", value: "53 kn" },
  { icon: Users, label: "Equipaggio", value: "8" },
  { icon: Calendar, label: "Coppa America", value: "2024" },
  { icon: MapPin, label: "Base", value: "Cagliari" },
];

const LunaRossaSection = () => {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-luna)" }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--luna-rossa))" }}>
            <Trophy className="inline h-4 w-4 mr-2 -mt-0.5" />
            Orgoglio Italiano
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            Luna Rossa <span className="italic text-gradient-gold">Prada Pirelli</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Il team italiano che porta l'eccellenza della vela tricolore ai massimi livelli mondiali. 
            Tecnologia, passione e determinazione nell'America's Cup.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div
            className="relative rounded-lg overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={lunaRossaImg}
              alt="Luna Rossa Prada Pirelli AC75 in volo sui foil"
              loading="lazy"
              width={1920}
              height={800}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <Flag className="h-4 w-4" style={{ color: "hsl(var(--luna-rossa))" }} />
              <span className="text-sm font-semibold text-foreground">AC75 — Challenger of Record</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4">L'AC75 di Luna Rossa</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Luna Rossa Prada Pirelli è il challenger italiano per la 38ª America's Cup. 
              Il loro AC75 è un capolavoro di ingegneria: un monoscafo foiling di 75 piedi con 
              scafo in fibra di carbonio, foil a T che permettono di volare sull'acqua e un 
              doppio albero rotante di oltre 26 metri.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Il team, guidato dallo skipper Max Sirena, unisce l'eccellenza del design italiano 
              di Prada alla tecnologia all'avanguardia. Dal 2000, Luna Rossa ha partecipato a 
              sette edizioni dell'America's Cup, vincendo la Louis Vuitton Cup nel 2000 e nel 2021, 
              diventando uno dei team più iconici nella storia della vela.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-4 flex items-center gap-3"
                  style={{ boxShadow: "var(--shadow-card)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md" style={{ background: "hsl(var(--luna-rossa) / 0.15)" }}>
                    <stat.icon className="h-5 w-5" style={{ color: "hsl(var(--luna-rossa))" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LunaRossaSection;
