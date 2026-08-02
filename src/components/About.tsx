import { Code2, Users, Zap, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'API Architecture',
    description: 'Designing and shipping scalable REST APIs for configuration and data management',
    metric: '100+ APIs',
  },
  {
    icon: Users,
    title: 'Cross-team Delivery',
    description: 'Leading cross-functional teams to ship multiple features in parallel',
    metric: '5+ Teams',
  },
  {
    icon: Zap,
    title: 'AI-Driven QA',
    description: 'Leveraging AI tools to accelerate coding and generate comprehensive tests',
    metric: '80% Bug Reduction',
  },
  {
    icon: Trophy,
    title: 'Revenue Impact',
    description: 'Partnering with stakeholders on demos, troubleshooting, and closing deals',
    metric: '$100K+ Deals',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">&lt;</span>About<span className="text-primary-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block */}
          <div className="animate-fade-in">
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 font-mono text-sm">engineer.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-slate-500">{'// Software engineer who ships'} </div>
                <div className="mt-3">
                  <span className="text-primary-400">interface </span>
                  <span className="text-white">Engineer </span>
                  {'{'}
                </div>
                <div className="pl-4 text-slate-400">
                  name: <span className="text-accent-300">"Karan Chimedia"</span>;
                </div>
                <div className="pl-4 text-slate-400">
                  role: <span className="text-accent-300">"Senior Software Engineer"</span>;
                </div>
                <div className="pl-4 text-slate-400">
                  company: <span className="text-accent-300">"Zscaler"</span>;
                </div>
                <div className="pl-4 text-slate-400">
                  experience: <span className="text-green-400">"5+ years"</span>;
                </div>
                <div className="pl-4 text-slate-400">
                  stack: [<span className="text-accent-300">"Python"</span>, <span className="text-accent-300">"Java"</span>, <span className="text-accent-300">"SQL"</span>];
                </div>
                <div className="pl-4 text-slate-400">
                  focus: [<span className="text-accent-300">"REST APIs"</span>, <span className="text-accent-300">"Automation"</span>, <span className="text-accent-300">"Quality"</span>];
                </div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Git-style summary */}
            <div className="mt-4 p-4 bg-slate-900/60 rounded-lg border border-slate-700/50 font-mono text-sm">
              <div className="text-slate-500 mb-2">{'// TL;DR'}</div>
              <p className="text-slate-400 leading-relaxed">
                I build robust APIs, engineer automation frameworks that cut testing time and boost coverage, and lead cross-functional teams to ship features that move the needle on quality and revenue.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-primary-500/40 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-600/20 flex items-center justify-center border border-primary-500/30 group-hover:bg-primary-600/30 transition-colors">
                    <item.icon className="w-4 h-4 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center px-2.5 py-1 bg-primary-600/15 text-primary-400 rounded text-xs font-mono border border-primary-500/25">
                  {item.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
