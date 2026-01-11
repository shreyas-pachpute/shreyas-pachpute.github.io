'use client';

import { workPageContent } from '@/constants/workPageData';
import Button from '@/components/1_atoms/Button';
import AnimatedCounter from '@/components/2_molecules/AnimatedCounter';
import { FaArrowRight, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WorkPage() {
  const { hero, roleDetails, caseStudies, otherSystems, testimonial } = workPageContent;

  return (
    <div className="bg-background-dark min-h-screen">
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-purple/5 blur-3xl -z-10"></div>

        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-subtle-gray-dark pb-12"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12 max-w-6xl mx-auto">
              <div className="text-center md:text-right">
                <h1 className="text-5xl font-bold text-white font-manrope mb-2">{hero.company}</h1>
                <h2 className="text-2xl text-accent-cyan font-semibold">{hero.role}</h2>
              </div>
              
              <div className="max-w-xl">
                 <p className="text-lg text-text-light/90 leading-relaxed border-l-4 border-electric-purple pl-6 text-left">
                   {hero.summary}
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
              {hero.metrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-lg bg-subtle-gray-dark/20 border border-subtle-gray-dark text-center">
                  <metric.icon className="w-6 h-6 mx-auto text-electric-purple mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                    {metric.prefix}<AnimatedCounter to={metric.value} />{metric.suffix}
                  </div>
                  <p className="text-xs text-text-light/60 mt-1 uppercase tracking-wide">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-text-light/40 mt-4 italic">{hero.microcopy}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">{roleDetails.title}</h3>
            <p className="text-text-light/80 mb-8">{roleDetails.description}</p>
            <ul className="grid gap-4">
              {roleDetails.points.map((point, i) => (
                <li key={i} className="flex items-start bg-subtle-gray-dark/10 p-4 rounded-lg">
                  <FaCheckCircle className="text-accent-cyan mt-1 mr-4 shrink-0" />
                  <span className="text-text-light/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-subtle-gray-dark/5">
        <div className="container px-4 mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-accent-cyan pl-4">Projects I worked on...</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherSystems.map((sys, i) => (
              <div key={i} className="p-6 rounded-lg bg-subtle-gray-dark/20 border border-subtle-gray-dark hover:bg-subtle-gray-dark/30 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">{sys.title}</h4>
                <p className="text-sm text-text-light/70">{sys.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-subtle-gray-dark/10">
        <div className="container px-4 mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-manrope">Production Case Studies</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-background-dark border border-subtle-gray-dark rounded-xl overflow-hidden hover:border-electric-purple transition-all duration-300 group"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-electric-purple bg-electric-purple/10 rounded-full uppercase">
                      {study.type}
                    </span>
                    <span className="text-xs text-text-light/50">{study.timeline}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                    {study.title}
                  </h4>
                  
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <p className="text-xs font-bold text-text-light/50 uppercase mb-1">Problem</p>
                      <p className="text-sm text-text-light/80 line-clamp-3">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-light/50 uppercase mb-1">Solution</p>
                      <p className="text-sm text-text-light/80 line-clamp-3">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.techStack.map(tech => (
                      <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/5 text-text-light/70 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-subtle-gray-dark">
                    <Button href="/insights" variant="secondary" className="w-full text-sm py-2">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/insights" variant="primary" className="px-8">
              View more Blogs & Case Studies <FaArrowRight className="ml-2 inline" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background-dark to-subtle-gray-dark/10">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <FaQuoteLeft className="text-4xl text-electric-purple/30 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-manrope text-white font-medium leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>
          <div>
            <p className="text-lg font-bold text-white">{testimonial.author}</p>
            <p className="text-accent-cyan">{testimonial.role}</p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-subtle-gray-dark">
        <div className="container px-4 mx-auto text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Interested in a similar architecture?</h2>
           <div className="flex flex-wrap justify-center gap-4">
             <Button href="/contact" variant="primary">
               Schedule Architecture Review
             </Button>
             <Button href="mailto:shreyaspachpute1107@gmail.com" variant="secondary">
               Email Me
             </Button>
           </div>
        </div>
      </section>

    </div>
  );
}