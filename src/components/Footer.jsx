import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/AnshulSingh-eZ",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/anshul-singh-149210282/", 
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://x.com/AnshulSing61342",
      label: "Twitter"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:anshul06.singh2013@gmail.com",
      label: "Email"
    }
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 py-16 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-white text-2xl font-bold mb-4"
            >
              Anshul Singh
            </motion.h3>
            <p className="text-gray-400">
              Full Stack Developer & Problem Solver
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Anshul Singh. All rights reserved. 
            <span className="inline-block mx-1 text-red-400">
              <FaHeart />
            </span>
            Made with passion
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;