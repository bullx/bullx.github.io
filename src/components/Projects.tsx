import { Cpu, MessageSquare, Search, Database, GitBranch, FileText, Users, Share2, Trash2, Gauge, Github, Lock, Wrench } from 'lucide-react';

const projects = [
  {
    title: 'LocalPasswordVault',
    description: 'Local-first desktop password manager for Windows and macOS. Credentials live in SQLite with field-level AES-256-GCM encryption and Argon2id key derivation, a random data-encryption key wrapped by the master password, optional TOTP 2FA with recovery codes, standalone text/file encryption, a password generator, encrypted JSON export/import, idle auto-lock, and clipboard auto-clear.',
    technologies: ['Python', 'SQLite', 'AES-256-GCM', 'Argon2id', 'TOTP', 'PyInstaller'],
    icon: Lock,
    category: 'security',
    github: 'https://github.com/bullx/localpasswordvault',
  },
  {
    title: 'Windows Cleaner',
    description: 'Desktop + CLI tool (Python/Tk) for Windows 10/11 that frees disk space, reduces telemetry/tracking, and optionally removes Store/OEM bloatware. Built around a Scan → Dry-run → Clean pipeline with Admin-aware status and re-scan verification (Fixed / Not fixed / Still present), plus portable PyInstaller packaging. Focused on safe, documented Windows mechanisms—no Defender/Update disable, no fake success.',
    technologies: ['Python', 'Tkinter', 'Windows 10/11', 'CLI', 'PyInstaller', 'Privacy'],
    icon: Wrench,
    category: 'tools',
    github: 'https://github.com/bullx/windowscleaner',
  },
  {
    title: 'AppUnload',
    description: 'macOS app uninstaller that finds leftover ~/Library files and moves them to Trash safely.',
    technologies: ['Python', 'PySide6', 'py2app', 'pytest', 'send2trash', 'macOS'],
    icon: Trash2,
    category: 'tools',
    github: 'https://github.com/bullx/mac-cleaner',
  },
  {
    title: 'Mac Hardware Info',
    description: 'Native Mac utility for NVMe SMART health, battery mAh, and Apple Silicon fan curves.',
    technologies: ['Python', 'Tkinter', 'C', 'IOKit', 'PyObjC', 'macOS'],
    icon: Gauge,
    category: 'systems',
    github: 'https://github.com/bullx/statsinfo',
  },
  {
    title: 'AI Document Reader',
    description: 'Document reader API using FAISS for semantic search and Mistral-LLM for generating responses from relevant chunks.',
    technologies: ['Python', 'FAISS', 'Mistral-LLM', 'FAST API'],
    icon: Cpu,
    category: 'ai',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Android application for analyzing and classifying user reviews using the TextBlob NLP library.',
    technologies: ['Android', 'TextBlob', 'Python'],
    icon: MessageSquare,
    category: 'ai',
  },
  {
    title: 'Web Scraper',
    description: 'Automated content extraction from webpages using NLTK and BeautifulSoup for natural language processing.',
    technologies: ['Python', 'NLTK', 'BeautifulSoup'],
    icon: Search,
    category: 'ai',
  },
  {
    title: 'TTL Cache',
    description: 'Time-To-Live cache implementation in Java with thread-based automatic expiration and cleanup.',
    technologies: ['Java', 'Threads', 'Collections'],
    icon: Database,
    category: 'systems',
  },
  {
    title: 'GitHub Gist Editor',
    description: 'CLI tool for creating, editing, and deleting GitHub gists via the REST API.',
    technologies: ['Python', 'GitHub API', 'REST'],
    icon: GitBranch,
    category: 'tools',
  },
  {
    title: 'Personal Notes API',
    description: 'REST API with full CRUD operations for persistent note storage backed by MongoDB.',
    technologies: ['NodeJS', 'MongoDB', 'Express'],
    icon: FileText,
    category: 'web',
  },
  {
    title: 'Doctor Search Portal',
    description: 'Full-stack portal with specialty-based doctor recommendations deployed on AWS EC2.',
    technologies: ['AngularJS', 'NodeJS', 'MySQL', 'AWS'],
    icon: Users,
    category: 'web',
  },
  {
    title: 'Pub-Sub System',
    description: 'Distributed messaging system with broker middleware implementing publish-subscribe architecture.',
    technologies: ['Java', 'Distributed Systems', 'Sockets'],
    icon: Share2,
    category: 'systems',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">&lt;</span>Projects<span className="text-primary-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // Open-source and personal builds
          </p>
        </div>

        {/* Projects Grid - Git Repo Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 rounded-lg border border-slate-700 hover:border-primary-500/40 transition-all overflow-hidden"
            >
              {/* Repo Header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/50">
                <project.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-primary-400 transition-colors" />
                <span className="text-slate-400 font-mono text-xs truncate group-hover:text-primary-400 transition-colors">
                  {project.title.toLowerCase().replace(/\s/g, '-')}
                </span>
                <div className="ml-auto flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-110"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  <span className="text-xs text-slate-600 font-mono border border-slate-700 rounded px-1.5 py-0.5">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white mb-2 font-mono text-sm">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies as language dots */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-500 rounded font-mono border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Git-style stats */}
        <div className="mt-10 flex justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>12 repositories</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span>5 languages</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
            <div className="w-2 h-2 rounded-full bg-accent-500" />
            <span>all deployed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
