import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center px-4 max-w-4xl">
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold gradient-text">
              KC
            </div>
          </motion.div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Karan Chimedia
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">Master's Graduate from Rochester Institute of Technology</p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500">Full Stack Software Developer</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          {[
            { icon: Mail, href: 'mailto:ksc8618@rit.edu', label: 'Email' },
            { icon: Github, href: 'https://github.com/bullx', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/karan789', label: 'LinkedIn' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full text-teal-600 dark:text-teal-300 hover:shadow-lg transition-shadow"
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <a href="#about" className="inline-block">
            <ChevronDown size={32} className="text-teal-600 dark:text-teal-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
