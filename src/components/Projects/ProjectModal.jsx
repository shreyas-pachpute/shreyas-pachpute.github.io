// src/components/Projects/ProjectModal.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import styles from './Projects.module.css'; // Reuse project styles for consistency

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20, duration: 0.4 } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.3 } }
};

const ProjectModal = ({ project, onClose }) => {

     // Close modal on escape key press
     useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden'; // Prevent background scroll

        return () => {
          window.removeEventListener('keydown', handleEsc);
          document.body.style.overflow = ''; // Restore scroll
        };
      }, [onClose]);


      // Close modal when clicking the backdrop
     const handleBackdropClick = (e) => {
         if (e.target === e.currentTarget) { // Ensure click is on backdrop itself
             onClose();
         }
     };

      if (!project || !project.demoInfo) return null; // Should not happen if selectedProject is set

  return (
    <motion.div
      className={styles.modalBackdrop}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleBackdropClick} // Close on backdrop click
    >
      <motion.div
        className={styles.modalContent}
        variants={modalVariants}
        // No need for exit here as parent AnimatePresence handles it
      >
        <button className={styles.closeModalBtn} onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        <h2>{project.demoInfo.title || project.title}</h2> {/* Use specific demo title or fallback */}
        <p>{project.demoInfo.text}</p>
        {project.demoInfo.image && (
            <img
                src={project.demoInfo.image}
                alt={`${project.title} Demo Visual`}
                className={styles.modalImage}
                loading="lazy"
            />
        )}
         {/* Add other demo elements like videos here */}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;