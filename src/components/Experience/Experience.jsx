// src/components/Experience/Experience.jsx - CORRECTED
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
// --- CORRECTED ICON IMPORT ---
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Import specific icons needed
// Removed problematic import of Fa6Icons and the combined 'icons' object
import { experienceData } from '../../config/appData';
import styles from './Experience.module.css';

const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  return (
    <Section id="experience" title="Experience" className={styles.experienceSection}>
      <motion.div
         className={styles.timeline}
         variants={timelineVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
      >
        {experienceData.map((item) => {
          // --- CORRECTED ICON USAGE ---
          // Determine the icon component directly based on the string in data
          let IconComponent;
          if (item.icon === "FaBriefcase") {
            IconComponent = FaBriefcase;
          } else if (item.icon === "FaGraduationCap") {
            IconComponent = FaGraduationCap;
          } else {
            IconComponent = FaBriefcase; // Default fallback
          }

          return (
            <motion.div
              key={item.id}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              <div className={styles.timelineIconContainer}>
                <motion.div
                     className={styles.timelineIcon}
                     whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)", color: "var(--bg-color)"}}
                >
                  {/* Render the determined IconComponent */}
                  <IconComponent />
                </motion.div>
              </div>
              <motion.div
                    className={styles.timelineContent}
                    whileHover={{ x: 10, borderColor: "var(--primary-color)", boxShadow: "0 5px 25px rgba(0, 0, 0, 0.3)" }}
                    transition={{type: "spring", stiffness: 300}}
               >
                 <h3>{item.role}</h3>
                <span className={styles.company}>{item.company} | {item.location}</span>
                <span className={styles.date}>{item.date}</span>
                <ul>
                  {item.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Experience;