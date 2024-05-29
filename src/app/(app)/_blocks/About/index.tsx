import React from 'react'
import type { AboutProps } from './types'
import HeaderTitleCard from '@/app/(app)/_components/HeaderTitleCard'
import Image from 'next/image'

export const About: React.FC<AboutProps & { id?: string }> = (props) => {
  const { header, description, milestones, featuredImage } = props
  return (
    <>
      <section className="bg-lightGray py-6 my-8">
        <div className="container flex flex-col gap-8 pb-8">
          <HeaderTitleCard blockHeader={header} blockDescription={description} />
          <div className="flex flex-col lg:flex-row lg:h-[fit] gap-8">
            <div className="relative w-full lg:w-1/2 h-[200px] md:h-[400px] lg:h-auto rounded-3xl bg-slate-200 overflow-hidden">
              <Image
                src={featuredImage?.url || ''}
                unoptimized
                fill
                className="z-0 object-cover"
                sizes="(min-width: 1540px) 708px, (min-width: 1280px) 604px, (min-width: 1040px) 476px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
                alt={featuredImage?.alt || ''}
              ></Image>
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 w-full lg:w-1/2 h-full gap-8">
              {milestones?.map((milestone: any, index: any) => {
                if (index === 1) {
                  return (
                    <div
                      key={index}
                      className="w-full h-fit bg-primary text-white rounded-3xl flex flex-col px-6 py-12"
                    >
                      <h1 className="text-2xl font-semibold">{milestone.value}+</h1>
                      <h3 className="text-base font-semibold">{milestone.label}</h3>
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className="w-full h-fit bg-white rounded-3xl flex flex-col px-6 py-12"
                    >
                      <h1 className="text-2xl font-semibold">{milestone.value}+</h1>
                      <h3 className="text-base font-semibold">{milestone.label}</h3>
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
