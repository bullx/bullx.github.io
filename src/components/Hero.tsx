import { ChevronDown, Linkedin, Github, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center px-4">
        {/* Code-style Intro */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 text-slate-400 font-mono text-sm">
            <Terminal size={16} className="text-primary-400" />
            <span>karan@portfolio:~$</span>
            <span className="text-accent-400">./introduce.sh</span>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 p-1 shadow-2xl shadow-primary-500/20">
            <div className="w-full h-full rounded-[7px] bg-slate-800 flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">KC</span>
            </div>
          </div>
        </div>

        {/* Name and Title - Code Style */}
        <div className="mb-8 animate-slide-up">
          <div className="font-mono text-slate-500 text-sm mb-2">{'{'}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-mono">
            <span className="text-primary-400">"</span>Karan Chimedia<span className="text-primary-400">"</span>
          </h1>
          <div className="text-lg md:text-xl text-slate-400 font-mono">
            <span className="text-slate-500">role:</span>{' '}
            <span className="text-accent-400">"Senior Software Engineer"</span>
          </div>
          <div className="text-slate-500 font-mono text-sm mt-2">{'}'}</div>
        </div>

        {/* Quick Stats - Terminal Style */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-5 py-3 border border-slate-700">
            <div className="font-mono text-xs text-slate-500 mb-1">experience.years</div>
            <span className="text-2xl md:text-3xl font-bold text-primary-400 font-mono">5+</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-5 py-3 border border-slate-700">
            <div className="font-mono text-xs text-slate-500 mb-1">companies.length</div>
            <span className="text-2xl md:text-3xl font-bold text-accent-400 font-mono">2</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-5 py-3 border border-slate-700">
            <div className="font-mono text-xs text-slate-500 mb-1">projects.completed</div>
            <span className="text-2xl md:text-3xl font-bold text-green-400 font-mono">8+</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {['Python', 'Java', 'REST APIs', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-sm font-mono border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://linkedin.com/in/karan789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
          >
            <Linkedin size={20} />
            <span>Connect</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all duration-300"
          >
            <Github size={20} />
            <span>View Work</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-600 hover:text-primary-400 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
