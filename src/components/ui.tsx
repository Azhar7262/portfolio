import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  type LucideIcon,
  Cloud, Server, Network, Code, Wrench, Monitor, Users, Award, GraduationCap, Cpu,
  Database, Globe, Lock, Zap, Terminal, Briefcase, Layers, Rocket, Mail, Github,
  Linkedin, MessageSquare, Phone, AlertCircle, CheckCircle2, ChevronRight,
  ChevronDown, ExternalLink, FileCode, Folder, Search, Menu, X, Sparkles, Activity,
  Brain, Workflow, Lamp, LayoutDashboard, Route, CloudCog, HardDrive, Eye, Filter,
  Gamepad2, Grid, Hash, Image, Inbox, Link2, List, Loader2, LogOut, MapPin,
  Maximize2, Minimize2, PauseCircle, PlayCircle, Plus, Save, Shield, Share2,
  Square, Star, Trash2, Upload, Video,  Volume2, VolumeX, Watch,
} from 'lucide-react';

/* ================================================ ICONS ================================================ */

const IconMap: Record<string, LucideIcon> = {
  Cloud,
  Server,
  Network,
  Code,
  Wrench,
  Monitor,
  Users,
  Award,
  GraduationCap,
  Cpu,
  Database,
  Globe,
  Lock,
  Zap,
  Terminal,
  Briefcase,
  Layers,
  Rocket,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Phone,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  FileCode,
  Folder,
  Search,
  Menu,
  X,
  Sparkles,
  Activity,
  Brain,
  Workflow,
  Lamp,
  LayoutDashboard,
  Route,
  CloudCog,
  HardDrive,
  Eye,
  Filter,
  Gamepad2,
  Grid,
  Hash,
  Image,
  Inbox,
  Link2,
  List,
  Loader2,
  LogOut,
  MapPin,
  Maximize2,
  Minimize2,
  PauseCircle,
  PlayCircle,
  Plus,
  Save,
  Shield,
  Share2,
  Square,
  Star,
  Trash2,
  Upload,
  Video,
  Volume2,
  VolumeX,
  Watch,
};

export type IconName =
  | 'Cloud'
  | 'Server'
  | 'Network'
  | 'Code'
  | 'Wrench'
  | 'Monitor'
  | 'Users'
  | 'Award'
  | 'GraduationCap'
  | 'Cpu'
  | 'Database'
  | 'Globe'
  | 'Lock'
  | 'Zap'
  | 'Terminal'
  | 'Briefcase'
  | 'Layers'
  | 'Rocket'
  | 'Mail'
  | 'Github'
  | 'Linkedin'
  | 'MessageSquare'
  | 'Phone'
  | 'AlertCircle'
  | 'CheckCircle2'
  | 'ChevronRight'
  | 'ChevronDown'
  | 'ExternalLink'
  | 'FileCode'
  | 'Folder'
  | 'Search'
  | 'Menu'
  | 'X'
  | 'Sparkles'
  | 'Activity'
  | 'Brain'
  | 'Workflow'
  | 'Lamp'
  | 'LayoutDashboard'
  | 'Route'
  | 'CloudCog'
  | 'HardDrive'
  | 'Eye'
  | 'Filter'
  | 'Gamepad2'
  | 'Grid'
  | 'Hash'
  | 'Image'
  | 'Inbox'
  | 'Link2'
  | 'List'
  | 'Loader2'
  | 'LogOut'
  | 'MapPin'
  | 'Maximize2'
  | 'Minimize2'
  | 'PauseCircle'
  | 'PlayCircle'
  | 'Plus'
  | 'Save'
  | 'Shield'
  | 'Share2'
  | 'Square'
  | 'Star'
  | 'Trash2'
  | 'Upload'
  | 'Video'
  | 'Volume2'
  | 'VolumeX'
  | 'Watch';

export const getIcon = (name: string | undefined): LucideIcon => {
  if (!name) return IconMap.Cloud;
  const normalized = name.trim();
  return IconMap[normalized] ?? IconMap.Cloud;
};

/* ================================================ SKILL -------------------------------------------------------- */

export interface SkillMeta {
  name: string;
  iconName: IconName;
  description: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  iconName: IconName;
  description: string;
  skills: SkillMeta[];
}

export interface SkillDefinition {
  name: string;
  iconName: IconName;
  category: string;
  description: string;
  concepts: string[];
  projects: string[];
  related: string[];
  level: 'Familiar' | 'Working Knowledge' | 'Intermediate' | 'Advanced';
}

/* ================================================ REVEAL -------------------------------------------------------- */

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  triggerOnce?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  as = 'div',
  triggerOnce = true,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, show content immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(el);

    // Safety fallback: never leave content hidden (e.g. observers
    // throttled in background tabs or embedded webviews).
    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
      }
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [triggerOnce]);

  const Component = as as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};

