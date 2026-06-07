import { Code2, Users, Zap, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'REST API Development',
    description: 'Designing and developing scalable REST APIs for configuration and data management',
    metric: '100+ APIs',
  },
  {
    icon: Users,
    title: 'Cross-functional Leadership',
    description: 'Leading cross-functional teams for successful delivery of multiple features in parallel',
    metric: '5+ Teams',
  },
  {
    icon: Zap,
    title: 'Productivity Optimization',
    description: 'Leveraging AI tools to reduce coding time and generate comprehensive tests',
    metric: '80% Bug Reduction',
  },
  {
    icon: Trophy,
    title: 'Customer Impact',
    description: 'Working closely with stakeholders and customers for demos, troubleshooting, and closing deals',
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
          {/* Bio */}
          <div className="animate-fade-in">
            {/* Terminal Window */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 font-mono text-sm">about.js</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-slate-500">// Building quality software at scale</div>
                <div className="text-primary-400">const <span className="text-white">engineer</span> = {'{'}</div>
                <div className="pl-4 text-slate-400">
                  name: <span className="text-accent-300">"Karan Chimedia"</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  role: <span className="text-accent-300">"Senior Software Engineer"</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  company: <span className="text-accent-300">"Zscaler"</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  experience: <span className="text-green-400">"5+ years"</span>,
                </div>
                <div className="pl-4 text-slate-400">
                  focus: [<span className="text-accent-300">"REST APIs"</span>, <span className="text-accent-300">"Automation"</span>, <span className="text-accent-300">"Quality"</span>],
                </div>
                <div className="text-primary-400">{'}'};</div>
              </div>
            </div>

            {/* Summary text */}
            <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
              <p className="text-slate-400 leading-relaxed">
                I specialize in Python, Java, and modern testing methodologies. My expertise lies in developing REST APIs, creating automation frameworks that reduce testing time while increasing coverage, and collaborating with cross-functional teams to deliver impactful features.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center mb-4 border border-primary-500/30">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 mb-3">{item.description}</p>
                <span className="inline-flex items-center px-3 py-1 bg-primary-600/20 text-primary-400 rounded-md text-sm font-mono border border-primary-500/30">
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
