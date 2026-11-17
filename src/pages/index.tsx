import React from 'react';
import { Link } from 'react-router-dom';
import {
  User, Zap, Briefcase, FolderKanban, GraduationCap, Award, FileText, Send, ArrowUpRight,
  ArrowRight, Layers, Github, Monitor, ShieldCheck, Cloud, Server, Code, Cpu, ExternalLink
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { ResumeSection } from '../components/ResumeSection';
import { Contact } from '../components/Contact';
import { PageTransition, StaggerGrid } from '../components/PageTransition';
import { SectionHeading } from '../components/ui';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

type Theme = 'dark' | 'light';

export interface PageProps {
  theme: Theme;
  onSelectProject?: (p: any) => void;
  onSelectCert?: (c: any) => void;
  onOpenResumeModal?: () => void;
}

/* ------------------------------- HOME ---------------------------------- */

const EXPLORE_CARDS = [
  { path: '/about', label: 'About', desc: 'Who I am, what drives me, and my professional story', icon: User },
  { path: '/skills', label: 'Skills', desc: 'Interactive breakdown of every tool and technology I use', icon: Zap },
  { path: '/experience', label: 'Experience', desc: 'Roles, responsibilities, and measurable results at UMS & Corvit', icon: Briefcase },
  { path: '/projects', label: 'Projects', desc: 'Cloud, IoT, and AI builds with architecture details', icon: FolderKanban },
  { path: '/education', label: 'Education', desc: 'BSCS degree (3.32 CGPA), coursework, and final-year thesis', icon: GraduationCap },
  { path: '/achievements', label: 'Achievements', desc: 'AWS SAA certification, honors, and gold-medal leadership', icon: Award },
  { path: '/resume', label: 'Resume', desc: 'Preview or download the full one-page official resume', icon: FileText },
  { path: '/contact', label: 'Contact', desc: 'Hire me — direct email, WhatsApp, and LinkedIn', icon: Send },
];

const CORE_PILLARS = [
  {
    title: 'Cloud & Serverless',
    icon: Cloud,
    highlight: 'AWS SAA-C03 Certified',
    description: 'EC2, S3, VPC subnets, AWS Lambda serverless Python handlers, DynamoDB, RDS, IAM security policies, and Route 53.',
    tags: ['AWS Lambda', 'DynamoDB', 'S3', 'VPC', 'IoT Core', 'IAM']
  },
  {
    title: 'Software Development',
    icon: Code,
    highlight: 'Full-Stack & APIs',
    description: 'Building end-to-end web platforms and APIs with Python (boto3, Pandas), Next.js, TypeScript, PostgreSQL (RLS), and REST APIs.',
    tags: ['Python', 'Next.js', 'TypeScript', 'PostgreSQL', 'REST']
  },
  {
    title: 'Enterprise IT Operations',
    icon: Server,
    highlight: '60+ Workstations',
    description: 'Hands-on IT administration: Active Directory, DNS/DHCP, TCP/IP networking, VPNs, Windows Server, and asset lifecycle management.',
    tags: ['Active Directory', 'Windows Server', 'Networking', 'IT Asset Mgmt']
  },
  {
    title: 'AI & Smart Systems',
    icon: Cpu,
    highlight: 'IoT & Computer Vision',
    description: 'ESP32 IoT sensor telemetry over MQTT, Amazon Rekognition computer vision pipelines, Amazon Lex NLU, and AI coding agents.',
    tags: ['ESP32 IoT', 'Rekognition', 'Amazon Lex', 'Claude Code']
  }
];

export const HomePage: React.FC<PageProps> = ({ theme, onSelectProject, onOpenResumeModal }) => {
  const dark = theme === 'dark';
  // Top 3 featured flagship projects
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <Hero theme={theme} onOpenResumeModal={onOpenResumeModal} />

      {/* 2. Flagship Projects Showcase */}
      <section className="relative py-16 sm:py-24 border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme={theme}
            badge="Flagship Engineering"
            title="Featured Systems &"
            highlight="Architectures"
            subtitle="Selected cloud-native, IoT, and enterprise production systems designed and delivered by Muhammad Azhar."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  dark
                    ? 'border-white/10 bg-[#0d0f1c] hover:border-primary-500/30 hover:shadow-primary-500/10'
                    : 'border-slate-200/80 bg-white hover:border-primary-400/50 hover:shadow-slate-200'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-primary-300 border border-white/10">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-slate-300 border border-white/10">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold tracking-tight line-clamp-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-3 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${
                          dark ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className={`flex items-center justify-between pt-4 border-t ${dark ? 'border-white/10' : 'border-slate-100'}`}>
                    {onSelectProject && (
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                          dark ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                        }`}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>Architecture & Details</span>
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all hover:scale-105 ${
                            dark ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white' : 'border-slate-200 bg-slate-50 text-slate-700'
                          }`}
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.demoUrl && !project.demoUrl.startsWith('#') && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all hover:scale-105 ${
                            dark ? 'border-white/10 bg-white/5 text-primary-300 hover:text-white' : 'border-slate-200 bg-slate-50 text-primary-600'
                          }`}
                        >
                          <Monitor className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span>Explore All 8+ Engineering Projects & Architecture Topologies</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies Bento Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme={theme}
            badge="Engineering Depth"
            title="Core Technical"
            highlight="Pillars"
            subtitle="An integrated skill set spanning production cloud architecture, modern software engineering, and corporate IT infrastructure."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    dark
                      ? 'border-white/10 bg-[#0d0f1c] hover:border-primary-500/30'
                      : 'border-slate-200/80 bg-white hover:border-primary-400/50'
                  }`}
                >
                  <div className="space-y-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        dark
                          ? 'border-primary-400/20 bg-primary-500/10 text-primary-300'
                          : 'border-primary-300/40 bg-primary-50 text-primary-600'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <span className={`block text-[11px] font-bold uppercase tracking-wider text-primary-400`}>
                        {pillar.highlight}
                      </span>
                      <h3 className={`mt-1 text-base font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                        {pillar.title}
                      </h3>
                      <p className={`mt-2 text-xs leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {pillar.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-medium ${
                          dark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/skills"
              className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${
                dark ? 'text-primary-300 hover:text-white' : 'text-primary-600 hover:text-primary-800'
              }`}
            >
              <span>View interactive skill matrix with search & proficiencies</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Explore Every Chapter Grid */}
      <section id="explore" className="relative pb-16 pt-2 sm:pb-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme={theme}
            badge="Site Map"
            title="Explore Every"
            highlight="Chapter"
            subtitle="Every part of Muhammad Azhar's professional profile is accessible on dedicated focused pages."
          />
          <StaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPLORE_CARDS.map(({ path, label, desc, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  dark
                    ? 'bg-white/[0.03] border-white/10 hover:border-primary-400/40 hover:shadow-primary-500/10'
                    : 'bg-white border-slate-200/80 hover:border-primary-400/60 hover:shadow-primary-500/10'
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                    dark
                      ? 'bg-primary-500/10 border-primary-400/20 text-primary-300'
                      : 'bg-primary-50 border-primary-300/40 text-primary-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`mt-4 text-sm font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                  {label}
                </h3>
                <p className={`mt-1.5 flex-1 text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {desc}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    dark ? 'text-primary-300' : 'text-primary-700'
                  }`}
                >
                  Open page
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    dark
                      ? 'bg-[radial-gradient-circle_at_top_right,rgba(139,92,246,0.10),transparent_60%]'
                      : 'bg-[radial-gradient-circle_at_top_right,rgba(139,92,246,0.06),transparent_60%]'
                  }`}
                />
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* 5. Contact Call to Action */}
      <section className="relative pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCta dark={dark} onOpenResumeModal={onOpenResumeModal} />
        </div>
      </section>
    </PageTransition>
  );
};

const ContactCta: React.FC<{ dark: boolean; onOpenResumeModal?: () => void }> = ({ dark, onOpenResumeModal }) => (
  <div
    className={`relative overflow-hidden rounded-3xl border p-8 text-center sm:p-12 ${
      dark
        ? 'border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(6,182,212,0.10))] shadow-2xl'
        : 'border-primary-200/70 bg-[linear-gradient(135deg,rgba(124,58,237,0.08),rgba(6,182,212,0.06))] shadow-xl'
    }`}
  >
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
      Actively Seeking Roles
    </div>
    
    <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
      Ready to build something reliable and scalable?
    </h2>
    <p className={`mx-auto mt-3 max-w-xl text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
      I am open for full-time Software Engineer, Developer, and Cloud Engineer positions worldwide — remote and on-site.
    </p>
    
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        <span>Contact Muhammad Azhar</span>
      </Link>
      
      {onOpenResumeModal ? (
        <button
          type="button"
          onClick={onOpenResumeModal}
          className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
            dark
              ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:text-primary-300'
              : 'border-slate-300 bg-white text-slate-700 hover:border-primary-400 hover:text-primary-700'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>View Official Resume</span>
        </button>
      ) : (
        <Link
          to="/resume"
          className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
            dark
              ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:text-primary-300'
              : 'border-slate-300 bg-white text-slate-700 hover:border-primary-400 hover:text-primary-700'
          }`}
        >
          <FileText className="h-4 w-4" />
          <span>View Resume</span>
        </Link>
      )}
    </div>
  </div>
);

/* --------------------------- SECTION PAGES ------------------------------ */

export const AboutPage: React.FC<PageProps> = ({ theme }) => (
  <PageTransition>
    <About theme={theme} />
  </PageTransition>
);

export const SkillsPage: React.FC<PageProps> = ({ theme }) => (
  <PageTransition>
    <Skills theme={theme} />
  </PageTransition>
);

export const ExperiencePage: React.FC<PageProps> = ({ theme }) => (
  <PageTransition>
    <Experience theme={theme} />
  </PageTransition>
);

export const ProjectsPage: React.FC<PageProps> = ({ theme, onSelectProject }) => (
  <PageTransition>
    <Projects theme={theme} onSelectProject={onSelectProject ?? (() => {})} />
  </PageTransition>
);

export const EducationPage: React.FC<PageProps> = ({ theme }) => (
  <PageTransition>
    <Education theme={theme} />
  </PageTransition>
);

export const AchievementsPage: React.FC<PageProps> = ({ theme, onSelectCert }) => (
  <PageTransition>
    <Certifications theme={theme} onSelectCert={onSelectCert ?? (() => {})} />
  </PageTransition>
);

export const ResumePage: React.FC<PageProps> = ({ theme, onOpenResumeModal }) => (
  <PageTransition>
    <ResumeSection theme={theme} onOpenResumeModal={onOpenResumeModal ?? (() => {})} />
  </PageTransition>
);

export const ContactPage: React.FC<PageProps> = ({ theme }) => (
  <PageTransition>
    <Contact theme={theme} />
  </PageTransition>
);
