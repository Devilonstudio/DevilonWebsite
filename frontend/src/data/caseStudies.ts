
export interface CaseStudy {
  id: string;
  title: string;
  client: string; // label shown as the project type; these are internal demos
  industry: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  demonstrates: string[];
  technologies: string[];
  visual: "saas" | "ops" | "mobile";
  service: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-dashboard-platform",
    title: "AI-Built SaaS, Production-Hardened",
    client: "Internal Demo",
    industry: "Software as a Service",
    shortDescription:
      "A prototype-style SaaS app taken through the full treatment: real authentication, role-based access, a Postgres backend, validated APIs and a repeatable deployment.",
    challenge:
      "Growing SaaS products often need secure user management, customer data isolation, analytics dashboards, and external integrations while maintaining scalability and performance.",
    solution:
      "We built a full-stack SaaS architecture using React, Node.js, and PostgreSQL. The platform includes multi-tenant support, role-based permissions, secure authentication, analytics dashboards, and third-party integrations.",
    demonstrates: [
  "Multi-tenant architecture for customer data separation",
  "Role-based access control for secure user management",
  "Analytics and reporting views",
  "Third-party integration support",
  "Deployment-ready foundation",
],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "JWT Authentication",
      "REST APIs",
      "AWS",
      "Docker",
    ],
    visual: "saas",
    service: "AI → Production",
  },
  {
    id: "internal-operations-system",
    title: "Operations Automation Hub",
    client: "Internal Demo",
    industry: "Enterprise Software",
    shortDescription:
      "An internally built demonstration: data from several sources flows through automated workflows into a dashboard with notifications.",
    challenge:
    "Many organizations rely on spreadsheets, disconnected systems, and manual processes that slow operations, increase errors, and reduce visibility into business performance.",
    solution:
"We built an operations platform that centralizes data, automates repetitive workflows, synchronizes information across systems, and provides real-time reporting through role-based dashboards.",
    demonstrates: [
  "Automated repetitive operational workflows",
  "Centralized reporting and business visibility",
  "Less manual data entry by design",
  "Integrated data across multiple systems",
  "Dashboards fed by automated pipelines",
],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Workflow Engines",
      "Real-time Dashboards",
      "ETL Pipelines",
    ],
    visual: "ops",
    service: "Automation & internal tools",
  },
  {
    id: "mobile-product-platform",
    title: "Cross-Platform Mobile Product",
    client: "Internal Demo",
    industry: "Mobile Applications",
    shortDescription:"An internally built demonstration: a cross-platform mobile app with a backend, real-time sync and offline support.",
    challenge:
    "Modern mobile products require seamless performance across iOS and Android, reliable backend services, real-time synchronization, and the ability to function in low-connectivity environments.",
    solution:
    "We built a cross-platform mobile architecture with backend services, real-time synchronization, offline data persistence, and scalable APIs to support long-term product growth.",
    demonstrates: [
  "Cross-platform deployment for iOS and Android",
  "Real-time synchronization across devices",
  "Offline-first user experience",
  "Backend services and APIs",
  "Structured for further feature work",
      ],
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "PostgreSQL",
      "Real-time Sync",
      "Offline-First Architecture",
    ],
    visual: "mobile",
    service: "Mobile apps",
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};

export interface CaseStudyExtras {
  startingPoint: string;
  layers: [string, string][];
}

const extras: Record<string, CaseStudyExtras> = {
  "saas-dashboard-platform": {
    startingPoint: "A prototype-style app: screens that work, a backend that isn't there yet.",
    layers: [
      ["Interface", "React front end with role-aware views"],
      ["API", "Node.js REST endpoints with input validation"],
      ["Data", "PostgreSQL with tenant-scoped access"],
      ["Auth", "JWT sessions and role-based permissions"],
      ["Delivery", "Docker images and an AWS deployment"],
    ],
  },
  "internal-operations-system": {
    startingPoint: "Data scattered across spreadsheets and tools, moved around by hand.",
    layers: [
      ["Sources", "Several systems and files feeding in"],
      ["Pipelines", "Python ETL that extracts, cleans and syncs the data"],
      ["Workflows", "Automated steps with retries and notifications"],
      ["Data", "PostgreSQL as the single source of truth"],
      ["Dashboards", "React views, scoped by role"],
    ],
  },
  "mobile-product-platform": {
    startingPoint: "An app that has to work on both platforms, and without a signal.",
    layers: [
      ["App", "React Native for iOS and Android"],
      ["Local", "Offline-first storage with a sync queue"],
      ["Sync", "Real-time updates through Firebase"],
      ["API", "Node.js services behind the app"],
      ["Data", "PostgreSQL behind the API"],
    ],
  },
};

export const getCaseStudyExtras = (id: string): CaseStudyExtras | undefined => extras[id];
