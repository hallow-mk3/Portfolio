/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export as a static website
  output: "export",

  // Required for GitHub Pages
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",

  // Next.js Image component compatibility
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;