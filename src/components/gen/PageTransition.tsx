import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, filter: "blur(8px)", scale: 0.985 }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
        }}
        exit={{
          opacity: 0,
          y: -16,
          filter: "blur(8px)",
          scale: 0.99,
          transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
