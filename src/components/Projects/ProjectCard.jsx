// src/components/Projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlay, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'; // Added FaExternalLinkAlt
import styles from './Projects.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const ProjectCard = ({ project, onClick }) => {
  const handleDemoClick = (e) => {
    e.stopPropagation(); // Prevent card click from bubbling
    if (project.demoType === 'modal' || project.demoType === 'video') {
      onClick(); // Trigger modal for 'modal' and 'video' types
    }
    // For 'live', the <a> tag handles navigation, so no specific action here beyond stopPropagation
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.projectCardNew}
      whileHover={{
        y: -12,
        boxShadow: "0 15px 35px rgba(0,0,0,0.35), 0 0 25px var(--primary-glow, rgba(0, 240, 255, 0.5))",
        borderColor: "var(--primary-color)"
      }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      onClick={project.demoType === 'modal' || project.demoType === 'video' ? onClick : undefined} // Card click opens modal/video
      style={{ cursor: (project.demoType === 'modal' || project.demoType === 'video') ? 'pointer' : 'default' }}
    >
      <div className={styles.projectImageContainer}>
        <img src={project.image} alt={`${project.title} Thumbnail`} className={styles.projectImage} loading="lazy" />
      </div>
      <div className={styles.projectCardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -2, color: 'var(--primary-color-light)'}} // Assuming a lighter primary variant
              transition={{ type: 'spring', stiffness:300}}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.projectBtn}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.title} GitHub Repository`}
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <span className={styles.projectBtnPlaceholder}><FaCodeBranch /> Internal</span>
          )}

          {project.demoType === 'modal' && (
            <button
              className={`btn btn-secondary ${styles.projectBtn} ${styles.demoBtn}`}
              onClick={handleDemoClick}
              aria-label={`View Demo for ${project.title}`}
            >
              <FaPlay /> Demo
            </button>
          )}
          {project.demoType === 'live' && project.demoInfo.liveUrl && (
            <a
              href={project.demoInfo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.projectBtn} ${styles.demoBtn}`}
              onClick={(e) => e.stopPropagation()} // Good practice, though <a> handles navigation
              aria-label={`View Live Demo for ${project.title}`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.demoType === 'video' && project.demoInfo.videoUrl && (
            <button
              className={`btn btn-secondary ${styles.projectBtn} ${styles.demoBtn}`}
              onClick={handleDemoClick}
              aria-label={`Watch Demo Video for ${project.title}`}
            >
              <FaPlay /> Watch Video
            </button>
          )}
          {project.demoType === 'text' && (
            <span className={`${styles.projectBtnPlaceholder} ${styles.demoBtnPlaceholder}`}>
              <FaPlay /> {project.demoInfo?.text || 'Details'}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;