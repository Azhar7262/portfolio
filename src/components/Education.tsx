import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Award, BookOpen, CheckCircle2, MapPin, GraduationCap, Calendar, Globe } from 'lucide-react';
import { SectionHeading } from './ui';

interface EducationProps {
  theme: 'dark' | 'light';
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  const dark = theme === 'dark';

  return (
    <section id="education" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Academic Background"
          title="Education"
          highlight="BSCS (SW)"
          subtitle="Academic foundation in software engineering, computer networks, and cloud architecture at Abdul Wali Khan University Mardan."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Degree card */}
          <div className="lg:col-span-7">
            <div
              className={`overflow-hidden rounded-2xl border transition-colors duration-[320ms] ${
                dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'
              }`}
            >
              <div className={`p-6 sm:p-8 ${dark ? 'bg-white/[0.02]' : 'bg-slate-50'}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                    }`}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      <Calendar className="h-3 w-3" />
                      {EDUCATION_DATA.period}
                    </span>
                  </div>
                </div>

                <h3 className={`mt-4 text-2xl font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                  {EDUCATION_DATA.degree}
                </h3>
                <p className={`mt-1 text-sm font-medium ${dark ? 'text-primary-300' : 'text-primary-700'}`}>
                  {EDUCATION_DATA.shortDegree}
                  <span className="mx-1.5 text-ink-soft">·</span>
                  <span className="text-ink-soft">{EDUCATION_DATA.department}</span>
                </p>
                <p className={`mt-2 text-sm ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {EDUCATION_DATA.institution}
                </p>

                <div
                  className={`mt-4 flex flex-wrap gap-3 text-xs ${
                    dark ? 'text-ink-soft' : 'text-ink-faint'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary-400" />
                    {EDUCATION_DATA.institution}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-primary-400" />
                    Islamabad / Mardan, Pakistan
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      dark ? 'bg-amber-500/10 text-amber-300' : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    CGPA {EDUCATION_DATA.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thesis card */}
          <div className="lg:col-span-5">
            <div
              className={`overflow-hidden rounded-2xl border transition-colors duration-[320ms] ${
                dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'
              }`}
            >
              <div className={`p-6 sm:p-8 ${dark ? 'bg-white/[0.02]' : 'bg-slate-50'}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      dark ? 'bg-sky-500/10 text-sky-300' : 'bg-sky-100 text-sky-700'
                    }`}
                  >
                    <BookOpen className="h-3 w-3" />
                    Final Year Thesis
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                    }`}
                  >
                    AWS + IoT
                  </span>
                </div>

                <h4 className={`mt-4 text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                  {EDUCATION_DATA.finalYearProject.title}
                </h4>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {EDUCATION_DATA.finalYearProject.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {EDUCATION_DATA.finalYearProject.highlights.map((h) => (
                    <div key={h} className={`flex items-start gap-2.5 rounded-xl p-3 ${dark ? 'bg-white/5' : 'bg-white'}`}>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <p className={`text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>{h}</p>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-5 flex flex-wrap gap-2 border-t pt-4 ${
                    dark ? 'border-white/10' : 'border-slate-200/80'
                  }`}
                >
                  {EDUCATION_DATA.finalYearProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md px-2.5 py-1 text-[11px] font-mono font-medium ${
                        dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint'
                      }`}
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
