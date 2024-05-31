'use client'
import React, { useState, useEffect } from 'react'
import LatestDesignModels from '../../_components/LatestDesignModels'
import RichTextParser from '@/utilities/RichTextParser'
import ImageLoader from '../../_components/ImageLoader'
import useEmblaCarousel from 'embla-carousel-react'
import ImageModal from '../../_components/ImageModal/page'
import Blocks from '../../../../app/(app)/_components/Blocks'

export default function GalleryParser({ designModel }: { designModel: any }) {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <section className="text-blackPrimary pt-8">
        <div className="container flex flex-col">
          <div className="w-full h-[400px] lg:h-[780px] rounded-3xl overflow-hidden relative shadow-sm p-8 lg:p-12 flex justify-between">
            <div className="z-[3] px-8 py-4 bg-white bg-opacity-80 rounded-3xl outline outline-1 outline-lightGray h-fit hidden lg:flex">
              <h1 className="card-title-clamp font-bold text-primaryBlack whitespace-nowrap text-center">
                {designModel?.title}
              </h1>
            </div>
            <div className="z-[3] flex-col justify-between hidden lg:flex">
              <div className="flex text-sm font-semibold text-primaryBlack gap-4 z-[3]">
                <p className="p-4 bg-white bg-opacity-80 rounded-3xl outline outline-1 outline-lightGray">
                  {designModel?.floorArea} square meters
                </p>
                <p className="p-4 bg-white bg-opacity-80 rounded-3xl outline outline-1 outline-lightGray">
                  {(designModel?.category as { title: string })?.title}
                </p>
              </div>
              <div
                onClick={() => setModalOpen(!isModalOpen)}
                className="lg:flex z-[3] relative w-80 h-80 overflow-hidden aspect-square bg-white bg-opacity-80 rounded-3xl outline outline-1 outline-lightGray self-end cursor-pointer"
              >
                <ImageLoader
                  src={(designModel?.floorPlanImage as { url: string })?.url}
                  alt={(designModel?.floorPlanImage as { alt: string })?.alt}
                ></ImageLoader>
              </div>
            </div>
            <ImageLoader
              src={(designModel?.featuredImage as { url: string })?.url}
              alt={(designModel?.featuredImage as { alt: string })?.alt}
            ></ImageLoader>
          </div>
          <div className="flex flex-col mt-8 lg:hidden">
            <h1 className="title-clamp font-bold">{designModel?.title}</h1>
            <div className="flex text-base font-semibold text-gray gap-4">
              <p>{designModel?.floorArea} square meters</p>
              <span>-</span>
              <p>{(designModel?.category as { title: string })?.title}</p>
            </div>
          </div>
          <div className="w-full justify-center items-center flex text-base text-blackPrimary leading-loose my-8 lg:my-16">
            <div className="w-full lg:w-3/4 px-8 lg:px-0">
              <RichTextParser content={designModel?.content}></RichTextParser>
            </div>
          </div>
          {designModel.layout.length !== 0 && <Blocks blocks={designModel?.layout} locale="en" />}
          <LatestDesignModels />
        </div>
        {isModalOpen && (
          <ImageModal
            setIsModalOpen={setModalOpen}
            src={(designModel?.floorPlanImage as { url: string })?.url}
            width={(designModel?.floorPlanImage as { width: string })?.width}
            height={(designModel?.floorPlanImage as { height: string })?.height}
            alt={(designModel?.floorPlanImage as { alt: string })?.alt}
          />
        )}
      </section>
    </>
  )
}
