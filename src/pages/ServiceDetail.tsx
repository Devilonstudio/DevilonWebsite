import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { getServiceById, services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <PageLayout>
      <PageBanner
        badge="Our Services"
        title={service.title}
        description={service.shortDescription}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Business Problems We Solve
                </h2>
                <div className="space-y-4">
                  {service.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Approach</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Discovery Phase",
                      description:
                        "We begin by understanding your business goals, target users, and technical requirements through in-depth workshops.",
                    },
                    {
                      title: "Strategic Planning",
                      description:
                        "Our team creates detailed project roadmaps, architecture designs, and timeline estimates.",
                    },
                    {
                      title: "Iterative Development",
                      description:
                        "We work in agile sprints, delivering working software regularly with continuous feedback loops.",
                    },
                    {
                      title: "Quality Assurance",
                      description:
                        "Rigorous testing ensures reliability, security, and performance across all scenarios.",
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="p-6 bg-secondary/30 rounded-xl border border-border"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Service Icon Card */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-foreground mb-4">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Let's discuss how we can help with your {service.title.toLowerCase()} needs.
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Talk to an Expert
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Service */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/services"
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              All Services
            </Link>
            <Link
              to={`/services/${nextService.id}`}
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Next: {nextService.title}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;
