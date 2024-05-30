import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const HeaderAndDescription: Block = {
  slug: 'headerAndDescription',
  labels: {
    singular: 'Header and Description',
    plural: 'Header and Descriptions',
  },
  imageURL: '/_thumbnails/HeaderAndDescription.png',
  fields: [
    {
      name: 'header',
      label: 'Block Header',
      required: true,
      type: 'text',
      minLength: 10,
      maxLength: 40,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(40),
        },
      },
    },
    {
      name: 'description',
      label: 'Block Description',
      type: 'textarea',
      required: true,
      minLength: 10,
      maxLength: 150,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(150),
        },
      },
    },
  ],
}
