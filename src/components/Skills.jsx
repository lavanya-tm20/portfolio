import React from 'react';

const Skills = () => {
  const technicalSkills = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java', 'SQL'],
    'Web Technologies': ['HTML', 'CSS'],
    'Tools & Technologies': ['GitHub', 'DevOps'],
    'Computer Science Concepts': ['DSA', 'OS', 'CN', 'OOPs', 'DBMS', 'Machine Learning', 'Cloud Computing']
  };

  const softSkills = [
    'Communication',
    'Teamwork', 
    'Problem-Solving',
    'Time Management'
  ];

  const getSkillIcon = (skill) => {
    const iconMap = {
      'C': '🔧',
      'C++': '⚙️',
      'Python': '🐍',
      'Java': '☕',
      'SQL': '🗄️',
      'HTML': '🌐',
      'CSS': '🎨',
      'GitHub': '📚',
      'DevOps': '🚀',
      'DSA': '🧮',
      'OS': '💻',
      'CN': '🌐',
      'OOPs': '🏗️',
      'DBMS': '🗃️',
      'Machine Learning': '🤖',
      'Cloud Computing': '☁️',
      'Communication': '💬',
      'Teamwork': '👥',
      'Problem-Solving': '🧩',
      'Time Management': '⏰'
    };
    return iconMap[skill] || '💡';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Skills</h2>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b-2 border-blue-600 pb-2">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-2 border border-gray-200 hover:border-blue-300"
                      >
                        <span className="text-lg">{getSkillIcon(skill)}</span>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">Soft Skills</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-4 justify-center">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-3 border border-gray-200 hover:border-blue-300 min-w-[200px]"
                  >
                    <span className="text-2xl">{getSkillIcon(skill)}</span>
                    <span className="text-gray-700 font-semibold text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
