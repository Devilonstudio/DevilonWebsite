import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent/20 border-2 border-accent/50 mb-12">
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-accent text-sm font-bold tracking-wide uppercase">
              Free consultation available
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary-foreground mb-8 leading-tight">
            Your Next Project Needs a Stronger {" "}
            <span className="gradient-text">Engineering Team</span>
          </h2>

          <p className="text-primary-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Need reliable developers behind the scenes? Partner with Devilon Studio to extend your delivery capacity without expanding your internal team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="xl" className="text-lg font-bold px-12 py-7 shadow-2xl hover:shadow-3xl" asChild>
              <Link to="/contact">
                Start a Partnership
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="text-lg font-bold px-12 py-7 border-2 border-primary-foreground/40 hover:border-primary-foreground/80 hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-primary-foreground/60 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Flexible engagement models
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Free project estimate
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              NDA available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
