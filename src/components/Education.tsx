import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Award, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface EducationProps {
  theme: 'dark' | 'light';
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  const dark = theme === 'dark';

  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Academic Background"
          title="Education &"
          highlight="Thesis Project"
          subtitle="Academic foundation in software engineering, computer networks, and cloud architecture at Abdul Wali Khan University Mardan."
        />

        {/* Degree + Thesis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Main Degree Card */}
          <Reveal className="lg:col-span-6">
            <div className={`p-8 rounded-3xl glass-sheen relative h-full ${dark ? 'glass' : 'glass-light'}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${dark ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}>
                  {EDUCATION_DATA.period}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${dark ? 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                  <Award className="w-3.5 h-3.5" /> CGPA: {EDUCATION_DATA.cgpa}
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-1">
                {EDUCATION_DATA.shortDegree} • {EDUCATION_DATA.department}
              </p>
              <p className={`text-xs sm:text-sm font-medium mb-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {EDUCATION_DATA.institution}
              </p>

              {/* Coursework */}
              <div className={`space-y-3 pt-4 border-t ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Key Coursework & Specializations
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                        dark
                          ? 'bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300'
                          : 'bg-white/70 border-slate-900/10 text-slate-700 hover:border-cyan-600/50'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Thesis Card */}
          <Reveal delay={120} className="lg:col-span-6">
            <div className={`p-8 rounded-3xl glass-sheen relative overflow-hidden h-full group ${dark ? 'glass-deep border-glow' : 'glass-deep-light border-glow'}`}>
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-36 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 relative">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${dark ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' : 'bg-cyan-100 text-cyan-800 border-cyan-300'}`}>
                  <Sparkles className="w-3.5 h-3.5" /> Final Year Thesis Project
                </span>
                <span className="text-xs font-mono text-cyan-400">AWS + IoT</span>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-3 transition-colors group-hover:text-cyan-300 ${dark ? 'text-white' : 'text-slate-900'}`}>
                {EDUCATION_DATA.finalYearProject.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {EDUCATION_DATA.finalYearProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {EDUCATION_DATA.finalYearProject.highlights.map((highlight, idx) => (
                  <div key={idx} className={`flex items-start gap-2.5 text-xs ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className={`pt-4 border-t ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                <span className={`block text-[11px] font-bold uppercase tracking-wider mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Architecture Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.finalYearProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${dark ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
