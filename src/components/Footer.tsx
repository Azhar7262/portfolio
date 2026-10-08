import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MessageSquare, ArrowUp, Cloud, Menu, X } from 'lucide-react';

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
  onOpenSitemapModal,
}) => {
  const dark = theme === 'dark';

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { href: PERSONAL_INFO.github, label: 'GitHub Profile', icon: <Github className="h-4 w-4" /> },
    { href: PERSONAL_INFO.linkedin, label: 'LinkedIn Profile', icon: <Linkedin className="h-4 w-4" /> },
    { href: `mailto:${PERSONAL_INFO.email}`, label: 'Email Direct', icon: <Mail className="h-4 w-4" /> },
    { href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`, label: 'WhatsApp Direct', icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <footer className="relative z-10 pb-8 pt-8 sm:pt-10">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
        <div
          className={`rounded-2xl border p-6 sm:p-8 transition-colors duration-[320ms] ${
            dark ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200/80 bg-white'
          }`}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-0.5">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Azhar"
                    className="h-full w-full rounded-[12px] object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                    Muhammad Azhar
                  </h3>
                  <p className={`text-xs font-semibold ${dark ? 'text-primary-300' : 'text-primary-700'}`}>
                    Cloud & AI Engineer
                  </p>
                </div>
              </div>
              <p className={`mt-3 text-xs leading-relaxed max-w-sm ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
                Designing scalable cloud solutions, building resilient IT infrastructure, and delivering innovative technology operations across Pakistan and worldwide.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                      dark
                        ? 'border-white/10 bg-white/5 text-[#939ab7] hover:border-primary-400/40 hover:text-primary-300'
                        : 'border-slate-200 bg-white text-[#5c667a] hover:border-primary-300 hover:text-primary-700'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-4">
              <h4 className={`text-xs font-bold uppercase tracking-wide ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
                Navigation
              </h4>
              <div className="mt-3 space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block text-xs transition-colors hover:text-primary-300 ${
                      dark ? 'text-[#939ab7]' : 'text-[#5c667a]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & legal */}
            <div className="md:col-span-3">
              <h4 className={`text-xs font-bold uppercase tracking-wide ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
                Contact
              </h4>
              <div className={`mt-3 space-y-2 text-xs ${dark ? 'text-[#939ab7]' : 'text-[#5c667a]'}`}>
                <p className="text-[#f1f5f9]">{PERSONAL_INFO.location}</p>
                <p className="text-[#939ab7]">{PERSONAL_INFO.email}</p>
                <p className="text-[#939ab7]">{PERSONAL_INFO.phone}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-xs transition-colors hover:text-primary-300"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={onOpenTermsModal}
                  className="text-xs transition-colors hover:text-primary-300"
                >
                  Terms & Conditions
                </button>
                <button
                  type="button"
                  onClick={onOpenSitemapModal}
                  className="text-xs transition-colors hover:text-primary-300"
                >
                  Sitemap
                </button>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 flex flex-col sm:flex-row items-center justify-between border-t pt-6 text-xs ${
              dark ? 'border-white/5 text-[#939ab7]' : 'border-slate-200/80 text-[#5c667a]'
            }`}
          >
            <p>© {new Date().getFullYear()} Muhammad Azhar · AWS Certified Solutions Architect</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 transition-colors hover:text-primary-300"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
