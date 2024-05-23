import React from 'react'
import { orbitron } from '@/assets/fonts'

export default function HeaderTitleCard({
  blockHeader,
  blockDescription,
}: {
  blockHeader?: string
  blockDescription?: string
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full py-6">
      <div className="flex w-full lg:w-1/2">
        {' '}
        <h1
          className={
            orbitron.className + ' title-clamp font-semibold leading-normal text-blackPrimary'
          }
        >
          {blockHeader ? blockHeader : 'Check out the latest trends in home building'}
        </h1>
      </div>
      <div className="w-full lg:w-1/3">
        <p className="text-md xl:text-base text-gray lg:leading-loose">
          {blockDescription
            ? blockDescription
            : 'Stay ahead of the curve with our comprehensive guide to the latest trends in home building.'}
        </p>
      </div>
    </div>
  )
}
