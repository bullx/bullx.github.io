import { Code, Wrench, Database, Monitor } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Web',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'Shell Script', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'R', level: 60 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    color: 'accent',
    skills: [
      { name: 'Selenium', level: 90 },
      { name: 'Pytest', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'Splunk', level: 80 },
      { name: 'JUnit', level: 85 },
      { name: 'TestNG', level: 80 },
    ],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    color: 'success',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Platforms & IDEs',
    icon: Monitor,
    color: 'slate',
    skills: [
      { name: 'AWS EC2', level: 80 },
      { name: 'Visual Studio', level: 85 },
      { name: 'Eclipse', level: 85 },
      { name: 'JIRA', level: 90 },
      { name: 'XRAY', level: 85 },
      { name: 'Android Studio', level: 75 },
    ],
  },
];

const additionalSkills = [
  'REST APIs', 'CI/CD', 'Test Automation', 'Agile', 'API Testing',
  'UI Testing', 'Integration Testing', 'Performance Testing', 'Code Review',
  'Technical Leadership', 'Cross-functional Collaboration', 'Customer Support',
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Technical expertise across languages, tools, and frameworks for building quality software
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="card p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-${category.color}-100 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color === 'primary' ? 'from-primary-400 to-primary-600' : category.color === 'accent' ? 'from-accent-400 to-accent-600' : category.color === 'success' ? 'from-success-400 to-success-600' : 'from-slate-400 to-slate-600'} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Additional Competencies</h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 text-slate-700 rounded-full text-sm font-medium border border-primary-100 hover:border-primary-300 hover:shadow-sm transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 rounded-xl">
            <span className="text-primary-400 font-mono text-sm">&gt;_</span>
            <span className="text-white font-mono text-sm">
              Tech Stack: [Python, Java, SQL, REST, Automation, Cloud]
            </span>
            <span className="text-success-400 animate-pulse">|</span>
          </div>
        </div>
      </div>
    </section>
  );
}
