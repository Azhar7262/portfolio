import { Project, ExperienceItem, EducationItem, SkillCategory, Certification, StatItem, KnowledgeItem } from '../types';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Muhammad Azhar",
  title: "Software Engineer & Developer | AWS Certified Solutions Architect – Associate",
  roles: [
    "Software Engineer",
    "Software Developer",
    "AWS Certified",
    "Cloud Engineer",
    "IT Executive",
    "Full-Stack Builder",
    "Problem Solver"
  ],
  summary: "Software Engineer and Developer with a Bachelor's in Computer Science (Software) and an AWS Certified Solutions Architect – Associate credential. Builds cloud-native and serverless applications in Python using AWS Lambda, DynamoDB, S3, IoT Core, Lex, and Rekognition, and delivers end-to-end projects from design to deployment. Uses modern developer tooling (Git, GitHub, VS Code, AWS CLI) and AI coding agents such as Claude Code and Freebuff to accelerate development, debugging, and documentation. Hands-on experience in cloud architecture, incident response, and Windows Server/network administration, plus proven team leadership. Seeking a Software Engineer or Developer role to build reliable, scalable software.",
  aboutDetailed: [
    "I am Muhammad Azhar, a Software Engineer & Developer with a Bachelor's in Computer Science (Software) from AWKUM and an AWS Certified Solutions Architect – Associate credential. I build cloud-native and serverless applications in Python using AWS Lambda, DynamoDB, S3, IoT Core, Lex, and Rekognition, and deliver end-to-end projects from design to deployment.",
    "I work with modern developer tooling (Git, GitHub, VS Code, AWS CLI) and use AI coding agents such as Claude Code and Freebuff to accelerate development, debugging, and documentation. Alongside development, I bring hands-on experience in cloud architecture, incident response, and Windows Server/network administration (Active Directory, DNS/DHCP, TCP/IP, VPN).",
    "Currently I serve as IT Executive, Developer at Unified Marketing Solutions — supporting internal systems, managing 60+ workstations, and strengthening endpoint monitoring — while building internal web platforms. I am always eager to learn, collaborate, and contribute to reliable, scalable software."
  ],
  email: "azharkhan726200@gmail.com",
  phone: "+92 335 5277018",
  whatsapp: "+92 347 1969863",
  location: "Charsadda, KPK, Pakistan",
  hometown: "Charsadda, KPK, Pakistan",
  linkedin: "https://linkedin.com/in/muhammad-azhar-khan",
  github: "https://github.com/muhammad-azhar-khan",
  resumeDownloadUrl: "#resume-pdf",
  availableForWork: true
};

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-azhar-khan', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/muhammad-azhar-khan', icon: Github },
  { label: 'Email', href: 'mailto:azharkhan726200@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/923471969863', icon: MessageSquare },
];

