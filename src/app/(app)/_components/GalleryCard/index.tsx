import React from 'react'
import Image from 'next/image'

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
  return (
    <>
      <div className="flex bg-slate-200 rounded-3xl w-full h-[350px] justify-center items-center relative overflow-hidden mb-4">
        <Image
          src={featuredImageUrl}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={featuredImageAlt}
          className="object-cover object-center"
        ></Image>
      </div>
      <div className="flex">
        <h1 className="blog-title-clamp font-bold text-blackPrimary white-space-nowrap">{title}</h1>
      </div>
      <div className="flex gap-4">
        <div className="text-gray text-base">{floorArea} square meters</div>
        <div className="text-gray text-base">-</div>
        <div className="text-gray text-base">{categories}</div>
      </div>
    </>
  )
}
