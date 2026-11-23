import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import AuditOfferSection from "@/components/sections/AuditOfferSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ReportPreviewSection from "@/components/sections/ReportPreviewSection";
import FaqSection from "@/components/sections/FaqSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <ProblemSection />
    <AuditOfferSection />
    <ReportPreviewSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <ProcessSection />
    <TechnologiesSection />
    <FaqSection />
    <CTASection />
  </PageLayout>
);

export default Index;
