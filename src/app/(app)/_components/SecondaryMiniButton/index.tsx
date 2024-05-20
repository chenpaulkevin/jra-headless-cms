import React from 'react'
import Link from 'next/link'
function SecondaryMiniButton({ url, title }: { url: string; title: string }) {
  return (
    <>
      <Link
        className="py-4 px-6 bg-lightGray rounded-lg font-bold text-blackPrimary text-md text-center"
        href={url}
      >
        {title}
      </Link>
    </>
  )
}

export default SecondaryMiniButton