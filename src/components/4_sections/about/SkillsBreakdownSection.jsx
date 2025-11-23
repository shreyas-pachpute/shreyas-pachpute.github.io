// src/components/4_sections/about/SkillsBreakdownSection.jsx

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const SkillsBreakdownSection = () => {
  const { skills } = aboutPageContent;
  const [activeTab, setActiveTab] = useState(0);

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-text-light">{name}</span>
        <span className="text-sm font-medium text-text-light/80">{level}%</span>
      </div>
      <div className="w-full rounded-full h-2.5 bg-subtle-gray-dark">
        <motion.div
          className="bg-gradient-to-r from-electric-purple to-accent-cyan h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-background-dark">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-electric-purple">{skills.eyebrow}</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-manrope">{skills.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-subtle-gray-dark">
            {skills.tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                  activeTab === index
                    ? 'text-accent-cyan border-b-2 border-accent-cyan'
                    : 'text-text-light/70 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {skills.tabs.map((tab, index) => (
              <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                {tab.skillsList.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBreakdownSection;