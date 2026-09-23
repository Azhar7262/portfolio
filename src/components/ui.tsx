import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ---------------------------------- */
/* Scroll Reveal Wrapper              */
/* ---------------------------------- */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}> = ({ children, delay = 0, className = '', as = 'div' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/* ---------------------------------- */
/* Section Heading (liquid glass)     */
/* ---------------------------------- */
export const SectionHeading: React.FC<{
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  theme: 'dark' | 'light';
}> = ({ badge, title, highlight, subtitle, theme }) => {
  const dark = theme === 'dark';
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 glass-sheen ${
          dark
            ? 'glass text-cyan-300'
            : 'glass-light text-cyan-700'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-px w-28 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
    </Reveal>
  );
};

/* ---------------------------------- */
/* 3D Tilt on mouse (subtle)          */
/* ---------------------------------- */
export const useTilt = (max = 8) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
    },
    [max]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};

/* ---------------------------------- */
/* Lucide icon mapper (dynamic names) */
/* ---------------------------------- */
import {
  Cloud, Server, Network, Code, Wrench, Monitor, Users,
  Award, GraduationCap, Cpu, Database, Globe, Lock,
  Zap, Terminal, Briefcase, Layers, type LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Cloud, Server, Network, Code, Wrench, Monitor, Users,
  Award, GraduationCap, Cpu, Database, Globe, Lock,
  Zap, Terminal, Briefcase, Layers
};

export const getIcon = (name: string): LucideIcon =>
  ICON_MAP[name] ?? Cloud;
