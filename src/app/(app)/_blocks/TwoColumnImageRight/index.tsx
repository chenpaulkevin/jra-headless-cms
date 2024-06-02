import React from 'react'
import type { TwoColumnImageRightProps } from './types'
import Image from 'next/image'
import { orbitron } from '@/assets/fonts'
import ImageLoader from '../../_components/ImageLoader'

export const TwoColumnImageRight: React.FC<TwoColumnImageRightProps & { id?: string }> = (
  props,
) => {
  const { header, subheader, featuredImage } = props
  return (
    <>
      <section>
        <div className="container text-blackPrimary py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center order-last lg:order-first">
            <div className="flex flex-col w-full lg:w-1/2 gap-8 pl-4">
              <h1 className={orbitron.className + ' title-clamp font-bold leading-tight'}>
                {header}
              </h1>
              <h3 className="text-gray lg:text-base">{subheader}</h3>
            </div>
            <div className="flex w-full lg:w-1/2">
              <div className="w-full h-[350px] lg:h-[500px] overflow-hidden rounded-3xl relative">
                <ImageLoader src={featuredImage.url} alt={featuredImage.alt}></ImageLoader>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
