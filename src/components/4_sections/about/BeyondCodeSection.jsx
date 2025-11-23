// src/components/4_sections/about/BeyondCodeSection.jsx

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const BeyondCodeSection = () => {
  const { beyondCode } = aboutPageContent;

  return (
    <section className="py-24 bg-background-dark">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl font-manrope">{beyondCode.title}</h2>
        <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-3">
          {beyondCode.activities.map((activity, index) => (
            <motion.div
              key={index}
              className="overflow-hidden text-center bg-subtle-gray-dark rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="relative h-56">
                <Image
  src={activity.imageUrl}
  alt={activity.name}
  fill
  style={{ objectFit: 'cover' }}
  className="transition-transform duration-500 hover:scale-105"
/>
              </div>
              <div className="p-6">
                <activity.Icon className="w-8 h-8 mx-auto mb-3 text-accent-cyan" />
                <h3 className="mb-2 text-xl font-bold text-white font-manrope">{activity.name}</h3>
                <p className="text-text-light/70">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
