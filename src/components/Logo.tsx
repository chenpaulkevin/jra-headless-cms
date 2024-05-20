import React from 'react'
import Image from 'next/image'
import d from './logoWhite.svg'

const Logo: React.FC = () => (
  <div className="logo w-1/2 max-h-[200px] mix-blend-difference">
    <Image width={400} height={200} priority src={d} alt="Apexcode Logo" />
  </div>
)

export default Logo
