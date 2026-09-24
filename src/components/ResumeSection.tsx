import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface ResumeSectionProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ theme, onOpenResumeModal }) => {
  const dark = theme === 'dark';

  return (
    <section id="resume" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Curriculum Vitae"
          title="Professional"
          highlight="Resume"
          subtitle="Complete credentials overview optimized for recruiters, hiring managers, and cloud architecture audit."
        />

        {/* Big glass download callout */}
        <Reveal>
          <div className={`p-8 sm:p-12 rounded-3xl glass-sheen relative overflow-hidden text-center max-w-4xl mx-auto ${dark ? 'glass-deep border-glow' : 'glass-deep-light border-glow'}`}>

            {/* Glow accents */}
            <div className="absolute -top-20 left-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-600 to-orange-600 p-px mx-auto shadow-xl shadow-amber-500/40 flex items-center justify-center animate-float-soft">
                <div className={`w-full h-full rounded-2xl flex items-center justify-center ${dark ? 'bg-slate-950' : 'bg-white'}`}>
                  <FileText className="w-7 h-7 text-amber-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className={`text-2xl sm:text-3xl font-extrabold ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Muhammad Azhar — <span className="text-gradient">Official Resume</span>
                </h3>
                <p className={`text-xs sm:text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                  AWS Certified Solutions Architect – Associate | IT Executive | BSCS (Software) Graduate
                </p>
              </div>

              {/* Feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-left py-2">
                {['AWS Certified Architect', '4+ Yrs Leadership', 'BS CS CGPA 3.32'].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-2 p-3 rounded-xl border ${dark ? 'bg-white/5 border-white/10 text-slate-200' : 'bg-white/70 border-slate-900/10 text-slate-700'}`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="group relative overflow-hidden flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 via-orange-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="absolute top-0 left-0 h-full w-1/3 bg-white/25 blur-md" style={{ animation: 'shine-sweep 1.2s ease infinite' }} />
                  </span>
                  <Download className="w-5 h-5" />
                  <span>Download Resume (PDF)</span>
                </button>

                <button
                  onClick={onOpenResumeModal}
                  className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold glass-sheen transition-all hover:-translate-y-1 ${
                    dark ? 'glass text-slate-200 hover:text-amber-300 border-amber-400/30' : 'glass-light text-slate-700 hover:text-amber-700 border-amber-600/30'
                  }`}
                >
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>View Full Screen PDF</span>
                </button>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
