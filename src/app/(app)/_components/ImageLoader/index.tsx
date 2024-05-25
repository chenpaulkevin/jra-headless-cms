'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ImageLoader({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {}, [isLoaded])
  const imageLoad = () => {
    setIsLoaded(true)
  }
  return (
    <>
      <div
        className={
          isLoaded
            ? 'hidden'
            : '' + ' top-0 left-0 w-full h-full absolute bg-slate-200 animate-pulse'
        }
      ></div>
      <Image
        src={src || ''}
        unoptimized
        priority={true}
        onLoad={() => imageLoad()}
        fill
        className={(isLoaded ? '' : 'hidden') + ' z-0 object-cover object-center'}
        sizes="(min-width: 1540px) 708px, (min-width: 1280px) 604px, (min-width: 1040px) 476px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
        alt={alt || ''}
      ></Image>
    </>
  )
}
