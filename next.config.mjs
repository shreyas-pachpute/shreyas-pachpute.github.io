/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tells Next.js to generate a static HTML site
  output: 'export',

  // 2. Disables server-side image optimization (required for GitHub Pages)
  images: {
    unoptimized: true,
  },

  // 3. Ignores linting errors during build so deployment doesn't fail on warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// CHANGE: Use 'export default' instead of 'module.exports' for .mjs files
export default nextConfig;