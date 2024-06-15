import { MetadataRoute } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const seoUrl =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_PUBLIC_HOST_URL_LIVE
    : process.env.NEXT_PUBLIC_HOST_URL_DEV

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch the Payload CMS configuration
  const payload = await getPayloadHMR({ config: await configPromise })

  // Fetch all pages with maximum depth
  const webPages = await payload.find({
    collection: 'pages',
    depth: 2,
  })

  const blogPages = await payload.find({
    collection: 'blog',
    depth: 2,
  })

  const designModels = await payload.find({
    collection: 'designModels',
    depth: 2,
  })
  // Map through the pages to create individual sitemap entries
  const pages = webPages.docs.map((page) => ({
    url: `${seoUrl}/${page.slug}`,
    lastModified: new Date(page.updatedAt || page.createdAt),
    changeFrequency: 'monthly' as const, // Ensure the type matches the expected literals
    priority: 1,
  }))

  const defaultPage = {
    url: `${seoUrl}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const, // Ensure the type matches the expected literals
    priority: 0.8,
  }

  const blogs = blogPages.docs.map((blog) => ({
    url: `${seoUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: 'monthly' as const, // Ensure the type matches the expected literals
    priority: 0.8,
  }))

  const gallery = designModels.docs.map((model) => ({
    url: `${seoUrl}/gallery/${model.slug}`,
    lastModified: new Date(model.updatedAt || model.createdAt),
    changeFrequency: 'monthly' as const, // Ensure the type matches the expected literals
    priority: 0.8,
  }))

  // Return an array of all sitemap entries
  return [defaultPage, ...pages, ...blogs, ...gallery]
}
