import { useEffect, useState } from "react";

const steps = [
  ["Audit", "We read the code, the architecture and the risks, then tell you what we found."],
  ["Plan", "A fix-or-rebuild recommendation, a scope and a quote you can plan around."],
  ["Build", "AI-assisted engineering with human review, in short cycles you can see."],
  ["Validate", "Testing, security review, performance and the edge cases demos skip."],
  ["Ship", "Deployment, monitoring, documentation and a proper handover."],
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2600);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">How we work</p>
            <h2 className="text-foreground">From audit to launch.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">For agencies, the same five steps run inside your existing workflow and under your brand.</p>
        </div>

        <ol className="grid md:grid-cols-5 border border-foreground" onMouseLeave={() => setPaused(false)}>
          {steps.map(([t, d], i) => {
            const on = active === i;
            return (
              <li
                key={t}
                onMouseEnter={() => { setActive(i); setPaused(true); }}
                className={`relative p-6 lg:p-7 min-h-[17rem] flex flex-col justify-between border-b md:border-b-0 md:border-r border-foreground last:border-0 transition-colors duration-300 ${on ? "bg-accent text-white" : "bg-background text-foreground"}`}
              >
                <span
                  className="font-display font-black text-6xl lg:text-7xl leading-none transition-colors"
                  style={{ color: on ? "rgba(255,255,255,0.95)" : "transparent", WebkitTextStroke: on ? "0" : "1px hsl(var(--foreground))" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className={`text-2xl mb-2 ${on ? "text-white" : "text-foreground"}`}>{t}</h3>
                  <p className={`text-sm leading-relaxed ${on ? "text-white/90" : "text-muted-foreground"}`}>{d}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
