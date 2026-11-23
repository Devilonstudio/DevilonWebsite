import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import heroBg from "@/assets/hero-bg.jpg";

type Slide = {
  label: string; line1: string; line2: string; body: string;
  primary: { to: string; text: string }; secondary: { to: string; text: string }; note?: string;
};

const slides: Slide[] = [
  {
    label: "Production-readiness audits for AI-built apps",
    line1: "Your AI-built app works.",
    line2: "Is it ready for real users?",
    body: `We review apps built with Lovable, Bolt, Replit and Cursor: security, access control, payments, data and deployment. You get a written report in ${site.auditTurnaround}, and a fixed quote if it needs fixing.`,
    primary: { to: "/contact", text: "Book an audit" }, secondary: { to: "/sample-audit", text: "See a sample report" },
    note: `Audits from ${site.auditPrice} · fixed price · written report`,
  },
  {
    label: "Automation and data engineering",
    line1: "Drowning in manual work?",
    line2: "Let's connect your data.",
    body: "We connect the tools your team already uses, build the pipelines and dashboards on top, and remove the copy-and-paste in between.",
    primary: { to: "/contact", text: "Talk to us" }, secondary: { to: "/services/data-engineering", text: "Data engineering" },
  },
  {
    label: "For agencies and studios",
    line1: "Your client needs software.",
    line2: "We build it behind your brand.",
    body: "White-label engineering for agencies: client portals, web apps, dashboards and integrations, with an NDA first and a clean handover.",
    primary: { to: "/agency-partnerships", text: "Partner with us" }, secondary: { to: "/agency-partnerships", text: "How it works" },
  },
];

const HeroSection = () => {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);
  const slide = slides[i];

  useEffect(() => { reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);

  // Type the highlighted line, then hold with a blinking caret
  useEffect(() => {
    if (reduced.current) { setTyped(slide.line2); return; }
    setTyped("");
    let n = 0;
    const t = window.setInterval(() => {
      n += 1;
      setTyped(slide.line2.slice(0, n));
      if (n >= slide.line2.length) window.clearInterval(t);
    }, 38);
    return () => window.clearInterval(t);
  }, [i, slide.line2]);

  // Auto-advance
  useEffect(() => {
    if (paused || reduced.current) return;
    const t = window.setTimeout(() => setI((x) => (x + 1) % slides.length), 8000);
    return () => window.clearTimeout(t);
  }, [i, paused]);

  const scrollDown = () => window.scrollTo({ top: window.innerHeight - 40, behavior: reduced.current ? "auto" : "smooth" });

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0a0d14] on-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/85 to-[#0a0d14]/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0d14] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-accent" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-32 w-full">
        <div key={i} className="stagger max-w-3xl">
          <p className="inline-flex items-center border-l-4 border-accent bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm md:text-base font-medium text-white mb-8">
            {slide.label}
          </p>
          <h1 className="text-white mb-6 text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.03]">
            {slide.line1}
            <br />
            <span className="gradient-text">
              <span className="sr-only">{slide.line2}</span>
              <span aria-hidden="true">{typed}</span>
              <span aria-hidden="true" className="inline-block align-baseline w-[0.42em] h-[0.82em] ml-1 bg-white animate-caret" />
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed mb-9">{slide.body}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to={slide.primary.to}>{slide.primary.text} <ArrowRight /></Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to={slide.secondary.to}>{slide.secondary.text}</Link>
            </Button>
          </div>
          {slide.note && <p className="mt-5 text-sm text-white/50">{slide.note}</p>}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute left-4 lg:left-[max(2rem,calc((100vw-1400px)/2+2rem))] bottom-8 flex items-center gap-3" role="tablist" aria-label="Hero slides">
        {slides.map((s, n) => (
          <button
            key={s.label}
            role="tab"
            aria-selected={n === i}
            aria-label={`Show slide ${n + 1}`}
            onClick={() => setI(n)}
            className={`rounded-full transition-[width,height,background-color,box-shadow] duration-300 ${n === i ? "w-6 h-6 bg-white/0 ring-2 ring-white flex items-center justify-center" : "w-3 h-3 bg-white/40 hover:bg-white/70"}`}
          >
            {n === i && <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />}
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <button onClick={scrollDown} aria-label="Scroll down" className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-2 text-white/70">
        <span className="text-xs [writing-mode:vertical-rl] rotate-180" style={{ letterSpacing: "0.35em" }}>SCROLL</span>
        <span className="w-px h-10 bg-white/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
      </button>
    </section>
  );
};

export default HeroSection;
