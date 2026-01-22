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
    id: "data-engineering-automation",
    icon: Database,
    title: "Data Engineering & Automation",
    shortDescription: "Eliminating manual work through robust ETL pipelines and orchestration.",
    image: DengImg, 
    description:
      "As seen in our Case Studies, we build the 'central nervous system' for your business data. We automate the movement, transformation, and reconciliation of data across disparate systems to provide 100% operational accuracy.",
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
      "90% reduction in manual data tasks",
      "Elimination of human error in reporting",
      "Proactive error detection and logging",
      "Massive gains in operational efficiency",
      "Clear and understandable dashboards",
       "Improved data visibility",
      "Lower operational costs",
      "Quick deployment and iteration"
    ],
    technologies: ["Python", "JavaScript", "Retool", "Google Sheets", "n8n", "SQL", "REST APIs","Microsoft Excel","Power BI","Emails"],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Premium iOS and Android applications with a focus on native performance.",
    image: mobDevImg,
    description:
      "We create mobile experiences that users love. Whether it's a cross-platform solution for rapid deployment or a high-performance native app, we ensure your mobile presence is fluid, secure, and feature-rich.",
    useCases: [
      "Cross-platform Apps (iOS & Android)",
      "Consumer-facing Mobile Products",
      "On-the-go Business Utility Apps",
      "Offline-first Mobile Solutions",
      "IoT and Hardware-integrated Apps"
    ],
    benefits: [
      "Single codebase for faster time-to-market",
      "Native-level gestures and animations",
      "Optimized battery and resource usage",
      "App Store and Play Store launch support"
    ],
    technologies: ["Flutter", "React Native", "Firebase", "Dart", "Swift", "Kotlin"],
  },
  {
    id: "3d-modeling-visualization",
    icon: Palette,
    title: "3D Modeling & Visualization",
    shortDescription: "Photorealistic 3D assets and cinematic animations for products.",
    image: d3Img,
    description:
      "We bring physical concepts into the digital world with high-fidelity 3D modeling. Our visuals are perfect for startups needing prototypes, e-commerce brands wanting perfect renders, or tech firms explaining complex hardware.",
    useCases: [
      "Photorealistic Product Rendering",
      "Explainer & Technical Animations",
      "3D Configurators for Web",
      "Hard-surface Industrial Modeling",
      "Digital Twin Visualizations"
    ],
    benefits: [
      "Reduce cost of physical photography",
      "Visualize products before manufacturing",
      "High-impact marketing and pitch decks",
      "Infinite flexibility in lighting and staging"
    ],
    technologies: ["Blender", "Three.js", "DaVinci Resolve", "Adobe Creative Suite"],
  },
  {
    id: "gen-ai-ml",
    icon: Brain,
    title: "GenAI & Machine Learning",
    shortDescription: "Custom AI agents, LLM integration, and predictive data modeling.",
    image: AIImg,
    description:
      "We help you move beyond the hype and implement functional AI. From building custom RAG (Retrieval-Augmented Generation) systems that talk to your company data to training models for predictive maintenance, we build AI that works.",
    useCases: [
      "Custom AI Chatbots & Customer Agents",
      "RAG Systems for Internal Knowledge Bases",
      "Predictive Analytics for Sales & Logistics",
      "Automated Content Generation Pipelines",
      "Computer Vision for Asset Recognition"
    ],
    benefits: [
      "Personalized customer experiences at scale",
      "Data-driven forecasting and decision making",
      "Automation of complex cognitive tasks",
      "Unlock insights from unstructured data"
    ],
    technologies: ["PyTorch", "OpenAI / Anthropic APIs", "LangChain", "Vector Databases", "Scikit-learn"],
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription: "Scalable, high-performance web applications and enterprise-grade platforms.",
    image: webDevImg,
    description:
      "We build more than just websites. We develop complex web applications focused on performance, SEO, and seamless user experiences. From custom dashboards to full-scale SaaS platforms, our web solutions are built to grow with your business.",
    useCases: [
      "Custom SaaS Platform Development",
      "Dynamic E-commerce Ecosystems",
      "Corporate Portals and Admin Dashboards",
      "Progressive Web Apps (PWAs)",
      "Interactive Real-time Web Tools"
    ],
    benefits: [
      "Highly responsive and SEO-optimized",
      "Secure and scalable cloud architecture",
      "Lightning-fast load times and performance",
      "Seamless third-party API integrations"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "mvp-startup-accelerator",
    icon: Layers,
    title: "MVP & Startup Development",
    shortDescription: "Turning vision into reality with rapid, investor-ready product launches.",
    image: mvpImg,
    description:
      "We specialize in helping founders launch quickly. We focus on the core value proposition of your product, building a scalable foundation that allows for rapid iteration based on real user feedback.",
    useCases: [
      "Rapid Prototype Development (4-8 weeks)",
      "Investor-ready MVPs",
      "Proof-of-Concept for new features",
      "Scalable Tech Stack Consulting"
    ],
    benefits: [
      "Fastest path to market validation",
      "Reduced initial development overhead",
      "Scalable architecture from Day 1",
      "Strategic technical partnership"
    ],
    technologies: ["MERN/T3 Stack", "AWS", "Docker", "Vercel", "Tailwind CSS"],
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};