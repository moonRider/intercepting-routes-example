/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravator.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
