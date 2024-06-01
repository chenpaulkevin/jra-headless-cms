import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { isAdmin } from '../access/isAdmin'
import { GlobalConfig } from 'payload/types'

export const Metadata: GlobalConfig = {
  slug: 'metadata',
  label: 'Metadata Configurations',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    description: "Configure your web application's global metadata.",
  },

  fields: [
    {
      name: 'icon',
      label: 'Web Icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: 'SEO Image',
      name: 'seoImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Web Title',
          type: 'text',
          required: true,
          maxLength: 100,
          admin: {
            components: {
              Description: () => CharacterCounterWrapper(100),
            },
          },
        },
        {
          name: 'description',
          label: 'Web Description',
          type: 'textarea',
          required: true,
          maxLength: 200,
          admin: {
            components: {
              Description: () => CharacterCounterWrapper(200),
            },
          },
        },
      ],
    },
    {
      type: 'array',
      name: 'keywords',
      label: 'Keywords',
      minRows: 1,
      maxRows: 8,
      required: true,
      fields: [
        {
          type: 'text',
          name: 'keyword',
          label: 'Keyword',
          required: true,
          maxLength: 40,
          admin: {
            components: {
              Description: () => CharacterCounterWrapper(40),
            },
          },
        },
      ],
    },
  ],
}
