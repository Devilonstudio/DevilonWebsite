import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import  hero3 from "@/assets/hero3.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero3})`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              Engineering partner for agencies and product teams
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Your engineering team{" "}
            <span className="block text-blue-500 mt-3">
              behind the scenes
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/75 max-w-3xl leading-relaxed mb-12">
            We partner with agencies, studios, and SaaS teams to deliver web
            applications and product features.{" "}
            <span className="text-white font-semibold">
              You keep the client. We handle the engineering.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-full"
            >
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base font-semibold rounded-full"
            >
              <Link to="/services">
                <Play className="mr-2" size={18} />
                View Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </div>
<div className="absolute bottom-0 left-0 right-0 h-40">
  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
  <div className="absolute inset-0 grid-pattern opacity-20" />
</div>
    </section>
  );
};

export default HeroSection;