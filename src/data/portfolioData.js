export const personalData = {
  name: "Skandan D Gowda",
  shortName: "SKANDAN",
  brandName: "SKANDAN.",
  title: "Computer Science Student | Aspiring Software Developer | Web Developer",
  status: "Available for Opportunities",
  college: "Atria Institute of Technology",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Information Science & Engineering",
  academicYear: "Third Year Engineering Student",
  cgpa: "8.45 / 10",
  location: "Bengaluru, Karnataka, India",
  email: "skandangowda48@gmail.com",
  github: "https://github.com/Skandan45",
  linkedin: "https://linkedin.com/in/skandan-d-gowda-208b52401",
  heroBio: "A passionate engineering student interested in software development, web technologies, and creating interactive digital experiences.",
  aboutText: [
    "I'm Skandan D Gowda, a third-year Bachelor of Engineering student at Atria Institute of Technology.",
    "I am passionate about programming, software development, and modern web technologies.",
    "I enjoy learning new technologies, building practical projects, and exploring creative ways to solve problems.",
    "My interests include software development, web applications, artificial intelligence, and interactive digital experiences.",
    "I continuously work on improving my technical knowledge and developing real-world applications."
  ],
  photos: {
    profile: "/images/skandan_profile.jpg",
    lifestyle: "/images/skandan_lifestyle.jpg"
  }
};

export const technicalBadges = ["JAVA", "PYTHON", "REACT", "SQL"];

export const technicalSkills = [
  {
    category: "Programming",
    description: "Core algorithmic problem solving, object-oriented design, and robust backend engineering.",
    skills: [
      {
        name: "Java",
        badge: "OOP & Systems",
        description: "Object-oriented software development, data structures, modular class architectures, and native Android application development.",
        icon: "Coffee",
        color: "#F59E0B",
        tags: ["OOP", "Data Structures", "Android Studio", "Multithreading"]
      },
      {
        name: "Python",
        badge: "Backend & AI/NLP",
        description: "Full-stack web services with Flask, data manipulation, REST API architectures, and sentiment analysis / NLP logic.",
        icon: "Terminal",
        color: "#38BDF8",
        tags: ["Flask", "NLP Concepts", "REST APIs", "Automation"]
      }
    ]
  },
  {
    category: "Frontend",
    description: "Modern, reactive, and accessible user interfaces with clean state management.",
    skills: [
      {
        name: "React.js",
        badge: "Modern UI / SPA",
        description: "Component-driven architecture, interactive state management, responsive UI designs, hooks, and seamless API integrations.",
        icon: "Atom",
        color: "#22D3EE",
        tags: ["Components", "Hooks", "Vite", "Tailwind CSS", "Three.js/Fiber"]
      }
    ]
  },
  {
    category: "Database",
    description: "Relational data modeling, ACID transactions, and optimized query execution.",
    skills: [
      {
        name: "SQL",
        badge: "Relational DBMS",
        description: "Schema design, relational querying, CRUD operations, indexing, and persistent database optimization using SQLite and RDBMS engines.",
        icon: "Database",
        color: "#8B5CF6",
        tags: ["Schema Design", "SQLite", "Indexing", "Query Optimization"]
      }
    ]
  }
];

export const internships = [
  {
    id: "skillcraft",
    company: "SkillCraft Technology",
    role: "Web Development Intern",
    duration: "15 August 2026 – 14 September 2026",
    credentialId: "SCT/AUG26/5027",
    date: "15 September 2026",
    signatory: "Pranav Bansal, Tech Lead",
    highlight: "Received Certificate of Completion & Official Letter of Recommendation",
    achievements: [
      "Completed a rigorous one-month web development internship delivering responsive web solutions.",
      "Received an official Certificate of Completion acknowledging outstanding project execution.",
      "Awarded a prestigious Letter of Recommendation highlighting dedication, initiative, and high-level professionalism.",
      "Recognized by Tech Lead Pranav Bansal for exceptional technical performance, aptitude for learning, and problem-solving abilities."
    ],
    certificateImage: "/certificates/skillcraft_internship_cert.png",
    recommendationImage: "/certificates/skillcraft_recommendation_letter.png",
    recommendationPdf: "/certificates/skillcraft_recommendation_letter.pdf"
  },
  {
    id: "inamigos",
    company: "InAmigos Foundation",
    role: "Web Development Intern",
    duration: "2 August 2026 – 14 August 2026",
    date: "15 August 2026",
    signatory: "Ms. Iniya Radhakrishnan, Deputy HR Director",
    highlight: "CSR-1 Registered & 80G Certified Non-Profit Technical Internship",
    achievements: [
      "Successfully completed a targeted Web Development Internship at InAmigos Foundation.",
      "Analyzed web workflows, digital awareness infrastructure, and optimized layout accessibility.",
      "Recognized with an official Certificate of Internship signed by Deputy HR Director Ms. Iniya Radhakrishnan."
    ],
    certificateImage: "/certificates/inamigos_internship_cert.jpeg"
  }
];

