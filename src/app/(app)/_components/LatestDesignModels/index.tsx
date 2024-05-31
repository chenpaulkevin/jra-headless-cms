'use client'

import React, { useState, useEffect, useCallback } from 'react'
import axios, { AxiosResponse, CancelTokenSource } from 'axios'
import Link from 'next/link'
import GalleryCard from '../GalleryCard'
import GallerySkeleton from '../GallerySkeleton'

interface Model {
  slug: string
  featuredImage?: {
    url: string
    alt: string
  }
  title: string
  category: {
    title: string
  }
  floorArea: number
}

interface ApiResponse {
  docs: Model[]
}

export default function LatestDesignModels() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = useCallback(async (cancelToken: CancelTokenSource) => {
    try {
      const res: AxiosResponse<ApiResponse> = await axios.get(
        '/api/designModels?limit=3&draft=false',
        {
          cancelToken: cancelToken.token,
        },
      )
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
    //   cancelToken.cancel('Component unmounted')
    // }
  }, [fetchData])

  return (
    <div>
      <div className="container flex flex-col my-4">
        <h1 className="title-clamp font-semibold leading-normal text-blackPrimary my-8">
          Latest Models
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row gallery-container gap-8 xl:gap-16 py-8 items-center justify-center">
          {loading ? (
            <>
              <GallerySkeleton />
              <GallerySkeleton />
              <GallerySkeleton />
            </>
          ) : (
            data?.docs.map((model) => (
              <Link
                href={`/gallery/${model.slug}`}
                key={model.slug}
                className="flex flex-col gap-4 w-full md:w-[45%] xl:w-1/4 h-fit rounded-3xl"
              >
                <GalleryCard
                  featuredImageUrl={(model.featuredImage as { url: string })?.url}
                  featuredImageAlt={(model.featuredImage as { alt: string })?.alt}
                  title={model.title}
                  categories={model.category?.title}
                  floorArea={model.floorArea}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
