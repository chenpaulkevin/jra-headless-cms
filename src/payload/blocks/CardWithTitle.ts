import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const CardWithTitle: Block = {
  slug: 'cardWithTitle',
  imageAltText: 'Block Thumbnail',
  labels: {
    singular: 'Card with title Block',
    plural: 'Card with title Block',
  },
  imageURL: '/_thumbnails/CardWithTitle.png',
  fields: [
    {
      label: 'Cards',
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 3,
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Card Label',
              name: 'label',
              type: 'text',
              required: true,
              minLength: 2,
              maxLength: 24,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(24),
                },
              },
            },
            {
              label: 'Card Description',
              name: 'description',
              type: 'text',
              required: true,
              minLength: 2,
              maxLength: 80,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(80),
                },
              },
            },
          ],
        },
        {
          label: 'Card Image',
          name: 'image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          admin: {
            description: 'Square image recommended',
          },
        },
      ],
    },
  ],
}
