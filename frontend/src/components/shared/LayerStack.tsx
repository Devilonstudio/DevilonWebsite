import { useEffect, useState } from "react";
import { LayoutDashboard, Server, Database, KeyRound, CreditCard, FlaskConical, Activity, LucideIcon } from "lucide-react";

// An isometric exploded view of a product, drawn as glass layers. AI tools are good at the top pane;
// the rest is what we build. SVG with a fixed aspect ratio, with HTML icons and labels over it.
const layers: { name: string; note: string; icon: LucideIcon }[] = [
  { name: "Interface", note: "Screens and flows. AI tools are good at this.", icon: LayoutDashboard },
  { name: "Backend & API", note: "Business logic, validation and error handling.", icon: Server },
  { name: "Database", note: "Schema, migrations and backups.", icon: Database },
  { name: "Auth & access", note: "Who can see and change what, enforced server-side.", icon: KeyRound },
  { name: "Payments & integrations", note: "Webhooks, retries and third-party APIs.", icon: CreditCard },
  { name: "Tests & CI", note: "Automated checks before every release.", icon: FlaskConical },
  { name: "Deploy & monitoring", note: "Environments, logs and alerts.", icon: Activity },
];

// Each pane has a resting colour and a second colour it slowly drifts toward: [h, s, l]
const hues: [[number, number, number], [number, number, number]][] = [
  [[210, 25, 88], [215, 90, 75]],
  [[217, 91, 60], [200, 95, 60]],
  [[190, 90, 55], [170, 75, 52]],
  [[262, 83, 66], [240, 85, 68]],
  [[160, 70, 50], [190, 85, 55]],
  [[322, 80, 66], [280, 75, 68]],
  [[36, 95, 58], [20, 90, 60]],
];
const hsl = (c: [number, number, number]) => `hsl(${c[0]},${c[1]}%,${c[2]}%)`;

const VW = 520, VH = 500;
const CX = 175, W = 110, H = 55, T = 12, P = 60, Y0 = 64;
const cy = (i: number) => Y0 + i * P;
const pct = (v: number, total: number) => `${(v / total) * 100}%`;

