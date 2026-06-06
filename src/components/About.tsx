import { Code2, Users, Zap, Award } from 'lucide-react';

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
    icon: Award,
    title: 'Customer Impact',
    description: 'Working closely with stakeholders and customers for demos, troubleshooting, and closing deals',
    metric: '$100K+ Deals',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Building Quality Software at Scale
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              I'm a Senior Software Engineer at Zscaler with a passion for building robust APIs,
              automation frameworks, and ensuring software quality. With over 5 years of experience
              spanning from startups to enterprise companies, I specialize in Python, Java, and
              modern testing methodologies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My expertise lies in developing REST APIs, creating automation frameworks that reduce
              testing time while increasing coverage, and collaborating with cross-functional teams
              to deliver impactful features. I've led initiatives that reduced customer-reported bugs
              by 70% and improved deployment efficiency by 90%.
            </p>

            {/* Code-style highlight box */}
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <div className="text-slate-400 mb-2">// Current focus</div>
              <div className="text-primary-400">const expertise = {`{`}</div>
              <div className="text-white pl-4">
                role: <span className="text-success-400">"Senior Software Engineer"</span>,
              </div>
              <div className="text-white pl-4">
                company: <span className="text-accent-400">"Zscaler"</span>,
              </div>
              <div className="text-white pl-4">
                focus: [<span className="text-success-400">"REST APIs"</span>, <span className="text-success-400">"Automation"</span>, <span className="text-success-400">"Quality"</span>]
              </div>
              <div className="text-primary-400">{`}`};</div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card card-hover p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                <span className="metric-highlight text-sm">{item.metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
