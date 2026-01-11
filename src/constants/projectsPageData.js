export const projectsPageContent = {
  hero: {
    title: "Personal Projects",
    subtitle: "End-to-end GenAI implementations with architecture diagrams, reproducible code, and performance benchmarks.",
  },
  projects: [
    {
      type: "production",
      title: "HSN Code Classification Engine",
      description: "Production RAG system utilizing Knowledge Graphs for 95% accurate product classification.",
      imageUrl: "/images/projects/hsn-classifier.png",
      links: [
        { type: "live", href: "#" }, 
        { type: "github", href: "https://github.com/shreyas-pachpute" },
      ],
      details: {
        tags: ["RAG", "Knowledge Graph", "Production"],
        stats: [
          { value: "95%", label: "Accuracy" },
          { value: "20ms", label: "Graph Query Time" },
          { value: "10k+", label: "SKUs Processed" },
        ],
        overview: {
          challenge: "HSN (Harmonized System) code classification is complex due to hierarchical rules. Standard vector search failed to capture the specific regulatory logic required.",
          solution: "I implemented a 'Graph-RAG' approach. First, a vector search narrows down candidates. Then, a Neo4j Knowledge Graph traverses the HSN hierarchy to validate the classification against strict logic rules.",
          outcome: "The system replaced a manual team workflow, classifying goods in milliseconds with higher accuracy than human operators."
        },
        architectureUrl: "/images/projects/hsn-architecture.png",
        techStack: [
          { name: "Neo4j", reason: "For hierarchical relationship modeling." },
          { name: "LangChain", reason: "Agent orchestration." },
          { name: "FastAPI", reason: "Asynchronous API handling." },
          { name: "AWS Lambda", reason: "Serverless execution." },
        ],
        results: {
          comparison: { before: "Manual: 5 mins/SKU, 70% Acc", after: "AI: 200ms/SKU, 95% Acc" },
          dashboardUrl: "/images/projects/hsn-dashboard.png",
        }
      }
    },
    {
      type: "opensource",
      title: "LangChain Multi-Agent State Handler",
      description: "Merged contribution to LangChain core improving resilience of agent tool execution.",
      imageUrl: "/images/projects/langchain-contrib.png",
      links: [
        { type: "github", href: "https://github.com/langchain-ai/langchain", stars: 234 },
      ],
      details: {
        tags: ["Open Source", "Python", "Framework Design"],
        stats: [
          { value: "1", label: "Merged PR" },
          { value: "Core", label: "Library Component" },
          { value: "15k+", label: "Users Impacted" },
        ],
        overview: {
          challenge: "Agents would crash entire workflows if a single tool call failed due to network flakiness, making production usage unstable.",
          solution: "Implemented a robust retry-with-backoff decorator and state persistence layer that allows agents to recover gracefully from tool failures without losing conversation context.",
          outcome: "Accepted into LangChain core, now used by thousands of developers building resilient agents."
        },
        architectureUrl: "/images/projects/langchain-flow.png",
        techStack: [
          { name: "Python", reason: "Core logic." },
          { name: "Unit Testing", reason: "Pytest coverage." },
          { name: "CI/CD", reason: "GitHub Actions integration." },
        ],
        results: {
          comparison: { before: "Brittle execution", after: "Fault-tolerant workflows" },
        }
      }
    },
    {
      type: "experiment",
      title: "Fine-tuning Llama 3 for Finance",
      description: "Custom domain adaptation using QLoRA for financial sentiment analysis.",
      imageUrl: "/images/projects/llama-finetune.gif",
      links: [
        { type: "blog", href: "/insights/fine-tuning-llama" },
        { type: "notebook", href: "https://colab.research.google.com/" },
      ],
      details: {
        tags: ["Experiment", "Fine-tuning", "LLM", "Finance"],
        stats: [
          { value: "15%", label: "Accuracy Boost" },
          { value: "10k", label: "Training Examples" },
          { value: "24h", label: "Training Time (A10G)" },
        ],
        overview: {
          challenge: "General-purpose LLMs lacked the nuanced understanding of financial jargon required for high-accuracy sentiment analysis.",
          solution: "Curated a dataset of 10,000 financial news headlines and used QLoRA (Quantized Low-Rank Adaptation) to efficiently fine-tune the Llama 3 8B model on a single cloud GPU.",
          outcome: "The fine-tuned model outperformed the base model by 15% on a held-out test set, proving the viability of small, specialized models."
        },
        architectureUrl: "/images/projects/finetune-process.png",
        techStack: [
          { name: "PyTorch", reason: "Training loop." },
          { name: "QLoRA", reason: "Memory efficient fine-tuning." },
          { name: "W&B", reason: "Experiment tracking." },
        ],
        results: {
          comparison: { before: "Base Model: 78% Accuracy", after: "Fine-tuned Model: 93% Accuracy" },
        }
      }
    },
  ],
};