import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import GalleryParser from './GalleryParser'

import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: 'designModels',
    where: { slug: { equals: slug } },
    depth: 2,
  })

  if (!result?.docs.length) {
    return { title: 'JRA Home Builders | Home Contractor in Bacolod and Iloilo' }
  }

  const gallery = result.docs[0]

  return {
    title:
      (gallery.meta as { title: string })?.title ||
      'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
    description:
      (gallery.meta as { description: string })?.description ||
      'JRA is a licensed contractor specializing in home building and renovation services.',
    openGraph: {
      title:
        (gallery.meta as { title: string })?.title ||
        'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
      description:
        (gallery.meta as { description: string })?.description ||
        'JRA is a licensed contractor specializing in home building and renovation services.',
      images: [
        {
          url: (gallery.featuredImage as { url: string })?.url || '/ogImage.png',
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
    collection: 'designModels',
    where: { slug: { equals: slug } },
    depth: 2,
  })

  if (!result?.docs.length) {
    notFound()
  }
  const designModel = result.docs[0]
  const page = result.docs?.[0]
  return (
    <>
      <GalleryParser designModel={designModel} />
    </>
  )
}
