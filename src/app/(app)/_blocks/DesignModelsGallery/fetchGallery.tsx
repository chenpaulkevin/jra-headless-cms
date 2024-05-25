import { DesignModel } from '~/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import GalleryCard from '../../_components/GalleryCard'
import { DesignModelsGalleryProps } from './types'
import Link from 'next/link'
import React from 'react'

const FetchGallery = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: 'designModels',
    depth: 2,
  })
  return (
    <>
      {result.docs?.map((designModel: DesignModel, index) => (
        <Link
          href={'/gallery/' + designModel?.slug}
          key={index}
          className="flex flex-col gap-4 w-full md:w-[45%] xl:w-1/4 h-fit rounded-3xl"
        >
          <GalleryCard
            featuredImageUrl={(designModel?.featuredImage as { url?: string })?.url || ''}
            featuredImageAlt={(designModel?.featuredImage as { alt?: string })?.alt || ''}
            title={designModel?.title}
            categories={designModel?.category}
            floorArea={designModel?.floorArea}
          ></GalleryCard>
        </Link>
      ))}
    </>
  )
}

export default FetchGallery