/* ================================================ SECTION HEADING -------------------------------------------------------- */

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  theme: 'dark' | 'light';
  action?: React.ReactNode;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  theme,
  action,
  id,
}) => {
  const dark = theme === 'dark';
  const headingEl = id ? <h2 id={id}>{title}</h2> : <h2>{title}</h2>;

  return (
    <div
      id={id}
      className="relative max-w-2xl mx-auto text-center mb-8 sm:mb-10 px-2"
    >
      <div
        className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] ${
          dark ? 'bg-white/8 text-primary-300' : 'bg-primary-100 text-primary-700'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary-400/70 animate-pulse" />
        {badge}
      </div>

      {headingEl}

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-ink-soft' : 'text-ink-faint'
          }`}
        >
          {subtitle}
        </p>
      )}

      {action && (
        <div className="mt-6">{action}</div>
      )}

      <div
        className={`mx-auto mt-6 h-0.5 w-28 overflow-hidden rounded-full ${
          dark ? 'bg-white/5' : 'bg-slate-900/10'
        }`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-400 via-primary-vibrant to-accent-400"
          style={{ width: '60%', animation: 'shimmer 3.2s ease-in-out infinite' }}
        />
      </div>
    </div>
  );
};

/* ================================================ SKILL CARDS -------------------------------------------------------- */

interface SkillCardProps {
  skill: SkillDefinition;
  dark: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, dark, onClick, onKeyDown, ariaLabel }) => {
  const Icon = getIcon(skill.iconName);
  const levelStyles: Record<string, string> = {
    Advanced: dark ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-100 text-emerald-700',
    Intermediate: dark ? 'bg-amber-500/10 text-amber-300' : 'bg-amber-100 text-amber-700',
    'Working Knowledge': dark ? 'bg-sky-500/10 text-sky-300' : 'bg-sky-100 text-sky-700',
    Familiar: dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      title={skill.name}
      className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-[320ms] ease-out ${
        dark
          ? 'bg-white/[0.03] border-white/10 hover:border-primary-400/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary-500/10'
          : 'bg-white border-slate-200/80 hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/10'
      } focus-visible:shadow-lg`}
    >
      {/* Icon */}
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl border p-3 transition-all duration-[320ms] ${
          dark
            ? 'bg-primary-500/10 border-primary-400/20 text-primary-300 group-hover:bg-primary-500/15 group-hover:border-primary-400/40'
            : 'bg-primary-50 border-primary-300/40 text-primary-600 group-hover:bg-primary-100 group-hover:border-primary-400'
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-sm font-semibold truncate ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
            {skill.name}
          </span>
          <span
            className={`flex-shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${
              levelStyles[skill.level] ?? (dark ? 'bg-white/5 text-ink-soft' : 'bg-slate-100 text-ink-faint')
            }`}
          >
            {skill.level}
          </span>
        </div>
        <p
          className={`mt-1 text-xs leading-relaxed line-clamp-2 ${
            dark ? 'text-ink-soft' : 'text-ink-faint'
          }`}
        >
          {skill.description}
        </p>
      </div>

      {/* Hover chevron */}
      <div className={`absolute right-3 bottom-3 flex-shrink-0 transition-transform duration-[320ms] ${dark ? 'text-ink-soft' : 'text-ink-faint'} group-hover:translate-x-1 group-hover:text-primary-400`}>
        <ChevronRight className="h-3.5 w-3.5" />
      </div>
    </button>
  );
};

/* ================================================ SKILL MODAL -------------------------------------------------------- */

interface SkillModalProps {
  category: string | null;
  skill: SkillDefinition | null;
  dark: boolean;
  onClose: () => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({ category, skill, dark, onClose }) => {
  const levelLabel =
    skill?.level === 'Advanced'
      ? 'Advanced'
      : skill?.level === 'Intermediate'
        ? 'Intermediate'
        : skill?.level === 'Working Knowledge'
          ? 'Working Knowledge'
          : skill?.level === 'Familiar'
            ? 'Familiar'
            : '';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (skill) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [skill, onClose]);

