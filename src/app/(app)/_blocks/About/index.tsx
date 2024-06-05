import React from 'react'
import type { AboutProps } from './types'
import HeaderTitleCard from '@/app/(app)/_components/HeaderTitleCard'
import ImageLoader from '../../_components/ImageLoader'

export const About: React.FC<AboutProps & { id?: string }> = (props) => {
  const { header, description, milestones, featuredImage } = props
  return (
    <>
      <section className="bg-lightGray py-6 my-8">
        <div className="container flex flex-col gap-8 pb-8">
          <HeaderTitleCard blockHeader={header} blockDescription={description} />
          <div className="flex flex-col lg:flex-row lg:h-[fit] gap-8">
            <div className="relative w-full lg:w-1/2 h-[200px] md:h-[400px] lg:h-auto rounded-3xl bg-slate-200 overflow-hidden">
              <ImageLoader
                src={featuredImage?.url || ''}
                alt={featuredImage?.alt || ''}
              ></ImageLoader>
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 w-full lg:w-1/2 h-full gap-8">
              {milestones?.map((milestone: any, index: any) => {
                if (index === 1) {
                  return (
                    <div
                      key={index}
                      className="w-full h-fit bg-primary text-white rounded-3xl flex flex-col px-6 py-12"
                    >
                      <h1 className="text-2xl font-semibold">{milestone?.value}+</h1>
                      <p className="text-base font-semibold">{milestone?.label}</p>
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className="w-full h-fit bg-white rounded-3xl flex flex-col px-6 py-12"
                    >
                      <h1 className="text-2xl font-semibold">{milestone?.value}+</h1>
                      <p className="text-base font-semibold">{milestone?.label}</p>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
