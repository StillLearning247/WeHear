/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    // Add path aliases
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  // Remove or comment out the output export if you need middleware/API routes
  // output: "export",
  experimental: {
    // serverActions: {
    //   bodySizeLimit: "2mb",
    // },
  },
};

export default nextConfig;