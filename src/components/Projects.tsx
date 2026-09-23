import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Rocket, Github, CheckCircle2, Layers, Eye } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const dark = theme === 'dark';

  const categories = ['All', 'Cloud', 'IoT', 'AI', 'System'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Featured Solutions"
          title="Cloud & IoT"
          highlight="Projects"
          subtitle="Architectural implementations combining AWS Cloud Services, Serverless Microservices, Computer Vision, and IoT Telemetry."
        />

        {/* Category filter pills */}
        <Reveal className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30'
                  : dark
                  ? 'glass text-slate-300 hover:text-cyan-300 hover:bg-white/10'
                  : 'glass-light text-slate-600 hover:text-cyan-700 hover:bg-white'
              }`}
            >
              {category} Projects
            </button>
          ))}
        </Reveal>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={(idx % 2) * 100}>
              <div className={`group rounded-3xl glass-sheen glow-hover overflow-hidden flex flex-col justify-between h-full ${dark ? 'glass' : 'glass-light'}`}>

                {/* Image banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/40">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border ${dark ? 'bg-slate-950/70 text-cyan-300 border-cyan-400/20' : 'bg-white/80 text-cyan-700 border-cyan-200'}`}>
                      {project.date}
                    </span>
                  </div>

                  {/* Quick view overlay */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-950/80 border border-cyan-400/40 backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Architecture & Details</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className={`text-xl font-extrabold tracking-tight transition-colors group-hover:text-cyan-300 ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 pt-2">
                    <span className={`block text-[11px] font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Key Features
                    </span>
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className={`flex items-start gap-2 text-xs ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${dark ? 'bg-white/5 text-cyan-300 border-white/10' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className={`pt-4 border-t flex items-center gap-3 ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all hover:-translate-y-0.5 ${
                          dark
                            ? 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300'
                            : 'border-slate-900/10 bg-white/70 text-slate-700 hover:border-cyan-600/60 hover:text-cyan-700'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all"
                    >
                      <Layers className="w-4 h-4" />
                      <span>View Architecture</span>
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
