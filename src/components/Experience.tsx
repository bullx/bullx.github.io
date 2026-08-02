import { Building2, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    company: 'Zscaler',
    role: 'Senior Software Engineer',
    period: 'July 2021 – Present',
    location: 'San Francisco Bay Area',
    technologies: ['Java', 'Python', 'SQL', 'Jenkins', 'Splunk', 'Pytest', 'JUnit', 'Selenium', 'Postman'],
    summary: 'Full-stack engineer building REST APIs on Java backends, developing internal tooling, and driving automation that cut bugs by 80% and deployment time by 90%.',
    highlights: [
      'Designed and developed REST APIs on Java backends for configuration management and data ingestion with SQL',
      'Built a snapshot-diff tool that compares API responses before and after upgrades, catching regressions early and saving significant verification time',
      'Developed deployment tooling that cut release time by 90%, and created automated API failure alerts that improved triage speed by 80% and restored services before customer impact',
      'Wrote SQL verification scripts for pre- and post-database changes and integrated Jacoco into Maven builds for code coverage, together reducing customer-reported bugs by 70% and code issues by 40%',
      'Authored Splunk queries to triage production logs and generate analytics for API endpoints, reducing monthly failures; led 5+ cross-functional feature deliveries in parallel',
    ],
    metrics: [
      { label: 'Bug Reduction', value: '80%' },
      { label: 'Faster Deploys', value: '90%' },
      { label: 'Customer Bugs Cut', value: '70%' },
      { label: 'Code Issues Cut', value: '40%' },
    ],
  },
  {
    company: 'Datera',
    role: 'Software Development Engineer in Test',
    period: 'Nov 2017 – March 2021',
    location: 'Remote',
    technologies: ['Python', 'Shell Script', 'Git', 'Linux', 'Jenkins'],
    summary: 'Built and maintained end-to-end automation frameworks for enterprise storage infrastructure, achieving near-100% test coverage across every release cycle.',
    highlights: [
      'Engineered a full-stack automation framework and test library for storage systems covering disks, SSD, and NVMe via SCSI/TRIM protocols',
      'Optimized Jenkins-based test pipelines and continuously extended the automation library, significantly reducing test execution time',
      'Drove quality through design reviews, architecture discussions, and rigorous functional, system, performance, and API/UI testing',
    ],
    metrics: [
      { label: 'Test Coverage', value: '~100%' },
      { label: 'Framework', value: 'E2E' },
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-padding bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">&lt;</span>Experience<span className="text-primary-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // Shipping quality software at scale
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-primary-500/30 transition-all"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-500 font-mono text-sm">{exp.company.toLowerCase()}.config.ts</span>
              </div>

              <div className="p-6">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-5 h-5 text-primary-400" />
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <p className="font-mono text-sm text-primary-400">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-slate-400 mb-1 font-mono">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-400 font-mono">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-4 px-4 py-3 bg-slate-900/60 rounded-lg border border-slate-700/50">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <span className="text-green-400 font-mono">{'// '}</span>
                    {exp.summary}
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.metrics.map((metric) => (
                    <span key={metric.label} className="inline-flex items-center px-3 py-1.5 bg-primary-600/15 text-primary-400 rounded-md text-xs font-mono border border-primary-500/25">
                      <span className="text-primary-300 mr-1">{metric.value}</span> {metric.label}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded text-xs font-mono border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights - show 2 by default */}
                <div className="space-y-2.5">
                  {exp.highlights.slice(0, expandedIndex === index ? undefined : 2).map((highlight, i) => (
                    <div key={i} className="flex gap-2.5 text-sm text-slate-400">
                      <span className="text-primary-500 mt-0.5 font-mono flex-shrink-0">&gt;</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Expand/Collapse */}
                {exp.highlights.length > 2 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 mt-4 text-sm text-primary-400 hover:text-primary-300 transition-colors font-mono"
                  >
                    <span className="text-slate-500">{'// '}</span>
                    {expandedIndex === index ? 'show_less()' : 'show_more()'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
