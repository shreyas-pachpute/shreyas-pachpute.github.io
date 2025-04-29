// src/components/Projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlay, FaCodeBranch } from 'react-icons/fa';
import styles from './Projects.module.css'; // Use the same CSS module

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout // Enable layout animation
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.projectCardNew}
      whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)", borderColor: "var(--primary-color)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      // Add onClick only if demo type is modal
      onClick={project.demoType === 'modal' ? onClick : undefined}
      style={{ cursor: project.demoType === 'modal' ? 'pointer' : 'default' }}
    >
      <img src={project.image} alt={`${project.title} Thumbnail`} className={styles.projectImage} loading="lazy" />
      <div className={styles.projectCardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {/* GitHub Link */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.projectBtn}`}
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
              aria-label={`${project.title} GitHub Repository`}
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <span className={styles.projectBtnPlaceholder}><FaCodeBranch/> Internal</span>
          )}

          {/* Demo Link/Button/Placeholder */}
           {project.demoType === 'modal' && (
              <button
                 className={`btn btn-secondary ${styles.projectBtn}`}
                 onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      onClick(); // Trigger modal open
                 }}
                 aria-label={`View Demo for ${project.title}`}
               >
                   <FaPlay/> Demo
               </button>
            )}
            {project.demoType === 'text' && (
                <span className={styles.projectBtnPlaceholder}>
                    <FaPlay/> {project.demoInfo || 'Demo'}
                </span>
             )}

          {/* Add placeholder for other types if needed */}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;