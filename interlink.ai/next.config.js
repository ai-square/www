/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  output: 'export',
  images: {
    unoptimized: true  // Disables the built-in Image Optimization API
  }
};

module.exports = nextConfig;
