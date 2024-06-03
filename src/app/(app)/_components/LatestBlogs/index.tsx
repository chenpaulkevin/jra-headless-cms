'use client'

import React, { useState, useEffect, useCallback } from 'react'
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
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = useCallback(async (cancelToken: CancelTokenSource) => {
    try {
      const res = await axios.get<BlogData>('/api/blog?limit=3&draft=false', {
        cancelToken: cancelToken.token,
      })
      setData(res.data)
    } catch (err: any) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message)
      } else {
        console.error('Error occurred', err.message)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    fetchData(cancelToken)
    // The following return statement is commented out to ensure the fetch is not canceled on unmount
    // return () => {
    //   console.log('Component unmounted, canceling request')
    //   cancelToken.cancel('Operation canceled by the user.')
    // }
  }, [fetchData])

  return (
    <div>
      <div className="container flex flex-col my-4">
        <h1 className="title-clamp font-semibold leading-normal text-blackPrimary my-8">
          Latest Blogs
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row gallery-container gap-8 xl:gap-16 py-8 items-center justify-center">
          {loading ? (
            <>
              <GallerySkeleton />
              <GallerySkeleton />
              <GallerySkeleton />
            </>
          ) : (
            data?.docs.map((blog, i) => (
              <Link
                href={'/blog/' + blog?.slug}
                key={i}
                className="flex flex-col gap-4 w-full md:w-[45%] xl:w-1/4 h-fit rounded-3xl"
              >
                <LatestBlogCard
                  blogImageUrl={blog?.blogImage?.url || ''}
                  blogImageAlt={blog?.blogImage?.alt || ''}
                  readTime={blog?.readTime || ''}
                  title={blog?.title || ''}
                  categories={blog?.categories?.title || ''}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
