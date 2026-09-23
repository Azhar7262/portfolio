import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Wrench, Search, Cloud, Server, Network, Code, Monitor, Users, CheckCircle2, Sparkles } from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-sky-400" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-400" />;
      default: return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tags && skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.name !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Comprehensive tech stack spanning AWS cloud services, system administration, networking, and programming.
          </p>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g., AWS EC2, Active Directory, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categoryNames.map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === catName
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : theme === 'dark'
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

        </div>

        {/* Categories & Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:border-cyan-500/50 ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/10'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/40">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">{category.name}</h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{category.description}</p>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold flex items-center gap-1.5">
                        {skill.highlight && <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />}
                        {skill.name}
                      </span>
                      <span className="font-mono text-cyan-400 text-[11px] font-bold">{skill.level}%</span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-slate-800/60 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Skill Tags */}
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No skills found matching "{searchQuery}". Try searching for AWS, Python, or Networking.
          </div>
        )}

      </div>
    </section>
  );
};
