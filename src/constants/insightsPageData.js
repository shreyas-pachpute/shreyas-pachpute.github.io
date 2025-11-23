// src/constants/insightsPageData.js

export const insightsPageContent = {
  hero: {
    title: "Engineering Insights",
    subtitle: "A collection of technical deep-dives, architectural decisions, and lessons learned from deploying AI in production.",
  },
  filters: ["All Posts", "System Design", "LLM Ops", "Case Studies", "Tutorials"],
  posts: [
    {
      slug: "deploying-custom-llms",
      category: "LLM Ops",
      date: "Nov 15, 2025",
      readTime: "8 min read",
      title: "Self-Hosting Llama 3 on Consumer Hardware: A Viable Enterprise Strategy?",
      excerpt: "Why we moved away from GPT-4 to self-hosted quantized models, saving $15k/year without sacrificing accuracy for our specific RAG use case.",
      imageUrl: "/images/insights/multi-gpu.png", 
    },
    {
      slug: "rag-vs-finetuning",
      category: "System Design",
      date: "Oct 28, 2025",
      readTime: "12 min read",
      title: "RAG vs Fine-Tuning: The Architect's Decision Matrix",
      excerpt: "A breakdown of when to use Retrieval-Augmented Generation versus fine-tuning, based on data volatility, accuracy requirements, and cost.",
      imageUrl: "/images/insights/rag-vs-ft.png",
    },
    {
      slug: "production-ready-agents",
      category: "Case Studies",
      date: "Oct 10, 2025",
      readTime: "10 min read",
      title: "From 'Toy Demo' to Production: Hardening Multi-Agent Systems",
      excerpt: "How we solved the 'infinite loop' and 'hallucination' problems in our AutoGen support bot using strict state management and deterministic guardrails.",
      imageUrl: "/images/insights/langgraph.png", 
    },
  ],
  suggested: [
    "The Hidden Costs of Cloud AI API's",
    "Optimizing vLLM for High Concurrency",
    "Building a Knowledge Graph for Supply Chain AI",
  ]
};