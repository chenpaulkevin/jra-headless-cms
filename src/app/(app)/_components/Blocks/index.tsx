import React from 'react'

import type { Page } from '../../../../../payload-types'
import { toKebabCase } from 'payload/utilities'

import { CenteredText } from '../../_blocks/CenteredText'
import { Hero } from '../../_blocks/Hero'

export type AdditionalBlockProps = {
  blockIndex: number
  locale: string
}

const blockComponents = {
  centeredText: CenteredText,
  hero: Hero,
}

const Blocks = ({ blocks, locale }: any) => {
  return (
    <>
      {blocks
        ?.filter(
          (block: any) =>
            block && block.blockType && blockComponents.hasOwnProperty(block.blockType),
        )
        .map((block: any, ix: number) => {
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
