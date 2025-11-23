// src/constants/mockData.js

import { FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiDotnet, SiPytorch, SiNvidia, SiTerraform } from 'react-icons/si';
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineRobot, AiOutlineCloud, AiOutlineApi } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";

export const homeContent = {
  hero: {
    tag: "AI Architect & Systems Engineer",
    name: "Shreyas Pachpute",
    title: "Shreyas Pachpute",
    subtitle: "Architecting production-grade GenAI systems that scale. Specialized in multi-agent workflows, custom LLM inference optimization, and secure RAG infrastructure on AWS.",
    stats: [
      { value: 150, suffix: "+", label: "Tokens/sec (vLLM)" },
      { value: 15, suffix: "k+", label: "Infra Savings", isCurrency: true }, // UPDATED to 15k
      { value: 8, suffix: "+", label: "Production Agents" },
    ],
    ctaButtons: {
      primary: { text: "View Architecture & Work", link: "/work" },
      secondary: { text: "Download Resume", link: "/documents/Shreyas_Pachpute_Resume.pdf" },
      tertiary: { text: "Discuss Infrastructure", link: "/contact" },
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
    eyebrow: "ARCHITECTURAL PHILOSOPHY",
    heading: "Bridging Enterprise Reliability with GenAI Innovation",
    description: "I don't just run notebooks. I build resilient, cost-optimized, and observable AI systems that integrate seamlessly with existing enterprise stacks.",
    cards: [
      {
        icon: GrSystem,
        title: "Enterprise Systems Architect",
        items: [
          "Microservices (FastAPI + .NET)",
          "Legacy ERP/CRM Integration",
          "Event-Driven Architecture"
        ],
      },
      {
        icon: AiOutlineRobot,
        title: "GenAI & Agent Engineer",
        items: [
          "RAG with <300ms p95 Latency",
          "Agent Workflows (85% Auto-resolve)",
          "Evaluation Pipelines (RAGAS)"
        ],
      },
      {
        icon: AiOutlineCloud,
        title: "Cloud & MLOps Specialist",
        items: [
          "Multi-GPU Inference (vLLM)",
          "Cost-Optimized Auto-scaling",
          "Containerization (Docker/K8s)"
        ],
      },
    ],
  },

  impactMetrics: {
    eyebrow: "ENGINEERING METRICS",
    heading: "Optimized for Scale & Cost",
    metrics: [
      // UPDATED Value here
      { value: 15000, label: "Annual Savings", description: "via vLLM & Spot Instances", isCurrency: true },
      { value: 300, label: "p95 Latency", description: "Milliseconds (RAG Pipeline)" },
      { value: 150, label: "Throughput", description: "Tokens/sec on A10G" },
      { value: 95, label: "Classification Accuracy", description: "HSN Code Engine" },
      { value: 70, label: "Ticket Deflection", description: "Multi-Agent System", isPercentage: true },
      { value: 99.9, label: "System Uptime", description: "% SLA Maintained" },
    ],
  },

  techShowcase: {
    eyebrow: "FLAGSHIP ARCHITECTURES",
    heading: "Systems I've Built",
    description: "A look under the hood at the infrastructure and design patterns used to deliver production AI.",
    cards: [
      {
        title: "High-Throughput LLM Inference Engine",
        description: "Deployed Llama 3 on AWS g5.xlarge instances using vLLM and quantization. Achieved 150 tok/s throughput while reducing inference costs by 40% vs. commercial APIs.",
        // UPDATED path to .png
        visual: "/images/tech/server-rack.png",
        tech: [
          { icon: VscServerProcess, name: "vLLM" },
          { icon: SiNvidia, name: "CUDA" },
          { icon: FaAws, name: "AWS EC2" },
        ],
      },
      {
        title: "Hybrid .NET + Python Microservices",
        description: "Designed a bridge pattern allowing a legacy .NET enterprise ERP to consume modern Python AI services asynchronously via RabbitMQ, ensuring zero blocking operations.",
        // UPDATED path to .png
        visual: "/images/tech/architecture-diagram.png",
        tech: [
          { icon: SiDotnet, name: ".NET 8" },
          { icon: FaPython, name: "FastAPI" },
          { icon: AiOutlineApi, name: "RabbitMQ" },
        ],
      },
      {
        title: "Context-Aware RAG Agent",
        description: "Built a retrieval system using hybrid search (keyword + semantic) and re-ranking. Integrated with HubSpot to provide sales agents with real-time, grounded answers.",
        // UPDATED path to .png
        visual: "/images/tech/rag-flow.png",
        tech: [
          { icon: AiOutlineRobot, name: "LangChain" },
          { icon: AiOutlineCloud, name: "Pinecone" },
          { icon: FaDocker, name: "Docker" },
        ],
      },
    ],
  },

  // ... (Keep socialProof, workPreview, cta exactly as they were in the previous file)
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
      text: "View Full Architectures",
      link: "/work",
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