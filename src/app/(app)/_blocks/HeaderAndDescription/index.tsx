import React from 'react'
import HeaderTitleCard from '@/components/HeaderTitleCard/'
import type { HeaderAndDescriptionProps } from './types'

export const HeaderAndDescription: React.FC<HeaderAndDescriptionProps & { id?: string }> = (
  props,
) => {
  const { header, description } = props
  return (
    <>
      <section className="flex container py-8 w-full">
        <HeaderTitleCard blockHeader={header} blockDescription={description} />
      </section>
    </>
  )
}
