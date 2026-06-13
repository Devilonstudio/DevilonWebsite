import { Code, Globe, Smartphone, Palette, Database, Brain, Layers, LucideIcon } from "lucide-react";

import mobDevImg from "../assets/services_images/mob_dev.webp";
import webDevImg from "../assets/services_images/webDev.jpg";
import DengImg from "../assets/services_images/dengImg.webp";
import d3Img from "../assets/services_images/d3Img.jpg";
import AIImg from "../assets/services_images/aiimg.png";
import mvpImg from "../assets/services_images/mvpImg.jpg";
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  image: string; // Added image property
  useCases: string[];
  benefits: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    icon: Globe,
    title: "Product Engineering",
    shortDescription: "Scalable SaaS platforms, dashboards, and custom web applications.",
    image: webDevImg,
    description:
    "We design and develop modern web applications, SaaS platforms, and internal tools. From customer-facing products to operational dashboards, we focus on scalable architecture, performance, and maintainable code that supports long-term growth.",
      useCases: [
      "Custom SaaS Platform Development",
      "Dynamic E-commerce Ecosystems",
      "Corporate Portals and Admin Dashboards",
      "Progressive Web Apps (PWAs)",
      "Interactive Real-time Web Tools"
    ],
    benefits: [
      "Scalable architecture built for growth",
      "Maintainable and well-documented codebases",
      "Modern, responsive user experiences",
      "Seamless integration with third-party services"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "data-engineering-automation",
    icon: Database,
    title: "Business Automation Systems",
    shortDescription: "Workflow automation, ETL pipelines, and operational efficiency tools.",
    image: DengImg, 
    description:
    "We build systems that connect data, automate workflows, and eliminate repetitive operational tasks. From reporting pipelines to process automation, we help teams spend less time managing data and more time acting on it.",  
    useCases: [
      "Business process automation",
      "Workflow orchestration",
      "Data sync and integration systems",
      "Operational efficiency tools for SMEs",
      "Business performance dashboards",
      "Reporting and analytics",
      "Automated reporting workflows",
      "ETL and ELT data workflows",
      "Sales and operations reporting",
      "Data consolidation from multiple sources",
      "Data reconciliation ",

    ],
    benefits: [
        "Reduced manual operational workload",
        "Consistent and reliable reporting workflows",
        "Automated data movement across systems",
         "Improved operational visibility",
        "Centralized business intelligence",
        "Faster access to actionable insights",
        "Scalable automation infrastructure",
        "Rapid deployment and iteration"
    ],
    technologies: ["Python", "JavaScript", "Retool", "Google Sheets", "n8n", "SQL", "REST APIs","Microsoft Excel","Power BI","Emails"],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Product Engineering",
    shortDescription: "Cross-platform and native mobile applications for iOS and Android.",
    image: mobDevImg,
    description:
    "We develop mobile products for startups, businesses, and digital platforms. Whether you need a cross-platform application for rapid delivery or native experiences for platform-specific requirements, we build reliable and scalable mobile solutions.", 
    useCases: [
      "Cross-platform Apps (iOS & Android)",
      "Consumer-facing Mobile Products",
      "On-the-go Business Utility Apps",
      "Offline-first Mobile Solutions",
      "IoT and Hardware-integrated Apps"
    ],
    benefits: [
      "Cross-platform development for faster delivery",
      "Scalable mobile architecture",
      "Reliable offline and real-time capabilities",
      "App Store and Play Store deployment support"
    ],
    technologies: ["Flutter", "React Native", "Firebase", "Dart", "Swift", "Kotlin"],
  },
  {
    id: "3d-modeling-visualization",
    icon: Palette,
    title: "Interactive Product Experiences",
    shortDescription: "3D assets, visualizations, and immersive web experiences.",
    image: d3Img,
    description:
    "We create high-quality 3D assets, product visualizations, and interactive experiences for web, marketing, and product teams. These experiences help communicate complex products and create more engaging digital presentations.",  
    useCases: [
      "Photorealistic Product Rendering",
      "Explainer & Technical Animations",
      "3D Configurators for Web",
      "Hard-surface Industrial Modeling",
      "Digital Twin Visualizations"
    ],
    benefits: [
        "Interactive product demonstrations",
        "High-quality visual assets",
        "Reduced reliance on physical prototypes",
        "Flexible content for web and marketing use"
    ],
    technologies: ["Blender", "Three.js", "DaVinci Resolve", "Adobe Creative Suite"],
  },
  {
    id: "gen-ai-ml",
    icon: Brain,
    title: "AI & Intelligent Automation",
    shortDescription: "Custom AI agents, LLM integration, and predictive modeling.",
    image: AIImg,
    description:
    "We help organizations integrate practical AI capabilities into existing products and workflows. From AI assistants and knowledge retrieval systems to predictive analytics and automation, we focus on solutions that deliver measurable business value.",  
    useCases: [
      "Custom AI Chatbots & Customer Agents",
      "RAG Systems for Internal Knowledge Bases",
      "Predictive Analytics for Sales & Logistics",
      "Automated Content Generation Pipelines",
      "Computer Vision for Asset Recognition"
    ],
    benefits: [
      "AI-powered workflow automation",
      "Natural language interfaces for users and teams",
      "Improved access to organizational knowledge",
      "Data-driven insights and forecasting"
    ],
    technologies: ["PyTorch", "OpenAI / Anthropic APIs", "LangChain", "Vector Databases", "Scikit-learn"],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};