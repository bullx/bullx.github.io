import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Doctor Directory', category: 'Web Dev', image: '/images/portfolio/angularjs.png', description: 'Doctor listing with AngularJS', tech: ['AngularJS', 'Node.js', 'MySQL'], link: 'https://github.com/bullx' },
    { id: 2, title: 'Angular Clock', category: 'Web Dev', image: '/images/portfolio/angularjs.png', description: 'Animated clock with SVG', tech: ['AngularJS', 'SVG'], link: 'https://github.com/bullx' },
    { id: 3, title: 'Assignment Viewer', category: 'Web Design', image: '/images/portfolio/angularjs.png', description: 'Assignment management system', tech: ['AngularJS'], link: 'https://github.com/bullx' },
    { id: 4, title: 'Sentiment Analyzer', category: 'Android', image: '/images/portfolio/android-logo.png', description: 'Android sentiment analysis app', tech: ['Android', 'Java', 'ML'], link: 'https://github.com/bullx/capstoneproject' },
    { id: 5, title: 'Message Passing', category: 'Systems', image: '/images/portfolio/java.jpg', description: 'Distributed systems with MPI', tech: ['Java', 'MPI'], link: 'https://github.com/bullx' },
    { id: 6, title: 'Pub-Sub System', category: 'Systems', image: '/images/portfolio/java.jpg', description: 'Message broker architecture', tech: ['Java', 'Messaging'], link: 'https://github.com/bullx/DistributedSystems' },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
          Projects
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} whileHover={{ y: -10 }} onClick={() => setSelectedProject(project)} className="group cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-teal-600 dark:text-teal-400 text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <motion.a href={selectedProject.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg">
                  <Github size={20} /> GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
