import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import WhoWeWorkWithSection from "@/components/sections/WhoWeWorkWithSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CTASection from "@/components/sections/CTASection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProcessSection from "@/components/sections/ProcessSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TrustedBySection/>
      <WhoWeWorkWithSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection/>
      <FeaturedWorkSection />
      <TechnologiesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
