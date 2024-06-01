import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { isAdmin } from '../access/isAdmin'
import { GlobalConfig } from 'payload/types'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Configurations',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    description: 'Configure your global footer which includes the logo, quick links and location.',
  },

  fields: [
    {
      label: 'Logo',
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      label: 'Call-To-Action Title',
      name: 'title',
      type: 'text',
      required: true,
      minLength: 1,
      maxLength: 80,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(80),
        },
      },
    },
    {
      label: 'Call-To-Action Subheader',
      name: 'subheader',
      type: 'textarea',
      required: true,
      minLength: 1,
      maxLength: 200,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(200),
        },
      },
    },
    {
      label: 'Contact Page Button Image',
      name: 'contactImageButton',
      type: 'array',
      maxRows: 1,
      minRows: 1,
      fields: [
        {
          label: 'Image Button',
          name: 'imageButton',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          label: 'Link to Contact Page',
          name: 'contactLink',
          type: 'relationship',
          required: true,
          relationTo: 'pages',
        },
      ],
    },
    {
      label: 'Company Motto',
      name: 'motto',
      type: 'text',
      minLength: 2,
      maxLength: 100,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(100),
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Quick Links',
          name: 'quickLinks',
          type: 'array',
          required: true,
          maxRows: 8,
          fields: [
            {
              label: 'Label',
              name: 'label',
              type: 'text',
              required: true,
              minLength: 2,
              maxLength: 20,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(20),
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
        {
          label: 'Location',
          name: 'location',
          type: 'array',
          required: true,
          maxRows: 2,
          minRows: 1,
          fields: [
            {
              label: 'City',
              name: 'city',
              type: 'text',
              required: true,
              minLength: 2,
              maxLength: 50,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(50),
                },
              },
            },
            {
              label: 'Street Address',
              name: 'streetAddress',
              type: 'textarea',
              required: true,
              minLength: 1,
              maxLength: 200,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(200),
                },
              },
            },
          ],
        },
      ],
    },
    {
      label: 'Social Media Links',
      name: 'socialMediaLinks',
      type: 'array',
      required: true,
      maxRows: 6,
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Name',
              type: 'text',
              name: 'name',
              required: true,
              minLength: 2,
              maxLength: 50,
              admin: {
                components: {
                  Description: () => CharacterCounterWrapper(50),
                },
              },
            },
            {
              label: 'Icon (24x24px and preferably white colored SVG)',
              type: 'upload',
              relationTo: 'media',
              name: 'icon',
              required: true,
            },
          ],
        },
        {
          label: 'Social Media URL',
          type: 'text',
          name: 'url',
          required: true,
          minLength: 2,
          maxLength: 400,
          admin: {
            components: {
              Description: () => CharacterCounterWrapper(400),
            },
          },
        },
      ],
    },
  ],
}
