// src/components/4_sections/home/TechShowcase.jsx

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { homeContent } from '@/constants/mockData';

const TechShowcase = () => {
  const { techShowcase } = homeContent;

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: i * 0.2,
      }
    })
  };

  return (
    <section id="tech-showcase" className="py-24 bg-background-light text-text-charcoal">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-electric-purple">{techShowcase.eyebrow}</p>
          <h2 className="text-4xl font-bold md:text-5xl font-manrope">{techShowcase.heading}</h2>
          <p className="mt-6 text-lg text-text-charcoal/70">{techShowcase.description}</p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto mt-16 md:grid-cols-1 lg:grid-cols-3">
          {techShowcase.cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <motion.div
                className="relative h-full p-8 overflow-hidden transition-all duration-500 bg-white border rounded-lg shadow-lg border-subtle-gray-light group hover:shadow-2xl hover:border-electric-purple"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-10">
                  <Image
  src={card.visual}
  alt={`${card.title} background visual`}
  fill
  style={{ objectFit: 'cover' }}
/>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="mb-4 text-2xl font-bold font-manrope">{card.title}</h3>
                  <p className="mb-6 text-text-charcoal/80">{card.description}</p>

                  <div className="pt-4 mt-auto border-t border-subtle-gray-light">
                    <p className="mb-3 text-sm font-semibold text-text-charcoal">Tech Stack:</p>
                    <div className="flex flex-wrap gap-3">
                      {card.tech.map((techItem, i) => {
                        const IconComponent = techItem.icon;
                        return (
                          <div key={i} className="flex items-center px-3 py-1 text-sm rounded-full bg-subtle-gray-light/50 text-text-charcoal">
                            <IconComponent className="mr-2 text-electric-purple" />
                            {techItem.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;