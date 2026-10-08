export const personalInfo = {
  name: "Garvit Agarwal",
  role: "B.Tech Student",
  subtitle: "B.Tech Student | AI & Technology Enthusiast",
  college: "JECRC University",
  location: "Jaipur, INDIA",
  email: "garvit.26been0092@jecrcu.edu.in",
  linkedin: "https://www.linkedin.com/in/garvit-agarwal-300916420/",
  github: "https://github.com/",
  status: "Available for Internships & Projects",
  shortBio:
    "I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects.",
  detailedBio: [
    "I am currently pursuing my Bachelor of Technology (B.Tech) at JECRC University, Jaipur. My curiosity drives me to delve into modern software engineering, intelligent systems, and digital tools that empower users.",
    "With a strong foundation in programming and an active focus on Artificial Intelligence and Web Technologies, I love translating complex problems into clean, accessible, and responsive digital solutions.",
    "Beyond coding, I have a deep passion for digital productivity, workflow optimization, and continuous learning—always eager to collaborate, innovate, and contribute to impactful tech initiatives."
  ],
  stats: [
    { label: "Degree Focus", value: "B.Tech" },
    { label: "Core Skills", value: "8+" },
    { label: "Featured Projects", value: "3+" },
    { label: "Location", value: "Jaipur, IN" }
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan, INDIA",
    period: "2024 – Present",
    status: "Currently Pursuing",
    description:
      "Engaged in comprehensive technical education emphasizing computer science principles, practical software engineering, artificial intelligence methodologies, and modern problem solving.",
    learningAreas: [
      "Artificial Intelligence & Machine Learning Basics",
      "Data Structures & Algorithms (DSA)",
      "Full-Stack Web Development",
      "Object-Oriented Programming (Python)",
      "Database Management Systems (DBMS)",
      "Digital Productivity & Modern Developer Tooling"
    ]
  }
];

export const skillsData = [
  {
    name: "HTML",
    category: "Web Development",
    level: "Advanced",
    description: "Semantic markup, modern HTML5 features, SEO optimization, and web accessibility standards.",
    icon: "Code2",
    badgeColor: "from-orange-500 to-amber-500"
  },
  {
    name: "CSS",
    category: "Web Development",
    level: "Advanced",
    description: "Modern CSS3, responsive layouts, Flexbox, CSS Grid, custom animations, and Tailwind CSS framework.",
    icon: "Palette",
    badgeColor: "from-blue-500 to-cyan-500"
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "Proficient",
    description: "ES6+ modern syntax, asynchronous operations, DOM manipulation, APIs, and dynamic interactive interfaces.",
    icon: "FileCode2",
    badgeColor: "from-yellow-400 to-amber-500"
  },
  {
    name: "Python",
    category: "Programming & AI",
    level: "Proficient",
    description: "Core syntax, data structures, scripting, algorithm design, and foundation for AI/ML development.",
    icon: "Terminal",
    badgeColor: "from-emerald-500 to-teal-600"
  },
  {
    name: "Artificial Intelligence",
    category: "AI & Intelligence",
    level: "Intermediate",
    description: "Understanding intelligent systems, machine learning fundamentals, automated reasoning, and pattern recognition.",
    icon: "Brain",
    badgeColor: "from-violet-500 to-purple-600"
  },
  {
    name: "Generative AI",
    category: "AI & Intelligence",
    level: "Intermediate",
    description: "Prompt engineering, Large Language Models (LLMs), AI tool integration, and next-generation workflow enhancements.",
    icon: "Sparkles",
    badgeColor: "from-pink-500 to-rose-500"
  },
  {
    name: "Web Development",
    category: "Core Tech",
    level: "Proficient",
    description: "End-to-end modern frontend creation, component-based architectures, responsive design, and version control.",
    icon: "Globe",
    badgeColor: "from-indigo-500 to-blue-600"
  },
  {
    name: "Digital Productivity",
    category: "Productivity",
    level: "Advanced",
    description: "Workflow automation, digital organization systems (Notion/Markdown), time blocking, and developer productivity tools.",
    icon: "Zap",
    badgeColor: "from-cyan-400 to-teal-500"
  }
];

