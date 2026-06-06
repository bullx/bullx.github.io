import { Heart, ArrowUp, Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold">
                KC
              </div>
              <span className="font-semibold">Karan Chimedia</span>
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:karan.chimedia@example.com"
              className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Made With */}
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>using React & Tailwind</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
