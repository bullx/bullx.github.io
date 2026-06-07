import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    company: 'Zscaler',
    role: 'Senior Software Engineer',
    period: 'July 2021 – Present',
    location: 'Remote',
    technologies: ['Python', 'Java', 'Pytest', 'JUnit', 'SQL', 'Jenkins', 'Selenium', 'Postman', 'Splunk'],
    highlights: [
      'Designing and developing REST APIs for configuration and ingesting/retrieving data using SQL',
      'Increased productivity by using AI tools like Gemini, ChatGPT reducing coding time, generated tests which reduced bugs by 80%',
      'Developed automation framework, test plans and cases, functional testing, API/UI/Integration, end-to-end testing using Python/pytest',
      'Prioritized customer bugs for fixing, working closely with senior stakeholders and customers for product demos and troubleshooting',
      'Writing Splunk queries for triaging logs and generating analytics reports for API endpoints, reducing monthly failures',
      'Developed tools to support deployment reducing time by 90%',
      'Led cross-functional teams for successful delivery of multiple features in parallel more than 5 times',
      'Writing SQL scripts for verification pre/post database changes reducing bug filing by customers by 70%',
      'Created alerts for API failures helping triage issues faster by 80%, ensuring service restoration before customer awareness',
      'Integrated Jacoco plugin in Maven build for uncovering missing code coverage, reducing code issues by 40%',
    ],
    metrics: [
      { label: 'Bug Reduction', value: '80%' },
      { label: 'Deployment Time Saved', value: '90%' },
      { label: 'Customer Bug Reduction', value: '70%' },
    ],
  },
  {
    company: 'Datera',
    role: 'Software Development Engineer in Test',
    period: 'Nov 2017 – March 2021',
    location: 'Remote',
    technologies: ['Python', 'Shell Script', 'Git', 'Linux', 'Jenkins'],
    highlights: [
      'Developed end-to-end automation framework, library, test plans and cases for storage infrastructure',
      'Performed product testing for functional, system, performance, API/UI testing for disks, SSD, NVMe using protocols like SCSI, TRIM',
      'Maintained, improving, adding functionality to automation library, rework configuring tests using Jenkins reducing test time',
      'Ensured close to 100% test coverage on every run',
      'Participated in design, architecture, and code reviews with QA team',
    ],
    metrics: [
      { label: 'Test Coverage', value: '100%' },
      { label: 'Automation Framework', value: 'E2E' },
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-mono">
            <span className="text-primary-600">&lt;</span>Experience<span className="text-primary-600">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto font-mono text-sm">
            // Professional journey building quality software
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-green-400" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col lg:flex-row gap-6 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8">
                  <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-50 shadow-lg" />
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all p-6 overflow-hidden">
                    {/* Code Header */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-2 text-slate-400 font-mono text-xs">{exp.company.toLowerCase().replace(/\s/g, '-')}.json</span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-5 h-5 text-primary-600" />
                          <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                        </div>
                        <p className="font-semibold text-primary-600 font-mono text-sm">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-slate-500 mb-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    {exp.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.metrics.map((metric) => (
                          <span key={metric.label} className="inline-flex items-center px-2 py-1 bg-slate-900 text-primary-400 rounded text-xs font-mono border border-slate-700">
                            {metric.value} {metric.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-mono border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.slice(0, expandedIndex === index ? undefined : 3).map((highlight, i) => (
                        <div key={i} className="flex gap-2 text-sm text-slate-600">
                          <span className="text-primary-500 mt-1 font-mono">&gt;</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    {exp.highlights.length > 3 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="flex items-center gap-1 mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors font-mono"
                      >
                        {expandedIndex === index ? (
                          <>
                            <ChevronUp size={16} />
                            <span>// show_less()</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={16} />
                            <span>// show_more()</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
