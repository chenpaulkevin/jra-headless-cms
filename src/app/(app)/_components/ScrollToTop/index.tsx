'use client'
import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export default function ScrollToTop() {
  const [isButtonHidden, setButtonHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous != undefined && latest > previous && latest > 50) {
      setButtonHidden(true)
    } else {
      setButtonHidden(false)
    }
  })
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <motion.div
      variants={{ visible: { y: '50%', opacity: 0 }, hidden: { y: '0%', opacity: 1 } }}
      initial={{ opacity: 0 }}
      animate={isButtonHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed bottom-8 right-8 z-[52] cursor-pointer"
      onClick={backToTop}
    >
      <div className="h-16 w-16 rounded-full bg-primary border border-6 border-white text-white flex justify-center items-center">
        <FaArrowUp size={20} />
      </div>
    </motion.div>
  )
}
