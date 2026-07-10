import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="grid-fade" />
      <div className="radial-glow top-[-8rem] left-[-4rem] h-[28rem] w-[28rem] bg-sky-500/20" />
      <div className="radial-glow top-[6rem] right-[-5rem] h-[24rem] w-[24rem] bg-emerald-400/15" />
      <div className="radial-glow bottom-[-6rem] left-1/2 h-[20rem] w-[36rem] -translate-x-1/2 bg-cyan-500/10" />

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.22, 0.52, 0.22]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/18 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.18, 0.44, 0.18]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-400/16 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="section-kicker mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Fresh builds shipping every month
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.95] tracking-tight text-white">
              Useful software,
              <br />
              <span className="text-gradient">designed to launch fast.</span>
            </h1>

            <p className="section-copy max-w-2xl mb-10">
              Zinglabs builds practical AI tools, business apps, and custom systems for people who want something clean, fast, and ready to ship without the bloat.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 font-semibold text-lg shadow-lg shadow-sky-500/20 transition-all"
              >
                Explore products
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl glass text-white font-semibold text-lg hover:bg-dark-700/70 transition-all"
              >
                Start a project
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { value: '8+', label: 'products shipped' },
                { value: '3', label: 'active launch tracks' },
                { value: '30d', label: 'monthly release rhythm' },
              ].map((stat) => (
                <div key={stat.label} className="panel px-5 py-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-dark-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="panel-strong p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-sky-300/80 font-semibold">What we make</p>
                <h2 className="text-2xl font-bold text-white mt-2">Focused products with a clear job</h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black">
                Z
              </div>
            </div>

            <div className="space-y-4">
              {[
                'AI tools that remove manual work',
                'Business systems that feel simple to use',
                'Custom builds that are easy to understand and scale',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.6)]" />
                  <span className="text-dark-100 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/8 bg-dark-800/60 p-5">
              <div className="flex items-center justify-between text-sm text-dark-200 mb-3">
                <span>Current focus</span>
                <span className="text-emerald-300 font-medium">Live</span>
              </div>
              <div className="h-2 rounded-full bg-dark-700 overflow-hidden">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
              </div>
              <p className="mt-3 text-sm text-dark-300">Working toward a sharper, more useful product suite with faster onboarding and cleaner launches.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
