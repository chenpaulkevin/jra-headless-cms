'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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
  floorArea: number
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {}, [isLoaded])
  const imageLoad = () => {
    setIsLoaded(true)
  }
  return (
    <>
      <div className="flex rounded-3xl w-full h-[350px] justify-center items-center relative overflow-hidden mb-4">
        <ImageLoader src={featuredImageUrl || ''} alt={featuredImageAlt || ''} />
      </div>
      {!isLoaded ? (
        <>
          {' '}
          <div className="flex gap-4">
            <div className="h-12 w-2/4 bg-slate-300 rounded-lg animate-pulse"></div>
            <div className="h-12 w-3/4 bg-slate-300 rounded-lg animate-pulse"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-8 w-1/3 bg-slate-300 rounded-lg animate-pulse"></div>
            <div className="h-8 w-1/3 bg-slate-300 rounded-lg animate-pulse"></div>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <h1 className="blog-title-clamp font-bold text-blackPrimary white-space-nowrap">
              {title}
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="text-gray text-base">{floorArea} square meters</div>
            <div className="text-gray text-base">-</div>
            <div className="text-gray text-base">{categories}</div>
          </div>
        </>
      )}
    </>
  )
}
