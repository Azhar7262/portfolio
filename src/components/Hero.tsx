import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO, STATS, SOCIAL_LINKS } from '../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Cloud, Zap, ShieldCheck, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { SectionHeading, Stats as StatsCard, getIcon } from './ui';

interface HeroProps {
  theme: 'dark' | 'light';
}

type Role = 'Cloud & AI Engineer' | 'Software Engineer' | 'System Architect';

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const dark = theme === 'dark';
  const [selected, setSelected] = useState<Role>('Cloud & AI Engineer');
  const intervalRef = useRef<number | null>(null);

  const stats = [
    { label: 'AWS Certified', value: 'SAA', description: 'Solutions Architect — Associate', icon: ShieldCheck },
    { label: 'Experience', value: '4+', description: 'Enterprise IT & cloud infrastructure', icon: Zap },
    { label: 'Projects', value: '15+', description: 'Cloud, AI, IoT, and systems', icon: Cloud },
    { label: 'Degree', value: '3.32', description: 'BS Computer Science, AWKUM', icon: Briefcase },
  ];

  useEffect(() => {
    const rotators: Role[] = ['Cloud & AI Engineer', 'Software Engineer', 'System Architect'];
    const idx = rotators.indexOf(selected);
    if (idx === -1) return;
    const step = () => {
      const next = rotators[(idx + 1) % rotators.length];
      setSelected(next);
    };
    intervalRef.current = window.setInterval(step, 4200);
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current); };
  }, [selected]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Background glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 h-[50%] w-[80%] max-w-3xl rounded-full bg-gradient-to-b from-primary-500/10 via-primary-500/5 to-transparent blur-[160px]"
          style={{ animation: 'pulseGlow 6s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 left-0 h-[40%] w-[60%] rounded-full bg-gradient-to-t from-accent-400/10 to-transparent blur-[120px]"
          style={{ animation: 'pulseGlow 8s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-wide ${
                  dark
                    ? 'border-white/10 bg-white/5 text-primary-300'
                    : 'border-primary-300/30 bg-primary-50 text-primary-700'
                }`}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
                </span>
                Available for full-time roles
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-wide ${
                  dark
                    ? 'border-white/10 bg-white/5 text-accent-300'
                    : 'border-accent-300/30 bg-accent-50 text-accent-700'
                }`}
              >
                <Cloud className="h-3 w-3" />
                AWS Certified Solutions Architect
              </span>
            </div>

            <SectionHeading
              theme={theme}
              badge="Welcome"
              title={`Hi, I'm ${PERSONAL_INFO.name.split(' ')[0]}`}
              highlight={selected}
              subtitle={PERSONAL_INFO.summary}
              action={
                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="group flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-primary-500 via-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5"
                  >
                    View Projects
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={`flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                      dark
                        ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                        : 'border-primary-300/30 bg-white text-ink hover:border-primary-400 hover:text-primary-700'
                    }`}
                  >
                    Contact Me
                  </a>
                </div>
              }
            />

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.14em] ${
                  dark ? 'text-ink-soft' : 'text-ink-faint'
                }`}
              >
                Connect
              </span>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                      : 'border-primary-300/30 bg-white text-ink-faint hover:border-primary-400 hover:text-primary-700'
                  }`}
                >
                  <s.icon className="h-4 w-4" />
                  <span className="hidden xs:inline">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Quick facts */}
            <div
              className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${
                dark ? 'text-ink-soft' : 'text-ink-faint'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5 text-accent-400" />
                <span>{PERSONAL_INFO.hometown}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>BS Computer Science (AWKUM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-400" />
                <span>AWS Certified Associate</span>
              </div>
            </div>
          </div>

          {/* Right: profile visual + code window */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Profile portrait card */}
              <div className="relative mx-auto w-fit">
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-primary-500/25 via-primary-500/15 to-accent-400/25 blur-2xl" />
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-[32px] border-4 shadow-2xl shadow-primary-500/20 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Azhar — portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-1.5 -right-1.5 flex h-8 w-8 items-center justify-center rounded-full border ${
                    dark ? 'border-slate-950' : 'border-white'
                  }`}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                </div>
              </div>

              {/* Code window — developer visual */}
              <div className={`relative mt-8 overflow-hidden rounded-2xl border shadow-2xl ${dark ? 'border-white/10' : 'border-slate-200/80'}`}>
                <div
                  className={`flex flex-shrink-0 items-center gap-2 border-b p-4 ${
                    dark ? 'border-white/10' : 'border-slate-200/80'
                  }`}
                >
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className={`ml-3 text-xs font-mono ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    dev@azhar:~$
                  </span>
                </div>
                <div
                  className={`overflow-x-auto p-5 font-mono text-xs leading-relaxed ${
                    dark ? 'bg-[#0b0d17]' : 'bg-slate-950'
                  }`}
                >
                  <div className="space-y-2">
                    <div className={`text-primary-400 ${dark ? 'text-emerald-300' : 'text-emerald-600'}`}>
                      <span className="text-sky-400">$</span> <span className="text-emerald-300">nginx</span> <span className="text-purple-300">-g</span> <span className="text-sky-400">daemon</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-blue-300' : 'text-blue-600'}`}>
                      <span className="text-sky-400">$</span> <span className="text-blue-300">aws</span> <span className="text-cyan-300">ec2</span> <span className="text-sky-400">describe-instances</span> <span className="text-muted-400">--region</span> <span className="text-purple-300">us-east-1</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-blue-300' : 'text-blue-600'}`}>
                      <span className="text-sky-400">$</span> <span className="text-blue-300">docker</span> <span className="text-cyan-300">ps</span> <span className="text-emerald-300">-a</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-green-300' : 'text-green-600'}`}>
                      <span className="text-sky-400">$</span> <span className="text-green-300">git</span> <span className="text-purple-300">commit</span> -m <span className="text-muted-400">"refactor: improve cloud pipeline"</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className="text-sky-400">$</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-blue-300' : 'text-blue-600'}`}>
                      <span className="text-sky-400">$</span> <span className="text-blue-300">python</span> <span className="text-cyan-300">-m</span> <span className="text-purple-300">http.server</span> <span className="text-sky-400">8080</span>
                    </div>
                    <div className="h-2" />
                    <div className={`text-primary-400 ${dark ? 'text-green-300' : 'text-green-600'}`}>
                      <span className="text-sky-400">≈</span> <span className="text-emerald-300">214 requests / min</span>
                    </div>
                    <div className={`text-primary-400 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className="text-sky-400">#</span> <span className="text-slate-500">P72 ready · Cloud Native</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-center justify-between border-t p-3">
                  <div className={`flex flex-wrap gap-2 text-[11px]`}>
                    {['EC2', 'S3', 'VPC', 'Lambda', 'DynamoDB', 'QuickSight', 'ESP32', 'IoT', 'MongoDB', 'PostgreSQL'].map((t) => (
                      <span
                        key={t}
                        className={`rounded-md px-2 py-1 font-mono text-white bg-white/5 ${
                          dark ? 'bg-white/5' : 'bg-black/5'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={`font-mono text-[11px] ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Gateway active · 9:41 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="relative mt-6">
              <StatsCard dark={dark} stats={stats} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
