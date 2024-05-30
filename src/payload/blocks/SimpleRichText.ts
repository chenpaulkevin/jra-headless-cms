import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const SimpleRichText: Block = {
  slug: 'simpleRichText',
  labels: {
    singular: 'Simple Rich Text Block',
    plural: 'Simple Rich Text Blocks',
  },
  imageURL: '/_thumbnails/SimpleRichTextRenderer.png',
  fields: [
    {
      label: 'Body',
      name: 'body',
      type: 'richText',
    },
  ],
}
