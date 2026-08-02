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
  'Technical Leadership',
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
            // Tech stack and competencies
          </p>
        </div>

        {/* Skills Grid - Dependency Style */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-500 font-mono text-sm">package.json</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-6">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="w-4 h-4 text-primary-400" />
                    <span className="text-slate-300">"{category.title.toLowerCase().replace(/\s/g, '_')}"</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-slate-500">{'['}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6 pb-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded border border-slate-600 hover:border-primary-500 hover:text-primary-400 transition-colors"
                      >
                        "{skill}"
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-500">{']'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h4 className="text-sm font-semibold text-slate-500 mb-4 font-mono">
            <span className="text-accent-400">export const</span> competencies: string[]
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-slate-800 text-slate-400 rounded text-sm font-mono border border-slate-700 hover:border-accent-500 hover:text-accent-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Build Status */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-800 rounded-lg border border-slate-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-400 font-mono text-sm">build: passing</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono text-sm">coverage: 95%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
