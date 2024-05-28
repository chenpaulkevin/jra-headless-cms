import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import { orbitron } from '@/assets/fonts'
import type { Footer } from '../../../../../payload-types'

export async function Footer() {
  const payload = await getPayloadHMR({ config: configPromise })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })
  return (
    <>
      {Object.keys(footer.quickLinks).length !== 0 && (
        <footer className="container">
          <div className="bg-primary w-full h-fit rounded-3xl mt-8 mb-16 p-8 lg:p-16 text-white">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
              <div className="flex flex-col w-full lg:w-3/5 gap-4">
                {footer.title && (
                  <h1 className={orbitron.className + ' header-clamp font-black leading-tight'}>
                    {footer.title}
                  </h1>
                )}

                {footer.subheader && <p className="text-base lg:text-lg">{footer.subheader}</p>}
              </div>
              {footer.contactImageButton && (
                <div className="h-40 w-40 lg:w-56 lg:h-56 relative">
                  <Link
                    href={
                      (footer.contactImageButton[0]?.contactLink as { slug?: string })?.slug || ''
                    }
                  >
                    <Image
                      unoptimized
                      src={
                        (footer.contactImageButton[0]?.imageButton as { url?: string })?.url || ''
                      }
                      alt={
                        (footer.contactImageButton[0]?.imageButton as { alt?: string })?.alt || ''
                      }
                      fill
                      loading="lazy"
                      sizes="216px"
                      className="object-contain"
                    ></Image>
                  </Link>
                </div>
              )}
            </div>
            <div className="h-[1px] w-full bg-white my-12 lg:my-16"></div>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                {footer.logo && (
                  <div className="logo w-1/3">
                    <div className="relative w-72 h-24">
                      <Link href="/">
                        <Image
                          src={(footer?.logo as { url?: string })?.url || ''}
                          unoptimized
                          fill
                          loading="lazy"
                          quality={100}
                          sizes="216px"
                          alt={(footer?.logo as { alt?: string })?.alt || ''}
                          className="object-contain top-0 left-0"
                        ></Image>
                      </Link>
                    </div>
                  </div>
                )}
                {footer.motto && <p>{footer.motto}</p>}
                <div className="flex mt-8 gap-4">
                  {footer.socialMediaLinks.map((socialMediaLink, i) => {
                    return (
                      <Link key={i} href={socialMediaLink.url} target="_blank">
                        <div className="h-10 w-10 relative">
                          <Image
                            src={(socialMediaLink?.icon as { url?: string })?.url || ''}
                            alt={(socialMediaLink?.icon as { alt?: string })?.alt || ''}
                            unoptimized
                            fill
                            loading="lazy"
                            className="object-contain"
                            sizes="(max-width: 768px) 5vw, (max-width: 1200px) 5vw, 5vw"
                          ></Image>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-1/4 order-last lg:order-none">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-base">
                  {footer?.quickLinks.map((quickLink, i) => {
                    if (
                      typeof quickLink.link === 'object' &&
                      quickLink.link !== null &&
                      'slug' in quickLink.link
                    ) {
                      return (
                        <div key={i}>
                          <Link
                            href={quickLink.link.slug === 'index' ? '/' : '/' + quickLink.link.slug}
                          >
                            {' '}
                            {quickLink.label}
                          </Link>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-col w-1/4 w-full lg:w-1/4 gap-4">
                <h2 className="text-lg font-semibold">Location</h2>
                {footer?.location.map((location, i) => {
                  return (
                    <div key={i} className="flex flex-col">
                      <h3 className="text-base font-semibold">{location.city}</h3>
                      <p>{location.streetAddress}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}
