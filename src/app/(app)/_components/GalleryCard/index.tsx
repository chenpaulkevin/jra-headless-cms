'use client'
import React, { useEffect, useState } from 'react'
import ImageLoader from '../../_components/ImageLoader'

export default function GalleryCard({
  featuredImageUrl,
  featuredImageAlt,
  title,
  categories,
  floorArea,
}: {
  featuredImageUrl: string
  featuredImageAlt: string
  title: string
  categories: string
  floorArea: any
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {}, [isLoaded])
  const imageLoad = () => {
    setIsLoaded(true)
  }
  return (
    <>
      <div className="flex rounded-3xl w-full h-[300px] justify-center items-center relative overflow-hidden">
        <ImageLoader src={featuredImageUrl || ''} alt={featuredImageAlt || ''} />
      </div>
      <div className="flex h-fit">
        <h1 className="blog-title-clamp font-bold text-blackPrimary white-space-nowrap truncate leading-none">
          {title}
        </h1>
      </div>
      <div className="flex gap-4 -mt-3">
        <div className="text-gray text-base">{floorArea} square meters</div>
        <div className="text-gray text-base">-</div>
        <div className="text-gray text-base">{categories}</div>
      </div>
    </>
  )
}
