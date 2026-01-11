export const insightsPageContent = {
  hero: {
    title: "Insights & Engineering",
    subtitle: "A collection of architectural case studies and technical blogs on deploying AI in production.",
  },
  
  caseStudies: [
    {
      slug: "production-ready-agents",
      category: "Case Study",
      date: "Oct 10, 2025",
      readTime: "10 min read",
      title: "From 'Toy Demo' to Production: Hardening Multi-Agent Systems",
      excerpt: "How we solved the 'infinite loop' and 'hallucination' problems in our AutoGen support bot using strict state management and deterministic guardrails.",
      imageUrl: "/images/insights/langgraph.png", 
    },
    {
      slug: "deploying-custom-llms",
      category: "Case Study",
      date: "Nov 15, 2025",
      readTime: "8 min read",
      title: "Self-Hosting Llama 3 on Consumer Hardware: A Viable Enterprise Strategy?",
      excerpt: "Why we moved away from GPT-4 to self-hosted quantized models, saving $15k/year without sacrificing accuracy for our specific RAG use case.",
      imageUrl: "/images/insights/multi-gpu.png", 
    },
  ],

  blogs: [
    {
      slug: "rag-vs-finetuning",
      category: "Technical Blog",
      date: "Oct 28, 2025",
      readTime: "12 min read",
      title: "RAG vs Fine-Tuning: The Architect's Decision Matrix",
      excerpt: "A breakdown of when to use Retrieval-Augmented Generation versus fine-tuning, based on data volatility, accuracy requirements, and cost.",
      imageUrl: "/images/insights/rag-vs-ft.png",
      mediumUrl: "https://medium.com/@shreyaspachpute/rag-vs-finetuning", // Example Link
    },
    {
      slug: "optimizing-vllm",
      category: "Technical Blog",
      date: "Dec 05, 2025",
      readTime: "6 min read",
      title: "Optimizing vLLM for High Concurrency",
      excerpt: "Deep dive into continuous batching, PagedAttention, and configuring vLLM for maximum throughput on A10G GPUs.",
      imageUrl: "/images/insights/vllm-opt.png",
      mediumUrl: "https://medium.com/@shreyaspachpute/optimizing-vllm",
    },
  ]
};