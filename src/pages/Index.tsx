import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <FeaturedWorkSection />
        <TechnologiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
