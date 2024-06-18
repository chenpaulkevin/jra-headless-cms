'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
            transitionEnd: {
              display: 'none',
            },
          }}
          className="bg-white z-[51] w-[100dvw] h-[100dvh] fixed top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  )
}
