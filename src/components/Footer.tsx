import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cloud, Github, Linkedin, Mail, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenSitemapModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenSitemapModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`border-t relative z-10 transition-colors ${
      theme === 'dark' ? 'bg-slate-950 border-slate-800/80 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400 font-bold text-base">
                  MA
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Muhammad Azhar</h3>
                <p className="text-xs text-cyan-400 flex items-center gap-1 font-semibold">
                  <Cloud className="w-3.5 h-3.5" /> AWS Certified Solutions Architect
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Designing scalable cloud solutions, building resilient IT infrastructure, and delivering innovative technology operations across Pakistan and worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Direct"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Legal</h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>Islamabad, Pakistan</p>
              <p className="font-mono text-cyan-400">{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.phone}</p>
            </div>

            <div className="pt-2 flex flex-col space-y-1 text-xs">
              <button onClick={onOpenPrivacyModal} className="text-left text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </button>
              <button onClick={onOpenTermsModal} className="text-left text-slate-400 hover:text-cyan-400 transition-colors">
                Terms & Conditions
              </button>
              <button onClick={onOpenSitemapModal} className="text-left text-slate-400 hover:text-cyan-400 transition-colors">
                Sitemap & XML Structure
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Azhar. All Rights Reserved. AWS Certified Solutions Architect.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
