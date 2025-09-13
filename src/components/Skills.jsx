import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: <FaReact className="text-blue-500" /> },
        { name: 'JavaScript', level: 90, icon: <FaJs className="text-yellow-500" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Next.js', level: 80, icon: <SiNextdotjs className="text-gray-800" /> },
        { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss className="text-cyan-500" /> }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Python', level: 85, icon: <FaPython className="text-blue-600" /> },
        { name: 'MongoDB', level: 82, icon: <SiMongodb className="text-green-600" /> },
        { name: 'PostgreSQL', level: 80, icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'REST APIs', level: 90, icon: <FaDatabase className="text-purple-500" /> }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88, icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'Docker', level: 75, icon: <FaDocker className="text-blue-500" /> },
        { name: 'AWS', level: 70, icon: <FaAws className="text-orange-500" /> },
        { name: 'DevOps', level: 72, icon: <FaDocker className="text-gray-600" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across different technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Responsive Design', 'UI/UX Design', 'Agile Methodologies', 
              'Code Review', 'Testing', 'Performance Optimization',
              'Security Best Practices', 'API Design', 'Microservices',
              'Cloud Computing', 'CI/CD', 'Project Management'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};