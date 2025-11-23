'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { globalContent } from '@/constants/globalData';
import Button from '../1_atoms/Button';

const Header = () => {
  const { header } = globalContent;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: '0%', transition: { type: 'tween', ease: 'easeInOut' } },
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background-dark/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between h-20 px-4 mx-auto">
        
        {/* LOGO SECTION START */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden transition-transform duration-300 rounded-lg group-hover:scale-110">
            {/* Make sure logo-sp.png is in /public/images/ */}
            <Image 
              src="/images/logo-sp.png" 
              alt="SP Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          <span className="text-xl font-bold tracking-wider text-white font-manrope">
            {header.logoText}
          </span>
        </Link>
        {/* LOGO SECTION END */}

        <div className="hidden md:flex items-center gap-8">
          {header.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-text-light/80 hover:text-white group transition-colors duration-300 ${
                pathname === link.href ? 'text-white font-semibold' : ''
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent-cyan transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Button href={header.ctaButton.href} variant="primary" className="px-5 py-2 text-sm">
            {header.ctaButton.text}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background-dark md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {header.navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-2xl text-text-light/80 hover:text-white">
                  {link.label}
                </Link>
              ))}
              <Button href={header.ctaButton.href} variant="primary" className="mt-4">
                {header.ctaButton.text}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;