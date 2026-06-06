import { ChevronDown, Linkedin, Mail, Download } from 'lucide-react';

const techIcons = [
  'Python',
  'Java',
  'REST APIs',
  'PostgreSQL',
  'AWS',
  'Docker',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-100/50 to-transparent rounded-full" />
      </div>

      {/* Floating Tech Badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] animate-float opacity-60">
          <span className="tech-badge tech-badge-primary">Python</span>
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float opacity-60" style={{ animationDelay: '1s' }}>
          <span className="tech-badge tech-badge-accent">Java</span>
        </div>
        <div className="absolute bottom-1/3 left-[15%] animate-float opacity-60" style={{ animationDelay: '2s' }}>
          <span className="tech-badge tech-badge-success">REST APIs</span>
        </div>
        <div className="absolute top-1/2 right-[8%] animate-float opacity-60" style={{ animationDelay: '0.5s' }}>
          <span className="tech-badge tech-badge-primary">PostgreSQL</span>
        </div>
        <div className="absolute bottom-1/4 right-[20%] animate-float opacity-60" style={{ animationDelay: '1.5s' }}>
          <span className="tech-badge tech-badge-accent">AWS</span>
        </div>
      </div>

      <div className="section-container relative z-10 text-center px-4">
        {/* Profile Avatar */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text">KC</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4">
            Karan Chimedia
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-2">
            Senior Software Engineer
          </p>
          <p className="text-slate-500 font-medium">
            Building robust APIs, automation frameworks, and quality solutions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm border border-primary-100">
            <span className="text-2xl md:text-3xl font-bold gradient-text">5+</span>
            <p className="text-sm text-slate-600">Years Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm border border-accent-100">
            <span className="text-2xl md:text-3xl font-bold gradient-text">3</span>
            <p className="text-sm text-slate-600">Companies</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm border border-success-100">
            <span className="text-2xl md:text-3xl font-bold gradient-text">8+</span>
            <p className="text-sm text-slate-600">Projects</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href="https://linkedin.com/in/karan789" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
          <button className="btn-secondary">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-400 hover:text-primary-600 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
