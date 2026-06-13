import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { services } from "@/data/services";

const Services = () => {
  return (
    <PageLayout>
      <PageBanner
        badge="Engineering Capabilities"
        title="Our"
        titleHighlight="Services"
        description="From SaaS platforms and mobile applications to business automation and AI solutions, we help agencies and product teams deliver complex software projects with confidence."
      />

      {/* Services Overview */}
      
      <section className="py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-accent font-bold text-sm uppercase tracking-wider mb-4 block">
        What We Build
      </span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
        Engineering{" "}
        <span className="gradient-text">Capabilities</span>
      </h2>

      <p className="text-foreground/60 text-xl">
        Flexible development support for agencies and businesses building
        digital products.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <Link
          key={service.id}
          to={`/services/${service.id}`}
          className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-black min-h-[520px] transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl ${
            index % 2 === 1 ? "lg:translate-y-16" : ""
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          </div>

          {/* Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Blue Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Service Number */}
          <div className="absolute top-8 right-8 z-10">
            <span className="text-8xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              0{index + 1}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
            <h3 className="text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              {service.shortDescription}
            </p>

            <div className="h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent mb-6" />

            <span className="inline-flex items-center text-blue-400 text-sm font-bold uppercase tracking-widest">
              Explore Service
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Process Overview */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every engagement follows a structured delivery process focused on clear communication, predictable execution, and high-quality outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We align on scope, requirements, timelines, and delivery expectations." },
              { step: "02", title: "Solution Planning", description: "Defining architecture, technical approach, and implementation strategy." },
              { step: "03", title: "Development", description: "Transparent implementation with regular updates and milestone reviews." },
              { step: "04", title: "Delivery", description: "QA, deployment support, documentation, and post-launch assistance." },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="text-5xl font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Looking for a  <span className="gradient-text">Development Partner?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Whether you need support for a client project, ongoing development capacity, or specialized technical expertise, we're ready to help.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
