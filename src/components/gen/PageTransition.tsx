import { cloneElement, isValidElement, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      prevPath.current = location.pathname;
    }
  }, [location.pathname]);

  // Pass `location` prop to <Routes> so React Router keeps rendering the
  // outgoing route while it animates out, eliminating layout jumps.
  const routedChildren = isValidElement(children)
    ? cloneElement(children as React.ReactElement, { location })
    : children;

  return (
    <div style={{ perspective: "1600px" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            scale: 0.96,
            rotateX: -6,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotateX: 45,
            filter: "blur(12px)",
            transition: { duration: 0.55, ease: [0.7, 0, 0.84, 0] },
          }}
          style={{
            transformOrigin: "50% 100%",
            transformStyle: "preserve-3d",
            willChange: "transform, opacity, filter",
          }}
        >
          {routedChildren}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
