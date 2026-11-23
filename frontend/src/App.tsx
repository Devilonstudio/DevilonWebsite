import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import AgencyPartnerships from "./pages/AgencyPartnerships";
import AIToProduction from "./pages/AIToProduction";
import SampleAudit from "./pages/SampleAudit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/agency-partnerships" element={<AgencyPartnerships />} />
          <Route path="/ai-to-production" element={<AIToProduction />} />
          <Route path="/sample-audit" element={<SampleAudit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
