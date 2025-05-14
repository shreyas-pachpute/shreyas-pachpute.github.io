// src/components/Projects/Projects.jsx
import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../config/appData'; // Assuming this path is correct
import styles from './Projects.module.css';

// Define unique categories from projectsData dynamically
const getUniqueCategories = (projects) => {
  const allCategories = projects.reduce((acc, project) => {
    project.category.forEach(cat => acc.add(cat));
    return acc;
  }, new Set());
  return ['all', ...Array.from(allCategories)];
};


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectCategories, setProjectCategories] = useState(['all']);

  useEffect(() => {
    setProjectCategories(getUniqueCategories(projectsData));
  }, []);


  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (project) => {
    // Modal will be opened for 'modal' and 'video' types from ProjectCard
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category.includes(activeFilter));

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Controls the delay between each card animating in
        delayChildren: 0.1 // Optional: delay before children start animating
      }
    }
  };

  const formatFilterName = (filter) => {
    if (filter === 'ml') return 'ML/DL';
    if (filter === 'gen-ai') return 'GenAI';
    if (filter === 'iot') return 'IoT';
    if (filter === 'smart-city') return 'Smart City';
    return filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ');
  };


  return (
    <Section id="projects" title="Personal Projects Showcase" bgVariant="even">
      <div className={styles.projectFilters}>
        {projectCategories.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {formatFilterName(filter)}
          </button>
        ))}
      </div>

      <motion.div
        layout // Animate layout changes when filtering
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
        className={styles.projectGridNew}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;