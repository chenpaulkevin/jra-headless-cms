'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import Link from 'next/link'
import BlogSkeleton from '@/components/BlogSkeleton'
import BlogCard from '@/components/BlogCard'
import HeaderTitleCard from '@/components/HeaderTitleCard'
import { debounce } from 'lodash'

// Define interfaces for the data structures
interface Blog {
  slug: string
  blogImage: {
    url: string
    alt: string
  }
  createdAt: string
  readTime: string
  title: string
  description: string
  categories: {
    title: string
  }
}

interface Category {
  title: string
}

interface BlogData {
  docs: Blog[]
}

interface CategoryData {
  docs: Category[]
}

interface InfiniteBlogScrollProps {
  blockHeader: string
  blockDescription: string
}

export const InfiniteBlogScroll: React.FC<InfiniteBlogScrollProps & { id?: string }> = (props) => {
  const { blockHeader, blockDescription } = props
  const [data, setData] = useState<BlogData | null>(null)
  const [filteredData, setFilteredData] = useState<BlogData | null>(null)
  const [categories, setCategories] = useState<CategoryData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    const fetchData = async () => {
      try {
        const [blogRes, categoryRes] = await Promise.all([
          axios.get('/api/blog?limit=1000&draft=false', { cancelToken: cancelTokenSource.token }),
          axios.get('/api/categories?limit=1000&draft=false', {
            cancelToken: cancelTokenSource.token,
          }),
        ])
        setData(blogRes.data)
        setFilteredData(blogRes.data)
        setCategories(categoryRes.data)
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          console.error('Error occurred', error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      cancelTokenSource.cancel('Component unmounted, cancelling request')
    }
  }, [])

  const handleFilter = debounce((search: string) => {
    if (data) {
      const filteredDocs =
        search === 'All Categories'
          ? data.docs
          : data.docs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
      setFilteredData({ ...data, docs: filteredDocs })
    }
  }, 300)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFilter(event.target.value)
  }

  const handleCategoryFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const search = event.target.value
    if (data) {
      const filteredDocs =
        search === 'All Categories'
          ? data.docs
          : data.docs.filter((blog) =>
              blog.categories.title.toLowerCase().includes(search.toLowerCase()),
            )
      setFilteredData({ ...data, docs: filteredDocs })
    }
  }

  if (loading) {
    return (
      <section className="container">
        <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
        <div className="flex flex-wrap gap-8 py-8 items-center justify-center">
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </section>
    )
  }

  return (
    <section className="container">
      <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
      <div className="flex flex-col items-center justify-center w-full h-fit text-blackPrimary gap-8">
        <div className="w-full flex gap-8">
          <input
            className="w-3/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-base"
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
          />
          <select
            className="w-1/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-md"
            name="categories"
            onChange={handleCategoryFilter}
          >
            <option value="All Categories">All Categories</option>
            {categories &&
              categories.docs.map((category, i) => (
                <option key={i} value={category.title}>
                  {category.title}
                </option>
              ))}
          </select>
        </div>
        {filteredData?.docs.map((blog, i) => (
          <Link
            href={'/blog/' + blog.slug}
            key={i}
            className="w-full flex items-center justify-center h-fit my-8"
          >
            <BlogCard
              blogImageUrl={blog.blogImage.url}
              blogImageAlt={blog.blogImage.alt}
              createdAt={blog.createdAt}
              readTime={blog.readTime}
              title={blog.title}
              description={blog.description}
              categories={blog.categories.title}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
