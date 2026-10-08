import React, { useState } from 'react';
import { Project, Certification } from '../types';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, CERTIFICATIONS } from '../data/portfolioData';
import { X, Download, ExternalLink, Printer, ShieldCheck, CheckCircle2, Award, FileText, Code, Monitor, Github } from 'lucide-react';

interface ModalsProps {
  theme: 'dark' | 'light';
  resumeModalOpen: boolean;
  onCloseResumeModal: () => void;
  selectedProject: Project | null;
  onCloseProjectModal: () => void;
  selectedCert: Certification | null;
  onCloseCertModal: () => void;
  privacyModalOpen: boolean;
  onClosePrivacyModal: () => void;
  termsModalOpen: boolean;
  onCloseTermsModal: () => void;
  sitemapModalOpen: boolean;
  onCloseSitemapModal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  theme,
  resumeModalOpen,
  onCloseResumeModal,
  selectedProject,
  onCloseProjectModal,
  selectedCert,
  onCloseCertModal,
  privacyModalOpen,
  onClosePrivacyModal,
  termsModalOpen,
  onCloseTermsModal,
  sitemapModalOpen,
  onCloseSitemapModal,
}) => {
  const dark = theme === 'dark';

  const handlePrintResume = () => {
    window.print();
  };

  const paperClassName = `max-w-3xl rounded-2xl border p-8 sm:p-12 text-slate-900 shadow-2xl ${
    dark ? 'border-slate-200' : 'border-slate-200'
  }`;

  return (
    <>
      {/* 1. RESUME MODAL */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className={`flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl transition-all ${
              dark ? 'border-white/10 bg-slate-950/90 text-white' : 'border-slate-200 bg-white text-[#0b0d17]'
            }`}
          >
            {/* Modal Header */}
            <div className={`flex flex-shrink-0 items-center justify-between border-b p-5 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${dark ? 'bg-primary-500/10 border-primary-400/20 text-primary-300' : 'bg-primary-100 border-primary-400/30 text-primary-700'}`}>
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                    Muhammad Azhar — Resume
                  </h3>
                  <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    AWS Certified Solutions Architect – Associate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintResume}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                    dark
                      ? 'bg-white/5 text-ink-soft hover:bg-white/10 hover:text-primary-300'
                      : 'bg-white text-ink-faint hover:bg-slate-100 hover:text-primary-700'
                  }`}
                >
                  <Printer className="h-3.5 w-3.5" />
                  Print
                </button>

                <button
                  onClick={onCloseResumeModal}
                  aria-label="Close Resume Modal"
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                    dark
                      ? 'bg-white/5 text-ink-soft hover:bg-white/10 hover:text-primary-300'
                      : 'bg-white text-ink-faint hover:bg-slate-100 hover:text-primary-700'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className={`flex flex-1 flex-col overflow-y-auto p-5 sm:p-8 space-y-6 ${dark ? 'bg-slate-950/40' : 'bg-slate-50'}`}>
              <div
                className={`${paperClassName} space-y-6`}
              >
                {/* Resume Header */}
                <div className={`rounded-xl border p-5 text-center ${dark ? 'border-white/10' : 'border-slate-200'}`}>
                  <h1 className={`text-3xl font-extrabold tracking-tight uppercase ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                    MUHAMMAD AZHAR
                  </h1>
                  <p className={`mt-1 font-mono text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    {PERSONAL_INFO.hometown} · {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
                  </p>
                  <p className={`mt-1 font-mono text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    {PERSONAL_INFO.linkedin} · {PERSONAL_INFO.github}
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Professional Summary
                  </h2>
                  <p className={`mt-1 text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h2 className={`text-xs font-bold uppercase tracking-wider mb-2 ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Education
                  </h2>
                  <div className={`space-y-2 text-sm ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    <div className="flex items-center justify-between gap-2 font-bold">
                      <span>{EDUCATION_DATA.degree}</span>
                      <span>{EDUCATION_DATA.period}</span>
                    </div>
                    <p className={`italic ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>{EDUCATION_DATA.institution}</p>
                    <p className={`font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      · CGPA: {EDUCATION_DATA.cgpa}
                    </p>
                    <p className={`font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      · Thesis: {EDUCATION_DATA.finalYearProject.title}
                    </p>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h2 className={`text-xs font-bold uppercase tracking-wider mb-2 ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Work Experience
                  </h2>
                  <div className="space-y-3">
                    {EXPERIENCE_DATA.map((exp) => (
                      <div key={exp.id} className={`rounded-xl border p-4 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold">{exp.role} — {exp.company}</span>
                          <span className="font-mono text-xs">{exp.period}</span>
                        </div>
                        <p className={`font-mono text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>{exp.location}</p>
                        <ul className="mt-1 list-disc space-y-1 pl-4 text-xs">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className={`text-xs font-bold uppercase tracking-wider mb-2 ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Certifications & Honors
                  </h2>
                  <ul className="space-y-1 text-sm">
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.id} className={dark ? 'text-ink-soft' : 'text-ink-faint'}>
                        <span className="font-semibold">{cert.title}</span> — {cert.organization} ({cert.issueDate})
                      </li>
                    ))}
                    <li className={`font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      Gold Medal in Co-Curricular Activities — AWKUM (Oct 2025)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PROJECT DETAIL & ARCHITECTURE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} details`}
          onClick={onCloseProjectModal}
        >
          <div
            className={`max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border p-5 sm:p-8 shadow-2xl ${
              dark ? 'border-white/10 bg-slate-950/90 text-white' : 'border-slate-200 bg-white text-[#0b0d17]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'
                  }`}
                >
                  {selectedProject.category}
                </span>
                <h3 className={`mt-2 text-2xl font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={onCloseProjectModal}
                aria-label="Close project details"
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  dark ? 'bg-white/5 text-ink-soft hover:bg-white/10' : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className={`mt-4 text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
              {selectedProject.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className={`rounded-xl border p-4 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
                <h5 className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Key Features
                </h5>
                <ul className="mt-2 space-y-1.5">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className={`flex items-start gap-2 text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl border p-4 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
                <h5 className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  <Code className="h-3.5 w-3.5 text-primary-400" />
                  Tech Stack
                </h5>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
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

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  View GitHub Repository
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                      : 'border-slate-200 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                  }`}
                >
                  <Monitor className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. CERTIFICATE VERIFICATION MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`Verify ${selectedCert.title}`}
          onClick={onCloseCertModal}
        >
          <div
            className={`max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border p-5 sm:p-8 shadow-2xl ${
              dark ? 'border-white/10 bg-slate-950/90 text-white' : 'border-slate-200 bg-white text-[#0b0d17]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex flex-shrink-0 items-center justify-between border-b p-5 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="h-5 w-5 text-primary-400" />
                Credential Verification
              </div>
              <button
                onClick={onCloseCertModal}
                aria-label="Close credential verification"
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  dark ? 'bg-white/5 text-ink-soft hover:bg-white/10' : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4 text-center">
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${dark ? 'border-primary-500/20 bg-primary-500/10 text-primary-300' : 'border-primary-300 bg-primary-100 text-primary-700'}`}>
                <Award className="h-8 w-8" />
              </div>

              <p className={`font-mono text-xs uppercase tracking-wider ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                {selectedCert.organization}
              </p>
              <h3 className={`text-xl font-extrabold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                {selectedCert.title}
              </h3>
              <p className={`font-mono text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                Credential ID: {selectedCert.credentialId}
              </p>

              <div
                className={`rounded-xl border p-4 text-left space-y-1 ${
                  dark ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                }`}
              >
                <div className="flex items-center justify-center gap-2 font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  Official Status: Verified Active
                </div>
                <p className="text-xs">
                  Issued: {selectedCert.issueDate} · Validated for Cloud Solutions Architecture
                </p>
              </div>

              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                Open Issuer Portal
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRIVACY POLICY MODAL */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Policy"
          onClick={onClosePrivacyModal}
        >
          <div
            className={`max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-2xl ${
              dark ? 'border-white/10 bg-slate-950/90 text-white' : 'border-slate-200 bg-white text-[#0b0d17]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between border-b pb-3 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                Privacy Policy
              </h3>
              <button
                onClick={onClosePrivacyModal}
                aria-label="Close privacy policy"
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  dark ? 'bg-white/5 text-ink-soft hover:bg-white/10' : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
              This portfolio website respects visitor privacy. No personal tracking data is stored or distributed. Any inquiries submitted through the contact form are kept strictly confidential for direct professional communication with Muhammad Azhar.
            </p>
          </div>
        </div>
      )}

      {/* 5. TERMS & CONDITIONS MODAL */}
      {termsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Terms & Conditions"
          onClick={onCloseTermsModal}
        >
          <div
            className={`max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-2xl ${
              dark ? 'border-white/10 bg-slate-950/90 text-white' : 'border-slate-200 bg-white text-[#0b0d17]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between border-b pb-3 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                Terms & Conditions
              </h3>
              <button
                onClick={onCloseTermsModal}
                aria-label="Close terms and conditions"
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  dark ? 'bg-white/5 text-ink-soft hover:bg-white/10' : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className={`text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
              All content, design assets, and project descriptions on this personal portfolio belong to Muhammad Azhar. Visitors are welcome to view, share, and review material for hiring and professional evaluation purposes.
            </p>
          </div>
        </div>
      )}

      {/* 6. SITEMAP MODAL */}
      {sitemapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Sitemap"
          onClick={onCloseSitemapModal}
        >
          <div
            className={`max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-2xl font-mono text-xs ${
              dark ? 'border-white/10 bg-slate-950/90 text-[#939ab7]' : 'border-slate-200 bg-white text-[#5c667a]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between border-b pb-3 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <h3 className={`font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                Sitemap & Robots
              </h3>
              <button
                onClick={onCloseSitemapModal}
                aria-label="Close sitemap"
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                  dark ? 'bg-white/5 text-ink-soft hover:bg-white/10' : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2 p-4 rounded-xl border border-white/5">
              <p>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</p>
              <p>&lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar-portfolio.vercel.app/&lt;/loc&gt;&lt;priority&gt;1.0&lt;/priority&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar-portfolio.vercel.app/#about&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar-portfolio.vercel.app/#education&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar-portfolio.vercel.app/#experience&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar-portfolio.vercel.app/#projects&lt;/loc&gt;&lt;/url&gt;</p>
              <p>&lt;/urlset&gt;</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

