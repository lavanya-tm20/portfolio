import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=Lavanya+T+M" 
                  alt="Lavanya T M Profile" 
                  className="rounded-2xl w-80 h-80 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold">CSE Student</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hello, I'm <span className="text-blue-600">Lavanya T M</span>
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    I am a Computer Science Engineering student (expected 2026) from 
                    <span className="font-semibold text-gray-800"> Sir M. Visvesvaraya Institute of Technology, Bangalore</span>, 
                    with a CGPA of <span className="font-bold text-blue-600">8.28</span>.
                  </p>
                  <p className="text-lg">
                    I am passionate about <span className="font-semibold text-gray-800">programming</span>, 
                    <span className="font-semibold text-gray-800"> problem-solving</span>, and applying my skills to 
                    <span className="font-semibold text-gray-800"> real-world projects</span>.
                  </p>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Academic Highlights</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Current CGPA:</span>
                    <span className="font-bold text-blue-600">8.28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Expected Graduation:</span>
                    <span className="font-semibold text-gray-800">2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Institution:</span>
                    <span className="font-semibold text-gray-800">Sir M. Visvesvaraya Institute of Technology</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-medium"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 text-center font-medium"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
