import { useState } from "react";
import TechLogo, { brandColor } from "@/components/shared/TechLogo";

type Tool = [name: string, note: string];

// What we typically reach for at each layer. We adapt to what you already use where it makes sense.
const layers: { id: string; label: string; blurb: string; tools: Tool[] }[] = [
  { id: "interface", label: "Interface", blurb: "What users see and touch.", tools: [
    ["React", "Component-driven interfaces"], ["Next.js", "Routing, rendering and APIs in one app"],
    ["TypeScript", "Types that catch bugs early"], ["Tailwind CSS", "Consistent, fast styling"],
    ["Flutter", "iOS and Android from one codebase"], ["React Native", "Cross-platform mobile apps"] ] },
  { id: "server", label: "Server & APIs", blurb: "Where the rules live.", tools: [
    ["Node.js", "APIs and background jobs"], ["Python", "Data work and automation"],
    ["REST & webhooks", "Clean contracts between systems"], ["PHP", "Extending existing PHP apps"] ] },
  { id: "data", label: "Data", blurb: "Collected, stored and kept safe.", tools: [
    ["PostgreSQL", "Relational data, migrations, backups"], ["Supabase", "Postgres and auth, configured properly"],
    ["MongoDB", "Flexible document data"], ["Firebase", "Real-time sync for mobile"],
    ["ETL / ELT pipelines", "Python and SQL data flows with checks"], ["Web scraping", "Collecting data from sites and APIs"],
    ["Power BI", "Reporting dashboards"] ] },
  { id: "auth", label: "Auth & payments", blurb: "Who gets in, and who gets paid.", tools: [
    ["Supabase Auth", "Sessions with row-level rules"], ["JWT", "Stateless sessions and roles"],
    ["Stripe", "Payments and subscriptions"], ["Verified webhooks", "Payment events you can trust"] ] },
  { id: "delivery", label: "Delivery", blurb: "Getting it live, keeping it up.", tools: [
    ["Docker", "Reproducible environments"], ["AWS", "Hosting and storage"],
    ["CI checks", "Tests before every release"], ["Monitoring", "Error and uptime alerts"] ] },
  { id: "automation", label: "Automation & AI", blurb: "Work that runs by itself.", tools: [
    ["n8n", "Workflow automation"], ["Retool", "Internal tools, fast"],
    ["OpenAI & Anthropic APIs", "LLM features and assistants"], ["LangChain", "Retrieval and tool use"],
    ["Vector databases", "Search over your documents"] ] },
  { id: "specialist", label: "3D & media", blurb: "For products easier to show.", tools: [
    ["Blender", "3D modeling and renders"], ["Three.js", "Interactive 3D on the web"], ["DaVinci Resolve", "Product and explainer video"] ] },
];

const builtOn = ["Lovable", "Bolt", "Replit", "Cursor", "v0", "Base44", "Supabase", "Firebase"];

const TechnologiesSection = () => {
  const [active, setActive] = useState(0);
  const layer = layers[active];

  return (
    <section id="technologies" className="py-24 lg:py-32 section-dark on-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-24 mb-12">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blue-400 mb-5">Stack</p>
            <h2 className="text-primary-foreground">Tools you can hire for.</h2>
          </div>
          <p className="text-primary-foreground/65 text-lg self-end max-w-xl">
            We don't push a stack. We pick what fits the app and what your next developer already knows. Choose a layer to see what we typically use.
          </p>
        </div>

        <div className="grid lg:grid-cols-[17rem_1fr] gap-6 lg:gap-10">
          {/* Layer tabs */}
          <div role="tablist" aria-label="Stack layers" className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 snap-x pb-2 lg:pb-0 lg:border-t lg:border-white/15">
            {layers.map((l, i) => {
              const on = i === active;
              return (
                <button
                  key={l.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={(e) => { if (window.matchMedia("(hover: hover)").matches) setActive(i); }}
                  className={`snap-start flex-shrink-0 text-left flex items-baseline gap-3 px-4 py-3 lg:py-4 border lg:border-0 lg:border-b border-white/20 lg:border-white/15 transition-[background-color,color,border-color] duration-200 ${on ? "bg-accent border-accent text-white" : "text-primary-foreground/70 hover:text-white"}`}
                >
                  <span className={`font-mono-ui text-xs ${on ? "text-white/80" : "text-white/35"}`}>0{i + 1}</span>
                  <span className="font-display font-extrabold text-base lg:text-lg whitespace-nowrap">{l.label}</span>
                  <span className={`hidden lg:inline ml-auto font-mono-ui text-xs ${on ? "text-white/80" : "text-white/35"}`}>{l.tools.length}</span>
                </button>
              );
            })}
          </div>

          {/* Tool panel */}
          <div role="tabpanel" key={layer.id} className="border border-white/15 bg-white/[0.03] p-5 sm:p-8 rounded-xl overflow-hidden">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-primary-foreground mb-1">{layer.label}</p>
            <p className="text-primary-foreground/55 mb-8">{layer.blurb}</p>
            <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {layer.tools.map(([name, note], i) => (
                <li
                  key={name}
                  className="tile-in stack-tile flex gap-4 items-center p-4 rounded-2xl border border-white/10 bg-white/[0.04] transition-[background-color,border-color] duration-200"
                  style={{ ["--i" as string]: i, ["--brand" as string]: brandColor(name) } as React.CSSProperties}
                >
                  <span className="icon-tile !w-[52px] !h-[52px]"><TechLogo name={name} /></span>
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-primary-foreground leading-tight">{name}</span>
                    <span className="block text-sm text-primary-foreground/55 mt-0.5">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/40 max-w-2xl">Logos are trademarks of their respective owners, shown only to indicate technologies we work with. No endorsement is implied.</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono-ui text-xs uppercase tracking-[0.14em] text-white/45 mr-2">We audit apps built on</span>
          {builtOn.map((b) => (
            <span key={b} className="font-mono-ui text-xs px-3 py-1.5 border border-white/25 text-white/75">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
