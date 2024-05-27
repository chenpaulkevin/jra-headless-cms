'use client'
import React, { useState, useEffect } from 'react'
import axios, { CancelTokenSource } from 'axios'
import Link from 'next/link'
import GallerySkeleton from '../GallerySkeleton'
import LatestBlogCard from './LatestBlogCard'

type BlogType = {
  slug: string
  blogImage: {
    url: string
    alt: string
  }
  createdAt: string
  readTime: number
  title: string
  description: string
  categories: {
    title: string
  }
}

type BlogData = {
  docs: BlogType[]
}

export default function LatestBlogs() {
  const [data, setData] = useState<BlogData | null>(null)

  useEffect(() => {
    const cancelToken: CancelTokenSource = axios.CancelToken.source()
    axios
      .get('/api/blog?limit=3&draft=false', {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message)
        } else {
          console.log('Error occurred', err.message)
        }
      })

    return () => {
      cancelToken.cancel('Operation canceled by the user.')
    }
  }, [])

  return (
    <div>
      <div className="container flex flex-col my-4">
        <h1 className="title-clamp font-semibold leading-normal text-blackPrimary my-8">
          Latest Blogs
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row gallery-container gap-8 xl:gap-16 py-8 items-center justify-center">
          {!data && (
            <>
              <GallerySkeleton />
              <GallerySkeleton />
              <GallerySkeleton />
            </>
          )}
          {data &&
            data.docs.map((blog, i) => (
              <Link
                href={'/blog/' + blog.slug}
                key={i}
                className="flex flex-col gap-4 w-full md:w-[45%] xl:w-1/4 h-fit rounded-3xl"
              >
                <LatestBlogCard
                  blogImageUrl={blog.blogImage.url}
                  blogImageAlt={blog.blogImage.alt}
                  readTime={blog.readTime}
                  title={blog.title}
                  categories={blog.categories.title}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
