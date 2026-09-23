import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building, Award, Wrench } from 'lucide-react';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCE_DATA[0].id);

  const selectedExp = EXPERIENCE_DATA.find((item) => item.id === selectedExpId) || EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Proven track record in enterprise IT administration, AWS cloud engineering, and organizational leadership.
          </p>
        </div>

        {/* Experience Grid: Selector Tabs & Expanded Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCE_DATA.map((item) => {
              const isSelected = item.id === selectedExpId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedExpId(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/15 to-blue-600/10 border-cyan-500 shadow-md shadow-cyan-950/20'
                      : theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        item.type === 'Full-time' ? 'bg-cyan-500/10 text-cyan-400' :
                        item.type === 'Internship' ? 'bg-indigo-500/10 text-indigo-400' :
                        'bg-amber-500/10 text-amber-400'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{item.period}</span>
                    </div>
                    <h3 className={`text-base font-bold ${
                      isSelected
                        ? 'text-cyan-400'
                        : theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.role}
                    </h3>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.company}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Experience Detail Panel */}
          <div className="lg:col-span-8">
            <div className={`p-8 rounded-3xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-lg'
            }`}>
              
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800/40">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-cyan-400">
                    {selectedExp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mt-1">
                    <span className="flex items-center gap-1 text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <Building className="w-3.5 h-3.5 text-cyan-500" /> {selectedExp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" /> {selectedExp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" /> {selectedExp.period}
                    </span>
                  </div>
                </div>

                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {selectedExp.type}
                </span>
              </div>

              {/* Highlight Banner if available */}
              {selectedExp.highlight && (
                <div className="my-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-cyan-200 dark:text-cyan-200 light:text-cyan-900">
                    {selectedExp.highlight}
                  </p>
                </div>
              )}

              {/* Responsibilities Checklist */}
              <div className="space-y-4 my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Key Responsibilities & Contributions
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedExp.responsibilities.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tools & Skills */}
              <div className="pt-6 border-t border-slate-800/40 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-cyan-400" /> Skills & Tools Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700"
                    >
                      {skill}
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
