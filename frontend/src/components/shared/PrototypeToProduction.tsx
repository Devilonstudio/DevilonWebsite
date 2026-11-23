import { useState } from "react";

// Same app, two states. Drag to move from prototype (dashed, unfinished) to production (solid, verified).
const rows = [
  ["Sign in", "auth", "Enforced on the server"],
  ["Payments", "pay", "Webhooks verified"],
  ["Customer data", "db", "Backed up, access-scoped"],
  ["Deploy", "ci", "CI, staging, alerts"],
];

const App = ({ prod }: { prod: boolean }) => (
  <div className={`h-full p-5 sm:p-6 ${prod ? "bg-background text-foreground" : "bg-secondary text-foreground/55"}`}>
    <div className="flex items-center justify-between mb-5">
      <div className={`font-display font-extrabold text-lg ${prod ? "" : "opacity-70"}`}>{prod ? "YourApp" : "YourApp_final_v3"}</div>
      <span className={`font-mono-ui text-[10px] uppercase px-2 py-1 ${prod ? "bg-accent text-white" : "border border-dashed border-foreground/40"}`}>
        {prod ? "Production" : "Prototype"}
      </span>
    </div>
    <div className="space-y-2.5">
      {rows.map(([label, , good]) => (
        <div key={label} className={`flex items-center justify-between px-4 py-3.5 text-sm ${prod ? "border border-foreground/80" : "border border-dashed border-foreground/35"} rounded-xl`}>
          <span className={prod ? "font-semibold" : ""}>{label}</span>
          <span className={`font-mono-ui text-[11px] ${prod ? "text-accent font-bold" : ""}`}>
            {prod ? `✓ ${good}` : "TODO?"}
          </span>
        </div>
      ))}
    </div>
    <div className={`mt-4 font-mono-ui text-[10px] ${prod ? "text-muted-foreground" : ""}`}>
      {prod ? "last deploy: passing" : "// API_KEY hard-coded in client"}
    </div>
  </div>
);

const PrototypeToProduction = () => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative select-none shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
      <div className="relative h-[330px] overflow-hidden border border-foreground/80 bg-background">
        <div className="absolute inset-0"><App prod={false} /></div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}><App prod /></div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-accent pointer-events-none" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-accent text-white font-mono-ui text-[10px] px-1.5 py-2">⇆</span>
        </div>
        <input
          type="range" min={0} max={100} value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare prototype and production"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <p className="mt-3 font-mono-ui text-[11px] text-white/50 text-center">drag to compare / illustrative, not client data</p>
    </div>
  );
};

export default PrototypeToProduction;
