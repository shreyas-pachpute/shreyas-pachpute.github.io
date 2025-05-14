// src/components/Projects/ProjectModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './Projects.module.css';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } } // Delay exit to allow modal to animate out
};

const modalVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.9, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 170,
      damping: 25,
      duration: 0.5,
      when: "beforeChildren", // Animate modal first
      staggerChildren: 0.15   // Then animate children
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.85,
    rotateX: 20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') { // Updated to use event.key
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project || !project.demoInfo) return null;

  return (
    <motion.div
      className={styles.modalBackdrop}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick}
    >
      <motion.div
        className={styles.modalContent}
        variants={modalVariants}
        // initial, animate, exit are inherited from AnimatePresence in Projects.jsx
      >
        <motion.button
            className={styles.closeModalBtn}
            onClick={onClose}
            aria-label="Close modal"
            variants={contentItemVariants} // Can also have its own subtle animation
            whileHover={{ scale: 1.15, rotate: 180, color: 'var(--primary-color)'}}
            transition={{duration: 0.2}}
        >
          <FaTimes />
        </motion.button>

        <motion.h2 variants={contentItemVariants}>
          {project.demoInfo.title || project.title}
        </motion.h2>

        <motion.p variants={contentItemVariants}>
          {project.demoInfo.text}
        </motion.p>

        {project.demoType === 'modal' && project.demoInfo.image && (
          <motion.div variants={contentItemVariants} className={styles.modalMediaContainer}>
            <img
              src={project.demoInfo.image}
              alt={`${project.title} Demo Visual`}
              className={styles.modalImage}
              loading="lazy"
            />
          </motion.div>
        )}

        {project.demoType === 'video' && project.demoInfo.videoUrl && (
          <motion.div variants={contentItemVariants} className={`${styles.modalMediaContainer} ${styles.modalVideoWrapper}`}>
            <video controls autoPlay muted loop className={styles.modalVideo} preload="metadata">
              <source src={project.demoInfo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;