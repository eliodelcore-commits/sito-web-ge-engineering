import Navbar from "@/components/gen/Navbar";
import Hero from "@/components/gen/Hero";
import ServicesPreview from "@/components/gen/ServicesPreview";
import Footer from "@/components/gen/Footer";

const GenHome = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Footer />
    </div>
  );
};

export default GenHome;
