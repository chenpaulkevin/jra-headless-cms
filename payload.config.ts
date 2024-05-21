import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import Icon from './src/components/Icon'
import fav from './src/components/iconPrimary.svg'
import Logo from './src/components/Logo'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
//import seoPlugin from '@payloadcms/plugin-seo'
//import formBuilder from '@payloadcms/plugin-form-builder'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Testimonials } from './src/collections/Testimonials'
import { DesignModels } from './src/collections/DesignModels'
import { Categories } from './src/collections/Categories'
import { Blog } from './src/collections/Blog'
import { Pages } from './src/collections/Pages'

import { Header } from './src/globals/Header'
import { Footer } from './src/globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
  }),
  collections: [Users, Media, Testimonials, DesignModels, Categories, Blog, Pages],
  cors: [
    'https://www.jrahomebuilderscorp.com',
    'https://jrahomebuilderscorp.com',
    //'http://localhost:3000',
    'https://jra-headless-cms.vercel.app',
    'https://www.jra-headless-cms.vercel.app/',
  ].filter(Boolean),
  csrf: [
    'https://www.jrahomebuilderscorp.com',
    'https://jrahomebuilderscorp.com',
    //'http://localhost:3000',
    'https://jra-headless-cms.vercel.app',
    'https://www.jra-headless-cms.vercel.app/',
  ].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      max: 100,
      connectionString: process.env.NEON_POSTGRES_URI || '',
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
  globals: [Header, Footer],

  admin: {
    autoLogin: {
      email: 'demo@apexcodeph.com',
      password: '123demo',
      prefillOnly: true,
    },
    meta: {
      titleSuffix: ' - Apexcode CMS',
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
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
