import React from 'react'
import { Blog } from '~/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

const FetchBlogs = async () => {
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: 'blog',
    depth: 2,
  })
  return (
    <>
      {result.docs?.map((blog: Blog, index) => {
        return (
          <Link
            href={'/blog/' + blog.slug}
            key={index}
            className="w-full flex items-center justify-center h-fit my-8"
          >
            <BlogCard
              blogImageUrl={(blog?.blogImage as { url?: string })?.url || ''}
              blogImageAlt={(blog?.blogImage as { alt?: string })?.alt || ''}
              createdAt={blog?.createdAt}
              readTime={blog?.readTime}
              title={blog?.title}
              description={blog?.description}
              categories={(blog?.categories as { title?: string })?.title || ''}
            ></BlogCard>
          </Link>
        )
      })}
    </>
  )
}

export default FetchBlogs
