import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import {
  Users,
  ShieldCheck,
  Workflow,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

const serviceIcons = [
  Users,
  ShieldCheck,
  Workflow,
  Code2,
  Rocket,
  Headphones,
];

const AgencyPartnershipsPage = () => {
  const services = [
    "React Development",
    "Node.js Backend",
    "SaaS Platforms",
    "Mobile Apps",
    "Business Automation",
    "Maintenance & Support",
  ];

  const benefits = [
    "Scale your delivery capacity without hiring",
    "White-label solutions - your branding",
    "Flexible project engagements",
    "Transparent communication and reporting",
    "Experienced, senior-level engineers",
    "Fast turnaround and quality assurance",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                White-label engineering partner for agencies, studios, and design firms
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
              Your white-label engineering team for web, SaaS & mobile{" "}
              <span className="gradient-text">for web & SaaS</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
              We act as your behind-the-scenes engineering team. You retain the client relationship while we handle design, development, and delivery under your brand. No rebranding, no client exposure — just reliable execution when you need extra capacity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Partnership
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
        How It Works
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        Zero Friction{" "}
        <span className="gradient-text">Partnership Model</span>
      </h2>

      <p className="text-muted-foreground text-lg">
        We disappear into your workflow. Your branding. Your client. Our
        delivery.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {services.map((service, index) => {
        const Icon = serviceIcons[index % serviceIcons.length];

        return (
          <div
            key={service}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl"
          >
            {/* Step Number */}
            <div className="absolute top-4 right-4 text-4xl font-black text-black/5">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent/30">
                  <Icon className="w-7 h-7 text-black" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug transition-colors duration-300 group-hover:text-accent">
                    {service}
                  </h3>

                  <div className="mt-3 h-px w-0 bg-accent/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-12">
              Why Agencies Work With <span className="gradient-text">Devilon</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Agency Trust Signals */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-primary-foreground/10">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">Dedicated Team</div>
                <div className="text-primary-foreground/70">Work directly with the people building your project.</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">White-Label Friendly</div>
                <div className="text-primary-foreground/70">We operate behind the scenes under your brand.</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">Flexible Engagement</div>
                <div className="text-primary-foreground/70">Project-based or ongoing delivery support depending on your needs.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "1",
                title: "Scope & Planning",
                description: "You define project scope and client requirements. We create a detailed roadmap and timeline."
              },
              {
                number: "2",
                title: "Design & Development",
                description: "Our team develops under your branding. Regular updates keep you informed every step of the way."
              },
              {
                number: "3",
                title: "Quality Assurance",
                description: "Rigorous testing ensures delivery meets your standards. We handle all QA before handoff."
              },
              {
                number: "4",
                title: "Delivery & Support",
                description: "Seamless delivery to your client. Ongoing support and maintenance as needed."
              }
            ].map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Ready to Extend Your  {" "}
              <span className="gradient-text">Delivery Capacity?</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Let's discuss how Devilon can become your trusted development partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Partnership
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-primary-foreground/50 text-sm flex-wrap">
              <span>✓ No long-term commitment</span>
              <span>✓ Flexible engagement</span>
              <span>✓ NDA available</span>
            </div>

            <div className="mt-8 text-center text-primary-foreground/60">
              <p className="text-sm mb-2">Or reach out directly:</p>
              <a href="mailto:product@devilonstudio.com" className="font-semibold text-accent hover:text-accent/80 transition-colors">
                product@devilonstudio.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AgencyPartnershipsPage;
