import React from 'react'
import Link from 'next/link'
function SecondaryButton({ url, title }: { url: string; title: string }) {
  return (
    <>
      <Link
        className="py-4 px-6 bg-lightGray rounded-lg font-bold text-blackPrimary text-base text-center w-full lg:w-fit"
        href={url}
      >
        {title}
      </Link>
    </>
  )
}

export default SecondaryButton
