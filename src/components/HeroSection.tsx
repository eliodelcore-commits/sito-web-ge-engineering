import heroImage from "@/assets/hero-sailing.jpg";
import { Anchor } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Yacht a vela di ultima generazione al tramonto"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        style={{ y: imgY }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-hero)",
          opacity: overlayOpacity,
        }}
      />
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Anchor className="mx-auto mb-6 h-10 w-10 text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Vele del <span className="text-gradient-gold italic">Futuro</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Scopri le barche a vela più innovative e tecnologiche al mondo.
          Fibra di carbonio, foil e design all'avanguardia.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
