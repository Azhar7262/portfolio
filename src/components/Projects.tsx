import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  type LucideIcon, Layers, Monitor, Code2, Github,
  LayoutDashboard, CloudCog, Server, Brain, Wrench
} from 'lucide-react';
import { SectionHeading } from './ui';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onSelectProject: (project: Project) => void;
}

type ProjectCategory = 'All' | 'Cloud' | 'IoT' | 'AI' | 'Web' | 'System';

const categoryLabels: Record<ProjectCategory, string> = {
  All: 'All Categories',
  Cloud: 'Cloud Architecture',
  IoT: 'IoT Systems',
  AI: 'AI & Automation',
  Web: 'Web Platforms',
  System: 'Systems & IT Ops',
};

const categoryIcons: Record<ProjectCategory, LucideIcon> = {
  All: LayoutDashboard,
  Cloud: CloudCog,
  IoT: Server,
  AI: Brain,
  Web: Code2,
  System: Wrench,
};

const CATEGORIES: ProjectCategory[] = ['All', 'Cloud', 'IoT', 'AI', 'Web', 'System'];

export const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const dark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return (proj.category as string) === (activeCategory as string);
  });

  return (
    <section id="projects" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Engineering Portfolio"
          title="Projects &"
          highlight="Case Studies"
          subtitle="Production-grade cloud architectures, serverless microservices, enterprise platforms, and IoT telemetry pipelines."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat];
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 text-white shadow-lg shadow-primary-500/25'
                    : dark
                      ? 'border border-white/10 bg-[#0d0f1c] text-slate-300 hover:border-white/20 hover:text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{categoryLabels[cat]}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`rounded-3xl border border-dashed p-12 text-center ${dark ? 'border-white/10' : 'border-slate-300'}`}>
            <p className={`text-sm font-semibold ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              No projects found in this category.
            </p>
            <p className={`mt-1 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Select another filter above to view all projects.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  dark
                    ? 'border-white/10 bg-[#0d0f1c] hover:border-primary-500/30 hover:shadow-primary-500/10'
                    : 'border-slate-200/80 bg-white hover:border-primary-400/50 hover:shadow-slate-200'
                }`}
              >
                <div>
                  {/* Image & Header */}
                  <div className="relative h-52 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-primary-300 border border-white/10">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="rounded-full bg-amber-500/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-slate-300 border border-white/10">
                      {project.date}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className={`text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-mono font-medium ${
                            dark ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Code2 className="h-3 w-3 opacity-60" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className={`p-6 pt-0 mt-4 flex items-center justify-between border-t pt-4 ${dark ? 'border-white/10' : 'border-slate-100'}`}>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`View architecture and details for ${project.title}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-primary-500/25 transition-all hover:scale-105"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>Architecture & Features</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                          dark
                            ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-primary-400 hover:text-slate-900'
                        }`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.demoUrl && !project.demoUrl.startsWith('#') && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                        className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                          dark
                            ? 'border-white/10 bg-white/5 text-primary-300 hover:border-primary-400/40 hover:text-white'
                            : 'border-slate-200 bg-white text-primary-600 hover:border-primary-400 hover:text-primary-800'
                        }`}
                      >
                        <Monitor className="h-3.5 w-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
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
