import { Users, Zap, Target, Handshake, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineering Teams",
    description:
      "Our senior developers bring 10+ years of expertise across diverse industries and technologies.",
  },
  {
    icon: Zap,
    title: "Agile & Scalable Delivery",
    description:
      "Iterative development with continuous feedback ensures rapid delivery and adaptable solutions.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We align technology decisions with your business goals to maximize ROI and impact.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We invest in relationships, supporting clients beyond launch with ongoing optimization.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "Regular updates, clear documentation, and direct access to your development team.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why NexaTech
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Partner with a Team That{" "}
              <span className="gradient-text">Delivers Results</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              We don't just write code—we solve business problems. Our approach
              combines deep technical expertise with a genuine commitment to your
              success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-dark-elevated rounded-xl p-6 border border-primary-foreground/10">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-primary-foreground/60 text-sm">
                  On-Time Delivery Rate
                </div>
              </div>
              <div className="bg-surface-dark-elevated rounded-xl p-6 border border-primary-foreground/10">
                <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
                <div className="text-primary-foreground/60 text-sm">
                  Average Client Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Reasons list */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group flex gap-4 p-5 rounded-xl bg-surface-dark-elevated border border-primary-foreground/5 hover:border-accent/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
