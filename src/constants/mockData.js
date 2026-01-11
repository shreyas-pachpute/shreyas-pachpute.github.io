import { FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiPytorch, SiNvidia, SiTerraform } from 'react-icons/si';
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineRobot, AiOutlineCloud, AiOutlineApi } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";

export const homeContent = {
  hero: {
    tag: "AI Architect",
    name: "Shreyas Pachpute",
    title: "SHREYAS PACHPUTE",
    subtitle: "Designing & building reliable, scalable end-to-end AI systems.",
    microcopy: "Available for senior roles, freelance engagements, and architecture reviews.", 
    stats: [
      { value: 150, suffix: "+", label: "Tokens/sec (vLLM)" },
      { value: 15, suffix: "k", label: "Infra Savings", isCurrency: true },
      { value: 70, suffix: "%", label: "Ticket Deflection" },
    ],
    ctaButtons: {
      primary: { text: "View my work", link: "/work" },
      secondary: { text: "Download Resume", link: "/documents/Shreyas_Pachpute_Resume.pdf" },
      tertiary: { text: "Contact Me", link: "/contact" },
    },
    professionalPhotoUrl: "/images/professional-photo.png",
    techIcons: [
      { icon: FaPython, name: "Python" },
      { icon: SiDotnet, name: ".NET Core" },
      { icon: FaAws, name: "AWS" },
      { icon: SiTerraform, name: "Terraform" },
      { icon: SiNvidia, name: "CUDA" },
    ],
  },

  valueProposition: {
    eyebrow: "MY ARCHITECTURAL PHILOSOPHY",
    heading: "Bridging enterprise reliability with GenAI innovation",
    description: "I don’t just run notebooks — I design resilient, cost-optimized, and observable AI systems that integrate with existing enterprise stacks. I balance product constraints, operational SLAs, and modern LLM capabilities to ship stable systems that deliver measurable business outcomes.",
    cards: [
      {
        icon: GrSystem,
        title: "Enterprise System Architect",
        text: "I integrated AI automation into a .NET-based enterprise system, adding end-to-end workflows and safe release practices so AI features could run at scale without breaking existing business logic.",
      },
      {
        icon: AiOutlineRobot,
        title: "GenAI & Agent Engineer",
        text: "Designed and deployed RAG systems and autonomous agents that handle complex user intents and integrate with backend services for reliable action execution and escalation.",
      },
      {
        icon: AiOutlineCloud,
        title: "Cloud Specialist",
        text: "Deployed LLM-based inference on AWS (GPU-backed clusters), tuned for latency and cost, with autoscaling, model versioning, and secure data flows.",
      },
    ],
  },

  impactMetrics: {
    eyebrow: "ENGINEERING METRICS",
    heading: "Optimized for scale & cost",
    disclaimer: "Metrics are representative of production deployments — screenshots, dashboards, and sanitized logs available in case studies.",
    metrics: [
      { value: 15000, label: "Annual infrastructure savings (estimated)", description: "", isCurrency: true },
      { value: 300, label: "p95 latency for RAG pipeline", description: "Milliseconds" },
      { value: 150, label: "Throughput on GPUs (inference)", description: "Tokens/sec" },
      { value: 70, label: "Ticket deflection with multi-agent system", description: "", isPercentage: true },
    ],
  },

  techShowcase: {
    eyebrow: "SYSTEMS I'VE BUILT",
    heading: "Production Architectures",
    description: "A look under the hood at the infrastructure and design patterns used to deliver production AI.", // Cleared description as per new layout preference
    cta: { text: "View More", link: "/work" }, 
    cards: [
      {
        title: "High-throughput LLM inference engine",
        description: "Local GPU cluster delivering low-latency, high-throughput inference for production workloads.",
        visual: "/images/tech/server-rack.png",
      },
      {
        title: "Sales Bot",
        description: "Deployed on company website; increased qualified leads and reduced manual qualification work.",
        visual: "/images/tech/architecture-diagram.png",
      },
      {
        title: "Context-aware customer chatbots (RAG)",
        description: "Customers receive accurate, contextually relevant answers with traceable source citations.",
        visual: "/images/tech/rag-flow.png",
      },
    ],
  },

  socialProof: {
    eyebrow: "CREDENTIALS",
    heading: "Certified Expertise",
    certifications: [
      {
        imageUrl: "/images/badges/aws-ml-specialty.png",
        title: "AWS Certified Machine Learning",
        issuer: "Specialty (MLS-C01)",
      },
      {
        imageUrl: "/images/badges/amazon-ml-school.png",
        title: "Amazon ML Summer School",
        issuer: "Selected Scholar 2023",
      }
    ],
  },

  workPreview: {
    eyebrow: "CASE STUDIES",
    heading: "Deep Dives",
    projects: [
      {
        imageUrl: "/images/projects/sales-agent.png",
        title: "Sales Intelligence RAG System",
        description: "Challenge: Low lead conversion. Solution: RAG Agent with HubSpot sync. Result: 40% uplift in qualified leads.",
        tags: ["RAG", "LangChain", "AWS Lambda", "Redis"],
        link: "/work#sales-agent",
      },
      {
        imageUrl: "/images/projects/support-automation.png",
        title: "Multi-Agent Support Triage",
        description: "Challenge: Ops overload. Solution: AutoGen workflow for ticket diagnosis. Result: 70% manual reduction.",
        tags: ["AutoGen", "Docker", "VectorDB", "Python"],
        link: "/work#support-automation",
      },
      {
        imageUrl: "/images/projects/sql-generator.png",
        title: "Secure NL-to-SQL Engine",
        description: "Challenge: Slow data access. Solution: Fine-tuned CodeLlama with schema constraints. Result: 95% valid SQL gen.",
        tags: ["Fine-tuning", "PEFT", "PostgreSQL", "Security"],
        link: "/work#sql-generator",
      },
    ],
    cta: {
      text: "View More Insights", 
      link: "/insights", 
    },
  },

  cta: {
    heading: "Need a GenAI Systems Architect?",
    subheading: "I'm actively seeking Senior AI Engineer or Architect roles focused on RAG, LLM infrastructure, and cost-optimized AWS deployments.",
    buttons: {
      primary: { text: "Schedule Architecture Review", link: "/contact" },
      secondary: { text: "Download Resume", link: "/documents/Shreyas_Pachpute_Resume.pdf" },
      tertiary: { text: "Email Me", link: "mailto:shreyaspachpute1107@gmail.com" },
    },
    contactInfo: {
      email: "shreyaspachpute1107@gmail.com",
      linkedin: "https://linkedin.com/in/shreyaspachpute/",
      github: "https://github.com/shreyas-pachpute",
    },
  },
};