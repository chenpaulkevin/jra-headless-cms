'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageLoaderProps {
  src: string
  alt: string
  sizes?: string
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, sizes }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {}, [isLoaded])

  const imageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <>
      <div
        className={
          (isLoaded && src ? 'hidden' : '') +
          ' top-0 z-1 left-0 w-full h-full absolute bg-slate-200 rounded-3xl animate-pulse flex justify-center items-center'
        }
      >
        <svg
          className="w-16 h-16 text-slate-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <Image
        src={src || ''}
        priority={true}
        onLoad={imageLoad}
        fill
        className={(isLoaded ? '' : 'hidden') + ' z-0 object-cover object-center'}
        sizes={sizes || '(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 80vw'}
        alt={alt || ''}
      />
    </>
  )
}

export default ImageLoader
