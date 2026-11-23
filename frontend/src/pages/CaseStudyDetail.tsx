import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/sections/CTASection";
import ProjectVisual from "@/components/shared/ProjectVisual";
import { getCaseStudyById, getCaseStudyExtras, caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const study = caseStudyId ? getCaseStudyById(caseStudyId) : undefined;
  const extras = caseStudyId ? getCaseStudyExtras(caseStudyId) : undefined;

  if (!study || !extras) return <Navigate to="/case-studies" replace />;

  const index = caseStudies.findIndex((s) => s.id === study.id);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative section-dark on-dark overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-6">
              <Link to="/case-studies" className="hover:text-white">Work</Link> / {num}
            </p>
            <span className="inline-block font-mono-ui text-[11px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2.5 py-1 mb-5">
              Representative build · not client work
            </span>
            <h1 className="text-primary-foreground mb-6 text-[clamp(2.25rem,6vw,4.5rem)]">{study.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">{study.shortDescription}</p>
          </div>

          <div className="bg-background text-foreground shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-accent text-white font-mono-ui text-[11px] uppercase tracking-wider">
              <span>Build sheet</span><span>{num} / {String(caseStudies.length).padStart(2, "0")}</span>
            </div>
            {[["Starting point", extras.startingPoint], ["Service", study.service], ["Domain", study.industry]].map(([k, v], i) => (
              <div key={k} className={`px-5 py-4 ${i < 2 ? "border-b border-dashed border-foreground/30" : ""}`}>
                <div className="font-mono-ui text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{k}</div>
                <div className="font-display font-extrabold text-lg leading-tight">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual overlapping the header */}
      <div className="container mx-auto px-4 lg:px-8 -mt-14 lg:-mt-20 relative z-10">
        <div className="border-2 border-foreground shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
          <ProjectVisual variant={study.visual} className="aspect-[16/9] md:aspect-[21/9] w-full" />
        </div>
      </div>

      {/* Problem / Approach */}
      <section className="pt-20 lg:pt-28 pb-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">The problem</p>
            <p className="font-display font-bold text-2xl md:text-2xl leading-snug tracking-tight text-foreground">{study.challenge}</p>
          </div>
          <div>
            <p className="eyebrow mb-5">How it was built</p>
            <p className="text-lg text-foreground/75 leading-relaxed">{study.solution}</p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="eyebrow mb-5">Architecture</p>
          <h2 className="text-foreground mb-12 max-w-2xl">Layer by layer.</h2>
          <ol className="relative max-w-4xl">
            <span className="absolute left-[15px] top-4 bottom-4 w-px bg-foreground/30" />
            {extras.layers.map(([name, detail], i) => (
              <li key={name} className="relative pl-12 pb-4 last:pb-0">
                <span className={`absolute left-0 top-5 w-[31px] h-[31px] flex items-center justify-center font-mono-ui text-xs font-bold border-2 border-foreground ${i === 0 ? "bg-accent text-white border-accent" : "bg-background"} rounded-2xl overflow-hidden`}>
                  {i + 1}
                </span>
                <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 border border-foreground/80 px-5 py-4 bg-background hover:bg-foreground hover:text-background transition-colors rounded-xl" style={{ marginLeft: `${i * 1.25}rem` }}>
                  <span className="font-display font-extrabold text-xl">{name}</span>
                  <span className="opacity-75">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Demonstrates */}
      <section className="py-16 lg:py-24 section-dark on-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">What this demonstrates</p>
          <h2 className="text-primary-foreground mb-12 max-w-2xl">The parts that matter.</h2>
          <ul className="grid md:grid-cols-2 gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
            {study.demonstrates.map((d) => (
              <li key={d} className="flex gap-4 items-start bg-surface-dark p-6">
                <span className="w-7 h-7 bg-accent flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-white" strokeWidth={3} /></span>
                <span className="text-lg text-primary-foreground">{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {study.technologies.map((t) => (
              <span key={t} className="font-mono-ui text-xs px-3 py-1.5 border border-white/30 text-white/80">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl border-2 border-dashed border-foreground/40 p-6 md:p-8 text-muted-foreground">
            <span className="font-mono-ui text-xs uppercase tracking-wider text-foreground mr-3">A note</span>
            This is a representative build created by Devilon to show how we approach this kind of project. It is not client work, and it makes no claims about real users, revenue or results.
          </div>
          <div className="mt-8">
            <Button variant="cta" size="lg" asChild><Link to="/contact">Need something like this? <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Next */}
      <Link to={`/case-studies/${next.id}`} className="group block bg-secondary hover:bg-foreground transition-colors border-y border-foreground/15">
        <div className="container mx-auto px-4 lg:px-8 py-12 flex items-center justify-between gap-6">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted-foreground group-hover:text-white/60 mb-2">Next build</p>
            <p className="font-display font-extrabold text-2xl md:text-4xl text-foreground group-hover:text-white">{next.title}</p>
          </div>
          <ArrowUpRight className="w-10 h-10 text-accent flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>

      <CTASection title="Have something like this in mind?" body="Tell us what you're building or fixing. You'll hear back from the people who would do the work." cta="Start a Project" />
    </PageLayout>
  );
};

export default CaseStudyDetail;
