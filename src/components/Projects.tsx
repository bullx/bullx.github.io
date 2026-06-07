import { Cpu, MessageSquare, Search, Database, GitBranch, FileText, Users, Share2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Document Reader',
    description: 'Document reader API which scans documents, creates tokens using Facebook AI Similarity for search, and generates responses using Mistral-LLM model.',
    technologies: ['Python', 'FAISS', 'Mistral-LLM', 'FAST API'],
    icon: Cpu,
    highlights: ['Semantic Search', 'LLM Integration', 'REST API'],
  },
  {
    title: 'Sentiment Analysis',
    description: 'Expert system built as an Android application for analyzing and classifying reviews using the TextBlob library.',
    technologies: ['Android', 'TextBlob', 'Python'],
    icon: MessageSquare,
    highlights: ['NLP', 'Android App', 'Classification'],
  },
  {
    title: 'Web Scraper',
    description: 'Python-based web scraper for extracting relevant content from webpages using NLTK and BeautifulSoup libraries.',
    technologies: ['Python', 'NLTK', 'BeautifulSoup'],
    icon: Search,
    highlights: ['Data Extraction', 'NLP', 'Automated'],
  },
  {
    title: 'TTL Cache',
    description: 'Implemented a Time-To-Live cache using Java threads with automatic expiration and cleanup mechanisms.',
    technologies: ['Java', 'Threads', 'Collections'],
    icon: Database,
    highlights: ['Caching', 'Thread Management', 'Memory Efficient'],
  },
  {
    title: 'GitHub Gist Editor',
    description: 'Python-based tool to create, edit, delete, and update GitHub gists using API calls.',
    technologies: ['Python', 'GitHub API', 'REST'],
    icon: GitBranch,
    highlights: ['API Integration', 'CLI Tool', 'CRUD'],
  },
  {
    title: 'Personal Notes API',
    description: 'Built a REST API for storing notes with add, read, update, and delete operations.',
    technologies: ['NodeJS', 'MongoDB', 'Express'],
    icon: FileText,
    highlights: ['REST API', 'CRUD', 'MongoDB'],
  },
  {
    title: 'Doctor Search Portal',
    description: 'Online portal displaying doctors list and providing recommendations of doctors with the same specialty.',
    technologies: ['AngularJS', 'NodeJS', 'MySQL', 'AWS EC2'],
    icon: Users,
    highlights: ['Recommendation', 'AWS', 'Full Stack'],
  },
  {
    title: 'Pub-Sub System',
    description: 'Built a messaging system using Pub-Sub architecture involving a Broker as middleware for communication.',
    technologies: ['Java', 'Distributed Systems', 'Sockets'],
    icon: Share2,
    highlights: ['Distributed', 'Middleware', 'Scalable'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-mono">
            <span className="text-primary-600">&lt;</span>Projects<span className="text-primary-600">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto font-mono text-sm">
            // Featured work in AI/ML, web development, and distributed systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-50 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 border-b border-slate-200">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-slate-400 font-mono text-xs truncate">
                  {project.title.toLowerCase().replace(/\s/g, '_')}.js
                </span>
              </div>

              <div className="p-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-3 shadow-sm">
                  <project.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-slate-800 mb-2 font-mono text-sm">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded font-mono">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 font-mono">8+</div>
            <div className="text-sm text-slate-500 font-mono">// projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-600 font-mono">6</div>
            <div className="text-sm text-slate-500 font-mono">// technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 font-mono">100%</div>
            <div className="text-sm text-slate-500 font-mono">// deployed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
