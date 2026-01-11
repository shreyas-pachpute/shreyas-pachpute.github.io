'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const AboutHeroSection = () => {
  const { hero } = aboutPageContent;

  return (
    <section className="py-20 bg-background-dark overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent-cyan font-bold tracking-wider mb-2">{hero.subtitle}</p>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl font-manrope mb-6">{hero.title}</h1>
            
            <div className="space-y-4 text-lg text-text-light/80 leading-relaxed">
              {hero.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {hero.focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <area.icon className="text-electric-purple w-5 h-5" />
                  <span className="text-sm font-semibold text-white">{area.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/30 to-accent-cyan/30 rounded-full blur-3xl transform scale-110"></div>
            
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 z-10">
              <Image
                src={hero.headshotUrl}
                alt="Shreyas Pachpute"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl border-2 border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;