export const featuredProject = {
  name: "MOODFLIX",
  tagline: "Mood-Based Movie Recommendation System",
  category: "Full-Stack AI Web Platform",
  overview:
    "MoodFlix is a mood-based movie recommendation platform designed to help users discover movies according to their current emotions. The platform combines mood selection, natural language processing concepts, and movie catalogue information to provide relevant movie recommendations.",
  description:
    "Designed and engineered to eliminate choice fatigue in streaming entertainment, MoodFlix matches user sentiment directly to cinematic hits. By integrating real-time TMDB catalog streams with emotion-detection algorithms, users receive tailored movie suggestions complete with metadata, synopses, ratings, and embedded trailers.",
  technologies: [
    "Python",
    "Flask",
    "React / JavaScript",
    "SQLite",
    "TMDB REST API",
    "HTML5 & Modern CSS",
    "Render Cloud Hosting",
    "Git & GitHub"
  ],
  keyMetrics: [
    { label: "Recommendations Served", value: "100+ Movies" },
    { label: "API Response Time", value: "< 2.0 Seconds" },
    { label: "Recommendation Relevance", value: "+30% Uplift" },
    { label: "Cloud Uptime", value: "99.9% on Render" }
  ],
  features: [
    {
      title: "Interactive Mood Engine",
      description: "Intuitive emotional palette (Happy, Sad, Action, Romantic, Horror, Motivational) to instantly trigger tailored cinema streams."
    },
    {
      title: "Natural Language Sentiment Analysis",
      description: "Users can express custom thoughts or feelings in plain text, mapped via NLP sentiment logic to cinematic themes."
    },
    {
      title: "Live TMDB Catalog Integration",
      description: "Direct REST API pipeline fetching poster art, cast details, community ratings, and synchronized HD trailer links."
    },
    {
      title: "User Workspace & Watchlist",
      description: "Personalized history journal, secure user session management, and persistent SQLite database store."
    }
  ],
  liveDemoUrl: "https://moodmoviegenerator.onrender.com",
  githubUrl: "https://github.com/Skandan45/MoodMovieGenerator",
  screenshots: [
    {
      title: "Hero Showcase & Onboarding",
      src: "/projects/moodflix_hero.png",
      caption: "High-contrast cinematic landing interface with instant mood entry points."
    },
    {
      title: "Dashboard & NLP Analysis Workspace",
      src: "/projects/moodflix_dashboard.png",
      caption: "Emotion selector cards and natural language prompt processing engine."
    },
    {
      title: "System Architecture & Pipeline",
      src: "/projects/moodflix_architecture.png",
      caption: "Three-tier architecture: NLP Sentiment Engine, Flask Backend, TMDB Client."
    },
    {
      title: "Curated Movie Catalog & Trailers",
      src: "/projects/moodflix_catalog.png",
      caption: "Real-time cinema grid with instant trailer playback and watchlist additions."
    },
    {
      title: "Platform Overview",
      src: "/projects/moodflix_overview.png",
      caption: "Full verified platform screenshot from developer deployment."
    }
  ]
};

