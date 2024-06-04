import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { isAdmin } from '../access/isAdmin'
import { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header Configurations',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    description:
      'Configure your global navigation bar which includes the logo, site title and links to other pages.',
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          label: 'Logo',
          name: 'logo',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          label: 'Call To Action Button',
          name: 'cta',
          type: 'array',
          required: true,
          maxRows: 1,
          fields: [
            {
              label: 'Label',
              name: 'ctaLabel',
              type: 'text',
              required: true,
              minLength: 2,
              maxLength: 12,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(12),
                },
              },
            },
            {
              label: 'Slug / Link',
              name: 'ctaLink',
              type: 'relationship',
              required: true,
              relationTo: 'pages',
            },
          ],
        },
      ],
    },

    {
      label: 'Navigation Links',
      name: 'navLinks',
      type: 'array',
      required: true,
      maxRows: 5,
      fields: [
        {
          label: 'Label',
          name: 'label',
          type: 'text',
          required: true,
          minLength: 2,
          maxLength: 10,
          admin: {
            components: {
              Description: () => CharacterCounterWrapper(10),
            },
          },
        },
        {
          label: 'Slug / Link',
          name: 'link',
          type: 'relationship',
          required: true,
          relationTo: 'pages',
        },
      ],
    },
  ],
}
