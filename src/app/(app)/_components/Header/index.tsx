import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import type { Header } from '../../../../../payload-types'
import Navbar from './Navbar'

export async function Header() {
  const payload = await getPayloadHMR({ config: configPromise })
  const header = await payload.findGlobal({
    slug: 'header',
  })
  return (
    <>
      <Navbar header={header} />
    </>
  )
}
