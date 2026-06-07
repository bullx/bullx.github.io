import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'about()' },
  { href: '#experience', label: 'experience()' },
  { href: '#projects', label: 'projects()' },
  { href: '#skills', label: 'skills()' },
  { href: '#education', label: 'education()' },
  { href: '#contact', label: 'contact()' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold text-lg font-mono">
              KC
            </div>
            <div className="hidden sm:flex items-center gap-1 text-white font-mono text-sm">
              <span className="text-primary-400">&gt;_</span>
              <span className="text-slate-300">karan</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-primary-400 font-mono text-sm transition-colors relative group"
              >
                <span className="text-primary-400">.</span>{link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://linkedin.com/in/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium text-sm rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300"
            >
              <Terminal size={16} />
              <span>connect()</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border border-slate-700 rounded-xl p-4 mb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-primary-400 hover:bg-slate-700/50 rounded-lg font-mono text-sm transition-colors"
                >
                  <span className="text-primary-400">.</span>{link.label}
                </a>
              ))}
              <a
                href="https://linkedin.com/in/karan789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-lg"
              >
                <Terminal size={16} />
                <span>connect()</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
