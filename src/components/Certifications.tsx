import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, ShieldCheck, ExternalLink, Calendar, Hash } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface CertificationsProps {
  theme: 'dark' | 'light';
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ theme, onSelectCert }) => {
  const dark = theme === 'dark';

  const handleVerifyClick = (cert: Certification) => {
    onSelectCert(cert);
  };

  return (
    <section id="achievements" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Credentials & Honors"
          title="Certifications"
          highlight="Credentials"
          subtitle="Industry-recognized credentials, academic honors, and leadership roles validating technical mastery and executive involvement."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert, idx) => (
            <Reveal key={cert.id} delay={(idx % 2) * 100}>
              <div
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-[300ms] hover:-translate-y-1 hover:shadow-xl ${
                  dark
                    ? 'border-white/10 bg-white/[0.03] hover:border-primary-400/20'
                    : 'border-slate-200/80 bg-white hover:border-primary-300/30'
                }`}
              >
                {/* Banner */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cert.badgeImage}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        dark ? 'bg-white/15 text-primary-300' : 'bg-white/15 text-primary-700'
                      }`}
                    >
                      <Cloud className="h-3 w-3" />
                      {cert.organization}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`text-lg font-extrabold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-1 flex-col justify-between space-y-4">
                  <p className={`text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 border-t pt-4">
                    <div
                      className={`flex flex-wrap items-center justify-between gap-3 text-xs ${
                        dark ? 'border-white/10' : 'border-slate-200/80'
                      }`}
                    >
                      <div className="space-y-1 font-mono text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary-400" />
                          <span>Issued: {cert.issueDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Hash className="h-3.5 w-3.5 text-primary-400" />
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleVerifyClick(cert)}
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                          dark
                            ? 'bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                            : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                        }`}
                      >
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Verify Credential
                      </button>
                    </div>
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

const Cloud = ({ className }: { className?: string }) => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <rect x="1.5" y="7" width="11" height="5" rx="1" fill="currentColor" />
    <path d="M4 3 L4 6 L5.5 6 L7 3 L8.5 6 L10 6 L10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
