import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const FormBlock: Block = {
  slug: 'formBlock',
  labels: {
    singular: 'Form Block',
    plural: 'Form Block',
  },
  imageURL: '/_thumbnails/ContactForm.jpg',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      label: 'Enable 2 Column Layout',
      name: 'enable2ColumnLayout',
      type: 'checkbox',
    },
    {
      label: 'Form Header Text',
      name: 'header',
      type: 'text',
      required: true,
      minLength: 10,
      maxLength: 50,
      admin: {
        condition: (_, { enable2ColumnLayout }) => Boolean(enable2ColumnLayout),
        components: {
          Description: () => CharacterCounterWrapper(50),
        },
      },
    },
    {
      label: 'Form Header Text',
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        condition: (_, { enable2ColumnLayout }) => Boolean(enable2ColumnLayout),
      },
    },
  ],
}
