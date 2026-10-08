import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Layers, Monitor, Code2, Github, LayoutDashboard, CloudCog, Server, Brain, Wrench, X } from 'lucide-react';
import { SectionHeading } from './ui';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onSelectProject: (project: Project) => void;
}

type ProjectCategory = 'All' | 'Cloud' | 'IoT' | 'AI' | 'Web' | 'System';

const categoryLabels: Record<string, string> = {
  All: 'All',
  Cloud: 'Cloud',
  IoT: 'IoT',
  AI: 'AI',
  Web: 'Web',
  System: 'System',
};

const categoryIcons: Record<ProjectCategory, React.FC<{ className?: string }>> = {
  All: LayoutDashboard,
  Cloud: CloudCog,
  IoT: Server,
  AI: Brain,
  Web: Code2,
  System: Wrench,
};

export const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const dark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Cloud', 'IoT', 'AI', 'Web', 'System'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Featured Solutions"
          title="Projects"
          highlight="Case Studies"
          subtitle="Architectural implementations combining AWS cloud services, serverless microservices, computer vision, and IoT telemetry."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : dark
                      ? 'bg-white/6 text-ink-soft hover:bg-white/10'
                      : 'bg-white text-ink-faint hover:bg-white/8'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {categoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`rounded-2xl border border-dashed p-12 text-center ${dark ? 'border-white/10' : 'border-slate-300/60'}`}>
            <p className={`text-sm font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
              No projects in this category.
            </p>
            <p className={`mt-1 text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
              Try another filter above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-[300ms] hover:-translate-y-1 hover:shadow-2xl ${
                  dark ? 'border-white/10 bg-white/[0.03] hover:border-primary-400/20' : 'border-slate-200/80 bg-white hover:border-primary-300/30'
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        dark ? 'bg-white/15 text-primary-300' : 'bg-white/15 text-primary-700'
                      }`}
                    >
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-4">
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-mono font-medium ${
                          dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint'
                        }`}
                      >
                        <Code2 className="h-3 w-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                          dark
                            ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                            : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                        }`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                          dark
                            ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                            : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                        }`}
                      >
                        <Monitor className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      aria-label={`View architecture and details for ${project.title}`}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                        dark
                          ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                          : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                      }`}
                    >
                      <Layers className="h-3.5 w-3.5" />
                      Architecture
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
