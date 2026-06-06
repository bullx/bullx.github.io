import { Code, ExternalLink, Cpu, MessageSquare, Search, Database, GitBranch, Users, FileText, Share2 } from 'lucide-react';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'web', label: 'Web Development' },
  { id: 'systems', label: 'Systems' },
];

const projects = [
  {
    title: 'AI Document Reader',
    description: 'Document reader API which scans documents, creates tokens using Facebook AI Similarity for search, and generates responses using Mistral-LLM model for processing relevant chunks.',
    technologies: ['Python', 'FAISS', 'Mistral-LLM', 'FAST API'],
    category: 'ai',
    icon: Cpu,
    gradient: 'from-primary-500 to-primary-600',
    highlights: ['Semantic Search', 'LLM Integration', 'REST API'],
  },
  {
    title: 'Sentiment Analysis on User Reviews',
    description: 'Expert system built as an Android application for analyzing and classifying reviews using the TextBlob library for Python.',
    technologies: ['Android', 'TextBlob', 'Python'],
    category: 'ai',
    icon: MessageSquare,
    gradient: 'from-accent-500 to-accent-600',
    highlights: ['NLP', 'Android App', 'Review Classification'],
  },
  {
    title: 'Web Scraper',
    description: 'Python-based web scraper for extracting relevant content from webpages using NLTK and BeautifulSoup libraries.',
    technologies: ['Python', 'NLTK', 'BeautifulSoup'],
    category: 'ai',
    icon: Search,
    gradient: 'from-success-500 to-success-600',
    highlights: ['Data Extraction', 'NLP', 'Automated'],
  },
  {
    title: 'TTL Cache',
    description: 'Implemented a Time-To-Live cache using Java threads with automatic expiration and cleanup mechanisms.',
    technologies: ['Java', 'Threads', 'Collections'],
    category: 'systems',
    icon: Database,
    gradient: 'from-primary-500 to-accent-500',
    highlights: ['Caching', 'Thread Management', 'Memory Efficient'],
  },
  {
    title: 'GitHub Gist Editor',
    description: 'Python-based tool to create, edit, delete, and update GitHub gists using API calls.',
    technologies: ['Python', 'GitHub API', 'REST'],
    category: 'web',
    icon: GitBranch,
    gradient: 'from-accent-500 to-success-500',
    highlights: ['API Integration', 'CLI Tool', 'CRUD Operations'],
  },
  {
    title: 'Personal Notes Application',
    description: 'Built a REST API for storing notes with add, read, update, and delete operations.',
    technologies: ['NodeJS', 'MongoDB', 'Express'],
    category: 'web',
    icon: FileText,
    gradient: 'from-success-500 to-primary-500',
    highlights: ['REST API', 'CRUD', 'MongoDB'],
  },
  {
    title: 'Doctor Search with Recommendation',
    description: 'Online portal displaying doctors list and providing recommendations of doctors with the same specialty.',
    technologies: ['AngularJS', 'NodeJS', 'MySQL', 'AWS EC2'],
    category: 'web',
    icon: Users,
    gradient: 'from-primary-600 to-success-600',
    highlights: ['Recommendation Engine', 'AWS', 'Full Stack'],
  },
  {
    title: 'Publisher-Subscriber System',
    description: 'Built a messaging system using Pub-Sub architecture involving a Broker as middleware for communication.',
    technologies: ['Java', 'Distributed Systems', 'Sockets'],
    category: 'systems',
    icon: Share2,
    gradient: 'from-accent-600 to-primary-600',
    highlights: ['Distributed', 'Middleware', 'Scalable'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, web development, and distributed systems
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 rounded-full font-medium text-sm transition-all bg-slate-100 text-slate-600 hover:bg-primary-100 hover:text-primary-700"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group card p-6 hover:border-transparent relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-primary-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.highlights.map((h) => (
                  <span key={h} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                    {h}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-primary-600">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
