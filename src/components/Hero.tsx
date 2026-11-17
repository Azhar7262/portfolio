import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';
import {
  ShieldCheck, ArrowRight, FileText, MapPin,
  Terminal, Copy, Check, ExternalLink, Mail, Sparkles
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

  const textFillColor = dark ? '#ebddc2' : '#181818';
  const strokeStyle = {
    WebkitTextStroke: dark ? '2px #ebddc2' : '2px #181818',
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[calc(100vh-72px)] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-8 transition-colors duration-300 ${
        dark ? 'bg-[#181818]' : 'bg-[#f7f4ee]'
      }`}
    >
      {/* Background ambient warm lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full blur-[180px] pointer-events-none ${
            dark ? 'bg-[#ebddc2]/[0.05]' : 'bg-[#ebddc2]/30'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col flex-1 justify-between gap-6">
        
        {/* 1. TOP METADATA ROW */}
        <div className="flex items-center justify-between gap-4 pt-2">
          {/* Top Left: Category & Role */}
          <div className="space-y-1">
            <span
              className={`block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] ${
                dark ? 'text-[#9f9890]' : 'text-[#6e675f]'
              }`}
            >
              Creative Presentation • Portfolio
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ebddc2] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ebddc2]" />
              </span>
              <span
                key={roleIndex}
                className={`animate-fade-in text-xs sm:text-sm font-bold tracking-tight ${
                  dark ? 'text-[#ebddc2]' : 'text-[#181818]'
                }`}
              >
                {ROLES[roleIndex]}
              </span>
            </div>
          </div>

          {/* Top Right: Explore Link & Arrow */}
          <Link
            to="/projects"
            className={`group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:opacity-80 ${
              dark ? 'text-[#ebddc2]' : 'text-[#181818]'
            }`}
          >
            <span>Explore Works</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 2. ICONIC CENTERPIECE: PORTRAIT WITH "PORTFOLIO" CUTOUT OVERLAY */}
        <div className="relative my-auto flex items-center justify-center py-4 sm:py-6">
          
          {/* Layer 1 (BEHIND Image): Solid Letters */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-['Bebas_Neue',_'Impact',_sans-serif] text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[15.5vw] tracking-wider leading-none select-none"
              style={{ color: textFillColor }}
            >
              PORTFOLIO
            </span>
          </div>

          {/* Layer 2 (MIDDLE): Centered Vertical Portrait Card */}
          <div className={`relative z-20 w-[260px] sm:w-[340px] md:w-[410px] lg:w-[460px] h-[400px] sm:h-[490px] md:h-[560px] lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border ${
            dark ? 'border-[#ebddc2]/15 bg-[#181818]' : 'border-[#181818]/10 bg-white'
          }`}>
            <img
              src={profilePhoto}
              alt="Muhammad Azhar"
              className="h-full w-full object-cover object-top filter contrast-[1.08] brightness-[0.95] saturate-[1.06] sepia-[0.06]"
              loading="eager"
            />
            
            {/* Cinematic top & bottom vignettes */}
            <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${
              dark ? 'from-[#181818]/40' : 'from-black/20'
            } to-transparent pointer-events-none`} />
            <div className={`absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t ${
              dark ? 'from-[#181818] via-[#181818]/50' : 'from-black/70 via-black/30'
            } to-transparent pointer-events-none`} />
            
            {/* Live badge overlay at bottom of the photo */}
            <div className="absolute bottom-3.5 inset-x-4 flex items-center justify-between text-white text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ebddc2]/30 bg-black/60 px-3 py-1 font-semibold text-[#ebddc2] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ebddc2] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ebddc2]" />
                </span>
                AWS Certified
              </span>
              <span className="text-[11px] font-mono text-[#c8bfb5] bg-black/60 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                60+ Workstations
              </span>
            </div>
          </div>

          {/* Layer 3 (IN FRONT of Image): Outlined Stroke Letters with Transparent Fill */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-30 overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-['Bebas_Neue',_'Impact',_sans-serif] text-[20vw] sm:text-[18vw] md:text-[17vw] lg:text-[15.5vw] tracking-wider leading-none select-none text-transparent"
              style={strokeStyle}
            >
              PORTFOLIO
            </span>
          </div>

        </div>

        {/* 3. BOTTOM METADATA ROW */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-2 border-t pt-4 ${
          dark ? 'border-[#ebddc2]/15' : 'border-[#181818]/15'
        }`}>
          
          {/* Bottom Left: Identity & Degree */}
          <div className="space-y-1">
            <h1 className={`text-xl sm:text-2xl font-black tracking-tight ${dark ? 'text-[#ebddc2]' : 'text-[#181818]'}`}>
              Muhammad Azhar
            </h1>
            <p className={`text-xs sm:text-sm font-semibold ${dark ? 'text-[#9f9890]' : 'text-[#6e675f]'}`}>
              Software Engineer & AWS Solutions Architect
            </p>
            <p className={`text-xs ${dark ? 'text-[#7e776e]' : 'text-slate-500'}`}>
              AWKUM Gold Medalist • BS CS (3.32 CGPA)
            </p>
          </div>

          {/* Center-Right Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all hover:scale-105 shadow-md ${
                dark
                  ? 'bg-[#ebddc2] text-[#181818] hover:bg-[#dfd1b5] shadow-black/40'
                  : 'bg-[#181818] text-[#f7f4ee] hover:bg-[#2c2b29]'
              }`}
            >
              <span>Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {onOpenResumeModal ? (
              <button
                type="button"
                onClick={onOpenResumeModal}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all hover:scale-105 ${
                  dark
                    ? 'border-[#ebddc2]/25 text-[#ebddc2] hover:bg-[#ebddc2]/10 hover:border-[#ebddc2]/40'
                    : 'border-[#181818]/30 bg-white text-[#181818] hover:bg-slate-50'
                }`}
              >
                <FileText className="h-3.5 w-3.5 text-[#ebddc2]" />
                <span>Resume</span>
              </button>
            ) : (
              <Link
                to="/resume"
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all hover:scale-105 ${
                  dark
                    ? 'border-[#ebddc2]/25 text-[#ebddc2] hover:bg-[#ebddc2]/10 hover:border-[#ebddc2]/40'
                    : 'border-[#181818]/30 bg-white text-[#181818] hover:bg-slate-50'
                }`}
              >
                <FileText className="h-3.5 w-3.5 text-[#ebddc2]" />
                <span>Resume</span>
              </Link>
            )}

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                copiedEmail
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                  : dark
                    ? 'border-[#ebddc2]/25 text-[#ebddc2] hover:bg-[#ebddc2]/10'
                    : 'border-[#181818]/30 bg-white text-[#181818]'
              }`}
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-[#9f9890]" />}
              <span>{copiedEmail ? 'Copied!' : 'Email'}</span>
            </button>
          </div>

          {/* Bottom Right: Location & Domain */}
          <div className="space-y-1 text-left sm:text-right">
            <span className={`block text-xs font-mono font-semibold ${dark ? 'text-[#ebddc2]' : 'text-[#181818]'}`}>
              Charsadda, KPK, Pakistan
            </span>
            <span className={`block text-xs font-mono ${dark ? 'text-[#9f9890]' : 'text-[#6e675f]'}`}>
              azharkhan726200@gmail.com
            </span>
          </div>

        </div>

      </div>

      {/* 4. TECHNICAL BENCHMARK DRAWER (EXPANDABLE TERMINAL & METRICS) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <div
          className={`overflow-hidden rounded-2xl border transition-all ${
            dark
              ? 'border-[#ebddc2]/15 bg-[#141414] shadow-2xl'
              : 'border-slate-200 bg-white shadow-xl'
          }`}
        >
          {/* Header Bar */}
          <div className={`flex items-center justify-between border-b px-4 py-2.5 ${dark ? 'border-[#ebddc2]/10 bg-[#181818]' : 'border-slate-100 bg-slate-50'}`}>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className={`ml-2 text-xs font-mono font-bold ${dark ? 'text-[#ebddc2]' : 'text-slate-700'}`}>
                Verified Architectural Pipeline
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
                      ? 'bg-[#ebddc2]/15 text-[#ebddc2] border border-[#ebddc2]/30'
                      : dark ? 'text-[#9f9890] hover:text-[#ebddc2]' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Code Body */}
          <div className={`p-4 font-mono text-xs leading-relaxed overflow-x-auto ${dark ? 'bg-[#0f0f10] text-[#ebddc2]' : 'bg-slate-950 text-emerald-400'}`}>
            <pre>
              <code>{CODE_TABS[activeTab].content}</code>
            </pre>
          </div>

          {/* Quick Metrics Bar */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 border-t p-3 text-xs ${dark ? 'border-[#ebddc2]/10 bg-[#181818]' : 'border-slate-100 bg-slate-50'}`}>
            <div>
              <span className={`block text-[10px] font-semibold ${dark ? 'text-[#9f9890]' : 'text-slate-500'}`}>Cloud Credential</span>
              <span className="block font-bold text-[#ebddc2]">AWS Solutions Architect</span>
            </div>
            <div>
              <span className={`block text-[10px] font-semibold ${dark ? 'text-[#9f9890]' : 'text-slate-500'}`}>Enterprise Ops</span>
              <span className={`block font-bold ${dark ? 'text-[#ebddc2]' : 'text-slate-900'}`}>60+ Workstations (UMS)</span>
            </div>
            <div>
              <span className={`block text-[10px] font-semibold ${dark ? 'text-[#9f9890]' : 'text-slate-500'}`}>Academic Excellence</span>
              <span className="block font-bold text-[#ebddc2]">AWKUM Gold Medalist</span>
            </div>
            <div>
              <span className={`block text-[10px] font-semibold ${dark ? 'text-[#9f9890]' : 'text-slate-500'}`}>Degree & GPA</span>
              <span className={`block font-bold ${dark ? 'text-[#ebddc2]' : 'text-slate-900'}`}>BSCS (3.32 CGPA)</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
