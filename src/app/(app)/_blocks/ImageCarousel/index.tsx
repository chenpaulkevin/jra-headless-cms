'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { ImageCarouselProps } from './types'
import ImageLoader from '../../_components/ImageLoader'
import useEmblaCarousel from 'embla-carousel-react'

export const ImageCarousel: React.FC<ImageCarouselProps & { id?: string }> = (props) => {
  const { slider } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const updateCurrent = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    updateCurrent()
  }, [emblaApi, updateCurrent])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    updateCurrent()
  }, [emblaApi, updateCurrent])

  const handleDotClick = (index: any) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
    updateCurrent()
  }
  return (
    <section className="container py-8">
      <div className="embla mx-auto w-full lg:w-3/4">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container aspect-video">
            {slider.map((slide: any, index: any) => (
              <div
                key={index}
                className="embla__slide relative h-full bg-lightGray flex justify-center items-center text-xl font-bold rounded-3xl overflow-hidden shadow-sm"
              >
                <Image
                  src={slide.image.url}
                  unoptimized
                  alt={slide.image.alt}
                  fill
                  className="object-contain p-4 lg:p-8 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full py-4 px-4">
          <div className="flex gap-4 items-center">
            <button className="embla__prev text-primary text-2xl font-bold" onClick={scrollPrev}>
              ←
            </button>
            <button className="embla__next text-primary text-2xl font-bold" onClick={scrollNext}>
              →
            </button>
          </div>

          <div className="flex gap-4 items-center">
            {slider.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full ${
                  index === selectedIndex
                    ? 'bg-primary w-6 h-6 '
                    : 'outline outline-1 outline-primary w-4 h-4 '
                }`}
              >
                <span className="sr-only">go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}