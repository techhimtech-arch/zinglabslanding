import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  status: string;
}

interface RoadmapProps {
  products: Product[];
}

const Roadmap = ({ products }: RoadmapProps) => {
  const liveProducts = products.filter(p => p.status === 'live');
  const devProducts = products.filter(p => p.status === 'development');
  const upcomingProducts = products.filter(p => p.status === 'upcoming');

  const stages = [
    {
      title: 'Live Products',
      subtitle: 'Available Now',
      count: liveProducts.length,
      items: liveProducts.map(p => p.name),
      status: 'live',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'In Development',
      subtitle: 'Coming Soon',
      count: devProducts.length,
      items: devProducts.map(p => p.name),
      status: 'development',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Upcoming Ideas',
      subtitle: 'On the Horizon',
      count: upcomingProducts.length,
      items: upcomingProducts.map(p => p.name),
      status: 'upcoming',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />

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
            Product Roadmap
          </h2>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            Track our progress from concept to launch across all our products
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-yellow-500 to-indigo-500 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {stages.map((stage, stageIndex) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stageIndex * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  stageIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${stageIndex % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <div className={`glass rounded-2xl p-8 max-w-lg mx-auto lg:mx-0 ${stageIndex % 2 === 1 ? '' : 'lg:ml-auto'}`}>
                    {/* Header */}
                    <div className={`flex items-center gap-3 mb-4 ${stageIndex % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                      <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${stage.color} text-white text-sm font-semibold`}>
                        {stage.count} {stage.count === 1 ? 'Product' : 'Products'}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 text-center lg:text-left">
                      {stage.title}
                    </h3>
                    <p className="text-dark-300 mb-6 text-center lg:text-left">
                      {stage.subtitle}
                    </p>

                    {/* Product list */}
                    <div className={`flex flex-wrap gap-2 ${stageIndex % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                      {stage.items.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`px-3 py-1.5 rounded-lg ${stage.bgColor} text-dark-200 text-sm`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${stage.color} ring-4 ring-dark-800`}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
