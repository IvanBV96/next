/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,  // Add this line to ignore ESLint errors during the build
      },
  };
  
  export default nextConfig;
  