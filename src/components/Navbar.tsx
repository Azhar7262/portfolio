import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Menu, X, Send, FileText, Moon, Sun
} from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const dark = theme === 'dark';
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* Scroll progress bar */}
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
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none"
            onClick={closeMobile}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-0.5 shadow-lg shadow-primary-500/30 transition-transform duration-300 hover:scale-105">
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${
                    isActive
                      ? dark ? 'text-primary-300' : 'text-primary-700'
                      : dark ? 'text-ink-soft hover:text-[#f1f5f9]' : 'text-ink-faint hover:text-[#0b0d17]'
                  }`}
                >
                  {/* Shared animated pill: slides between links on route change */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className={`absolute inset-0 rounded-xl ${
                        dark ? 'bg-white/8' : 'bg-primary-500/10'
                      }`}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {link.id === 'skills' && (
                    <span
                      className={`relative z-10 size-1.5 rounded-full ring-2 ring-primary-500/40 ${
                        isActive ? 'animate-ping' : ''
                      }`}
                    />
                  )}
                </Link>
              );
            })}
            <div className={`ml-3 flex items-center gap-2 pl-3 border-l ${dark ? 'border-white/6' : 'border-slate-900/10'}`}>
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 shadow-md shadow-primary-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Send className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hire Me</span>
              </Link>
              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    dark
                      ? 'text-ink-soft hover:bg-white/5 hover:text-primary-300'
                      : 'text-ink-faint hover:bg-white/8 hover:text-[#0b0d17]'
                  }`}
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Resume</span>
                </button>
              )}
            </div>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:rotate-12 ${
                dark ? 'text-ink-soft hover:bg-white/5 hover:text-primary-300' : 'text-ink-faint hover:bg-slate-900/5 hover:text-primary-700'
              }`}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {onOpenResumeModal && (
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
            )}
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
          <div
            className={`border-t pb-6 pt-2 lg:hidden animate-fade-in ${
              dark ? 'border-white/8' : 'border-slate-900/10'
            }`}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                        isActive
                          ? dark
                            ? 'bg-primary-500/15 text-primary-300'
                            : 'bg-primary-500/10 text-primary-700'
                          : dark
                            ? 'text-ink-soft hover:bg-white/5'
                            : 'text-ink-faint hover:bg-slate-900/5'
                      }`}
                      onClick={closeMobile}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      <span
                        className={`text-[10px] font-bold ${dark ? 'text-ink-muted' : 'text-ink-muted'}`}
                      >
                        {isActive ? '●' : ''}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <div className={`mt-3 flex flex-col gap-2 pl-4 border-t ${dark ? 'border-white/8' : 'border-slate-900/10'}`}>
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-primary-500/25"
                >
                  <Send className="h-4 w-4" />
                  Hire Me
                </Link>
                {onOpenResumeModal && (
                  <button
                    type="button"
                    onClick={() => { closeMobile(); onOpenResumeModal(); }}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      dark
                        ? 'bg-white/6 text-ink-soft hover:bg-white/10'
                        : 'bg-slate-100 text-ink-faint hover:bg-slate-200'
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                    View Resume
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
