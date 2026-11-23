import { Database, ShieldCheck, Handshake, Rocket, Smartphone, Workflow, Brain, Box, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  audience: string;
  shortDescription: string;
  description: string;
  useCases: string[];
  benefits: string[];
  technologies: string[];
  primary?: boolean;
}

export const services: Service[] = [
  {
    id: "ai-to-production",
    icon: ShieldCheck,
    title: "App Audit & Hardening",
    primary: true,
    audience: "Built it with Lovable, Cursor, Replit or Bolt?",
    shortDescription:
      "We audit AI-built apps, give you an honest fix-or-rebuild call, then harden and ship them.",
    description:
      "AI tools get you a convincing demo fast. Real users, real data and real money need more: a backend that holds up, access control that actually works, payments, integrations, tests and a deployment you can trust. We start with an audit, give you a straight fix-or-rebuild recommendation, and then do the work.",
    useCases: [
      "Codebase and security audit",
      "Backend, API and database design",
      "Authentication, roles and access control",
      "Payments, email and third-party integrations",
      "Testing, CI/CD and deployment",
      "Monitoring, documentation and handover",
    ],
    benefits: [
      "A plain-English picture of what is solid and what is risky",
      "An honest call on fixing versus rebuilding",
      "Production-grade foundations under your existing UI",
      "A codebase your next developer can work in",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "product-engineering",
    icon: Rocket,
    title: "Product Builds & MVPs",
    audience: "New products, built properly",
    shortDescription:
      "SaaS products, platforms and dashboards, built AI-accelerated and engineer-owned from day one.",
    description:
      "We build new products with AI tooling doing the heavy typing and engineers doing the thinking: architecture, data model, security and review. You get a first version quickly, without a codebase nobody understands.",
    useCases: [
      "SaaS MVPs and v1 launches",
      "Multi-tenant platforms with roles and permissions",
      "Admin panels and analytics dashboards",
      "Stripe payments and subscriptions",
      "Rescuing and extending an existing codebase",
    ],
    benefits: [
      "A working first version fast, without painting yourself into a corner",
      "Code you or your next hire can actually maintain",
      "Deployment, environments and documentation included",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    audience: "iOS & Android",
    shortDescription:
      "Cross-platform mobile apps with real backends, push notifications and store release support.",
    description:
      "One codebase for iOS and Android where that makes sense, native where it doesn't. We handle the app, the API behind it and the store submission process.",
    useCases: [
      "Consumer and member apps",
      "Field and utility apps for teams",
      "Offline-first apps",
      "Companion apps for existing web products",
    ],
    benefits: [
      "App and backend built together",
      "App Store and Play Store release support",
      "Real-time sync and offline support when you need it",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "automation-internal-tools",
    icon: Workflow,
    title: "Operations Automation",
    primary: true,
    audience: "Operations & data",
    shortDescription:
      "Connect the tools you already use, kill the copy-paste, and put your data on one dashboard.",
    description:
      "If your team moves data between spreadsheets, inboxes and apps by hand, we replace that with workflows that run on their own, plus the dashboards and internal tools to see what's happening.",
    useCases: [
      "Workflow automation with n8n and custom code",
      "Syncing CRMs, spreadsheets, payments and email",
      "Reporting dashboards and data pipelines",
      "Internal admin tools and approval flows",
    ],
    benefits: [
      "Fewer manual steps and fewer mistakes",
      "One place to see how the business is running",
      "Tools shaped around your process, not the reverse",
    ],
    technologies: ["n8n", "Python", "Retool", "SQL", "REST APIs", "Power BI"],
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering & Analytics",
    primary: true,
    audience: "Pipelines, databases and dashboards",
    shortDescription:
      "Get your data out of spreadsheets and silos: collected, cleaned, connected and on a dashboard people trust.",
    description:
      "We build the pipelines that collect, clean and connect your data, and the reports and dashboards on top. From scraping and API feeds to ETL into a database you control, so decisions stop depending on someone's spreadsheet.",
    useCases: [
      "ETL and ELT pipelines between your systems",
      "Web scraping and API data collection",
      "Databases and light data warehouses",
      "Dashboards and BI reporting",
      "Data quality checks and monitoring",
      "Scheduled reports and alerts",
    ],
    benefits: [
      "One trusted source of truth",
      "Reports that refresh themselves",
      "Data you own, in a database you control",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "n8n", "Power BI", "Web scraping"],
  },
  {
    id: "ai-integration",
    icon: Brain,
    title: "AI Integration",
    audience: "Practical AI",
    shortDescription:
      "Put AI to work inside your product or workflow: assistants, document processing, search over your own data.",
    description:
      "We add AI where it earns its place: answering questions from your own documents, extracting data from files, classifying requests, and drafting content, with a human in the loop where it matters.",
    useCases: [
      "Chat assistants and support agents",
      "Knowledge search over your own documents",
      "Document and data extraction",
      "AI steps inside automated workflows",
    ],
    benefits: [
      "Connected to your real systems, not a standalone demo",
      "Human handoff and guardrails built in",
      "Provider-flexible, so you aren't locked in",
    ],
    technologies: ["OpenAI APIs", "Anthropic APIs", "LangChain", "Vector Databases", "Python"],
  },
  {
    id: "white-label-delivery",
    icon: Handshake,
    title: "Agency Delivery",
    audience: "White-label, for agencies & studios",
    shortDescription:
      "Clients want software with someone accountable behind it. We own the technical side, under your brand.",
    description:
      "Your team can prototype with AI now. Clients still want security, integrations, uptime and someone to call when it breaks. We act as your engineering team behind the brand: your channels, your timeline, your name on the work.",
    useCases: [
      "Client portals and customer dashboards",
      "Custom web apps behind a brand or campaign",
      "Integrations and APIs for a client's existing tools",
      "Design-to-code builds for UX and product studios",
      "Ongoing maintenance retainers for shipped work",
    ],
    benefits: [
      "You keep the client, the invoice and the credit",
      "NDA before we see any client material",
      "Scoped, milestone-based quotes so you can protect your margin",
      "Clean, documented handover",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "interactive-3d",
    icon: Box,
    title: "3D & Interactive Experiences",
    audience: "Specialist",
    shortDescription:
      "Product visualization, 3D on the web and configurators for products that are easier to show than describe.",
    description:
      "From renders to interactive 3D that runs in the browser. Useful for product pages, launches and configurators where a flat image doesn't do the job.",
    useCases: [
      "Product visualization and rendering",
      "Interactive 3D on the web",
      "Product configurators",
      "Explainer animations",
    ],
    benefits: [
      "Show a product before it's manufactured",
      "Assets reusable across web and marketing",
    ],
    technologies: ["Blender", "Three.js", "DaVinci Resolve"],
  },
];

export const getServiceById = (id: string): Service | undefined =>
  services.find((service) => service.id === id);

export interface ServiceExtras {
  startsWith: string;
  shape: string;
  youGet: string;
  goodFit: string[];
  notFit: string[];
  steps: [string, string][];
}

const extras: Record<string, ServiceExtras> = {
  "data-engineering": {
    startsWith: "A look at where your data lives today",
    shape: "Fixed-scope pipeline or dashboard project, or ongoing",
    youGet: "Clean, connected data and dashboards your team trusts",
    goodFit: ["Decisions rely on spreadsheets someone builds by hand", "Your data lives in several tools that don't talk to each other", "You need data from websites or APIs collected reliably"],
    notFit: ["You need real-time, large-scale data infrastructure", "You only need a one-off chart. A spreadsheet will do"],
    steps: [["Map", "Where the data is, who uses it, and the questions you need answered."], ["Design", "Sources, storage and the metrics that matter."], ["Build", "Pipelines, database and dashboards, with data-quality checks."], ["Run", "Scheduling, alerts and documentation."]],
  },
  "ai-to-production": {
    startsWith: "A written audit",
    shape: "Audit, then fixed-scope hardening",
    youGet: "A product you can put real users on",
    goodFit: ["You built a working app with an AI tool and real users are close", "You've been asked about security, uptime or data and aren't sure of the answer", "Each new feature seems to break something else"],
    notFit: ["You're still validating the idea. Keep prototyping, it's cheaper", "You want a cosmetic redesign only"],
    steps: [["Audit", "We read the code and report what's solid and what's risky."], ["Recommend", "Fix, partially rebuild or leave alone, with reasons."], ["Harden", "Backend, auth, data, payments, tests and deployment."], ["Hand over", "Docs, monitoring and a walkthrough for your team."]],
  },
  "product-engineering": {
    startsWith: "A scoping call and written brief",
    shape: "Milestone-based build",
    youGet: "A working product and a codebase you own",
    goodFit: ["You have a clear problem and need a first version built properly", "You want AI-accelerated speed with an engineer accountable for the result", "You expect the product to grow past v1"],
    notFit: ["You need a throwaway demo for a pitch next week", "You want to manage individual developers yourself"],
    steps: [["Scope", "Problem, users and the smallest version worth shipping."], ["Architect", "Data model, stack and the decisions that are hard to undo."], ["Build", "Short cycles with a working build you can click through."], ["Launch", "Deployment, monitoring and a plan for what comes next."]],
  },
  "mobile-apps": {
    startsWith: "A scoping call and a feature list",
    shape: "Milestone-based build",
    youGet: "An app in the stores, with its backend",
    goodFit: ["You need iOS and Android from one team", "Your app needs a real backend, accounts or offline use", "You want help through App Store and Play Store review"],
    notFit: ["You only need a mobile-friendly website", "You need a game engine project"],
    steps: [["Scope", "Screens, flows and what must work offline."], ["Design to build", "Cross-platform app and API built together."], ["Test", "Real devices, edge cases and store requirements."], ["Release", "Store submission, monitoring and handover."]],
  },
  "automation-internal-tools": {
    startsWith: "A walkthrough of how work moves today",
    shape: "Small fixed-scope projects, or ongoing",
    youGet: "Workflows that run on their own, and a place to watch them",
    goodFit: ["Your team copies data between tools every day", "Reporting means someone building a spreadsheet by hand", "You have a process that lives in people's heads and inboxes"],
    notFit: ["The process itself is still undefined", "You need one tool with no integrations. Off-the-shelf may do"],
    steps: [["Map", "We follow the work and find the repetitive middle."], ["Design", "What to automate, what to leave human, and where it's visible."], ["Build", "Workflows, integrations and the dashboard on top."], ["Run", "Alerts, error handling and documentation."]],
  },
  "ai-integration": {
    startsWith: "A look at your data and the task",
    shape: "Prototype, then production build",
    youGet: "AI features wired into your real systems",
    goodFit: ["You have documents or data an assistant could actually use", "A repetitive judgement task is eating your team's time", "You want AI inside your product, with guardrails"],
    notFit: ["You want AI added for its own sake", "The underlying data doesn't exist or is unusable yet"],
    steps: [["Frame", "Is AI the right tool here? We'll say if it isn't."], ["Prototype", "A quick version against your real data."], ["Harden", "Evaluation, guardrails, fallbacks and human handoff."], ["Integrate", "Connect it to your product and monitor it."]],
  },
  "white-label-delivery": {
    startsWith: "NDA, then the client brief",
    shape: "Per-project, or a standing partnership",
    youGet: "Finished work you can present as your own",
    goodFit: ["Clients keep asking for software you don't want to staff for", "You need a partner who works in your channels and under your name", "You want predictable scope so you can price your own margin"],
    notFit: ["You want to resell hours with no accountability", "You need an in-house hire, not a partner"],
    steps: [["Brief", "Under NDA, you share the client's needs."], ["Scope", "Plan and fixed quote you can mark up."], ["Build", "Updates to you, in your tools, under your brand."], ["Deliver", "Handover you present, and optional maintenance."]],
  },
  "interactive-3d": {
    startsWith: "The product and where it will be shown",
    shape: "Project-based",
    youGet: "3D assets and interactive experiences, ready for the web",
    goodFit: ["The product is easier to show than describe", "You want a configurator or interactive product page", "You need renders before something is manufactured"],
    notFit: ["You need feature-film animation", "You only need a few static product photos"],
    steps: [["Brief", "References, dimensions and where it will live."], ["Model", "3D assets built in Blender."], ["Interact", "Web experience or configurator on top."], ["Optimise", "Performance tuning so it loads fast on real devices."]],
  },
};

export const getServiceExtras = (id: string): ServiceExtras | undefined => extras[id];
