import { insightsPageContent } from '@/constants/insightsPageData';
import Link from 'next/link';
import Image from 'next/image';
import { FaMedium } from 'react-icons/fa';

export const metadata = {
  title: 'Insights & Technical Blog',
  description: 'Technical articles on AI architecture, LLM deployment, and system engineering by Shreyas Pachpute.',
};

const PostCard = ({ post, isBlog }) => (
  <Link href={`/insights/${post.slug}`}>
    <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-xl shadow-lg cursor-pointer bg-subtle-gray-dark/20 border-subtle-gray-dark hover:border-electric-purple/50 hover:bg-subtle-gray-dark/30 hover:-translate-y-2 group">
      <div className="relative h-52 w-full overflow-hidden bg-subtle-gray-dark/50">
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
         {isBlog && (
           <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
             <FaMedium className="text-white" />
           </div>
         )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <p className="mb-3 text-xs font-bold tracking-widest uppercase text-electric-purple">{post.category}</p>
        <h3 className="flex-grow mb-4 text-xl font-bold text-white font-manrope leading-tight group-hover:text-accent-cyan transition-colors">{post.title}</h3>
        <p className="mb-6 text-text-light/70 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between text-xs font-medium text-text-light/50 pt-4 border-t border-white/5">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default function InsightsPage() {
  const { hero, caseStudies, blogs } = insightsPageContent;

  return (
    <div className="bg-background-dark min-h-screen">
      <section className="py-24 text-center">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-accent-cyan">Knowledge Hub</p>
          <h1 className="text-5xl font-bold text-white md:text-6xl font-manrope">{hero.title}</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-text-light/80 leading-relaxed">{hero.subtitle}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white font-manrope mb-8 border-l-4 border-electric-purple pl-4">
            Case Studies
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((post) => (
              <PostCard key={post.slug} post={post} isBlog={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white font-manrope mb-8 border-l-4 border-accent-cyan pl-4">
            Technical Blogs
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <PostCard key={post.slug} post={post} isBlog={true} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}