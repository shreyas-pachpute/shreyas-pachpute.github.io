// src/app/layout.jsx

import { Inter, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/3_organisms/Header';
import Footer from '@/components/3_organisms/Footer';

// As per spec: Font setup
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// SEO Metadata
export const metadata = {
  title: 'Shreyas Pachpute - AI Architect & GenAI Systems Engineer',
  description: 'Portfolio of Shreyas Pachpute, an AI Architect building intelligent automation that transforms business operations—from .NET to Python, LLMs to multi-GPU deployments.',
  // TODO: Add Open Graph and Twitter card images later
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans bg-background-dark text-text-light`}>
        {/* The Header and Footer will wrap all pages */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}