import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../../access/isAdmin'
import slug from '../../fields/slug'
import createdBy from '../../fields/createdBy'

import { About } from '../../payload/blocks/About'
import { BlogCollection } from '../../payload/blocks/BlogCollection'
import { CardWithTitle } from '../../payload/blocks/CardWithTitle'
import { CenteredText } from '../../payload/blocks/CenteredText'
import { DesignModelsGallery } from '../../payload/blocks/DesignModelsGallery'
import { FullWidthImage } from '../../payload/blocks/FullWidthImage'
import { HeaderAndDescription } from '../../payload/blocks/HeaderAndDescription'
import { Hero } from '../../payload/blocks/Hero'
import { InfiniteBlogScroll } from '../../payload/blocks/InfiniteBlogScroll'
import { SimpleRichText } from '../../payload/blocks/SimpleRichText'
import { Testimonials } from '../../payload/blocks/Testimonials'
import { TwoColumnImageLeft } from '../../payload/blocks/TwoColumnLeft'
import { TwoColumnImageRight } from '../../payload/blocks/TwoColumnRight'

//import { revalidatePage } from './hooks/revalidatePage'

export const COLLECTION_SLUG_PAGE = 'pages'

export const Pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
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
    //afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'title',
    description:
      'Create and manage individual pages for your website. (If you intend to make a page your homepage, set the slug as "index".)',
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      admin: {
        description: 'This sets title of the page.',
      },
      type: 'text',
      unique: true,
      required: true,
      minLength: 2,
      maxLength: 80,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      admin: {
        description: 'Customize your page layout using our pre-built page blocks.',
      },
      blocks: [
        About,
        BlogCollection,
        CardWithTitle,
        CenteredText,
        DesignModelsGallery,
        FullWidthImage,
        HeaderAndDescription,
        Hero,
        InfiniteBlogScroll,
        SimpleRichText,
        Testimonials,
        TwoColumnImageLeft,
        TwoColumnImageRight,
      ],
    },
    slug,
    createdBy,
  ],
}
