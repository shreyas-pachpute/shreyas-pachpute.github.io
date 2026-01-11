'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutPageContent } from '@/constants/aboutPageData';

const BeyondCodeSection = () => {
  const { hobbies } = aboutPageContent;

  return (
    <section className="py-24 bg-subtle-gray-dark/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl font-manrope mb-4">{hobbies.title}</h2>
          <p className="text-lg text-text-light/70 italic">"{hobbies.intro}"</p>
        </div>

        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {hobbies.activities.map((activity, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-background-dark rounded-xl border border-subtle-gray-dark hover:border-electric-purple transition-all duration-300 shadow-lg hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background-dark border border-subtle-gray-dark mb-4 group-hover:border-accent-cyan transition-colors shadow-lg">
                   <activity.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                
                <h3 className="text-xl font-bold text-white font-manrope mb-2">{activity.name}</h3>
                <p className="text-sm text-text-light/70 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;