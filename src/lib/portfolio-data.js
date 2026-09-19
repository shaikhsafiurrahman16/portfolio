/**
 * Centralized portfolio content.
 * All static data lives here so components stay clean.
 */

export const PERSONAL = {
  name: "Safi ur Rahman",
  fatherName: "Rizwan Rasheed",
  title: "Full Stack Software Engineer",
  email: "shaikhsafiurrahman16@gmail.com",
  phone: "+92 312 3811269",
  phoneHref: "tel:+923123811269",
  location: "House No. 60, Block D, Mir Khan Colony, Latifabad No. 12, Hyderabad, Pakistan",
  locationShort: "Hyderabad, Pakistan",
  github: "https://github.com/shaikhsafiurrahman16",
  githubUser: "shaikhsafiurrahman16",
  portfolio: "https://safi-dev.vercel.app",
  portfolioShort: "safi-dev.vercel.app",
  availability: "Available for Work",
};

export const TYPING_ROLES = [
  "Full Stack Software Engineer",
  "MERN Stack Developer",
  "Python & Flask Backend Engineer",
  "Flutter & Dart Mobile Developer",
  "AI & Predictive ML Developer",
  "Enterprise Software Architect",
  "RESTful API & Database Designer",
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_PARAGRAPHS = [
  "Results-driven Full Stack Software Engineer with extensive expertise in architecting scalable web applications, inventory management platforms, and intelligent automation systems. Proficient in modern JavaScript ecosystems (React.js, Node.js, Express.js), relational database design, Python Flask backends, and machine learning integration.",
  "Demonstrated history of delivering high-performance enterprise software and commercial client solutions. Experienced in developing cross-platform mobile apps with Flutter & Dart for institutional workflows such as student enrollments at the Pakistan Institute of Management (PIM).",
  "Hands-on experience in building AI-driven solutions like EarthScape AI — an intelligent climate analytics engine with machine learning regression pipelines to process environmental metrics and forecast future weather anomalies based on user-provided data parameters.",
  "Focused on writing clean, maintainable code, engineering robust database schemas across MySQL, SQLite, and MongoDB, and building production-grade digital products that create measurable business impact.",
];

export const ABOUT_PILLARS = [
  {
    title: "Clean Architecture",
    description:
      "Modular, scalable, and secure backend and frontend architecture with clear separation of concerns.",
  },
  {
    title: "Full Stack & Mobile",
    description:
      "Expertise spanning React.js web platforms, Python Flask backends, and Flutter mobile applications.",
  },
  {
    title: "AI & Data Analytics",
    description:
      "Integrates predictive machine learning models (scikit-learn, Pandas) and automated data pipelines.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Engineers multi-industry ERPs, point-of-sale systems, logistics trackers, and client platforms.",
  },
];

export const EXPERIENCE = [
  {
    company: "Fast Engineering Services & Technology (FEST) & Enterprise Solutions",
    role: "Full Stack Software Development Intern",
    duration: "2026 – Present",
    type: "Professional Experience",
    description:
      "Architected full-stack enterprise applications and automated workflow systems utilizing React.js, Node.js, and Express.js. Developed logistics solutions, mobile enrollment apps, and secure relational database architectures.",
    responsibilities: [
      "Architected full-stack enterprise applications and automated workflow systems utilizing React.js, Node.js, and Express.js.",
      "Developed and integrated robust logistics and tracking solutions including Translink Transporters and TradeLink trade platforms.",
      "Engineered core student enrollment workflows, cross-platform Flutter mobile applications, and backend modules for Pakistan Institute of Management (PIM) enterprise software.",
      "Implemented secure JWT authentication frameworks, role-based access control, and optimized complex relational database queries in MySQL and MongoDB.",
      "Integrated machine learning analytics pipelines, Python Flask prediction endpoints, and intelligent automation features.",
      "Optimized front-end rendering performance, asset delivery, and mobile UI layouts to maximize user engagement and SEO visibility.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python Flask",
      "Flutter",
      "Dart",
      "MySQL",
      "MongoDB",
      "scikit-learn",
      "JWT",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Government Degree College Latifabad No.11",
    year: "2026",
    description:
      "Completed Intermediate level education with deep focus on computer science fundamentals, programming concepts, mathematics, and analytical problem solving.",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Frontend & Mobile Development",
    icon: "layout",
    accent: "brand",
    skills: [
      { name: "React.js", level: 94 },
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 96 },
      { name: "Ant Design", level: 86 },
      { name: "Bootstrap", level: 88 },
      { name: "Redux", level: 85 },
      { name: "Responsive UI/UX", level: 95 },
    ],
  },
  {
    category: "Backend & API Engineering",
    icon: "server",
    accent: "secondary",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Python", level: 88 },
      { name: "Flask", level: 86 },
      { name: "RESTful APIs", level: 94 },
      { name: "JWT Authentication", level: 90 },
      { name: "Express Validator", level: 85 },
      { name: "Role-Based Access Control", level: 88 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    accent: "tertiary",
    skills: [
      { name: "scikit-learn", level: 86 },
      { name: "Pandas", level: 88 },
      { name: "Predictive Modeling", level: 85 },
      { name: "Weather Forecasting Models", level: 87 },
      { name: "ML Regression Pipelines", level: 84 },
      { name: "Data Processing Pipelines", level: 88 },
    ],
  },
  {
    category: "Databases & Development Tools",
    icon: "database",
    accent: "gold",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "MongoDB", level: 90 },
      { name: "SQLite", level: 88 },
      { name: "phpMyAdmin & HeidiSQL", level: 90 },
      { name: "Git & GitHub", level: 94 },
      { name: "VS Code", level: 96 },
      { name: "Postman", level: 92 },
      { name: "Vercel Deployment", level: 90 },
    ],
  },
];

