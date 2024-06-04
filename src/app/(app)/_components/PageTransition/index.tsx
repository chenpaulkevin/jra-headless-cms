'use client'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

export default function PageTransition() {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-[100dvh] w-[100dvw] fixed top-0 left-0 right-0 pointer-events-none z-[54] flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}
