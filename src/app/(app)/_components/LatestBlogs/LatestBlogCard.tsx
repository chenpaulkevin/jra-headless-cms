import React from 'react'
import Image from 'next/image'
import ImageLoader from '../ImageLoader'

export default function LatestBlogCard({
  blogImageUrl,
  blogImageAlt,
  readTime,
  title,
  categories,
}: {
  blogImageUrl: string
  blogImageAlt: string
  readTime: any
  title: string
  categories: string
}) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <>
      <div className="flex bg-slate-200 rounded-3xl w-full h-[350px] justify-center items-center relative overflow-hidden mb-4">
        <ImageLoader src={blogImageUrl} alt={blogImageAlt}></ImageLoader>
      </div>
      <div className="flex">
        <h1 className="card-title-clamp font-bold text-blackPrimary line-clamp-2">{title}</h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-slate-600 text-base">{categories}</div>
        <div className="text-slate-400 text-base">{readTime} min read</div>
      </div>
    </>
  )
}
