import React from 'react'
import './globals.scss'
import './globals.css'
import { montserrat } from '@/assets/fonts'
import { Header } from '@/app/(app)/_components/Header'
import { Footer } from '@/app/(app)/_components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import axios from 'axios'
import SmoothScrolling from '@/components/SmoothScrolling'
import type { Metadata } from 'next'
import PageTransition from '@/app/(app)/_components/PageTransition'
import TransitionWrapper from './TransitionWrapper'
import ScrollToTop from './_components/ScrollToTop'
export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadHMR({ config: configPromise })
  const meta = await payload.findGlobal({
    slug: 'metadata',
  })

  if (!meta || Object.keys(meta).length === 0) {
    return { title: 'JRA Home Builders | Home Contractor in Bacolod and Iloilo' }
  }

  return {
    title: meta.title || 'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
    description:
      meta.description ||
      'JRA is a licensed contractor specializing in home building and renovation services.',
    authors: [{ name: 'Apexcode PH', url: 'https://apexcodeph.com/' }],
    creator: 'Apexcode PH',
    icons: {
      icon: (meta.icon as { url: string })?.url || '/favicon.ico',
    },
    openGraph: {
      title: meta.title || 'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
      description:
        meta.description ||
        'JRA is a licensed contractor specializing in home building and renovation services.',
      images: [
        {
          url: (meta.seoImage as { url: string })?.url || '/ogImage.png',
          width: 1280,
          height: 1080,
        },
      ],
    },
  }
}

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_HOST_URL_LIVE
    : process.env.NEXT_HOST_URL_DEV
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={montserrat.className} lang="en">
      <body className="flex flex-col justify-between min-h-screen">
        <Header />
        <PageTransition />
        <TransitionWrapper>
          <main className="mt-28 lg:mt-36 min-h-[80dvh]">
            <SmoothScrolling>{children}</SmoothScrolling>
          </main>
          <ScrollToTop></ScrollToTop>
        </TransitionWrapper>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
