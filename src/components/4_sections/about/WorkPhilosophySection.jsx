// src/components/4_sections/about/WorkPhilosophySection.jsx

'use client';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const WorkPhilosophySection = () => {
  const { philosophy } = aboutPageContent;

  return (
    <section className="py-24 bg-subtle-gray-dark/20">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl font-manrope">{philosophy.title}</h2>

        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {philosophy.principles.map((principle, index) => (
            <motion.div
              key={index}
              className="p-6 text-center transition-all duration-300 bg-white/5 rounded-lg hover:bg-white/10 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <principle.Icon className="w-12 h-12 mx-auto mb-4 text-accent-cyan" />
              <h3 className="text-lg font-semibold text-white">{principle.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          className="max-w-3xl p-8 mx-auto mt-16 text-2xl italic font-medium text-center border-l-4 border-electric-purple text-text-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
        >
          "{philosophy.quote}"
        </motion.blockquote>
      </div>
    </section>
  );
};

export default WorkPhilosophySection;