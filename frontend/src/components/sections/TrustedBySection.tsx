const TrustedBySection = () => {
  const trustMetrics = [
    {
      metric: "NDA",
      label: "Protected Projects",
      description: "Your client relationships remain confidential",
    },
    {
      metric: "Flexible",
      label: "Engagement",
      description: "Adaptable support for your workflow",
    },
    {
      metric: "Weekly",
      label: "Updates",
      description: "Clear communication throughout delivery",
    },
    {
      metric: "Fast",
      label: "Response",
      description: "Direct communication with the team",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-foreground/70 text-xs sm:text-sm font-black mb-10 md:mb-16 uppercase tracking-widest">
          Why agencies partner with us
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {trustMetrics.map((item, index) => (
            <div
              key={item.label}
              className="group relative flex flex-col items-center text-center p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-foreground/10 hover:border-accent/50 transition-all duration-300 bg-card hover:bg-card/80 md:hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="text-2xl sm:text-3xl md:text-5xl font-black gradient-text mb-2 md:mb-3 break-words">
                {item.metric}
              </div>

              <div className="font-black text-foreground mb-1 md:mb-2 text-sm sm:text-base md:text-lg">
                {item.label}
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-foreground/60 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;