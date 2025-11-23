// src/app/contact/page.jsx

'use client';

import { contactPageContent } from '@/constants/contactPageData';
import Button from '@/components/1_atoms/Button';
import { FaPaperPlane, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 border-b border-subtle-gray-dark">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-electric-purple transition-colors">{question}</h3>
        <FaChevronDown className={`transform transition-transform duration-300 text-electric-purple ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <p className="text-text-light/80 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ContactPage() {
  const { hero, options, form, alternatives, faq } = contactPageContent;

  // Form Logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvqqrgz"; 

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', interest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className="bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-text-light/80">{hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-text-light/60">
            {hero.stats.map((stat, i) => (
              <span key={i} className="flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="mr-2 text-accent-cyan">■</span>{stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-3">
            {options.map((option, i) => (
              <div key={i} className="p-8 text-center transition-all duration-300 border rounded-xl shadow-lg bg-subtle-gray-dark/20 border-subtle-gray-dark hover:border-electric-purple hover:-translate-y-2 hover:bg-subtle-gray-dark/30 group">
                <div className="bg-background-dark w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-subtle-gray-dark group-hover:border-accent-cyan transition-colors">
                    <option.Icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white font-manrope">{option.title}</h3>
                <p className="mb-6 text-sm text-text-light/70">{option.description}</p>
                <Button href={option.button.href} variant="secondary" className="w-full">{option.button.text}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="container max-w-2xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-white font-manrope">{form.title}</h2>
          
          {status === 'success' ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="p-8 text-center rounded-xl bg-green-500/10 border border-green-500/30"
             >
               <FaCheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
               <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
               <p className="text-text-light/80">Thanks for reaching out. I'll get back to you within 24 hours.</p>
               <button onClick={() => setStatus('idle')} className="mt-6 text-accent-cyan hover:underline">Send another message</button>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-subtle-gray-dark/10 border border-subtle-gray-dark">
              <div className="grid md:grid-cols-2 gap-6">
                 <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="Your Name *" 
                    className="w-full p-4 text-white rounded-lg bg-background-dark border border-subtle-gray-dark focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all" 
                    required 
                />
                 <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Email Address *" 
                    className="w-full p-4 text-white rounded-lg bg-background-dark border border-subtle-gray-dark focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all" 
                    required 
                />
              </div>
              
              <input 
                type="text" 
                name="company"
                value={formData.company} 
                onChange={handleChange}
                placeholder="Company (Optional)" 
                className="w-full p-4 text-white rounded-lg bg-background-dark border border-subtle-gray-dark focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all" 
              />
              <select 
                name="interest"
                value={formData.interest} 
                onChange={handleChange}
                className="w-full p-4 text-white rounded-lg bg-background-dark border border-subtle-gray-dark focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all appearance-none" 
                required
              >
                <option value="" className="text-gray-500">I'm interested in... *</option>
                {form.dropdownOptions.map(opt => <option key={opt} value={opt} className="bg-background-dark">{opt}</option>)}
              </select>
              
              <textarea 
                name="message"
                value={formData.message} 
                onChange={handleChange}
                placeholder="Your Message *" 
                rows="5" 
                className="w-full p-4 text-white rounded-lg bg-background-dark border border-subtle-gray-dark focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all" 
                required
              ></textarea>
              
              <div className="text-center">
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out rounded-lg bg-gradient-to-r from-electric-purple to-accent-cyan hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} 
                  {!status === 'submitting' && <FaPaperPlane className="ml-2" />}
                </button>
                {status === 'error' && <p className="mt-4 text-red-400">Something went wrong. Please try again or email me directly.</p>}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Alternative Channels & FAQ */}
      <section className="py-24 bg-subtle-gray-dark/20">
        <div className="container grid max-w-6xl gap-16 px-4 mx-auto lg:grid-cols-2">
          {/* Alternatives */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white font-manrope">{alternatives.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {alternatives.channels.map(channel => (
                <a key={channel.handle} href={channel.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 transition-colors rounded-lg bg-background-dark border border-subtle-gray-dark hover:border-electric-purple hover:bg-white/5">
                  <channel.Icon className="w-6 h-6 mr-3 text-accent-cyan" />
                  <span className="text-text-light font-medium">{channel.handle}</span>
                </a>
              ))}
            </div>
          </div>
          {/* FAQ */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white font-manrope">{faq.title}</h2>
            <div>
              {faq.questions.map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}