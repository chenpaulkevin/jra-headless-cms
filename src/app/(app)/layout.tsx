import React from 'react'
import './globals.scss'
import './globals.css'
import { montserrat } from '@/assets/fonts'
import { Header } from '@/app/(app)/_components/Header'
import { Footer } from '@/app/(app)/_components/Footer'
import axios from 'axios'
import SmoothScrolling from '@/components/SmoothScrolling'

axios.defaults.baseURL = process.env.NEXT_PRIVATE_BACKEND_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={montserrat.className}>
      <body className="flex justify-between flex-col min-h-screen">
        <Header />
        <main className="mt-28 lg:mt-36">
          <SmoothScrolling>{children}</SmoothScrolling>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
