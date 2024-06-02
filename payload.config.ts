import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor, FixedToolbarFeature, LinkFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import Icon from './src/components/Icon'
import fav from './public/iconPrimary.svg'
import Logo from './src/components/Logo'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Testimonials } from './src/collections/Testimonials'
import { DesignModels } from './src/collections/DesignModels'
import { Categories } from './src/collections/Categories'
import { Blog } from './src/collections/Blog'
import { Pages } from './src/collections/Pages'
import { ModelsCategories } from './src/collections/ModelsCategories'

import { Header } from '@/globals/Header'
import { Footer } from '@/globals/Footer'
import { Metadata } from '@/globals/Metadata'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const seoUrl =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_HOST_URL_LIVE
    : process.env.NEXT_HOST_URL_DEV
export default buildConfig({
  serverURL:
    process.env.NEXT_PUBLIC_IS_LIVE === 'true'
      ? process.env.NEXT_HOST_URL_LIVE
      : process.env.NEXT_HOST_URL_DEV,
  //editor: slateEditor({}),
  email: nodemailerAdapter({
    defaultFromAddress: 'noreply@jrahomebuilderscorp.com',
    defaultFromName: 'JRA Home Builders Corporation',
    // Nodemailer transportOptions
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
      LinkFeature({
        enabledCollections: [],
        fields: ({ defaultFields }) =>
          defaultFields.map((field) => {
            if ('name' in field && field.name === 'url' && field.type === 'text') {
              delete field.validate
            }
            return field
          }),
      }),
    ],
  }),
  collections: [
    Users,
    Media,
    Testimonials,
    DesignModels,
    ModelsCategories,
    Categories,
    Blog,
    Pages,
  ],
  cors: [
    'https://www.jrahomebuilderscorp.com',
    'https://jrahomebuilderscorp.com',
    'http://localhost:3000',
    'https://www.jrahomebuilderscorp.com/api/users/forgot-password/',
    'https://jra-headless-cms.vercel.app',
    'https://www.jra-headless-cms.vercel.app',
  ].filter(Boolean),
  csrf: [
    'https://www.jrahomebuilderscorp.com',
    'https://jrahomebuilderscorp.com',
    'http://localhost:3000',
    'https://www.jrahomebuilderscorp.com/api/users/forgot-password/',
    'https://jra-headless-cms.vercel.app',
    'https://www.jra-headless-cms.vercel.app',
  ].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      max: 100,
      connectionString:
        process.env.NEXT_PUBLIC_IS_LIVE === 'true'
          ? process.env.NEON_POSTGRES_URI || ''
          : process.env.POSTGRES_URI || '',
    },
  }),
  //db: mongooseAdapter({
  //  url: process.env.MONGODB_URI || '',
  //}),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },
  globals: [Header, Footer, Metadata],

  admin: {
    meta: {
      titleSuffix: ' - JRA Home Builders Corp',
      icons: fav,
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: process.env.NEXT_PUBLIC_IS_LIVE === 'true' ? true : false, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
    seoPlugin({
      collections: ['blog', 'designModels'],
      tabbedUI: true,
      generateTitle: ({ doc }: { doc: any }) => `${doc?.title?.value}`,
      generateDescription: ({ doc }: { doc: any }) => doc?.description?.value,
      generateURL: ({ doc }: { doc: any }) => {
        if (!doc?.floorArea?.value) {
          return `${seoUrl}blog/${doc?.slug?.value}`
        }
        return `${seoUrl}gallery/${doc?.slug?.value}`
      },
    }),
    formBuilderPlugin({
      formOverrides: {
        admin: {
          group: 'Forms',
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Forms',
        },
      },
      fields: {
        state: false,
        country: false,
        message: true,
        payment: false,
      },
    }),
  ],
})
