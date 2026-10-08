import React, { useState, useEffect, useCallback } from 'react';
import {
  Menu, X, Send, FileText, Moon, Sun
} from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  activeSection: string;
  onOpenResumeModal: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, activeSection, onOpenResumeModal, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const dark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navigate = (href: string) => {
    closeMobile();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] overflow-hidden">
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 transition-[width_150ms_ease-out]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[transform,height] duration-[320ms_ease-out] ${
          scrolled || mobileOpen
            ? dark
              ? 'translate-y-0 rounded-t-[20px] border border-white/10 bg-[#0b0d17]/80 shadow-lg shadow-black/30 backdrop-blur-xl'
              : 'translate-y-0 rounded-t-[20px] border border-slate-900/10 bg-white/85 shadow-lg shadow-slate-900/10 backdrop-blur-xl'
            : 'translate-y-0 border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 focus:outline-none"
            onClick={(e) => { e.preventDefault(); navigate('#hero'); }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-0.5 shadow-lg shadow-primary-500/30">
              <img
                src="/profile.jpg"
                alt="Muhammad Azhar"
                className="h-full w-full rounded-[12px] object-cover"
              />
            </div>
            <div>
              <span className={`block text-sm font-extrabold tracking-tight leading-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                Muhammad Azhar
              </span>
              <span className={`block text-[11px] font-semibold ${dark ? 'text-primary-300' : 'text-primary-700'}`}>
                Cloud & AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? dark ? 'bg-white/8 text-primary-300' : 'bg-primary-500/10 text-primary-700'
                      : dark ? 'text-ink-soft hover:text-[#f1f5f9] hover:bg-white/5' : 'text-ink-faint hover:text-[#0b0d17] hover:bg-slate-900/5'
                  }`}
                  onClick={(e) => { e.preventDefault(); navigate(link.id); }}
                 aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {link.id === 'skills' && (
                    <span
                      className={`ml-1.5 size-1.5 rounded-full ring-2 ring-primary-500/40 ${
                        isActive ? 'animate-ping' : ''
                      }`}
                    />
                  )}
                </a>
              );
            })}
            <div className={`ml-3 flex items-center gap-2 pl-3 border-l ${dark ? 'border-white/6' : 'border-slate-900/10'}`}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); navigate('#contact'); }}
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 shadow-md shadow-primary-500/25 transition-all"
              >
                <Send className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hire Me</span>
              </a>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                  dark
                    ? 'text-ink-soft hover:bg-white/5 hover:text-primary-300'
                    : 'text-ink-faint hover:bg-white/8 hover:text-[#0b0d17]'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                dark ? 'text-ink-soft hover:bg-white/5 hover:text-primary-300' : 'text-ink-faint hover:bg-slate-900/5 hover:text-primary-700'
              }`}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={onOpenResumeModal}
              className={`hidden items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors sm:flex ${
                dark
                  ? 'text-ink-soft hover:bg-white/5 hover:text-primary-300'
                  : 'text-ink-faint hover:bg-white/8 hover:text-[#0b0d17]'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">Resume</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                dark ? 'text-ink-soft hover:bg-white/5' : 'text-ink-faint hover:bg-white/8'
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="border-t border-white/8 pb-6 pt-2 lg:hidden animate-fade-in">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? dark ? 'bg-white/8 text-primary-300' : 'bg-white/12 text-white'
                        : dark ? 'text-ink-soft hover:bg-white/5' : 'text-ink-faint hover:bg-white/8'
                    }`}
                    onClick={(e) => { e.preventDefault(); navigate(link.id); }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-lg text-[11px] font-bold">
                      {link.id === 'skills' && <span className="bg-primary-500/40 text-[10px] font-bold text-primary-300 rounded-full px-1.5 py-0.5" />}
                      {link.label}
                    </span>
                  </a>
                );
              })}
              <div className="mt-3 flex flex-col gap-2 pl-4 border-t border-white/8">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); navigate('#contact'); }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-primary-500/25"
                >
                  <Send className="h-4 w-4" />
                  Hire Me
                </a>
                <button
                  type="button"
                  onClick={() => { closeMobile(); onOpenResumeModal(); }}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    dark
                      ? 'bg-white/6 text-ink-soft hover:bg-white/10'
                      : 'bg-white/8 text-ink-faint hover:bg-white/12'
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
