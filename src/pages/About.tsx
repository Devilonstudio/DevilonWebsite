import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we build, never settling for 'good enough'.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as true partners with our clients, fostering open communication and shared ownership.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We do what's right, even when no one is watching. Honesty and transparency guide every decision.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to solve complex problems effectively.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Retention" },
];

const About = () => {
  return (
    <PageLayout>
      <PageBanner
        badge="Who We Are"
        title="About"
        titleHighlight="NexaTech"
        description="We're a team of passionate engineers, designers, and strategists building the future of software."
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
                Building Software That <span className="gradient-text">Matters</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, NexaTech started with a simple mission: to bridge the gap 
                  between innovative ideas and exceptional software. What began as a small team 
                  of passionate developers has grown into a full-service software agency trusted 
                  by startups and Fortune 500 companies alike.
                </p>
                <p>
                  Over the years, we've refined our approach, embracing agile methodologies, 
                  investing in our team's growth, and constantly pushing the boundaries of what's 
                  possible with technology. Today, we're proud to be a partner of choice for 
                  businesses seeking to transform their industries through software.
                </p>
                <p>
                  Our success is built on a foundation of technical excellence, transparent 
                  communication, and genuine care for our clients' outcomes. We don't just 
                  write code—we solve business problems and create lasting value.
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
                Empowering Businesses Through Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We exist to help ambitious organizations harness the power of software 
                to achieve their goals. By combining deep technical expertise with 
                business acumen, we deliver solutions that drive real, measurable impact.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 border border-border">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Vision
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Shaping the Future of Digital Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every business, regardless of size, can 
                leverage cutting-edge technology to compete and thrive. We're committed 
                to being the catalyst that makes this vision a reality.
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
              Our values aren't just words on a wall—they're the principles that guide 
              every decision we make and every line of code we write.
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
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                A Team That <span className="gradient-text">Thrives Together</span>
              </h2>
              <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
                <p>
                  At NexaTech, we believe that great software comes from great teams. 
                  We've built a culture that attracts top talent and empowers them to 
                  do their best work—with flexibility, autonomy, and purpose.
                </p>
                <p>
                  Our team members are more than employees—they're problem solvers, 
                  innovators, and craftspeople who take pride in their work. We invest 
                  heavily in learning and development, encouraging everyone to grow 
                  their skills and explore new technologies.
                </p>
                <p>
                  Remote-first by design, we offer the flexibility that modern 
                  professionals need while maintaining strong connections through 
                  regular virtual and in-person gatherings.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Remote-first workplace",
                "Continuous learning budget",
                "Regular team retreats",
                "Open door policy",
                "Work-life balance",
                "Diverse perspectives",
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
                title: "Proven Track Record",
                description:
                  "200+ successful projects across industries from startups to Fortune 500 companies.",
              },
              {
                title: "Technical Excellence",
                description:
                  "Senior engineers with 10+ years average experience in cutting-edge technologies.",
              },
              {
                title: "Partnership Approach",
                description:
                  "We're invested in your success, acting as an extension of your team.",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear communication, regular updates, and no surprises throughout the project.",
              },
              {
                title: "Long-term Support",
                description:
                  "We're there for you post-launch with maintenance, optimization, and evolution.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Premium quality at fair prices with flexible engagement models.",
              },
            ].map((reason) => (
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
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how our team can help bring your vision to life.
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

export default About;
