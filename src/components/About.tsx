import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cloud, Server, Network, Cpu, Award, GraduationCap, ShieldCheck, Zap, Mail, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const dark = theme === 'dark';

  const cards = [
    {
      title: 'Cloud Computing',
      description: 'Designing resilient, cost-optimized architectures on AWS — compute, storage, networking, security, and serverless',
      icon: <Cloud className="h-5 w-5 text-primary-300" />,
    },
    {
      title: 'System Administration',
      description: 'Managing enterprise infrastructure: Active Directory, Windows Server, Group Policy, and Microsoft 365',
      icon: <Server className="h-5 w-5 text-primary-300" />,
    },
    {
      title: 'Networking',
      description: 'Routing, switching, DNS, DHCP, VPN, and firewall configuration across corporate networks',
      icon: <Network className="h-5 w-5 text-primary-300" />,
    },
    {
      title: 'IoT & Data',
      description: 'Building sensor telemetry pipelines, cloud analytics dashboards, and AI-assisted automation',
      icon: <Cpu className="h-5 w-5 text-primary-300" />,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.04] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: introduction */}
          <div className="lg:col-span-5">
            <SectionHeading
              theme={theme}
              badge="Professional Profile"
              title="About"
              highlight={PERSONAL_INFO.name}
              subtitle="AWS Certified Solutions Architect & IT Executive dedicated to cloud engineering, IT operational excellence, and infrastructure security."
            />

            <div className={`overflow-hidden rounded-2xl border transition-colors duration-[320ms] ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'}`}>
              <div className={`p-6 sm:p-8 ${dark ? 'bg-white/[0.02]' : 'bg-slate-50'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary-500/30 via-primary-500/15 to-accent-400/20" />
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border-4 shadow-xl shadow-primary-500/20">
                      <img src="/profile.jpg" alt={`${PERSONAL_INFO.name} — portrait`} className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-base sm:text-lg font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                      {PERSONAL_INFO.name}
                    </p>
                    <p className={`text-xs font-semibold tracking-wide uppercase ${dark ? 'text-primary-300' : 'text-primary-700'}`}>
                      {PERSONAL_INFO.title.split(' | ')[0]}
                    </p>
                    <p className={`mt-1 text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      {PERSONAL_INFO.location} · {PERSONAL_INFO.hometown}
                    </p>
                  </div>
                </div>

                <p className={`mt-5 text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {PERSONAL_INFO.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 rounded-xl border border-primary-400/30 bg-primary-500/10 px-4 py-2 text-xs font-bold text-primary-300 transition-all hover:bg-primary-500/20"
                  >
                    <Cloud className="h-3.5 w-3.5" />
                    Explore my work
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                      dark
                        ? 'border-white/10 bg-white/5 text-ink-soft hover:border-primary-400/40 hover:text-primary-300'
                        : 'border-primary-300/30 bg-white text-ink hover:border-primary-400 hover:text-primary-700'
                    }`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <a
                key={card.title}
                href="#projects"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.querySelector('#projects')?.getBoundingClientRect().top + window.scrollY - 12, behavior: 'smooth' }); }}
                className={`group flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-[320ms] hover:-translate-y-1 hover:shadow-lg ${
                  dark
                    ? 'border-white/10 bg-white/[0.03] hover:border-primary-400/20 hover:shadow-primary-500/8'
                    : 'border-slate-200/80 bg-white hover:border-primary-300/30 hover:shadow-primary-500/8'
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-[320ms] ${
                  dark
                    ? 'bg-primary-500/10 border border-primary-400/20 text-primary-300 group-hover:bg-primary-500/15'
                    : 'bg-primary-50 border border-primary-300/40 text-primary-600 group-hover:bg-primary-100'
                }`}>
                  {card.icon}
                </div>
                <span className={`text-sm font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                  {card.title}
                </span>
                <p className={`text-xs leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                  {card.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
