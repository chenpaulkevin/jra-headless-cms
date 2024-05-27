import React from 'react'
import { orbitron } from '@/assets/fonts'
import PrimaryButton from './_components/PrimaryButton'

export default function NotFound() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8 h-80 w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1
            className={
              orbitron.className +
              ' md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight'
            }
          >
            Page not found
          </h1>
          <p>The page you are looking for does not exist</p>
        </div>
        <PrimaryButton title={'Go Home'} url="/"></PrimaryButton>
      </div>
    </section>
  )
}
