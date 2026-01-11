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
    id: "finflow-banking-platform",
    title: "FinFlow - Digital Banking Platform",
    client: "FinFlow Inc.",
    industry: "Financial Services",
    shortDescription:
      "A comprehensive digital banking solution enabling seamless transactions, account management, and real-time analytics for over 500,000 users.",
    challenge:
      "FinFlow needed to modernize their legacy banking infrastructure to meet growing customer expectations for digital-first experiences. The existing system couldn't handle peak transaction volumes and lacked real-time analytics capabilities, leading to customer dissatisfaction and operational inefficiencies.",
    solution:
      "We designed and built a cloud-native banking platform with a microservices architecture, enabling independent scaling of critical components. The new system features real-time transaction processing, advanced fraud detection using machine learning, and a modern mobile-first interface that customers love.",
    results: [
      "500,000+ active users within first year of launch",
      "99.99% uptime achieved across all services",
      "3x faster transaction processing",
      "60% reduction in operational costs",
      "4.8/5 average app store rating",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Kubernetes"],
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
  {
    id: "healthhub-telemedicine",
    title: "HealthHub - Telemedicine Platform",
    client: "HealthHub Medical",
    industry: "Healthcare",
    shortDescription:
      "HIPAA-compliant telemedicine platform connecting patients with healthcare providers through video consultations and secure messaging.",
    challenge:
      "HealthHub needed a telemedicine solution that could handle the surge in virtual healthcare demand while maintaining strict HIPAA compliance. Their existing video conferencing tools weren't designed for healthcare, lacking integration with medical records and secure prescription capabilities.",
    solution:
      "We built a comprehensive telemedicine platform featuring end-to-end encrypted video consultations, integrated electronic health records (EHR), e-prescriptions, and a patient portal. The platform includes AI-assisted symptom checking and smart scheduling to optimize provider availability.",
    results: [
      "200,000+ virtual consultations conducted monthly",
      "40% reduction in patient wait times",
      "Full HIPAA and HITECH compliance achieved",
      "Integrated with 15+ major EHR systems",
      "92% patient satisfaction score",
    ],
    technologies: ["React Native", "Python", "MongoDB", "Azure", "WebRTC", "HL7 FHIR"],
    image: "bg-gradient-to-br from-primary/20 to-accent/10",
  },
  {
    id: "logitrack-supply-chain",
    title: "LogiTrack - Supply Chain SaaS",
    client: "LogiTrack Solutions",
    industry: "Logistics & Supply Chain",
    shortDescription:
      "End-to-end logistics management platform with real-time tracking, inventory optimization, and predictive analytics.",
    challenge:
      "LogiTrack's clients were struggling with fragmented supply chain visibility, leading to inventory inefficiencies and delayed shipments. They needed a unified platform that could provide real-time tracking across multiple carriers and predictive insights to prevent disruptions.",
    solution:
      "We developed a multi-tenant SaaS platform that aggregates data from multiple carriers and IoT devices to provide unified supply chain visibility. The platform uses machine learning for demand forecasting and route optimization, significantly reducing logistics costs for clients.",
    results: [
      "Real-time tracking for 1M+ shipments monthly",
      "25% reduction in logistics costs for clients",
      "Predictive accuracy of 94% for demand forecasting",
      "Integration with 50+ carrier APIs",
      "150+ enterprise clients onboarded",
    ],
    technologies: ["Next.js", "Java", "Kubernetes", "GCP", "Apache Kafka", "TensorFlow"],
    image: "bg-gradient-to-br from-accent/10 to-primary/30",
  },
  {
    id: "edulearn-lms",
    title: "EduLearn - Learning Management System",
    client: "EduLearn Technologies",
    industry: "Education Technology",
    shortDescription:
      "Modern learning management system with AI-powered personalization, interactive content, and comprehensive analytics for educational institutions.",
    challenge:
      "EduLearn wanted to create a next-generation LMS that could compete with established players by offering superior personalization and engagement features. Traditional LMS platforms were failing to keep students engaged, leading to poor completion rates and learning outcomes.",
    solution:
      "We built an AI-powered learning platform that adapts content difficulty and pacing based on individual student performance. The system includes gamification elements, peer collaboration tools, and detailed analytics dashboards for educators to track and improve outcomes.",
    results: [
      "85% course completion rate (up from 35%)",
      "500+ educational institutions as clients",
      "2M+ active student users",
      "45% improvement in learning outcomes",
      "SOC 2 Type II certified",
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "AWS", "OpenAI", "Elasticsearch"],
    image: "bg-gradient-to-br from-primary/15 to-accent/25",
  },
  {
    id: "retailpro-ecommerce",
    title: "RetailPro - E-Commerce Platform",
    client: "RetailPro Group",
    industry: "Retail & E-Commerce",
    shortDescription:
      "Headless commerce platform enabling omnichannel retail experiences with advanced personalization and inventory management.",
    challenge:
      "RetailPro's legacy e-commerce system couldn't keep up with modern consumer expectations for personalized, seamless shopping experiences across web, mobile, and in-store. They needed a flexible platform that could support rapid experimentation and new channel launches.",
    solution:
      "We implemented a headless commerce architecture that decouples the frontend from backend services, enabling rapid deployment of new shopping experiences. The platform features AI-powered product recommendations, unified inventory management, and a powerful promotion engine.",
    results: [
      "35% increase in online conversion rates",
      "Real-time inventory sync across 200+ stores",
      "50% faster page load times",
      "Unified customer profiles across all channels",
      "$50M+ in additional annual revenue",
    ],
    technologies: ["React", "Node.js", "GraphQL", "Redis", "Elasticsearch", "Stripe"],
    image: "bg-gradient-to-br from-accent/20 to-primary/15",
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
