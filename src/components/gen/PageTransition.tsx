import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState<"in" | "out">("in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage("out");
    }
  }, [location, displayLocation]);

  return (
    <div style={{ perspective: "1400px" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={displayLocation.pathname}
          initial={{
            opacity: 0,
            scale: 0.92,
            rotateX: -8,
            filter: "blur(6px)",
            transformOrigin: "50% 0%",
          }}
          animate={
            stage === "in"
              ? {
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                }
              : {
                  opacity: 0,
                  scale: 0.6,
                  rotateX: 35,
                  filter: "blur(10px)",
                  transformOrigin: "50% 100%",
                  transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] },
                }
          }
          onAnimationComplete={() => {
            if (stage === "out") {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
              setDisplayLocation(location);
              setStage("in");
            }
          }}
          style={{ transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
