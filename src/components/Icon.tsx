import React from 'react'
import Image from 'next/image'
import mark from './markWhite.svg'

const Icon: React.FC = () => (
  <div className="icon w-5 h-fit mix-blend-difference">
    <Image width={20} height={20} src={mark} alt="Apexcode Logo" />
  </div>
)

export default Icon
