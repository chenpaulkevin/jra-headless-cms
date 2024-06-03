'use client'
import React from 'react'
import RichTextParser from '@/utilities/RichTextParser'
import ImageLoader from '../../_components/ImageLoader'
import LatestBlogs from '../../_components/LatestBlogs'
export default function BlogParser({ blog }: { blog: any }) {
  const date = new Date(blog.createdAt)
  const articleDate = date.toLocaleDateString()
  return (
    <div className="container py-8 text-PrimaryBlack">
      <div className="flex flex-col justify-center items-center w-full gap-4 lg:px-28">
        <div className="text-center text-sm lg:text-md font-semibold outline outline-1 outline-blackPrimary px-4 py-2 lg:px-6 rounded-full bg-light">
          {(blog.categories as { title: string })?.title}
        </div>
        <div className="w-full">
          <h1 className="title-clamp text-center font-bold lg:px-8">{blog.title}</h1>
        </div>
        <div className="h-[1px] w-full rounded-full bg-lightGray border-0" />
        <div className="flex gap-4 text-center text-sm lg:text-base mt-4 justify-center items-center">
          <div className="tracking-wider">{articleDate}</div>
          <div>|</div>
          <div className="hidden lg:block">Read Time: {blog.readTime} Minutes</div>
          <div className="hidden lg:block">|</div>
          <div>
            Author: {(blog.createdBy as { firstName: string })?.firstName}{' '}
            {(blog.createdBy as { lastName: string })?.lastName}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[350px] lg:h-[750px] rounded-2xl overflow-hidden my-8">
        <ImageLoader
          src={(blog.blogImage as { url: string })?.url}
          alt={(blog.blogImage as { alt: string })?.alt}
        ></ImageLoader>
      </div>
      <div className="w-full lg:w-3/4 mx-auto mt-16">
        <RichTextParser content={blog.blogContent}></RichTextParser>
      </div>
      <div>
        <LatestBlogs />
      </div>
    </div>
  )
}
