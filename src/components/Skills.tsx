import { Code, Wrench, Database, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'Shell Script', 'JavaScript', 'R'],
  },
  {
    title: 'Testing & Frameworks',
    icon: Wrench,
    skills: ['Selenium', 'Pytest', 'Postman', 'JUnit', 'TestNG'],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps & Platform',
    icon: Server,
    skills: ['AWS', 'Jenkins', 'Docker', 'Git', 'Splunk', 'Linux'],
  },
];

const additionalSkills = [
  'REST APIs', 'CI/CD', 'Test Automation', 'Agile', 'API Testing',
  'UI Testing', 'Integration Testing', 'Performance Testing', 'Code Review',
  'Technical Leadership', 'Cross-functional Collaboration',
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">&lt;</span>Skills<span className="text-primary-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // Technical expertise for building quality software
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-slate-800 rounded-xl border border-slate-700 p-6 overflow-hidden">
              {/* Code-style header */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-500 font-mono text-sm">{category.title.toLowerCase()}.ts</span>
              </div>

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center border border-primary-500/30">
                  <category.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white font-mono">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded font-mono text-sm border border-slate-600 hover:border-primary-500 hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white mb-4 font-mono">
            <span className="text-accent-400">export const</span> additionalSkills
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 text-slate-400 rounded-lg text-sm font-mono border border-slate-700 hover:border-accent-500 hover:text-accent-400 transition-all"
              >
                '{skill}'
              </span>
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800 rounded-xl border border-slate-700">
            <span className="text-green-400 font-mono">$</span>
            <span className="text-slate-400 font-mono text-sm">npm run test</span>
            <span className="text-green-400 font-mono text-sm">// all passed</span>
            <span className="w-2 h-5 bg-primary-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