export const projectsData = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    tagline: "Modern High-Performance Developer Portfolio",
    shortDescription:
      "A modern, responsive personal portfolio website showcasing academic profile, skills, projects, and achievements with sleek dark/light mode and fluid animations.",
    fullDescription:
      "Engineered a premium personal portfolio website utilizing React, Vite, and Tailwind CSS. Features dynamic theme switching, glassmorphic UI components, seamless smooth scrolling, modular data architecture, and full mobile responsiveness. Optimized for swift Vercel deployments and high accessibility scores.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Responsive Design"],
    category: "Web Development",
    featured: true,
    highlights: [
      "Custom dark/light mode toggle with theme persistence",
      "Interactive project inspection modal & filterable skill matrix",
      "Fully responsive navigation with mobile hamburger drawer",
      "Integrated contact section with one-click email copying"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/",
    badge: "Featured"
  },
  {
    id: "ai-website-project",
    title: "AI Website Project",
    tagline: "Intelligent Web Platform Powered by Generative AI",
    shortDescription:
      "An intelligent web application leveraging Generative AI capabilities, smart prompt workflows, and an intuitive user interface to solve digital tasks effortlessly.",
    fullDescription:
      "Developed an AI-driven web application exploring modern Generative AI interactions. The platform accepts user context, crafts tailored prompts, and delivers intelligent outputs through a streamlined, reactive interface. Focuses on practical AI integration for everyday productivity and learning.",
    technologies: ["Python", "Generative AI", "JavaScript", "REST APIs", "Modern UI"],
    category: "Artificial Intelligence",
    featured: true,
    highlights: [
      "Smart prompt templating and interactive query handling",
      "Modern clean UI with real-time feedback and state management",
      "Modular architecture enabling seamless AI model switching",
      "Designed for students and developers seeking swift AI-assisted answers"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/",
    badge: "AI Powered"
  },
  {
    id: "student-productivity-project",
    title: "Student Productivity Project",
    tagline: "Comprehensive Academic Task & Workflow Management Hub",
    shortDescription:
      "A tailored digital workspace designed for students to organize academic tasks, track study schedules, execute focus sessions, and streamline learning resources.",
    fullDescription:
      "Created a dedicated student productivity application addressing common academic challenges like deadline tracking, study distraction, and resource scatter. Incorporates a smart task organizer, customizable Pomodoro focus timer, syllabus milestone tracker, and quick notes system with persistent local storage.",
    technologies: ["Web Development", "JavaScript", "Tailwind CSS", "Local Storage", "Productivity"],
    category: "Productivity",
    featured: true,
    highlights: [
      "Interactive task planner with priority badges and completion states",
      "Built-in Pomodoro focus timer with audio-visual notifications",
      "Resource bookmarking and quick study notes organizer",
      "Zero-latency persistent local data storage"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/",
    badge: "Productivity"
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Foundations of Artificial Intelligence",
    issuer: "Online Learning / University Specialization",
    date: "2024",
    category: "Certifications",
    description: "Completed comprehensive coursework covering search algorithms, machine learning basics, knowledge representation, and modern AI paradigms.",
    badge: "Certification",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    id: 2,
    title: "Python Programming Specialization",
    issuer: "Technical Education & Applied Projects",
    date: "2024",
    category: "Courses",
    description: "Mastered Python core data structures, object-oriented concepts, automated scripting, and fundamental problem-solving techniques.",
    badge: "Course",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    id: 3,
    title: "Modern Web Development Bootcamp",
    issuer: "Frontend Engineering Track",
    date: "2024",
    category: "Courses",
    description: "In-depth practical experience with HTML5, responsive CSS3 architectures, modern JavaScript (ES6+), and UI/UX design standards.",
    badge: "Course",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    id: 4,
    title: "University Hackathon Participant & Innovator",
    issuer: "JECRC University Tech Fest",
    date: "2024",
    category: "Hackathons",
    description: "Collaborated in an intensive hackathon environment, ideating and prototyping technical solutions for real-world campus and student challenges.",
    badge: "Hackathon",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: 5,
    title: "Academic Excellence & Continuous Innovation",
    issuer: "Department of Computer Science & Engineering",
    date: "2024",
    category: "Awards",
    description: "Recognized for proactive engagement in technology clubs, peer problem-solving, and dedication to building practical software projects.",
    badge: "Award",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  }
];
