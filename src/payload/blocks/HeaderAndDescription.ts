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
  fields: [
    {
      name: 'header',
      label: 'Block Header',
      required: true,
      type: 'text',
      minLength: 10,
      maxLength: 80,
      admin: {
        description: 'Max 80 characters',
      },
    },
    {
      name: 'description',
      label: 'Block Description',
      type: 'textarea',
      required: true,
      minLength: 10,
      maxLength: 200,
      admin: {
        description: 'Max 200 characters',
      },
    },
  ],
}
