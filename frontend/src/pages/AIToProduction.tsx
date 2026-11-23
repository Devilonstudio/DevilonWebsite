import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import PrototypeToProduction from "@/components/shared/PrototypeToProduction";
import { site } from "@/config/site";
import FaqSection from "@/components/sections/FaqSection";
import CTASection from "@/components/sections/CTASection";

const signs = [
  "It works in your demo, then breaks with real data or real users.",
  "Logins, roles or payments are only half wired up.",
  "Nobody on your team is sure what the generated code actually does.",
  "Every new feature breaks an old one.",
  "There is no testing, no staging and no monitoring.",
  "Someone has asked whether it is secure, and you couldn't say yes.",
];

const steps = [
  ["Audit", "We read the codebase and map the architecture, dependencies and risks. You get a plain-English report, not a wall of jargon."],
  ["Stabilize", "Fix the structural problems, bugs and tangled logic that make everything else harder."],
  ["Productionize", "Build or harden the backend, database, authentication, payments, integrations and infrastructure the app is missing."],
  ["Validate", "Testing, security review, performance and edge cases, before real users find them."],
  ["Ship", "Deployment, monitoring, documentation and a handover your team can run with."],
];

const outcomes = [
  ["A written audit", "What's solid, what's risky and what it would take, in language you can share with a co-founder or investor."],
  ["A straight recommendation", "Fix it, rebuild parts of it, or leave it alone. We'll say which, and why."],
  ["A fixed-scope plan", "Milestones and a quote before we write a line of the fix."],
];

const AIToProduction = () => (
  <PageLayout>
    <PageBanner
      badge="App audit"
      title="Is your AI-built app"
      titleHighlight="ready for real users?"
      description="A fixed-price audit of apps built with Lovable, Bolt, Replit, Cursor and similar tools. You get a written report, an honest fix-or-rebuild recommendation and a fixed quote."
    />

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
        <div>
          <p className="eyebrow mb-5">Sound familiar?</p>
          <h2 className="text-foreground mb-6">Building the demo was the easy part.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Lovable, Cursor, Replit, Bolt and friends are a great way to prove an idea. We work with whatever
            you built it in, and we're not here to tell you AI was the wrong call.
          </p>
        </div>
        <ul className="border-t border-foreground">
          {signs.map((s) => (
            <li key={s} className="py-5 border-b border-foreground/20 text-lg text-foreground">{s}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-dark on-dark border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">The difference</p>
          <h2 className="text-primary-foreground mb-6">Same app. Different promise.</h2>
          <p className="text-primary-foreground/65 text-lg leading-relaxed">
            On the left, an app that looks finished. On the right, one that holds up when someone
            tries to break it, pays for it or depends on it. The screens barely change. Everything under them does.
          </p>
        </div>
        <PrototypeToProduction />
      </div>
    </section>

    <section className="py-20 lg:py-28 section-dark on-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">The process</p>
        <h2 className="text-primary-foreground mb-12 max-w-2xl">Five steps. No hype.</h2>
        <ol className="border-t border-white/20">
          {steps.map(([t, d], i) => (
            <li key={t} className="grid md:grid-cols-[5rem_1fr_2fr] gap-3 md:gap-10 py-8 border-b border-white/20 items-baseline">
              <span className="font-mono-ui text-blue-400">0{i + 1}</span>
              <h3 className="text-3xl md:text-3xl text-primary-foreground">{t}</h3>
              <p className="text-primary-foreground/65 text-lg leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="eyebrow mb-5">Where it starts</p>
        <h2 className="text-foreground mb-12 max-w-2xl">You always get the audit first.</h2>
        <div className="grid md:grid-cols-3 gap-10 border-t border-foreground pt-10">
          {outcomes.map(([t, d]) => (
            <div key={t}>
              <h3 className="text-2xl text-foreground mb-3">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Book an audit from {site.auditPrice} <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    <FaqSection />

    <CTASection title="Not sure what state it's in?" body="Send us what you have. We'll tell you what's solid, what's risky and what it would take to ship." cta="Book an audit" />
  </PageLayout>
);

export default AIToProduction;
