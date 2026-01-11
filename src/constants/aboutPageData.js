// src/constants/aboutPageData.js

import { FaDumbbell, FaPlane, FaBook, FaPenNib, FaChartLine, FaFlask, FaUsers, FaShieldAlt } from 'react-icons/fa';

export const aboutPageContent = {
  hero: {
    title: "About Me",
    subtitle: "AI Architect • Systems Engineer",
    summary: [
      "I’m an AI Architect with 2 years of hands-on experience building AI systems that solve real business problems. I specialize in RAG systems, automation pipelines, agentic systems, and cloud-native deployments.",
      "I don't ship experiments — I design resilient, cost-optimized, and observable systems that integrate safely into enterprise stacks and deliver measurable business impact.",
      "I'm AWS MLS-C01 certified (Mar 2024) and comfortable across stacks; I choose tools to solve product problems, not to show off tech."
    ],
    focusAreas: [
      { name: "Reliability", icon: FaChartLine },
      { name: "Cost-Effectiveness", icon: FaFlask },
      { name: "Security", icon: FaShieldAlt },
      { name: "User-Centered Outcomes", icon: FaUsers },
    ],
    headshotUrl: "/images/headshot-professional.png", 
  },

  journey: {
    title: "My Journey",
    milestones: [
      { 
        year: "2018", 
        title: "10th Grade", 
        institution: "Shree Vasishta Vidyalaya, Surat", 
        score: "Score: 71%", 
        microcopy: "Early curiosity in problem solving, coding clubs and math competitions.",
        image: "/images/about/school-days.jpg" 
      },
      { 
        year: "2020", 
        title: "12th Grade (Science)", 
        institution: "Abhinav Education Society, Pune", 
        score: "Score: 69%", 
        microcopy: "Strengthened foundations in mathematics and algorithms.",
        image: "/images/about/college-days.png" 
      },
      { 
        year: "2020", 
        title: "JEE Entrance", 
        institution: "National Level Exam", 
        score: "Percentile: 92", 
        microcopy: "A formative push towards engineering and system design thinking.",
        image: "/images/about/jee-prep.png" 
      },
      { 
        year: "2020–2024", 
        title: "BE (Computer Science)", 
        institution: "SCET Surat", 
        score: "CGPA: 8.4", 
        microcopy: "Built foundational software engineering skills, distributed systems projects. Started applying ML in college research.",
        image: "/images/about/engineering-projects.jpg" 
      },
      { 
        year: "2022", 
        title: "Data Analyst Intern", 
        institution: "AdvancedWare Technology", 
        score: "", 
        microcopy: "Hands-on with data cleaning, dashboards, and production constraints like missing data and validation.",
        image: "/images/about/data-intern.jpg" 
      },
      { 
        year: "2023", 
        title: "ML Training", 
        institution: "Amazon ML Summer School", 
        score: "", 
        microcopy: "Deep dive into scalable ML architectures and applied projects.",
        image: "/images/about/amazon-ml.png" 
      },
      { 
        year: "Jan 2024", 
        title: "AI Intern", 
        institution: "Commercient", 
        score: "", 
        microcopy: "First exposure to integrating AI into ERP→CRM flows; worked on practical automation tasks.",
        image: "/images/about/ai-engineer.png" 
      },
      { 
        year: "Mar 2024", 
        title: "AWS Certification", 
        institution: "AWS Certified Machine Learning – Specialty", 
        score: "MLS-C01", 
        microcopy: "Formalized best practices for production ML systems and cloud deployment.",
        image: "/images/about/aws-cert.png" 
      },
      { 
        year: "Jun 2024 - Present", 
        title: "AI Engineer", 
        institution: "Commercient", 
        score: "", 
        microcopy: "Designing and shipping production RAG systems, AI agents, and inference infra. Focused on observability and cost.",
        image: "/images/about/ai-engineer.png" 
      },
    ],
  },

  skills: {
    title: "Core Competencies",
    categories: [
      {
        title: "GenAI & LLMs",
        subtopics: "RAG systems, Embeddings, Retrieval pipelines, LLM orchestration, Agent design & safety, Prompt engineering, Finetuning.",
        example: "Designed a RAG stack with semantic search + citation tracking, deployed to serve customer support queries."
      },
      {
        title: "MLOps & Infra",
        subtopics: "CI/CD for models (MLflow / GitHub Actions), Model registry, Automated retraining, Canary deployments, Feature stores, Terraform.",
        example: "Implemented a model CI pipeline with automated tests, performance gates, and rollback."
      },
      {
        title: "Data & Engineering",
        subtopics: "ETL/ELT, Batch & streaming pipelines, Data validation, Schema evolution, PostgreSQL/NoSQL, Kafka.",
        example: "Built an ingestion pipeline that normalized ERP exports and produced clean features for RAG."
      },
      {
        title: "Cloud & Deployment",
        subtopics: "AWS (SageMaker, ECS/EKS, Lambda, S3), GPU infra, Autoscaling, Cost optimization strategies.",
        example: "Deployed LLMs on A10G instances with autoscaling and spot instance fallbacks for cost efficiency."
      },
      {
        title: "Systems & Architecture",
        subtopics: "Distributed systems patterns, Observability (metrics/logs/traces), SLA/SLI design, Security & data governance.",
        example: "Designed service-level SLOs and alerting to surface model degradation early."
      },
      {
        title: "Soft Skills & Leadership",
        subtopics: "Stakeholder communication, Technical writing, Mentoring, Cross-functional collaboration, Project scoping.",
        example: "Led technical discussions to shape product roadmaps and translated ML constraints into business timelines."
      }
    ]
  },

  philosophy: {
    title: "Engineering Philosophy",
    principles: [
      { Icon: FaChartLine, name: "Optimize for Latency" },
      { Icon: FaFlask, name: "Data > Model Size" },
      { Icon: FaUsers, name: "User-Centric AI" },
      { Icon: FaShieldAlt, name: "Reproducible Infra" },
    ],
    quote: "The best AI systems are invisible. They don't just chat—they execute work with reliability, low latency, and predictable costs.",
  },

  hobbies: {
    title: "Beyond Code",
    intro: "I believe hobbies shape your thinking — structured workouts mirror disciplined system design.",
    activities: [
      {
        name: "Gym & Discipline",
        description: "Daily routines that build mental and physical resilience.",
        icon: FaDumbbell,
        image: "/images/about/hobby-gym.png"
      },
      {
        name: "Traveling",
        description: "Exploring new cultures to broaden perspective and adaptability.",
        icon: FaPlane,
        image: "/images/about/hobby-travel.png"
      },
      {
        name: "Politics & Mythology",
        description: "Reading history to understand context, argumentation, and human systems.",
        icon: FaBook,
        image: "/images/about/hobby-reading.png"
      },
      {
        name: "Technical Writing",
        description: "Documenting architectural decisions and sharing knowledge.",
        icon: FaPenNib,
        image: "/images/about/hobby-writing.png",
        link: "/insights"
      },
    ]
  }
};