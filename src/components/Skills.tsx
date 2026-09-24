import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Wrench, Search, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading, Reveal, getIcon } from './ui';

interface SkillsProps {
  theme: 'dark' | 'light';
}

/* Progress bar that animates in when scrolled into view */
const SkillBar: React.FC<{ level: number; dark: boolean }> = ({ level, dark }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-white/10' : 'bg-slate-900/10'}`}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-orange-500 shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dark = theme === 'dark';

  const categoryNames = ['All', ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tags && skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.name !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          theme={theme}
          badge="Technical Capabilities"
          title="Skills &"
          highlight="Expertise"
          subtitle="Comprehensive tech stack spanning AWS cloud services, system administration, networking, and programming."
        />

        {/* Search + Category Pills */}
        <Reveal className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g., AWS EC2, Active Directory, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 ${
                dark
                  ? 'glass border-white/10 text-white placeholder-slate-500'
                  : 'glass-light border-slate-900/10 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-amber-300"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categoryNames.map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  activeCategory === catName
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30'
                    : dark
                    ? 'glass text-slate-300 hover:text-amber-300 hover:bg-white/10'
                    : 'glass-light text-slate-600 hover:text-amber-700 hover:bg-white'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <Reveal key={category.name} delay={catIdx * 60}>
              <div className={`p-6 rounded-3xl glass-sheen glow-hover h-full ${dark ? 'glass' : 'glass-light'}`}>

                {/* Header */}
                <div className={`flex items-center gap-3 pb-4 mb-4 border-b ${dark ? 'border-white/10' : 'border-slate-900/10'}`}>
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 shadow-inner">
                    {React.createElement(getIcon(category.iconName), { className: 'w-5 h-5 text-amber-400' })}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{category.name}</h3>
                    <p className={`text-[11px] line-clamp-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-semibold flex items-center gap-1.5 ${dark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {skill.highlight && <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />}
                          {skill.name}
                        </span>
                        <span className="font-mono text-amber-400 text-[11px] font-bold">{skill.level}%</span>
                      </div>

                      <SkillBar level={skill.level} dark={dark} />

                      {skill.tags && (
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {skill.tags.map((tag, tIdx) => (
                            <span key={tIdx} className={`text-[10px] font-mono px-2 py-0.5 rounded ${dark ? 'bg-white/5 text-slate-400' : 'bg-slate-900/5 text-slate-500'}`}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className={`text-center py-12 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            No skills found matching "{searchQuery}". Try searching for AWS, Python, or Networking.
          </div>
        )}

      </div>
    </section>
  );
};
