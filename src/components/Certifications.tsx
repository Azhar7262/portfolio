import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, ShieldCheck, ExternalLink, CheckCircle2, Calendar, Hash, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CertificationsProps {
  theme: 'dark' | 'light';
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ theme, onSelectCert }) => {
  const handleVerifyClick = (cert: Certification) => {
    // Trigger confetti celebration!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    onSelectCert(cert);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Licenses</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Honors</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Industry-recognized credentials validating AWS cloud expertise, technical mastery, and executive leadership.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`group rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              
              {/* Card Header Banner Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.badgeImage}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                {/* Verified Badge Header */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/90 text-slate-950 shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {cert.organization}
                  </p>
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {cert.description}
                </p>

                {/* Skills Verified Pills */}
                <div className="space-y-2">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Validated Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Metadata & Verify CTA */}
                <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-1 text-slate-400 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-cyan-500" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleVerifyClick(cert)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
