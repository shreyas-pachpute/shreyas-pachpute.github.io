// src/app/projects/page.jsx

import { projectsPageContent } from '@/constants/projectsPageData';
import { FaGithub, FaExternalLinkAlt, FaBook, FaStickyNote } from 'react-icons/fa';
import Image from 'next/image';

export const metadata = {
  title: 'Projects & Experiments',
  description: 'A showcase of production projects, open-source contributions, and AI experiments by Shreyas Pachpute.',
};

const getTypeBadgeClass = (type) => {
  switch (type) {
    case 'production': return 'bg-green-500/10 text-green-400 border-green-500/30';
    case 'opensource': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    case 'experiment': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  }
};

const getLinkIcon = (type) => {
  switch (type) {
    case 'github': return <FaGithub />;
    case 'live': return <FaExternalLinkAlt />;
    case 'blog': return <FaBook />;
    case 'notebook': return <FaStickyNote />;
    default: return <FaExternalLinkAlt />;
  }
};

export default function ProjectsPage() {
  const { hero, projects } = projectsPageContent;

  return (
    <div className="bg-background-dark">
      <section className="py-20 text-center">
        <div className="container px-4 mx-auto">
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-text-light/80">{hero.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col overflow-hidden transition-all duration-300 border rounded-lg shadow-lg bg-subtle-gray-dark/30 border-subtle-gray-dark hover:border-electric-purple hover:-translate-y-2">
                <div className="relative h-56">
                  <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full ${getTypeBadgeClass(project.type)}`}>
                    {project.type}
                  </span>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-3 text-2xl font-bold text-white font-manrope">{project.title}</h3>
                  <p className="flex-grow text-text-light/80">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-4 pt-4 mt-6 border-t border-subtle-gray-dark">
                    {project.links.map(link => (
                      <a key={link.type} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold transition-colors text-accent-cyan hover:text-white">
                        {getLinkIcon(link.type)}
                        <span className="ml-2 capitalize">{link.type}</span>
                        {link.stars && <span className="ml-2 text-xs text-text-light/60">☆ {link.stars}</span>}
                      </a>
                    ))}
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