import { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'
import { isAdminOrAuthor } from '../access/isAdminOrAuthor'
import createdBy from '../fields/createdBy'

export const DesignModels: CollectionConfig = {
  slug: 'designModels',
  admin: {
    useAsTitle: 'title',
    group: 'Design Models',
  },
  access: {
    create: isAdminOrAuthor,
    read: () => true,
    update: isAdminOrAuthor,
    delete: isAdminOrAuthor,
  },
  fields: [
    {
      label: 'Model Title',
      name: 'title',
      required: true,
      type: 'text',
      unique: true,
      minLength: 2,
      maxLength: 20,
    },
    {
      label: 'Short Description',
      name: 'description',
      required: true,
      type: 'textarea',
      minLength: 10,
      maxLength: 500,
      admin: {
        description: 'Max 500 characters',
      },
    },
    {
      type: 'row',
      fields: [
        {
          label: 'Floor Area (sqm)',
          name: 'floorArea',
          required: true,
          type: 'number',
          min: 1,
          max: 50000,
        },
        {
          label: 'Number of Bedrooms',
          name: 'bedrooms',
          required: true,
          type: 'number',
          min: 1,
          max: 100,
        },
        {
          label: 'Number of comfort rooms ',
          name: 'comfortRooms',
          required: true,
          type: 'number',
          min: 1,
          max: 100,
        },
        {
          label: 'Category',
          name: 'category',
          type: 'relationship',
          required: true,
          relationTo: 'modelsCategories',
          hasMany: false,
        },
      ],
    },
    {
      label: 'Design Model Content',
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      label: 'Featured Image',
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: '1920x1080 recommended',
      },
    },
    {
      label: 'Floor Plan Image',
      name: 'floorPlanImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: '1920x1080 recommended',
      },
    },
    slug,
    createdBy,
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user.id
            return data
          }
        }
      },
    ],
  },
}

export default DesignModels
