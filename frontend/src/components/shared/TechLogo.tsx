import { useEffect, useState } from "react";
import { Webhook, Workflow, Globe, BadgeCheck, GitBranch, Activity, Boxes, KeyRound, Cloud, Box, LucideIcon } from "lucide-react";
import rawLogos from "@/config/logos.json";
import { site } from "@/config/site";

type Mark = { slug: string; color: string };
type LogoDef = { marks?: Mark[]; mode?: "first" | "all"; icon?: string };
const logos = rawLogos as unknown as Record<string, LogoDef>;
const icons: Record<string, LucideIcon> = { Webhook, Workflow, Globe, BadgeCheck, GitBranch, Activity, Boxes, KeyRound, Cloud, Box };

const url = (slug: string) => `${site.logoBase}/${slug}.svg`;
const loads = (slug: string) =>
  new Promise<boolean>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url(slug);
  });

export const brandColor = (name: string) => logos[name]?.marks?.[0]?.color ?? "#2563eb";

// Real technology logos (Simple Icons), tinted to the brand colour. Falls back to a line icon if a logo is missing.
const TechLogo = ({ name }: { name: string }) => {
  const def = logos[name];
  const [shown, setShown] = useState<Mark[] | null>(def?.marks?.length ? null : []);

  useEffect(() => {
    if (!def?.marks?.length) return;
    let cancelled = false;
    (async () => {
      const ok: Mark[] = [];
      for (const m of def.marks!) {
        if (await loads(m.slug)) {
          ok.push(m);
          if (def.mode !== "all") break;
        }
      }
      if (!cancelled) setShown(ok.slice(0, 2));
    })();
    return () => { cancelled = true; };
  }, [name]);

  if (shown === null) return <span aria-hidden="true" className="block w-5 h-5 rounded bg-black/5" />;

  if (shown.length) {
    const size = shown.length > 1 ? 18 : 26;
    return (
      <span className="flex items-center gap-1" aria-hidden="true">
        {shown.map((m) => (
          <span
            key={m.slug}
            style={{
              width: size,
              height: size,
              backgroundColor: m.color,
              WebkitMaskImage: `url(${url(m.slug)})`,
              maskImage: `url(${url(m.slug)})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        ))}
      </span>
    );
  }

  const Icon = (def?.icon && icons[def.icon]) || Box;
  return <Icon className="w-6 h-6" style={{ color: brandColor(name) }} strokeWidth={1.8} aria-hidden="true" />;
};

export default TechLogo;
