import React from 'react'
import Link from 'next/link'

function PrimaryButton({ url, title }: { url: string; title: string }) {
  return (
    <>
      <Link
        className="py-4 px-6 bg-primary rounded-lg font-bold text-white text-base text-center"
        href={url}
      >
        {title}
      </Link>
    </>
  )
}

export default PrimaryButton
