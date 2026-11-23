export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface Finding {
  id: string;
  sev: Severity;
  area: string;
  finding: string;
  fix: string;
  effort: string;
}

// Illustrative findings. Not client data, and not from a real engagement.
export const sampleFindings: Finding[] = [
  { id: "F-01", sev: "Critical", area: "Access control", finding: "Row-level security is off on the orders table. Any signed-in user can read every order through the API.", fix: "Enable RLS with owner-only policies and add a test that proves user A cannot read user B's rows.", effort: "Small" },
  { id: "F-02", sev: "Critical", area: "Secrets", finding: "A third-party API key is bundled into the client code and visible in the browser.", fix: "Move the call to a server function, rotate the key, and add secret scanning to CI.", effort: "Small" },
  { id: "F-03", sev: "High", area: "Payments", finding: "Subscription status is set from the client after redirect, not from a verified webhook.", fix: "Handle the payment provider's webhook with signature verification and idempotency, and treat it as the source of truth.", effort: "Medium" },
  { id: "F-04", sev: "High", area: "Auth", finding: "No rate limit or lockout on login, and password-reset links never expire.", fix: "Add rate limiting, short-lived single-use reset tokens and basic alerting.", effort: "Medium" },
  { id: "F-05", sev: "Medium", area: "Data", finding: "No migrations or backups. The schema was edited by hand in production.", fix: "Version the schema with migrations, schedule backups and test a restore.", effort: "Medium" },
  { id: "F-06", sev: "Medium", area: "Deployment", finding: "One environment, no staging and no error monitoring.", fix: "Add a staging environment, deployment checks and error tracking.", effort: "Medium" },
  { id: "F-07", sev: "Low", area: "Maintainability", finding: "Pricing logic is duplicated in two components that can drift apart.", fix: "Centralise it in one module and cover it with tests.", effort: "Small" },
];

export const sevStyle: Record<Severity, string> = {
  Critical: "bg-foreground text-background",
  High: "bg-accent text-white",
  Medium: "border border-foreground text-foreground",
  Low: "border border-dashed border-foreground/50 text-foreground/70",
};
