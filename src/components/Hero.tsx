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
        {/* Terminal Prompt */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 text-slate-400 font-mono text-sm">
            <Terminal size={16} className="text-primary-400" />
            <span className="text-slate-500">karan@portfolio</span>
            <span className="text-slate-600">:</span>
            <span className="text-accent-400">~</span>
            <span className="text-slate-600">$</span>
          </div>
        </div>

        {/* Profile Avatar */}
        <div className="mb-8 animate-fade-in">
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 p-0.5 shadow-2xl shadow-primary-500/20">
            <div className="w-full h-full rounded-[7px] bg-slate-800 flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-mono">KC</span>
            </div>
          </div>
        </div>

        {/* Name - Code Object */}
        <div className="mb-8 animate-slide-up">
          <div className="font-mono text-slate-600 text-sm mb-2">{'{'}</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 font-mono tracking-tight">
            <span className="text-primary-400">"</span>Karan Chimedia<span className="text-primary-400">"</span>
          </h1>
          <div className="text-base md:text-lg text-slate-400 font-mono">
            <span className="text-slate-500">role:</span>{' '}
            <span className="text-accent-400">"Senior Software Engineer"</span>
          </div>
          <div className="text-slate-600 font-mono text-sm mt-2">{'}'}</div>
        </div>

        {/* Stats - Object Properties */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-slate-700 text-left">
            <div className="font-mono text-xs text-slate-500">years</div>
            <span className="text-xl md:text-2xl font-bold text-primary-400 font-mono">5+</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-slate-700 text-left">
            <div className="font-mono text-xs text-slate-500">companies</div>
            <span className="text-xl md:text-2xl font-bold text-accent-400 font-mono">2</span>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-slate-700 text-left">
            <div className="font-mono text-xs text-slate-500">projects</div>
            <span className="text-xl md:text-2xl font-bold text-green-400 font-mono">10+</span>
          </div>
        </div>

        {/* Tech Stack - Imports */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {['Python', 'Java', 'REST APIs', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-400 rounded text-sm font-mono border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://linkedin.com/in/karan789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 font-mono text-sm"
          >
            <Linkedin size={18} />
            <span>connect()</span>
          </a>
          <a
            href="https://github.com/bullx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all duration-300 font-mono text-sm"
          >
            <Github size={18} />
            <span>view_work()</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-600 hover:text-primary-400 transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
