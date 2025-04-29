// src/components/Skills/Skills.jsx - CORRECTED
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
// --- CORRECTED ICON IMPORT ---
// Import all icons likely needed across all skill categories
import {
    FaCode, FaPython, FaDatabase, FaBrain, FaDumbbell, FaRocket, FaRobot, FaCloud,
    FaLightbulb, FaComments, FaUserAstronaut, FaPenFancy, FaLink, FaProjectDiagram,
    FaSearch, FaAws, FaGoogle, FaTools, FaGitAlt, FaServer, FaQuestionCircle
} from 'react-icons/fa';
// Removed combined 'icons' object and Fa6 import
import { skillCategories } from '../../config/appData';
import styles from './Skills.module.css';

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

// Helper function to get the component based on the string name
// You might need to expand this if you use icons from other libraries (e.g., SiTypescript)
const getIconComponent = (iconName) => {
    switch(iconName) {
        case 'FaCode': return FaCode;
        case 'FaPython': return FaPython;
        case 'FaDatabase': return FaDatabase;
        case 'FaBrain': return FaBrain;
        case 'FaDumbbell': return FaDumbbell;
        case 'FaRocket': return FaRocket;
        case 'FaRobot': return FaRobot;
        case 'FaLightbulb': return FaLightbulb;
        case 'FaComments': return FaComments;
        case 'FaUserAstronaut': return FaUserAstronaut;
        case 'FaPenFancy': return FaPenFancy;
        case 'FaLink': return FaLink;
        case 'FaProjectDiagram': return FaProjectDiagram;
        case 'FaSearch': return FaSearch;
        case 'FaCloud': return FaCloud;
        case 'FaAws': return FaAws;
        case 'FaGoogle': return FaGoogle;
        case 'FaTools': return FaTools;
        case 'FaGitAlt': return FaGitAlt;
        case 'FaServer': return FaServer;
        // Add other icons from appData here...
        default: return FaQuestionCircle; // Fallback
    }
}

const Skills = () => {
  return (
    // Remember to alternate background via prop in HomePage if needed
    <Section id="skills" title="Skills & Expertise" className={styles.skillsSection}>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => {
          // --- CORRECTED ICON USAGE ---
          const CategoryIcon = getIconComponent(category.icon);
          return (
            <motion.div
                key={category.title}
                className={styles.skillCategory}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 }}
             >
              <h3>
                {/* Render the CategoryIcon component */}
                <CategoryIcon className={styles.categoryIcon} /> {category.title}
              </h3>
              {category.skills.map((skill) => {
                 // --- CORRECTED ICON USAGE ---
                 const SkillIcon = getIconComponent(skill.icon);
                return (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItemNew}
                    variants={skillItemVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -3,
                        // Reading CSS variable directly can be tricky in hover; hardcode or use theme context
                        // For simplicity, hardcoding the glow color value here:
                        boxShadow: `0 0 15px rgba(0, 240, 255, 0.5)`
                      }}
                    transition={{ type: 'spring', stiffness: 300 }}
                   >
                    {/* Render the SkillIcon component */}
                    <SkillIcon className={styles.skillIcon} /> {skill.name}
                  </motion.div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;