import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div className="mx-auto max-w-7xl panel-strong px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-accent-400 transition-colors">
              Zinglabs
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8 text-sm">
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
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 text-sm font-bold hover:shadow-lg hover:shadow-sky-500/25 transition-shadow"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
