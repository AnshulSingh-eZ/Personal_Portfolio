import React from 'react';
// import profilepic from '/assets/images/img4.jpg';
import { DiPython, DiJavascript, DiJava, DiHtml5, DiPostgresql, DiReact, DiNodejs } from 'react-icons/di';
import { SiCplusplus, SiTypescript, SiExpress, SiTailwindcss, SiGit, SiMysql } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const languages = [
    { 
      name: 'C++', 
      icon: <SiCplusplus className="text-blue-600" size={24} />, 
      proficiency: 'Advanced' 
    },
    { 
      name: 'Python', 
      icon: <DiPython className="text-yellow-400" size={24} />, 
      proficiency: 'Advanced' 
    },
    { 
      name: 'JavaScript', 
      icon: <DiJavascript className="text-yellow-500" size={24} />, 
      proficiency: 'Intermediate' 
    },
    { 
      name: 'Java', 
      icon: <DiJava className="text-red-500" size={24} />, 
      proficiency: 'Beginner' 
    },
    { 
      name: 'HTML/CSS', 
      icon: <DiHtml5 className="text-orange-500" size={24} />, 
      proficiency: 'Intermediate' 
    },
    { 
      name: 'SQL', 
      icon: <DiPostgresql className="text-blue-400" size={24} />, 
      proficiency: 'Intermediate' 
    }
  ];

  const technologies = [
    { name: 'React', icon: <DiReact className="text-blue-400" size={24} /> },
    { name: 'Node.js', icon: <DiNodejs className="text-green-500" size={24} /> },
    { name: 'MySQL', icon: <SiMysql className="text-green-600" size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
    { name: 'Git', icon: <SiGit className="text-orange-600" size={24} /> }
  ];

  const education = [
    {
      year: '2023 - Present',
      institution: 'Delhi Technological University (DTU)',
      degree: 'B.Tech in Computer Science'
    },
    {
      year: '2022 - 2023',
      institution: 'DLDAV Model School',
      degree: 'Class XII (CBSE)',
      description: 'Percentage: 85%'
    },
    {
      year: '2020 - 2021',
      institution: 'DLDAV Model School',
      degree: 'Class X (CBSE)',
      description: 'Percentage: 89.8%'
    }
  ];

  return (
    <section id='about'>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">

          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <span className="text-4xl"><img src='/img4.png' alt="📸" /></span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anshul Singh</h2>
            <p className="text-lg text-gray-600 mb-6">
              2nd year CSE student at DTU passionate about Competitive Programming, 
              Machine Learning, and Web Development. I enjoy solving complex problems 
              and building practical applications.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        {lang.icon}
                        <div>
                          <h3 className="font-medium text-black">{lang.name}</h3>
                          <p className="text-sm text-gray-500">{lang.proficiency}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        {tech.icon}
                        <div>
                          <h3 className="font-medium text-black">{tech.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <FaGraduationCap className="text-indigo-500" />
            <span className='text-gray-800'>Education</span>
          </h3>
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
          
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0"></div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} mt-2`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-semibold text-gray-800">{edu.institution}</h3>
                    <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-indigo-600 font-medium mt-1">{edu.degree}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;