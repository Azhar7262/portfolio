import React, { useCallback, useMemo, useState } from 'react';
import { Search, X, Wrench } from 'lucide-react';
import { SectionHeading, SkillCard, SkillModal, SkillDefinition, getIcon } from './ui';

interface SkillsProps {
  theme: 'dark' | 'light';
}

interface CategoryDef {
  name: string;
  iconName: string;
  description: string;
  skills: SkillDefinition[];
}

const CATEGORIES: CategoryDef[] = [
  {
    name: 'Development',
    iconName: 'Code',
    description: 'Programming languages, frontend frameworks, APIs, and core software engineering fundamentals.',
    skills: [
      { name: 'HTML5', iconName: 'Code', category: 'Development', description: 'Semantic markup and modern web page structure', concepts: ['Semantic elements', 'Form validation', 'Accessibility'], projects: ['Static Website Hosting on S3'], related: ['CSS3', 'JavaScript'], level: 'Working Knowledge' },
      { name: 'CSS3', iconName: 'LayoutDashboard', category: 'Development', description: 'Responsive, accessible, and maintainable styling', concepts: ['Flexbox', 'Grid', 'Custom properties'], projects: ['Static Website Hosting on S3'], related: ['HTML5', 'Tailwind'], level: 'Intermediate' },
      { name: 'JavaScript', iconName: 'Zap', category: 'Development', description: 'Interactive frontends and DOM manipulation', concepts: ['ES6 modules', 'Async/await', 'DOM API', 'Fetch'], projects: ['AWS-Powered AI Chatbot'], related: ['React', 'HTML5'], level: 'Working Knowledge' },
      { name: 'React', iconName: 'LayoutDashboard', category: 'Development', description: 'Component-driven user interfaces and state management', concepts: ['Hooks', 'Component lifecycle', 'Props & state'], projects: ['Portfolio Website', 'AWS-Powered AI Chatbot'], related: ['JavaScript', 'TypeScript'], level: 'Intermediate' },
      { name: 'Node.js', iconName: 'Server', category: 'Development', description: 'JavaScript runtime for server-side and API work', concepts: ['Event loop', 'Express', 'npm', 'REST APIs'], projects: ['AWS-Powered AI Chatbot'], related: ['JavaScript', 'APIs'], level: 'Intermediate' },
      { name: 'Python', iconName: 'Zap', category: 'Development', description: 'Scripting, data processing, and AI tooling', concepts: ['Pandas', 'NumPy', 'boto3'], projects: ['Smart Agriculture IoT', 'Image Label Generator'], related: ['AWS', 'boto3'], level: 'Working Knowledge' },
      { name: 'APIs', iconName: 'Link2', category: 'Development', description: 'Designing and integrating REST and serverless APIs', concepts: ['HTTP methods', 'JSON', 'Webhooks', 'Auth'], projects: ['AWS-Powered AI Chatbot'], related: ['Node.js', 'AWS'], level: 'Working Knowledge' },
      { name: 'Git & GitHub', iconName: 'Github', category: 'Development', description: 'Version control and collaborative team workflows', concepts: ['Branches', 'Pull requests', 'CI/CD'], projects: ['All Cloud & AI Projects'], related: ['GitHub', 'Linux'], level: 'Advanced' },
    ],
  },
  {
    name: 'Databases',
    iconName: 'Database',
    description: 'Relational and NoSQL systems for storage, querying, and analytics.',
    skills: [
      { name: 'PostgreSQL', iconName: 'Database', category: 'Databases', description: 'Relational database for structured data and reporting', concepts: ['Joins', 'Indexes', 'Query planning'], projects: ['Smart Agriculture IoT'], related: ['SQL', 'AWS'], level: 'Intermediate' },
      { name: 'MySQL', iconName: 'Database', category: 'Databases', description: 'Open-source relational database for production workloads', concepts: ['Transactions', 'Normalization', 'Replication'], projects: ['Smart Agriculture IoT'], related: ['SQL'], level: 'Intermediate' },
      { name: 'MongoDB', iconName: 'Database', category: 'Databases', description: 'Document database for flexible, schema-less data models', concepts: ['Documents', 'Queries', 'Aggregation'], projects: ['Smart Agriculture IoT'], related: ['Python'], level: 'Intermediate' },
      { name: 'SQL', iconName: 'Database', category: 'Databases', description: 'Writing efficient queries for relational systems', concepts: ['SELECT', 'Joins', 'Aggregations', 'Indexes'], projects: ['Smart Agriculture IoT'], related: ['PostgreSQL', 'MySQL'], level: 'Working Knowledge' },
      { name: 'DynamoDB', iconName: 'HardDrive', category: 'Databases', description: 'Serverless NoSQL storage for event-driven workloads', concepts: ['Tables', 'Partition keys', 'On-demand capacity'], projects: ['Smart Agriculture IoT', 'AWS-Powered AI Chatbot'], related: ['AWS', 'Lambda'], level: 'Intermediate' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Cloud platforms, infrastructure tooling, automation, and platform operations.',
    skills: [
      { name: 'AWS', iconName: 'Cloud', category: 'Cloud & DevOps', description: 'Public cloud platform for compute, storage, networking, and security', concepts: ['Compute', 'Storage', 'Networking', 'Security'], projects: ['All Cloud & AI Projects'], related: ['EC2', 'S3', 'Lambda'], level: 'Advanced' },
      { name: 'AWS EC2', iconName: 'Server', category: 'Cloud & DevOps', description: 'Virtual servers for scalable application hosting', concepts: ['Instances', 'AMIs', 'Security groups', 'Auto Scaling'], projects: ['Smart Agriculture IoT', 'Static Website Hosting'], related: ['AWS', 'Linux'], level: 'Intermediate' },
      { name: 'AWS S3', iconName: 'HardDrive', category: 'Cloud & DevOps', description: 'Object storage for static websites and application assets', concepts: ['Buckets', 'Lifecycle rules', 'Versioning'], projects: ['Static Website Hosting', 'Image Label Generator'], related: ['AWS', 'CloudFront'], level: 'Intermediate' },
      { name: 'AWS Lambda', iconName: 'Zap', category: 'Cloud & DevOps', description: 'Serverless compute for event-driven automation', concepts: ['Events', 'Handlers', 'IAM'], projects: ['Smart Agriculture IoT', 'AWS-Powered AI Chatbot'], related: ['Python', 'APIs'], level: 'Intermediate' },
      { name: 'AWS VPC', iconName: 'Route', category: 'Cloud & DevOps', description: 'Isolated virtual networks for secure cloud workloads', concepts: ['Subnets', 'Route tables', 'NAT gateways'], projects: ['Smart Agriculture IoT'], related: ['Networking', 'EC2'], level: 'Intermediate' },
      { name: 'AWS IoT Core', iconName: 'Network', category: 'Cloud & DevOps', description: 'Managed IoT messaging and device telemetry over MQTT', concepts: ['MQTT', 'Rules engine', 'Device shadows'], projects: ['Smart Agriculture IoT'], related: ['ESP32', 'Lambda'], level: 'Intermediate' },
      { name: 'CI/CD', iconName: 'Workflow', category: 'Cloud & DevOps', description: 'Automated build, test, and deployment pipelines', concepts: ['GitHub Actions', 'Build stages', 'Environment promotion'], projects: ['Portfolio Website', 'Static Website Hosting'], related: ['Git', 'AWS'], level: 'Intermediate' },
      { name: 'Linux', iconName: 'Network', category: 'Cloud & DevOps', description: 'Command-line administration for servers and containers', concepts: ['Bash', 'Permissions', 'Services', 'Logs'], projects: ['Enterprise Active Directory Lab', 'Smart Agriculture IoT'], related: ['AWS', 'Docker'], level: 'Intermediate' },
      { name: 'Networking', iconName: 'Network', category: 'Cloud & DevOps', description: 'TCP/IP, DNS, routing, and secure network design', concepts: ['DNS', 'DHCP', 'VPN', 'Firewalls'], projects: ['Enterprise Active Directory Lab'], related: ['Linux', 'AWS'], level: 'Advanced' },
      { name: 'AWS CLI', iconName: 'Terminal', category: 'Cloud & DevOps', description: 'Scripted cloud operations from the terminal', concepts: ['CLI profiles', 'Bulk operations', 'Scripting'], projects: ['Smart Agriculture IoT'], related: ['AWS', 'Linux'], level: 'Intermediate' },
    ],
  },
  {
    name: 'AI & Automation',
    iconName: 'Brain',
    description: 'Artificial intelligence tooling, LLMs, prompt design, and intelligent workflows.',
    skills: [
      { name: 'Generative AI', iconName: 'Brain', category: 'AI & Automation', description: 'Building applications that generate text, images, and insights', concepts: ['Prompts', 'Embeddings', 'Tokens'], projects: ['AWS-Powered AI Chatbot'], related: ['Python', 'LLM APIs'], level: 'Working Knowledge' },
      { name: 'AI-assisted development', iconName: 'Brain', category: 'AI & Automation', description: 'Using AI coding tools to accelerate implementation', concepts: ['Code generation', 'Refactoring', 'Testing'], projects: ['Portfolio Website'], related: ['VS Code', 'GitHub'], level: 'Working Knowledge' },
      { name: 'AI APIs', iconName: 'Link2', category: 'AI & Automation', description: 'Calling third-party models for intelligent features', concepts: ['SDKs', 'Rate limits', 'Cost control'], projects: ['AWS-Powered AI Chatbot'], related: ['Python', 'Generative AI'], level: 'Intermediate' },
      { name: 'Prompt Engineering', iconName: 'Activity', category: 'AI & Automation', description: 'Designing effective prompts for reliable outputs', concepts: ['Few-shot', 'Chain-of-thought', 'System instructions'], projects: ['AWS-Powered AI Chatbot'], related: ['Generative AI', 'AI APIs'], level: 'Working Knowledge' },
      { name: 'Amazon Rekognition', iconName: 'Brain', category: 'AI & Automation', description: 'Computer vision for object, scene, and text detection', concepts: ['Labels', 'Moderation', 'Batch analysis'], projects: ['Image Label Generator'], related: ['S3', 'boto3'], level: 'Intermediate' },
      { name: 'Amazon Lex', iconName: 'Brain', category: 'AI & Automation', description: 'Conversational interfaces with natural language understanding', concepts: ['Intents', 'Slots', 'Fulfilment'], projects: ['AWS-Powered AI Chatbot'], related: ['Lambda', 'DynamoDB'], level: 'Intermediate' },
      { name: 'Automation', iconName: 'Workflow', category: 'AI & Automation', description: 'Automating repetitive tasks with scripts and cloud events', concepts: ['Cron', 'Event triggers', 'Idempotency'], projects: ['Smart Agriculture IoT', 'Image Label Generator'], related: ['Python', 'AWS'], level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools',
    iconName: 'Wrench',
    description: 'Day-to-day engineering software, terminals, and developer productivity tools.',
    skills: [
      { name: 'VS Code', iconName: 'Code', category: 'Tools', description: 'Primary editor for writing and debugging code', concepts: ['Extensions', 'Remote development', 'Debugging'], projects: ['All Web & Cloud Projects'], related: ['Git', 'Node.js'], level: 'Advanced' },
      { name: 'GitHub', iconName: 'Github', category: 'Tools', description: 'Code hosting, collaboration, and CI/CD', concepts: ['Repos', 'Pull requests', 'Issues'], projects: ['All Cloud & AI Projects'], related: ['Git', 'Actions'], level: 'Advanced' },
      { name: 'Postman', iconName: 'Globe', category: 'Tools', description: 'Testing and documenting APIs', concepts: ['Requests', 'Collections', 'Environments'], projects: ['AWS-Powered AI Chatbot'], related: ['APIs', 'Node.js'], level: 'Familiar' },
      { name: 'Navicat', iconName: 'Database', category: 'Tools', description: 'Database GUI for administering MySQL and PostgreSQL', concepts: ['Query builder', 'Schema design', 'Backups'], projects: ['Smart Agriculture IoT'], related: ['Databases'], level: 'Familiar' },
      { name: 'Figma', iconName: 'Eye', category: 'Tools', description: 'UI design and prototyping for developer handoff', concepts: ['Components', 'Auto layout', 'Dev mode'], projects: ['Portfolio Website'], related: ['Design Systems', 'CSS'], level: 'Familiar' },
      { name: 'Terminal / CLI', iconName: 'Terminal', category: 'Tools', description: 'Daily command-line workflows and automation', concepts: ['SSH', 'Remote servers', 'Piping'], projects: ['All Cloud & AI Projects'], related: ['Linux', 'AWS CLI'], level: 'Advanced' },
    ],
  },
];

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const dark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState<{ category: string | null; skill: SkillDefinition | null }>({ category: null, skill: null });

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATEGORIES
      .filter((c) => activeCategory === 'All' || c.name === activeCategory)
      .map((c) => ({
        ...c,
        skills: q
          ? c.skills.filter((s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q))
          : c.skills,
      }))
      .filter((c) => c.skills.length > 0);
  }, [activeCategory, searchQuery]);

  const openSkill = (skill: SkillDefinition) => {
    setModal({ category: skill.category, skill });
  };

  const closeModal = useCallback(() => setModal({ category: null, skill: null }), []);

  return (
    <section id="skills" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Technical Capabilities"
          title="Skills"
          highlight="Interactive"
          subtitle="Curated by real experience — cloud, systems, web, databases, and AI. Every skill opens into a detailed, accurate breakdown of what I know and where I used it."
        />

        <div className="space-y-6">
          {/* Search + category tabs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
              <input
                type="text"
                placeholder="Search skills…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-9 text-sm text-ink transition-all placeholder:text-ink-soft focus:border-primary-400/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-md text-ink-soft hover:bg-white/6 hover:text-ink"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  activeCategory === 'All'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : dark
                      ? 'bg-white/6 text-ink-soft hover:bg-white/10'
                      : 'bg-white text-ink-faint hover:bg-white/8'
                }`}
              >
                <Wrench className="h-3.5 w-3.5" />
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat.name
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                      : dark
                        ? 'bg-white/6 text-ink-soft hover:bg-white/10'
                        : 'bg-white text-ink-faint hover:bg-white/8'
                  }`}
                >
                  {cat.name}
                  <span className="rounded-full bg-white/10 px-1.5 text-[10px] font-semibold">{cat.skills.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category cards */}
          {filteredCategories.length === 0 ? (
            <div className={`rounded-2xl border border-dashed p-12 text-center ${dark ? 'border-white/10' : 'border-slate-300/60'}`}>
              <p className={`text-sm font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                No skills match "{searchQuery}".
              </p>
              <p className={`mt-1 text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                Try a different term, such as AWS, Python, PostgreSQL, or Docker.
              </p>
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const CatIcon = getIcon(cat.iconName);
              return (
                <div
                  key={cat.name}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-[320ms] ${
                    dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'
                  }`}
                >
                  <div className={`flex flex-wrap items-center justify-between gap-3 border-b p-4 sm:p-5 ${dark ? 'border-white/10' : 'border-slate-200/80'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${dark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-100 text-primary-700'}`}>
                        <CatIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>
                          {cat.name}
                        </h3>
                        <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-semibold ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 p-4 sm:p-5 md:grid-cols-2">
                    {cat.skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        dark={dark}
                        onClick={() => openSkill(skill)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openSkill(skill);
                          }
                        }}
                        ariaLabel={`Open details for ${skill.name}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Legend */}
        <div className={`mt-6 flex flex-wrap items-center gap-3 text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
          <span className="font-medium">Levels:</span>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-300">Advanced</span>
          <span className="rounded-full bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber-300">Intermediate</span>
          <span className="rounded-full bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-sky-300">Working Knowledge</span>
          <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] font-semibold">Familiar</span>
        </div>
      </div>

      {/* Modal */}
      <SkillModal category={modal.category} skill={modal.skill} dark={dark} onClose={closeModal} />
    </section>
  );
};
