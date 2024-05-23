import React from 'react'
import Image from 'next/image'
import { FullWidthImageProps } from './types'

export const FullWidthImage: React.FC<FullWidthImageProps & { id?: string }> = (props) => {
  const { image } = props
  return (
    <section className="container py-8">
      <div className="w-full aspect-video overflow-hidden rounded-3xl relative">
        <Image
          src={image.url}
          unoptimized
          priority
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          alt={image.alt}
          className="object-cover object-center"
        ></Image>
      </div>
    </section>
  )
}
