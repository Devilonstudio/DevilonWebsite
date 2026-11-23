import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sampleFindings, sevStyle } from "@/data/sampleAudit";

const ReportPreviewSection = () => {
  const preview = sampleFindings.slice(0, 4);
  return (
    <section className="py-24 lg:py-32 section-dark on-dark">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">The deliverable</p>
          <h2 className="text-primary-foreground mb-6">See exactly what you'd get.</h2>
          <p className="text-primary-foreground/65 text-lg leading-relaxed mb-8 max-w-md">
            Every finding has a severity, a plain-English explanation, a fix and an effort estimate. This one is an illustrative sample, so you can judge the depth before you book.
          </p>
          <Link to="/sample-audit" className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-white border-b-2 border-accent pb-1 hover:text-blue-400 transition-colors">
            Read the full sample report <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div data-reveal className="bg-background text-foreground shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-foreground bg-secondary font-mono-ui text-[11px] uppercase tracking-wider">
            <span>Sample audit · illustrative</span>
            <span className="text-accent font-bold">4 of 7 findings</span>
          </div>
          {preview.map((f) => (
            <div key={f.id} className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-4 px-5 py-4 border-b border-foreground/15 last:border-b-0">
              <span><span className={`inline-block font-mono-ui text-[10px] uppercase tracking-wider px-2 py-1 ${sevStyle[f.sev]}`}>{f.sev}</span></span>
              <span>
                <span className="block font-display font-bold leading-tight">{f.area}</span>
                <span className="block text-sm text-muted-foreground mt-0.5">{f.finding}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportPreviewSection;
