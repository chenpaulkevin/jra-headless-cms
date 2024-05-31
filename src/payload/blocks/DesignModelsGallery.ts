import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const DesignModelsGallery: Block = {
  slug: 'designModelsGallery',
  labels: {
    singular: 'Design Model Gallery Component',
    plural: 'Design Model Gallery Components',
  },
  imageURL: '/_thumbnails/ContactForm.jpg',
  fields: [
    {
      label: 'Block Header',
      name: 'blockHeader',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 40,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(40),
        },
      },
    },
    {
      label: 'Block Description',
      name: 'blockDescription',
      required: true,
      type: 'textarea',
      minLength: 10,
      maxLength: 100,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(100),
        },
      },
    },
  ],
}
