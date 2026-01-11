import { learningPageContent } from '@/constants/learningPageData';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const metadata = {
  title: 'How I Learn',
  description: 'Resources, mental models, and strategies used by Shreyas Pachpute to master AI and System Design.',
};

export default function LearningPage() {
  const { hero, sections } = learningPageContent;

  return (
    <div className="bg-background-dark min-h-screen">
      <section className="py-24 text-center">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-electric-purple">Continuous Improvement</p>
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-text-light/80 leading-relaxed">{hero.subtitle}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-subtle-gray-dark/20 border border-subtle-gray-dark rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-electric-purple/10 flex items-center justify-center">
                    <section.icon className="text-2xl text-electric-purple" />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-manrope">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg font-bold text-accent-cyan mb-3 uppercase tracking-wide text-xs">My Approach</h3>
                    <p className="text-white text-lg font-medium mb-4 italic">"{section.description}"</p>
                    <p className="text-text-light/80 leading-relaxed">{section.approach}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-accent-cyan mb-4 uppercase tracking-wide text-xs">Top Resources</h3>
                    <ul className="space-y-3">
                      {section.resources.map((res, i) => (
                        <li key={i}>
                          <a 
                            href={res.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between group p-3 rounded bg-background-dark border border-subtle-gray-dark hover:border-electric-purple transition-all"
                          >
                            <span className="text-text-light group-hover:text-white font-medium">{res.title}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-text-light/50 bg-white/5 px-2 py-1 rounded">{res.type}</span>
                              <FaExternalLinkAlt className="text-xs text-text-light/30 group-hover:text-electric-purple" />
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}