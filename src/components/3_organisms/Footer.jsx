// src/components/3_organisms/Footer.jsx

import Link from 'next/link';
import Image from 'next/image'; // Import Image
import { globalContent } from '@/constants/globalData';

const Footer = () => {
  const { footer } = globalContent;

  return (
    <footer className="bg-subtle-gray-dark/20 text-text-light/70 border-t border-subtle-gray-dark">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Column 1: Personal Info */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="relative w-8 h-8 overflow-hidden transition-transform duration-300 rounded-lg group-hover:scale-110">
                    {/* Ensure logo-sp.png exists in public/images */}
                    <Image 
                    src="/images/logo-sp.png" 
                    alt="SP Logo" 
                    fill 
                    className="object-contain" 
                    />
                </div>
                <h3 className="text-2xl font-bold tracking-wider text-white font-manrope">
                    {footer.personalInfo.name}
                </h3>
            </Link>
            <p className="mt-1 text-electric-purple font-medium">{footer.personalInfo.title}</p>
            <p className="mt-4 text-sm text-text-light/60 leading-relaxed max-w-xs">{footer.personalInfo.tagline}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold tracking-wider text-white uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent-cyan"
                    target={link.label === 'Resume' ? '_blank' : undefined}
                    rel={link.label === 'Resume' ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="md:col-span-3">
            <h4 className="font-semibold tracking-wider text-white uppercase mb-6 text-sm">Connect</h4>
            <ul className="space-y-3">
              {footer.connectLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm transition-colors hover:text-accent-cyan group"
                  >
                    <Icon className="w-5 h-5 mr-3 text-text-light/50 group-hover:text-accent-cyan transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 text-sm text-center border-t border-subtle-gray-dark bg-background-dark">
        <div className="container px-4 mx-auto">
          <p className="text-text-light/40">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;