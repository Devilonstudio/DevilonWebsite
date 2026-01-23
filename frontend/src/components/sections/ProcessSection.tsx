import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your business needs, analyze requirements, and create a comprehensive project roadmap.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Architecture",
    description:
      "Our designers and architects craft intuitive interfaces and robust system architectures.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "Agile sprints with continuous integration ensure high-quality code and regular progress updates.",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing across all dimensions—functionality, performance, security, and usability.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deployment & Support",
    description:
      "Seamless deployment with ongoing monitoring, maintenance, and continuous improvement.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Turn Ideas Into{" "}
            <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that ensures transparency, quality, and
            successful outcomes at every stage.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                    {step.number}
                  </div>

                  {/* Icon container */}
                  <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-card border-2 border-border flex items-center justify-center group-hover:border-accent group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
