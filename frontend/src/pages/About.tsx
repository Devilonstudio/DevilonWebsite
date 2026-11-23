import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/config/site";

const work = [
  { to: "/ai-to-production", title: "App audit and hardening", text: "We review apps built with AI tools, tell you plainly what's solid and what's risky, and fix what needs fixing." },
  { to: "/services/automation-internal-tools", title: "Automation and data engineering", text: "We connect the tools your team already uses, remove the repetitive steps between them, and build the pipelines and dashboards that show what's happening." },
  { to: "/services", title: "Everything around it", text: "Web and mobile builds, AI features, 3D, and white-label delivery for agencies. We take these on when they fit." },
];

const principles = [
  ["Read before we promise.", "We look at your app before we quote. Sometimes the honest answer is that it's fine, or that part of it needs rebuilding."],
  ["A person answers for it.", "We use AI tools every day because they make us faster. Every finding and every line we ship is reviewed by someone who can explain it."],
  ["Handed over, not held hostage.", "You get the code, the documentation and the deployment. Nothing about the work depends on us staying."],
];

const disciplines = ["Web", "Mobile", "Data", "Automation", "AI", "3D"];

const About = () => (
  <PageLayout>
    <PageBanner
      badge="About"
      title="Software is easier to start."
      titleHighlight="We help you finish it."
      description="Devilon Studio is a small engineering team. We audit and harden AI-built apps, and we automate the manual work that holds small teams back."
    />

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
        <div>
          <p className="eyebrow mb-5">Why we exist</p>
          <h2 className="text-foreground">The gap between a demo and a product.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/75">
          <p>
            AI tools have made it possible to get an app running in a weekend. What they haven't made easy is knowing
            whether it's safe to put real people on. Who can see whose data? What happens when a payment fails? Could anyone else
            maintain it?
          </p>
          <p>
            That's the gap we work in. We review the app, give you a written answer, and do the engineering that closes the gap.
            We bring the same practical approach to teams buried in manual work: fewer copy-and-paste steps, fewer mistakes, clearer reporting.
          </p>
          <p className="font-display font-bold text-2xl md:text-2xl leading-tight tracking-tight text-foreground">
            Our mission is to make software dependable for the people who rely on it.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-dark on-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">What we do</p>
        <h2 className="text-primary-foreground mb-12 max-w-2xl">Three kinds of work.</h2>
        <div className="border-t border-white/20">
          {work.map((w, i) => (
            <Link key={w.to} to={w.to} className="group grid md:grid-cols-[4rem_1fr_1.6fr_auto] gap-3 md:gap-8 py-8 border-b border-white/20 items-baseline hover:bg-white/5 transition-colors">
              <span className="font-mono-ui text-blue-400">0{i + 1}</span>
              <h3 className="text-2xl md:text-2xl text-primary-foreground transition-transform duration-200 group-hover:translate-x-2">{w.title}</h3>
              <p className="text-primary-foreground/65 text-lg">{w.text}</p>
              <ArrowUpRight className="hidden md:block w-6 h-6 text-white/40 group-hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="eyebrow mb-5">How we work</p>
        <div className="grid md:grid-cols-3 gap-10 border-t-2 border-foreground pt-10">
          {principles.map(([t, d]) => (
            <div key={t} data-reveal>
              <h3 className="text-2xl text-foreground mb-3">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-24 items-start">
          <div>
            <p className="eyebrow mb-5">The team</p>
            <h2 className="text-foreground">Small on purpose.</h2>
          </div>
          <div>
            <p className="text-lg text-foreground/75 leading-relaxed mb-8">
              Devilon started in 2025. We're a team of five covering web, mobile, data and automation, AI and 3D, so one group can review an app,
              fix it and connect it to the rest of your business. You talk to the people doing the work, not an account manager.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {disciplines.map((d) => (
                <span key={d} className="font-mono-ui text-xs uppercase tracking-wider px-4 py-2 border border-foreground/20 rounded-full">{d}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book an audit from {site.auditPrice} <ArrowRight /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/sample-audit">See a sample report</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </PageLayout>
);

export default About;
