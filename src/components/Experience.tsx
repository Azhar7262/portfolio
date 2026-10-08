import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, MapPin, Building, Award, Users, GraduationCap } from 'lucide-react';
import { SectionHeading } from './ui';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const dark = theme === 'dark';
  const items = EXPERIENCE_DATA;

  const iconFor = (type: ExperienceItem['type']) => {
    if (type === 'Full-time') return Briefcase;
    if (type === 'Internship') return GraduationCap;
    if (type === 'Leadership') return Users;
    return Briefcase;
  };

  return (
    <section id="experience" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Career Journey"
          title="Experience"
          highlight="Timeline"
          subtitle="A proven track record across enterprise IT administration, cloud engineering, and organizational leadership."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="h-16" />

          <div className="space-y-12">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = iconFor(item.type);
              const first = idx === 0;
              const last = idx === items.length - 1;

              return (
                <div
                  key={item.id}
                  className={`flex items-start gap-6 sm:gap-8 ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div
                    className={`relative z-10 flex flex-col items-center sm:flex-col ${
                      isEven ? 'mr-auto pl-8' : 'ml-auto pr-8'
                    }`}
                  >
                    <div
                      className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-[320ms] hover:scale-105 ${
                        dark
                          ? 'border-white/10 bg-white/[0.04] text-primary-300'
                          : 'border-primary-200 bg-white text-primary-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    {!first && (
                      <div
                        className={`absolute top-14 h-full w-px ${
                          isEven ? 'right-[calc(50%-1.5rem)]' : 'left-[calc(50%-1.5rem)]'
                        } ${dark ? 'bg-white/10' : 'bg-slate-200/70'}`}
                      />
                    )}
                    {!last && (
                      <div
                        className={`absolute top-full h-5 w-0.5 ${
                          isEven ? 'right-[calc(50%-1.5rem)]' : 'left-[calc(50%-1.5rem)]'
                        } ${dark ? 'bg-white/10' : 'bg-slate-200/70'}`}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 w-full max-w-xl rounded-2xl border p-5 sm:p-7 transition-all duration-[300ms] hover:-translate-y-1 hover:shadow-lg ${
                      dark
                        ? 'border-white/10 bg-white/[0.03] hover:border-primary-400/20 hover:bg-white/[0.05]'
                        : 'border-slate-200/80 bg-white hover:border-primary-300/30 hover:shadow-primary-500/8'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                          dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint'
                        }`}
                      >
                        {item.type}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                          dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    <h3 className={`mt-3 text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                      {item.role}
                    </h3>
                    <div className={`mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      <span className="flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {item.highlight && (
                      <div
                        className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 ${
                          dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <Award className="h-4 w-4 shrink-0 text-primary-400" />
                        <p className={`text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                          {item.highlight}
                        </p>
                      </div>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {item.responsibilities.map((task, tIdx) => (
                        <li key={tIdx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                          <span
                            className={`mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              dark ? 'bg-primary-500/15' : 'bg-primary-100'
                            }`}
                          >
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                              <path d="M2.5 1.5 L4.5 4.5 L2.5 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-1.5 border-t pt-4 ${
                        dark ? 'border-white/10' : 'border-slate-200/80'
                      }`}
                    >
                      {(item.skills ?? []).map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
