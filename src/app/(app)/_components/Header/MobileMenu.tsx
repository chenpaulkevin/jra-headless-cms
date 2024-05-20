'use client'
import React, { useState } from 'react'
import { orbitron } from '../../../../assets/fonts'
import Link from 'next/link'

export default function MobileMenu({ header }: { header: any }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="lg:hidden bg-white">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={
            'h-16 w-16 z-[15] relative flex flex-col justify-center items-center bg-primary rounded-xl cursor-pointer ' +
            (isOpen ? 'open' : 'close')
          }
        >
          <div className="w-6 md:w-7 line-top"></div>
          <div className="w-6 md:w-7 line-mid"></div>
          <div className="w-6 md:w-7 line-bot"></div>
        </div>
        {isOpen && (
          <div
            className={
              orbitron.className +
              ' w-[100dvw] h-[100dvh] px-12 absolute top-0 left-0 z-[10] bg-white'
            }
          >
            <div className="container w-full h-full flex flex-col gap-4 text-blackPrimary text-2xl md:text-4xl justify-center items-end font-black">
              {header.navLinks.map((homeLinks: any, i: any) => {
                if (
                  typeof homeLinks.link === 'object' &&
                  homeLinks.link !== null &&
                  'slug' in homeLinks.link
                ) {
                  return (
                    <div key={i} onClick={() => setIsOpen(!isOpen)}>
                      <Link
                        href={homeLinks.link.slug === 'index' ? '/' : '/' + homeLinks.link.slug}
                      >
                        {' '}
                        {homeLinks.label}
                      </Link>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
