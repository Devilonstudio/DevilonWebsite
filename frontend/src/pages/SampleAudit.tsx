import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/config/site";
import { sampleFindings as findings, sevStyle } from "@/data/sampleAudit";

const SampleAudit = () => (
  <PageLayout>
    <PageBanner
      badge="Sample report"
      title="What an audit"
      titleHighlight="looks like."
      description="An illustrative report, so you can see the format, the level of detail and how findings are prioritised. It is not from a client engagement."
    />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="border-2 border-foreground rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[1.5fr_1fr] border-b-2 border-foreground">
            <div className="p-6 md:p-8">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">Summary</p>
              <p className="font-display font-extrabold text-2xl md:text-2xl leading-tight text-foreground mb-3">
                Not ready for real users yet. Two blockers, all fixable in place.
              </p>
              <p className="text-muted-foreground">
                The interface and core flows work. The problems are underneath: access rules, a leaked key, and
                payment state that can be spoofed. We recommend fixing in place, not rebuilding.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-secondary md:border-l-2 border-foreground">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">Recommendation</p>
              <p className="font-display font-extrabold text-xl text-foreground mb-2">Fix in place</p>
              <p className="text-sm text-muted-foreground">Fixed-scope hardening sprint covering F-01 to F-06, quoted separately.</p>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-[4rem_6.5rem_9rem_1fr] gap-4 px-6 py-3 border-b border-foreground/30 font-mono-ui text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>ID</span><span>Severity</span><span>Area</span><span>Finding and fix</span>
          </div>
          {findings.map((f) => (
            <div key={f.id} className="grid md:grid-cols-[4rem_6.5rem_9rem_1fr] gap-x-4 gap-y-2 px-6 py-5 border-b border-foreground/15 last:border-b-0">
              <span className="font-mono-ui text-sm text-muted-foreground">{f.id}</span>
              <span><span className={`inline-block font-mono-ui text-[11px] uppercase tracking-wider px-2 py-1 ${sevStyle[f.sev]}`}>{f.sev}</span></span>
              <span className="font-display font-bold text-foreground">{f.area}</span>
              <div>
                <p className="text-foreground mb-2">{f.finding}</p>
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Fix:</span> {f.fix} <span className="font-mono-ui text-xs ml-1">[{f.effort}]</span></p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-2xl text-foreground mb-3">What you get</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ A report like this for your app, in {site.auditTurnaround}.</li>
              <li>→ A plain-English summary you can share with a co-founder or investor.</li>
              <li>→ A fix-or-rebuild recommendation and a fixed quote if you want us to do the work.</li>
            </ul>
          </div>
          <div className="border-2 border-dashed border-foreground/40 p-6 text-sm text-muted-foreground">
            This sample is illustrative. It shows format and depth, and the findings are typical of what the audit covers. It is not from a client engagement, and an audit is not a guarantee that an app is free of vulnerabilities.
          </div>
        </div>

        <div className="mt-10">
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Book an audit from {site.auditPrice} <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    <CTASection />
  </PageLayout>
);

export default SampleAudit;
