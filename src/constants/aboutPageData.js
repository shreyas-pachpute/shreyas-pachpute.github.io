// src/constants/aboutPageData.js

import { FaChartLine, FaFlask, FaUsers, FaBookOpen, FaFeatherAlt, FaCode, FaPlane } from 'react-icons/fa';

export const aboutPageContent = {
  hero: {
    eyebrow: "AI ARCHITECT • SYSTEMS ENGINEER",
    story: [
      "I am an AI Architect who bridges the gap between proof-of-concept and production. My background in .NET enterprise development taught me the importance of reliability and uptime, while my passion for GenAI drives me to push the boundaries of what automated systems can understand.",
      "At Commercient, I transitioned from an ML Engineer to leading the AI strategy. I architected end-to-end systems including a high-throughput vLLM inference server and a multi-agent support bot that autonomously resolves tickets.",
      "I specialize in the unglamorous but critical parts of AI: reducing latency, optimizing GPU costs, securing RAG pipelines, and integrating non-deterministic models into deterministic business logic."
    ],
    headshotUrl: "/images/headshot-professional.png",
  },
  journey: {
    title: "Path to Architecture",
    milestones: [
      { date: "2020-2023", title: "Full Stack & CS Foundations", description: "Built scalable .NET applications and microservices, learning the rigor of enterprise software." },
      { date: "2023", title: "Amazon ML Summer School", description: "Deep dive into Applied ML, transitioning focus towards advanced Deep Learning concepts." },
      { date: "2024", title: "AWS ML Specialty Certification", description: "Validated expertise in cloud-native training, deployment, and MLOps pipelines." },
      { date: "2024 - Present", title: "AI Architect at Commercient", description: "Designing and deploying production RAG systems, managing multi-GPU infra, and leading GenAI strategy." },
    ],
  },
  skills: {
    eyebrow: "TECHNICAL STACK",
    title: "Core Competencies",
    tabs: [
      {
        name: "AI Systems & GenAI",
        skillsList: [
          { name: "RAG Architectures", level: 95 },
          { name: "LLM Deployment (vLLM/TGI)", level: 90 },
          { name: "Multi-Agent Systems (LangGraph)", level: 85 },
          { name: "Fine-tuning (QLoRA)", level: 80 },
        ],
      },
      {
        name: "Cloud & MLOps",
        skillsList: [
          { name: "AWS (SageMaker, Lambda, EC2)", level: 90 },
          { name: "Docker & Containerization", level: 90 },
          { name: "CI/CD (GitHub Actions)", level: 85 },
          { name: "Kubernetes (EKS)", level: 70 },
        ],
      },
      {
        name: "Backend Engineering",
        skillsList: [
          { name: "Python (FastAPI, PyTorch)", level: 95 },
          { name: ".NET Core / C#", level: 90 },
          { name: "System Design", level: 85 },
          { name: "Database Design (SQL/Vector)", level: 85 },
        ],
      },
      {
        name: "Soft Skills", // Kept for completeness but simplified
        skillsList: [
          { name: "Technical Leadership", level: 90 },
          { name: "Problem Solving", level: 95 },
          { name: "Stakeholder Management", level: 85 },
        ],
      },
    ],
  },
  philosophy: {
    title: "Engineering Philosophy",
    principles: [
      { Icon: FaChartLine, name: "Optimize for Latency" },
      { Icon: FaFlask, name: "Data > Model Size" },
      { Icon: FaUsers, name: "User-Centric AI" },
      { Icon: FaBookOpen, name: "Reproducible Infra" },
    ],
    quote: "The best AI systems are invisible. They don't just chat—they execute work with reliability, low latency, and predictable costs.",
  },

  beyondCode: {
    title: "When I'm Not Architecting AI Systems",
    activities: [
      {
        Icon: FaFeatherAlt,
        name: "Technical Writing",
        description: "Writing about LLM deployment challenges and RAG architectures.",
        imageUrl: "/images/about/writing.png",
      },
      {
        Icon: FaCode,
        name: "Open Source",
        description: "Contributing to LangChain and local LLM runners.",
        imageUrl: "/images/about/exploring.png",
      },
      {
        Icon: FaPlane,
        name: "Traveling",
        description: "Exploring new cultures to broaden my perspective.",
        imageUrl: "/images/about/traveling.png",
      },
    ],
  },
};