export const PROJECTS = [
  {
    id: "tradestack",
    name: "TradeStack",
    category: "Enterprise Software",
    categoryBadge: "Enterprise Software",
    tagline: "Multi-Industry Inventory & Sales Management System",
    description:
      "Engineered a comprehensive inventory and multi-branch point-of-sale platform tailored for 4 distinct commercial sectors: Automotive, Kiryana, Computer Accessories, and Paper Shop. Implemented automated billing logic, customer ledgers, inventory tracking, and real-time stock auditing modules with high-performance database schemas.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Ant Design", "Tailwind CSS"],
    liveUrl: null,
    previewType: "dashboard",
    highlights: [
      "Tailored for 4 sectors: Automotive, Kiryana, Computer Accessories, Paper Shop",
      "Automated billing logic & real-time customer ledgers",
      "Inventory tracking, suppliers, warehouses & purchase orders",
      "Real-time stock auditing modules with high-performance MySQL schemas",
      "Role-based authentication & permissions",
      "Multi-branch sales & financial reporting",
    ],
    stats: [
      { label: "Commercial Sectors", value: "4 Distinct" },
      { label: "Database", value: "MySQL" },
      { label: "Architecture", value: "Multi-Branch POS" },
      { label: "Category", value: "Enterprise ERP" },
    ],
  },
  {
    id: "earthscape-ai",
    name: "EarthScape AI",
    category: "AI & Machine Learning",
    categoryBadge: "AI / Machine Learning",
    tagline: "Predictive Climate Analytics & Weather Anomaly Forecasting",
    description:
      "Designed an intelligent climate analytics engine incorporating machine learning regression pipelines to process environmental metrics and forecast weather conditions & anomalies based on user-provided input data. Built RESTful prediction endpoints in Flask coupled with dynamic atmospheric data visualization interfaces.",
    techStack: ["Python", "Flask", "scikit-learn", "Pandas", "SQLite", "React.js", "Tailwind CSS"],
    liveUrl: null,
    previewType: "ai",
    highlights: [
      "Machine learning regression pipelines for accurate weather forecasting",
      "Predicts future climate metrics & weather trends based on custom input parameters",
      "High-performance RESTful prediction endpoints powered by Python Flask",
      "Dynamic 3D & atmospheric environmental data visualization",
      "SQLite integration for historical climate metrics and prediction tracking",
      "Interactive data science dashboard built with React and Tailwind CSS",
    ],
    stats: [
      { label: "ML Engine", value: "scikit-learn" },
      { label: "Backend", value: "Python Flask" },
      { label: "Data Pipeline", value: "Pandas" },
      { label: "Model Type", value: "Predictive ML" },
    ],
  },
  {
    id: "gn-graphix",
    name: "GN Graphix",
    category: "Client Project",
    categoryBadge: "Client Project (Live)",
    tagline: "Professional Commercial Web Application",
    description:
      "Developed and deployed a high-conversion, fully responsive promotional web platform for digital branding and custom interior wall coverings. Optimized front-end rendering performance, asset delivery, and mobile UI layouts to maximize user engagement and SEO visibility.",
    techStack: ["React.js", "Tailwind CSS", "Vercel", "Framer Motion", "SEO & UI/UX"],
    liveUrl: "https://gngraphix.pk",
    previewType: "client",
    highlights: [
      "Live production website deployed at gngraphix.pk",
      "Interactive digital branding and custom interior wall coverings showcase",
      "Optimized front-end rendering performance & lightning-fast asset delivery",
      "Mobile-first pixel-perfect responsive layouts across all viewports",
      "Comprehensive SEO optimization, OpenGraph tags, and meta structures",
      "High-conversion CTA funnels and customer inquiry workflows",
    ],
    stats: [
      { label: "Live URL", value: "gngraphix.pk" },
      { label: "Deployment", value: "Production" },
      { label: "Performance", value: "99+ Score" },
      { label: "Status", value: "Live & Active" },
    ],
  },
  {
    id: "pim-app",
    name: "PIM Enterprise Suite & Mobile App",
    category: "Mobile & Enterprise",
    categoryBadge: "Mobile & Enterprise",
    tagline: "Pakistan Institute of Management Student Enrollment Platform",
    description:
      "Engineered core student enrollment workflows, cross-platform Flutter mobile applications, and backend modules for Pakistan Institute of Management (PIM) enterprise software. Implemented secure JWT authentication frameworks and relational MySQL query optimization.",
    techStack: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL", "JWT Authentication"],
    liveUrl: null,
    previewType: "mobile",
    highlights: [
      "Cross-platform mobile application developed with Flutter & Dart",
      "Student enrollment, registration & course application workflows",
      "Secure JWT authentication frameworks with role-based access control",
      "Real-time student records, fee status & academic progress tracking",
      "Optimized relational database queries in MySQL for high-concurrency",
      "Seamless REST API integration between mobile app and backend services",
    ],
    stats: [
      { label: "Mobile App", value: "Flutter & Dart" },
      { label: "Client", value: "PIM Institute" },
      { label: "Backend", value: "Node / Express" },
      { label: "Database", value: "MySQL" },
    ],
  },
  {
    id: "logistics-platforms",
    name: "Translink & TradeLink",
    category: "Enterprise Software",
    categoryBadge: "Logistics & Trade",
    tagline: "Logistics, Cargo Tracking & Trade Workflow Platforms",
    description:
      "Developed and integrated robust logistics and tracking solutions including Translink Transporters and TradeLink trade platforms for real-time shipment monitoring, route dispatching, and international trade transaction workflows.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Tailwind CSS"],
    liveUrl: null,
    previewType: "logistics",
    highlights: [
      "End-to-end cargo and shipment dispatch tracking",
      "Trade transaction workflows and digital manifest handling",
      "Automated driver, vehicle, and route management",
      "Secure ledger reporting and partner invoicing modules",
    ],
    stats: [
      { label: "Domain", value: "Logistics & Cargo" },
      { label: "Modules", value: "Fleet & Tracking" },
      { label: "Database", value: "MySQL" },
      { label: "Type", value: "Trade Platform" },
    ],
  },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end scalable web applications using modern JavaScript ecosystems (React.js, Node.js, Express.js) and Python Flask.",
    icon: "layers",
  },
  {
    title: "AI & Machine Learning Systems",
    description:
      "Predictive modeling, regression pipelines, and intelligent data forecasting endpoints using Python, scikit-learn, and Pandas.",
    icon: "brain",
  },
  {
    title: "Flutter Mobile App Development",
    description:
      "Cross-platform iOS and Android mobile applications built with Flutter & Dart for enterprise and commercial clients.",
    icon: "smartphone",
  },
  {
    title: "Multi-Industry Inventory & POS",
    description:
      "Comprehensive multi-branch POS and ERP platforms customized for automotive, retail, computer accessories, and trading.",
    icon: "box",
  },
  {
    title: "Commercial Client Websites",
    description:
      "High-conversion, lightning-fast promotional websites with custom branding, responsive UI, and full SEO optimization.",
    icon: "globe",
  },
  {
    title: "Admin Panels & Dashboards",
    description:
      "Modern dashboard systems with role-based access control (RBAC), analytics charts, ledgers, and complete CRUD operations.",
    icon: "dashboard",
  },
  {
    title: "RESTful API Engineering",
    description:
      "Secure, documented, and versioned REST APIs with JWT authentication, validation, rate limiting, and third-party integrations.",
    icon: "api",
  },
  {
    title: "Relational & NoSQL Database Design",
    description:
      "Optimized database schemas across MySQL, SQLite, and MongoDB engineered for high concurrency, indexing, and data integrity.",
    icon: "database",
  },
  {
    title: "Authentication & Security",
    description:
      "JWT token workflows, role-based permissions, password hashing, and secure access management.",
    icon: "shield",
  },
  {
    title: "Performance Optimization & SEO",
    description:
      "Core Web Vitals optimization, asset compression, code splitting, OpenGraph metadata, and structured data indexing.",
    icon: "gauge",
  },
  {
    title: "Deployment & Cloud Hosting",
    description:
      "Production deployment and continuous integration on Vercel, Railway, and cloud hosting platforms.",
    icon: "rocket",
  },
  {
    title: "Maintenance & System Upgrades",
    description:
      "Ongoing feature enhancements, database migrations, security patches, and performance monitoring.",
    icon: "wrench",
  },
];

