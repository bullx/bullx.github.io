import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-6 gradient-text">
          Let's Connect
        </motion.h3>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-center gap-6 mb-8">
          {[{ icon: Mail, href: 'mailto:ksc8618@rit.edu', label: 'Email' }, { icon: Github, href: 'https://github.com/bullx', label: 'GitHub' }, { icon: Linkedin, href: 'https://www.linkedin.com/in/karan789', label: 'LinkedIn' }].map((link) => {
            const Icon = link.icon;
            return (
              <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="p-3 bg-teal-600 hover:bg-teal-500 rounded-full transition-colors">
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        <p className="text-gray-400 mb-8">Feel free to reach out. I'm always open to new opportunities.</p>
        <p className="border-t border-gray-700 pt-8 text-gray-500 text-sm">© 2026 Karan Chimedia. Built with React, Tailwind CSS, and Framer Motion ✨</p>
        <motion.a href="#home" whileHover={{ scale: 1.1, y: -5 }} className="inline-flex items-center gap-2 mt-6 p-3 bg-teal-600 hover:bg-teal-500 rounded-full">
          <ArrowUp size={20} />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
