import { site } from "@/config/site";
import seo from "@/config/seo.json";

const items = (seo.faq as unknown as [string, string][]).map(([q, a]) => [q, a.replace("{price}", site.auditPrice)] as [string, string]);

const FaqSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
      <div>
        <p className="eyebrow mb-5">Questions</p>
        <h2 className="text-foreground mb-5">Before you book.</h2>
        <p className="text-muted-foreground">
          Something not covered? <a href={`mailto:${site.email}`} className="text-foreground font-semibold underline decoration-accent underline-offset-4">{site.email}</a>
        </p>
      </div>
      <div className="border-t-2 border-foreground">
        {items.map(([q, a]) => (
          <details key={q} className="group border-b border-foreground/20">
            <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-display font-bold text-lg md:text-xl text-foreground">{q}</span>
              <span aria-hidden="true" className="relative w-5 h-5 flex-shrink-0">
                <span className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-accent" />
                <span className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent transition-transform duration-200 group-open:rotate-90" />
              </span>
            </summary>
            <p className="pb-6 pr-10 text-muted-foreground leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
