import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
              Zinglabs
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-dark-200 hover:text-white transition-colors text-sm font-medium">
              Products
            </a>
            <a href="#about" className="text-dark-200 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#roadmap" className="text-dark-200 hover:text-white transition-colors text-sm font-medium">
              Roadmap
            </a>
            <a href="#contact" className="text-dark-200 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
