import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Testimonials: Block = {
  slug: 'testimonialsBlock',
  labels: {
    singular: 'Featured Testimonial',
    plural: 'Featured Testimonials',
  },
  imageURL: '/_thumbnails/FeaturedTestimonial.png',
  fields: [
    {
      label: 'Block Header',
      name: 'blockHeader',
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
      label: 'Block Description',
      name: 'blockDescription',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(300),
        },
      },
    },
    {
      label: 'First Featured Testimonial',
      name: 'firstTestimonial',
      required: true,
      type: 'relationship',
      relationTo: 'testimonials',
    },
    {
      label: 'Second Featured Testimonial',
      name: 'secondTestimonial',
      required: true,
      type: 'relationship',
      relationTo: 'testimonials',
    },
    {
      label: 'Third Featured Testimonial',
      name: 'thirdTestimonial',
      required: true,
      type: 'relationship',
      relationTo: 'testimonials',
    },
  ],
}
