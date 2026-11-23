import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/sections/CTASection";

const moments = [
  ["The rebrand that became a portal", "A branding client wants a members area to go with the new identity."],
  ["The campaign that needs a real app", "A marketing client wants a tool or microsite with logic behind it."],
  ["The AI prototype that has to go live", "You built the first version fast. The client now wants real logins, payments and uptime."],
  ["The integration-heavy brief", "A client asks for reporting or automation that pulls from five systems."],
];

const commitments = [
  ["NDA first", "Signed before we see client details."],
  ["White-label by default", "Your name, your channels, your client."],
  ["Fixed, milestone-based quotes", "So your own pricing and margin are predictable."],
  ["Works in your tools", "Your Slack, your project board, your cadence."],
  ["Clean handover", "Repo, docs and deployment, ready to present as yours."],
  ["Maintenance, if you want it", "A retainer for fixes and changes after launch."],
];

const faqs = [
  ["Will the client know you exist?", "Only if you want them to. We work under your brand and can join client calls as part of your team, or stay entirely out of sight."],
  ["What do you take on for agencies?", "Client portals, web and mobile apps, dashboards, integrations and automation, plus taking an AI-built prototype to production-grade."],
  ["How do we start?", "Send a short brief. We'll ask questions, then return a scope, timeline and fixed quote. No obligation."],
];

const AgencyPartnershipsPage = () => (
  <PageLayout>
    <PageBanner
      badge="For agencies"
      title="Your client needs software."
      titleHighlight="You don't need an engineering department."
      description="Devilon works behind the scenes as your technical delivery partner. You keep the client relationship, strategy and brand. We handle the engineering."
    />

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
        <div>
          <p className="eyebrow mb-5">Sound familiar?</p>
          <h2 className="text-foreground mb-6">AI changed what you can prototype. Not what clients expect.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Your team can mock up an app in an afternoon. Clients still want it secure, integrated, supported and someone accountable when it breaks. That is a capability gap, and not one worth hiring a permanent team for.</p>
        </div>
        <div className="border-t border-foreground">
          {moments.map(([t, d]) => (
            <div key={t} className="py-6 border-b border-foreground/20">
              <h3 className="text-2xl text-foreground mb-1.5">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
          <p className="pt-6 font-display font-extrabold text-2xl text-accent">Your brand. Your client. Our technical delivery.</p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-dark on-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">The terms</p>
        <h2 className="text-primary-foreground mb-12 max-w-2xl">What working with us looks like.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
          {commitments.map(([t, d]) => (
            <div key={t} className="bg-surface-dark p-7">
              <h3 className="text-xl text-primary-foreground mb-2">{t}</h3>
              <p className="text-primary-foreground/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
        <div>
          <p className="eyebrow mb-5">Questions</p>
          <h2 className="text-foreground mb-8">Before you hand us a client.</h2>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Discuss an agency project <ArrowRight /></Link>
          </Button>
        </div>
        <div className="border-t border-foreground">
          {faqs.map(([q, a]) => (
            <div key={q} className="py-6 border-b border-foreground/20">
              <h3 className="text-xl text-foreground mb-2">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTASection title="Have a client project in the pipeline?" body="Send the brief. We'll tell you honestly whether we're the right fit, and what it would take." cta="Partner With Devilon" />
  </PageLayout>
);

export default AgencyPartnershipsPage;
