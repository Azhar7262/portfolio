import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { Download, Rocket, Send, Mail, ShieldCheck, Cloud, MapPin, CheckCircle2, Award, Server, GraduationCap } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResumeModal }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

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
      case 'Award': return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      default: return <Cloud className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability & AWS Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Full-time Roles</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-sm backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>AWS Certified Solutions Architect</span>
              </div>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>

              {/* Typing Animation Subtitle */}
              <div className="h-10 flex items-center text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-cyan-500 dark:text-cyan-400">
                <span className="mr-2">&gt;</span>
                <span>{displayedText}</span>
                <span className="animate-pulse ml-0.5 text-cyan-400">|</span>
              </div>
            </div>

            {/* Professional Sub-Title */}
            <p className={`text-sm sm:text-base font-medium ${
              theme === 'dark' ? 'text-cyan-200/90' : 'text-cyan-900'
            }`}>
              {PERSONAL_INFO.title}
            </p>

            {/* Professional Summary */}
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons Grid */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Download Resume Button */}
              <button
                onClick={onOpenResumeModal}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* View Projects */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-cyan-500/60 hover:text-cyan-400 hover:bg-slate-800'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-600 hover:text-cyan-700 hover:bg-slate-50'
                }`}
              >
                <Rocket className="w-4 h-4 text-cyan-500 group-hover:rotate-12 transition-transform" />
                <span>View Projects</span>
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Hire Me</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact Badges */}
            <div className={`pt-4 flex flex-wrap items-center gap-4 text-xs ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>BS Computer Science (AWKUM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>AWS Certified Associate</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Card */}
              <div className={`p-1 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent shadow-2xl ${
                theme === 'dark' ? 'shadow-cyan-950/40' : 'shadow-slate-300/60'
              }`}>
                <div className={`p-6 sm:p-8 rounded-[22px] backdrop-blur-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 border-slate-800/80 text-white'
                    : 'bg-white/95 border-slate-200 text-slate-900'
                }`}>
                  
                  {/* Cloud Badge Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800/40">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/30">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400 font-bold">
                          AWS
                        </div>
                      </div>
                      <div>
                        <span className="block text-sm font-bold">AWS Certified Architect</span>
                        <span className="text-xs text-slate-400">Credential ID: AWS-SAA-84729103</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Verified
                    </span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="py-6 space-y-3">
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
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
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            theme === 'dark'
                              ? 'bg-slate-800/80 border-slate-700/80 text-cyan-300 hover:border-cyan-500/50'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-cyan-600'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location & Quick Contact card */}
                  <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Open for global opportunities
                    </span>
                    <span className="font-mono text-cyan-400">azharkhan726200@gmail.com</span>
                  </div>

                </div>
              </div>

              {/* Decorative Floating Badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                <span>AWS Certified</span>
              </div>

              <div className="absolute -bottom-5 -left-4 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-xl flex items-center gap-2 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>4+ Years IT & Cloud Leadership</span>
              </div>

            </div>
          </div>

        </div>

        {/* Animated Statistics Bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90'
                  : 'bg-white/80 border-slate-200 hover:border-cyan-500/50 hover:bg-white shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  {getStatIcon(stat.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                  {stat.label}
                </span>
              </div>
              <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <p className={`text-xs mt-1 font-medium ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
