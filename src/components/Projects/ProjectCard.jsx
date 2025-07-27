// src/components/Projects/ProjectCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaPlay, FaCodeBranch, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
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

const descriptionVariants = {
  collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 },
  expanded: { opacity: 1, height: 'auto', marginTop: '10px', marginBottom: '22px' } // Adjust marginTop as needed
};

// ProjectCard now accepts onOpenModal prop for modal/video demos
const ProjectCard = ({ project, onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    // Prevent click from bubbling if the click is on interactive elements (buttons/links)
    // This check helps if we decide to put other interactive elements directly on card body
    if (e.target.closest('a, button')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const handleDemoClick = (e) => {
    e.stopPropagation(); // Prevent card click (expansion) when a demo button is clicked
    if ((project.demoType === 'modal' || project.demoType === 'video') && onOpenModal) {
      onOpenModal(); // Trigger modal for 'modal' and 'video' types using the passed prop
    }
    // For 'live', the <a> tag handles navigation
  };

  return (
    <motion.div
      layout // Framer Motion will animate layout changes (like height)
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${styles.projectCardNew} ${isExpanded ? styles.expandedCard : ''}`}
      whileHover={{
        y: -12,
        boxShadow: "0 15px 35px rgba(0,0,0,0.35), 0 0 25px var(--primary-glow, rgba(0, 240, 255, 0.5))",
        borderColor: "var(--primary-color)"
      }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      onClick={handleCardClick} // Card click now toggles description
      style={{ cursor: 'pointer' }} // Always pointer cursor as card is clickable to expand
    >
      <div className={styles.projectImageContainer}>
        <img src={project.image} alt={`${project.title} Thumbnail`} className={styles.projectImage} loading="lazy" />
      </div>
      <div className={styles.projectCardContent}>
        <h3>{project.title}</h3>

        {/* Animated Description */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.p
              key="description"
              className={styles.projectDescription}
              variants={descriptionVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <div className={styles.clickToExpandPrompt} onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}>
            Click to read more... <FaChevronDown style={{ marginLeft: '5px' }} />
          </div>
        )}
        {isExpanded && (
             <div className={styles.clickToCollapsePrompt} onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}>
                Show less <FaChevronUp style={{ marginLeft: '5px' }} />
            </div>
        )}


        <div className={styles.techStack}>
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -2, color: 'var(--primary-color-light)'}}
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
              onClick={(e) => e.stopPropagation()} // Stop propagation to prevent card click
              aria-label={`${project.title} GitHub Repository`}
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <span className={styles.projectBtnPlaceholder}><FaCodeBranch /> Internal</span>
          )}

          {/* Demo buttons now use handleDemoClick which internally calls onOpenModal */}
          {(project.demoType === 'modal' || project.demoType === 'video') && (
            <button
              className={`btn btn-secondary ${styles.projectBtn} ${styles.demoBtn}`}
              onClick={handleDemoClick}
              aria-label={`${project.demoType === 'modal' ? 'View Demo' : 'Watch Demo Video'} for ${project.title}`}
            >
              <FaPlay /> {project.demoType === 'modal' ? 'Demo' : 'Watch Video'}
            </button>
          )}
          {project.demoType === 'live' && project.demoInfo.liveUrl && (
            <a
              href={project.demoInfo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-secondary ${styles.projectBtn} ${styles.demoBtn}`}
              onClick={(e) => e.stopPropagation()}
              aria-label={`View Live Demo for ${project.title}`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
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