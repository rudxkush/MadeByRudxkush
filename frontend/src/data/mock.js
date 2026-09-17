export const portfolioData = {
  personal: {
    name: "Rudra Kushwah",
    title: "Software Engineer",
    tagline: "Building scalable systems that serve millions",
    location: "Bengaluru, Karnataka",
    email: "kushwahrudra919@gmail.com",
    phone: "+91-8008018230",
    linkedin: "https://linkedin.com/in/rudxkush",
    github: "https://github.com/rudxkush",
    resumeUrl: "https://drive.google.com/file/d/1vWdKmi0usjcw-Q14vCbgooPet6wkqijp/view?usp=sharing"
  },

  metrics: [
    { value: "2M+", label: "Users Served", description: "Banking platform reach" },
    { value: "40%", label: "Latency Reduced", description: "Core banking service optimization" },
    { value: "550+", label: "Problems Solved", description: "Competitive programming" },
    { value: "Top 2%", label: "LeetCode Rank", description: "Global ranking" }
  ],

  about: {
    summary: "Full-Stack Software Engineer with experience in DSA, Low-Level Design (LLD), and High-Level Design (HLD). Skilled in building scalable distributed systems using C++, Python, Java, and Spring Boot. Focused on backend development, system design, and performance optimization. Strong foundation in the mathematical aspects of machine learning, with hands-on work in supervised and unsupervised learning, including building LLMs from scratch.",
    philosophy: "I believe in writing code that's not just functional, but maintainable, performant, and scalable. Every system I build is designed with reliability and user experience at its core.",
    focus: [
      "Distributed Systems & Microservices",
      "Performance Optimization",
      "Cloud Infrastructure (AWS/Azure)",
      "Machine Learning & NLP"
    ]
  },

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Intech Systems Pvt. Ltd.",
      location: "Ahmedabad, GJ",
      period: "May 2025 – Nov 2025",
      type: "Full-time",
      achievements: [
        "Developed C# Copilot extension for Nestlé, boosting workflow efficiency 40% across sales teams",
        "Built serverless pipeline with Python and Azure Functions, processing 10K+ records, removing manual errors",
        "Implemented CI/CD pipeline using GitHub Actions, Docker, Kubernetes, cutting deployment time 30%"
      ],
      technologies: ["C#", "Python", "TypeScript", "Azure", "SQL", "gRPC", "Docker", "Kubernetes", "GitHub Actions"],
      impact: {
        efficiency: "40%",
        recordsProcessed: "10K+",
        deploymentReduction: "30%"
      }
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "Translab Technologies Pvt Ltd",
      location: "Bangalore, KA",
      period: "Jun 2024 - Nov 2024",
      type: "Internship",
      achievements: [
        "Engineered Java/Spring Boot APIs for ICICI Bank's platform, serving over 2M+ users",
        "Slashed API latency by 40% for a core banking service by optimizing PostgreSQL queries",
        "Developed a client-facing dashboard in React.js, shipping a key feature for HDFC Bank"
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "React.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
      impact: {
        users: "2M+",
        latencyReduction: "40%",
        clientsServed: "2"
      }
    },
    {
      id: 3,
      title: "Software Development Intern",
      company: "Rudder Soft Pvt. Ltd.",
      location: "Ghaziabad, UP",
      period: "Dec 2023 – Jan 2024",
      type: "Internship",
      achievements: [
        "Optimized Flutter widget tree, cutting render time 25% and improving UX for 1K+ Daily active users",
        "Integrated REST APIs and refined NoSQL flows, reducing query latency 20%"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "MongoDB", "RESTful APIs", "GraphQL"],
      impact: {
        renderTimeReduction: "25%",
        dau: "1K+",
        latencyReduction: "20%"
      }
    }
  ],

  projects: [
    {
      id: 1,
      title: "GPT-Based Spam Detection Model",
      period: "Jan 2025 - Mar 2025",
      description: "Implemented GPT-2 model from scratch including Transformer blocks, custom tokenizer, and training pipeline for spam detection.",
      achievements: [
        "Built GPT-2 (small) architecture entirely from scratch with custom Transformer blocks",
        "Engineered multi-head attention mechanism and Byte Pair Encoding tokenizer",
        "Achieved 97.5% validation accuracy and 95.7% test accuracy",
        "Improved model convergence by 20% through custom optimization techniques"
      ],
      technologies: ["Python", "PyTorch", "Transformers", "NLP", "NumPy"],
      links: {
        github: "https://github.com/rudxkush/gpt2-spam-classifier",
        demo: null
      },
      architecture: {
        type: "Transformer-based NLP",
        components: ["Custom Tokenizer", "Multi-head Attention", "Feed-forward Networks", "Training Pipeline"]
      },
      metrics: {
        validationAccuracy: "97.5%",
        testAccuracy: "95.7%",
        convergenceImprovement: "20%"
      }
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      period: "Nov 2024 - Dec 2024",
      description: "Built interactive 3D portfolio using WebGL2 with custom loaders, shadow mapping, and in-app CLI for live model editing.",
      achievements: [
        "Developed custom WebGL2 rendering engine with optimized shadow mapping",
        "Built in-app Command Line Interface for live 3D model editing",
        "Optimized loaders achieving 30% faster rendering performance",
        "Reduced iteration cycles by 50% through real-time editing capabilities"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WebGL2", "GLSL"],
      links: {
        github: null,
        demo: "https://rudxkush.github.io/Portfolio/content.html"
      },
      architecture: {
        type: "3D Web Application",
        components: ["WebGL2 Renderer", "Custom CLI", "Shadow Mapping", "Model Loader"]
      },
      metrics: {
        renderingImprovement: "30%",
        iterationReduction: "50%"
      }
    },
    {
      id: 3,
      title: "Gun Game",
      period: "2024",
      description: "A real-time 2D shooting game built from scratch using JavaScript, HTML and CSS, featuring collision detection, event-driven input handling, projectile physics, and dynamic score tracking.",
      achievements: [
        "Built real-time 2D shooting game with collision detection system",
        "Implemented event-driven input handling and projectile physics",
        "Developed modular architecture separating rendering, game logic, and state management",
        "Created dynamic score tracking and game state management"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      links: {
        github: "https://github.com/rudxkush/gun-game",
        demo: null
      },
      architecture: {
        type: "Game Development",
        components: ["Collision Detection", "Physics Engine", "Rendering System", "State Management"]
      },
      metrics: {
        architecture: "Modular",
        realTime: "Yes"
      }
    },
    {
      id: 4,
      title: "IIIT-Precog-Assessment",
      period: "2024",
      description: "Investigated spurious correlation learning in Convolutional Neural Networks and implemented debiasing strategies including feature masking, data augmentation, and regularization techniques.",
      achievements: [
        "Investigated spurious correlation learning in CNNs",
        "Implemented feature masking and data augmentation strategies",
        "Applied regularization techniques for robust representation learning",
        "Enforced debiasing strategies to improve model generalization"
      ],
      technologies: ["Python", "PyTorch", "CNNs", "Computer Vision", "Deep Learning"],
      links: {
        github: "https://github.com/rudxkush/PRECOG-CV-TASK-0",
        demo: null
      },
      architecture: {
        type: "Research Project",
        components: ["Feature Masking", "Data Augmentation", "Regularization", "Debiasing"]
      },
      metrics: {
        techniques: "Multiple",
        focus: "Robustness"
      }
    }
  ],

  skills: {
    languages: [
      { name: "C/C++", proficiency: 85 },
      { name: "Python", proficiency: 90 },
      { name: "Java", proficiency: 85 },
      { name: "JavaScript/TypeScript", proficiency: 88 },
      { name: "SQL", proficiency: 82 },
      { name: "C#", proficiency: 80 }
    ],
    frameworks: [
      { name: "React.js", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Flask", category: "Backend" },
      { name: "PyTorch", category: "ML/AI" },
      { name: "SwiftUI", category: "Mobile" },
      { name: "Flutter", category: "Mobile" }
    ],
    tools: [
      { name: "AWS", category: "Cloud" },
      { name: "Azure", category: "Cloud" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "Jenkins", category: "DevOps" },
      { name: "Grafana", category: "Monitoring" },
      { name: "Prometheus", category: "Monitoring" }
    ],
    databases: [
      { name: "PostgreSQL", type: "SQL" },
      { name: "MySQL", type: "SQL" },
      { name: "MongoDB", type: "NoSQL" },
      { name: "DynamoDB", type: "NoSQL" },
      { name: "Firebase", type: "NoSQL" }
    ],
    competencies: [
      "Data Structures & Algorithms",
      "System Design (HLD/LLD)",
      "Object-Oriented Programming",
      "Microservices Architecture",
      "RESTful APIs",
      "gRPC",
      "CI/CD Pipelines",
      "Agile/Scrum"
    ]
  },

  achievements: [
    {
      id: 1,
      title: "Portkey AI Builders Challenge",
      organization: "Portkey AI",
      position: "1st Runner Up",
      date: "Jan 2026",
      description: "Developed advanced AI guardrails for Grok, securing 1st Runner Up position",
      link: "#"
    },
    {
      id: 2,
      title: "Competitive Programming",
      organization: "LeetCode",
      position: "Top 2% Globally",
      date: "Ongoing",
      description: "Peak rating of 2200 on LeetCode. Solved 550+ problems across CodeChef, Codeforces, and LeetCode",
      link: null,
      links: [
        { name: "LeetCode", url: "https://leetcode.com/u/Rudxkush/" },
        { name: "InterviewBit", url: "https://www.interviewbit.com/profile/rudxkush/" }
      ]
    },
    {
      id: 3,
      title: "YouTube Content Creator",
      organization: "YouTube",
      position: "Educational Content",
      date: "Ongoing",
      description: "Started a YouTube channel simplifying coding and DSA problems",
      link: "https://www.youtube.com/@CodeWithRudxkush"
    }
  ],

  education: {
    institution: "Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    location: "Bhubaneswar, Odisha",
    period: "Sep 2021 - May 2025"
  }
};
