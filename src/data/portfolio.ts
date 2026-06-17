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
  "MSc Artificial Intelligence student and aspiring AI Engineer with hands-on experience building NLP, computer vision, and neural network systems in Python and PyTorch. Six years at TCS applying SQL-driven analytics, root cause analysis, and performance dashboards that cut repeat incidents by 30%. Skilled in ML pipelines, transformer fine-tuning, and prompt engineering for LLM-based workflows. Eager to deploy data-driven AI solutions with measurable impact.";

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
    title: "AI & Machine Learning",
    items: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Hugging Face Transformers",
      "NLP & Computer Vision",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Prompt Engineering",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "React", "Next.js", "Java", "SQL"],
  },
  {
    title: "Data & Cloud",
    items: [
      "MySQL",
      "Google Cloud",
      "GitHub Actions",
      "Data Analysis & Visualization",
    ],
  },
  {
    title: "Engineering Practices",
    items: ["Git", "JUnit", "Root Cause Analysis", "Dashboarding", "Figma"],
  },
] as const;

export const experience = [
  {
    role: "Major Incident Manager",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad",
    period: "Jul 2019 – Aug 2025",
    highlightKeywords: [
      "SQL",
      "root cause analysis",
      "30%",
      "repeat incidents",
      "dashboards",
      "data-driven",
      "analytics",
      "performance monitoring",
      "SLA",
      "training programs",
      "actionable insights",
      "cross-functional",
    ],
    highlights: [
      "Applied SQL-driven root cause analysis and structured reporting to surface systemic failure patterns, contributing to a 30% reduction in repeat incidents.",
      "Built and maintained performance monitoring dashboards for SLA tracking and data-driven operational decisions.",
      "Designed internal training programs on data-driven incident analysis, dashboarding, and analytical troubleshooting.",
      "Led cross-functional incident response while translating complex operational data into actionable insights for leadership.",
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

export const projectCategories = [
  "AI & Machine Learning",
  "Intelligent Systems",
  "Software Engineering",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects = [
  {
    name: "Google Maps Review Rating Classification — Applied Text Analytics (F21AA)",
    category: "AI & Machine Learning" as ProjectCategory,
    description:
      "Built a multi-class NLP system to predict 1–5 star ratings from Google Maps review text. Benchmarked text preprocessing pipelines, TF-IDF features, classical models, BiLSTM sequence models, and fine-tuned transformers (DistilBERT, RoBERTa) with stratified cross-validation, topic modelling, and Kaggle ensemble submissions.",
    githubUrl: "https://github.com/sagarr57/F21AA_CW2_PG_Group4",
    keywords: [
      "multi-class",
      "Google Maps",
      "text preprocessing",
      "TF-IDF",
      "BiLSTM",
      "DistilBERT",
      "RoBERTa",
      "Kaggle",
      "cross-validation",
      "topic modelling",
    ],
    tech: [
      "Python",
      "NLP",
      "NLTK",
      "scikit-learn",
      "PyTorch",
      "Transformers",
      "TF-IDF",
    ],
  },
  {
    name: "AI-Driven Crop Recommendation and Disease Detection",
    category: "AI & Machine Learning" as ProjectCategory,
    description:
      "Developed dual ML pipelines: crop recommendation from soil nutrients (N, P, K) and climate parameters, plus leaf-image disease classification across 38 classes using deep learning. Compared feature engineering and model architectures for agricultural decision support.",
    githubUrl: "https://github.com/harshithalakshmi98/PG-Group-3",
    keywords: [
      "soil nutrients",
      "climate parameters",
      "disease detection",
      "38 disease classes",
      "deep learning",
      "classification",
      "feature engineering",
    ],
    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "scikit-learn",
      "Classification",
    ],
  },
  {
    name: "Biologically-Inspired ANN + PSO for Concrete Strength Prediction",
    category: "AI & Machine Learning" as ProjectCategory,
    description:
      "Implemented a multi-layer ANN from scratch with configurable layers and activation functions, then optimized weights using a PSO algorithm with informant topology on the UCI Concrete Compressive Strength dataset. Evaluated against baseline regression approaches.",
    githubUrl: "https://github.com/harshithalakshmi98/F21BC_PG09",
    keywords: [
      "ANN from scratch",
      "activations",
      "PSO algorithm",
      "informant topology",
      "UCI dataset",
      "regression",
    ],
    tech: ["Python", "ANN", "PSO", "NumPy", "Machine Learning"],
  },
  {
    name: "Lunar Mission Visualizer — PDDL Planning Simulator",
    category: "Intelligent Systems" as ProjectCategory,
    description:
      "Designed an interactive frontend simulator for a lunar exploration domain with PDDL-style plans. Implemented mission selection, plan visualization, and animated SVG maps for intelligent agent coursework.",
    githubUrl:
      "https://github.com/harshithalakshmi98/Lunar-Mission-Visualizer",
    keywords: [
      "PDDL-style",
      "lunar exploration",
      "visualization",
      "SVG",
      "mission selection",
      "intelligent agents",
    ],
    tech: ["PDDL", "React", "TypeScript", "SVG", "Planning"],
  },
  {
    name: "SudoSage — Intelligent Sudoku Solver",
    category: "Intelligent Systems" as ProjectCategory,
    description:
      "Built an intelligent Sudoku solver using recursive backtracking and constraint propagation. Developed a Next.js/React interface with interactive puzzle input and step-by-step solving feedback.",
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
    name: "Coffee Shop Simulation",
    category: "Software Engineering" as ProjectCategory,
    description:
      "Built a Coffee Shop ordering and simulation system in Java (Maven) with Java Swing, using object-oriented design for menus, customer orders, billing logic, and CSV-backed data. Included thread-safe event logging and JUnit tests for core domain behavior.",
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
    category: "Software Engineering" as ProjectCategory,
    description:
      "Built an Auction House Inventory Management System in Java and Java Swing, modelling collectibles such as furniture, sculptures, and coins. Developed Swing UI for inventory management, sorting, CSV persistence, and statistics outputs.",
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
] as const;

export const certifications = [
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    url: "https://www.linkedin.com/learning/certificates/4985edf4cef6d31bc473062e4d3bbe8606c25c3d23d94430fb8509aa9281ae74",
  },
  {
    name: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    url: "https://www.udemy.com/certificate/UC-48f03065-5522-489b-a0fd-481b3947a829/",
  },
] as const;
