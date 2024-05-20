import React from 'react'
import type { CenteredTextProps } from './types'
import { orbitron } from '@/assets/fonts'

export const CenteredText: React.FC<CenteredTextProps & { id?: string }> = (props) => {
  const { id, header, subheader } = props
  return (
    <section>
      <div key={id} className="container text-blackPrimary py-8">
        <div className="flex flex-col gap-16 justify-center items-center w-full h-[400px] p-8">
          {header && (
            <>
              <h1
                className={
                  orbitron.className +
                  ' header-clamp text-center font-black leading-tight tracking-wide'
                }
              >
                {header}
              </h1>
            </>
          )}
          {subheader && (
            <>
              <div className="lg:w-1/2">
                <p className="text-center leading-loose lg:text-base text-gray">{subheader}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
