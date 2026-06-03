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

// @ts-ignore - '@next/mdx' may not have local type declarations in this environment.
import createMDX from '@next/mdx';
// If TypeScript can't find 'next' types in this environment, provide a minimal
// local fallback so this file still typechecks.
type NextConfig = any;
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {

  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
