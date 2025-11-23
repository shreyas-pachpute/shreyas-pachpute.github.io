// src/components/4_sections/home/WorkPreview.jsx

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@/components/1_atoms/Button';
import { homeContent } from '@/constants/mockData';

const WorkPreview = () => {
  const { workPreview } = homeContent;

  return (
    <section id="work-preview" className="py-24 bg-background-light text-text-charcoal">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-electric-purple">{workPreview.eyebrow}</p>
          <h2 className="text-4xl font-bold md:text-5xl font-manrope">{workPreview.heading}</h2>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto mt-16 md:grid-cols-2 lg:grid-cols-3">
          {workPreview.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={project.link}>
                <div className="overflow-hidden transition-all duration-300 bg-white border rounded-lg shadow-md cursor-pointer group border-subtle-gray hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-56">
                    <Image
  src={project.imageUrl}
  alt={project.title}
  fill
  style={{ objectFit: 'cover' }}
  className="transition-transform duration-500 group-hover:scale-105"
/>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold font-manrope">{project.title}</h3>
                    <p className="mb-4 text-text-charcoal/70">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-electric-purple/10 text-electric-purple">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href={workPreview.cta.link} variant="primary">
            {workPreview.cta.text} <FaArrowRight className="inline ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;