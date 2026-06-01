import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  const education = [
    { school: 'Rochester Institute of Technology', degree: "Master's in Computer Science", date: 'January 2017', courses: ['Algorithms', 'Java', 'Big Data', 'Security', 'Vision', 'Graphics'] },
    { school: 'University of Mumbai', degree: 'Bachelors in IT', date: 'May 2012', courses: ['Databases', 'Algorithms', 'Software Engineering', 'Networks', 'Security'] },
  ];

  const experience = [
    { company: 'Datera', role: 'Software Developer', location: 'Santa Clara, CA', date: 'Nov 2017 - Present', tasks: ['Automation framework', 'Product testing', 'Jenkins config', 'Code reviews'] },
    { company: 'Paychex', role: 'Automation Engineer Intern', location: 'Rochester, NY', date: 'Jan 2016 - May 2016', tasks: ['Regression testing', 'HP UFT testing', 'Automation scripts'] },
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
          Resume
        </motion.h2>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['education', 'experience', 'skills'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-2 rounded-lg font-semibold ${
                activeSection === tab ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {activeSection === 'education' && (
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.school}</h3>
                <p className="text-teal-600 dark:text-teal-400 font-semibold">{edu.degree}</p>
                <p className="text-gray-500 text-sm mb-4">{edu.date}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <span key={c} className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    <p className="text-teal-600 dark:text-teal-400 font-semibold">{exp.role}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.date}</span>
                </div>
                <ul className="space-y-1">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="text-gray-700 dark:text-gray-300">→ {task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Python', 'Java', 'JavaScript', 'React', 'AWS', 'Docker', 'SQL', 'Node.js', 'Git'].map((skill) => (
              <motion.div key={skill} whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold text-center shadow-lg">
                {skill}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
