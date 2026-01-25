const TrustedBySection = () => {
  const companies = [
    "Noctem",
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-10">
          Trusted by startups and SMEs worldwide
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={company}
              className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                <span className="font-bold text-secondary-foreground group-hover:text-accent-foreground">
                  {company.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-foreground/70 group-hover:text-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
