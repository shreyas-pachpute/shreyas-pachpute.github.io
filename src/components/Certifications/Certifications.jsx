// src/components/Certifications/Certifications.jsx
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
import { certificationsData } from '../../config/appData';
import styles from './Certifications.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const detailsVariants = {
  hidden: { y: "100%", opacity: 0.8 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};


const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications & Training">
      <motion.div
          className={styles.certificationsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
       >
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.id}
            className={styles.certificationCard}
            variants={cardVariants}
            whileHover="hover" // Define hover state name
            initial="rest" // Initial state for hover animation
          >
             <motion.div variants={{ rest:{ scale: 1 }, hover: { scale: 1.1 }}} transition={{duration: 0.3}}>
                <img src={cert.badge} alt={cert.title} className={styles.certificationBadge} loading="lazy" />
             </motion.div>

            <div className={styles.certificationContent}>
              <h4>{cert.title}</h4>
              <span className={styles.issuer}>{cert.issuer}</span>
              <span className={styles.dateIssued}>{cert.date}</span>

               {/* Handle links vs placeholders */}
              {cert.credentialUrl ? (
                <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-secondary ${styles.certLink}`}
                 >
                   Verify Credential
                </a>
              ) : (
                <span className={styles.certLinkPlaceholder}>
                    {cert.placeholder || "Details Unavailable"}
                </span>
               )}

            </div>

            {/* Details Overlay */}
            {/* <motion.div
              className={styles.certificationDetailsHover}
              variants={detailsVariants} 
             >
              {cert.description}
            </motion.div> */}

          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Certifications;