// src/components/Contact/Contact.jsx - CORRECTED
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
// --- CORRECTED ICON IMPORT ---
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa'; // Import needed icons
// Removed problematic 'icons' object
import { contactInfo } from '../../config/appData';
import styles from './Contact.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" className={styles.contactSection}>
             <p className={styles.contactSubtitle}>
                I'm currently seeking new opportunities and am open to collaborations or interesting projects. Feel free to connect!
             </p>

            <motion.div
                className={styles.contactInfo}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
             >
                {contactInfo.map((item) => {
                     // --- CORRECTED ICON USAGE ---
                     let IconComponent;
                     switch (item.icon) {
                         case 'FaEnvelope': IconComponent = FaEnvelope; break;
                         case 'FaLinkedin': IconComponent = FaLinkedin; break;
                         case 'FaGithub': IconComponent = FaGithub; break;
                         case 'FaMapMarkerAlt': IconComponent = FaMapMarkerAlt; break;
                         default: IconComponent = FaQuestionCircle;
                     }

                    return (
                        <motion.div key={item.type} className={styles.contactItem} variants={itemVariants}>
                             {item.href ? (
                                 <a href={item.href} target="_blank" rel="noopener noreferrer">
                                     {/* Render the determined IconComponent */}
                                     <IconComponent className={styles.contactIcon} />
                                     <span>{item.value}</span>
                                </a>
                             ) : (
                                 <>
                                     {/* Render the determined IconComponent */}
                                     <IconComponent className={styles.contactIcon} />
                                     <span>{item.value}</span>
                                 </>
                             )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Contact;