// src/components/Footer/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerSocialLinks}>
          <a
            href="https://www.linkedin.com/in/shreyaspachpute/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shreyas-pachpute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <p>© {currentYear} Shreyas Pachpute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;