import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    {
      platform: "Email",
      info: "anshul06.singh2013@gmail.com",
      icon: <FiMail className="w-8 h-8" />,
      link: "mailto:anshul06.singh2013@gmail.com",
      color: "text-red-500 hover:text-red-600"
    },
    {
      platform: "LinkedIn",
      info: "Anshul Singh",
      icon: <FiLinkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/anshul-singh-149210282/",
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      platform: "GitHub",
      info: "CodeWeaverX",
      icon: <FiGithub className="w-8 h-8" />,
      link: "https://github.com/AnshulSingh-eZ",
      color: "text-gray-700 hover:text-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center ${contact.color}`}
            >
              <div className="mb-4 p-4 bg-white rounded-full shadow-inner">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{contact.platform}</h3>
              <p className="text-gray-600">{contact.info}</p>
              <span className="mt-4 text-sm font-medium text-blue-500 hover:underline">
                Reach out →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;