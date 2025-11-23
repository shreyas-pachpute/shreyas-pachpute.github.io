// src/constants/workPageData.js

export const workPageContent = {
  hero: {
    title: "Engineering Experience",
    subtitle: "A track record of shipping RAG systems, multi-agent workflows, and cost-optimized infrastructure in production.",
    filters: ["All", "Architecture", "RAG", "Infrastructure", "Optimization"],
  },

  currentRole: {
    title: "AI Architect", // Removed "Lead Engineer"
    company: "Commercient LLC",
    duration: "January 2024 – Present",
    location: "Remote (US)",
    description: "Spearheading the transition to AI-native operations. Responsible for architectural decisions, cloud infrastructure, and the end-to-end lifecycle of GenAI products.",
    contributions: [
      {
        id: "contribution-1",
        title: "Enterprise RAG Architecture",
        details: [
          "Designed a <strong>hybrid-search RAG pipeline</strong> handling 1000+ daily queries with sub-300ms latency.",
          "Implemented <strong>semantic caching (Redis)</strong> to reduce LLM API costs by 35%.",
          "Built a feedback loop using <strong>LangSmith</strong> to monitor and improve retrieval accuracy over time.",
        ],
        techStack: ["LangChain", "Pinecone", "Redis", "Python"],
      },
      {
        id: "contribution-2",
        title: "LLM Infrastructure Optimization",
        details: [
          // Updated text for Local GPUs and Open Source models
          "Migrated from proprietary APIs to <strong>self-hosted open source models like Llama and Qwen on local GPU systems</strong>, saving $15k/year.",
          "Implemented <strong>vLLM with continuous batching</strong>, achieving 150 tokens/sec throughput.",
          "Set up <strong>Prometheus/Grafana dashboards</strong> for real-time GPU monitoring and alerting.",
        ],
        techStack: ["vLLM", "Docker", "Grafana", "Local GPUs"],
      },
      {
        id: "contribution-3",
        title: "Strategic AI Implementation",
        details: [
          "Lead a team of 3 engineers in developing a <strong>Multi-Agent support bot</strong> that deflects 70% of L1 tickets.",
          "Established <strong>CI/CD pipelines for ML</strong> using GitHub Actions to ensure reproducible model deployments.",
        ],
        techStack: ["Strategy", "Team Leadership", "MLOps", "GitHub Actions"],
      },
    ],
  },

  impact: {
    eyebrow: "CUMULATIVE IMPACT",
    title: "Scale & Reliability",
    metrics: [
      { value: "$15k", label: "Annual Infra Savings" },
      { value: "99.9%", label: "System Uptime" },
      { value: "300ms", label: "Avg Latency (p95)" },
      { value: "40%", label: "Lead Gen Uplift" },
    ],
  },

  keyProjects: {
    title: "Detailed Case Studies",
    projects: [
      {
        imageUrl: "/images/projects/sales-agent-showcase.png",
        title: "Sales Intelligence Agent (RAG)",
        challenge: "Sales team wasted 20 hours/week manually qualifying leads with generic scripts.",
        approach: "Architected a context-aware agent connected to HubSpot via function calling. Utilized a vector database for product knowledge retrieval.",
        results: ["$12k/year SaaS license savings", "40% increase in qualified leads", "<2s response time"],
        techStack: ["Python", "FastAPI", "LangChain", "HubSpot API"],
        id: "sales-agent"
      },
      {
        imageUrl: "/images/projects/multi-agent-showcase.png",
        title: "Autonomous Support Triage System",
        challenge: "L1 support was overwhelmed by repetitive queries, causing high response times.",
        approach: "Deployed a multi-agent system (AutoGen) where 'Diagnostician' and 'Resolver' agents collaborate to solve tickets or route complex ones.",
        results: ["70% auto-resolution rate", "24/7 coverage achieved", "Zero hallucination guardrails"],
        techStack: ["AutoGen", "CosmosDB", "Docker", "Azure OpenAI"],
        id: "support-automation"
      },
    ],
  },
};