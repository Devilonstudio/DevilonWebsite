import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

const covers = [
  ["Access control", "Who can read and change what, enforced on the server and in the database."],
  ["Auth and secrets", "Sign-in, sessions, password reset, and anything sensitive sitting in the client."],
  ["Payments", "Checkout, webhooks, failed payments and what the app does when they go wrong."],
  ["Data", "Schema, migrations, backups and how data is validated on the way in."],
  ["Deployment", "Environments, error monitoring, and whether you can roll back."],
  ["Maintainability", "Whether another developer can read it, change it and trust the tests."],
];

const AuditOfferSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
        <div className="lg:sticky lg:top-28 self-start">
          <p className="eyebrow mb-5">The audit</p>
          <h2 className="text-foreground mb-6">One fixed price. One written answer.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            You send us the app. We review it and tell you plainly what's solid, what's risky and
            whether to fix it in place or rebuild parts of it. If you want us to fix it, we quote that separately.
          </p>
          <div className="border-2 border-foreground p-6 mb-6 rounded-2xl overflow-hidden">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1">Audit from</p>
            <p className="font-display font-black text-5xl text-foreground">{site.auditPrice}</p>
            <p className="text-sm text-muted-foreground mt-2">Report in {site.auditTurnaround}. Hardening sprints from {site.sprintFrom}.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-accent">
            Book an audit <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted-foreground mb-4">What we look at</p>
          <dl className="border-t-2 border-foreground">
            {covers.map(([t, d]) => (
              <div key={t} data-reveal className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 py-5 border-b border-foreground/20">
                <dt className="font-display font-extrabold text-xl text-foreground">{t}</dt>
                <dd className="text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            An audit reviews the areas above. It is not a guarantee that an app is free of vulnerabilities.
            We only look at systems you own or have permission to share.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AuditOfferSection;
