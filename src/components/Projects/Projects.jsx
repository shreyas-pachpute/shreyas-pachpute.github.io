// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import Section from '../Section/Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../config/appData';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null); // For modal

  const filters = ['all', 'gen-ai', 'ml', 'web', 'cloud']; // Unique categories + 'all'

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (project) => {
    if (project.demoType === 'modal') {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category.includes(activeFilter));

  return (
    <Section id="projects" title="Personal Projects" bgVariant="even">
      {/* Filter Buttons */}
      <div className={styles.projectFilters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {/* Simple formatting for display */}
            {filter === 'ml' ? 'ML/DL' : filter === 'gen-ai' ? 'Gen-AI' : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
         layout // Animate layout changes when filtering
         className={styles.projectGridNew}
      >
        <AnimatePresence> {/* To animate items entering/exiting */}
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)} // Pass click handler
             />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
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