import React, { useState } from 'react';
import { Project, Certification } from '../types';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { X, Download, ExternalLink, Printer, ShieldCheck, CheckCircle2, Award, FileText, Globe, Code, Building, MapPin, Calendar, Mail, Phone } from 'lucide-react';

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
  onCloseSitemapModal
}) => {
  const [activeResumeTab, setActiveResumeTab] = useState<'preview' | 'text'>('preview');

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <>
      {/* 1. RESUME MODAL */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all glass-deep text-white`}>
            
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <FileText className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Muhammad Azhar - Resume PDF</h3>
                  <p className="text-xs text-slate-400">AWS Certified Solutions Architect – Associate</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintResume}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-200 hover:text-white flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5 text-amber-400" /> Print
                </button>

                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>

                <button
                  onClick={onCloseResumeModal}
                  aria-label="Close Resume Modal"
                  className="p-2 rounded-xl glass text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded Resume Paper Simulation */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950/60 font-sans">
              <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 space-y-6">
                
                {/* Resume Header */}
                <div className="text-center border-b pb-6 border-slate-200 space-y-2">
                  <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                    MUHAMMAD AZHAR
                  </h1>
                  <p className="text-xs font-semibold text-slate-600">
                    {PERSONAL_INFO.hometown} | {PERSONAL_INFO.phone} | {PERSONAL_INFO.email}
                  </p>
                  <p className="text-xs font-semibold text-amber-700">
                    {PERSONAL_INFO.linkedin} | {PERSONAL_INFO.github}
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="space-y-1">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-xs leading-relaxed text-slate-700 pt-1">
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
                    EDUCATION
                  </h2>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{EDUCATION_DATA.degree}</span>
                      <span>{EDUCATION_DATA.period}</span>
                    </div>
                    <p className="text-slate-600 italic">{EDUCATION_DATA.institution}</p>
                    <p className="font-semibold text-slate-800">• CGPA: {EDUCATION_DATA.cgpa}</p>
                    <p className="font-semibold text-slate-800">• Thesis: {EDUCATION_DATA.finalYearProject.title}</p>
                  </div>
                </div>

                {/* Work Experience */}
                <div className="space-y-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
                    WORK EXPERIENCE
                  </h2>
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{exp.role} – {exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-slate-600 italic">{exp.location}</p>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 pt-0.5">
                        {exp.responsibilities.slice(0, 3).map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
                    CERTIFICATIONS & HONORS
                  </h2>
                  <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.id}>
                        <span className="font-bold text-slate-900">{cert.title}</span> — {cert.organization} ({cert.issueDate})
                      </li>
                    ))}
                    <li>Gold Medal in Co-Curricular Activities — AWKUM (Oct 2025)</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. PROJECT DETAIL & ARCHITECTURE MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden glass-deep text-white`}>
            
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-base font-bold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={onCloseProjectModal}
                className="p-2 rounded-xl glass text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Architecture Diagram or Project Banner */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={selectedProject.architectureDiagram || selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900/90 text-amber-300 border border-amber-500/30">
                  Architecture Overview
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Architectural Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.githubUrl && (
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 flex items-center gap-2 shadow-md"
                  >
                    <Code className="w-4 h-4" /> View GitHub Repository
                  </a>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

      {/* 3. CERTIFICATE VERIFICATION MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden glass-deep text-white`}>
            
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" /> Credential Verification
              </div>
              <button onClick={onCloseCertModal} className="p-2 rounded-xl glass text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8 text-amber-400" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">{selectedCert.organization}</span>
                <h3 className="text-xl font-extrabold text-white mt-1">{selectedCert.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Credential ID: {selectedCert.credentialId}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium text-left space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Official Status: Verified Active
                </div>
                <p>Issued: {selectedCert.issueDate} • Validated for Cloud Solutions Architecture</p>
              </div>

              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md"
              >
                <span>Open Issuer Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* 4. PRIVACY POLICY MODAL */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[80vh] rounded-3xl glass-deep text-white p-6 overflow-y-auto space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold">Privacy Policy</h3>
              <button onClick={onClosePrivacyModal} className="p-1.5 rounded-lg glass text-slate-300 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This portfolio website respects visitor privacy. No personal tracking data is stored or distributed. Any inquiries submitted through the contact form are kept strictly confidential for direct professional communication with Muhammad Azhar.
            </p>
          </div>
        </div>
      )}

      {/* 5. TERMS & CONDITIONS MODAL */}
      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[80vh] rounded-3xl glass-deep text-white p-6 overflow-y-auto space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold">Terms & Conditions</h3>
              <button onClick={onCloseTermsModal} className="p-1.5 rounded-lg glass text-slate-300 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              All content, design assets, and project descriptions on this personal portfolio belong to Muhammad Azhar. Visitors are welcome to view, share, and review material for hiring and professional evaluation purposes.
            </p>
          </div>
        </div>
      )}

      {/* 6. SITEMAP MODAL */}
      {sitemapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[80vh] rounded-3xl glass-deep text-white p-6 overflow-y-auto space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-white/10 pb-3 font-sans">
              <h3 className="text-lg font-bold">Sitemap & robots.txt</h3>
              <button onClick={onCloseSitemapModal} className="p-1.5 rounded-lg glass text-slate-300 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-amber-300">
              <p>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</p>
              <p>&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar.portfolio/&lt;/loc&gt;&lt;priority&gt;1.0&lt;/priority&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar.portfolio/#about&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar.portfolio/#education&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar.portfolio/#experience&lt;/loc&gt;&lt;/url&gt;</p>
              <p className="pl-4">&lt;url&gt;&lt;loc&gt;https://muhammad-azhar.portfolio/#projects&lt;/loc&gt;&lt;/url&gt;</p>
              <p>&lt;/urlset&gt;</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
