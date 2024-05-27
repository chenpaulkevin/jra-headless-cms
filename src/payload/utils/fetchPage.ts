import 'server-only'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { COLLECTION_SLUG_PAGE } from '@/collections/config'
import { notFound } from 'next/navigation'
import { Page } from '~/payload-types'

const fetchPage = async (slug: string): Promise<Page | null> => {
  if (!slug) {
    slug = 'index'
  } else if (slug[0] === 'favicon.ico') {
    slug = 'index'
  } else {
    slug = slug[0]
  }
  const payload = await getPayloadHMR({ config: configPromise })
  const result = await payload.find({
    collection: COLLECTION_SLUG_PAGE,
    where: { slug: { equals: slug } },
    depth: 2,
  })
  if (result?.docs.length === 0) {
    notFound()
  }
  const page = result.docs?.[0]

  return page || null
}

export default fetchPage
