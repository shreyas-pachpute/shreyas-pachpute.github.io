// src/config/appData.js

// --- SKILLS ---
export const skillCategories = [
    {
      title: "Programming Language",
      icon: "FaCode", // Using react-icons names (adjust as needed)
      skills: [
        { name: "Python", icon: "FaPython" },
        { name: "C#", icon: "FaCode" }, // Find a better icon for C# if available
        { name: "SQL", icon: "FaDatabase" },
      ],
    },
    {
      title: "Machine Learning",
      icon: "FaBrain",
      skills: [
        { name: "Data Engineering", icon: "FaDatabase" },
        { name: "Model Training", icon: "FaDumbbell" },
        { name: "Model Deployment", icon: "FaRocket" },
        { name: "Reinforcement Learning", icon: "FaRobot" },
      ],
    },
    {
      title: "Generative AI",
      icon: "FaLightbulb",
      skills: [
         { name: "LLMs", icon: "FaComments" },
         { name: "Agents & Tools", icon: "FaUserAstronaut" },
         { name: "Prompt Engineering", icon: "FaPenFancy" },
         { name: "Langchain", icon: "FaLink" },
         { name: "LangGraph", icon: "FaProjectDiagram" },
         { name: "RAG", icon: "FaSearch" },
      ],
    },
     {
      title: "Cloud",
      icon: "FaCloud",
      skills: [
        { name: "AWS", icon: "FaAws" },
        { name: "Google Vertex AI (Basic)", icon: "FaGoogle" },
      ],
    },
      {
      title: "Others",
      icon: "FaTools",
      skills: [
        { name: "Git / GitHub", icon: "FaGitAlt" },
        { name: "RESTful APIs", icon: "FaServer" },
      ],
    },
  ];
  
  // --- PROJECTS ---
  export const projectsData = [
  {
    id: 'ayunexa',
    title: "AYUNEXA AI-Powered Healthcare Eco-System",
    description: "Developed an EcoSystem for users that comes under Healthcare Ecosystem like doctors, patients, Medicals, etc.. and made whole workflow of ecosystem easy and efficient beneficial for each who uses for ecosystem.",
    image: "/img/placeholder-project1.png",
    tags: ["TensorFlow", "PyTorch", "DICOM Processing", "Grad-CAM", "AWS SageMaker"],
    category: ["gen-ai", "healthcare"],
    github: null,
    demoType: "modal",
    demoInfo: {
      title: "AYUCARE Demo",
      text: "Works very smooth.",
      image: "/img/projects/med-ai-interface.jpg"
    }
  },
  {
    id: 'tradenexa',
    title: "TRADENEXA Autonomous Multi-Agent Trading System",
    description: "Engineered a multi-agent research and trading platform leveraging reinforcement learning and algorithmic strategies to execute trades in real time across global financial markets.",
    image: "/img/placeholder-project2.png",
    tags: ["Python", "Reinforcement Learning", "Multi-Agent Systems", "ZeroMQ", "Pandas", "NumPy"],
    category: ["finance", "ai"],
    github: "https://github.com/your-org/tradenexa-system",
    demoType: "live",
    demoInfo: {
      title: "Real-Time Trading Dashboard",
      text: "Interactive dashboard showcasing agent performance: sub-5ms order placement and 15% reduction in portfolio volatility through collaborative strategy adaptation.",
      liveUrl: "https://tradenexa-demo.yourdomain.com"
    }
  },
  {
    id: 'urbanexa',
    title: "URBANEXA Smart City Traffic & Emergency Response System",
    description: "Designed an autonomous multi-agent traffic management and emergency response network that dynamically optimizes signal timing, reroutes traffic, and coordinates first-responder dispatch in real time.",
    image: "/img/placeholder-project3.png",
    tags: ["JavaScript", "IoT", "MQTT", "ROS", "OpenStreetMap", "Reinforcement Learning"],
    category: ["iot", "smart-city"],
    github: "https://github.com/your-org/urbanexa-system",
    demoType: "video",
    demoInfo: {
      title: "Traffic Control Simulation",
      text: "Video demonstration of adaptive signal control achieving 30% reduction in congestion and 25% faster emergency vehicle response during peak hours.",
      videoUrl: "/videos/urbanexa-sim-demo.mp4"
    }
  }
];

  
  // --- EXPERIENCE ---
   export const experienceData = [
      {
          id: 1,
          role: "AI/ML Engineer",
          company: "Commercient",
          location: "Surat, Gujarat",
          date: "Jan 2024 - Present",
          icon: "FaBriefcase",
          tasks: [
              "Built and deployed a custom sales chatbot replacing Drift, achieving 80% lead improvement.",
              "Engineered LLM deployments using VLLM on Multi-GPU/Servers for enhanced throughput.",
              "Architected and developed a RAG bot integrating internal data sources.",
              "Designed .NET/C# APIs for AI feature integration into the company portal.",
              "Developed and published an end-to-end CommercientAI application in the Slack Marketplace.",
          ]
      },
      {
          id: 2,
          role: "ML Intern",
          company: "YBI Foundation",
          location: "Remote",
          date: "July 2023",
          icon: "FaGraduationCap",
          tasks: [
             "Developed ML models for bank customer churn prediction and bike price forecasting.",
             "Implemented data pipelines for financial news sentiment analysis and movie recommendation systems.",
          ]
      }
  ];
  
   // --- EDUCATION ---
   export const educationData = [
       {
          id: 1,
          degree: "Bachelor of Engineering (BE), Computer Science",
          institution: "Sarvajanik College of Engineering and Technology (SCET), Surat",
          duration: "2020 - 2024",
          details: "CGPA: 8.3 / 10.0",
          icon: "FaUniversity",
          courses: "Relevant Courses: Data Structures, Algorithms, Database Management, Operating Systems, Machine Learning, Artificial Intelligence, Cloud Computing."
       }
   ];
  
   // --- CERTIFICATIONS ---
    export const certificationsData = [
       {
          id: 1,
          title: "AWS Certified Machine Learning - Specialty",
          issuer: "Amazon Web Services (AWS)",
          date: "Issued: March 2024",
          badge: "/img/aws-ml-specialty-badge.png",
          credentialUrl: "https://www.credly.com/badges/ce106f19-ee1e-4d96-9e8e-b25f4f5b1249/public_url",
          description: "Covers complex ML concepts, design, implementation, deployment, and maintenance on AWS."
       },
       {
          id: 2,
          title: "Amazon ML Summer School",
          issuer: "Amazon India",
          date: "Completed: October 2023",
          badge: "/img/amazon-ml-school-badge.png",
          credentialUrl: null,
          placeholder: "Certificate Available",
          description: "Intensive program covering foundational and advanced ML topics led by Amazon scientists."
       }
      //  {
      //      id: 3,
      //     title: "Kaggle Learn Micro-Courses",
      //     issuer: "Kaggle",
      //     date: "Completed: Various Dates",
      //     badge: "/img/kaggle-logo.png",
      //     credentialUrl: null, // Add profile link if desired
      //     placeholder: "Profile Available",
      //     description: "Completed courses in Python, Intro to ML, Intermediate ML, Feature Engineering, Deep Learning, NLP."
      //  }
    ];
  
  // --- BLOGS --- (Add slugs for routing)
  export const blogsData = [
       {
          id: 1,
          slug: "how-to-built-ai-agents-efficiently",
          title: "How to built AI Agents Efficiently",
          excerpt: "An overview of Retrieval-Augmented Generation and a practical guide using Langchain...",
          image: "/img/placeholder-blog1.jpg",
          // Add full content here or load dynamically later
          content: `
              <p>Large Language Models (LLMs) are incredibly powerful, but they often lack access to specific, up-to-date, or proprietary information. Retrieval-Augmented Generation (RAG) is a technique designed to bridge this gap by combining the generative power of LLMs with external knowledge retrieval.</p>
              <h2>What is RAG?</h2>
              <p>At its core, RAG involves two main steps:</p>
              <ol>
                  <li><strong>Retrieval:</strong> When a user asks a question, the system first searches a knowledge base (like a collection of documents, a database, or vector store) for relevant information.</li>
                  <li><strong>Generation:</strong> The retrieved information is then passed along with the original question to the LLM, which uses this context to generate a more accurate and informed answer.</li>
              </ol>
              <h2>Why Langchain?</h2>
               <p>Langchain provides a fantastic framework for building complex LLM applications, including RAG systems. It offers components for:</p>
              <ul>
                  <li>Loading and splitting documents</li>
                  <li>Creating vector embeddings</li>
                  <li>Interfacing with vector stores (like ChromaDB, FAISS, Pinecone)</li>
                  <li>Defining retriever logic</li>
                  <li>Chaining retrieval and generation steps</li>
              </ul>
               <h2>Basic Implementation Steps (Conceptual)</h2>
               <p>A simple RAG pipeline in Langchain might look like this:</p>
               <ol><li>Load Data</li><li>Split Documents</li><li>Create Embeddings</li><li>Store Vectors</li><li>Set up Retriever</li><li>Define the Chain</li></ol>
              <p>This approach allows LLMs to answer questions based on specific documents they weren't originally trained on, significantly enhancing their usefulness for custom applications.</p>
          `
       },
       {
          id: 2,
          slug: "optimizing-llm-inference-with-vllm",
          title: "Optimizing LLM Inference with VLLM",
          excerpt: "Exploring techniques to improve the speed and efficiency of Large Language Model inference...",
          image: "/img/placeholder-blog2.jpg",
          content: `
               <p>Deploying Large Language Models (LLMs) for real-world applications often presents challenges related to inference speed and throughput. Serving requests efficiently, especially under high load, requires specialized optimization techniques. VLLM is an open-source library designed specifically to tackle these challenges.</p>
               <h2>The Inference Bottleneck</h2>
               <p>Traditional LLM inference can be slow due to the sequential nature of generating tokens (autoregressive decoding) and significant memory demands (KV cache).</p>
               <h2>How VLLM Helps</h2>
               <p>VLLM introduces several key optimizations, most notably <strong>PagedAttention</strong>:</p>
               <ul><li><strong>PagedAttention:</strong> Efficiently manages the KV cache like virtual memory pages.</li><li><strong>Continuous Batching:</strong> Maximizes GPU utilization.</li><li><strong>Optimized Kernels:</strong> Faster computations.</li></ul>
               <h2>Benefits</h2>
               <ul><li>Higher Throughput</li><li>Lower Latency</li><li>Better GPU Utilization</li></ul>
               <p>For anyone deploying LLMs at scale, exploring libraries like VLLM is crucial.</p>
          `
       },
       {
           id: 3,
           slug: "deploying-slack-bot-ai-aws",
           title: "Deploying a Slack Bot with AI Features",
           excerpt: "A step-by-step guide on integrating AI capabilities into a Slack application deployed on AWS...",
           image: "/img/placeholder-blog3.png",
           content: `
               <p>Integrating Artificial Intelligence into communication platforms like Slack can unlock powerful automation. This post outlines the conceptual steps.</p>
               <h2>Core Components</h2>
               <ol><li>Slack App Interface</li><li>Backend Application (e.g., FastAPI, Flask)</li><li>AI Service/Model (e.g., OpenAI, Bedrock)</li><li>Deployment Environment (e.g., AWS Lambda, EC2, Fargate)</li></ol>
               <h2>Workflow Example</h2>
               <ul><li>User interacts in Slack.</li><li>Slack sends event to backend.</li><li>Backend calls AI service.</li><li>Backend sends AI response back to Slack.</li></ul>
               <h2>Deployment on AWS (Options)</h2>
               <ul><li>EC2</li><li>Lambda + API Gateway</li><li>Fargate/ECS</li><li>Elastic Beanstalk</li></ul>
               <h2>Key Considerations</h2>
               <ul><li>Security</li><li>Scalability</li><li>Error Handling</li><li>State Management</li></ul>
           `
       }
    ];
  
  // --- HERO TITLES ---
  export const heroTitles = ["AI/ML Engineer", "Gen-AI Application Developer", "AWS Certified ML Specialist"];
  
  // --- CONTACT INFO ---
  export const contactInfo = [
      { type: 'email', value: 'shreyaspachpute1107@gmail.com', href: 'mailto:shreyaspachpute1107@gmail.com', icon: 'FaEnvelope' },
      { type: 'linkedin', value: 'linkedin.com/in/shreyaspachpute', href: 'https://www.linkedin.com/in/shreyaspachpute/', icon: 'FaLinkedin' },
      { type: 'github', value: 'github.com/shreyas-pachpute', href: 'https://github.com/shreyas-pachpute', icon: 'FaGithub' },
      { type: 'location', value: 'Surat, Gujarat, India', href: null, icon: 'FaMapMarkerAlt' }
  ];