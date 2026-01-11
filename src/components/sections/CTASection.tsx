import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">
              Free consultation available
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Let's Build Your Next{" "}
            <span className="gradient-text">Product Together</span>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ready to transform your ideas into reality? Schedule a free
            consultation with our experts and discover how we can help you
            succeed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Call
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 text-primary-foreground/50 text-sm">
            <span>✓ No commitment required</span>
            <span>✓ Free project estimate</span>
            <span>✓ NDA available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
