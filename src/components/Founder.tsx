import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

      {/* Decorative gradient */}
      <div className="radial-glow top-0 left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 bg-sky-500/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-8"
          >
            <svg className="w-10 h-10 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>

          {/* Title */}
          <h2 className="section-title mb-8">Founder Vision</h2>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 text-6xl text-accent-500/20 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-8 px-8">
              Zinglabs is an independent software lab focused on creating useful digital products and solving real-world problems. We believe technology should simplify life, not complicate it. Every product we build starts with a simple question: <span className="text-white font-medium">&ldquo;How can this genuinely help people work smarter?&rdquo;</span>
            </blockquote>
            <div className="absolute -bottom-4 -right-4 text-6xl text-accent-500/20 font-serif">"</div>
          </motion.div>

          {/* Mission statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="section-copy max-w-3xl mx-auto"
          >
            We are committed to building lightweight, practical, and useful software. No bloat, no complexity—just solutions that work. Our products are designed to integrate seamlessly into your workflow, helping you accomplish more with less effort. We are in this for the long run, building products that last.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl text-white font-semibold hover:bg-dark-600/50 transition-all"
            >
              <span>Let us Build Something Together</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
