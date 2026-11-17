import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';
import {
  ShieldCheck, ArrowRight, FileText, MapPin,
  Terminal, Copy, Check, ExternalLink
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

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center overflow-hidden pb-16 pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute -top-32 left-1/4 h-[520px] w-[620px] rounded-full blur-[140px] transition-opacity duration-1000 ${
            dark ? 'bg-primary-600/15' : 'bg-primary-500/10'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-24 h-[440px] w-[540px] rounded-full blur-[130px] transition-opacity duration-1000 ${
            dark ? 'bg-cyan-500/12' : 'bg-cyan-400/10'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Headline, Bio, Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
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

            {/* Main Heading with Backdrop Portrait */}
            <div className="relative space-y-3 py-1">
              {/* Atmospheric Portrait Backdrop directly behind "Hi, I'm Muhammad Azhar" */}
              <div
                className="pointer-events-none absolute -right-2 sm:right-2 lg:-right-6 -top-8 sm:-top-12 -bottom-6 w-52 sm:w-64 md:w-80 select-none overflow-hidden rounded-3xl opacity-20 sm:opacity-25 dark:opacity-30 mix-blend-luminosity transition-all duration-300"
                aria-hidden="true"
              >
                <div
                  className={`absolute inset-0 z-10 ${
                    dark
                      ? 'bg-gradient-to-r from-[#0b0d17] via-[#0b0d17]/70 to-transparent'
                      : 'bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent'
                  }`}
                />
                <div
                  className={`absolute inset-0 z-10 ${
                    dark
                      ? 'bg-gradient-to-t from-[#0b0d17] via-transparent to-[#0b0d17]/40'
                      : 'bg-gradient-to-t from-slate-50 via-transparent to-slate-50/40'
                  }`}
                />
                <img
                  src={profilePhoto}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="relative z-10">
                <p className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-primary-300' : 'text-primary-600'}`}>
                  Software Engineer & Developer
                </p>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${dark ? 'text-white' : 'text-slate-900'}`}>
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Muhammad Azhar
                  </span>
                </h1>
                
                {/* Dynamic Role Rotator with clean wrapping */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-2">
                  <span className={`text-sm sm:text-base font-semibold ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
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
            </div>

            {/* Professional Summary */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              Computer Science graduate (AWKUM Gold Medalist) and AWS Certified Solutions Architect. 
              I design and build reliable, cloud-native software and serverless systems with Python, AWS Lambda, DynamoDB, and Next.js, while managing 60+ workstations as IT Executive at UMS.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/35"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {onOpenResumeModal ? (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:bg-white/10 hover:text-white'
                      : 'border-slate-300 bg-white text-slate-800 hover:border-primary-400 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="h-4 w-4 text-primary-400" />
                  <span>View Resume</span>
                </button>
              ) : (
                <Link
                  to="/resume"
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-slate-200 hover:border-primary-400/40 hover:bg-white/10 hover:text-white'
                      : 'border-slate-300 bg-white text-slate-800 hover:border-primary-400 hover:bg-slate-50'
                  }`}
                >
                  <FileText className="h-4 w-4 text-primary-400" />
                  <span>Resume</span>
                </Link>
              )}

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  copiedEmail
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : dark
                      ? 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
                aria-label="Copy email address to clipboard"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Verified Quick Highlights */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t ${dark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className="space-y-0.5">
                <span className={`block text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Credentials</span>
                <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>AWS SAA-C03</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Education</span>
                <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>BS CS (3.32 GPA)</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Current Role</span>
                <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>IT Executive @ UMS</span>
              </div>
              <div className="space-y-0.5">
                <span className={`block text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Honors</span>
                <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>AWKUM Gold Medal</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-1">
              <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 hover:scale-105 ${
                      dark
                        ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-primary-300'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-primary-400 hover:text-primary-700'
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Bento Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Top Bento Card: Executive Portrait Showcase */}
            <div
              className={`group relative overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 hover:border-primary-500/40 ${
                dark
                  ? 'border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/80 shadow-black/40'
                  : 'border-slate-200/80 bg-white shadow-slate-200/50'
              }`}
            >
              {/* Photo Showcase Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={profilePhoto}
                  alt="Muhammad Azhar — Software Engineer & AWS Solutions Architect"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    dark
                      ? 'from-[#0c0e18] via-[#0c0e18]/30 to-transparent'
                      : 'from-slate-950/85 via-slate-950/20 to-transparent'
                  }`}
                />

                {/* Live Availability Beacon Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/85 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Available for Hire
                  </span>
                </div>

                {/* Floating Credential Chip */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/85 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                    <span>AWS Certified</span>
                  </span>
                </div>

                {/* Identity Overlay on Image */}
                <div className="absolute bottom-3.5 inset-x-4 z-10 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white drop-shadow-sm">
                        Muhammad Azhar
                      </h3>
                      <p className="text-xs font-semibold text-primary-300">
                        Software Engineer & Developer
                      </p>
                    </div>
                    <p className="flex items-center gap-1 text-[11px] text-slate-300 shrink-0">
                      <MapPin className="h-3 w-3 text-primary-400" />
                      <span>Pakistan</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Badges inside Card */}
              <div className="p-4 grid grid-cols-2 gap-2.5 text-xs">
                <div className={`rounded-xl border p-2.5 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                  <span className={`block text-[10px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Active Operations</span>
                  <span className={`block font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>60+ Workstations</span>
                </div>
                <div className={`rounded-xl border p-2.5 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                  <span className={`block text-[10px] font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Academic Honor</span>
                  <span className="block font-bold text-amber-400">AWKUM Gold Medal</span>
                </div>
              </div>
            </div>

            {/* Bottom Bento Card: Interactive Code & Architecture Window */}
            <div
              className={`overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 ${
                dark
                  ? 'border-white/10 bg-[#0c0e18] shadow-black/50'
                  : 'border-slate-200/90 bg-slate-950 text-slate-100 shadow-slate-300/40'
              }`}
            >
              {/* Window Header with mobile-friendly tabs */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3 sm:px-4 py-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs with shortLabel fallback for mobile */}
                <div className="flex items-center gap-1 overflow-x-auto px-2" role="tablist">
                  {CODE_TABS.map((tab, idx) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === idx}
                      onClick={() => setActiveTab(idx)}
                      className={`rounded-lg px-2 sm:px-2.5 py-1 font-mono text-[11px] font-medium transition-colors shrink-0 ${
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

                <Terminal className="h-3.5 w-3.5 text-slate-500 shrink-0" />
              </div>

              {/* Code Snippet Display */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[160px]">
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

          </div>

        </div>
      </div>
    </section>
  );
};
