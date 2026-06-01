import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-20 blur-2xl"></div>
            <img src="/images/profilepic.jpg" alt="Karan" className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I earned my Master's Degree in Computer Science from Rochester Institute of Technology in Rochester, NY. Currently working as a Software Engineer with expertise in full-stack development, automation testing, and cloud technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in algorithms, system design, and data structures, I'm passionate about building scalable and efficient solutions.
            </p>
            <motion.a href="/resume.pdf" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg">
              📥 Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
