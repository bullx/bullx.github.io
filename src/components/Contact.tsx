import { Linkedin, Terminal, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-accent-400">&lt;</span>Contact<span className="text-accent-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            // Open to new opportunities and interesting projects
          </p>
        </div>

        {/* Terminal Style Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-500 font-mono text-sm">contact.json</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              <div className="text-slate-500">{`{`}</div>

              <div className="pl-4">
                <span className="text-primary-400">"name"</span>
                <span className="text-slate-500">: </span>
                <span className="text-accent-300">"Karan Chimedia"</span>
                <span className="text-slate-500">,</span>
              </div>

              <div className="pl-4">
                <span className="text-primary-400">"role"</span>
                <span className="text-slate-500">: </span>
                <span className="text-accent-300">"Senior Software Engineer"</span>
                <span className="text-slate-500">,</span>
              </div>

              <div className="pl-4">
                <span className="text-primary-400">"location"</span>
                <span className="text-slate-500">: </span>
                <span className="text-accent-300">"San Francisco Bay Area"</span>
                <span className="text-slate-500">,</span>
              </div>

              <div className="pl-4">
                <span className="text-primary-400">"links"</span>
                <span className="text-slate-500">: {`{`}</span>
              </div>

              <div className="pl-8">
                <span className="text-primary-400">"linkedin"</span>
                <span className="text-slate-500">: </span>
                <a
                  href="https://linkedin.com/in/karan789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 underline transition-colors"
                >
                  "linkedin.com/in/karan789"
                </a>
                <span className="text-slate-500">,</span>
              </div>

              <div className="pl-8">
                <span className="text-primary-400">"github"</span>
                <span className="text-slate-500">: </span>
                <a
                  href="https://github.com/bullx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 underline transition-colors"
                >
                  "github.com/bullx"
                </a>
              </div>

              <div className="pl-4 text-slate-500">{`}`}</div>

              <div className="text-slate-500">{`}`}</div>

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-slate-500">$</span>
                <span className="text-white">connect</span>
                <span className="w-2 h-5 bg-primary-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://linkedin.com/in/karan789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="https://github.com/bullx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
