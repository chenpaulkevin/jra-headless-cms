import React from 'react'
import './globals.css'
import { montserrat } from '@/assets/fonts'
import { Header } from '@/app/(app)/_components/Header'
import { Footer } from '@/app/(app)/_components/Footer'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import axios from 'axios'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import type { Metadata } from 'next'
import PageTransition from '@/app/(app)/_components/PageTransition'
import TransitionWrapper from './TransitionWrapper'

const SmoothScrolling = dynamic(() => import('@/components/SmoothScrolling'), { ssr: false })
const ScrollToTop = dynamic(() => import('./_components/ScrollToTop'), { ssr: false })

interface MetaType {
  title?: string
  description?: string
  icon?: { url: string }
  seoImage?: { url: string }
  keywords?: { keyword: string }[]
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    const meta = (await payload.findGlobal({ slug: 'metadata' })) as MetaType

    if (!meta || Object.keys(meta).length === 0) {
      return { title: 'JRA Home Builders | Home Contractor in Bacolod and Iloilo' }
    }

    return {
      metadataBase: new URL('https://www.jrahomebuilderscorp.com'),
      title: meta.title || 'JRA Home Builders | Home Contractor in Bacolod and Iloilo',
      applicationName: 'JRA Home Builders',
      robots: 'index,follow',
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
        siteName: 'JRA Home Builders Corporation',
        url: new URL('https://www.jrahomebuilderscorp.com'),
        images: [
          {
            url: (meta.seoImage as { url: string })?.url || '/ogImage.png',
            width: 1280,
            height: 1080,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@JRAHomeBuilders',
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
      keywords: meta.keywords?.map((keywordObj: { keyword: string }) => keywordObj.keyword) || [],
    }
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return { title: 'JRA Home Builders | Home Contractor in Bacolod and Iloilo' }
  }
}

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_IS_LIVE === 'true'
    ? process.env.NEXT_PUBLIC_HOST_URL_LIVE || 'https://www.jrahomebuilderscorp.com'
    : process.env.NEXT_PUBLIC_HOST_URL_DEV || 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={montserrat.className} lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href="https://www.jrahomebuilderscorp.com" />
      </Head>
      <body className="flex flex-col justify-between min-h-screen">
        <Header />
        <PageTransition />
        <TransitionWrapper>
          <main className="mt-28 lg:mt-36 min-h-[80dvh]">
            <SmoothScrolling>{children}</SmoothScrolling>
          </main>
          <ScrollToTop />
        </TransitionWrapper>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
