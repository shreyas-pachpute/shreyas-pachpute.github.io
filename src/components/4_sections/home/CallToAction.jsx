// src/components/4_sections/home/CallToAction.jsx

'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Button from '@/components/1_atoms/Button';
import { homeContent } from '@/constants/mockData';

const CallToAction = () => {
  const { cta } = homeContent;

  return (
    <section id="contact-cta" className="relative flex items-center justify-center py-24 text-center text-white animated-gradient-bg min-h-[60vh]">
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold md:text-6xl font-manrope">{cta.heading}</h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-text-light/80">{cta.subheading}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Button href={cta.buttons.primary.link} variant="primary">{cta.buttons.primary.text}</Button>
            <Button href={cta.buttons.secondary.link} variant="secondary" target="_blank" rel="noopener noreferrer">{cta.buttons.secondary.text}</Button>
            <Button href={cta.buttons.tertiary.link} variant="tertiary">{cta.buttons.tertiary.text}</Button>
          </div>

          <div className="flex items-center justify-center mt-12 space-x-6">
            <a href={`mailto:${cta.contactInfo.email}`} className="transition-colors text-text-light/70 hover:text-white">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href={cta.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors text-text-light/70 hover:text-white">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={cta.contactInfo.github} target="_blank" rel="noopener noreferrer" className="transition-colors text-text-light/70 hover:text-white">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;