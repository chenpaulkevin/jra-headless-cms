import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogParser from './BlogParser'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug } },
    depth: 2,
  })

  if (!result?.docs.length) {
    return { title: 'JRA Home Builders | Home Contractor in Bacolod and Iloilo' }
  }

  const blog = result.docs[0]

  return {
    title:
      (blog.meta as { title: string })?.title ||
      'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
    description:
      (blog.meta as { description: string })?.description ||
      'JRA is a licensed contractor specializing in home building and renovation services.',
    openGraph: {
      title:
        (blog.meta as { title: string })?.title ||
        'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
      description:
        (blog.meta as { description: string })?.description ||
        'JRA is a licensed contractor specializing in home building and renovation services.',
      images: [
        {
          url: (blog.blogImage as { url: string })?.url || '/ogImage.png',
          width: 1280,
          height: 1080,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug } },
    depth: 3,
  })

  if (!result?.docs.length) {
    notFound()
  }

  const blog = result.docs[0]
  return (
    <>
      <BlogParser blog={blog}></BlogParser>
    </>
  )
}
