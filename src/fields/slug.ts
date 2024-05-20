import { Field } from 'payload/types'
import formatSlug from '../utilities/formatSlug'

const slug: Field = {
  name: 'slug',
  label: 'Page Slug (URL Identifier)',
  type: 'text',
  unique: true,
  admin: {
    position: 'sidebar',
    description: '(If you intend to make a page your homepage, set the slug as "index".)',
  },
  hooks: {
    beforeValidate: [formatSlug('title')],
  },
}

export default slug
