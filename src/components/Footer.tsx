import { ArrowUp, Linkedin, Github, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold font-mono text-sm">
                KC
              </div>
              <span className="font-mono text-white text-sm">
                <span className="text-primary-400">&gt;_</span> karan_chimedia
              </span>
            </div>
            <p className="text-slate-600 font-mono text-xs">
              {/* Copyright */} {new Date().getFullYear()}
            </p>
          </div>

          {/* Terminal Style Signature */}
          <div className="font-mono text-xs text-slate-600 flex items-center gap-2">
            <span className="text-green-500">$</span>
            <span>npm run build</span>
            <span className="text-primary-400">Successfully deployed</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg border border-slate-700 hover:border-primary-500 hover:text-primary-400 text-slate-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg border border-slate-700 hover:border-accent-500 hover:text-accent-400 text-slate-400 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className="p-3 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 hover:scale-110 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
