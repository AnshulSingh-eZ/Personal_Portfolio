import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "HMS for managing the admission, appointment and even billing of patients.",
      tags: ["HTML/CSS", "JavaScript", "NodeJS"],
      link: "https://github.com/AnshulSingh-eZ/Hospital-Management",
      icon: "🏥"
    },
    {
      title: "Realtime Emotion Detector",
      description: "Can detect 7 emotions with 96% accuracy and no delay.",
      tags: ["CNN", "Python"],
      link: "https://github.com/AnshulSingh-eZ/Real-Time-Emotion-Detector-OpenCV-Python",
      icon: "😊"
    },
    {
      title: "Realtime Human Detector",
      description: "Counts the number of person in the video at any instant.",
      tags: ["Yolov4", "Python"],
      link: "https://github.com/AnshulSingh-eZ/Real-Time-Human-Detection-Yolov4-tiny",
      icon: "🧍"
    },
    {
      title: "OMR_Grading",
      description: "Processes the OMR sheet to evaluate the results.",
      tags: ["HoughCircle", "Canny", "Python"],
      link: "https://github.com/AnshulSingh-eZ/OMR_Grading_OpenCV",
      icon: "📄"
    },
    {
      title: "Lane Detection",
      description: "Responsive portfolio built with modern tech stack",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/AnshulSingh-eZ/Lane-Detection-Open-CV-Python-",
      icon: "🛣️"
    },
    {
      title: "OpenCV Angle Detector",
      description: "Detects angle between any 2 possible lines in the image.",
      tags: ["Countours", "Python"],
      link: "https://github.com/AnshulSingh-eZ/OpenCV-Angle-Detector",
      icon: "📐"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="text-blue-500 text-3xl mb-4 group-hover:text-blue-600 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
