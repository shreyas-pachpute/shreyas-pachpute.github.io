// src/pages/BlogPostPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { FaArrowLeft } from 'react-icons/fa';
import { blogsData } from '../config/appData';
import styles from './BlogPostPage.module.css'; // Create this CSS module

const BlogPostPage = () => {
  const { slug } = useParams(); // Get slug from URL
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // Rerun when slug changes

  if (!blog) {
    // Handle blog not found (e.g., redirect or show a message)
     useEffect(() => { navigate('/'); }, [navigate]); // Redirect to home if blog not found
    return <div className={styles.loading}>Blog post not found. Redirecting...</div>; // Optional loading/not found state
  }

  // Sanitize HTML content before rendering
  const cleanHtml = DOMPurify.sanitize(blog.content);

  return (
    <div className={styles.blogPostContainer}>
      <div className={`container ${styles.blogPostContent}`}>
        {/* Keep the Back link INSIDE the main content container for layout */}
        <Link to="/" className={styles.backLink}> {/* Use root path to go home */}
          <FaArrowLeft /> Back to Portfolio
        </Link>

        <h1>{blog.title}</h1>
        {/* Add metadata if available in your data */}
        {/* <p className={styles.postMeta}>Published on: July XX, 2024</p> */}

        {/* Render sanitized HTML */}
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />

      </div>
    </div>
  );
};

export default BlogPostPage;