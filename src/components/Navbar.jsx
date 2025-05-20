import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' }
  ];

  const handleDownload = () => {
    const resumeUrl = '/Anshul_Singh_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anshul_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {mobileMenuOpen && (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"}`}>
          
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          >
            &times;
          </button>
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold text-white my-4 px-8 py-2 hover:text-indigo-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FaDownload />
            Download Resume
          </button>
        </div>
      )}

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Anshul Singh</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.target}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={item.target}
                    smooth={true}
                    duration={1200}
                    offset={-80}
                    className="px-1 py-2 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer font-medium"
                  >
                    {item.name}
                  </Link>
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
              
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
              >
                <FaDownload className="text-sm" />
                Resume
              </motion.button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;