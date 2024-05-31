import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  imageURL: '/_thumbnails/HeroBlock.jpg',
  fields: [
    {
      label: 'Hero Headline (Preferably 3-4 words only)',
      name: 'headline',
      required: true,
      type: 'text',
      minLength: 4,
      maxLength: 40,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(40),
        },
      },
    },
    {
      label: 'Hero Subheadline',
      name: 'subHeadline',
      required: true,
      type: 'textarea',
      minLength: 10,
      maxLength: 300,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(300),
        },
      },
    },
    {
      label: 'Call to Action Headline',
      name: 'ctaHeadline',
      required: true,
      type: 'text',
      minLength: 10,
      maxLength: 80,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(80),
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Main Featured Model',
          name: 'mainFeature',
          type: 'relationship',
          relationTo: 'designModels',
          required: true,
          admin: {
            position: 'sidebar',
            description: 'The main model will be the largest featured model inside the hero block',
          },
        },
        {
          label: 'Second Featured Model',
          name: 'secondFeature',
          type: 'relationship',
          relationTo: 'designModels',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          label: 'Third Featured Model',
          name: 'thirdFeature',
          type: 'relationship',
          relationTo: 'designModels',
          required: true,
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },
  ],
}
