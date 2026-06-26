import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  url: string;
  status: string;
}

interface ProductsProps {
  products: Product[];
}

const categoryColors: Record<string, string> = {
  'AI Tools': 'from-cyan-500 to-blue-500',
  'Business Tools': 'from-orange-500 to-red-500',
  'Productivity Apps': 'from-green-500 to-emerald-500',
  'Education': 'from-pink-500 to-rose-500',
  'Utilities': 'from-yellow-500 to-amber-500',
  'Custom Solutions': 'from-indigo-500 to-purple-500',
};

const statusColors: Record<string, string> = {
  live: 'bg-green-500',
  development: 'bg-yellow-500',
  upcoming: 'bg-gray-500',
};

const Products = ({ products }: ProductsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="products" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            Discover our suite of innovative software solutions designed to solve real-world problems
          </p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group glass rounded-2xl p-6 hover:glow-sm transition-all duration-300"
            >
              {/* Product logo */}
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-dark-700">
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${statusColors[product.status]} ring-2 ring-dark-800`} />
              </div>

              {/* Category badge */}
              <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[product.category] || 'from-gray-500 to-gray-600'} text-xs font-medium text-white mb-3`}>
                {product.category}
              </div>

              {/* Product name */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-dark-300 text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Launch button */}
              <motion.a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-2.5 text-center rounded-lg bg-dark-600 hover:bg-dark-500 text-white text-sm font-medium transition-colors"
              >
                {product.status === 'live' ? 'Launch App' : product.status === 'development' ? 'Coming Soon' : 'Learn More'}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
