import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/.well-known/:path*',
      headers: [{ key: 'Content-Type', value: 'application/json' }],
    },
  ],
}

export default nextConfig
