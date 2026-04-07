import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedBoats from "@/components/FeaturedBoats";
import LunaRossaSection from "@/components/LunaRossaSection";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedBoats />
      <LunaRossaSection />
      <TechSection />
      <Footer />
    </div>
  );
};

export default Index;
