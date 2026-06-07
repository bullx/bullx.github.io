import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    highlights: [
      'Focus on Software Engineering and Distributed Systems',
      'Coursework: Advanced Algorithms, Database Systems, Software Testing',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Sardar Patel Institute of Technology, Mumbai University',
    location: 'Mumbai, India',
    highlights: [
      'Foundation in Computer Science Fundamentals',
      'Coursework: Data Structures, Operating Systems, Computer Networks',
    ],
  },
];

const certifications = [
  'AWS Cloud Practitioner',
  'Java Development Certified',
  'Python Automation Expert',
  'Test Automation Professional',
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-mono">
            <span className="text-primary-600">&lt;</span>Education<span className="text-primary-600">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto font-mono text-sm">
            // Academic background and certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={edu.school} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-slate-400 font-mono text-xs">education[{index}].json</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{edu.school}</h3>
                      <p className="font-mono text-sm text-primary-600 mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <ul className="space-y-1">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-primary-500 mt-1 font-mono">&gt;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-slate-800 mb-4 font-mono">
            <span className="text-accent-600">export const</span> certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-mono border border-slate-700"
              >
                '{cert}'
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