export const ACHIEVEMENTS = [
  { label: "Projects Completed", value: 15, suffix: "+", icon: "rocket" },
  { label: "Technologies Mastered", value: 22, suffix: "+", icon: "code" },
  { label: "Coding Hours", value: 1400, suffix: "+", icon: "clock" },
  { label: "Experience (Months)", value: 6, suffix: "+", icon: "briefcase" },
];

export const FAQ_ITEMS = [
  {
    question: "Who is Safi ur Rahman?",
    answer:
      "Safi ur Rahman is a Full Stack Software Engineer based in Hyderabad, Pakistan. He specializes in architecting scalable web applications, multi-industry inventory/POS systems, cross-platform Flutter mobile applications, Python Flask backends, and machine learning analytics platforms.",
  },
  {
    question: "Which technologies and frameworks do you use?",
    answer:
      "He works extensively with React.js, Node.js, Express.js, Python Flask, Flutter, Dart, scikit-learn, Pandas, Tailwind CSS, Ant Design, Bootstrap, and Redux. On the database and tools side, he uses MySQL, MongoDB, SQLite, phpMyAdmin, HeidiSQL, Git, GitHub, VS Code, Postman, and deploys on Vercel.",
  },
  {
    question: "What is EarthScape AI?",
    answer:
      "EarthScape AI is an intelligent climate analytics engine created by Safi ur Rahman. It incorporates machine learning regression pipelines (scikit-learn, Pandas) to analyze environmental data metrics and predict future weather conditions and atmospheric anomalies based on user-provided data parameters.",
  },
  {
    question: "Can you build custom enterprise management systems?",
    answer:
      "Yes. Safi has engineered comprehensive enterprise solutions including TradeStack (multi-industry POS & inventory for automotive, kiryana, computer accessories, and paper shop sectors), student enrollment workflows for Pakistan Institute of Management (PIM), and logistics tracking platforms.",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes. Safi develops cross-platform iOS and Android mobile applications using Flutter & Dart, integrated seamlessly with Node.js/Express and Python Flask RESTful backends.",
  },
  {
    question: "Are you available for freelance or full-time projects?",
    answer:
      "Yes, Safi is currently available for freelance projects, contract engagements, and full-time software engineering opportunities.",
  },
];

export const FOOTER_SERVICES = [
  "Full Stack Web Development",
  "AI & Machine Learning",
  "Flutter Mobile Apps",
  "Enterprise ERP & POS",
  "Python Flask Backends",
  "Commercial Client Websites",
  "RESTful API Design",
  "Database Architecture",
];
