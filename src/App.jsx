import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  GraduationCap,
  Code,
  Briefcase,
  Award,
  Users,
  Globe,
  Star,
  Menu,
  X
} from 'lucide-react';
import ContactForm from './components/Contact';
import myphoto from './assets/myphoto.jpg';

// Navbar Component
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <Star className="mr-2 text-yellow-400" size={20} />
              <span className="hidden sm:block">LavanyaFolio</span>
              <span className="sm:hidden">LF</span>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
            <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm relative group"
            >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            ))}
          </div>

          {/* Desktop Let's Talk Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="mailto:lavanyatm08@gmail.com"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="mailto:lavanyatm08@gmail.com"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Home Section Component
function HomeSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <img 
            src={myphoto} 
              alt="Lavanya T M" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-500 shadow-lg object-cover mx-auto"
          />
        </motion.div>
        
        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4"
        >
          Lavanya T M
        </motion.h1>

        {/* Title */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 px-4"
        >
          CSE Pre-final Year Student
        </motion.p>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4 sm:space-x-6"
        >
          <a 
            href="https://github.com/lavanya-tm20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <Github size={28} className="sm:w-8 sm:h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lavanyatm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <Linkedin size={28} className="sm:w-8 sm:h-8" />
          </a>
          <a 
            href="mailto:lavanyatm08@gmail.com"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <Mail size={28} className="sm:w-8 sm:h-8" />
          </a>
        </motion.div>
        </div>
    </motion.section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 text-center"
        >
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6">
            I'm a Computer Science & Engineering student at Sir M. Visvesvaraya Institute of Technology, 
            Bangalore, with a passion for technology and innovation. Currently pursuing my B.E. degree 
            (Expected 2026) with a CGPA of 8.28/10, I'm deeply interested in software development, 
            problem-solving, and building scalable applications that make a real-world impact.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies. 
            My goal is to contribute to meaningful projects and grow as a developer while making 
            a positive difference through technology.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Experience Section Component
function ExperienceSection() {
  const handleCertificateClick = () => {
    window.open('https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68c10f22dd76e8ea8646a267_1757486230758_completion_certificate.pdf', '_blank');
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Current Internship */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Briefcase className="mr-3 text-yellow-400" size={24} />
              Current Role
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-sm font-semibold text-yellow-300">Currently Working</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-medium w-fit">Active</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">Intern – YugaYatra Retail (OPC) Private Ltd</h4>
              <p className="text-sm sm:text-base text-white/80">
                Working on practical projects, applying problem-solving skills, and enhancing technical knowledge 
                in a real-world business environment.
              </p>
      </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Award className="mr-3 text-yellow-400" size={24} />
              Certificates
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div 
                onClick={handleCertificateClick}
                className="cursor-pointer p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start sm:items-center justify-between gap-2">
                  <h4 className="font-semibold text-white group-hover:text-yellow-300 transition-colors text-sm sm:text-base">
                    Tata - Cybersecurity Analyst Job Simulation
                  </h4>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <p className="text-white/60 text-xs sm:text-sm mt-2">Click to view certificate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Projects Section Component
function ProjectsSection() {
  const projects = [
    {
      title: "URL Shortener Web Application",
      description: "Developed a URL shortener using Python, HTML, CSS, and SQL database (reduced URL length by 60%)",
      features: [
        "Implemented analytics tracking (click counts, timestamps, link validity checks)",
        "Built RESTful endpoints for link management"
      ],
      technologies: ["Python", "HTML", "CSS", "SQL", "REST API"]
    },
    {
      title: "Smart Door Lock System",
      description: "Designed & simulated a secure door lock system using Tinkercad, Arduino Uno, and a 4x4 keypad",
      features: [
        "Implemented password authentication in C++ for reliable access control",
        "Validated system with simulations to prevent unauthorized entry"
      ],
      technologies: ["C++", "Arduino Uno", "Tinkercad", "4x4 Keypad"]
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Projects
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{project.title}</h3>
              <p className="text-white/80 text-base sm:text-lg mb-4 sm:mb-6">{project.description}</p>
              
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
          </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-yellow-400/20 text-yellow-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
        ))}
      </div>
    </div>
            </motion.div>
        ))}
      </div>
    </div>
    </motion.section>
  );
}

// Contact Section Component
function ContactSection() {
  const handleResumeDownload = () => {
    try {
      // Open the resume in a new tab for printing/downloading
      const newWindow = window.open('/resume.html', '_blank');
      if (newWindow) {
        newWindow.onload = () => {
          // Trigger print dialog after the page loads
          setTimeout(() => {
            newWindow.print();
          }, 1000);
        };
      }
      console.log('Resume download initiated successfully');
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/resume.html', '_blank');
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <ContactForm />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Phone className="text-yellow-400" size={20} />
                <div>
                  <p className="text-white/80 text-sm sm:text-base">Phone</p>
                  <p className="text-white font-semibold text-sm sm:text-base">+91-8088605057</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail className="text-yellow-400" size={20} />
                <div>
                  <p className="text-white/80 text-sm sm:text-base">Email</p>
                  <p className="text-white font-semibold text-sm sm:text-base break-all">lavanyatm08@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <MapPin className="text-yellow-400" size={20} />
                <div>
                  <p className="text-white/80 text-sm sm:text-base">Location</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 flex flex-col justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Download Resume</h3>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
              Download my professional resume to learn more about my experience and qualifications.
            </p>
            <button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "SQL"],
      icon: <Code className="text-purple-400" size={24} />
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      icon: <Globe className="text-blue-400" size={24} />
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "DevOps", "Docker", "AWS", "Linux"],
      icon: <Briefcase className="text-green-400" size={24} />
    },
    {
      title: "Core Subjects",
      skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Object-Oriented Programming", "Database Management Systems", "Machine Learning", "Cloud Computing"],
      icon: <GraduationCap className="text-yellow-400" size={24} />
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork & Collaboration", "Problem-Solving", "Time Management", "Leadership", "Adaptability"],
      icon: <Users className="text-pink-400" size={24} />
    }
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {category.icon}
                <h3 className="text-lg sm:text-xl font-bold text-white ml-2 sm:ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/10 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
      {/* Content */}
      <div className="relative z-10">
      <Navbar />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
              <ContactSection />
            </div>
    </div>
  );
}