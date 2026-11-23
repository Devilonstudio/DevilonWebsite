import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileCtaBar from "./MobileCtaBar";
import { applyPageMeta } from "@/lib/seo";
import { useReveal } from "@/hooks/useReveal";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  useReveal(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyPageMeta(pathname);
  }, [pathname]);

  return (
    <div className="min-h-[100svh] bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <div className="pb-[4.5rem] lg:pb-0 bg-surface-dark"><Footer /></div>
      <MobileCtaBar />
    </div>
  );
};

export default PageLayout;
