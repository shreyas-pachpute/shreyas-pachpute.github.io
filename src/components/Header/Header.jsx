// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // For non-scroll links if needed
import { FaBars, FaTimes } from 'react-icons/fa'; // Use react-icons
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Add background after scrolling 20px
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   // Navigation Links Data
  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "certifications", label: "Certifications" },
    { to: "blogs", label: "Blogs" }, // Target the Blogs section ID
    { to: "contact", label: "Contact" },
  ];

  const resumeLink = "/SHREYAS_PACHPUTE_RESUME-1.pdf"; // Path relative to public folder


  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70} // Adjust offset matching header height
          className={styles.logo}
          onClick={closeMobileMenu} // Close menu if logo is clicked on mobile
        >
          SP
        </ScrollLink>

        <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.navMenuActive : ''}`}>
           {navLinks.map(link => (
             <li key={link.to} className={styles.navItem}>
               <ScrollLink
                 activeClass={styles.activeLink} // Add active class styling
                 to={link.to}
                 spy={true}
                 smooth={true}
                 offset={-70} // Adjust offset
                 duration={500}
                 className={styles.navLink}
                 onClick={closeMobileMenu}
               >
                 {link.label}
               </ScrollLink>
             </li>
           ))}
             {/* Mobile specific Resume link */}
           <li className={styles.mobileOnly}>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer" className={`${styles.navLink} ${styles.btnMobileResume}`}>
                 Download Resume
              </a>
            </li>
        </ul>

        <button className={styles.hamburger} onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;