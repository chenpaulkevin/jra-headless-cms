import React from 'react'
import ImageLoader from '@/app/(app)/_components/ImageLoader'

export default function BlogCard({
  blogImageUrl,
  blogImageAlt,
  createdAt,
  readTime,
  title,
  description,
  categories,
}: {
  blogImageUrl: string
  blogImageAlt: string
  createdAt: any
  readTime: any
  title: string
  description: string
  categories: any
}) {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row lg:w-3/4 h-fit gap-8 lg:gap-16 my-8">
        <div className="w-full h-[250px] lg:w-3/5 lg:h-[500px] rounded-3xl flex justify-center items-center relative overflow-hidden">
          <ImageLoader src={blogImageUrl} alt={blogImageAlt}></ImageLoader>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          <div className="w-full flex gap-8 text-base justify-between lg:justify-start">
            <div className="w-fit flex items-center justify-center text-base font-semibold">
              {new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="w-fit flex items-center justify-center text-base text-slate-400 font-semibold text-sm">
              {readTime + ' minute read'}
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-4 lg:mt-8">
            <h1 className="blog-title-clamp font-bold">{title}</h1>
          </div>
          <div className="flex flex-col text-slate-400 leading-relaxed tracking-wide">
            <p className="line-clamp-3 lg:text-base">{description}</p>
          </div>
          <div className="text-sm font-semibold justify-self-end mt-auto flex justify-between items-center">
            <p>{categories}</p>
            <div className="flex gap-4 text-slate-400 items-center justify-center">
              {' '}
              <p className="whitespace-nowrap">Read More</p>
              <p className="font-normal text-lg">→</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
