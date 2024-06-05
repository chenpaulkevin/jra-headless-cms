import React from 'react'
import { BlogCollectionProps } from './types'
import PrimaryButton from '../../_components/PrimaryButton'
import SecondaryMiniButton from '../../_components/SecondaryMiniButton'
import Image from 'next/image'
import Link from 'next/link'
import { orbitron } from '@/assets/fonts'

export const BlogCollection: React.FC<BlogCollectionProps & { id?: string }> = (props) => {
  const { blockHeader, mainFeature, secondaryFeature, thirdFeature, cta } = props
  return (
    <>
      <section className="py-6 my-8">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-end w-full">
            <div className="w-full lg:w-2/5">
              <h1
                className={
                  orbitron.className + ' title-clamp font-semibold leading-normal text-blackPrimary'
                }
              >
                {blockHeader}
              </h1>
            </div>
            <div className="w-full lg:w-3/5 lg:justify-end flex flex-col md:flex-row lg:pb-4">
              <PrimaryButton
                url={cta[0].ctaLink?.slug === 'index' ? '/' : cta[0].ctaLink?.slug || ''}
                title={cta[0]?.ctaLabel || ''}
              ></PrimaryButton>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="flex w-full flex-col lg:w-2/5 gap-8">
              <Link href={'/blog/' + secondaryFeature?.slug || '4 '}>
                <div className="h-[400px] w-full rounded-3xl overflow-hidden relative flex flex-col p-8 lg:p-12 text-white justify-end bg-slate-200">
                  <Image
                    src={secondaryFeature?.blogImage?.url || '' || ''}
                    fill
                    className="z-0 object-cover"
                    sizes="(min-width: 1540px) 566px, (min-width: 1280px) 483px, (min-width: 1040px) 381px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
                    alt={secondaryFeature?.blogImage?.alt || '' || ''}
                  ></Image>
                  <div className="px-4 py-2 rounded-lg bg-lightGray text-blackPrimary z-[1] self-end mb-auto">
                    Reading Time: {secondaryFeature?.readTime || ''} Mins
                  </div>
                  <p className="z-[1] text-base drop-shadow-sm">
                    {secondaryFeature?.categories?.title || ''}
                  </p>
                  <h1 className="text-lg md:text-xl z-[1] drop-shadow-sm font-medium leading-tight">
                    {secondaryFeature?.title || ''}
                  </h1>
                  <div className="w-full h-full bg-black opacity-30 absolute inset-0 z-[0]"></div>
                </div>
              </Link>
              <Link href={'/blog/' + thirdFeature?.slug || ''}>
                <div className="h-[400px] w-full rounded-3xl overflow-hidden relative flex flex-col p-8 lg:p-12 text-white justify-end bg-slate-200">
                  <Image
                    src={thirdFeature?.blogImage?.url || ''}
                    fill
                    className="z-0 object-cover"
                    sizes="(min-width: 1540px) 566px, (min-width: 1280px) 483px, (min-width: 1040px) 381px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
                    alt={thirdFeature?.blogImage?.alt || ''}
                  ></Image>
                  <div className="px-4 py-2 rounded-lg bg-lightGray text-blackPrimary z-[1] self-end mb-auto">
                    Reading Time: {thirdFeature?.readTime || ''} Mins
                  </div>
                  <p className="z-[1] text-base drop-shadow-sm">
                    {thirdFeature?.categories?.title || ''}
                  </p>
                  <h1 className="text-lg md:text-xl z-[1] drop-shadow-sm font-medium leading-tight">
                    {thirdFeature?.title || ''}
                  </h1>
                  <div className="w-full h-full bg-black opacity-30 absolute inset-0 z-[0]"></div>
                </div>
              </Link>
            </div>
            <div className="flex w-full lg:w-3/5">
              <Link href={'/blog/' + mainFeature?.slug || ''} passHref legacyBehavior>
                <div className="cursor-pointer lg:h-full h-[400px] w-full rounded-3xl relative overflow-hidden flex flex-col p-8 lg:p-12 text-white justify-end bg-slate-200">
                  <Image
                    src={mainFeature?.blogImage?.url || ''}
                    fill
                    className="z-0 object-cover"
                    sizes="(min-width: 1540px) 850px, (min-width: 1280px) 725px, (min-width: 1040px) 571px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
                    alt={mainFeature?.blogImage?.alt || ''}
                  ></Image>
                  <div className="px-4 py-2 rounded-lg bg-lightGray text-blackPrimary z-[1] self-end mb-auto">
                    Reading Time: {mainFeature?.readTime || ''} Mins
                  </div>
                  <p className="z-[1] text-base drop-shadow-sm">
                    {mainFeature?.categories?.title || ''}
                  </p>
                  <h1 className="text-lg md:text-xl lg:text-2xl z-[1] drop-shadow-sm font-medium leading-tight">
                    {mainFeature?.title}
                  </h1>
                  <div className="z-[1] mt-8 hidden lg:block">
                    <SecondaryMiniButton
                      url={'/blog/' + mainFeature?.slug || ''}
                      title={'Read Article →'}
                    />
                  </div>

                  <div className="w-full h-full bg-black opacity-30 absolute inset-0 z-[0]"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
