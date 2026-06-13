interface PageBannerProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
}

const PageBanner = ({ badge, title, titleHighlight, description }: PageBannerProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-black overflow-hidden">
  <div className="absolute inset-0 grid-pattern opacity-20" />

  <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />

  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {badge}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            {title}{" "}
            {titleHighlight && (
              <span className="gradient-text">{titleHighlight}</span>
            )}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fade-up delay-200">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageBanner;
