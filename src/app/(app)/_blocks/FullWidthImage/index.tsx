'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FullWidthImageProps } from './types'
import ImageLoader from '../../_components/ImageLoader'

export const FullWidthImage: React.FC<FullWidthImageProps & { id?: string }> = (props) => {
  const { image } = props
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {}, [isLoaded])

  const imageLoad = () => {
    setIsLoaded(true)
    console.log('set')
  }
  return (
    <section className="container py-8">
      <div className="w-full aspect-video overflow-hidden rounded-3xl relative">
        <ImageLoader src={image.url || ''} alt={image.alt || ''} />
      </div>
    </section>
  )
}
