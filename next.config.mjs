/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tells Next.js to generate a static HTML site
  output: 'export',

  // 2. Disables server-side image optimization (required for GitHub Pages)
  images: {
    unoptimized: true,
  },

  // 3. Optional: Ignores linting errors during build so deployment doesn't fail on small warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig