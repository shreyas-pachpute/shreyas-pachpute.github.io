// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Certifications from '../components/Certifications/Certifications';
import Blogs from '../components/Blogs/Blogs'; // Blog List Section
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Blogs /> 
      <Contact />
    </>
  );
};

export default HomePage;