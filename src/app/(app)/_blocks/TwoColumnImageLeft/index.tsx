import React from 'react'
import type { TwoColumnImageLeftProps } from './types'
import { orbitron } from '@/assets/fonts'
import ImageLoader from '../../_components/ImageLoader'

export const TwoColumnImageLeft: React.FC<TwoColumnImageLeftProps & { id?: string }> = (props) => {
  const { header, subheader, featuredImage } = props
  return (
    <>
      <section>
        <div className="container text-blackPrimary py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex flex-col w-full lg:w-1/2 gap-8 pl-4">
              {header && (
                <h1 className={orbitron.className + ' title-clamp font-bold leading-tight'}>
                  {header}
                </h1>
              )}
              {subheader && <h3 className="text-gray lg:text-base">{subheader}</h3>}
            </div>
            <div className="flex w-full lg:w-1/2 order-last lg:order-first">
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
