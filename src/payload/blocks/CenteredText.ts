import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const CenteredText: Block = {
  slug: 'centeredText',
  labels: {
    singular: 'Centered Text Block',
    plural: 'Centered Text Blocks',
  },
  imageURL: '/_thumbnails/CenteredText.png',
  fields: [
    {
      label: 'Title Text',
      name: 'header',
      required: true,
      type: 'text',
      minLength: 1,
      maxLength: 80,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(80),
        },
      },
    },
    {
      label: 'Subtitle Text (Optional)',
      name: 'subheader',
      type: 'textarea',
      maxLength: 300,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(300),
        },
      },
    },
  ],
}
