import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const TwoColumnImageLeft: Block = {
  slug: 'twoColumnImageLeft',
  labels: {
    singular: 'Two Column Image Left Block',
    plural: 'Two Column Image Left Blocks',
  },
  imageURL: '/_thumbnails/ImageLeft.png',
  fields: [
    {
      label: 'Title Text',
      name: 'header',
      required: true,
      type: 'text',
      minLength: 1,
      maxLength: 120,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(120),
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
    {
      label: 'Featured Image',
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
