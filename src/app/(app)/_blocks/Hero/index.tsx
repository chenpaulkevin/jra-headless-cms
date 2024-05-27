import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { HeroProps } from './types'

import { orbitron } from '@/assets/fonts'
import PrimaryButton from '../../_components/PrimaryButton'
import SecondaryButton from '../../_components/SecondaryButton'
import SecondaryButtonSmall from '../../_components/SecondaryMiniButton'
import ImageLoader from '../../_components/ImageLoader'

export const Hero: React.FC<HeroProps & { id?: string }> = (props) => {
  const { id, headline, subHeadline, ctaHeadline, mainFeature, secondFeature, thirdFeature } = props
  return (
    <section className="text-blackPrimary my-4">
      <div className="flex flex-col lg:flex-row w-full h-fit lg:h-[750px] container gap-8 py-4">
        <div className="flex flex-col w-full lg:w-1/2 h-fit lg:h-full gap-12 lg:gap-8">
          <div className="flex flex-col w-full h-fit lg:h-3/5 rounded-3xl justify-between gap-8 lg:gap-4">
            <div className="flex flex-col w-full gap-8">
              {' '}
              <h1
                className={
                  orbitron.className +
                  ' md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight'
                }
              >
                {headline.split(' ').map((word, index) => {
                  if (index === 1) {
                    return (
                      <span className="text-primary" key={index}>
                        {word}{' '}
                      </span>
                    )
                  } else {
                    return (
                      <span className="text-blackPrimary" key={index}>
                        {word}{' '}
                      </span>
                    )
                  }
                })}
              </h1>
              <p className="text-sm md:text-md lg:text-base font-semibold text-gray w-full lg:w-5/6 leading-relaxed">
                {subHeadline}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 ">
              <PrimaryButton url={'#'} title={'View Models'}></PrimaryButton>
              <SecondaryButton url={'#'} title={'Learn More'}></SecondaryButton>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-2/5 bg-lightGray px-8 py-8 md:py-8 md:px-12 lg:px-16 lg:py-4 rounded-3xl">
            <h2 className="text-base md:text-lg text-center text-blackPrimary font-semibold">
              {ctaHeadline}
            </h2>
            <p className="text-3xl text-primary">✦</p>
            <hr className="mb-8 w-[100%] h-[1px] bg-gray" />
            <Link href="/#" className="text-gray font-semibold text-base">
              View Finished Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 h-fit lg:h-full gap-8">
          <div className="relative flex flex-col overflow-hidden justify-between w-full h-[300px] lg:h-3/5 rounded-3xl p-8 bg-center">
            <ImageLoader
              src={mainFeature.featuredImage.url || ''}
              alt={mainFeature.featuredImage.alt || ''}
            />
            <div className="w-fit z-[3]">
              <div className="px-4 py-2 uppercase text-sm bg-blackPrimary text-white rounded-lg">
                {mainFeature.title}
              </div>
            </div>
            <div className="self-end z-[3]">
              <SecondaryButtonSmall
                url={'/designModels/' + mainFeature.slug}
                title={'View Model →'}
              ></SecondaryButtonSmall>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-2/5 rounded-3xl gap-8">
            <div className="relative overflow-hidden flex flex-col justify-between w-full lg:w-1/2 h-[300px] lg:h-full rounded-3xl p-8">
              <ImageLoader
                src={secondFeature?.featuredImage.url || ''}
                alt={secondFeature?.featuredImage.alt || ''}
              />
              <div className="w-fit z-[3]">
                <div className="px-4 py-2 uppercase text-sm bg-blackPrimary text-white rounded-lg">
                  {secondFeature?.title}
                </div>
              </div>
              <div className="self-end z-[3]">
                <SecondaryButtonSmall
                  url={'/designModels/' + secondFeature?.slug}
                  title={'View Model →'}
                ></SecondaryButtonSmall>
              </div>
            </div>
            <div className="relative overflow-hidden flex flex-col justify-between w-full lg:w-1/2 h-[300px] lg:h-full rounded-3xl p-8">
              <ImageLoader
                src={thirdFeature?.featuredImage.url || ''}
                alt={thirdFeature?.featuredImage.alt || ''}
              />
              <div className="w-fit z-[3]">
                <div className="px-4 py-2 uppercase text-sm bg-blackPrimary text-white rounded-lg">
                  {thirdFeature?.title}
                </div>
              </div>
              <div className="self-end z-[3]">
                <SecondaryButtonSmall
                  url={'/designModels/' + thirdFeature?.slug}
                  title={'View Model →'}
                ></SecondaryButtonSmall>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
