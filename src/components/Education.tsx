import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    highlights: [
      'Software Engineering & Distributed Systems',
      'Advanced Algorithms, Database Systems, Software Testing',
    ],
  },
  {
    degree: 'B.E. Information Technology',
    school: 'Sardar Patel Institute of Technology, Mumbai University',
    location: 'Mumbai, India',
    highlights: [
      'Computer Science Fundamentals',
      'Data Structures, Operating Systems, Computer Networks',
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
    <section id="education" className="section-padding bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">&lt;</span>Education<span className="text-primary-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // Academic foundation
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={edu.school} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-primary-500/30 transition-all">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 font-mono text-sm">degree[{index}].ts</span>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <GraduationCap className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{edu.school}</h3>
                    <p className="font-mono text-sm text-primary-400 mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-3 font-mono">
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="space-y-1">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5 font-mono flex-shrink-0">&gt;</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 text-center">
          <h4 className="text-sm text-slate-500 mb-4 font-mono">
            <span className="text-accent-400">export const</span> certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded text-sm font-mono border border-slate-700"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
