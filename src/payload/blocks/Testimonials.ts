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
  fields: [
    {
      label: 'Block Header',
      name: 'blockHeader',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    {
      label: 'Block Description',
      name: 'blockDescription',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: {
        description: 'Max 300 characters',
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
