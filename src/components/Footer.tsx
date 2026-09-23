import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cloud, Github, Linkedin, Mail, MessageSquare, ArrowUp } from 'lucide-react';

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
  const dark = theme === 'dark';
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

  const socials = [
    { href: PERSONAL_INFO.github, label: 'GitHub Profile', icon: <Github className="w-4 h-4" /> },
    { href: PERSONAL_INFO.linkedin, label: 'LinkedIn Profile', icon: <Linkedin className="w-4 h-4" /> },
    { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email Direct', icon: <Mail className="w-4 h-4" /> },
    { href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`, label: 'WhatsApp Direct', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative z-10 pt-16 pb-8 px-4">
      <div className={`max-w-7xl mx-auto rounded-3xl glass-sheen px-6 sm:px-10 py-12 ${dark ? 'glass' : 'glass-light'}`}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">

          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 p-px shadow-lg shadow-cyan-500/30">
                <div className={`w-full h-full rounded-xl flex items-center justify-center text-cyan-400 font-bold text-base ${dark ? 'bg-slate-950' : 'bg-white'}`}>
                  MA
                </div>
              </div>
              <div>
                <h3 className={`text-base font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>Muhammad Azhar</h3>
                <p className="text-xs text-cyan-400 flex items-center gap-1 font-semibold">
                  <Cloud className="w-3.5 h-3.5" /> AWS Certified Solutions Architect
                </p>
              </div>
            </div>

            <p className={`text-xs leading-relaxed max-w-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              Designing scalable cloud solutions, building resilient IT infrastructure, and delivering innovative technology operations across Pakistan and worldwide.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 ${
                    dark
                      ? 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50'
                      : 'bg-white/70 border-slate-900/10 text-slate-600 hover:text-cyan-700 hover:border-cyan-600/50'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-slate-900'}`}>Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${dark ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-600 hover:text-cyan-700'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-slate-900'}`}>Contact & Legal</h4>
            <div className={`space-y-1.5 text-xs ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>Islamabad, Pakistan</p>
              <p className="font-mono text-cyan-400">{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.phone}</p>
            </div>

            <div className="pt-2 flex flex-col space-y-1 text-xs">
              <button onClick={onOpenPrivacyModal} className={`text-left transition-colors ${dark ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-600 hover:text-cyan-700'}`}>
                Privacy Policy
              </button>
              <button onClick={onOpenTermsModal} className={`text-left transition-colors ${dark ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-600 hover:text-cyan-700'}`}>
                Terms & Conditions
              </button>
              <button onClick={onOpenSitemapModal} className={`text-left transition-colors ${dark ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-600 hover:text-cyan-700'}`}>
                Sitemap & XML Structure
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${dark ? 'text-slate-500' : 'text-slate-500'}`}>
          <p>© {new Date().getFullYear()} Muhammad Azhar. All Rights Reserved. AWS Certified Solutions Architect.</p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all hover:-translate-y-0.5 ${
              dark
                ? 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50'
                : 'bg-white/70 border-slate-900/10 text-slate-600 hover:text-cyan-700 hover:border-cyan-600/50'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
