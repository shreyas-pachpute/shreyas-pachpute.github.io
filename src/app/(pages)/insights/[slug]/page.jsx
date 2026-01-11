import { insightsPageContent } from '@/constants/insightsPageData';
import Link from 'next/link';
import Image from 'next/image';
import { FaMedium, FaArrowRight } from 'react-icons/fa';
import Button from '@/components/1_atoms/Button';

const getPost = (slug) => {
  const allPosts = [...insightsPageContent.caseStudies, ...insightsPageContent.blogs];
  return allPosts.find(p => p.slug === slug);
};

export async function generateStaticParams() {
  const allPosts = [...insightsPageContent.caseStudies, ...insightsPageContent.blogs];
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function InsightPostPage({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return <div className="container py-20 mx-auto text-center text-white">Post not found.</div>;
  }

  return (
    <div className="bg-background-dark min-h-screen">
      <div className="container max-w-3xl px-4 py-24 mx-auto">
        <Link href="/insights" className="text-sm font-semibold text-accent-cyan hover:text-white transition-colors">
          &larr; Back to hub
        </Link>
        
        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl font-manrope leading-tight">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-text-light/60 border-b border-subtle-gray-dark pb-8">
          <span>{post.date}</span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
          <span>&bull;</span>
          <span className="font-semibold text-electric-purple">{post.category}</span>
        </div>

        {post.mediumUrl && (
          <div className="my-8">
             <Button href={post.mediumUrl} variant="secondary" className="flex items-center gap-2">
               <FaMedium /> Read this story on Medium <FaArrowRight className="text-xs" />
             </Button>
          </div>
        )}

        <div className="relative w-full h-80 my-10 rounded-xl overflow-hidden shadow-2xl border border-subtle-gray-dark">
          <div className="absolute inset-0 bg-subtle-gray-dark animate-pulse" /> 
          <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
        
        <article className="prose prose-invert prose-lg max-w-none text-text-light/80">
          <p className="lead text-xl text-white">{post.excerpt}</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Challenge</h2>
          <p>
            Deploying Generative AI in enterprise environments presents unique challenges regarding data privacy, latency, and cost control. 
            In this architecture, we moved away from proprietary APIs to a self-hosted solution to gain granular control over the inference pipeline.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Architecture Overview</h2>
          <p>
            The system leverages <strong>vLLM</strong> for high-throughput inference on AWS g5.xlarge instances. 
            We implemented a <em>Continuous Batching</em> strategy to maximize GPU utilization without sacrificing per-user latency.
          </p>

          <div className="mt-12 p-6 bg-subtle-gray-dark/30 rounded-lg border-l-4 border-accent-cyan">
            <p className="italic text-white">
              "This architecture proves that open-source models can compete with closed-source giants when infrastructure is optimized correctly."
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}