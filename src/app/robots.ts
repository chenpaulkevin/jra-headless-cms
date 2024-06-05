import { MetadataRoute } from 'next'

const seoUrl =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_PUBLIC_HOST_URL_LIVE
    : process.env.NEXT_PUBLIC_HOST_URL_DEV
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/privacy'],
    },
    sitemap: `${seoUrl}/sitemap.xml`,
  }
}
