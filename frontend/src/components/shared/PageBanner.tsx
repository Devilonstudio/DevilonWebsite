interface PageBannerProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  compact?: boolean;
}

const PageBanner = ({ badge, title, titleHighlight, description, compact }: PageBannerProps) => {
  return (
    <section className={`relative section-dark overflow-hidden on-dark ${compact ? "pt-28 pb-10 lg:pt-36 lg:pb-12" : "pt-32 pb-20 lg:pt-44 lg:pb-28"}`}>
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-block font-mono-ui text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground bg-accent px-3 py-1.5 rounded mb-6 animate-fade-up">
              {badge}
            </span>
          )}
          <h1 className={`text-primary-foreground mb-6 animate-fade-up delay-100 ${compact ? "text-[clamp(2rem,5vw,3.5rem)]" : ""}`}>
            {title} {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed animate-fade-up delay-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
