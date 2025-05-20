import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[rgba(10,10,10,0.95)] z-50 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-indigo-300 transition-colors"
            aria-label="Close menu"
          >
            &times;
          </button>

          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col items-center"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.target}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.target}
                  smooth={true}
                  duration={1200}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl font-medium text-white my-5 px-8 py-2 hover:text-indigo-300 transition-colors"
                  activeClass="text-indigo-400"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};