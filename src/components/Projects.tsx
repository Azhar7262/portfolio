import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Rocket, Github, ExternalLink, Sparkles, CheckCircle2, Layers, Eye } from 'lucide-react';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cloud', 'IoT', 'AI', 'System'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Rocket className="w-3.5 h-3.5" />
            <span>Featured Solutions</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Cloud & IoT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Architectural implementations combining AWS Cloud Services, Serverless Microservices, Computer Vision, and IoT Telemetry.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : theme === 'dark'
                  ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {category} Projects
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                  : 'bg-white border-slate-200 text-slate-900 shadow-lg'
              }`}
            >
              
              {/* Project Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category & Date Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-500 text-slate-950 shadow-md">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-slate-700">
                    {project.date}
                  </span>
                </div>

                {/* Quick View Overlay Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 hover:border-cyan-400 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Architecture & Details</span>
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-2">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Features
                  </span>
                  {project.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-cyan-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/40 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                        theme === 'dark'
                          ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:border-cyan-500 hover:text-cyan-400'
                          : 'border-slate-300 bg-slate-100 text-slate-700 hover:border-cyan-600'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <Layers className="w-4 h-4" />
                    <span>View Architecture</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
