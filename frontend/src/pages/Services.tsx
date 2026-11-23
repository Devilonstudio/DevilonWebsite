import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";

const triage: [string, string][] = [
  ["My AI-built app isn't ready for real users", "ai-to-production"],
  ["I need a new product built properly", "product-engineering"],
  ["I need an iOS and Android app", "mobile-apps"],
  ["My team is drowning in manual work", "automation-internal-tools"],
  ["My data is scattered and my reports are manual", "data-engineering"],
  ["I want AI inside my product or workflow", "ai-integration"],
  ["My agency client needs software", "white-label-delivery"],
];

const Services = () => (
  <PageLayout>
    <PageBanner
      badge="Services"
      title="Three things we do first,"
      titleHighlight="and a few we also build."
      description="Most clients start with an audit or an automation project. The rest is available when you need it."
    />
    <section className="py-16 lg:py-20 bg-accent on-dark">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-white/70 mb-3">Not sure where to start?</p>
          <h2 className="text-white text-3xl md:text-3xl">Start with your problem.</h2>
        </div>
        <ul className="border-t border-white/40">
          {triage.map(([q, id]) => (
            <li key={id}>
              <Link to={`/services/${id}`} className="group flex items-center justify-between gap-4 py-4 border-b border-white/40 text-white hover:bg-black/20 transition-colors">
                <span className="font-display font-bold text-lg md:text-2xl transition-transform duration-200 group-hover:translate-x-3">“{q}”</span>
                <ArrowUpRight className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="border-t border-foreground">
          {services.filter((x) => x.primary).map((s, i) => (
            <Link key={s.id} to={`/services/${s.id}`} className="group grid lg:grid-cols-[4rem_1.2fr_1.5fr_auto] gap-4 lg:gap-10 py-10 border-b border-foreground/20 items-start hover:bg-accent hover:text-white transition-colors">
              <span className="font-mono-ui text-sm text-muted-foreground group-hover:text-white/70">{String(i + 1).padStart(2, "0")}</span>
              <div className="transition-transform duration-200 group-hover:translate-x-2">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-accent group-hover:text-white/80 mb-2">{s.audience}</p>
                <h2 className="text-3xl md:text-3xl text-foreground group-hover:text-white">{s.title}</h2>
              </div>
              <div>
                <p className="text-muted-foreground group-hover:text-white/85 mb-4 leading-relaxed">{s.shortDescription}</p>
                <p className="font-mono-ui text-xs text-foreground/60 group-hover:text-white/70">{s.useCases.slice(0, 3).join("  ·  ")}</p>
              </div>
              <ArrowUpRight className="hidden lg:block w-7 h-7 text-foreground/30 group-hover:text-white" />
            </Link>
          ))}
        </div>

        <p className="eyebrow mt-20 mb-5">Also available</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/20 border border-foreground/20">
          {services.filter((x) => !x.primary).map((s) => (
            <Link key={s.id} to={`/services/${s.id}`} className="group bg-background p-6 hover:bg-foreground transition-colors">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-accent mb-2">{s.audience}</p>
              <h3 className="text-xl text-foreground group-hover:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/75">{s.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Not sure which one fits?" body="Describe the problem. We'll tell you where it sits and whether we're the right team." cta="Talk to Engineering" />
  </PageLayout>
);

export default Services;
