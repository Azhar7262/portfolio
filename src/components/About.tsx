import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cloud, Server, Cpu, Network } from 'lucide-react';
import { SectionHeading, Reveal } from './ui';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const dark = theme === 'dark';

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

        <SectionHeading
          theme={theme}
          badge="Professional Profile"
          title="About"
          highlight="Muhammad Azhar"
          subtitle="AWS Certified Solutions Architect & IT Executive dedicated to cloud engineering, IT operational excellence, and infrastructure security."
        />

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Bio glass card */}
          <Reveal className="lg:col-span-5">
            <div className={`p-8 rounded-3xl glass-sheen relative overflow-hidden ${dark ? 'glass' : 'glass-light'}`}>
              {/* Accent glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 p-px shadow-xl shadow-cyan-500/30">
                  <div className={`w-full h-full rounded-2xl flex items-center justify-center text-cyan-400 font-extrabold text-xl ${dark ? 'bg-slate-950' : 'bg-white'}`}>
                    MA
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>Muhammad Azhar</h3>
                  <p className="text-xs text-cyan-400 font-semibold">AWS Certified Solutions Architect – Associate</p>
                  <p className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Islamabad, Pakistan</p>
                </div>
              </div>

              <div className={`space-y-4 text-xs sm:text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {PERSONAL_INFO.aboutDetailed.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center relative">
                <div className={`p-3 rounded-xl border ${dark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-slate-900/10'}`}>
                  <span className="block text-xl font-extrabold text-gradient">3.32 / 4.0</span>
                  <span className={`text-[10px] uppercase font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>BS CS CGPA</span>
                </div>
                <div className={`p-3 rounded-xl border ${dark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-slate-900/10'}`}>
                  <span className="block text-xl font-extrabold text-emerald-400">Gold Medal</span>
                  <span className={`text-[10px] uppercase font-semibold ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Co-Curricular Honor</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: competency glass cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className={`p-6 rounded-2xl glass-sheen glow-hover group h-full ${dark ? 'glass' : 'glass-light'}`}>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 w-fit mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
