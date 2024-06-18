import { MetadataRoute } from 'next'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const seoUrl =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_PUBLIC_HOST_URL_LIVE
    : process.env.NEXT_PUBLIC_HOST_URL_DEV

export const revalidate = 3600

function formatDateToSimple(date: Date): string {
  return date.toISOString().slice(0, 10)
}

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
    url: (page.slug === 'index' ? seoUrl : `${seoUrl}/${page.slug}`) as string,
    lastModified: formatDateToSimple(new Date(page.updatedAt || page.createdAt)),
    changeFrequency: 'yearly' as const,
    priority: (page.slug === 'index' ? 1 : 0.7) as number,
  }))

  const blogs = blogPages.docs.map((blog) => ({
    url: `${seoUrl}/blog/${blog.slug}`,
    lastModified: formatDateToSimple(new Date(blog.updatedAt || blog.createdAt)),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    image: (blog.blogImage as { url: string })?.url || '',
  }))

  const gallery = designModels.docs.map((model) => ({
    url: `${seoUrl}/gallery/${model.slug}`,
    lastModified: formatDateToSimple(new Date(model.updatedAt || model.createdAt)),
    changeFrequency: 'never' as const,
    priority: 0.5,
    image: (model.featuredImage as { url: string })?.url || '',
  }))

  // Return an array of all sitemap entries
  return [...pages, ...blogs, ...gallery]
}
