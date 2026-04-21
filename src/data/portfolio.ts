export const person = {
  name: "Pedakamsetti Harshitha Lakshmi",
  title: "AI Engineer",
  location: "Dubai, UAE",
  email: "harshitha.lakshmi98@gmail.com",
  phone: "+971 5858539609",
  linkedin: "https://www.linkedin.com/in/harshitha-lakshmi-pedakamsetti-136511139/",
  /** Path under `public/` */
  profileImage: "/images/profile.jpeg",
} as const;

export const summary =
  "Software Engineer with a strong foundation in statistical analysis, machine learning, and data visualization, backed by 6+ years of experience in incident management and analytics, now pursuing an MSc in Artificial Intelligence. Passionate about leveraging AI and machine learning to enhance user experiences and optimize system performance. Skilled in React JS, JavaScript, and Python, with hands-on experience in automation, data-driven applications, and AI integration. Eager to apply AI techniques to real-world challenges.";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Programming & Development",
    items: [
      "Core Java",
      "Object-oriented design",
      "Java Swing",
      "Maven",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: ["Python", "Jupyter", "Machine Learning", "Pandas", "NumPy"],
  },
  {
    title: "Back-End & Databases",
    items: ["MySQL"],
  },
  {
    title: "Cloud & IT Operations",
    items: [
      "Google Cloud",
      "GitHub Actions",
      "ITIL Framework (Service Delivery & Operations)",
    ],
  },
  {
    title: "Testing",
    items: ["JUnit 5 with Maven Surefire"],
  },
  {
    title: "Project Management & Tools",
    items: ["Figma", "Git", "Canva", "Slack"],
  },
] as const;

export const experience = [
  {
    role: "Major Incident Manager",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad",
    period: "Jul 2019 – Aug 2025",
    highlightKeywords: [
      "end-to-end incident response",
      "data-backed",
      "30%",
      "repeat incidents",
      "root cause analysis",
      "SQL",
      "Excel",
      "continuous improvement",
      "leadership",
      "data-driven",
      "dashboarding",
      "training programs",
      "ITSM",
      "workflows",
      "performance monitoring",
      "SLA",
      "documentation",
    ],
    highlights: [
      "Led end-to-end incident response processes and initiated data-backed changes that resulted in a 30% reduction in repeat incidents.",
      "Conducted detailed root cause analysis using SQL and Excel; reported findings to leadership for continuous improvement.",
      "Designed and conducted internal training programs on data-driven incident analysis and dashboarding.",
      "Developed and maintained ITSM processes and workflows.",
      "Created performance monitoring dashboards for SLA tracking.",
      "Conducted root cause analysis and prepared detailed documentation.",
    ],
  },
] as const;

export const education = [
  {
    degree: "MSc Artificial Intelligence",
    detail: "Full time · Expected Sept 2026",
    school: "Heriot-Watt University",
    location: "Dubai, United Arab Emirates",
    coursework:
      "Machine Learning, Deep Learning, Computer Vision, NLP, Intelligent Agents",
  },
  {
    degree: "Bachelor of Technology · Computer Science & Engineering",
    detail: "2019",
    school: "Gandhi Institute of Technology and Management (GITAM)",
    location: "Visakhapatnam",
    coursework: null as string | null,
  },
] as const;

export const projects = [
  {
    name: "Lunar Mission Visualizer — PDDL Planning Simulator",
    description:
      "Designed frontend simulator for lunar exploration domain with PDDL-style plans. Implemented mission selection, visualization, and animated SVG maps.",
    githubUrl:
      "https://github.com/harshithalakshmi98/Lunar-Mission-Visualizer",
    keywords: [
      "PDDL-style",
      "lunar exploration",
      "visualization",
      "SVG",
      "mission selection",
    ],
    tech: ["PDDL", "React", "TypeScript", "SVG", "Planning"],
  },
  {
    name: "SudoSage — Intelligent Sudoku Solver",
    description:
      "Built intelligent Sudoku solver using recursive backtracking and constraint propagation. Developed Next.js/React interface with interactive puzzle input.",
    githubUrl:
      "https://github.com/harshithalakshmi98/Intelligent-Sudoku-Solver",
    keywords: [
      "recursive backtracking",
      "constraint propagation",
      "Next.js",
      "React",
      "interactive",
    ],
    tech: ["Next.js", "React", "TypeScript", "Algorithms", "Backtracking"],
  },
  {
    name: "Biologically-Inspired ANN + PSO for Concrete Strength Prediction",
    description:
      "Implemented multi-layer ANN from scratch with flexible layers and activations. Developed PSO algorithm with informant topology on UCI dataset.",
    githubUrl: "https://github.com/harshithalakshmi98/F21BC_PG09",
    keywords: [
      "ANN from scratch",
      "activations",
      "PSO algorithm",
      "informant topology",
      "UCI dataset",
    ],
    tech: ["Python", "ANN", "PSO", "NumPy", "Machine Learning"],
  },
  {
    name: "Coffee Shop Simulation",
    description:
      "Built a Coffee Shop ordering and simulation system in Java (Maven) with Java Swing, using object-oriented design for menus, categorized items, customer orders, billing/discount logic, and an order store backed by CSV-loaded data. Developed Swing desktop UIs for order-taking and live simulation view with queue, server status, and dynamic staff changes. Implemented CSV loaders, structured reporting, thread-safe singleton event log with optional file output, and JUnit for core domain and billing behavior.",
    githubUrl: "https://github.com/harshithalakshmi98/F21AS_PG04",
    keywords: [
      "Java Swing",
      "object-oriented design",
      "CSV-loaded",
      "thread-safe",
      "JUnit",
      "simulation",
    ],
    tech: ["Java", "Swing", "Maven", "JUnit", "CSV", "Concurrency"],
  },
  {
    name: "Auction House Inventory System",
    description:
      "Built an Auction House Inventory Management System in Java and Java Swing, modelling collectibles such as furniture, sculptures, and coins. Developed Swing UI for inventory, sorting, editing condition and price, CSV persistence, and statistics outputs.",
    githubUrl:
      "https://github.com/harshithalakshmi98/Auction-House-Inventory-System",
    keywords: [
      "Inventory Management",
      "Java Swing",
      "collectibles",
      "CSV persistence",
      "statistics",
    ],
    tech: ["Java", "Swing", "OOP", "CSV", "Desktop UI"],
  },
  {
    name: "AI-Driven Crop Recommendation and Disease Detection",
    description:
      "Crop recommendation from soil nutrients (N, P, K) and climate parameters. Disease detection from leaf images across 38 disease classes using deep learning.",
    githubUrl: "https://github.com/harshithalakshmi98/PG-Group-3",
    keywords: [
      "soil nutrients",
      "climate parameters",
      "Disease detection",
      "38 disease classes",
      "deep learning",
    ],
    tech: ["Python", "Deep Learning", "Computer Vision", "ML", "Classification"],
  },
] as const;

export const certifications = [
  {
    name: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    url: "https://www.udemy.com/certificate/UC-48f03065-5522-489b-a0fd-481b3947a829/",
  },
] as const;
