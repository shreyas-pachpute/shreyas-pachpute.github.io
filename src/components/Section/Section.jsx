// src/components/Section/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const Section = ({ id, title, children, className = '', bgVariant = 'odd' }) => {
  // Determine background class based on prop
  const backgroundClass = bgVariant === 'even' ? styles.bgEven : styles.bgOdd;

  return (
    <motion.section
      id={id}
      // Combine default, passed className, and background class
      className={`${styles.section} ${backgroundClass} ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        {title && (
          <h2 className={`${styles.sectionTitle} section-title-global`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default Section;