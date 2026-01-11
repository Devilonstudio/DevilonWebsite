import { Code, Cloud, Smartphone, Palette, Brain, Layers, LucideIcon } from "lucide-react";

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
      "Tailored software solutions designed to address your unique business challenges and streamline operations.",
    description:
      "We build custom software solutions from the ground up, perfectly tailored to your business processes and goals. Our team works closely with you to understand your unique requirements and deliver software that drives efficiency, reduces costs, and creates competitive advantages.",
    useCases: [
      "Legacy system modernization and migration",
      "Enterprise resource planning (ERP) systems",
      "Business process automation",
      "Integration platforms connecting multiple systems",
      "Custom CRM and workflow management tools",
    ],
    benefits: [
      "Perfectly aligned with your business processes",
      "Scalable architecture that grows with your needs",
      "Full ownership and control over your software",
      "Reduced dependency on off-the-shelf limitations",
      "Long-term cost efficiency through automation",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "AWS"],
  },
  {
    id: "saas-product-development",
    icon: Layers,
    title: "SaaS Product Development",
    shortDescription:
      "End-to-end SaaS development from ideation to launch, built for scale with modern cloud architecture.",
    description:
      "Transform your product vision into a market-ready SaaS platform. We handle everything from initial concept validation through development, launch, and ongoing optimization. Our SaaS solutions are built for multi-tenancy, scalability, and recurring revenue success.",
    useCases: [
      "B2B software platforms and marketplaces",
      "Subscription-based service applications",
      "Multi-tenant enterprise solutions",
      "Vertical SaaS for specific industries",
      "API-first platforms and developer tools",
    ],
    benefits: [
      "Rapid time-to-market with MVP approach",
      "Built-in multi-tenancy and subscription management",
      "Optimized for recurring revenue models",
      "Scalable infrastructure from day one",
      "Continuous iteration based on user feedback",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "web-mobile-development",
    icon: Smartphone,
    title: "Web & Mobile App Development",
    shortDescription:
      "Cross-platform mobile apps and responsive web applications that deliver seamless user experiences.",
    description:
      "Create powerful, intuitive applications that work flawlessly across all devices and platforms. Whether you need a progressive web app, native mobile experience, or cross-platform solution, we deliver applications that users love and that drive business results.",
    useCases: [
      "Consumer-facing mobile applications",
      "Progressive web applications (PWAs)",
      "Cross-platform apps for iOS and Android",
      "E-commerce and marketplace applications",
      "Real-time communication and collaboration tools",
    ],
    benefits: [
      "Consistent experience across all platforms",
      "Faster development with cross-platform frameworks",
      "Native performance where it matters most",
      "Offline-first capabilities and PWA features",
      "App store optimization and launch support",
    ],
    technologies: ["React Native", "Flutter", "React", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    shortDescription:
      "Cloud migration, infrastructure automation, and DevOps practices to optimize your development lifecycle.",
    description:
      "Modernize your infrastructure and accelerate your development cycles with our cloud and DevOps expertise. We help you migrate to the cloud, implement CI/CD pipelines, containerize applications, and establish practices that improve reliability and deployment velocity.",
    useCases: [
      "Cloud migration and modernization projects",
      "CI/CD pipeline implementation",
      "Containerization and orchestration",
      "Infrastructure as Code (IaC) adoption",
      "Monitoring, logging, and observability setup",
    ],
    benefits: [
      "Reduced infrastructure costs and overhead",
      "Faster and more reliable deployments",
      "Improved system reliability and uptime",
      "Enhanced security posture and compliance",
      "Scalability on demand without over-provisioning",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
    description:
      "Great software starts with exceptional design. Our design team creates intuitive, beautiful interfaces that delight users and drive engagement. We follow a research-driven approach, combining user insights with industry best practices to deliver designs that convert.",
    useCases: [
      "Complete product design from concept to prototype",
      "Design system creation and implementation",
      "User research and usability testing",
      "Responsive web and mobile interface design",
      "Design refresh and modernization projects",
    ],
    benefits: [
      "Increased user engagement and satisfaction",
      "Reduced development costs through proper planning",
      "Consistent brand experience across touchpoints",
      "Data-driven design decisions",
      "Faster development with clear design specifications",
    ],
    technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research", "A/B Testing"],
  },
  {
    id: "ai-data-solutions",
    icon: Brain,
    title: "AI & Data Solutions",
    shortDescription:
      "Leverage artificial intelligence and data analytics to unlock insights and automate processes.",
    description:
      "Harness the power of artificial intelligence and advanced analytics to transform your business. From predictive models to intelligent automation, we help you extract value from your data and build AI-powered features that create competitive advantages.",
    useCases: [
      "Predictive analytics and forecasting",
      "Natural language processing and chatbots",
      "Computer vision and image recognition",
      "Recommendation systems and personalization",
      "Process automation with machine learning",
    ],
    benefits: [
      "Data-driven decision making at scale",
      "Automated insights from complex datasets",
      "Personalized user experiences that convert",
      "Reduced operational costs through automation",
      "Competitive advantage through AI innovation",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Databricks"],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
