'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';
import { FaLightbulb, FaCheck } from 'react-icons/fa';

const SkillsBreakdownSection = () => {
  const { skills } = aboutPageContent;
  const [activeTab, setActiveTab] = useState(0);

  const getSubtopicsArray = (subtopicsString) => {
    return subtopicsString.split(',').map(s => s.trim());
  };

  return (
    <section className="py-24 bg-background-dark">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-electric-purple">Technical Arsenal</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-manrope">{skills.title}</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-subtle-gray-dark pb-1">
            {skills.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-t-lg relative top-[1px] ${
                  activeTab === index
                    ? 'text-white border-b-2 border-accent-cyan bg-white/5'
                    : 'text-text-light/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-12 lg:grid-cols-2 items-start"
              >
                
                <div>
                   <div className="flex flex-wrap gap-3">
                      {getSubtopicsArray(skills.categories[activeTab].subtopics).map((topic, i) => (
                        <div 
                          key={i} 
                          className="flex items-center w-full p-4 rounded-lg bg-subtle-gray-dark/20 border border-subtle-gray-dark hover:border-electric-purple transition-colors duration-300"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center mr-4">
                            <FaCheck className="text-electric-purple text-xs" />
                          </div>
                          <span className="text-lg font-medium text-text-light">{topic}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="lg:pl-8 lg:border-l border-subtle-gray-dark/50 h-full flex flex-col justify-center">
                    <p className="text-xs font-bold text-accent-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FaLightbulb className="w-4 h-4" />
                        Real World Application
                    </p>
                    <blockquote className="text-2xl md:text-3xl font-manrope font-medium text-white leading-tight">
                        "{skills.categories[activeTab].example}"
                    </blockquote>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBreakdownSection;