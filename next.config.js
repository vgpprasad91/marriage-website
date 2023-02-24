/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ['imagedelivery.net'],
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
