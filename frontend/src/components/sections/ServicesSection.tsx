import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of software development services to help you
            innovate, scale, and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card h-[420px] flex flex-col justify-end transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 via-40% to-background to-85%" />
                </div>
                <div className="relative p-8 z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black/60 font-medium leading-relaxed mb-6 line-clamp-2">
                  {service.shortDescription}
                </p>
                  <span className="inline-flex items-center text-accent text-sm font-bold uppercase tracking-widest">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;