import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Send, AlertCircle, CheckCircle, User, AtSign, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.from('contact_messages').insert([
        { name: formData.name, email: formData.email, message: formData.message },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Let's Connect</h3>
                <p className="text-slate-600 mb-6">
                  I'm currently open to new opportunities and interesting projects.
                  Feel free to reach out via email or connect with me on LinkedIn.
                </p>

                {/* Contact Links */}
                <div className="space-y-4">
                  <a
                    href="mailto:karan.chimedia@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium text-slate-700 group-hover:text-primary-700">karan.chimedia@example.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/karan789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-accent-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center group-hover:bg-accent-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">LinkedIn</p>
                      <p className="font-medium text-slate-700 group-hover:text-accent-700">linkedin.com/in/karan789</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-900 rounded-xl p-6 text-white">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-slate-400">// Response time</div>
                  <div>
                    <span className="text-primary-400">const</span>{' '}
                    <span className="text-white">responseTime</span> ={' '}
                    <span className="text-success-400">"24-48 hours"</span>;
                  </div>
                  <div className="mt-4 text-slate-400">// Availability</div>
                  <div>
                    <span className="text-primary-400">const</span>{' '}
                    <span className="text-white">status</span> ={' '}
                    <span className="text-success-400">"Open to opportunities"</span>;
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 bg-success-50 text-success-700 rounded-lg">
                    <CheckCircle size={18} />
                    <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg">
                    <AlertCircle size={18} />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
