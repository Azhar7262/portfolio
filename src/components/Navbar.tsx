import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Cloud, FileText, Send, ChevronRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  activeSection,
  onOpenResumeModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Beam */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'top-3 px-4' : 'top-4 px-4'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 transition-all duration-500 glass-sheen ${
            scrolled ? 'py-2.5' : 'py-3'
          } ${dark ? 'glass-deep' : 'glass-deep-light'}`}
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)' }}
        >
          {/* Logo Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left focus:outline-none shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 group-hover:scale-105 group-hover:shadow-cyan-400/50 transition-all duration-300">
              <span>MA</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
              </span>
            </div>
            <div className="hidden sm:block">
              <span className={`block text-sm font-bold tracking-tight leading-none ${dark ? 'text-white' : 'text-slate-900'}`}>
                Muhammad Azhar
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-500 dark:text-cyan-400 mt-1">
                <Cloud className="w-3 h-3" /> AWS Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Pill */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full ${dark ? 'bg-white/5 border border-white/10' : 'bg-slate-900/5 border border-slate-900/10'}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/40 font-semibold'
                      : dark
                      ? 'text-slate-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                dark
                  ? 'bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10 hover:shadow-cyan-500/30'
                  : 'bg-slate-900/5 border border-slate-900/10 text-amber-600 hover:bg-slate-900/10'
              }`}
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenResumeModal}
              className={`hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-[1.03] ${
                dark
                  ? 'bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300'
                  : 'bg-white/60 border border-slate-900/10 text-slate-700 hover:border-cyan-600/50 hover:text-cyan-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Mobile toggles */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`sm:hidden p-2.5 rounded-xl transition-all ${
                dark
                  ? 'bg-white/5 border border-white/10 text-slate-200'
                  : 'bg-slate-900/5 border border-slate-900/10 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className={`sm:hidden mt-2 rounded-2xl animate-fadeIn overflow-hidden ${
              dark ? 'glass-deep' : 'glass-deep-light'
            }`}
          >
            <div className="px-4 pt-3 pb-5 space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.name.toLowerCase()
                      ? 'bg-cyan-500/15 text-cyan-400 font-semibold'
                      : dark
                      ? 'text-slate-300 hover:bg-white/5'
                      : 'text-slate-700 hover:bg-slate-900/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-3 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold ${
                    dark ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                  }`}
                >
                  <FileText className="w-4 h-4" /> View Resume
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                >
                  <Send className="w-4 h-4" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
