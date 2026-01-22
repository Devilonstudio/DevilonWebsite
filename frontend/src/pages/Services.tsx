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
        badge="What We Do"
        title="Our"
        titleHighlight="Services"
        description="We offer a full spectrum of software development services to help you innovate, scale, and succeed in the digital landscape."
      />

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
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

      {/* Process Overview */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every project follows our proven methodology that ensures quality, 
              transparency, and successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We dive deep into your requirements and business goals" },
              { step: "02", title: "Design", description: "Creating intuitive interfaces and robust architectures" },
              { step: "03", title: "Development", description: "Agile sprints with continuous progress updates" },
              { step: "04", title: "Delivery", description: "Thorough testing, deployment, and ongoing support" },
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
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how we can help bring your vision to life with the right 
              technology and expertise.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
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
