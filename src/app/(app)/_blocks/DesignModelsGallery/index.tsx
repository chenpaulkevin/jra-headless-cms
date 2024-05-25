import React, { Suspense } from 'react'
import HeaderTitleCard from '../../_components/HeaderTitleCard'
import { DesignModelsGalleryProps } from './types'
import FetchGallery from './fetchGallery'
import Loading from './loading'

export const DesignModelsGallery: React.FC<DesignModelsGalleryProps & { id?: string }> = (
  props,
) => {
  const { blockHeader, blockDescription } = props

  return (
    <>
      <section className="container">
        <div className="flex">
          <HeaderTitleCard blockHeader={blockHeader} blockDescription={blockDescription} />
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row gallery-container gap-8 xl:gap-16 py-8 items-center justify-center">
          <Suspense fallback={<Loading />}>
            <FetchGallery />
          </Suspense>
        </div>
      </section>
    </>
  )
}
