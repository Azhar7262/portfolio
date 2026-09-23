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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800/20">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-cyan-950/20 py-3'
              : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a
              href="#hero"
              className="group flex items-center gap-3 text-left focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span>MA</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                </span>
              </div>
              <div>
                <span
                  className={`block text-base font-bold tracking-tight leading-none ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Muhammad Azhar
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-500 dark:text-cyan-400 mt-0.5">
                  <Cloud className="w-3 h-3" /> AWS Architect
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/70 light:bg-slate-100/70 p-1.5 rounded-full border border-slate-800/50 dark:border-slate-800 light:border-slate-200 backdrop-blur-md">
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
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/30 font-semibold'
                        : theme === 'dark'
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-slate-800 text-cyan-400 hover:bg-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 border-slate-200 text-amber-600 hover:bg-slate-200 hover:border-slate-300'
                }`}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* View/Download Resume button */}
              <button
                onClick={onOpenResumeModal}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-slate-700 text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400'
                    : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-cyan-600 hover:text-cyan-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-cyan-500" />
                <span>Resume</span>
              </button>

              {/* Hire Me CTA Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`p-2 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-cyan-400'
                    : 'bg-slate-100 border-slate-200 text-amber-600'
                }`}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className={`p-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b shadow-2xl transition-all duration-300 animate-fadeIn ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-800 text-slate-200 backdrop-blur-2xl'
                : 'bg-white/95 border-slate-200 text-slate-800 backdrop-blur-2xl'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
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
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-4 border-cyan-500'
                      : 'hover:bg-slate-800/40'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
                >
                  <FileText className="w-4 h-4" /> View Resume
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
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
