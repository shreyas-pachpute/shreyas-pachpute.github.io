'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutPageContent } from '@/constants/aboutPageData';

const JourneyTimelineSection = () => {
  const { journey } = aboutPageContent;
  const scrollContainerRef = useRef(null);

  return (
    <section className="relative bg-subtle-gray-dark/20 py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center text-white md:text-5xl font-manrope mb-16">{journey.title}</h2>
        
        <div className="hidden lg:block relative">
           
           <div className="absolute top-[48px] left-0 w-full h-1 bg-subtle-gray-dark z-0"></div>

           <div 
             ref={scrollContainerRef}
             className="overflow-x-auto hide-scrollbar flex items-start gap-12 px-8 pb-12 pt-4"
           >
              {journey.milestones.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative flex flex-col items-center flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="mb-4 text-lg font-bold text-accent-cyan font-mono tracking-wider bg-background-dark px-3 py-1 rounded border border-subtle-gray-dark z-10">
                    {item.year}
                  </span>

                  <div className="w-6 h-6 rounded-full bg-background-dark border-4 border-electric-purple z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)] mb-8"></div>

                  <div className="w-[350px] h-[450px] bg-background-dark border border-subtle-gray-dark rounded-xl overflow-hidden hover:border-accent-cyan transition-colors duration-300 shadow-xl flex flex-col group">
                    <div className="relative h-48 w-full shrink-0 overflow-hidden bg-white p-4">
                       <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill 
                         className="object-contain transition-transform duration-500 group-hover:scale-105" 
                       />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white font-manrope leading-tight">{item.title}</h3>
                        {item.score && (
                          <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded shrink-0 ml-2">
                            {item.score}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm font-semibold text-text-light/60 mb-4">{item.institution}</p>
                      
                      <div className="mt-auto pt-4 border-t border-white/5">
                        <p className="text-sm text-text-light/80 leading-relaxed italic">
                          "{item.microcopy}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="w-24 flex-shrink-0"></div>
           </div>
        </div>

        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-subtle-gray-dark"></div>
          <div className="space-y-12 pl-12">
            {journey.milestones.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-[-38px] top-6 w-4 h-4 rounded-full bg-accent-cyan border-2 border-background-dark shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="bg-background-dark border border-subtle-gray-dark rounded-xl overflow-hidden">
                    <div className="relative h-32 w-full bg-white p-2">
                       <Image src={item.image} alt={item.title} fill className="object-contain" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-accent-cyan mb-1">{item.institution}</p>
                      <p className="text-sm text-text-light/80 italic mt-2">"{item.microcopy}"</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneyTimelineSection;