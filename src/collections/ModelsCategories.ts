import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import { isAdminOrAuthor } from '../access/isAdminOrAuthor'
import slug from '../fields/slug'
import createdBy from '../fields/createdBy'
import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'

export const ModelsCategories: CollectionConfig = {
  slug: 'modelsCategories',
  labels: {
    singular: 'Design Model Category',
    plural: 'Design Model Categories',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Design Models',
  },
  access: {
    create: isAdminOrAuthor,
    read: () => true,
    update: isAdminOrAuthor,
    delete: isAdmin,
  },
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
  fields: [
    {
      label: 'Design Model Category Title',
      name: 'title',
      required: true,
      unique: true,
      type: 'text',
      minLength: 4,
      maxLength: 24,
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(24),
        },
      },
    },
    slug,
    createdBy,
  ],
}
