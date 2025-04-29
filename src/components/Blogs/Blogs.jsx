 // src/components/Blogs/Blogs.jsx
 import React from 'react';
 import Section from '../Section/Section';
 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom'; // Use React Router Link
 import { FaArrowRight } from 'react-icons/fa';
 import { blogsData } from '../../config/appData';
 import styles from './Blogs.module.css';
 
 const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
 };
 
 
 const Blogs = () => {
   return (
     <Section id="blogs" title="Blogs / Writing" className={styles.blogsSection}>
        <motion.div
           className={styles.blogGrid}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           transition={{ staggerChildren: 0.2 }} // Stagger card appearance
         >
          {blogsData.map((blog) => (
            <motion.div
                 key={blog.id}
                 className={styles.blogCard}
                 variants={cardVariants}
                 whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", borderColor: "var(--primary-color)"}}
                 transition={{ type: "spring", stiffness: 300}}
              >
              <img src={blog.image} alt={blog.title} className={styles.blogImage} loading="lazy" />
              <div className={styles.blogContent}>
                <h3>{blog.title}</h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                {/* Use React Router Link to navigate */}
                <Link to={`/blog/${blog.slug}`} className={`btn btn-secondary ${styles.blogLink}`}>
                  Read More <FaArrowRight className={styles.arrowIcon}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
     </Section>
   );
 };
 
 export default Blogs;