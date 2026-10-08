import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './ui';

interface ResumeSectionProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ theme, onOpenResumeModal }) => {
  const dark = theme === 'dark';

  return (
    <section id="resume" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Curriculum Vitae"
          title="Resume"
          highlight="Curriculum Vitae"
          subtitle="Complete credentials overview optimized for recruiters, hiring managers, and cloud architecture audit."
        />

        <div className={`relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-6 sm:p-10 text-center transition-colors duration-[320ms] ${
          dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'
        }`}>
          <div className="relative z-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 shadow-xl shadow-primary-500/25">
              <FileText className="h-9 w-9 text-white" />
            </div>

            <h3 className={`mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
              Muhammad Azhar
              <span className={`block text-sm font-medium ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
                · Official Resume
              </span>
            </h3>
            <p className={`mt-2 text-sm font-semibold ${dark ? 'text-primary-300' : 'text-primary-700'}`}>
              AWS Certified Solutions Architect – Associate · IT Executive · BSCS (Software) Graduate
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className={`flex items-center gap-2 rounded-xl border p-3 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className={`text-xs font-medium ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>AWS Certified Architect</span>
              </div>
              <div className={`flex items-center gap-2 rounded-xl border p-3 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className={`text-xs font-medium ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>4+ Yrs Leadership</span>
              </div>
              <div className={`flex items-center gap-2 rounded-xl border p-3 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className={`text-xs font-medium ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>BS CS CGPA 3.32</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className={`flex items-center gap-2.5 rounded-xl border px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                  dark
                    ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                    : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                }`}
              >
                <FileText className="h-4 w-4 text-primary-400" />
                <span>View Full Screen PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
