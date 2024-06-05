'use client'
import React, { useState } from 'react'
import LatestDesignModels from '../../_components/LatestDesignModels'
import RichTextParser from '@/utilities/RichTextParser'
import ImageLoader from '../../_components/ImageLoader'
import Blocks from '../../../../app/(app)/_components/Blocks'
import Image from 'next/image'
import {
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdOutlinePhotoSizeSelectSmall,
} from 'react-icons/md'

export default function GalleryParser({ designModel }: { designModel: any }) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

  const handleImageClick = (imageUrl: string) => {
    setFullScreenImage(imageUrl)
    setIsFullScreen(true)
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    setFullScreenImage(null)
  }

  return (
    <>
      <section className="text-blackPrimary pt-8">
        <div className="container flex flex-col">
          <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-center mb-8 md:mb-4">
            <h1 className="title-clamp font-bold text-primaryBlack whitespace-nowrap truncate">
              {designModel?.title || ''}
            </h1>
            <div className="flex text-sm font-semibold text-primaryBlack gap-4">
              <p className="px-6 py-2 bg-white rounded-3xl outline outline-1 outline-lightGray shadow-sm">
                {(designModel?.category as { title: string })?.title || ''}
              </p>
            </div>
          </div>
          <div
            className="w-full h-[400px] lg:h-[780px] rounded-3xl overflow-hidden relative shadow-sm p-8 lg:p-12 flex justify-between cursor-zoom-in"
            onClick={() =>
              handleImageClick((designModel?.featuredImage as { url: string })?.url || '')
            }
          >
            <ImageLoader
              src={(designModel?.featuredImage as { url: string })?.url || ''}
              alt={(designModel?.featuredImage as { alt: string })?.alt || ''}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-16 pt-8 lg:px-16">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8 text-blackPrimary items-center">
                <div className="text-xl">
                  <MdOutlinePhotoSizeSelectSmall />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">{designModel?.floorArea || ''}m² floor area</p>
                  <p className="text-md text-slate-500">
                    Enjoy {designModel?.floorArea || ''} square meters of thoughtfully designed
                    space, perfect for relaxing and unwinding.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 text-blackPrimary items-center">
                <div className="text-xl">
                  <MdOutlineBedroomParent />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">{designModel?.bedrooms || ''} Bedrooms</p>
                  <p className="text-md text-slate-500">
                    Escape to {designModel?.bedrooms || ''} cozy bedrooms, each designed to offer a
                    serene retreat after a day of adventure.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 text-blackPrimary items-center">
                <div className="text-xl">
                  <MdOutlineBathroom />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">{designModel?.comfortRooms || ''} Comfort Rooms</p>
                  <p className="text-md text-slate-500">
                    Refresh and rejuvenate in {designModel?.comfortRooms || ''} modern comfort
                    rooms, complete with all the essentials for your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="floorplan relative h-[400px] w-full p-8 cursor-zoom-in"
              onClick={() =>
                handleImageClick((designModel?.floorPlanImage as { url: string })?.url)
              }
            >
              <Image
                src={(designModel?.floorPlanImage as { url: string })?.url}
                alt={(designModel?.floorPlanImage as { alt: string })?.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full justify-center items-center flex text-base text-blackPrimary leading-loose my-8 lg:my-16">
            <div className="w-full lg:w-3/4 px-8 lg:px-0">
              <RichTextParser content={designModel?.content} />
            </div>
          </div>
          {designModel.layout.length !== 0 && <Blocks blocks={designModel?.layout} locale="en" />}
          <LatestDesignModels />
        </div>
      </section>

      {isFullScreen && fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center p-8"
          onClick={closeFullScreen}
        >
          <button
            className="absolute top-4 right-4 text-primary text-2xl h-14 w-14 flex items-center justify-center rounded-full bg-white"
            onClick={closeFullScreen}
            aria-label="Close Full-Screen"
          >
            &times;
          </button>
          <div className="relative w-full h-full max-w-4xl">
            <Image
              src={fullScreenImage}
              alt="Full-Screen Image"
              layout="fill"
              objectFit="contain"
              className="cursor-zoom-out"
            />
          </div>
        </div>
      )}
    </>
  )
}
