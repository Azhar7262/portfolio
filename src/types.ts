export interface Project {
  id: string;
  title: string;
  category: 'Cloud' | 'IoT' | 'AI' | 'Web' | 'System';
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  architectureDiagram?: string;
  githubUrl?: string;
  demoUrl?: string;
  date: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Leadership';
  responsibilities: string[];
  skills: string[];
  highlight?: string;
}

export interface EducationItem {
  degree: string;
  shortDegree: string;
  institution: string;
  department: string;
  period: string;
  cgpa: string;
  relevantCoursework: string[];
  finalYearProject: {
    title: string;
    description: string;
    techStack: string[];
    highlights: string[];
  };
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean; tags?: string[] }[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  badgeImage: string;
  description: string;
  skillsVerified: string[];
}

export interface StatItem {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface KnowledgeItem {
  keywords: string[];
  answer: string;
  category: string;
}
