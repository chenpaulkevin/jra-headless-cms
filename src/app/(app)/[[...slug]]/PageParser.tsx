'use client'
import React from 'react'
import Blocks from '../_components/Blocks'
import { useLivePreview } from '@payloadcms/live-preview-react'

const seoUrl =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_PUBLIC_HOST_URL_LIVE
    : process.env.NEXT_PUBLIC_HOST_URL_DEV

export default function PageParser({ page }: { page: any }) {
  const { data } = useLivePreview({
    serverURL: seoUrl || '',
    depth: 2,
    initialData: page,
  })
  return (
    <div>
      <>{page && <Blocks blocks={page?.layout} locale="en" />}</>
    </div>
  )
}
