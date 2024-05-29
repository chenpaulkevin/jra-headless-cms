import React from 'react'
import Image from 'next/image'
import ImageLoader from '../ImageLoader'

interface ImageModalProps {
  setIsModalOpen: any
  src: string
  alt: string
  width: string
  height: string
}

const ImageModal: React.FC<ImageModalProps> = ({ setIsModalOpen, src, alt, width, height }) => {
  const imageWidth = parseInt(width) / 2
  const imageHeight = parseInt(height) / 2
  const imageHeightClass = imageHeight.toString() + 'px'
  const imageWidthClass = imageWidth.toString() + 'px'
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false)
    }
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-25"
      onClick={handleBackgroundClick}
    >
      <div
        onClick={handleBackgroundClick}
        className="bg-white leading-none rounded-full h-12 w-12 flex justify-center items-center cursor-pointer font-bold text-lg absolute top-4 right-4"
      >
        x
      </div>
      <div className="bg-white relative">
        <Image
          unoptimized
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          priority
          className="object-cover"
        ></Image>
      </div>
    </div>
  )
}

export default ImageModal
