import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';
import {
  ShieldCheck, ArrowRight, FileText, MapPin,
  Terminal, Copy, Check, ExternalLink, Sparkles
} from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResumeModal?: () => void;
}

const ROLES = [
  'Software Engineer & Developer',
  'AWS Certified Solutions Architect',
  'Cloud-Native & Serverless Builder',
  'IT Executive & Infrastructure Lead',
];

const CODE_TABS = [
  {
    id: 'serverless',
    label: 'lambda_handler.py',
    shortLabel: 'lambda.py',
    content: `# AWS Lambda Serverless Microservice
import boto3, json, os

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['DATA_TABLE'])

def handler(event, context):
    payload = json.loads(event.get('body', '{}'))
    table.put_item(Item=payload)
    return {
        'statusCode': 200,
        'body': json.dumps({'status': 'SUCCESS', 'id': payload.get('device_id')})
    }`
  },
  {
    id: 'cloud',
    label: 'infrastructure.sh',
    shortLabel: 'infra.sh',
    content: `#!/usr/bin/env bash
# Deploy Multi-Tier Cloud Topology
aws cloudformation deploy \\
  --template-file vpc-topology.yaml \\
  --stack-name azhar-enterprise-vpc \\
  --parameter-overrides Environment=Production \\
  --capabilities CAPABILITY_IAM

echo "✔ Architecture verified: 3 AZs, NAT Gateways, Private Subnets"`
  },
  {
    id: 'monitoring',
    label: 'ums_telemetry.log',
    shortLabel: 'ums.log',
    content: `[INFO] UMS IT Operations Monitoring
[STATUS] 60+ Active Workstations Tagged & Monitored
[HEALTH] Active Directory & DNS/DHCP: OPTIMAL
[SECURITY] Endpoint Agent Version: 2.4.0 (Latest)
[BACKUP] Amazon S3 Glacier Archive: SYNCED
[ALERT] 0 Critical Incidents across Enterprise Network`
  }
];

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResumeModal }) => {
  const dark = theme === 'dark';
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const textFillColor = dark ? '#ffffff' : '#0f172a';
  const strokeStyle = {
    WebkitTextStroke: dark ? '2px #ffffff' : '2px #0f172a',
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-12 transition-colors duration-300 ${
        dark ? 'bg-[#0b0d17]' : 'bg-[#f6f8fc]'
      }`}
    >
      {/* Dynamic Animated Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-32 left-1/4 h-[540px] w-[660px] rounded-full blur-[140px] transition-opacity duration-1000 ${
            dark ? 'bg-primary-600/18' : 'bg-primary-500/12'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={`absolute top-1/3 -right-24 h-[460px] w-[560px] rounded-full blur-[130px] transition-opacity duration-1000 ${
            dark ? 'bg-cyan-500/14' : 'bg-cyan-400/10'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. TOP STATUS ROW: Real Credentials & Roles */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b pb-4 border-white/10 dark:border-white/10"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide ${
                dark
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                  : 'border-emerald-600/20 bg-emerald-50 text-emerald-700'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Software Engineer & Cloud Roles
            </span>

            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${
                dark
                  ? 'border-amber-500/30 bg-amber-500/10 text-amber-300 hover:border-amber-500/50'
                  : 'border-amber-500/30 bg-amber-50 text-amber-800 hover:border-amber-500/60'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>AWS Certified Solutions Architect</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>

          <Link
            to="/projects"
            className={`group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:opacity-80 ${
              dark ? 'text-primary-300 hover:text-white' : 'text-primary-700 hover:text-primary-900'
            }`}
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

        {/* 2. CENTERPIECE: TYPOGRAPHIC CUTOUT DESIGN WITH "AZHAR" & PORTRAIT */}
        <div className="relative flex items-center justify-center py-4 sm:py-6">
          
          {/* Layer 1 (BEHIND Image): Solid Name Letters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10 overflow-hidden"
            aria-hidden="true"
          >
            <span className={`block text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.45em] mb-1 sm:mb-2 ${
              dark ? 'text-primary-400/90' : 'text-primary-600'
            }`}>
              MUHAMMAD
            </span>
            <span
              className="font-['Bebas_Neue',_'Impact',_sans-serif] text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] tracking-wider leading-none select-none drop-shadow-sm"
              style={{ color: textFillColor }}
            >
              AZHAR
            </span>
          </motion.div>

          {/* Layer 2 (MIDDLE): Centered Vertical Portrait Card with Hover Lift & Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`relative z-20 w-[260px] sm:w-[330px] md:w-[390px] lg:w-[440px] h-[390px] sm:h-[480px] md:h-[540px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 ${
              dark
                ? 'border-white/10 bg-[#0d0f1c] shadow-black/60 hover:border-primary-500/40'
                : 'border-slate-200/80 bg-white shadow-slate-200/50 hover:border-primary-500/40'
            }`}
          >
            {/* Ambient neon rim highlight behind photo */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500/30 via-transparent to-cyan-400/30 opacity-60 blur-md pointer-events-none" />

            <img
              src={profilePhoto}
              alt="Muhammad Azhar — Software Engineer & AWS Solutions Architect"
              className="relative z-10 h-full w-full object-cover object-top filter contrast-[1.04]"
              loading="eager"
            />
            
            {/* Smooth gradient vignettes */}
            <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${
              dark ? 'from-[#0b0d17]/50' : 'from-black/20'
            } to-transparent pointer-events-none z-10`} />
            <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${
              dark ? 'from-[#0b0d17] via-[#0b0d17]/60' : 'from-slate-950/80 via-slate-950/30'
            } to-transparent pointer-events-none z-10`} />
            
            {/* Live badge overlay at bottom of the photo */}
            <div className="absolute bottom-3.5 inset-x-4 flex items-center justify-between text-white text-xs z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/85 px-3 py-1 font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                AWS Certified
              </span>
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                60+ Workstations
              </span>
            </div>
          </motion.div>

          {/* Layer 3 (IN FRONT of Image): Outlined Stroke Letters with Transparent Fill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-30 overflow-hidden"
            aria-hidden="true"
          >
            <span className="block text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.45em] mb-1 sm:mb-2 opacity-0 select-none">
              MUHAMMAD
            </span>
            <span
              className="font-['Bebas_Neue',_'Impact',_sans-serif] text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] tracking-wider leading-none select-none text-transparent"
              style={strokeStyle}
            >
              AZHAR
            </span>
          </motion.div>

        </div>

        {/* 3. HEADLINE, BIO & ACTION DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Heading, Bio, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            <div className="space-y-2">
              <p className={`text-xs font-bold uppercase tracking-[0.25em] ${dark ? 'text-primary-400' : 'text-primary-600'}`}>
                Software Engineer & Developer
              </p>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Muhammad Azhar
                </span>
              </h1>
              
              {/* Dynamic Role Rotator */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-1">
                <span className={`text-sm font-semibold ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Specializing in:
                </span>
                <span
                  key={roleIndex}
                  className="inline-block animate-fade-in font-mono text-sm sm:text-base font-bold text-primary-400"
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              Computer Science graduate (AWKUM Gold Medalist) and AWS Certified Solutions Architect. 
              I design and build reliable, cloud-native software and serverless systems with Python, AWS Lambda, DynamoDB, and Next.js, while managing 60+ workstations as IT Executive at UMS.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/35"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {onOpenResumeModal ? (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={onOpenResumeModal}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
                    dark
                      ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:bg-white/10 hover:text-white'
                      : 'border-slate-300 bg-white text-slate-800 hover:border-primary-400 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="h-4 w-4 text-primary-400" />
                  <span>View Resume</span>
                </motion.button>
              ) : (
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/resume"
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
                      dark
                        ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:bg-white/10 hover:text-white'
                        : 'border-slate-300 bg-white text-slate-800 hover:border-primary-400 hover:bg-slate-50'
                    }`}
                  >
                    <FileText className="h-4 w-4 text-primary-400" />
                    <span>Resume</span>
                  </Link>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-semibold transition-all ${
                  copiedEmail
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : dark
                      ? 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </motion.button>
            </div>

            {/* Quick Highlights Grid */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className="space-y-0.5">
                <span className={`block text-[11px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Credentials</span>
                <span className={`block text-xs font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>AWS SAA-C03</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-[11px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Education</span>
                <span className={`block text-xs font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>BS CS (3.32 GPA)</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-[11px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Current Role</span>
                <span className={`block text-xs font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>IT Exec @ UMS</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-[11px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Honors</span>
                <span className={`block text-xs font-bold text-amber-400`}>AWKUM Gold Medal</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-1">
              <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${
                      dark
                        ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-primary-300'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-primary-400 hover:text-primary-700'
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Verified Architectural Pipeline Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div
              className={`overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 ${
                dark
                  ? 'border-white/10 bg-[#0c0e18] shadow-black/50'
                  : 'border-slate-200/90 bg-slate-950 text-slate-100 shadow-slate-300/40'
              }`}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono font-bold text-slate-300 hidden sm:inline">
                    Verified Pipeline
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto" role="tablist">
                  {CODE_TABS.map((tab, idx) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === idx}
                      onClick={() => setActiveTab(idx)}
                      className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
                        activeTab === idx
                          ? 'bg-white/15 text-primary-300 border border-primary-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.shortLabel}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[170px] bg-[#07080f]">
                <pre className="text-emerald-300 selection:bg-primary-500/40">
                  <code>{CODE_TABS[activeTab].content}</code>
                </pre>
              </div>

              {/* Status Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Ready</span>
                </div>
                <span>Python • AWS Lambda • DynamoDB</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
