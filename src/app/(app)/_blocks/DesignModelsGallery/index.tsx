'use client'
import React, { useState, useEffect, ChangeEvent } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { debounce } from 'lodash'

import HeaderTitleCard from '../../_components/HeaderTitleCard'
import GallerySkeleton from '../../_components/GallerySkeleton'
import GalleryCard from '../../_components/GalleryCard'

// Define interfaces for the data structures
interface DesignModel {
  slug: string
  featuredImage: {
    url: string
    alt: string
  }
  title: string
  category: { title: string }
  floorArea: string
}

interface DesignModelsData {
  docs: DesignModel[]
}

interface Category {
  title: string
}

interface CategoryData {
  docs: Category[]
}

interface DesignModelsGalleryProps {
  blockHeader: string
  blockDescription: string
}

export const DesignModelsGallery: React.FC<DesignModelsGalleryProps & { id?: string }> = ({
  blockHeader,
  blockDescription,
}) => {
  const [data, setData] = useState<DesignModelsData | null>(null)
  const [filteredData, setFilteredData] = useState<DesignModelsData | null>(null)
  const [categories, setCategories] = useState<CategoryData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    const fetchData = async () => {
      try {
        const [designModelsRes, categoriesRes] = await Promise.all([
          axios.get('/api/designModels?limit=1000&draft=false&sort=category', {
            cancelToken: cancelTokenSource.token,
          }),
          axios.get('/api/modelsCategories?limit=1000&draft=false', {
            cancelToken: cancelTokenSource.token,
          }),
        ])
        setData(designModelsRes.data)
        setFilteredData(designModelsRes.data)
        setCategories(categoriesRes.data)
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
  }, [loading])

  const debouncedFilter = debounce((search: string) => {
    if (data) {
      const filteredDocs =
        search === 'All Categories'
          ? data.docs
          : data.docs.filter((model) => model.title.toLowerCase().includes(search.toLowerCase()))
      setFilteredData({ ...data, docs: filteredDocs })
    }
  }, 300)

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedFilter(event.target.value)
  }

  const handleCategoryFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const search = event.target.value
    if (data) {
      const filteredDocs =
        search === 'All Categories'
          ? data.docs
          : data.docs.filter((model) =>
              model.category.title.toLowerCase().includes(search.toLowerCase()),
            )
      setFilteredData({ ...data, docs: filteredDocs })
    }
  }

  if (loading) {
    return (
      <section className="container">
        <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
        <div className="w-full flex gap-8">
          <input
            className="w-3/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-base"
            type="text"
            placeholder="Search"
            onChange={handleFilter}
          />
          <select
            className="w-1/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-md"
            name="categories"
            onChange={handleCategoryFilter}
          >
            <option value="All Categories">All Categories</option>
            {categories &&
              categories.docs.map((category, i) => (
                <option key={i} value={category?.title || ''}>
                  {category?.title || ''}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-8 py-8 items-center justify-center">
          <GallerySkeleton />
          <GallerySkeleton />
          <GallerySkeleton />
          <GallerySkeleton />
          <GallerySkeleton />
          <GallerySkeleton />
        </div>
      </section>
    )
  }

  return (
    <section className="container">
      <div className="flex">
        <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
      </div>
      <div className="w-full flex gap-8">
        <input
          className="w-3/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-base"
          type="text"
          placeholder="Search"
          onChange={handleFilter}
        />
        <select
          className="w-1/4 p-4 form-control outline outline-1 rounded-xl outline-slate-300 text-blackPrimary text-md"
          name="categories"
          onChange={handleCategoryFilter}
        >
          <option value="All Categories">All Categories</option>
          {categories &&
            categories.docs.map((category, i) => (
              <option key={i} value={category?.title || ''}>
                {category?.title || ''}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row gallery-container gap-8 xl:gap-20 py-12 items-center justify-center">
        {filteredData?.docs.map((model: DesignModel, i) => (
          <Link
            href={'/gallery/' + model?.slug}
            key={i}
            className="flex flex-col gap-4 w-full md:w-[45%] xl:w-1/4 h-fit rounded-3xl"
          >
            <GalleryCard
              featuredImageUrl={model.featuredImage?.url || ''}
              featuredImageAlt={model.featuredImage?.alt || ''}
              title={model?.title || ''}
              categories={model.category?.title || ''}
              floorArea={model?.floorArea || ''}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
