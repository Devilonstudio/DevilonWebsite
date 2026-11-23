// Pure-CSS interface sketches. No stock imagery, no invented numbers.
type Variant = "saas" | "ops" | "mobile";

const Bar = ({ w, dark = false }: { w: string; dark?: boolean }) => (
  <div className={`h-2 ${dark ? "bg-foreground/80" : "bg-foreground/15"}`} style={{ width: w }} />
);

const ProjectVisual = ({ variant, className = "" }: { variant: Variant; className?: string }) => {
  if (variant === "saas") {
    return (
      <div className={`bg-accent p-5 sm:p-8 flex items-center justify-center ${className}`}>
        <div className="w-full max-w-md bg-background shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-foreground/20">
            <i className="w-2 h-2 rounded-full bg-foreground/25" /><i className="w-2 h-2 rounded-full bg-foreground/25" /><i className="w-2 h-2 rounded-full bg-foreground/25" />
            <span className="ml-3 font-mono-ui text-[10px] text-foreground/50">app / dashboard</span>
          </div>
          <div className="grid grid-cols-[72px_1fr]">
            <div className="border-r border-foreground/15 p-3 space-y-3 bg-secondary">
              <div className="h-5 w-5 bg-foreground" />
              <Bar w="100%" dark /><Bar w="70%" /><Bar w="85%" /><Bar w="60%" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-2">
                {["Users", "Plans", "Usage"].map((l) => (
                  <div key={l} className="flex-1 border border-foreground/20 p-2">
                    <div className="font-mono-ui text-[9px] uppercase text-foreground/50">{l}</div>
                    <div className="h-3 w-8 bg-accent mt-2" />
                  </div>
                ))}
              </div>
              <div className="flex items-end gap-1.5 h-16 border-b border-foreground/20">
                {[35, 55, 40, 70, 50, 85, 65, 95].map((h, i) => (
                  <div key={i} className={i > 5 ? "bg-accent flex-1" : "bg-foreground/80 flex-1"} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="flex items-center justify-between font-mono-ui text-[10px]">
                <span className="text-foreground/50">role: admin</span>
                <span className="bg-foreground text-background px-1.5 py-0.5">tenant isolated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    const Node = ({ label, hot = false }: { label: string; hot?: boolean }) => (
      <div className={`px-3 py-2 font-mono-ui text-[11px] border ${hot ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-foreground"}`}>
        {label}
      </div>
    );
    return (
      <div className={`bg-surface-dark p-5 sm:p-8 flex items-center justify-center ${className}`}>
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-2"><Node label="Sheets" /><Node label="CRM" /><Node label="Email" /></div>
            <div className="flex-1 h-px border-t-2 border-dashed border-white/40" />
            <Node label="Workflow" hot />
            <div className="flex-1 h-px border-t-2 border-dashed border-accent" />
            <div className="space-y-2"><Node label="Dashboard" /><Node label="Alerts" /></div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {["extract", "transform", "notify"].map((s) => (
              <div key={s} className="border border-white/25 p-2 font-mono-ui text-[10px] uppercase text-white/60">{s}<div className="h-1 mt-2 bg-accent" /></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-secondary p-5 sm:p-8 flex items-center justify-center ${className}`}>
      <div className="flex items-end gap-4">
        <div className="w-28 h-52 bg-foreground p-1.5 shadow-[0_24px_60px_-28px_rgba(20,28,45,0.38)] rounded-2xl overflow-hidden">
          <div className="h-full bg-background p-2 space-y-2">
            <div className="h-3 w-10 bg-foreground" />
            <div className="h-14 bg-accent" />
            <Bar w="100%" /><Bar w="75%" /><Bar w="90%" />
            <div className="h-5 bg-foreground mt-2" />
          </div>
        </div>
        <div className="w-24 h-44 bg-foreground p-1.5 opacity-60">
          <div className="h-full bg-background p-2 space-y-2">
            <div className="h-10 bg-foreground/15" /><Bar w="100%" /><Bar w="60%" /><Bar w="80%" />
          </div>
        </div>
        <div className="hidden sm:block font-mono-ui text-[10px] text-foreground/60 space-y-1 pb-1">
          <div>● synced</div><div>○ offline queue</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
