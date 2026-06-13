import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";

const values = [
  {
    icon: Target,
    title: "Delivery Excellence",
    description:
      "We focus on predictable execution, clean engineering, and quality outcomes.",
  },
  {
    icon: Users,
    title: "Ownership",
    description:
      "We treat every project as a shared responsibility.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "Clear communication, realistic timelines, and honest expectations.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description:
      "We constantly improve our skills, processes, and solutions.",
  },
];

const stats = [
 {
  value:"2025",
  label:"Founded"
 },
 {
  value:"5+",
  label:"Specialized Team Members"
 },
 {
  value:"5",
  label:"Engineering Capabilities"
 },
 {
  value:"Global",
  label:"Client Collaboration"
 }
]

const About = () => {
  return (
    <PageLayout>
      <PageBanner
        badge="Engineering Partner"
        title="About"
        titleHighlight="DEVILON"
        description="A white-label product engineering partner helping agencies, studios, and growing businesses deliver high-quality software without expanding internal teams."
      />

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Software That  <span className="gradient-text">Moves Businesses Forward</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                         <p>
                          Founded in 2025, Devilon Studio was created to help agencies, product teams, and growing businesses access reliable engineering expertise without the overhead of building large in-house teams.
                        </p>

                        <p>
                          We specialize in product engineering, mobile applications, business automation systems, AI-powered solutions, and interactive digital experiences. Our focus is not just writing code, but helping clients deliver products that solve real business problems.
                        </p>

                        <p>
                          For agencies and creative studios, we operate as a white-label engineering partner—integrating into existing workflows, collaborating behind the scenes, and helping teams increase delivery capacity without increasing headcount.
                        </p>
                        <p>
                         Whether launching a new product, modernizing existing systems, or supporting ongoing client work, we prioritize clear communication, dependable execution, and long-term maintainability.
                        </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-8 border border-border text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-10 border border-border">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Mission
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">
               Helping Agencies and Businesses Deliver Better Software
              </h3>
              <p className="text-muted-foreground leading-relaxed">
              We help agencies, studios, and businesses deliver reliable digital products through strong engineering practices, transparent collaboration, and predictable execution.
            </p>
            </div>
            <div className="bg-card rounded-2xl p-10 border border-border">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Vision
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">
               Becoming the Trusted White-Label Engineering Partner
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to become the engineering partner agencies and businesses rely on when they need additional technical capability, dependable delivery, and long-term product support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide how we collaborate with clients, deliver projects, and build long-term partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group text-center p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                    <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                An Engineering Team Built for  <span className="gradient-text">Collaboration</span>
              </h2>
              <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
                <p>
                  We work as an extension of your team, adapting to existing workflows, communication channels, and delivery processes.
                </p>
                <p>
                  For agency partnerships, we operate behind the scenes under your brand. For businesses, we provide direct engineering support focused on building and maintaining reliable software products.
                  Our goal is simple: make collaboration easy and delivery predictable.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
          {[
          "Structured Communication",
          "Clear Requirements",
          "Modern Development Practices",
          "Documentation First",
          "Collaborative Delivery",
          "Long-Term Support"
          ].map((benefit) => (
                <div
                  key={benefit}
                  className="bg-surface-dark-elevated rounded-xl p-6 border border-primary-foreground/10"
                >
                  <span className="text-primary-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Client Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Clients <span className="gradient-text">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
    {
      title: "Problem-Focused Engineering",
      description:
        "We don't build software for the sake of it. Every decision is driven by real business needs and long-term usability.",
    },
    {
      title: "Strong Technical Foundations",
      description:
        "Our team focuses on clean architecture, maintainable code, and modern, proven technologies.",
    },
    {
      title: "Collaborative Approach",
      description:
        "We integrate closely with client teams, acting as an engineering partner rather than an outsourced vendor.",
    },
    {
      title: "Clear & Honest Communication",
      description:
        "You'll always know what's happening—clear timelines, regular updates, and realistic expectations.",
    },
    {
      title: "Scalable Solutions",
      description:
        "We design systems that can grow with your business, whether you're launching an MVP or scaling an existing product.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Support for fixed projects, ongoing development, and extended engineering teams.",
    },]
    .map((reason) => (
              <div
                key={reason.title}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Additional   <span className="gradient-text">Engineering Capacity?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Whether you need a white-label development partner, ongoing engineering support, or a team to build your next product, we're ready to help.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
