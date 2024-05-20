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
  fields: [
    {
      label: 'Title Text',
      name: 'header',
      required: true,
      type: 'text',
      minLength: 1,
      maxLength: 120,
      admin: {
        description: 'Max 120 characters',
      },
    },
    {
      label: 'Subtitle Text (Optional)',
      name: 'subheader',
      type: 'textarea',
      maxLength: 300,
      admin: {
        description: 'Max 300 characters',
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
