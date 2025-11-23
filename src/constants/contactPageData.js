// src/constants/contactPageData.js

import { FaEnvelope, FaCalendarAlt, FaLinkedin, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa';

export const contactPageContent = {
  hero: {
    title: "Let's Discuss Architecture",
    subtitle: "Ideal for startups and enterprises looking to move GenAI from 'demo' to 'production'.",
    stats: ["Open to Remote (US/EU)", "Available for Consulting", "Response < 24h"],
  },
  
  options: [
    {
      Icon: FaEnvelope,
      title: "Email Me",
      description: "For project inquiries.",
      button: {
        text: "Send Email",
        href: "mailto:shreyaspachpute1107@gmail.com",
      },
    },
    {
      Icon: FaCalendarAlt,
      title: "Book a Strategy Call",
      description: "30-min architecture review.",
      button: {
        text: "Book Time",
        href: "https://calendly.com/shreyaspachpute1107/30min",
      },
    },
    {
      Icon: FaLinkedin,
      title: "LinkedIn",
      description: "Connect & Chat.",
      button: {
        text: "Connect",
        href: "https://www.linkedin.com/in/shreyaspachpute/",
      },
    },
  ],

  form: {
    title: "Send a Message",
    dropdownOptions: [
      "Discussing a Full-Time Role",
      "Consulting / Architecture Review",
      "Freelance Project",
      "General Inquiry",
    ],
  },

  alternatives: {
    title: "Connect Elsewhere",
    channels: [
      { Icon: FaGithub, href: "https://github.com/shreyas-pachpute", handle: "@shreyas-pachpute" },
      { Icon: FaLinkedin, href: "https://linkedin.com/in/shreyaspachpute", handle: "Shreyas Pachpute" },
      { Icon: FaMedium, href: "https://shreyas-pachpute.medium.com/", handle: "@shreyaspachpute" },
      { Icon: FaTwitter, href: "https://twitter.com/PachputeShreyas", handle: "X / Twitter" },
    ],
  },

  faq: {
    title: "FAQ",
    questions: [
      {
        question: "What is your primary tech stack?",
        answer: "I specialize in Python-based AI stacks (LangChain, PyTorch, vLLM) and integrate them with enterprise backends (.NET, AWS, Azure).",
      },
      {
        question: "Are you available for full-time roles?",
        answer: "Yes, I am actively seeking Senior AI Engineer or AI Architect roles, preferably remote.",
      },
      {
        question: "Do you work on contract projects?",
        answer: "I am open to high-impact contract work focused on architecture review or initial system design.",
      },
      {
        question: "What time zones do you work with?",
        answer: "I am flexible and have extensive experience overlapping with US and European business hours.",
      },
    ],
  },
};