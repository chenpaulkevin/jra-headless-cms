'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import PrimaryButton from '../PrimaryButton'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({ header }: { header: any }) {
  const [isNavHidden, setNavHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous != undefined && latest > previous && latest > 50) {
      setNavHidden(true)
    } else {
      setNavHidden(false)
    }
  })
  return (
    <>
      {Object.keys(header.navLinks).length !== 0 && (
        <motion.nav
          variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
          animate={isNavHidden ? 'hidden' : 'visible'}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed top-0 z-50 w-full flex items-center justify-center"
        >
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
                  header?.navLinks.map((homeLinks: any, i: any) => {
                    if (
                      typeof homeLinks.link === 'object' &&
                      homeLinks.link !== null &&
                      'slug' in homeLinks.link
                    ) {
                      return (
                        <div key={i}>
                          <Link
                            href={
                              homeLinks.link?.slug === 'index' ? '/' : '/' + homeLinks.link?.slug
                            }
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
              <AnimatePresence mode="wait">
                {header.cta[0] && <MobileMenu header={header}></MobileMenu>}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  )
}
