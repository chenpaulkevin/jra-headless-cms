import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const About: Block = {
  slug: 'about',
  labels: {
    singular: 'About Block',
    plural: 'About Blocks',
  },
  fields: [
    {
      label: 'About Header',
      name: 'header',
      required: true,
      type: 'text',
      minLength: 5,
      maxLength: 80,
    },
    {
      label: 'About Description',
      name: 'description',
      required: true,
      type: 'textarea',
      minLength: 10,
      maxLength: 150,
      admin: {
        description: 'Max 150 characters',
      },
    },
    {
      label: 'Company Milestones',
      name: 'milestones',
      type: 'array',
      required: true,
      maxRows: 4,
      minRows: 4,
      fields: [
        {
          label: 'Milestone Label',
          name: 'label',
          type: 'text',
          required: true,
          minLength: 2,
          maxLength: 20,
        },
        {
          label: 'Milestone Value',
          name: 'value',
          type: 'number',
          min: 1,
          max: 50000,
          required: true,
        },
      ],
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
