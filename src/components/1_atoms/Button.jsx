// src/components/1_atoms/Button.jsx

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * A reusable button component with variants and animations.
 * @param {string} href - The URL the button links to.
 * @param {'primary' | 'secondary' | 'tertiary'} variant - The button style.
 * @param {React.ReactNode} children - The content inside the button.
 * @param {string} className - Additional CSS classes.
 */
const Button = ({ href, variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'inline-block px-8 py-3.5 rounded-lg font-semibold text-center transition-all duration-300 ease-in-out text-sm';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-electric-purple to-accent-cyan text-white shadow-lg shadow-electric-purple/30',
    secondary: 'bg-transparent border-2 border-subtle-gray-light text-text-light',
    tertiary: 'bg-transparent text-text-light hover:text-accent-cyan',
  };

  const hoverEffects = {
    primary: { scale: 1.05, boxShadow: '0px 6px 20px rgba(139, 92, 246, 0.4)' },
    secondary: { scale: 1.05, backgroundColor: 'rgba(229, 231, 235, 0.1)' },
    tertiary: { y: -2 },
  };
  
  const isExternal = href.startsWith('http') || href.startsWith('/documents');

  return (
    <motion.div
      whileHover={hoverEffects[variant]}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link 
        href={href} 
        className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;