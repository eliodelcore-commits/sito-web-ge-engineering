import Navbar from "@/components/gen/Navbar";
import Hero from "@/components/gen/Hero";
import ServicesPreview from "@/components/gen/ServicesPreview";
import CubeShowcase from "@/components/gen/CubeShowcase";
import Footer from "@/components/gen/Footer";

const GenHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <CubeShowcase />
      <Footer />
    </div>
  );
};

export default GenHome;
