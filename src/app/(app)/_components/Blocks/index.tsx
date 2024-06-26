import React from 'react'

import { CenteredText } from '../../_blocks/CenteredText'
import { Hero } from '../../_blocks/Hero'
import { About } from '../../_blocks/About'
import { HeaderAndDescription } from '../../_blocks/HeaderAndDescription'
import { BlogCollection } from '../../_blocks/BlogCollection'
import { CardWithTitle } from '../../_blocks/CardWithTitle'
import { FullWidthImage } from '../../_blocks/FullWidthImage'
import { Testimonials } from '../../_blocks/Testimonials'
import { TwoColumnImageLeft } from '../../_blocks/TwoColumnImageLeft'
import { TwoColumnImageRight } from '../../_blocks/TwoColumnImageRight'
import { DesignModelsGallery } from '../../_blocks/DesignModelsGallery'
import { InfiniteBlogScroll } from '../../_blocks/InfiniteBlogScroll'
import { SimpleRichText } from '../../_blocks/SimpleRichText'
import { FormBlock } from '../../_blocks/Form'
import { ImageCarousel } from '../../_blocks/ImageCarousel'

export type AdditionalBlockProps = {
  blockIndex: number
  locale: string
}

const blockComponents = {
  centeredText: CenteredText,
  hero: Hero,
  about: About,
  headerAndDescription: HeaderAndDescription,
  blogCollection: BlogCollection,
  cardWithTitle: CardWithTitle,
  fullWidthImage: FullWidthImage,
  testimonialsBlock: Testimonials,
  twoColumnImageLeft: TwoColumnImageLeft,
  twoColumnImageRight: TwoColumnImageRight,
  designModelsGallery: DesignModelsGallery,
  infiniteBlogScroll: InfiniteBlogScroll,
  simpleRichText: SimpleRichText,
  formBlock: FormBlock,
  imageCarousel: ImageCarousel,
}

const Blocks = ({ blocks, locale }: any) => {
  return (
    <>
      {blocks
        ?.filter(
          (block: any) =>
            block && block.blockType && blockComponents.hasOwnProperty(block.blockType),
        )
        .map((block: any, ix: number): React.ReactNode => {
          // @ts-ignore
          const BlockComponent = blockComponents[block.blockType] ?? null
          return BlockComponent ? (
            <BlockComponent key={ix} {...block} blockIndex={ix} locale={locale} />
          ) : null
        })}
    </>
  )
}

export default Blocks
