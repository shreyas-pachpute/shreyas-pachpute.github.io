import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa';

export const globalContent = {
  header: {
    logoText: "SHREYAS PACHPUTE",
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/projects", label: "Projects" },
      { href: "/insights", label: "Insights" }, 
      { href: "/learning", label: "Learning" },
      { href: "/contact", label: "Contact" },
    ],
    ctaButton: {
      text: "Hire Me",
      href: "/contact",
    },
  },
  footer: {
    personalInfo: {
      name: "SHREYAS PACHPUTE",
      title: "AI Architect",
      tagline: "Building intelligent systems",
    },
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/projects", label: "Projects" },
      { href: "/insights", label: "Insights" },
      { href: "/learning", label: "Learning" },
      { href: "/documents/Shreyas_Pachpute_Resume.pdf", label: "Resume" },
    ],
    connectLinks: [
      { href: "https://www.linkedin.com/in/shreyaspachpute/", label: "LinkedIn", Icon: FaLinkedin },
      { href: "https://github.com/shreyas-pachpute", label: "GitHub", Icon: FaGithub },
      { href: "https://shreyas-pachpute.medium.com/", label: "Medium", Icon: FaMedium }, // Added Medium
      { href: "https://twitter.com/PachputeShreyas", label: "X", Icon: FaTwitter }, // Label changed to X
      { href: "mailto:shreyaspachpute1107@gmail.com", label: "Email", Icon: FaEnvelope },
    ],
    copyright: `© ${new Date().getFullYear()} Shreyas Pachpute. Designed with ♥ in India`,
  },
};