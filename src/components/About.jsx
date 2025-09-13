import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaAward, FaRocket } from 'react-icons/fa';

const About = () => {
  const experience = [
    {
      year: '2023',
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers and delivered 5+ projects on time.',
      icon: <FaCode className="text-blue-500" />
    },
    {
      year: '2022',
      role: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created responsive web designs and implemented interactive user interfaces. Collaborated with UX/UI designers to deliver pixel-perfect designs.',
      icon: <FaRocket className="text-green-500" />
    },
    {
      year: '2021',
      role: 'Software Engineering Intern',
      company: 'StartupXYZ',
      description: 'Gained hands-on experience in software development lifecycle. Worked on bug fixes, feature implementations, and code reviews.',
      icon: <FaGraduationCap className="text-purple-500" />
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 85 },
    { name: 'Database Design', level: 80 },
    { name: 'DevOps & Deployment', level: 75 },
    { name: 'Project Management', level: 90 }
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
            I love creating innovative solutions and turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Professional Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <FaAward className="text-yellow-500 mr-3" />
              Professional Journey
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-8 flex items-start"
                >
                  <div className="bg-white border-4 border-blue-500 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="ml-8 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{item.role}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Core Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4">Beyond Code</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Open Source', 'Mentoring', 'Tech Writing', 'Photography', 'Travel'].map((interest, index) => (
                  <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};