'use client'
import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    transform: 'translateY(0%)',
  },
  animate: {
    transform: 'translateY(100%)',
  },
  exit: {
    transform: 'translateY(0%)',
  },
}

const reverseIndex = (index: any) => {
  const totalSteps = 6
  return totalSteps - index - 1
}

const Stairs: React.FC = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut', delay: reverseIndex(index) * 0.1 }}
            className="h-[100dvh] w-1/6 bg-primary will-change-transform"
          ></motion.div>
        )
      })}
    </>
  )
}

export default Stairs