  if (!skill || !category) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={skill.name}
      onClick={onClose}
    >
      <div
        className={`flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${
          dark ? 'border-white/10 bg-surface' : 'border-white/70 bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex flex-shrink-0 items-center justify-between gap-3 border-b p-5 ${
            dark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                dark
                  ? 'bg-primary-500/10 border-primary-400/20 text-primary-300'
                  : 'bg-primary-100 border-primary-400/30 text-primary-700'
              }`}
            >
              {(() => { const ModalIcon = getIcon(skill.iconName); return <ModalIcon className="h-5 w-5" />; })()}
            </div>
            <div>
              <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-ink' : 'text-ink'}`}>
                {skill.name}
              </h3>
              <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                {category}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                dark
                  ? 'bg-amber-500/10 text-amber-300'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {levelLabel}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close skill detail"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                dark ? 'text-ink-soft hover:bg-white/6' : 'text-ink-faint hover:bg-slate-100'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 4 L10 10 M10 4 L4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col overflow-y-auto p-5 sm:p-7">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left: description + key concepts */}
            <div className="space-y-5">
              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-[0.14em] mb-2 ${
                    dark ? 'text-ink-soft' : 'text-ink-faint'
                  }`}
                >
                  What it is
                </h4>
                <p className={`text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {skill.description}
                </p>
              </div>

              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-[0.14em] mb-2 ${
                    dark ? 'text-ink-soft' : 'text-ink-faint'
                  }`}
                >
                  Key concepts
                </h4>
                <ul className="space-y-1.5">
                  {skill.concepts.map((concept) => (
                    <li key={concept} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                          dark ? 'bg-primary-500/15' : 'bg-primary-100'
                        }`}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M4 2 L7 6 L4 7 L1 6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className={dark ? 'text-ink-soft' : 'text-ink-faint'}>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: projects + related */}
            <div className="space-y-5">
              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-[0.14em] mb-2 ${
                    dark ? 'text-ink-soft' : 'text-ink-faint'
                  }`}
                >
                  Projects using this
                </h4>
                <div className="space-y-1.5">
                  {skill.projects.map((project) => (
                    <div
                      key={project}
                      className={`flex items-center gap-2.5 text-sm ${
                        dark ? 'text-ink-soft' : 'text-ink-faint'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          dark ? 'bg-primary-500/15' : 'bg-primary-100'
                        }`}
                      >
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                          <path d="M4 2 L6.5 4.5 L4 7 L1.5 4.5 Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {project}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-[0.14em] mb-2 ${
                    dark ? 'text-ink-soft' : 'text-ink-faint'
                  }`}
                >
                  Related
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skill.related.map((related) => (
                    <span
                      key={related}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        dark
                          ? 'bg-white/5 text-ink-soft'
                          : 'bg-slate-100 text-ink-faint'
                      }`}
                    >
                      {related}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex flex-shrink-0 items-center justify-between border-t p-4 ${
            dark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <p
            className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}
          >
            Click outside or press Esc to close.
          </p>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-colors ${
              dark
                ? 'bg-primary-500/15 text-primary-300 hover:bg-primary-500/25'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================================================ ACTION CARD -------------------------------------------------------- */

interface ActionCardProps {
  theme: 'dark' | 'light';
  icon: React.ReactNode;
  label: string;
  description: string;
  href?: string;
  cta?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary';
}

export const ActionCard: React.FC<ActionCardProps> = ({
  theme,
  icon,
  label,
  description,
  href,
  cta,
  onClick,
  variant = 'default',
}) => {
  const dark = theme === 'dark';
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href ?? '#'}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative flex flex-col gap-3 rounded-2xl p-6 transition-all duration-[320ms] ${
        isPrimary
          ? 'bg-gradient-to-br from-primary-500 via-primary-vibrant to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-1'
          : dark
            ? 'bg-white/[0.04] border border-white/10 hover:border-primary-400/30 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-primary-500/8'
            : 'bg-white border border-slate-200/80 hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/8'
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-[320ms] ${
          isPrimary
            ? 'bg-white/20 group-hover:scale-110 group-hover:bg-white/25'
            : dark
              ? 'bg-primary-500/10 border border-primary-400/20 text-primary-300 group-hover:bg-primary-500/15'
              : 'bg-primary-50 border border-primary-300/40 text-primary-600 group-hover:bg-primary-100'
        }`}
      >
        {icon}
      </div>
      <span className="text-sm font-bold tracking-tight">{label}</span>
      <p
        className={`text-xs leading-relaxed ${
          isPrimary ? 'text-white/80' : dark ? 'text-ink-soft' : 'text-ink-faint'
        }`}
      >
        {description}
      </p>
    </a>
  );
};

/* ================================================ STATS -------------------------------------------------------- */

interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

interface StatsProps {
  stats: StatItem[];
  dark: boolean;
}

export const Stats: React.FC<StatsProps> = ({ stats, dark }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={`${stat.label}-${index}`}
          className={`rounded-2xl border p-4 transition-all duration-[280ms] ${
            dark
              ? 'bg-white/[0.03] border-white/10 hover:border-primary-400/20'
              : 'bg-white border-slate-200/80 hover:border-primary-400/30'
          }`}
        >
          <div
            className={`mb-2 flex h-8 w-8 items-center justify-center rounded-xl ${
              dark
                ? 'bg-primary-500/10 text-primary-300'
                : 'bg-primary-100 text-primary-700'
            }`}
          >
            <stat.icon className="h-4 w-4" />
          </div>
          <p
            className={`text-lg font-extrabold tracking-tight ${
              dark ? 'text-ink' : 'text-ink'
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`text-xs font-medium ${
              dark ? 'text-ink-soft' : 'text-ink-faint'
            }`}
          >
            {stat.label}
          </p>
          <p
            className={`mt-1 text-[11px] ${
              dark ? 'text-ink-very-soft' : 'text-ink-faint'
            }`}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

/* ================================================ ANIMATED COUNT-UP -------------------------------------------------------- */

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased =
              1 - Math.pow(1 - progress, 3);
            setValue(Math.round(end * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span
      ref={ref}
      className={`font-mono text-3xl font-extrabold tracking-tight tabular-nums ${className}`}
    >
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};
