import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    period: '2016 – 2018',
    highlights: [
      'Focus on Software Engineering and Distributed Systems',
      'Coursework: Advanced Algorithms, Database Systems, Software Testing',
    ],
    color: 'primary',
  },
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Sardar Patel Institute of Technology, Mumbai University',
    location: 'Mumbai, India',
    period: '2012 – 2016',
    highlights: [
      'Foundation in Computer Science Fundamentals',
      'Coursework: Data Structures, Operating Systems, Computer Networks',
    ],
    color: 'accent',
  },
];

const certifications = [
  'AWS Cloud Practitioner',
  'Python Automation Expert',
  'Test Automation Professional',
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            A strong foundation in computer science principles and continuous learning
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-accent-300" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.school} className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 justify-center">
                    <div className={`w-4 h-4 rounded-full bg-${edu.color}-600 border-4 border-white shadow-md mt-2`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className={`hidden sm:flex w-12 h-12 rounded-lg bg-${edu.color}-100 items-center justify-center flex-shrink-0`}>
                        <GraduationCap className={`w-6 h-6 text-${edu.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-slate-800">{edu.school}</h3>
                          <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <p className={`font-semibold text-${edu.color}-600 mb-3`}>{edu.degree}</p>
                        <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <ul className="space-y-1">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className={`text-${edu.color}-600 mt-1`}>•</span>
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
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Certifications & Achievements</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 text-slate-700 rounded-lg text-sm font-medium border border-primary-100"
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
