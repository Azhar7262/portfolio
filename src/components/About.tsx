import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, CheckCircle2, Cloud, Server, Shield, Cpu, Network, Award, Sparkles } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const highlights = [
    {
      title: "AWS Cloud Solutions",
      description: "Designing multi-tier VPCs, IAM policies, S3 static sites, EC2 instances, and Lambda serverless functions.",
      icon: <Cloud className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Enterprise System Admin",
      description: "Managing Active Directory Domain Services, Windows Server, Group Policies (GPO), and M365 ecosystems.",
      icon: <Server className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Network Infrastructure",
      description: "Configuring TCP/IP routing, DNS, DHCP scopes, VPN tunnels, and Wi-Fi access points for corporate IT.",
      icon: <Network className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "IoT & Smart Telemetry",
      description: "Building ESP32 microservices communicating over MQTT to AWS IoT Core with DynamoDB and QuickSight.",
      icon: <Cpu className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Muhammad Azhar</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            AWS Certified Solutions Architect & IT Executive dedicated to cloud engineering, IT operational excellence, and infrastructure security.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card / Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-xl'
            }`}>
              
              {/* Background accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400 font-extrabold text-xl">
                    MA
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Muhammad Azhar</h3>
                  <p className="text-xs text-cyan-400 font-semibold">AWS Certified Solutions Architect – Associate</p>
                  <p className="text-xs text-slate-400">Islamabad, Pakistan</p>
                </div>
              </div>

              {/* Bio paragraphs as required */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                {PERSONAL_INFO.aboutDetailed.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quick stats footer */}
              <div className="mt-6 pt-6 border-t border-slate-800/40 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="block text-xl font-extrabold text-cyan-400">3.32 / 4.0</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">BS CS CGPA</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <span className="block text-xl font-extrabold text-emerald-400">Gold Medal</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Co-Curricular Honor</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Core Competency Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 group ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900/90'
                    : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className={`text-base font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
