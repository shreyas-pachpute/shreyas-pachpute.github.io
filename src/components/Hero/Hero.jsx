// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Hero.module.css';
import useTypewriter from '../../hooks/useTypewriter';
import { heroTitles as titles } from '../../config/appData'; // Import titles

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"} }
};

const Hero = () => {
  const { text: typedTitle, isPaused } = useTypewriter(titles);
  const resumeLink = "/SHREYAS_PACHPUTE_RESUME-1.pdf"; // Relative to public

  return (
    <motion.section
      id="home"
      className={styles.heroSection}
      variants={heroVariants}
      initial="hidden"
      animate="visible" // Animate on load
    >
      {/* Optional: Add overlay div if needed */}
      {/* <div className={styles.heroOverlay}></div> */}

      <div className={`container ${styles.heroContent}`}>
        {/* Optional Photo */}
         {/* <motion.img
           src="/img/profile-pic.png" // Relative to public
           alt="Shreyas Pachpute"
           className={styles.heroPhoto}
           variants={itemVariants}
           loading="lazy"
         /> */}

        <motion.h1 className={styles.heroName} variants={itemVariants}>
          SHREYAS PACHPUTE
        </motion.h1>

        <motion.p
            className={`${styles.heroTagline} ${isPaused ? styles.typingPaused : ''}`}
            variants={itemVariants}
        >
          <span className={styles.typewriterText}>{typedTitle}</span>
        </motion.p>


        <motion.div className={styles.heroButtons} variants={itemVariants}>
          <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary" // Use global button styles
          >
              Get In Touch
          </ScrollLink>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary" // Use global button styles
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div className={styles.heroSocialLinks} variants={itemVariants}>
          <a href="https://www.linkedin.com/in/shreyaspachpute/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shreyas-pachpute" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div className={styles.scrollDownIndicator}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1}}
       >
        <ScrollLink to="about" smooth={true} duration={500} offset={-70} aria-label="Scroll down">
            <span></span>
         </ScrollLink>
      </motion.div>
    </motion.section>
  );
};

export default Hero;