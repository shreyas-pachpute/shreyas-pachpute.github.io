// src/components/4_sections/about/AboutHeroSection.jsx

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const AboutHeroSection = () => {
  const { hero } = aboutPageContent;

  return (
    <section className="py-20 bg-background-dark">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl font-manrope">About Me</h1>
            <p className="mt-4 text-lg text-accent-cyan">{hero.eyebrow}</p>
            <div className="mt-8 space-y-6 text-lg text-text-light/80">
              {hero.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Professional Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-purple to-accent-cyan blur-2xl opacity-50"></div>
              <Image
                src={hero.headshotUrl}
                alt="Shreyas Pachpute - Professional Headshot"
                width={384}
                height={384}
                priority
                className="relative object-cover w-full h-full rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;