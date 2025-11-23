// src/components/4_sections/home/SocialProof.jsx

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { homeContent } from '@/constants/mockData';

const SocialProof = () => {
  const { socialProof } = homeContent;

  return (
    <section id="social-proof" className="py-24 bg-subtle-gray-dark/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-accent-cyan">{socialProof.eyebrow}</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-manrope">{socialProof.heading}</h2>
        </div>

        <motion.div
          className="grid max-w-4xl gap-8 mx-auto mt-16 md:grid-cols-2 lg:grid-cols-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialProof.certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 text-center transition-all duration-300 border rounded-xl bg-background-dark border-subtle-gray-dark hover:border-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/10"
            >
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src={cert.imageUrl}
                  alt={`${cert.title} Badge`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-xl font-bold text-white font-manrope">{cert.title}</h3>
              <p className="mt-2 text-text-light/70">{cert.issuer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;