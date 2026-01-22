import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturedWorkSection />
      <TechnologiesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
