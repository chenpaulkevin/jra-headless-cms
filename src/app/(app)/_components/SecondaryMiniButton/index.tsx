import React from 'react'
import Link from 'next/link'
function SecondaryMiniButton({ url, title }: { url: string; title: string }) {
  return (
    <>
      <Link
        className="py-4 px-6 bg-lightGray text-sm xl:text-base rounded-lg font-bold text-blackPrimary text-md text-center w-full lg:w-fit"
        href={url}
      >
        {title}
      </Link>
    </>
  )
}

export default SecondaryMiniButton