export const certifications = [
  {
    id: "gen-ai",
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "27 August 2026",
    verificationId: "b314cff8866c6321bfad2b4ddad5c061af1fb3c37a229a19b98454c5a3cac4fa",
    signatory: "Shea Hanson, Head of Learning Content Strategy",
    type: "AI & Innovation",
    skills: ["Generative AI Tools", "Artificial Intelligence (AI)", "Prompt Engineering"],
    fileUrl: "/certificates/linkedin_generative_ai_cert.pdf",
    isPdf: true,
    description: "Comprehensive foundational certification on Generative AI paradigms, foundational transformer models, and real-world developer tools."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata / Forage",
    date: "17 August 2026",
    verificationId: "6a83135c02f6fd33b2c5b8d5",
    signatory: "Tom Brunskill, Co-Founder of Forage",
    type: "Security & Systems",
    skills: ["IAM Fundamentals", "Security Strategy Assessment", "Custom IAM Solutions", "Platform Integration"],
    fileUrl: "/certificates/forage_cybersecurity_cert.pdf",
    isPdf: true,
    description: "Industry simulation addressing identity and access management (IAM), attack surface containment, and custom security architecture integration."
  },
  {
    id: "skillcraft-cert",
    title: "Web Development Internship Certificate",
    issuer: "SkillCraft Technology",
    date: "15 September 2026",
    verificationId: "SCT/AUG26/5027",
    signatory: "SkillCraft Technology MSME / Verifiable QR",
    type: "Professional Engineering",
    skills: ["Full-Stack Web Dev", "Frontend Architecture", "API Integration", "Responsive Design"],
    fileUrl: "/certificates/skillcraft_internship_cert.png",
    isPdf: false,
    description: "Official completion credential validating one month of intensive production web development and client-ready feature delivery."
  },
  {
    id: "inamigos-cert",
    title: "Web Development Internship Certificate",
    issuer: "InAmigos Foundation",
    date: "15 August 2026",
    verificationId: "Reg: U85300CT2020NPL010641",
    signatory: "Ms. Iniya Radhakrishnan, Deputy HR Director",
    type: "Social Impact & Web Tech",
    skills: ["Web Design", "Digital Awareness Platform", "User Accessibility"],
    fileUrl: "/certificates/inamigos_internship_cert.jpeg",
    isPdf: false,
    description: "Internship certification recognizing web architecture analysis, responsive design, and non-profit digital campaign workflows."
  },
  {
    id: "skillcraft-lor",
    title: "Letter of Recommendation",
    issuer: "SkillCraft Technology",
    date: "15 September 2026",
    verificationId: "Ref: SCT/AUG26/5027",
    signatory: "Pranav Bansal, Tech Lead",
    type: "Executive Endorsement",
    skills: ["Professionalism", "Complex Problem Solving", "Technical Excellence", "Fast Aptitude"],
    fileUrl: "/certificates/skillcraft_recommendation_letter.png",
    pdfUrl: "/certificates/skillcraft_recommendation_letter.pdf",
    isPdf: false,
    description: "Executive commendation from Tech Lead Pranav Bansal citing exemplary work ethic, profound passion for technology, and exceptional initiative."
  }
];

export const education = [
  {
    institution: "Atria Institute of Technology",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Information Science & Engineering",
    period: "2024 – 2028 (Expected)",
    status: "Third Year Engineering Student",
    cgpa: "Current CGPA: 8.45 / 10",
    highlights: [
      "Strong academic standing with an 8.45 CGPA across core engineering semesters.",
      "Core coursework: Data Structures, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Web Technologies.",
      "Active participant in technical symposiums, hackathons, and software engineering initiatives."
    ]
  },
  {
    institution: "Excellent PU College",
    location: "Moodubidire, Karnataka",
    degree: "Pre-University Course (PUC — 12th Standard)",
    field: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
    period: "Completed 2024",
    status: "Graduated with Distinction",
    cgpa: "Percentage: 86%",
    highlights: [
      "Mastered foundational calculus, analytical physics, and computer fundamentals.",
      "Ranked among top performers in competitive pre-university assessments."
    ]
  },
  {
    institution: "Kuvempu Vidyaniketan",
    location: "Karnataka",
    degree: "10th Standard (Secondary Education)",
    field: "ICSE Board",
    period: "Completed 2022",
    status: "Graduated with High Honors",
    cgpa: "Percentage: 92%",
    highlights: [
      "Achieved 92% with academic distinction in mathematics and science sciences.",
      "Exemplary record in logic, mathematics, and extracurricular leadership."
    ]
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
