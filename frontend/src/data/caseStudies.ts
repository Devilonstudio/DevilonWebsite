import gamedev from "@/assets/Casestudy/gamedev.jpg";
import Automation from "@/assets/Casestudy/Automation.jpg";
import voiceAI from "@/assets/Casestudy/voiceAI.jpg";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-dashboard-platform",
    title: "SaaS Dashboard Platform",
    client: "SaaS Product Team",
    industry: "Software as a Service",
    shortDescription:
      "Representative SaaS platform featuring multi-tenant architecture, role-based access control, real-time analytics, and third-party integrations.",
    challenge:
      "Growing SaaS products often need secure user management, customer data isolation, analytics dashboards, and external integrations while maintaining scalability and performance.",
    solution:
      "We designed a full-stack SaaS architecture using React, Node.js, and PostgreSQL. The platform includes multi-tenant support, role-based permissions, secure authentication, analytics dashboards, and third-party integrations.",
    results: [
  "Multi-tenant architecture for customer data separation",
  "Role-based access control for secure user management",
  "Real-time analytics and reporting capabilities",
  "Third-party integration support",
  "Scalable foundation for future growth",
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
    image: gamedev,
  },
  {
    id: "internal-operations-system",
    title: "Internal Operations System",
    client: "Operations & Business Teams",
    industry: "Enterprise Software",
    shortDescription:
      "Representative internal operations platform designed to automate workflows, centralize reporting, and improve operational visibility.",
    challenge:
    "Many organizations rely on spreadsheets, disconnected systems, and manual processes that slow operations, increase errors, and reduce visibility into business performance.",
    solution:
"We designed an operations platform that centralizes data, automates repetitive workflows, synchronizes information across systems, and provides real-time reporting through role-based dashboards.",
    results: [
  "Automated repetitive operational workflows",
  "Centralized reporting and business visibility",
  "Reduced dependency on manual data entry",
  "Integrated data across multiple systems",
  "Faster access to operational insights",
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
    image: Automation,
  },
  {
    id: "mobile-product-platform",
    title: "Mobile Product Platform",
    client: "Mobile Product Startup",
    industry: "Mobile Applications",
    shortDescription:"Representative mobile product built with cross-platform technology, real-time synchronization, backend services, and offline-first functionality.",
    challenge:
    "Modern mobile products require seamless performance across iOS and Android, reliable backend services, real-time synchronization, and the ability to function in low-connectivity environments.",
    solution:
    "We designed a cross-platform mobile architecture with backend services, real-time synchronization, offline data persistence, and scalable APIs to support long-term product growth.",
    results: [
  "Cross-platform deployment for iOS and Android",
  "Real-time synchronization across devices",
  "Offline-first user experience",
  "Scalable backend infrastructure",
  "Foundation for future feature expansion",
      ],
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "PostgreSQL",
      "Real-time Sync",
      "Offline-First Architecture",
    ],
    image: voiceAI,
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
