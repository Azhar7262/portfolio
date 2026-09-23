import { Project, ExperienceItem, EducationItem, SkillCategory, Certification, StatItem, KnowledgeItem } from '../types';

export const PERSONAL_INFO = {
  name: "Muhammad Azhar",
  title: "IT Executive | AWS Certified Solutions Architect – Associate | Cloud Computing & System Administration Enthusiast",
  roles: [
    "IT Executive",
    "AWS Certified",
    "Cloud Engineer",
    "System Administrator",
    "Technical Support Engineer",
    "Cloud Solutions Architect",
    "Problem Solver"
  ],
  summary: "Passionate IT professional with expertise in cloud computing, system administration, networking, technical support, and IT infrastructure. I enjoy designing scalable cloud solutions, solving complex technical problems, and helping organizations build reliable and secure technology environments. I continuously learn emerging technologies and strive to deliver innovative IT solutions.",
  aboutDetailed: [
    "I am Muhammad Azhar, an IT Executive with a strong passion for cloud computing, system administration, networking, and enterprise IT infrastructure. I enjoy learning new technologies, solving technical challenges, improving IT operations, and building scalable cloud-based solutions.",
    "I have practical experience in IT support, Windows administration, user management, hardware troubleshooting, Microsoft 365, Active Directory, networking fundamentals, and cloud technologies (AWS EC2, S3, IAM, VPC, RDS, IoT Core, Lambda, DynamoDB, QuickSight).",
    "I am always eager to learn, collaborate, and contribute to innovative organizations while continuously enhancing my technical and professional skills."
  ],
  email: "azharkhan726200@gmail.com",
  phone: "+92 335 5277018",
  whatsapp: "+92 347 1969863",
  location: "Islamabad, Pakistan",
  hometown: "Charsadda, KPK, Pakistan",
  linkedin: "https://linkedin.com/in/muhammad-azhar-khan",
  github: "https://github.com/muhammad-azhar-khan",
  resumeDownloadUrl: "#resume-pdf",
  availableForWork: true
};

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
    label: "IT Executive",
    value: "Enterprise IT Support",
    numericValue: 4,
    suffix: "+ Yrs",
    description: "System & Helpdesk Admin",
    icon: "Server"
  },
  {
    label: "Cloud Solutions",
    value: "Architecture & IoT",
    numericValue: 10,
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
    title: "Smart Agriculture IoT using AWS Cloud",
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
    role: "IT Executive",
    company: "Unified Marketing Systems (UMS)",
    location: "Pakistan",
    period: "2024 – Present",
    type: "Full-time",
    responsibilities: [
      "IT Helpdesk Support & Tier-1/2 Technical Support for corporate end-users",
      "Hardware Troubleshooting, system upgrades, and workstation diagnostics",
      "Software installation, licensing management, and patch deployments",
      "Windows Server & Microsoft 365 Administration (Exchange, Teams, SharePoint)",
      "Active Directory User Management, Group Policy Objects (GPO), and RBAC access control",
      "Network Troubleshooting (TCP/IP, Routers, Switches, Firewalls, Wi-Fi Access Points)",
      "Network Printer Management, CCTV Monitoring & Security System Administration",
      "System Maintenance, IT Asset Management, Email Configuration, and Remote Support"
    ],
    skills: ["Windows Server", "Active Directory", "Microsoft 365", "Helpdesk", "Network Troubleshooting", "IT Asset Management"],
    highlight: "Streamlined corporate helpdesk resolution time by 35% through standardized ticketing and Active Directory automation."
  },
  {
    id: "exp-2",
    role: "Cloud Solutions Engineer",
    company: "Corvit System",
    location: "Peshawar, Pakistan",
    period: "Jun 2024 – Sep 2024",
    type: "Full-time",
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
      "Completed a structured 40-day intensive in-person internship program focused on organizational operations, media systems, and professional development",
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
    name: "Cloud Computing & DevOps",
    iconName: "Cloud",
    description: "Designing, architecting, and deploying resilient cloud solutions on Amazon Web Services",
    skills: [
      { name: "AWS EC2", level: 92, highlight: true, tags: ["Infrastructure", "Compute"] },
      { name: "AWS S3", level: 95, highlight: true, tags: ["Storage", "Static Web"] },
      { name: "AWS IAM", level: 90, highlight: true, tags: ["Security", "Access Control"] },
      { name: "AWS VPC", level: 88, highlight: true, tags: ["Networking", "Subnets"] },
      { name: "AWS Lambda", level: 85, highlight: true, tags: ["Serverless", "Python"] },
      { name: "AWS DynamoDB", level: 82, highlight: true, tags: ["NoSQL", "Database"] },
      { name: "AWS IoT Core", level: 85, highlight: true, tags: ["IoT", "MQTT"] },
      { name: "Amazon QuickSight", level: 80, tags: ["Analytics", "BI"] },
      { name: "Amazon Rekognition", level: 78, tags: ["AI", "Vision"] },
      { name: "Amazon Lex", level: 80, tags: ["AI", "Chatbot"] },
      { name: "AWS Route 53", level: 82, tags: ["DNS", "Domain"] },
      { name: "AWS CloudFront", level: 80, tags: ["CDN", "Edge"] }
    ]
  },
  {
    name: "System Administration",
    iconName: "Server",
    description: "Managing enterprise IT infrastructure, servers, directory services, and user environments",
    skills: [
      { name: "Windows Server", level: 92, highlight: true, tags: ["Active Directory", "DNS"] },
      { name: "Active Directory (AD)", level: 94, highlight: true, tags: ["Domain Controller", "Users"] },
      { name: "Microsoft 365 Admin", level: 90, highlight: true, tags: ["Exchange", "Teams", "Admin"] },
      { name: "Group Policy (GPO)", level: 88, tags: ["Security", "Policies"] },
      { name: "User Account & RBAC", level: 95, tags: ["Permission", "Access"] },
      { name: "File Sharing & SMB", level: 90, tags: ["Permissions", "NAS"] },
      { name: "Backup Management", level: 85, tags: ["Disaster Recovery"] },
      { name: "CCTV & Hardware Admin", level: 88, tags: ["Infrastructure"] }
    ]
  },
  {
    name: "Networking",
    iconName: "Network",
    description: "Configuring, troubleshooting, and securing corporate & cloud network topologies",
    skills: [
      { name: "TCP/IP & OSI Model", level: 92, highlight: true },
      { name: "DNS & DHCP Protocols", level: 90, highlight: true },
      { name: "VPN & Remote Tunneling", level: 88, highlight: true },
      { name: "Routing & Switching", level: 85 },
      { name: "Wi-Fi & AP Configuration", level: 88 },
      { name: "Firewall & Security Rules", level: 84 }
    ]
  },
  {
    name: "Programming & Scripts",
    iconName: "Code",
    description: "Writing scripts, automation utilities, data pipelines, and web interfaces",
    skills: [
      { name: "Python (NumPy, Pandas, boto3)", level: 88, highlight: true, tags: ["AWS SDK", "Data"] },
      { name: "HTML5 & CSS3", level: 90, highlight: true, tags: ["Frontend", "Tailwind"] },
      { name: "JavaScript ES6", level: 85, highlight: true, tags: ["Frontend", "DOM"] },
      { name: "Java & C++", level: 78, tags: ["Core CS"] },
      { name: "R & SQL", level: 75, tags: ["Data Queries"] }
    ]
  },
  {
    name: "Development & Tools",
    iconName: "Wrench",
    description: "Tooling for version control, project tracking, IDEs, and documentation",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Visual Studio Code", level: 92 },
      { name: "Jira & Agile Workflows", level: 85 },
      { name: "Overleaf / LaTeX", level: 82 },
      { name: "AWS CLI", level: 86 }
    ]
  },
  {
    name: "Operating Systems",
    iconName: "Monitor",
    description: "Proficiency in desktop, server, and embedded platform environments",
    skills: [
      { name: "Windows 10/11 & Server", level: 96, highlight: true },
      { name: "Linux (Ubuntu / Amazon Linux)", level: 82, highlight: true },
      { name: "ESP32 / Embedded IoT OS", level: 80 }
    ]
  },
  {
    name: "Professional Soft Skills",
    iconName: "Users",
    description: "Core leadership and communication strengths proven in enterprise and university roles",
    skills: [
      { name: "Leadership & Team Management", level: 95, highlight: true },
      { name: "Problem Solving & Analytical Thinking", level: 95, highlight: true },
      { name: "Technical Communication", level: 92, highlight: true },
      { name: "Time Management & Prioritization", level: 90 },
      { name: "Project Coordination & Execution", level: 92 }
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
    id: "cert-google-prof",
    title: "Google Professional Certificates & NAVTTC",
    organization: "Google & NAVTTC National Program",
    issueDate: "2024 – 2025",
    credentialId: "NAV-GGL-883719",
    verifyUrl: "https://navttc.gov.pk/verify",
    badgeImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
    description: "Specialized vocational and cloud administration certifications focused on IT support, networking fundamentals, and digital transformation.",
    skillsVerified: ["IT Support", "Networking Protocols", "Security Best Practices", "Helpdesk Operations"]
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
    id: "proj-smart-agri",
    title: "Smart Agriculture IoT using AWS Cloud",
    category: "IoT",
    description: "A comprehensive cloud-integrated IoT solution monitoring soil moisture, ambient temperature, humidity, and light intensity. Enables automated precision irrigation and real-time visualization dashboards on Amazon QuickSight.",
    technologies: ["AWS IoT Core", "AWS Lambda", "DynamoDB", "Amazon QuickSight", "ESP32", "Python", "MQTT"],
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
    technologies: ["Amazon Lex", "AWS Lambda", "Python", "Amazon DynamoDB", "AWS IAM"],
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
    id: "proj-rekognition-labeler",
    title: "Image Label Generator using Amazon Rekognition",
    category: "AI",
    description: "Automated computer vision pipeline that automatically analyzes images uploaded to S3 buckets, extracts object/facial labels via Rekognition, and records metadata via boto3 script.",
    technologies: ["AWS S3", "Amazon Rekognition", "Python", "boto3", "AWS IAM"],
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
    answer: "Muhammad Azhar is an IT Executive and AWS Certified Solutions Architect – Associate based in Islamabad, Pakistan. He holds a BS in Computer Science (Software) from AWKUM with a CGPA of 3.32/4.00, and specializes in AWS Cloud Infrastructure, System Administration, Windows Server, Networking, and IoT Systems.",
    category: "About"
  },
  {
    keywords: ["education", "degree", "university", "awkum", "bscs", "gpa", "cgpa", "study", "college"],
    answer: "Muhammad Azhar graduated with a Bachelor of Science in Computer Science (Software) - BSCS (SW) from Abdul Wali Khan University Mardan (AWKUM) (2022–2026) with a CGPA of 3.32 / 4.00. His final year thesis project was 'Smart Agriculture IoT using AWS Cloud'.",
    category: "Education"
  },
  {
    keywords: ["job", "work", "experience", "current job", "role", "corvit", "ums", "ispr", "helpdesk"],
    answer: "Muhammad Azhar currently serves as IT Executive at Unified Marketing Systems (UMS) managing helpdesk support, Windows Admin, M365, AD, and network infrastructure. Previously, he worked as Cloud Solutions Engineer at Corvit System (June–Sept 2024) designing AWS topologies, completed a 40-day internship at ISPR (Feb 2026), and served as Youth Activities Leader at AWKUM Student Council.",
    category: "Experience"
  },
  {
    keywords: ["skills", "technical skills", "technologies", "programming", "languages", "python", "networking"],
    answer: "His technical skills include: Cloud & DevOps (AWS EC2, S3, IAM, VPC, Lambda, DynamoDB, QuickSight, IoT Core, Rekognition, Lex), System Admin (Windows Server, Active Directory, Microsoft 365, GPO), Networking (TCP/IP, DNS, DHCP, VPN, Routing/Switching), and Programming (Python boto3, HTML5/CSS3, JS, Java, C++, R, SQL).",
    category: "Skills"
  },
  {
    keywords: ["aws", "aws services", "cloud", "amazon", "ec2", "s3", "lambda", "vpc", "dynamodb"],
    answer: "Muhammad Azhar is an AWS Certified Solutions Architect – Associate. He specializes in AWS EC2, S3, IAM, VPC subnets, AWS Lambda, DynamoDB, AWS IoT Core, QuickSight, Rekognition, Amazon Lex, Route 53, and CloudFront.",
    category: "AWS"
  },
  {
    keywords: ["certifications", "certified", "certificates", "aws certified", "google", "coursera", "navttc"],
    answer: "Muhammad Azhar holds multiple credentials:\n1. AWS Certified Solutions Architect – Associate (Aug 2024)\n2. AWS Cloud Technical Essentials (Coursera, Jan 2025)\n3. Google Professional Certificates & NAVTTC Certifications\n4. Certificate of Management & Leadership (AWKUM Student Council, Jan 2026).",
    category: "Certifications"
  },
  {
    keywords: ["projects", "project", "smart agriculture", "iot", "chatbot", "rekognition", "s3 website"],
    answer: "Key Projects:\n1. Smart Agriculture IoT using AWS Cloud (ESP32, AWS IoT Core, Lambda, DynamoDB, QuickSight)\n2. AWS-Powered Conversational AI Chatbot (Amazon Lex, Lambda, DynamoDB)\n3. Image Label Generator using Amazon Rekognition (S3, Rekognition, boto3)\n4. Static Website Hosting on Amazon S3 & CloudFront.",
    category: "Projects"
  },
  {
    keywords: ["contact", "email", "phone", "whatsapp", "location", "reach", "hire", "address"],
    answer: "You can contact Muhammad Azhar via:\n- Email: azharkhan726200@gmail.com\n- Phone: +92 335 5277018\n- WhatsApp: +92 347 1969863\n- Location: Islamabad, Pakistan\n- LinkedIn: linkedin.com/in/muhammad-azhar-khan",
    category: "Contact"
  },
  {
    keywords: ["resume", "cv", "download resume", "download cv", "pdf"],
    answer: "Yes! You can download Muhammad Azhar's resume PDF directly from the 'Download Resume' button in the Hero or Resume section, or click 'View Resume' to preview it interactively on screen.",
    category: "Resume"
  },
  {
    keywords: ["available", "hiring", "hire me", "available for work", "freelance", "full-time", "job offer"],
    answer: "Yes! Muhammad Azhar is actively available for full-time Cloud Solutions Architect, Cloud Engineer, System Administrator, and IT Executive positions, both remote and on-site globally.",
    category: "Career"
  }
];
