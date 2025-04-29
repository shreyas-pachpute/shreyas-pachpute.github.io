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
      id: 'med-diagnosis-ai',
      title: "AI-Powered Medical Diagnosis Assistant",
      description: "Developed a deep learning system analyzing medical imaging with 94% accuracy in early disease detection, deployed in partner clinics.",
      image: "/img/placeholder-project1.png",
      tags: ["TensorFlow", "PyTorch", "DICOM Processing", "Grad-CAM", "AWS SageMaker"],
      category: ["gen-ai", "healthcare"],
      github: null,
      demoType: "modal",
      demoInfo: {
        title: "Radiology Assistant Demo",
        text: "CNN-based system trained on 50k+ annotated scans detects 12 pathologies. Features explainable AI overlays and integrates with hospital PACS systems. Achieved 30% faster diagnosis in clinical trials.",
        image: "/img/projects/med-ai-interface.jpg"
      }
    },
    {
      id: 'autonomous-drone-nav',
      title: "Autonomous Delivery Drone Navigation System",
      description: "Created vision-based navigation using reinforcement learning, enabling 15km range obstacle avoidance in urban environments.",
      image: "/img/projects/drone-nav-system.jpg",
      tags: ["Python", "OpenCV", "ROS", "YOLOv8", "Gazebo Simulation"],
      category: ["robotics", "computer-vision"],
      github: "https://github.com/shreyas-pachpute/Drone-Navigation-3D-Mapping",
      demoType: "video",
      demoInfo: {
        title: "Urban Delivery Simulation",
        text: "Real-time object detection and path planning system processes sensor fusion data (LiDAR + camera) at 30FPS. Demonstrated 98% successful delivery rate in simulated city environments.",
        videoUrl: "/videos/drone-sim-demo.mp4"
      }
    },
    {
      id: 'cyber-threat-detection',
      title: "Real-time Network Anomaly Detection Engine",
      description: "Built ML pipeline processing 1M+ events/sec with 99.97% recall for zero-day attack detection in enterprise networks.",
      image: "/img/projects/cyber-ai-core.jpg",
      tags: ["Python", "Isolation Forest", "Apache Kafka", "Prometheus", "Grafana"],
      category: ["ml", "cybersecurity"],
      github: "https://github.com/shreyas-pachpute/ML-Cyber-Defense",
      demoType: "live",
      demoInfo: {
        title: "Live Attack Simulation Dashboard",
        text: "Multi-model ensemble detects novel attack patterns while maintaining <0.01% FP rate. Features automatic IOC generation and SIEM integration.",
        liveUrl: "https://cyberdemo.shreyas-tech.com"
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