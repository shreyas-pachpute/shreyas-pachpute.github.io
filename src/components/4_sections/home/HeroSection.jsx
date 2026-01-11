'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import Button from '@/components/1_atoms/Button';
import { homeContent } from '@/constants/mockData';

const HeroSection = () => {
  const { hero } = homeContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="home" className="relative flex items-center justify-center w-full min-h-screen pt-20 overflow-hidden animated-gradient-bg">
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="grid items-center grid-cols-1 gap-12 text-center lg:grid-cols-5 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:col-span-3">
            <motion.div 
              variants={itemVariants} 
              className="inline-block px-5 py-2 mb-6 text-base font-bold tracking-wide rounded-full md:text-lg text-accent-cyan bg-electric-purple/10 border border-electric-purple/40 backdrop-blur-sm"
            >
              {hero.tag}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl font-manrope">
              {hero.title}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto mt-6 text-lg text-text-light/90 lg:mx-0">
              {hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-10 lg:justify-start">
              <Button href={hero.ctaButtons.primary.link} variant="primary">{hero.ctaButtons.primary.text}</Button>
              <Button href={hero.ctaButtons.secondary.link} variant="secondary">{hero.ctaButtons.secondary.text}</Button>
              <Button href={hero.ctaButtons.tertiary.link} variant="tertiary">{hero.ctaButtons.tertiary.text}</Button>
            </motion.div>

            <motion.p variants={itemVariants} className="max-w-xl mx-auto mt-6 text-sm italic text-text-light/60 lg:mx-0">
              {hero.microcopy}
            </motion.p>

          </div>

          <motion.div variants={itemVariants} className="flex items-center justify-center lg:col-span-2">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
              <Image
                src={hero.professionalPhotoUrl}
                alt={hero.name}
                fill
                priority
                className="object-cover border-4 rounded-full border-accent-cyan/50 shadow-2xl shadow-electric-purple/20"
              />
              {hero.techIcons.map((tech, index) => {
                const IconComponent = tech.icon;
                const angle = (index * 2 * Math.PI) / hero.techIcons.length;
                const radius = 55; 
                const top = 50 + radius * Math.sin(angle);
                const left = 50 + radius * Math.cos(angle);

                return (
                  <motion.div
                    key={index}
                    className="absolute flex items-center justify-center w-14 h-14 bg-background-dark border border-subtle-gray-dark rounded-full shadow-lg"
                    style={{ top: `${top}%`, left: `${left}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                  >
                    <IconComponent className="text-2xl text-accent-cyan" title={tech.name} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FaArrowDown className="text-xl text-white/50 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;