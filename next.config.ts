import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better SEO and hosting flexibility
  // output: "export", // Uncomment if you want static export

  // Ignore ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'surfrider.imgix.net',
      },
    ],
    unoptimized: false,
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Enable experimental features as needed
  experimental: {
    // Add experimental features here if needed
  },
};

export default nextConfig;