export const NAV_LINKS = [
  // `path` drives the multi-page router; `id` stays for anchors/keys.
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'experience', label: 'Experience', path: '/experience' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'education', label: 'Education', path: '/education' },
  { id: 'achievements', label: 'Achievements', path: '/achievements' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const MENU_ITEMS = NAV_LINKS.map((link) => link.id);

export const STATS: StatItem[] = [
  {
    label: "AWS Certified",
    value: "Solutions Architect",
    numericValue: 100,
    suffix: "%",
    description: "Associate Level Credentials",
    icon: "Award"
  },
  {
    label: "IT & Developer",
    value: "IT Executive — UMS",
    numericValue: 60,
    suffix: "+ Devices",
    description: "Asset & Infrastructure Management",
    icon: "Server"
  },
  {
    label: "Cloud Solutions",
    value: "Cloud, IoT & AI",
    numericValue: 5,
    suffix: "+ Projects",
    description: "AWS EC2, S3, VPC, Lambda",
    icon: "Cloud"
  },
  {
    label: "Degree Honor",
    value: "BS CS (Software)",
    numericValue: 3.32,
    suffix: " CGPA",
    description: "Gold Medal Co-Curricular",
    icon: "GraduationCap"
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Science in Computer Science (Software)",
  shortDegree: "BSCS (SW)",
  institution: "Abdul Wali Khan University Mardan (AWKUM)",
  department: "Department of Computer Science",
  period: "2022 – 2026",
  cgpa: "3.32 / 4.00",
  relevantCoursework: [
    "Cloud Computing",
    "Networking & TCP/IP",
    "Database Systems & SQL",
    "Software Engineering",
    "Operating Systems & Linux",
    "System Administration",
    "Web Development (HTML5, CSS3, JS)",
    "Cybersecurity Fundamentals",
    "Data Structures & Algorithms",
    "Artificial Intelligence"
  ],
  finalYearProject: {
    title: "Smart Farming Monitoring System using AWS Cloud",
    description: "Developed an IoT-based smart agriculture monitoring system using ESP32 microcontrollers, soil moisture, DHT22 temperature/humidity, and LDR sensors integrated with AWS IoT Core for real-time data collection, automated irrigation control, DynamoDB storage, AWS Lambda processing, and Amazon QuickSight data analytics visualization.",
    techStack: ["ESP32", "Arduino IDE", "AWS IoT Core", "AWS Lambda", "DynamoDB", "Amazon QuickSight", "Python"],
    highlights: [
      "Real-time sensor telemetry processing via MQTT and AWS IoT Core rules engine",
      "Automated irrigation triggering logic via AWS Lambda microservices",
      "Interactive farm analytics dashboard on Amazon QuickSight for real-time visual metrics",
      "Cloud-based historical data archival in Amazon DynamoDB"
    ]
  }
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "IT Executive, Developer",
    company: "Unified Marketing Solutions",
    location: "Pakistan",
    period: "Jul 2026 – Present",
    type: "Full-time",
    responsibilities: [
      "Provide technical support and troubleshooting for internal systems and end users",
      "Administer Windows Server environments, including Active Directory, DNS, and DHCP",
      "Manage core networking infrastructure (TCP/IP, subnetting, routing, VPN) for reliable organizational connectivity",
      "Oversee IT asset management — tagging and tracking 60+ workstations for inventory and lifecycle control",
      "Evaluate and support deployment of endpoint monitoring tools to strengthen IT oversight and security posture",
      "Develop and maintain internal web systems (LMS & employee portal) alongside IT operations"
    ],
    skills: ["Windows Server", "Active Directory", "DNS & DHCP", "Network Management", "IT Asset Management", "Endpoint Monitoring"],
    highlight: "Tagged and tracks 60+ workstations under a structured asset management and lifecycle control program."
  },
  {
    id: "exp-2",
    role: "Cloud Solutions Engineer (Internship)",
    company: "Corvit Systems",
    location: "Peshawar, Pakistan",
    period: "Jun 2024 – Sep 2024",
    type: "Internship",
    responsibilities: [
      "Designed and assisted in AWS cloud architecture solutions using EC2, S3, IAM, RDS, and VPC for client and training environments",
      "Responded to cloud operational incidents, troubleshot deployment issues, and supported scaling of cloud-hosted applications",
      "Prepared system documentation, architecture diagrams, and maintained infrastructure to support ongoing cloud operations"
    ],
    skills: ["AWS EC2", "AWS S3", "AWS VPC", "AWS IAM", "AWS RDS", "Cloud Security", "Infrastructure Documentation"],
    highlight: "Architected multi-tier VPC network topologies with public/private subnets and security groups for enterprise training labs."
  },
  {
    id: "exp-3",
    role: "Winter Intern",
    company: "ISPR, Pakistan Army",
    location: "Pakistan (40-day program)",
    period: "Feb 2026",
    type: "Internship",
    responsibilities: [
      "Completed a structured 40-day in-person internship focused on organizational operations, discipline, and professional development",
      "Collaborated on technical workflows, administrative procedures, and team communication exercises"
    ],
    skills: ["Organizational Operations", "Professional Leadership", "System Workflows", "Team Collaboration"],
    highlight: "Received formal commendation for operational efficiency and teamwork during structured inter-departmental exercises."
  },
  {
    id: "exp-4",
    role: "Youth Activities Leader",
    company: "AWKUM Student Council",
    location: "Mardan, Pakistan",
    period: "Dec 2022 – Jan 2026",
    type: "Leadership",
    responsibilities: [
      "Coordinated three student societies (Think Ink, Technology Innovation, and Bits & Bytes), organizing national and departmental events, workshops, and coding competitions",
      "Led cross-functional teams to plan and execute academic, technical, and social initiatives, developing strong leadership and project coordination skills",
      "Collaborated with Student Council leadership, culminating in winning a Gold Medal in Co-Curricular Activities"
    ],
    skills: ["Leadership", "Event Management", "Project Coordination", "Public Speaking", "Team Building"],
    highlight: "Awarded Gold Medal in Co-Curricular Activities at AWKUM for leading impactful student innovation events."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "IT Skills",
    iconName: "Server",
    description: "Day-to-day IT operations: user support, infrastructure administration, and asset management",
    skills: [
      { name: "IT Support & Helpdesk", level: 94, highlight: true, tags: ["Tier 1/2", "End Users"] },
      { name: "Windows Server & Active Directory", level: 92, highlight: true, tags: ["Administration", "AD DS"] },
      { name: "TCP/IP & Subnetting", level: 92, highlight: true, tags: ["Networking"] },
      { name: "DNS & DHCP Administration", level: 90, tags: ["Core Services"] },
      { name: "Routing & VPN", level: 88, tags: ["Infrastructure"] },
      { name: "IT Asset Management", level: 88, highlight: true, tags: ["60+ Workstations", "Lifecycle"] },
      { name: "Hardware & Endpoint Support", level: 86, tags: ["Diagnostics", "Monitoring"] }
    ]
  },
  {
    name: "Cloud & Serverless (AWS)",
    iconName: "Cloud",
    description: "Cloud-native and serverless development on Amazon Web Services",
    skills: [
      { name: "AWS EC2", level: 92, highlight: true, tags: ["Compute"] },
      { name: "AWS S3", level: 95, highlight: true, tags: ["Storage", "Static Web"] },
      { name: "AWS Lambda", level: 88, highlight: true, tags: ["Serverless", "Python"] },
      { name: "AWS DynamoDB", level: 82, highlight: true, tags: ["NoSQL"] },
      { name: "AWS RDS", level: 80, tags: ["SQL"] },
      { name: "AWS IAM", level: 90, highlight: true, tags: ["Security", "Access Control"] },
      { name: "AWS VPC", level: 88, highlight: true, tags: ["Subnets", "Topology"] },
      { name: "AWS Route 53", level: 82, tags: ["DNS", "Domain"] },
      { name: "AWS CloudFront", level: 80, tags: ["CDN", "Edge"] },
      { name: "AWS Elastic Beanstalk", level: 78, tags: ["Deployment"] },
      { name: "AWS CodeDeploy", level: 78, tags: ["CI/CD"] },
      { name: "AWS IoT Core", level: 85, highlight: true, tags: ["IoT", "MQTT"] },
      { name: "Amazon Lex", level: 80, highlight: true, tags: ["Conversational AI"] },
      { name: "Amazon Rekognition", level: 80, highlight: true, tags: ["Computer Vision"] },
      { name: "Amazon QuickSight", level: 80, tags: ["BI", "Dashboards"] }
    ]
  },
  {
    name: "Programming",
    iconName: "Code",
    description: "Programming languages for applications, scripts, and data pipelines",
    skills: [
      { name: "Python (boto3, NumPy, Pandas)", level: 88, highlight: true, tags: ["AWS SDK", "Data"] },
      { name: "Java", level: 78, tags: ["OOP"] },
      { name: "C++", level: 78, tags: ["Core CS"] },
      { name: "SQL", level: 75, tags: ["Databases"] },
      { name: "R", level: 75, tags: ["Statistics"] }
    ]
  },
  {
    name: "Developer Tools",
    iconName: "Terminal",
    description: "Modern developer tooling and daily command-line workflows",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true, tags: ["Version Control"] },
      { name: "VS Code", level: 92, highlight: true, tags: ["Editor"] },
      { name: "AWS CLI", level: 86, highlight: true, tags: ["Automation"] },
      { name: "AWS Console", level: 86, tags: ["Cloud Management"] },
      { name: "Postman", level: 80, tags: ["API Testing"] },
      { name: "Jupyter Notebook", level: 78, tags: ["Data"] },
      { name: "Arduino IDE", level: 82, tags: ["Embedded", "IoT"] },
      { name: "Linux Command Line", level: 82, tags: ["Shell"] },
      { name: "Overleaf / LaTeX", level: 75, tags: ["Documentation"] }
    ]
  },
  {
    name: "AI Tools & Coding Agents",
    iconName: "Brain",
    description: "AI-assisted development with modern coding agents and LLMs",
    skills: [
      { name: "Claude Code", level: 90, highlight: true, tags: ["Coding Agent"] },
      { name: "Freebuff", level: 88, highlight: true, tags: ["Coding Agent"] },
      { name: "Claude & ChatGPT", level: 85, highlight: true, tags: ["LLMs"] },
      { name: "GitHub Copilot", level: 82, tags: ["Autocomplete"] },
      { name: "Google Gemini", level: 80, tags: ["LLMs"] },
      { name: "Prompt Engineering", level: 85, highlight: true, tags: ["LLMs"] },
      { name: "AI-Assisted Development", level: 88, highlight: true, tags: ["Workflow"] }
    ]
  },
  {
    name: "Software Engineering",
    iconName: "Layers",
    description: "Core engineering discipline from design to deployment and documentation",
    skills: [
      { name: "SDLC", level: 85, highlight: true, tags: ["Processes"] },
      { name: "Object-Oriented Programming", level: 85, highlight: true, tags: ["Design"] },
      { name: "Data Structures & Algorithms", level: 85, highlight: true, tags: ["Core CS"] },
      { name: "Database Design", level: 80, tags: ["Modeling"] },
      { name: "REST APIs", level: 82, tags: ["Integration"] },
      { name: "Debugging", level: 85, tags: ["Quality"] },
      { name: "Technical Documentation", level: 85, tags: ["Writing"] }
    ]
  },
  {
    name: "Web Development",
    iconName: "Globe",
    description: "Building responsive web interfaces and deploying static platforms",
    skills: [
      { name: "HTML5 & CSS3", level: 90, highlight: true, tags: ["Frontend"] },
      { name: "Responsive Web Design", level: 85, highlight: true, tags: ["UI"] },
      { name: "JavaScript ES6", level: 85, tags: ["Frontend"] },
      { name: "Vercel Deployment", level: 85, tags: ["Hosting"] },
      { name: "Static Site Hosting (S3 + CloudFront)", level: 88, highlight: true, tags: ["AWS"] }
    ]
  },
  {
    name: "DevOps & Methodologies",
    iconName: "Workflow",
    description: "Delivery practices, automation, and team methodologies",
    skills: [
      { name: "Agile (Scrum, SAFe)", level: 82, highlight: true, tags: ["Methods"] },
      { name: "CI/CD Concepts", level: 80, tags: ["Pipelines"] },
      { name: "Monitoring & Automation", level: 82, tags: ["Ops"] },
      { name: "Version Control", level: 90, highlight: true, tags: ["Git"] }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services (AWS)",
    issueDate: "Aug 2024",
    credentialId: "AWS-SAA-84729103-MA",
    verifyUrl: "https://aws.amazon.com/verification",
    badgeImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
    description: "Validates comprehensive knowledge of building secure, resilient, high-performing, and cost-optimized cloud architectures on Amazon Web Services.",
    skillsVerified: ["AWS EC2", "AWS S3", "VPC Topologies", "AWS IAM", "DynamoDB", "AWS Lambda", "High Availability Architecture"]
  },
  {
    id: "cert-aws-cte",
    title: "AWS Cloud Technical Essentials",
    organization: "Coursera / Amazon Web Services",
    issueDate: "Jan 2025",
    credentialId: "COURSERA-AWS-99201",
    verifyUrl: "https://coursera.org/verify",
    badgeImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    description: "Demonstrates core proficiency in AWS compute, networking, storage, database, and security products and services.",
    skillsVerified: ["AWS Fundamentals", "Identity Management", "Compute Options", "Database Selection"]
  },

  {
    id: "cert-leadership",
    title: "Certificate of Management & Leadership",
    organization: "AWKUM Student Council",
    issueDate: "Jan 2026",
    credentialId: "AWKUM-SC-LDR-2026",
    verifyUrl: "https://awkum.edu.pk",
    badgeImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    description: "Awarded for exceptional leadership in student body management, event coordination, and society leadership over a 4-year tenure.",
    skillsVerified: ["Executive Leadership", "Event Planning", "Cross-Functional Coordination", "Conflict Resolution"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-ums-bpo-lms",
    title: "Enterprise LMS & Employee Portal — UMS BPO",
    category: "Web",
    description: "In-development internal web platform for Unified Marketing Systems (UMS BPO) combining a learning management system with employee self-service and attendance management. Delivers role-based access for Super Admin, HR, department managers and employees, with server-side authorization enforced on every action. Active development phase; learning module (courses, lessons, quizzes) is being built out next.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase (PostgreSQL + RLS)", "Vercel", "Hikvision Device Integration"],
    features: [
      "Role-based authentication with four access levels (Super Admin, HR, Department Manager, Employee) and server-side authorization with audited sensitive actions",
      "Employee records: unique IDs, departments, reporting managers, shift and location mapping with duplicate-validated CSV import",
      "Attendance management: device punch imports with idempotent sync, shift-based daily summaries and an audited correction workflow",
      "Leave management with configurable types, balances, request submission and approval/rejection trails",
      "Company document library with category access controls plus targeted announcements and in-app notifications",
      "Management reporting filtered by employee, department, shift and date range with CSV/Excel/PDF export",
      "Hikvision attendance-device integration layer with a validated CSV import fallback until the device interface is fully verified",
      "PostgreSQL Row-Level Security isolating every employee's private records by role and scope"
    ],
    image: "/ums-lms-command-center.png",
    screenshots: [
      "/ums-lms-command-center.png",
      "/ums-lms-role-hr.png",
      "/ums-lms-role-manager.png",
      "/ums-lms-role-employee.png"
    ],
    date: "Oct 2026 – Present",
    featured: true
  },
  {
    id: "proj-smart-agri",
    title: "Smart Farming Monitoring System (Final Year Thesis)",
    category: "IoT",
    description: "Final year thesis project — a comprehensive cloud-integrated IoT solution monitoring soil moisture, ambient temperature, humidity, and light intensity. Enables automated precision irrigation and real-time visualization dashboards on Amazon QuickSight.",
    technologies: ["ESP32", "Arduino IDE", "AWS IoT Core", "AWS Lambda", "Amazon DynamoDB", "Amazon QuickSight", "Python", "MQTT"],
    features: [
      "Real-time sensor data telemetry with ESP32 microcontrollers over MQTT",
      "Event-driven automated irrigation triggers powered by serverless AWS Lambda",
      "NoSQL time-series data storage in Amazon DynamoDB",
      "Interactive data analytics dashboards built on Amazon QuickSight for soil trends and weather forecasts"
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/muhammad-azhar-khan/smart-agriculture-aws-iot",
    demoUrl: "#demo-smart-agri",
    date: "Oct 2025 – Present",
    featured: true
  },
  {
    id: "proj-ai-chatbot",
    title: "AWS-Powered Conversational AI Chatbot",
    category: "AI",
    description: "A cloud-based conversational agent utilizing Amazon Lex for natural language understanding (NLU), integrated with AWS Lambda business logic and DynamoDB user state management.",
    technologies: ["Amazon Lex", "AWS Lambda", "Python", "Amazon DynamoDB"],
    features: [
      "Natural language intent recognition and contextual slot filling",
      "Serverless execution logic powered by Python AWS Lambda handlers",
      "User session persistence in DynamoDB for continuous conversation history",
      "Seamless integration capabilities for web and mobile chat interfaces"
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    architectureDiagram: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/muhammad-azhar-khan/aws-lex-lambda-chatbot",
    demoUrl: "#demo-ai-chatbot",
    date: "Aug 2025",
    featured: true
  },
  {
    id: "proj-portfolio-website",
    title: "Personal Developer Portfolio Website",
    category: "Web",
    description: "My personal portfolio site — a responsive, multi-page showcase of my cloud, IoT, and AI projects with an interactive resume viewer, project deep-dives, and a built-in AI assistant. Designed, developed, deployed, and updated end-to-end.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Git & GitHub", "Vercel", "AI Coding Agents"],
    features: [
      "Responsive multi-page layout with animated hero, role rotator, and smooth page transitions",
      "Project galleries with detail modals for features, tech stack, and screenshots",
      "Built-in AI chatbot assistant answering questions about my experience, skills, and projects",
      "Interactive resume viewer with print-to-PDF download",
      "Continuous deployment to Vercel via Git & GitHub (muhammad-azhar-portfolio-xi.vercel.app)"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://muhammad-azhar-portfolio-xi.vercel.app",
    date: "2026",
    featured: false
  },
  {
    id: "proj-employee-idle-alert",
    title: "Employee Check-In and Idle Alert System",
    category: "System",
    description: "A workforce monitoring tool developed at UMS that automates employee PC tracking — screen monitoring with periodic screen capture, check-in/check-out timing with pause and break-time options, and automated idle alerts — to know exactly how many hours each employee works.",
    technologies: ["Python", "Windows Desktop Agent", "Screen Capture", "REST API", "Web Dashboard", "SQL Database"],
    features: [
      "Screen monitoring with periodic screen captures of employee PCs to verify on-duty activity",
      "Check-in/check-out timing with pause and break-time options for accurate productive-hours calculation",
      "Automated idle detection — if a PC is on but the employee is not on break and there is no movement for 2 minutes, a notification is sent to the Super Admin",
      "Super Admin dashboard showing live employee status, break states, and daily worked-hours reports"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    date: "2026",
    featured: false
  },
  {
    id: "proj-rekognition-labeler",
    title: "Image Label Generator using Amazon Rekognition",
    category: "AI",
    description: "Automated computer vision pipeline that automatically analyzes images uploaded to S3 buckets, extracts object/facial labels via Rekognition, and records metadata via boto3 script.",
    technologies: ["Python", "boto3", "Amazon S3", "Amazon Rekognition"],
    features: [
      "Automated S3 event triggers invoking Rekognition analysis",
      "Deep learning object detection, scene classification, and text extraction",
      "Structured JSON metadata generation for instant catalog searchability",
      "Python boto3 script interface for bulk image processing"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    architectureDiagram: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/muhammad-azhar-khan/amazon-rekognition-labeler",
    demoUrl: "#demo-rekognition",
    date: "Oct 2025 – Present",
    featured: true
  },
  {
    id: "proj-static-s3-website",
    title: "Static Website Hosting on Amazon S3 & CloudFront",
    category: "Cloud",
    description: "Production-ready static portfolio hosting architecture on AWS S3 with customized bucket policy permissions, CloudFront CDN distribution, SSL certificates, and Route 53 DNS mapping.",
    technologies: ["AWS S3", "AWS CloudFront", "AWS Route 53", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Public S3 bucket configuration with locked-down Origin Access Control (OAC)",
      "Global edge caching and HTTPS SSL termination via Amazon CloudFront",
      "Fast response times with low latency globally",
      "Zero-maintenance serverless web hosting environment"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/muhammad-azhar-khan/aws-s3-static-hosting",
    demoUrl: "#demo-s3-site",
    date: "Jul 2024 – Aug 2024",
    featured: false
  },
  {
    id: "proj-active-directory-lab",
    title: "Enterprise Active Directory & Windows Server Lab",
    category: "System",
    description: "Custom virtual lab environment implementing multi-domain Active Directory Domain Services (AD DS), Group Policy Objects (GPO), DNS/DHCP failover, and Microsoft 365 hybrid synchronization.",
    technologies: ["Windows Server 2022", "Active Directory", "Group Policy", "DNS/DHCP", "Hyper-V"],
    features: [
      "Domain Controller provisioning with Organizational Unit (OU) structural hierarchy",
      "Granular security Group Policy deployment for workstation lockdowns",
      "DHCP scope configuration with high-availability failover partners",
      "Automated user onboarding PowerShell scripting"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/muhammad-azhar-khan/windows-server-ad-lab",
    date: "2024",
    featured: false
  }
];

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["who", "who is", "about", "bio", "background", "introduction", "name"],
    answer: "Muhammad Azhar is a Software Engineer & Developer and AWS Certified Solutions Architect – Associate based in Charsadda, KPK, Pakistan. He holds a BS in Computer Science (Software) from AWKUM with a CGPA of 3.32/4.00, and specializes in cloud-native and serverless development (Python, AWS Lambda, DynamoDB, S3, IoT Core, Lex, Rekognition), plus Windows Server, networking, and IT administration.",
    category: "About"
  },
  {
    keywords: ["education", "degree", "university", "awkum", "bscs", "gpa", "cgpa", "study", "college"],
    answer: "Muhammad Azhar graduated with a Bachelor of Science in Computer Science (Software) - BSCS (SW) from Abdul Wali Khan University Mardan (AWKUM) (2022–2026) with a CGPA of 3.32 / 4.00. His final year thesis project was 'Smart Agriculture IoT using AWS Cloud'.",
    category: "Education"
  },
  {
    keywords: ["job", "work", "experience", "current job", "role", "corvit", "ums", "ispr", "helpdesk"],
    answer: "Muhammad Azhar currently serves as IT Executive, Developer at Unified Marketing Solutions (since Jul 2026) — technical support, Windows Server administration (AD, DNS, DHCP), networking, and IT asset management for 60+ workstations. Previously: Cloud Solutions Engineer (Internship) at Corvit Systems (Jun–Sep 2024) designing AWS architectures, Winter Intern at ISPR, Pakistan Army (Feb 2026), and Youth Activities Leader at AWKUM Student Council (Dec 2022 – Jan 2026).",
    category: "Experience"
  },
  {
    keywords: ["skills", "technical skills", "technologies", "programming", "languages", "python", "networking"],
    answer: "His technical skills include: IT Skills (IT Support & Helpdesk, Windows Server, Active Directory, DNS/DHCP, TCP/IP, Subnetting, Routing, VPN, IT Asset Management), Cloud & Serverless (AWS EC2, S3, Lambda, DynamoDB, RDS, IAM, VPC, Route 53, CloudFront, Elastic Beanstalk, CodeDeploy, IoT Core, Lex, Rekognition, QuickSight), Programming (Python with boto3/NumPy/Pandas, Java, C++, SQL, R), Developer Tools (Git, GitHub, VS Code, AWS CLI, Postman, Jupyter, Arduino IDE), AI Tools & Coding Agents (Claude Code, Freebuff, ChatGPT, GitHub Copilot, Gemini, Prompt Engineering), Software Engineering (SDLC, OOP, DSA, REST APIs), Web Development (HTML5, CSS3, Vercel), and DevOps (Agile Scrum/SAFe, CI/CD).",
    category: "Skills"
  },
  {
    keywords: ["aws", "aws services", "cloud", "amazon", "ec2", "s3", "lambda", "vpc", "dynamodb"],
    answer: "Muhammad Azhar is an AWS Certified Solutions Architect – Associate. He specializes in AWS EC2, S3, IAM, VPC subnets, AWS Lambda, DynamoDB, AWS IoT Core, QuickSight, Rekognition, Amazon Lex, Route 53, and CloudFront.",
    category: "AWS"
  },
  {
    keywords: ["certifications", "certified", "certificates", "aws certified", "google", "coursera", "navttc"],
    answer: "Muhammad Azhar holds the following credentials:\n1. AWS Certified Solutions Architect – Associate (Aug 2024)\n2. AWS Cloud Technical Essentials (Coursera, Jan 2025)\n3. Certificate of Management & Leadership (AWKUM Student Council, Jan 2026).",
    category: "Certifications"
  },
  {
    keywords: ["projects", "project", "smart agriculture", "iot", "chatbot", "rekognition", "s3 website", "lms", "portal", "ums"],
    answer: "Key Projects:\n1. Enterprise LMS & Employee Portal for UMS BPO — in-development internal platform (Next.js, TypeScript, Supabase/PostgreSQL with Row-Level Security)\n2. Employee Check-In and Idle Alert System — UMS workforce monitoring tool (screen capture, break-time tracking, automated idle alerts to Super Admin)\n3. Smart Farming Monitoring System — final year thesis (ESP32, AWS IoT Core, Lambda, DynamoDB, QuickSight)\n4. AWS-Powered AI Chatbot (Amazon Lex, Lambda, DynamoDB)\n5. Image Label Generator using Amazon Rekognition (Python, boto3, S3, Rekognition)\n6. Personal Developer Portfolio Website (React, TypeScript, Tailwind, Vercel)\n7. Static Website Hosting on Amazon S3.",
    category: "Projects"
  },
  {
    keywords: ["contact", "email", "phone", "whatsapp", "location", "reach", "hire", "address"],
    answer: "You can contact Muhammad Azhar via:\n- Email: azharkhan726200@gmail.com\n- Phone: +92 335 5277018\n- WhatsApp: +92 347 1969863\n- Location: Charsadda, KPK, Pakistan\n- LinkedIn: linkedin.com/in/muhammad-azhar-khan",
    category: "Contact"
  },
  {
    keywords: ["resume", "cv", "download resume", "download cv", "pdf"],
    answer: "Yes! You can download Muhammad Azhar's resume PDF directly from the 'Download Resume' button in the Hero or Resume section, or click 'View Resume' to preview it interactively on screen.",
    category: "Resume"
  },
  {
    keywords: ["available", "hiring", "hire me", "available for work", "freelance", "full-time", "job offer"],
    answer: "Yes! Muhammad Azhar is actively seeking Software Engineer and Developer roles to build reliable, scalable software, and is also open to Cloud Engineer and IT positions — remote and on-site, globally.",
    category: "Career"
  }
];
