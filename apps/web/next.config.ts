import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ['@workspace/ui'],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
