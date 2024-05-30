import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const TwoColumnImageRight: Block = {
  slug: 'twoColumnImageRight',
  labels: {
    singular: 'Two Column Image Right Block',
    plural: 'Two Column Image Right Blocks',
  },
  imageURL: '/_thumbnails/ImageRight.png',
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
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
  ],
}