const LayerStack = () => {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a >= layers.length - 1 ? 1 : a + 1)), 2400);
    return () => clearInterval(t);
  }, [paused]);

  const select = (i: number) => { setActive(i); setPaused(true); };

  return (
    <div className="w-full max-w-[540px] mx-auto" onMouseLeave={() => setPaused(false)}>
      <div className="relative w-full" style={{ aspectRatio: `${VW} / ${VH}` }}>
        {/* soft ambient light behind the glass */}
        <div aria-hidden="true" className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_34%_48%,hsl(217_91%_55%/0.28),transparent_62%),radial-gradient(ellipse_at_60%_70%,hsl(262_83%_66%/0.18),transparent_60%)]" />

        <svg viewBox={`0 0 ${VW} ${VH}`} className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            {hues.map(([a, b], i) => (
              <g key={i}>
                <linearGradient id={`ga${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor={hsl(a)} stopOpacity="0.62" />
                  <stop offset="1" stopColor={hsl(a)} stopOpacity="0.14" />
                </linearGradient>
                <linearGradient id={`gb${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor={hsl(b)} stopOpacity="0.62" />
                  <stop offset="1" stopColor={hsl(b)} stopOpacity="0.14" />
                </linearGradient>
              </g>
            ))}
            <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.18" />
            </linearGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="14" /></filter>
          </defs>

          {/* leader lines */}
          {layers.map((_, i) => (
            <line key={i} x1={CX + W + 6} y1={cy(i)} x2={304} y2={cy(i)} stroke="white" strokeOpacity={active === i ? 0.85 : 0.18} strokeDasharray="3 4" />
          ))}

          {/* panes, lowest first so upper ones sit in front */}
          {[...layers.keys()].reverse().map((i) => {
            const on = active === i;
            const c = cy(i);
            const lift = on ? -12 : 0;
            const topPts = `${CX},${c - H} ${CX + W},${c} ${CX},${c + H} ${CX - W},${c}`;
            const leftPts = `${CX - W},${c} ${CX},${c + H} ${CX},${c + H + T} ${CX - W},${c + T}`;
            const rightPts = `${CX + W},${c} ${CX},${c + H} ${CX},${c + H + T} ${CX + W},${c + T}`;
            const [a] = hues[i];
            return (
              <g key={i} style={{ cursor: "pointer" }} onPointerEnter={() => select(i)} onClick={() => select(i)}>
              <g pointerEvents="none" style={{ transform: `translateY(${lift}px)`, transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" }}>
                {on && <polygon points={topPts} fill={hsl(a)} opacity="0.55" filter="url(#glow)" />}
                {/* sides */}
                <polygon points={leftPts} fill="hsl(222,13%,10%)" />
                <polygon points={leftPts} fill={hsl(a)} opacity={on ? 0.42 : 0.2} />
                <polygon points={rightPts} fill="hsl(222,13%,14%)" />
                <polygon points={rightPts} fill={hsl(a)} opacity={on ? 0.58 : 0.3} />
                <polyline points={`${CX - W},${c + T} ${CX},${c + H + T} ${CX + W},${c + T}`} fill="none" stroke="#fff" strokeOpacity="0.25" />
                {/* glass top: dark base, two drifting colour layers, sheen, bright edge */}
                <polygon points={topPts} fill="hsl(222,13%,15%)" />
                <polygon points={topPts} fill={`url(#ga${i})`} opacity={on ? 1 : 0.8} />
                <polygon points={topPts} fill={`url(#gb${i})`} className="glass-shift" style={{ animationDelay: `${i * 0.9}s` }} />
                <polygon points={`${CX},${c - H} ${CX - W},${c} ${CX - W * 0.15},${c + H * 0.12}`} fill="url(#sheen)" />
                <polygon points={topPts} fill="none" stroke="url(#edge)" strokeWidth={on ? 1.6 : 1.1} strokeLinejoin="round" />
                <polyline points={`${CX - W},${c} ${CX},${c - H} ${CX + W},${c}`} fill="none" stroke="#fff" strokeOpacity={on ? 0.9 : 0.55} strokeWidth="1.4" strokeLinejoin="round" />
              </g>
              {/* fixed hit area (does not lift), so hovering a pane never flickers */}
              <polygon points={`${CX - W},${c} ${CX},${c - H} ${CX + W},${c} ${CX + W},${c + T} ${CX},${c + H + T} ${CX - W},${c + T}`} fill="transparent" pointerEvents="all" />
              </g>
            );
          })}
        </svg>

        {/* bracket: what we build */}
        <div className="absolute border-l-2 border-blue-400/80 flex items-center" style={{ left: pct(14, VW), top: pct(cy(1) - 40, VH), height: pct(cy(6) - cy(1) + 70, VH) }}>
          <span className="text-[11px] font-medium text-blue-300 whitespace-nowrap pl-1.5" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.12em" }}>
            What Devilon builds
          </span>
        </div>

        {layers.map((l, i) => {
          const Icon = l.icon;
          const on = active === i;
          const lift = on ? -12 : 0;
          return (
            <div key={l.name}>
              <button
                type="button"
                aria-label={l.name}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg border backdrop-blur-sm transition-[background-color,border-color,color] duration-300 ${on ? "bg-white border-white text-accent shadow-[0_0_24px_rgba(255,255,255,0.45)]" : "bg-white/15 border-white/40 text-white"}`}
                style={{ left: pct(CX, VW), top: `calc(${pct(cy(i) + H - 24, VH)} + ${lift}px)` }}
              >
                <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
                className="absolute -translate-y-1/2 text-left leading-tight"
                style={{ left: pct(312, VW), right: 0, top: pct(cy(i), VH) }}
              >
                <span className={`font-semibold text-[13px] sm:text-[15px] transition-colors ${on ? "text-white" : i === 0 ? "text-white/45" : "text-white/70"}`}>{l.name}</span>
                {i === 0 && <span className="block text-[10px] text-white/40 mt-0.5">AI tools do this well</span>}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-3 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-3 min-h-[4.25rem]" aria-live="polite">
        <p className="font-semibold text-primary-foreground">{layers[active].name}</p>
        <p className="text-sm text-white/65">{layers[active].note}</p>
      </div>
    </div>
  );
};

export default LayerStack;
