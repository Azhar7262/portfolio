import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Cpu, CheckCircle2, Cloud, Sparkles, ExternalLink } from 'lucide-react';

interface EducationProps {
  theme: 'dark' | 'light';
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Thesis Project</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Academic foundation in software engineering, computer networks, and cloud architecture at Abdul Wali Khan University Mardan.
          </p>
        </div>

        {/* Timeline & Featured Thesis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Degree Timeline Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-8 rounded-3xl border transition-all duration-300 relative ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-lg'
            }`}>
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {EDUCATION_DATA.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> CGPA: {EDUCATION_DATA.cgpa}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-1">
                {EDUCATION_DATA.shortDegree} • {EDUCATION_DATA.department}
              </p>
              <p className={`text-xs sm:text-sm font-medium mb-6 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {EDUCATION_DATA.institution}
              </p>

              {/* Relevant Coursework Badges */}
              <div className="space-y-3 pt-4 border-t border-slate-800/40">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Key Coursework & Specializations
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-cyan-500/50'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-cyan-600'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Featured Final Year Thesis Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
              theme === 'dark'
                ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500/30 text-white shadow-xl shadow-cyan-950/30'
                : 'bg-gradient-to-b from-white to-slate-50 border-cyan-500/40 text-slate-900 shadow-xl'
            }`}>
              
              <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <Sparkles className="w-3.5 h-3.5" /> Final Year Thesis Project
                </span>
                <span className="text-xs font-mono text-cyan-400">AWS + IoT</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                {EDUCATION_DATA.finalYearProject.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {EDUCATION_DATA.finalYearProject.description}
              </p>

              {/* Thesis Highlights List */}
              <div className="space-y-2 mb-6">
                {EDUCATION_DATA.finalYearProject.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800/40">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Architecture Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.finalYearProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
