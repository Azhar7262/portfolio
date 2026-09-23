import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { Download, FileText, Printer, CheckCircle2, Cloud, Mail, Phone, MapPin, Award } from 'lucide-react';

interface ResumeSectionProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ theme, onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Complete credentials overview optimized for recruiters, hiring managers, and cloud architecture audit.
          </p>
        </div>

        {/* Large Download Resume Callout Card */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 relative overflow-hidden text-center max-w-4xl mx-auto ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-slate-800 text-white shadow-2xl shadow-cyan-950/20'
            : 'bg-gradient-to-r from-white via-slate-50 to-white border-slate-200 text-slate-900 shadow-xl'
        }`}>
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 mx-auto shadow-lg shadow-cyan-500/30 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Muhammad Azhar - Official Resume
              </h3>
              <p className={`text-xs sm:text-sm ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                AWS Certified Solutions Architect – Associate | IT Executive | BSCS (Software) Graduate
              </p>
            </div>

            {/* Resume Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-left py-2">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AWS Certified Architect</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>4+ Yrs Leadership</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>BS CS CGPA 3.32</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold border transition-all ${
                  theme === 'dark'
                    ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-500 hover:text-cyan-400'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-600'
                }`}
              >
                <FileText className="w-5 h-5 text-cyan-500" />
                <span>View Full Screen PDF</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
