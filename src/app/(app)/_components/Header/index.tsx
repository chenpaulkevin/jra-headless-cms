import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import type { Header } from '../../../../../payload-types'
import PrimaryButton from '../PrimaryButton'
import MobileMenu from './MobileMenu'

export async function Header() {
  const payload = await getPayloadHMR({ config: configPromise })
  const header = await payload.findGlobal({
    slug: 'header',
  })
  return (
    <nav className="fixed top-0 z-50 w-full mx-auto flex items-center justify-center">
      <div className="container my-8 mx-auto">
        <div className="outline outline-1 outline-lightGray bg-white py-3 lg:py-2 rounded-2xl px-4 lg:px-10 flex items-center justify-between shadow-sm">
          <div className="logo w-1/3">
            <div className="relative w-32 h-16 lg:w-52 lg:h-24">
              <Link href="/">
                {header.logo && (
                  <Image
                    src={(header?.logo as { url?: string })?.url || ''}
                    fill
                    unoptimized
                    priority
                    sizes="156px"
                    alt={(header?.logo as { alt?: string })?.alt || ''}
                    className="object-contain"
                  ></Image>
                )}
              </Link>
            </div>
          </div>
          <div className="gap-10 w-1/3 py-4 justify-center text-base font-semibold text-blackPrimary hidden lg:flex">
            {header?.navLinks &&
              header?.navLinks.map((homeLinks, i) => {
                if (
                  typeof homeLinks.link === 'object' &&
                  homeLinks.link !== null &&
                  'slug' in homeLinks.link
                ) {
                  return (
                    <div key={i}>
                      <Link
                        href={homeLinks.link?.slug === 'index' ? '/' : '/' + homeLinks.link?.slug}
                      >
                        {' '}
                        {homeLinks.label}
                      </Link>
                    </div>
                  )
                }
              })}
          </div>
          <div className="w-1/3 justify-end hidden lg:flex">
            {header.cta[0] && (
              <PrimaryButton
                url={
                  typeof header.cta[0].ctaLink === 'object' && 'slug' in header.cta[0].ctaLink
                    ? header.cta[0].ctaLink.slug === 'index'
                      ? '/'
                      : '/' + header.cta[0].ctaLink.slug
                    : ''
                }
                title={header.cta[0].ctaLabel}
              ></PrimaryButton>
            )}
          </div>
          {header.cta[0] && <MobileMenu header={header}></MobileMenu>}
        </div>
      </div>
    </nav>
  )
}
