import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { Download, Rocket, Send, Mail, ShieldCheck, Cloud, MapPin, CheckCircle2, Award, Server, GraduationCap } from 'lucide-react';
import { useTilt, Reveal, CountUp } from './ui';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResumeModal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt(10);
  const dark = theme === 'dark';

  // Typing effect loop
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default: return <Cloud className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass text-emerald-300 border-emerald-400/20 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>Available for Full-time Roles</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass text-amber-300 border-amber-400/20 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AWS Certified Solutions Architect</span>
                </div>
              </div>
            </Reveal>

            {/* Name Heading */}
            <Reveal delay={80}>
              <div className="space-y-3">
                <h1 className={`text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Hi, I'm{' '}
                  <span className="relative inline-block text-gradient">
                    {PERSONAL_INFO.name}
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-orange-400 opacity-80" />
                  </span>
                </h1>

                {/* Typing Animation */}
                <div className="h-10 flex items-center text-xl sm:text-2xl lg:text-3xl font-bold font-mono">
                  <span className="mr-2 text-amber-500">&gt;</span>
                  <span className={dark ? 'text-amber-300' : 'text-amber-700'}>{displayedText}</span>
                  <span className="animate-pulse ml-0.5 text-amber-400">|</span>
                </div>
              </div>
            </Reveal>

            {/* Professional Sub-Title */}
            <Reveal delay={140}>
              <p className={`text-sm sm:text-base font-medium ${dark ? 'text-amber-200/90' : 'text-amber-900'}`}>
                {PERSONAL_INFO.title}
              </p>
            </Reveal>

            {/* Professional Summary */}
            <Reveal delay={200}>
              <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${dark ? 'text-slate-300/90' : 'text-slate-600'}`}>
                {PERSONAL_INFO.summary}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={260}>
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenResumeModal}
                  className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 via-orange-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="absolute top-0 left-0 h-full w-1/3 bg-white/25 blur-md" style={{ animation: 'shine-sweep 1.2s ease infinite' }} />
                  </span>
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
                </button>

                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold glass-sheen transition-all duration-300 hover:-translate-y-1 ${
                    dark
                      ? 'glass text-slate-200 hover:text-amber-300 border-amber-400/30 hover:border-amber-400/60'
                      : 'glass-light text-slate-700 hover:text-amber-700 border-amber-600/30'
                  }`}
                >
                  <Rocket className="w-4 h-4 text-amber-400 group-hover:rotate-12 group-hover:-translate-y-0.5 transition-transform" />
                  <span>View Projects</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-lg shadow-amber-400/30 hover:shadow-amber-300/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Hire Me</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    dark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Contact Me</span>
                </a>
              </div>
            </Reveal>

            {/* Quick facts */}
            <Reveal delay={320}>
              <div className={`pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BS Computer Science (AWKUM)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>AWS Certified Associate</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={200}>
              <div
                ref={tiltRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="relative mx-auto max-w-md lg:max-w-none transition-transform duration-200 ease-out will-change-transform"
              >
                {/* Glow aura behind card */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/25 via-orange-600/20 to-amber-600/25 blur-2xl animate-pulse-glow pointer-events-none" />

                {/* Liquid Glass Card */}
                <div className="relative p-px rounded-3xl bg-gradient-to-b from-amber-400/40 via-orange-500/20 to-orange-400/30">
                  <div className={`p-6 sm:p-8 rounded-3xl glass-sheen ${dark ? 'glass-deep' : 'glass-deep-light'} animate-float-soft`}>
                    {/* Header */}
                    <div className={`flex items-center justify-between pb-6 border-b ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-600 to-orange-600 p-px shadow-lg shadow-amber-500/40">
                          <div className={`w-full h-full rounded-2xl flex items-center justify-center text-amber-300 font-bold ${dark ? 'bg-slate-950' : 'bg-white'}`}>
                            AWS
                          </div>
                        </div>
                        <div>
                          <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>AWS Certified Architect</span>
                          <span className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Credential ID: AWS-SAA-84729103</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-400/30">
                        Verified
                      </span>
                    </div>

                    {/* Skill Pills */}
                    <div className="py-6 space-y-3">
                      <span className={`block text-xs font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Core Specializations
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'AWS Cloud Architecture',
                          'EC2 & S3 Buckets',
                          'VPC & Subnets',
                          'Serverless Lambda',
                          'Active Directory Admin',
                          'Windows Server',
                          'IoT Core Telemetry',
                          'Python & boto3',
                          'M365 Helpdesk Support'
                        ].map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 ${
                              dark
                                ? 'bg-white/5 border-white/10 text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/10'
                                : 'bg-slate-900/5 border-slate-900/10 text-slate-700 hover:border-amber-600/50 hover:bg-amber-500/5'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className={`pt-4 border-t flex items-center justify-between text-xs ${dark ? 'border-white/10 text-slate-400' : 'border-slate-900/10 text-slate-500'}`}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Open for global opportunities
                      </span>
                      <span className="font-mono text-amber-400">azharkhan726200@gmail.com</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-5 -right-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-600 text-white text-xs font-bold shadow-xl shadow-orange-500/40 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>AWS Certified</span>
                </div>

                <div className={`absolute -bottom-5 -left-4 px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-xl flex items-center gap-2 animate-float ${dark ? 'glass-deep text-amber-300 border border-amber-400/40' : 'glass-deep-light text-amber-700 border border-amber-500/40'}`} style={{ animationDelay: '1.2s' }}>
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>4+ Years IT & Cloud Leadership</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 90}>
              <div className={`p-5 rounded-2xl glass-sheen glow-hover h-full ${dark ? 'glass' : 'glass-light'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl border ${dark ? 'bg-amber-500/10 border-amber-400/20' : 'bg-cyan-50 border-amber-200'}`}>
                    {getStatIcon(stat.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                    {stat.label}
                  </span>
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                  <CountUp end={stat.numericValue} suffix={stat.suffix ?? ''} />
                </div>
                <div className={`text-sm font-bold mt-0.5 ${dark ? 'text-amber-300' : 'text-amber-700'}`}>
                  {stat.value}
                </div>
                <p className={`text-xs mt-1 font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
