import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import GalleryParser from './GalleryParser'

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
  return (
    <>
      <GalleryParser designModel={designModel} />
    </>
  )
}
