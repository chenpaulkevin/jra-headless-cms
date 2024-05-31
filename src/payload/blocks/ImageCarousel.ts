import { Block } from 'payload/types'

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const ImageCarousel: Block = {
  slug: 'imageCarousel',
  labels: {
    singular: 'Image Carousel',
    plural: 'Image Carousels',
  },
  imageURL: '/_thumbnails/ImageSlider.jpg',
  fields: [
    {
      label: 'Image Slider',
      name: 'slider',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      required: true,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
          unique: true,
          admin: {
            description: '1280x720 recommended',
          },
        },
        {
          label: 'Caption',
          name: 'alt',
          type: 'text',
          required: true,
          minLength: 2,
          maxLength: 40,
        },
      ],
    },
  ],
}
