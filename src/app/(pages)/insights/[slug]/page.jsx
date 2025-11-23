// src/app/insights/[slug]/page.jsx

import { insightsPageContent } from '@/constants/insightsPageData';
import Link from 'next/link';
import Image from 'next/image';

// This function generates the pages at build time
export async function generateStaticParams() {
  return insightsPageContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

// This function generates metadata for each blog post
export async function generateMetadata({ params }) {
  const post = insightsPageContent.posts.find(p => p.slug === params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function InsightPostPage({ params }) {
  const post = insightsPageContent.posts.find(p => p.slug === params.slug);

  if (!post) {
    return <div className="container py-20 mx-auto text-center text-white">Post not found.</div>;
  }

  return (
    <div className="bg-background-dark min-h-screen">
      <div className="container max-w-3xl px-4 py-24 mx-auto">
        <Link href="/insights" className="text-sm font-semibold text-accent-cyan hover:text-white transition-colors">
          &larr; Back to all insights
        </Link>
        
        <h1 className="mt-8 text-4xl font-bold text-white md:text-5xl font-manrope leading-tight">{post.title}</h1>
        
        <div className="flex items-center gap-4 mt-6 text-sm text-text-light/60 border-b border-subtle-gray-dark pb-8">
          <span>{post.date}</span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
          <span>&bull;</span>
          <span className="font-semibold text-electric-purple">{post.category}</span>
        </div>

        <div className="relative w-full h-80 my-10 rounded-xl overflow-hidden shadow-2xl border border-subtle-gray-dark">
          {/* Fallback color if image fails to load in dev */}
          <div className="absolute inset-0 bg-subtle-gray-dark animate-pulse" /> 
          <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
        
        {/* Placeholder for technical blog content structure */}
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
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li><strong>Orchestration:</strong> Kubernetes (EKS) for auto-scaling based on queue depth.</li>
            <li><strong>Model:</strong> Llama 3 (Quantized 8-bit) for optimal memory footprint.</li>
            <li><strong>Infrastructure:</strong> Terraform for reproducible state management.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Performance Benchmarks</h2>
          <p>
            Post-optimization, we observed a <strong>40% reduction in inference costs</strong> and a throughput increase to 
            150 tokens/second, making the real-time RAG application viable for end-users.
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