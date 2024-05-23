import React from 'react'
import Image from 'next/image'
type TestimonialCardProps = {
  title: string
  description: string
  customerName: string
  service: string
  rating: string
  customerImage?: string // customerImage is optional
}

export default function TestimonialCard({
  title,
  description,
  customerName,
  service,
  rating,
  customerImage,
}: TestimonialCardProps) {
  let customerRating = parseInt(rating)
  let stars = ''
  for (let index = 0; index < customerRating; index++) {
    stars += '★'
  }
  return (
    <>
      <div className="flex flex-col w-full xl:w-1/3 bg-lightGray rounded-2xl py-6 px-10 h-fit xl:h-[400px]">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="text-xl text-primary flex gap-2 mb-4">{stars}</div>
        <div className="text-base">{description}</div>
        <div className="flex items-center gap-6 self-end mt-auto pt-8">
          <div className="flex flex-col items-end">
            <p className="text-base">{customerName}s</p>
            <p>{service}</p>
          </div>
          <div className="h-20 w-20 bg-white rounded-full relative overflow-hidden">
            <Image
              unoptimized
              src={customerImage ? customerImage : '/user.png'}
              fill
              sizes="(min-width: 440px) 60px, calc(20vw - 24px)"
              className="object-fill"
              alt="Profile Picture"
            ></Image>
          </div>
        </div>
      </div>
    </>
  )
}
