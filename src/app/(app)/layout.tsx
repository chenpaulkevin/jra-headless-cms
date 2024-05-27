import React from 'react'
import './globals.scss'
import './globals.css'
import { montserrat } from '@/assets/fonts'
import { Header } from '@/app/(app)/_components/Header'
import { Footer } from '@/app/(app)/_components/Footer'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={montserrat.className}>
      <body className="flex justify-between flex-col min-h-screen">
        <Header />
        <main className="mt-28 lg:mt-36">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
