import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building, Award, Wrench } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCE_DATA[0].id);
  const dark = theme === 'dark';
  const selectedExp = EXPERIENCE_DATA.find((item) => item.id === selectedExpId) || EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Career Journey"
          title="Professional"
          highlight="Experience"
          subtitle="Proven track record in enterprise IT administration, AWS cloud engineering, and organizational leadership."
        />

        {/* Tabs + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Tab sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCE_DATA.map((item, idx) => {
              const isSelected = item.id === selectedExpId;
              return (
                <Reveal key={item.id} delay={idx * 80}>
                  <button
                    onClick={() => setSelectedExpId(item.id)}
                    className={`w-full text-left p-5 rounded-2xl glass-sheen transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-400/60 shadow-lg shadow-amber-500/20 scale-[1.02]'
                        : dark
                        ? 'glass border-white/10 hover:bg-white/10'
                        : 'glass-light border-slate-900/10 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          item.type === 'Full-time'
                            ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                            : item.type === 'Internship'
                            ? 'bg-orange-500/15 text-amber-300 border-amber-400/30'
                            : 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                        }`}>
                          {item.type}
                        </span>
                        <span className={`text-xs font-mono ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{item.period}</span>
                      </div>
                      <h3 className={`text-base font-bold ${isSelected ? 'text-amber-300' : dark ? 'text-white' : 'text-slate-900'}`}>
                        {item.role}
                      </h3>
                      <p className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{item.company}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-500 group-hover:translate-x-0.5'}`} />
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className={`p-8 rounded-3xl glass-sheen ${dark ? 'glass-deep' : 'glass-deep-light'}`}>
                {/* Header */}
                <div className={`flex flex-wrap items-start justify-between gap-4 pb-6 border-b ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gradient">{selectedExp.role}</h3>
                    <div className={`flex flex-wrap items-center gap-4 text-xs font-semibold mt-1.5 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className={`flex items-center gap-1 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                        <Building className="w-3.5 h-3.5 text-amber-400" /> {selectedExp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> {selectedExp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" /> {selectedExp.period}
                      </span>
                    </div>
                  </div>

                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${dark ? 'bg-amber-500/10 border-amber-400/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
                    {selectedExp.type}
                  </span>
                </div>

                {/* Highlight banner */}
                {selectedExp.highlight && (
                  <div className={`my-6 p-4 rounded-2xl border flex items-start gap-3 ${dark ? 'bg-amber-500/10 border-amber-400/30' : 'bg-amber-50 border-amber-200'}`}>
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className={`text-xs sm:text-sm font-medium ${dark ? 'text-amber-200' : 'text-amber-900'}`}>
                      {selectedExp.highlight}
                    </p>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="space-y-4 my-6">
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-400" /> Key Responsibilities & Contributions
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedExp.responsibilities.map((task, idx) => (
                      <div key={idx} className={`flex items-start gap-3 text-xs sm:text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shrink-0 mt-2 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills chips */}
                <div className={`pt-6 border-t ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider space-x-0 flex items-center gap-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Wrench className="w-4 h-4 text-amber-400" /> Skills & Tools Employed
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedExp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all hover:-translate-y-0.5 ${dark ? 'bg-white/5 text-amber-300 border-white/10 hover:border-amber-400/40' : 'bg-white/70 text-amber-700 border-slate-900/10'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
