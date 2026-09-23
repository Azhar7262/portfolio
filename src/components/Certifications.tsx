import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, ShieldCheck, ExternalLink, Calendar, Hash } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading, Reveal } from './ui';

interface CertificationsProps {
  theme: 'dark' | 'light';
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ theme, onSelectCert }) => {
  const dark = theme === 'dark';

  const handleVerifyClick = (cert: Certification) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22d3ee', '#60a5fa', '#818cf8', '#c084fc', '#34d399']
    });
    onSelectCert(cert);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Credentials & Licenses"
          title="Certifications &"
          highlight="Honors"
          subtitle="Industry-recognized credentials validating AWS cloud expertise, technical mastery, and executive leadership."
        />

        {/* Certificate Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <Reveal key={cert.id} delay={(idx % 2) * 100}>
              <div className={`group rounded-3xl glass-sheen glow-hover overflow-hidden flex flex-col justify-between h-full ${dark ? 'glass' : 'glass-light'}`}>

                {/* Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.badgeImage}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  {/* Verified pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400/90 text-slate-950 shadow-lg shadow-cyan-500/40 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider">
                      {cert.organization}
                    </p>
                    <h3 className="text-lg font-extrabold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {cert.description}
                  </p>

                  {/* Skills verified */}
                  <div className="space-y-2">
                    <span className={`block text-[11px] font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Validated Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsVerified.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${dark ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata + CTA */}
                  <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                    <div className={`space-y-1 font-mono text-[11px] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Hash className="w-3.5 h-3.5 text-cyan-400" />
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleVerifyClick(cert)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
