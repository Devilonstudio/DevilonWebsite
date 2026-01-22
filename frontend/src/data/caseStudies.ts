import gamedev from "../assets/CaseStudy/gamedev.jpg";
import Automation from "../assets/Casestudy/Automation.jpg";
import voiceAI from "../assets/Casestudy/voiceAI.jpg";

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
  id: "streetfighter-p4-ai-architecture",
  title: "Project StreetFighter P4 – Competitive 2D Fighting Game",
  client: "Independent Game Development Project",
  industry: "Game Development / Interactive Entertainment",
  shortDescription:
    "A custom-built 2D fighting game inspired by Street Fighter, featuring intelligent AI powered by Behavior Trees and a robust Finite State Machine to ensure competitive fairness, scalability, and clean architecture.",
  challenge:
    "Developing a reactive and believable AI opponent in a fighting game posed major challenges. Early approaches using hardcoded logic led to predictable AI behavior, conflicting character states, animation glitches, poor scalability when adding new fighters, and massive code duplication across player and AI controllers.",
  solution:
    "The project was engineered using a decoupled, node-based architecture combining a custom Behavior Tree system for AI decision-making with a Finite State Machine for combat physics and character control. Modular AI nodes enabled dynamic, context-aware decisions, while strict state enforcement ensured frame-accurate combat and prevented invalid character states. A global character manager allowed dynamic instantiation of fighters, making the system highly scalable.",
  results: [
    "Intelligent AI behavior that dynamically reacts to player actions without unfair input reading",
    "90% reduction in spaghetti code by replacing nested if-else logic with Behavior Trees",
    "Seamless scalability allowing new fighters to be added with minimal effort",
    "Elimination of animation and physics conflicts through strict FSM enforcement",
    "Consistent, frame-independent gameplay across different hardware configurations",
  ],
  technologies: [
    "Godot Engine",
    "GDScript",
    "Behavior Trees",
    "Finite State Machines",
    "2D Physics Systems",
    "Signal-Based UI Architecture",
  ],
  image: gamedev,
},
 {
  id: "data-orchestration-automation-ecosystem",
  title: "Data Orchestration & Automation Ecosystem",
  client: "Internal Operations Automation Project",
  industry: "Data Engineering / Business Automation",
  shortDescription:
    "A unified data orchestration and automation ecosystem designed to eliminate data silos, automate ETL workflows, and provide real-time observability across inventory, sales, HR, and logistics operations.",
  challenge:
    "The organization relied on fragmented data sources and manual processes across critical business functions. Inventory and pricing updates were split between SQL databases and Google Sheets, customer and HR insights required manual spreadsheet work, logistics tracking involved multiple platforms, and there was no centralized visibility into data transfer health—resulting in inefficiencies, errors, and delayed decision-making.",
  solution:
    "A microservices-inspired automation architecture was designed using asynchronous ETL pipelines coordinated by a centralized orchestration and observability layer. Each pipeline was responsible for a specific domain—inventory, customer analytics, HR payroll, or logistics—while a Cron-based orchestrator managed execution, dependencies, error handling, and system-wide monitoring via a real-time dashboard.",
  results: [
    "90% reduction in manual data entry and reconciliation efforts",
    "Significant improvement in data accuracy across inventory, pricing, and payroll",
    "Real-time access to business intelligence for sales, HR, and operations teams",
    "Proactive monitoring and faster issue resolution through centralized observability",
    "Scalable foundation for future data-driven automation initiatives",
  ],
  technologies: [
    "Python",
    "JavaScript (Node.js)",
    "SQL Databases",
    "Google Sheets API",
    "Gmail API",
    "Slack Webhooks",
    "Google Drive API",
    "Shopify Admin API",
    "Cron Scheduling",
    "Retool Dashboards",
  ],
  image: Automation,
},
  {
  id: "voice-ai-backend-platform",
  title: "Voice AI Automation ",
  client: "AI Product Development Project",
  industry: "Artificial Intelligence / Backend Systems",
  shortDescription:
    "A scalable, production-ready backend platform for conversational and voice-based AI applications, supporting real-time chat, speech-to-text processing, and multi-turn contextual conversations using modern API-driven architecture.",
  challenge:
    "Building a reliable Voice AI system required more than just connecting an LLM API. The backend needed to support low-latency chat responses, secure API access, audio file validation, multi-turn conversational context, and clean extensibility for future enterprise-scale features—all while remaining performant, testable, and maintainable.",
  solution:
    "A modular backend architecture was designed using FastAPI and Python, following industry-standard patterns such as dependency injection, repository abstraction, and factory-based client initialization. The system integrates large language models and speech-to-text services through the Groq API, enabling both text-based and audio-driven conversations. Strong data validation, structured error handling, and async request processing ensure reliability and scalability from prototype to production.",
  results: [
    "Fully functional conversational AI backend with text and voice input support",
    "Low-latency, async API handling for chat and speech processing",
    "Robust input validation and error handling suitable for production environments",
    "Clear architectural separation enabling rapid feature expansion",
    "Strong foundation for enterprise scalability with a defined roadmap",
  ],
  technologies: [
    "FastAPI",
    "Python 3.11",
    "Uvicorn (ASGI)",
    "Groq API (LLMs & Whisper)",
    "Pydantic",
    "Python-dotenv",
    "Pytest",
    "HTTPX",
    "Requests",
  ],
  image: voiceAI,
},  
  
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
