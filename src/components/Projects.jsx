
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaServer, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: <FaCode className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaServer className="text-green-500" /> },
        { name: 'MongoDB', icon: <FaDatabase className="text-green-600" /> },
        { name: 'Stripe', icon: <FaMobile className="text-purple-500" /> }
      ],
      features: [
        'Payment Integration',
        'User Authentication',
        'Admin Dashboard',
        'Inventory Management',
        'Responsive Design'
      ],
      github: 'https://github.com/lavanya-tm/ecommerce-platform',
      live: 'https://ecommerce-demo.lavanya-tm.com',
      category: 'Full Stack',
      status: 'Live'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'Next.js', icon: <FaCode className="text-gray-800" /> },
        { name: 'TypeScript', icon: <FaCode className="text-blue-600" /> },
        { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-700" /> },
        { name: 'Socket.io', icon: <FaServer className="text-orange-500" /> }
      ],
      features: [
        'Real-time Updates',
        'Team Collaboration',
        'Project Tracking',
        'Drag & Drop',
        'Notifications'
      ],
      github: 'https://github.com/lavanya-tm/task-manager',
      live: 'https://taskmanager.lavanya-tm.com',
      category: 'Frontend',
      status: 'Live'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: <FaCode className="text-blue-500" /> },
        { name: 'API Integration', icon: <FaServer className="text-yellow-500" /> },
        { name: 'Charts.js', icon: <FaMobile className="text-pink-500" /> },
        { name: 'Geolocation', icon: <FaMobile className="text-green-500" /> }
      ],
      features: [
        'Location-based Forecast',
        'Interactive Maps',
        'Weather Analytics',
        '7-day Forecast',
        'Mobile Responsive'
      ],
      github: 'https://github.com/lavanya-tm/weather-dashboard',
      live: 'https://weather.lavanya-tm.com',
      category: 'Frontend',
      status: 'Live'
    },
    {
      title: 'URL Shortener Service',
      description: 'A comprehensive URL shortening service with analytics, custom domains, and API integration for developers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'Python', icon: <FaCode className="text-yellow-600" /> },
        { name: 'Flask', icon: <FaServer className="text-gray-600" /> },
        { name: 'SQLite', icon: <FaDatabase className="text-blue-500" /> },
        { name: 'Redis', icon: <FaDatabase className="text-red-500" /> }
      ],
      features: [
        'Analytics Tracking',
        'Custom Domains',
        'API Integration',
        'Click Monitoring',
        'Link Management'
      ],
      github: 'https://github.com/lavanya-tm/url-shortener',
      live: 'https://short.ly/lavanya-tm',
      category: 'Backend',
      status: 'Live'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in full-stack development and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="bg-gray-100 px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors duration-300"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 font-medium flex items-center justify-center space-x-2 group"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 font-medium flex items-center justify-center space-x-2 group"
                  >
                    <FaExternalLinkAlt className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/lavanya-tm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaGithub />
            <span>View More Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
