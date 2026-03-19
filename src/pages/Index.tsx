import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GalleryPreview } from "@/components/GalleryPreview";
import { ContactSection } from "@/components/ContactSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GalleryPreview />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
