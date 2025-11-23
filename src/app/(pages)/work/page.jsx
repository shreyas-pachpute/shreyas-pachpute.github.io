// src/app/work/page.jsx

'use client';

import { workPageContent } from '@/constants/workPageData';
import Button from '@/components/1_atoms/Button';
import { FaChevronDown, FaBullseye, FaLightbulb, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandableContribution = ({ id, title, details, techStack }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id={id} className="py-4 border-b scroll-mt-20 border-subtle-gray-dark">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left group">
        <h4 className="text-xl font-semibold text-white group-hover:text-electric-purple transition-colors">{title}</h4>
        <FaChevronDown className={`transform transition-transform duration-300 text-electric-purple ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 overflow-hidden"
          >
            <ul className="pl-5 space-y-3 list-disc text-text-light/90 leading-relaxed">
              {details.map((detail, i) => <li key={i} dangerouslySetInnerHTML={{ __html: detail }}></li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {techStack.map((tech, i) => <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">{tech}</span>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WorkPage() {
  const { hero, currentRole, impact, keyProjects } = workPageContent;
  return (
    <div className="bg-background-dark min-h-screen">
      <section className="py-20 text-center bg-subtle-gray-dark/20">
        <div className="container px-4 mx-auto">
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-text-light/80">{hero.subtitle}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl p-8 mx-auto border rounded-xl shadow-2xl bg-background-dark border-subtle-gray-dark relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-electric-purple/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col justify-between gap-2 md:flex-row relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white font-manrope">{currentRole.title}</h2>
                <p className="text-xl font-semibold text-electric-purple">{currentRole.company}</p>
              </div>
              <div className="text-left md:text-right mt-4 md:mt-0">
                <p className="text-text-light/80">{currentRole.duration}</p>
                <p className="text-sm text-text-light/60">{currentRole.location}</p>
              </div>
            </div>
            <p className="mt-6 text-text-light/80 leading-relaxed relative z-10">{currentRole.description}</p>
            <div className="mt-8 relative z-10">
              <h3 className="mb-6 text-2xl font-bold text-white font-manrope">Key Contributions & Impact</h3>
              {currentRole.contributions.map((item, index) => <ExpandableContribution key={index} {...item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-subtle-gray-dark/20">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-cyan">{impact.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl font-manrope">{impact.title}</h2>
          <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto mt-12 md:grid-cols-4">
            {impact.metrics.map(({ value, label }) => (
              <div key={label} className="p-4 rounded-lg bg-background-dark/50 backdrop-blur-sm border border-white/5">
                <p className="text-4xl md:text-5xl font-bold text-electric-purple font-mono">{value}</p>
                <p className="mt-2 text-sm md:text-base text-text-light/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl font-manrope">{keyProjects.title}</h2>
          <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-1 lg:grid-cols-2">
            {keyProjects.projects.map((project, index) => (
              <div key={index} className="p-6 transition-all duration-300 bg-subtle-gray-dark/20 border border-subtle-gray-dark rounded-xl hover:bg-subtle-gray-dark/30 hover:-translate-y-2 hover:border-electric-purple/50">
                <div className="relative w-full mb-6 rounded-lg h-60 overflow-hidden">
                  <Image src={project.imageUrl} alt={project.title} fill style={{objectFit: 'cover'}} className="rounded-lg hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white font-manrope">{project.title}</h3>
                <div className="space-y-4 text-text-light/90">
                  <div className="flex items-start"><FaBullseye className="w-5 h-5 mt-1 mr-3 text-electric-purple shrink-0" /><p><strong>Challenge:</strong> {project.challenge}</p></div>
                  <div className="flex items-start"><FaLightbulb className="w-5 h-5 mt-1 mr-3 text-electric-purple shrink-0" /><p><strong>Approach:</strong> {project.approach}</p></div>
                  <div className="flex items-start"><FaCheckCircle className="w-5 h-5 mt-1 mr-3 text-accent-cyan shrink-0" /><p><strong>Impact:</strong> <span className="block mt-1 pl-4 md:pl-0 md:inline md:mt-0">{project.results.join(', ')}</span></p></div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 mt-6 border-t border-subtle-gray-dark">
                  {project.techStack.map(tech => <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-light border border-white/10">{tech}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* UPDATED: Link points to /insights now */}
          <div className="mt-16 text-center">
            <Button href="/insights" variant="primary" className="text-lg px-8 py-4">
              Explore Blogs & Case Studies <FaArrowRight className="inline ml-2"/>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}