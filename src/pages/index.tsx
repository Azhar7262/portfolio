import React from 'react';
import { Link } from 'react-router-dom';
import {
  User, Zap, Briefcase, FolderKanban, GraduationCap, Award, FileText, Send, ArrowUpRight,
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
  { path: '/experience', label: 'Experience', desc: 'Roles, responsibilities, and measurable results', icon: Briefcase },
  { path: '/projects', label: 'Projects', desc: 'Cloud, IoT, and AI builds with architecture details', icon: FolderKanban },
  { path: '/education', label: 'Education', desc: 'BSCS degree, coursework, and final-year thesis', icon: GraduationCap },
  { path: '/achievements', label: 'Achievements', desc: 'Certifications, honors, and gold-medal leadership', icon: Award },
  { path: '/resume', label: 'Resume', desc: 'Preview or download the full one-page resume', icon: FileText },
  { path: '/contact', label: 'Contact', desc: 'Hire me — direct email, WhatsApp, and LinkedIn', icon: Send },
];

export const HomePage: React.FC<PageProps> = ({ theme }) => {
  const dark = theme === 'dark';

  return (
    <PageTransition>
      <Hero theme={theme} />

      {/* Explore grid — invites visitors into each page */}
      <section id="explore" className="relative pb-16 pt-2 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme={theme}
            badge="Browse the Site"
            title="Explore Every"
            highlight="Chapter"
            subtitle="The site is now fully multi-page — every part of my profile opens on its own focused page with animated transitions."
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
                {/* hover glow */}
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

      {/* Marquee-style highlight strip */}
      <section className="relative pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCta dark={dark} />
        </div>
      </section>
    </PageTransition>
  );
};

const ContactCta: React.FC<{ dark: boolean }> = ({ dark }) => (
  <div
    className={`relative overflow-hidden rounded-3xl border p-8 text-center sm:p-12 ${
      dark
        ? 'border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.16),rgba(6,182,212,0.08))]'
        : 'border-primary-200/70 bg-[linear-gradient(135deg,rgba(124,58,237,0.08),rgba(6,182,212,0.06))]'
    }`}
  >
    <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
      Ready to build something reliable?
    </h2>
    <p className={`mx-auto mt-3 max-w-xl text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
      I'm actively seeking Software Engineer and Developer roles to build reliable, scalable software — remote or on-site, worldwide.
    </p>
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        Hire Me
      </Link>
      <Link
        to="/resume"
        className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
          dark
            ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
            : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
        }`}
      >
        <FileText className="h-4 w-4" />
        View Resume
      </Link>
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
