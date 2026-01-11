// src/constants/learningPageData.js

import { FaBrain, FaServer, FaCode, FaBook } from 'react-icons/fa';

export const learningPageContent = {
  hero: {
    title: "How I Learn",
    subtitle: "My personal knowledge base, learning resources, and mental models for mastering complex technical topics.",
  },
  sections: [
    {
      title: "Generative AI & LLMs",
      icon: FaBrain,
      description: "Keeping up with the frantic pace of AI requires filtering noise and focusing on fundamentals.",
      approach: "I focus on reading the original papers (arXiv) first, then looking at code implementations. I avoid 'hype' influencers and stick to engineering blogs from companies like Anthropic, OpenAI, and Meta.",
      resources: [
        { title: "Andrej Karpathy's YouTube", url: "https://www.youtube.com/@AndrejKarpathy", type: "Video" },
        { title: "Lil'Log (Lilian Weng)", url: "https://lilianweng.github.io/", type: "Blog" },
        { title: "Chip Huyen's Blog", url: "https://huyenchip.com/", type: "Blog" },
        { title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", type: "Docs" },
      ]
    },
    {
      title: "System Design",
      icon: FaServer,
      description: "Designing scalable systems is about trade-offs, not perfect solutions.",
      approach: "I practice by reverse-engineering popular architectures (e.g., 'How would I build WhatsApp?'). I strictly follow the 'Designing Data-Intensive Applications' philosophy.",
      resources: [
        { title: "Designing Data-Intensive Applications (Kleppmann)", url: "https://dataintensive.net/", type: "Book" },
        { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "GitHub" },
        { title: "ByteByteGo Newsletter", url: "https://blog.bytebytego.com/", type: "Newsletter" },
      ]
    },
    {
      title: "Backend Engineering",
      icon: FaCode,
      description: "Solid code structure, testing, and async patterns are crucial for AI engineering.",
      approach: "I build small clones of tools I use. To learn FastAPI, I built a mini-version of it. To learn Docker, I wrote a container runtime in Go.",
      resources: [
        { title: "ArjanCodes", url: "https://www.youtube.com/@ArjanCodes", type: "Video" },
        { title: "Cosmic Python (TDD/DDD)", url: "https://www.cosmicpython.com/", type: "Book" },
        { title: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/", type: "Docs" },
      ]
    }
  ]
};