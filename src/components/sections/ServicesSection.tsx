import { Code, Cloud, Smartphone, Palette, Brain, Layers } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and streamline operations.",
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS development from ideation to launch, built for scale with modern cloud architecture.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description:
      "Cross-platform mobile apps and responsive web applications that deliver seamless user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud migration, infrastructure automation, and DevOps practices to optimize your development lifecycle.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    description:
      "Leverage artificial intelligence and data analytics to unlock insights and automate processes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
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

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border card-hover cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
