import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
};

export default PageTransition;
