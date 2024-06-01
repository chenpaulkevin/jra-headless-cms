import path from 'path'
import { CollectionConfig } from 'payload/types'
import { isAdminOrAuthor } from '../access/isAdminOrAuthor'
import createdBy from '../fields/createdBy'
import { fileURLToPath } from 'url'
import CharacterCounterWrapper from '@/components/CharacterCounterWrapper'
import { isAdmin } from '@/access/isAdmin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export type Type = {
  filename: string
  alt: string
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: isAdminOrAuthor,
    read: () => true,
    update: isAdminOrAuthor,
    delete: isAdmin,
  },
  upload: {
    staticDir: path.resolve(dirname, '../../media'),
    crop: false,
    mimeTypes: ['image/*'],
    focalPoint: false,
    formatOptions: {
      format: 'webp',
      options: {
        mozjpeg: true,
        progressive: true,
        quality: 75,
      },
    },
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text (This will act as an alternative text if image cannot be loaded)',
      type: 'text',
      required: true,
      maxLength: 200,
      defaultValue: 'Image',
      admin: {
        components: {
          Description: () => CharacterCounterWrapper(200),
        },
      },
    },
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

export default Media
