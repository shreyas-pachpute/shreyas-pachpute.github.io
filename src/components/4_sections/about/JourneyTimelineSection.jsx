// src/components/4_sections/about/JourneyTimelineSection.jsx

'use client';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const JourneyTimelineSection = () => {
  const { journey } = aboutPageContent;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-subtle-gray-dark/20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl font-manrope">{journey.title}</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* The vertical line */}
          <div className="absolute top-0 w-1 h-full transform -translate-x-1/2 bg-subtle-gray-dark left-4"></div>

          <motion.ul
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {journey.milestones.map((item, index) => (
              <motion.li key={index} className="relative pl-12" variants={itemVariants}>
                {/* The dot on the timeline */}
                <div className="absolute top-0 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 border-4 rounded-full left-4 border-subtle-gray-dark bg-accent-cyan"></div>
                
                <p className="mb-1 text-sm font-semibold text-accent-cyan">{item.date}</p>
                <h3 className="text-xl font-bold text-white font-manrope">{item.title}</h3>
                <p className="mt-2 text-text-light/80">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimelineSection;