import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SAA-2023',
      icon: <FaAward className="text-orange-500" />,
      description: 'Demonstrates expertise in designing distributed systems on AWS platform'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      credential: 'META-REACT-2023',
      icon: <FaCode className="text-blue-500" />,
      description: 'Comprehensive React development skills including hooks, context, and testing'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      credential: 'FCC-FSWD-2022',
      icon: <FaGraduationCap className="text-green-500" />,
      description: 'Complete full-stack development curriculum covering frontend and backend technologies'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      credential: 'FCC-JS-2022',
      icon: <FaCertificate className="text-yellow-500" />,
      description: 'Advanced JavaScript concepts, algorithms, and data structure implementations'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2022',
      credential: 'FCC-RWD-2022',
      icon: <FaCertificate className="text-purple-500" />,
      description: 'Modern CSS techniques, responsive design principles, and accessibility standards'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2021',
      credential: 'IBM-PYTHON-2021',
      icon: <FaGraduationCap className="text-blue-600" />,
      description: 'Data analysis, visualization, and machine learning fundamentals using Python'
    }
  ];

  const skills = [
    'Frontend Development', 'Backend Development', 'Cloud Computing', 
    'Database Design', 'API Development', 'DevOps', 'Testing', 'Security'
  ];

  return (
    <section id="certifications" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Certifications & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and continuous learning achievements that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">
                  {cert.icon}
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500 font-mono">Credential: {cert.credential}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Educational Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-500 text-2xl mr-3" />
                <h4 className="text-xl font-bold text-gray-800">Bachelor of Technology</h4>
              </div>
              <p className="text-blue-600 font-medium mb-2">Computer Science Engineering</p>
              <p className="text-gray-600 mb-2">University of Technology</p>
              <p className="text-gray-500 text-sm">2019 - 2023</p>
              <p className="text-gray-600 mt-3">Graduated with honors, focusing on software engineering, algorithms, and system design.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <FaCode className="text-green-500 text-2xl mr-3" />
                <h4 className="text-xl font-bold text-gray-800">Continuous Learning</h4>
              </div>
              <p className="text-green-600 font-medium mb-2">Online Courses & Bootcamps</p>
              <p className="text-gray-600 mb-2">Various Platforms</p>
              <p className="text-gray-500 text-sm">2020 - Present</p>
              <p className="text-gray-600 mt-3">Committed to staying current with the latest technologies and best practices in software development.</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Validated Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;