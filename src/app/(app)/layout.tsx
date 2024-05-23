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
      <body>
        <Header />
        <main className="mt-40 lg:mt-44">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
