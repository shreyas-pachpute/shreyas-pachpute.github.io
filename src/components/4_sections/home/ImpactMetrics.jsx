// src/components/4_sections/home/ImpactMetrics.jsx

'use client';
import { motion } from 'framer-motion';
import { homeContent } from '@/constants/mockData';
import AnimatedCounter from '@/components/2_molecules/AnimatedCounter';

const ImpactMetrics = () => {
  const { impactMetrics } = homeContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <section id="impact" className="py-24 bg-dark-gradient bg-grid-pattern">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-accent-cyan">{impactMetrics.eyebrow}</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-manrope">{impactMetrics.heading}</h2>
        </div>

        <motion.div
          className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {impactMetrics.metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="p-8 text-center transition-all duration-300 rounded-xl glass-card hover:shadow-2xl hover:shadow-electric-purple/20 hover:border-electric-purple/50"
              variants={itemVariants}
            >
              <p className="text-6xl font-bold text-white font-mono">
                <AnimatedCounter to={metric.value} isCurrency={metric.isCurrency} isPercentage={metric.isPercentage} />
              </p>
              <h3 className="mt-2 text-xl font-semibold text-text-light">{metric.label}</h3>
              <p className="text-sm text-text-light/60">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;