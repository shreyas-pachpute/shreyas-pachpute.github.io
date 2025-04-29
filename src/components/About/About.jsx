// src/components/About/About.jsx
import React from 'react';
import Section from '../Section/Section';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const itemVariantsRight = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, delay: 0.4 } }
};


const About = () => {
    return (
        <Section id="about" title="About Me" bgVariant="even">
            <motion.div
                className={styles.aboutContent}
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className={styles.aboutLeft} variants={itemVariantsLeft}>
                    <h3>My Journey in AI/ML</h3>
                    <p>Results-driven AI/ML Engineer with 1.5+ years of experience designing, building, and deploying advanced AI solutions and automation. Proven expertise in LLM optimization, RAG bot development, and end-to-end AI workflows.</p>
                    <p>My passion lies in leveraging cutting-edge technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and agentic workflows to solve complex problems and drive innovation. I thrive in dynamic environments and enjoy the challenge of turning theoretical concepts into practical, impactful applications.</p>
                    <h3>Beyond the Code</h3>
                    <p>Interests: Gym, Entrepreneurship, Mythology, Politics.</p>
                    <h3>Soft Skills</h3>
                    <p>Problem-Solving, Communication, Teamwork, Adaptability, Continuous Learning.</p>
                    <h3>Languages</h3>
                    <p>English (Fluent), Hindi (Fluent), Marathi (Native), Gujarati (Conversational).</p>
                </motion.div>
                <motion.div className={styles.aboutRight} variants={itemVariantsRight}>
                     <motion.img
                        src="/img/profile-pic.png"
                        alt="Shreyas Pachpute"
                        className={styles.profilePic}
                        loading="lazy"
                        whileHover={{ scale: 1.05, rotate: 3, boxShadow: "0 0 35px var(--glow-color), 0 8px 20px rgba(0, 0, 0, 0.4)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default About;