import React from 'react'
import { orbitron } from '@/assets/fonts'
import ImageLoader from '../../_components/ImageLoader'
import { CardWithTitleProps } from './types'

export const CardWithTitle: React.FC<CardWithTitleProps & { id?: string }> = (props) => {
  const { cards } = props
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-between items-center text-blackPrimary my-8">
          {cards.map((card, i) => (
            <div key={i} className="w-full  flex flex-col lg:h-[520px] gap-4 lg:gap-8">
              <div className="w-full h-[350px] relative overflow-hidden rounded-2xl">
                <ImageLoader src={card.image.url} alt={card.image.alt}></ImageLoader>
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className={orbitron.className + ' text-lg lg:text-xl font-bold w-full'}>
                  {card.label}
                </h1>
                <p className="text-base text-gray lg:leading-loose w-full lg:line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
