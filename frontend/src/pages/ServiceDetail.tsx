import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/sections/CTASection";
import { getServiceById, getServiceExtras, services } from "@/data/services";

const toc = [
  ["overview", "Overview"],
  ["included", "What's included"],
  ["fit", "Is it a fit?"],
  ["process", "How it runs"],
  ["stack", "Stack"],
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;
  const extras = serviceId ? getServiceExtras(serviceId) : undefined;

  if (!service || !extras) return <Navigate to="/services" replace />;

  const index = services.findIndex((s) => s.id === service.id);
  const next = services[(index + 1) % services.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative section-dark on-dark overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <span className="absolute -right-4 top-20 font-display font-black text-[22rem] leading-none text-transparent select-none hidden lg:block" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
          {num}
        </span>
        <div className="relative container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-14 items-end">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-6">
              <Link to="/services" className="hover:text-white">Services</Link> / {num}
            </p>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-white/50 mb-4">{service.audience}</p>
            <h1 className="text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed mb-10">{service.shortDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/contact">Start a Project <ArrowRight /></Link></Button>
              <Button asChild variant="heroOutline" size="lg"><a href="#included">See what's included</a></Button>
            </div>
          </div>

          {/* Engagement ticket */}
          <div className="bg-background text-foreground shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-accent text-white font-mono-ui text-[11px] uppercase tracking-wider">
              <span>Engagement</span><span>{num} / {String(services.length).padStart(2, "0")}</span>
            </div>
            {[["Starts with", extras.startsWith], ["Shape", extras.shape], ["You get", extras.youGet]].map(([k, v], i) => (
              <div key={k} className={`px-5 py-4 ${i < 2 ? "border-b border-dashed border-foreground/30" : ""}`}>
                <div className="font-mono-ui text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{k}</div>
                <div className="font-display font-extrabold text-xl leading-tight">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[14rem_1fr] gap-12 lg:gap-20">
          <nav className="hidden lg:block">
            <ul className="sticky top-28 border-l border-foreground/20">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex gap-3 py-2 pl-4 -ml-px border-l-2 border-transparent hover:border-accent hover:text-accent text-sm font-medium text-foreground/70 transition-colors">
                    <span className="font-mono-ui text-xs text-muted-foreground">0{i + 1}</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-24 min-w-0">
            <div id="overview" className="scroll-mt-28">
              <p className="eyebrow mb-5">Overview</p>
              <p className="font-display font-bold text-2xl md:text-3xl leading-tight tracking-tight text-foreground">{service.description}</p>
            </div>

            <div id="included" className="scroll-mt-28">
              <p className="eyebrow mb-5">What's included</p>
              <ul className="grid sm:grid-cols-2 border-t border-foreground">
                {service.useCases.map((u) => (
                  <li key={u} className="flex gap-3 py-5 pr-4 border-b border-foreground/20 text-lg">
                    <Check className="w-5 h-5 mt-1.5 text-accent flex-shrink-0" strokeWidth={3} />{u}
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-accent text-white p-8">
                <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-white/70 mb-4">What you walk away with</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                  {service.benefits.map((b) => (<li key={b} className="text-lg font-medium">→ {b}</li>))}
                </ul>
              </div>
            </div>

            <div id="fit" className="scroll-mt-28">
              <p className="eyebrow mb-5">Is it a fit?</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-accent p-7">
                  <h3 className="text-2xl mb-5">Good fit if</h3>
                  <ul className="space-y-4">{extras.goodFit.map((g) => (<li key={g} className="flex gap-3"><Check className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" strokeWidth={3} />{g}</li>))}</ul>
                </div>
                <div className="border-2 border-dashed border-foreground/40 p-7">
                  <h3 className="text-2xl mb-5 text-foreground/70">Probably not if</h3>
                  <ul className="space-y-4 text-muted-foreground">{extras.notFit.map((g) => (<li key={g} className="flex gap-3"><X className="w-5 h-5 mt-0.5 flex-shrink-0" />{g}</li>))}</ul>
                </div>
              </div>
            </div>

            <div id="process" className="scroll-mt-28">
              <p className="eyebrow mb-5">How it runs</p>
              <ol className="border-t border-foreground">
                {extras.steps.map(([t, d], i) => (
                  <li key={t} className="grid md:grid-cols-[4rem_1fr_2fr] gap-2 md:gap-8 py-6 border-b border-foreground/20 items-baseline">
                    <span className="font-mono-ui text-accent">0{i + 1}</span>
                    <h3 className="text-2xl text-foreground">{t}</h3>
                    <p className="text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div id="stack" className="scroll-mt-28">
              <p className="eyebrow mb-5">Typical stack</p>
              <div className="flex flex-wrap gap-2.5">{service.technologies.map((t) => (<span key={t} className="tech-badge">{t}</span>))}</div>
              <p className="mt-4 text-sm text-muted-foreground">We adapt to what you already use where it makes sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next service */}
      <Link to={`/services/${next.id}`} className="group block bg-secondary hover:bg-foreground transition-colors border-y border-foreground/15">
        <div className="container mx-auto px-4 lg:px-8 py-12 flex items-center justify-between gap-6">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted-foreground group-hover:text-white/60 mb-2">Next service</p>
            <p className="font-display font-extrabold text-3xl md:text-4xl text-foreground group-hover:text-white">{next.title}</p>
          </div>
          <ArrowUpRight className="w-10 h-10 text-accent flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>

      <CTASection title={`Need ${service.title.toLowerCase()}?`} body="Tell us where you are and what it needs to do. You'll hear back from the people who would do the work." cta="Start a Project" />
    </PageLayout>
  );
};

export default ServiceDetail;
