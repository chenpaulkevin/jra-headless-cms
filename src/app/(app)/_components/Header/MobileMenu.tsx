'use client'

import React, { useState, useCallback } from 'react'
import { orbitron } from '../../../../assets/fonts'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { debounce } from 'lodash'

interface NavLink {
  label: string
  link: {
    slug?: string
  }
}

interface HeaderProps {
  navLinks: NavLink[]
}

export default function MobileMenu({ header }: { header: HeaderProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleMenuClick = useCallback(
    debounce(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen)
    }, 200),
    [],
  )

  return (
    <div className="lg:hidden bg-white">
      <div
        onClick={handleMenuClick}
        className={
          'h-12 w-12 z-[15] relative flex flex-col justify-center items-center rounded-xl cursor-pointer ' +
          (isOpen ? 'open' : 'close')
        }
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <div className="w-6 md:w-7 line-top"></div>
        <div className="w-6 md:w-7 line-mid"></div>
        <div className="w-6 md:w-7 line-bot"></div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            onAnimationComplete={() => setIsDrawerOpen(true)}
            initial={{ x: '100%' }}
            animate={{ x: '0%', transition: { duration: 0.4, ease: 'easeInOut' } }}
            exit={{ x: '100%', transition: { duration: 0.4, ease: 'easeInOut' } }}
            className={
              orbitron.className +
              ' w-[100dvw] h-[100dvh] px-12 absolute top-0 left-0 z-[10] bg-blackPrimary'
            }
          >
            <AnimatePresence mode="wait">
              {isDrawerOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="container w-full h-full flex flex-col gap-4 text-white text-2xl md:text-4xl justify-center items-end font-black"
                >
                  {header.navLinks.map((homeLinks, i) => {
                    if (
                      typeof homeLinks.link === 'object' &&
                      homeLinks.link !== null &&
                      'slug' in homeLinks.link
                    ) {
                      return (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          key={i}
                          onClick={handleMenuClick}
                        >
                          <Link
                            href={homeLinks.link.slug === 'index' ? '/' : '/' + homeLinks.link.slug}
                          >
                            {homeLinks.label}
                          </Link>
                        </motion.div>
                      )
                    }
                    return null
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
