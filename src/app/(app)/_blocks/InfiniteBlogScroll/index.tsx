import React, { Suspense } from 'react'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogSkeleton from '@/components/BlogSkeleton'
import HeaderTitleCard from '@/components/HeaderTitleCard'
import FetchBlogs from './fetchBlogs'
import { InfiniteBlogProps } from './types'
import Loading from './loading'

export const InfiniteBlogScroll: React.FC<InfiniteBlogProps & { id?: string }> = (props) => {
  const { blockHeader, blockDescription } = props
  return (
    <>
      <section className="container">
        <div className="flex">
          <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-fit text-blackPrimary gap-8">
          <Suspense fallback={<Loading />}>
            <FetchBlogs />
          </Suspense>
        </div>
      </section>
    </>
  )
}
