import { FaRobot, FaServer, FaCogs, FaDatabase, FaTools, FaChartLine } from 'react-icons/fa';

export const workPageContent = {
  hero: {
    company: "Commercient",
    role: "AI Engineer",
    summary: "At Commercient, I integrated GenAI and ML into core product flows: lead capture, support automation, user-configurable RAG bots, and inference infra — all built to run in production.",
    logoUrl: "/images/work/commercient-logo.png", 
    metrics: [
      { value: 8, suffix: "+", label: "Production Agents", icon: FaRobot },
      { value: 15000, prefix: "$", label: "Annual Infra Savings", icon: FaServer },
      { value: 150, suffix: " tok/s", label: "Inference Throughput", icon: FaCogs },
      { value: 300, suffix: "ms", label: "p95 Latency (RAG)", icon: FaChartLine },
      { value: 70, suffix: "%", label: "Ticket Deflection", icon: FaDatabase },
    ],
    microcopy: "Metrics representative of production deployments — detailed breakdowns and dashboards available in case studies."
  },

  roleDetails: {
    title: "Role & Responsibilities",
    description: "I worked directly with the CTO and product leads to scope features, prioritize risk, and ship production-grade systems within the existing .NET ecosystem.",
    points: [
      "Design and build production GenAI features (RAG systems, bots, agents) that integrate with Commercient’s .NET portal and backend.",
      "Ship inference infra across multi-GPU servers and AWS, including open-source LLMs and autoscaling strategies.",
      "Implement MLOps pipelines for data, training, model versioning, and deployment (CI/CD).",
      "Lead architecture discussions with C-level stakeholders and drive production rollouts and safety gating.",
      "Instrument observability, drift detection, and cost-optimization to keep SLAs and budgets on track."
    ]
  },

  caseStudies: [
    {
      id: "sales-bot",
      title: "Sales Bot — Automated Lead Gen",
      timeline: "3 Months",
      type: "Production",
      problem: "The web team needed a way to qualify and capture incoming leads, map them to ERP/CRM records, and push to HubSpot without manual delay.",
      solution: "Built a conversational pipeline using LangGraph + FastAPI. Implemented a hybrid extraction engine (Rules + LLM) to pull structured fields and integrated a Human-In-The-Loop (HITL) escalation path for ambiguous cases.",
      impact: ["Faster lead capture", "Reduced manual triage time", "Real-time HubSpot sync"],
      techStack: ["LangGraph", "FastAPI", "HubSpot API", "Redis"],
      link: "/work/sales-bot" 
    },
    {
      id: "rag-platform",
      title: "Multi-Tenant RAG Platform",
      timeline: "4 Months",
      type: "Platform",
      problem: "Customers needed personalized chatbots powered by their own content (Docs, YouTube, Sitemaps) with strict data isolation.",
      solution: "Engineered a no-code control plane allowing users to build KBs. Built an ingestion pipeline (Fetch → Chunk → Embed) supporting multiple vector DBs (Pinecone, Milvus) and created a serving layer with citation tracking.",
      impact: ["Reduced time-to-value (Weeks → Hours)", "Scalable multi-tenant architecture", "Cost-controlled ingestion"],
      techStack: ["LangChain", "Python Workers", "Pinecone", "AWS S3"],
      link: "/work/rag-platform"
    },
    {
      id: "support-agent",
      title: "Customer Support Agent",
      timeline: "3 Months",
      type: "Automation",
      problem: "Support agents were overwhelmed by repetitive tickets. Historical knowledge was scattered across 10 years of unorganized data.",
      solution: "Created an ingestion pipeline to clean and index 10 years of tickets. Built a context-aware agent for the support portal that suggests resolutions and handles escalation with audit trails.",
      impact: ["70% Ticket Deflection", "Faster resolution for common queries", "High internal CSAT"],
      techStack: ["LangChain", "Python ETL", "Kubernetes", "Prometheus"],
      link: "/work/support-agent"
    }
  ],

  otherSystems: [
    {
      title: "AI SQL View Generator",
      description: "Generates required SQL Views for Phase-1 syncing (ERP → Gateway → CRM), speeding up integration for new ERPs and reducing manual DB onboarding.",
    },
    {
      title: "AI Process Mapping",
      description: "Automated object mapping & reconciliation logic for CRM→ERP updates, reducing mapping time and human error.",
    },
    {
      title: "Fine-tuned Models",
      description: "Built and evaluated task-specific finetuned models for specialized retrieval and structured extraction use-cases.",
    },
    {
      title: "LLM Inference Engine",
      description: "High-throughput, multi-GPU inference stack (vLLM) with autoscaling, batching, and spot-instance fallbacks. Supports Qwen, Llama, and DeepSeek.",
    },
    {
      title: "Platform Tooling",
      description: "CI/CD for models, model registry, regression tests, canary deploys, and automated rollback for model releases.",
    }
  ],

  testimonial: {
    quote: "Shreyas transformed our theoretical AI roadmap into a production reality. His ability to balance cutting-edge LLM tech with the reliability requirements of our enterprise .NET stack was invaluable.",
    author: "Richard Jenkins",
    role: "CTO, Commercient"
  }
};