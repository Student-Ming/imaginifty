/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/out' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty' : '',
  exportTrailingSlash: true,
};

export default nextConfig;
