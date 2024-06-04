'use client'
import React, { useCallback, useEffect } from 'react'
import { ImageCarouselProps } from './types'
import ImageLoader from '../../_components/ImageLoader'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import AutoHeight from 'embla-carousel-auto-height'

export const ImageCarousel: React.FC<ImageCarouselProps & { id?: string }> = ({ slider }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: 'trimSnaps' }, [
    AutoHeight(),
  ])
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isFullScreen, setIsFullScreen] = React.useState(false)
  const [fullScreenIndex, setFullScreenIndex] = React.useState<number | null>(null)

  const updateCurrent = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', updateCurrent)
      updateCurrent()
    }
  }, [emblaApi, updateCurrent])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
      }
    },
    [emblaApi],
  )

  const handleImageClick = (index: number) => {
    setIsFullScreen(true)
    setFullScreenIndex(index)
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    setFullScreenIndex(null)
  }

  return (
    <>
      <section className="container py-8">
        <div className="embla mx-auto w-full lg:w-3/4">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container w-full h-[60dvh]">
              {slider.map((slide: any, index: number) => (
                <div
                  key={index}
                  className="embla__slide  cursor-zoom-in relative h-full bg-blackPrimary flex justify-center items-center text-xl font-bold rounded-3xl overflow-hidden shadow-sm mx-2"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={slide.image?.url || ''}
                    alt={slide.image?.alt || ''}
                    layout={'fill'}
                    objectFit={'contain'}
                    className="p-8"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full py-6 px-2">
            <div className="flex gap-4 items-center">
              <button
                className="embla__prev py-4 px-4 rounded-full bg-white text-primary outline outline-1 outline-primary text-lg flex justify-center items-center hover:bg-primary hover:text-white transition duration-250"
                onClick={scrollPrev}
                aria-label="Previous Slide"
              >
                <IoIosArrowBack />
              </button>
              <button
                className="embla__next py-4 px-4 rounded-full bg-white text-primary outline outline-1 outline-primary text-lg flex justify-center items-center hover:bg-primary hover:text-white transition duration-250"
                onClick={scrollNext}
                aria-label="Next Slide"
              >
                <IoIosArrowForward />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              {slider.map((slide: any, index: number) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`thumbnail rounded-full w-4 h-4 md:w-12 md:h-12 lg:w-16 lg:h-16 md:rounded overflow-hidden ${
                    index === selectedIndex
                      ? 'bg-primary md:bg-transparent md:shadow-sm'
                      : 'border border-1 border-primary md:border-0 md:opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={slide.image?.url || ''}
                    alt={slide.image?.alt || ''}
                    width={80}
                    height={80}
                    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-cover hidden md:flex"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isFullScreen && fullScreenIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-75 flex justify-center items-center p-8"
          onClick={closeFullScreen}
        >
          <button
            className="absolute top-4 right-4 text-primary text-2xl h-14 w-14 flex items-center justify-center rounded-full bg-white"
            onClick={closeFullScreen}
            aria-label="Close Full-Screen"
          >
            &times;
          </button>
          <div className="relative w-full h-full max-w-4xl">
            <Image
              src={slider[fullScreenIndex].image?.url || ''}
              alt={slider[fullScreenIndex].image?.alt || ''}
              layout="fill"
              objectFit="contain"
              className="cursor-zoom-out"
            />
          </div>
        </div>
      )}
    </>
  )
}
