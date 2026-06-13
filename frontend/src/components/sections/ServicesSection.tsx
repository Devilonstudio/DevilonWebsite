import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
            Engineering{" "}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
            Flexible development support for agencies and businesses building digital products.
          </p>
        </div>
        <div className="relative overflow-hidden">
  {/* Fade edges */}
  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

  <div className="flex gap-8 animate-marquee w-max">
    {[...services, ...services].map((service, index) => (
      <Link
        key={`${service.id}-${index}`}
        to={`/services/${service.id}`}
        className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#111111] h-[480px] w-[380px] flex-shrink-0 flex flex-col justify-between p-8 transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Blue glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Background image */}
        <div className="absolute inset-0 opacity-90 group-hover:opacity-45 transition-opacity duration-500">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        </div>

        {/* Large Number */}
        <div className="absolute top-6 right-6 z-10">
          <span className="text-8xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
            0{(index % services.length) + 1}
          </span>
        </div>

        {/* Content */}
        <div />

        <div className="relative z-10">
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-white/70 leading-relaxed mb-8">
            {service.shortDescription}
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          <span className="inline-flex items-center text-blue-500 text-sm font-bold uppercase tracking-widest">
            Learn More
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
          </span>
        </div>
      </Link>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default ServicesSection;