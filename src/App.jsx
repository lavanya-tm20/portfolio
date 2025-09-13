import React from 'react';

// Navbar Component
function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              LavanyaFolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Let's Talk Button */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Profile Card Component
function ProfileCard() {
  const handleResumeDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Lavanya_T_M_Resume.pdf';
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Resume download initiated successfully');
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <div className="text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-purple-400 to-blue-400 p-1">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img 
              src="/profile.jpg" 
              alt="Lavanya T M" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
              LT
            </div>
          </div>
        </div>
        
        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Lavanya T M 👋</h2>
        
        {/* Education */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          B.E in Computer Science (2026)<br />
          Sir M. Visvesvaraya Institute of Technology
        </p>
        
        {/* Contact Links */}
        <div className="space-y-3 mb-6">
          <a 
            href="mailto:lavanyatm08@gmail.com" 
            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <span>📧</span>
            <span>lavanyatm08@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/lavanyatm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/lavanya-tm20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-700 hover:text-gray-800 transition-colors duration-300"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
        </div>

        {/* Download Resume Button */}
        <button
          onClick={handleResumeDownload}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>📄</span>
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
}

// Work Experience Card Component
function WorkExperienceCard() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">Work Experience</h3>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-purple-600 hover:text-purple-700 font-semibold text-sm hover:underline"
        >
          See my Works →
        </button>
      </div>
      
      {/* Current Internship */}
      <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-500">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-purple-700">Current</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Active</span>
        </div>
        <h4 className="font-bold text-gray-800 mb-1">Software Engineer Intern</h4>
        <p className="text-sm text-gray-600 mb-1">YugaYatra Retail (OPC) Private Ltd</p>
        <p className="text-xs text-gray-500">Sep 2025 - Present</p>
      </div>
      
      {/* Future Opportunities */}
      <div className="p-3 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-500 mb-1">Jun-2025</div>
        <p className="text-gray-700 text-sm">Open to Full-time Opportunities</p>
      </div>
    </div>
  );
}

// Projects Card Component
function ProjectsCard() {
  const projects = [
    {
      title: "URL Shortener",
      description: "Built using Python, HTML, CSS, SQL, analytics tracking, REST endpoints",
      link: "#"
    },
    {
      title: "Smart Door Lock",
      description: "Tinkercad, Arduino Uno, C++, password authentication",
      link: "#"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Projects</h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-semibold text-gray-800">{project.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <a 
              href={project.link} 
              className="text-purple-600 hover:text-purple-700 font-semibold text-sm hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// Skills Card Component
function SkillsCard() {
  const skills = [
    { name: "C", icon: "⚙️" },
    { name: "C++", icon: "⚙️" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🗄️" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "GitHub", icon: "🐙" },
    { name: "DevOps", icon: "🔧" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">My Expert Area</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors duration-300">
            <div className="text-2xl mb-2">{skill.icon}</div>
            <div className="text-sm font-medium text-gray-700">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Extra Activities Card Component
function ExtraActivitiesCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Extra-Curricular Activities</h3>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <span className="text-green-500 mt-1">✓</span>
          <div>
            <div className="font-semibold text-gray-800">Volunteer, Spandana Club</div>
            <div className="text-sm text-gray-600">Social & community service</div>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          <span className="text-green-500 mt-1">✓</span>
          <div>
            <div className="font-semibold text-gray-800">College Hackathon Participation</div>
            <div className="text-sm text-gray-600">Competitive programming events</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Languages Card Component
function LanguagesCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Kannada</span>
          <span className="text-sm text-gray-500 bg-green-100 px-2 py-1 rounded-full">Native</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">English</span>
          <span className="text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded-full">Fluent</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Hindi</span>
          <span className="text-sm text-gray-500 bg-yellow-100 px-2 py-1 rounded-full">Conversational</span>
        </div>
      </div>
    </div>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Work Together</h3>
      <p className="text-gray-600 mb-6">
        I'm always interested in new opportunities and exciting projects. 
        Let's connect and discuss how we can work together!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:lavanyatm08@gmail.com"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Send Email
        </a>
        <a 
          href="https://www.linkedin.com/in/lavanyatm"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>

          {/* Right Column - Dashboard Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WorkExperienceCard />
              <div id="projects">
                <ProjectsCard />
              </div>
            </div>

            {/* Middle Row - Full Width */}
            <div id="skills">
              <SkillsCard />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div id="about">
                <ExtraActivitiesCard />
              </div>
              <div id="contact">
                <LanguagesCard />
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8">
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}