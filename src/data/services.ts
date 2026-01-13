import { Code, BarChart, Smartphone, Palette, Settings, Layers, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  useCases: string[];
  benefits: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
     id: "custom-software-development",
    icon: Code,
    title: "Custom Software Development",
    shortDescription:
      "Practical, custom-built software solutions tailored to your business workflows and operational needs.",
    description:
      "We design and develop custom software solutions focused on solving real business problems. From internal tools to lightweight SaaS platforms, we work closely with clients to deliver reliable, maintainable software that improves efficiency and supports growth.",
    useCases: [
      "Internal business tools and admin panels",
      "Workflow and process automation systems",
      "Custom dashboards and reporting tools",
      "Lightweight SaaS and MVP platforms",
      "System utilities and performance-focused applications",
    ],
    benefits: [
      "Software aligned with your exact requirements",
      "Improved operational efficiency through automation",
      "Flexible and extendable architecture",
      "Cost-effective alternative to off-the-shelf tools",
      "Clear, maintainable codebase",
    ],
    technologies: ["JavaScript", "Python", "C++", "MERN Stack", "MySQL", "Docker"],
  },
  {
    id: "mvp-startup-development",
    icon: Layers,
    title: "MVP & Startup Product Development",
    shortDescription:
      "Rapid MVP development to validate ideas, attract users, and prepare for growth.",
    description:
      "We help startups turn ideas into functional MVPs quickly and efficiently. Our approach focuses on core features, rapid iteration, and real user feedback—allowing founders to validate concepts without overbuilding or overspending.",
    useCases: [
      "Startup MVPs and proof-of-concept products",
      "Early-stage SaaS platforms",
      "Founder-led product validation",
      "Internal prototypes for funding demos",
      "Feature experiments and iterations",
    ],
    benefits: [
      "Faster time-to-market",
      "Lower development risk and cost",
      "Clear technical roadmap for future scaling",
      "Focus on business-critical features",
      "Iterative improvements based on feedback",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Docker", "AWS"],
  },
  {
    id: "web-mobile-development",
    icon: Smartphone,
    title: "Web & Mobile App Development",
    shortDescription:
      "Responsive web apps and cross-platform mobile solutions built for real-world business use.",
    description:
      "We develop reliable web and mobile applications that prioritize usability, performance, and maintainability. From internal productivity apps to customer-facing platforms, our solutions are designed to work seamlessly across devices.",
    useCases: [
      "Business dashboards and portals",
      "Cross-platform mobile apps for SMEs",
      "Customer-facing web applications",
      "Internal productivity and utility apps",
      "Early-stage consumer applications",
    ],
    benefits: [
      "Consistent experience across devices",
      "Faster delivery with cross-platform frameworks",
      "Clean, maintainable codebase",
      "User-focused design and performance",
      "Scalable foundation for future features",
    ],
    technologies: ["React", "Flutter", "Native iOS", "JavaScript", "Firebase"],
  },
  {
    id: "automation-internal-tools",
    icon: Settings,
    title: "Automation & Internal Tools",
    shortDescription:
      "Automation-driven solutions to reduce manual work and improve operational efficiency.",
    description:
      "We build automation workflows and internal tools that help businesses streamline operations. Using low-code and custom scripting, we connect systems, automate repetitive tasks, and create dashboards that give teams better visibility and control.",
    useCases: [
      "Business process automation",
      "Workflow orchestration",
      "Data sync and integration systems",
      "Operational efficiency tools for SMEs",
    ],
    benefits: [
      "Reduced manual effort and errors",
      "Faster internal workflows",
      "Improved data visibility",
      "Lower operational costs",
      "Quick deployment and iteration",
    ],
    technologies: ["Python", "n8n", "Retool", "Google Sheets", "APIs", "ETL ELT pipelines", "Microsoft Excel"],
  },
  {
    id: "data-reporting-analytics",
    icon: BarChart,
    title: "Data Reporting & Analytics",
    shortDescription:
      "Clear, actionable insights through dashboards and lightweight analytics solutions.",
    description:
      "We help businesses make sense of their data by designing reporting systems and analytics dashboards. Our focus is on clarity, automation, and decision-ready insights rather than complex enterprise analytics.",
    useCases: [
      "Business performance dashboards",
      "Reporting and analytics",
      "Automated reporting workflows",
      "ETL and ELT data workflows",
      "Sales and operations reporting",
      "Data consolidation from multiple sources",
      "Data reconciliation ",
    ],
    benefits: [
      "Improved decision-making",
      "Automated and reliable reporting",
      "Better visibility into operations",
      "Reduced manual data handling",
      "Clear and understandable dashboards",
    ],
    technologies: ["Power BI", "Python", "SQL", "APIs", "Google Sheets", "Emails"],
  },
  {
    id: "product-visualization-media",
    icon: Palette,
    title: "Product Visualization & Digital Media",
    shortDescription:
      "High-quality 3D visuals and explainer media to showcase products and ideas effectively.",
    description:
      "We create 3D models, animations, and visual media that help businesses present products clearly and professionally. These visuals are ideal for marketing, product demos, e-commerce listings, and early-stage concept validation.",
    useCases: [
      "Product visualization for startups",
      "Explainer animations and demo videos",
      "E-commerce product visuals",
      "Concept demonstrations and prototypes",
      "Advertising and product animation",
      "Hard surface modeling and procedural textures",
    ],
    benefits: [
      "Clear communication of complex ideas",
      "Improved product presentation",
      "Stronger marketing impact",
      "Professional visual consistency",
      "Cost-effective alternative to physical prototypes",
    ],
    technologies: ["Blender", "DaVinci Resolve", "Adobe Suite", "3D Modeling", "Animation"],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
