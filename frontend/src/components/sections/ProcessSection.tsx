import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Project Handoff",
    description:
      "Requirements, designs, and goals are transferred into our engineering workflow.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Technical Planning",
    description:
      "We define architecture, stack, timeline, and delivery milestones.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development Sprints",
    description:
      "Structured development with regular updates and transparent progress.",
  },
  {
    icon: TestTube,
    number: "04",
    title: "QA & Review",
    description: "Testing, fixes, and quality checks before delivery.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Client Delivery Support",
    description: "Documentation, deployment, and continued maintenance.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
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

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent/40 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number (background style) */}
                <div className="absolute top-3 right-4 text-4xl font-black text-accent/10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;