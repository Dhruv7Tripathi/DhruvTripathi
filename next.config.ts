// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// reactStrictMode: true,
// images: {
//   domains: ['images.unsplash.com'],
// },
// images: {
//   domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
// },
// };

// export default nextConfig;

import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {

  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
