// src/app/insights/page.jsx

import { insightsPageContent } from '@/constants/insightsPageData';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Insights & Technical Blog',
  description: 'Technical articles on AI architecture, LLM deployment, and system engineering by Shreyas Pachpute.',
};

export default function InsightsPage() {
  const { hero, filters, posts } = insightsPageContent;

  return (
    <div className="bg-background-dark min-h-screen">
      <section className="py-24 text-center">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-accent-cyan">Technical Blog</p>
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-text-light/80 leading-relaxed">{hero.subtitle}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-4 mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button key={filter} className="px-5 py-2 text-sm font-semibold transition-all duration-300 border rounded-full border-subtle-gray-dark text-text-light/70 hover:bg-white/5 hover:text-white hover:border-electric-purple/50">
                {filter}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-xl shadow-lg cursor-pointer bg-subtle-gray-dark/20 border-subtle-gray-dark hover:border-electric-purple/50 hover:bg-subtle-gray-dark/30 hover:-translate-y-2 group">
                  <div className="relative h-60 w-full overflow-hidden bg-subtle-gray-dark/50">
                     {/* Image Container */}
                     {post.imageUrl ? (
                         <Image 
                            src={post.imageUrl} 
                            alt={post.title} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                            className="transition-transform duration-500 group-hover:scale-105"
                         />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-text-light/20">No Image</div>
                     )}
                  </div>
                  <div className="flex flex-col flex-grow p-8">
                    <p className="mb-3 text-xs font-bold tracking-widest uppercase text-electric-purple">{post.category}</p>
                    <h3 className="flex-grow mb-4 text-2xl font-bold text-white font-manrope leading-tight group-hover:text-accent-cyan transition-colors">{post.title}</h3>
                    <p className="mb-6 text-text-light/70 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-xs font-medium text-text-light/50 pt-4 border-t border-white/5">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}