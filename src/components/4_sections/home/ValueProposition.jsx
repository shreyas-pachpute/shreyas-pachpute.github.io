// src/components/4_sections/home/ValueProposition.jsx

'use client';
import { motion } from 'framer-motion';
import { homeContent } from '@/constants/mockData';

const ValueProposition = () => {
  const { valueProposition } = homeContent;

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, duration: 0.8 }
    }
  };

  return (
    <section id="value-prop" className="py-24 bg-background-light text-text-charcoal">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-electric-purple">{valueProposition.eyebrow}</p>
          <h2 className="text-4xl font-bold md:text-5xl font-manrope">{valueProposition.heading}</h2>
          <p className="mt-6 text-lg text-text-charcoal/70">{valueProposition.description}</p>
        </div>

        <div className="grid max-w-5xl gap-8 mx-auto mt-16 md:grid-cols-3">
          {valueProposition.cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-8 transition-all duration-300 bg-white border rounded-lg shadow-sm border-subtle-gray hover:shadow-xl hover:-translate-y-2"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <card.icon className="w-10 h-10 mb-4 text-electric-purple" />
              <h3 className="mb-3 text-xl font-bold font-manrope">{card.title}</h3>
              <ul className="space-y-2 text-text-charcoal/80">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-accent-cyan">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;