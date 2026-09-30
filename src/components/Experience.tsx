import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building, Award, Wrench } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const dark = theme === 'dark';

  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Career Journey"
          title="Professional"
          highlight="Experience"
          subtitle="A proven track record across enterprise IT administration, AWS cloud engineering, and organizational leadership."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline spine */}
          <div className={`absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px ${dark ? 'bg-gradient-to-b from-transparent via-indigo-400/40 to-transparent' : 'bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent'}`} />

          <div className="space-y-10 sm:space-y-14">
            {EXPERIENCE_DATA.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <Reveal key={item.id} delay={idx * 60}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>

                    {/* Node on the spine */}
                    <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 z-10">
                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-lg ${dark ? 'bg-slate-900 border-indigo-400/50 shadow-indigo-500/30' : 'bg-white border-indigo-500/50 shadow-indigo-500/20'}`}>
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${isLeft ? 'sm:mr-auto sm:pr-0' : 'sm:ml-auto'}`}>
                      <div className={`p-6 rounded-3xl glass-sheen glow-hover h-full ${dark ? 'glass' : 'glass-light'}`}>

                        {/* Type + period */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${dark ? 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30' : 'bg-indigo-50 text-indigo-700 border-indigo-200'}`}>
                            {item.type}
                          </span>
                          <span className={`flex items-center gap-1.5 text-xs font-mono ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                            <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {item.period}
                          </span>
                        </div>

                        {/* Role + org */}
                        <h3 className={`text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                          {item.role}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold mt-1 mb-4 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                          <span className="flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-indigo-400" /> {item.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {item.location}
                          </span>
                        </div>

                        {/* Highlight */}
                        {item.highlight && (
                          <div className={`mb-4 p-3.5 rounded-2xl border flex items-start gap-2.5 ${dark ? 'bg-indigo-500/10 border-indigo-400/30' : 'bg-indigo-50 border-indigo-200'}`}>
                            <Award className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <p className={`text-xs font-medium leading-relaxed ${dark ? 'text-indigo-200' : 'text-indigo-900'}`}>
                              {item.highlight}
                            </p>
                          </div>
                        )}

                        {/* Responsibilities */}
                        <ul className="space-y-2 mb-4">
                          {item.responsibilities.slice(0, 4).map((task, tIdx) => (
                            <li key={tIdx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 ${dark ? 'shadow-[0_0_8px_rgba(129,140,248,0.8)]' : ''}`} />
                              <span>{task}</span>
                            </li>
                          ))}
                          {item.responsibilities.length > 4 && (
                            <li className={`text-[11px] font-semibold pl-4 ${dark ? 'text-indigo-300/80' : 'text-indigo-600'}`}>
                              +{item.responsibilities.length - 4} more responsibilities
                            </li>
                          )}
                        </ul>

                        {/* Skills */}
                        <div className={`pt-4 border-t ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                          <div className="flex flex-wrap gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-indigo-400 mt-0.5" />
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all hover:-translate-y-0.5 ${dark ? 'bg-white/5 text-indigo-300 border-white/10 hover:border-indigo-400/50' : 'bg-white/70 text-indigo-700 border-slate-900/10'}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
