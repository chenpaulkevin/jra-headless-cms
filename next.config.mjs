import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 6000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_HOST_URL_LIVE, // Ensure this environment variable is set
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '*.jrahomebuilderscorp.com',
      },
      {
        protocol: 'https',
        hostname: '*.jra-headless-cms.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'sqcpjifsmmvxsmaa.public.blob.vercel-storage.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply these headers to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevent clickjacking attacks
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade', // Control the information sent in the Referer header
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; object-src 'none';", // Define approved sources for content
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload', // Enforce HTTPS
          },
          {
            key: 'Feature-Policy',
            value: "geolocation 'self'; microphone 'none'; camera 'none'", // Control browser features
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), microphone=()', // Control access to browser features
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
