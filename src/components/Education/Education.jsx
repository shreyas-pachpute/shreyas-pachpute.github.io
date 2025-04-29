// src/components/Education/Education.jsx - CORRECTED
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
// --- CORRECTED ICON IMPORT ---
import { FaUniversity } from 'react-icons/fa'; // Import specific icon
// Removed problematic 'icons' object
import { educationData } from '../../config/appData';
import styles from './Education.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const Education = () => {
  return (
    // Remember to alternate background via prop in HomePage if needed
    <Section id="education" title="Education" bgVariant="even">
      <div className={styles.educationGrid}>
        {educationData.map((edu) => {
            // --- CORRECTED ICON USAGE ---
             let IconComponent;
             if (edu.icon === "FaUniversity") {
                IconComponent = FaUniversity;
             } else {
                 IconComponent = FaUniversity; // Default fallback
             }

            return (
               <motion.div
                    key={edu.id}
                    className={styles.educationCard}
                    variants={cardVariants}
                    whileHover={{ y: -5, borderColor: "var(--primary-color)", boxShadow: "0 0 20px var(--glow-color)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                 >
                 {/* Render the determined IconComponent */}
                 <div className={styles.educationIcon}><IconComponent /></div>
                 <h3>{edu.degree}</h3>
                 <p className={styles.institution}>{edu.institution}</p>
                 <p className={styles.duration}>{edu.duration}</p>
                 <p className={styles.details}>{edu.details}</p>
                 <p className={styles.courses}>{edu.courses}</p>
               </motion.div>
            )
        })}
      </div>
    </Section>
  );
};

export default Education;