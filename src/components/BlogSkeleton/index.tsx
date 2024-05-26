import React from 'react'

export default function BlogSkeleton() {
  return (
    <>
      <div className="flex flex-col w-full lg:flex-row lg:w-3/4 h-fit gap-8 lg:gap-16 my-8">
        <div className="w-full h-[250px] lg:w-3/5 lg:h-[500px] bg-slate-200 rounded-3xl animate-pulse flex justify-center items-center">
          <svg
            className="w-16 h-16 text-slate-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          <div className="w-full flex gap-8">
            <div className="w-1/2 lg:w-[150px] h-10 lg:h-12 rounded-xl bg-slate-300 animate-pulse"></div>
            <div className="w-1/2 lg:w-[150px] h-10 lg:h-12 rounded-xl bg-slate-200 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-8 mt-4 lg:mt-8">
            <div className="h-16 lg:h-20 bg-slate-300 rounded-xl animate-pulse"></div>
            <div className="w-3/4 h-16 lg:h-20 bg-slate-200 rounded-xl animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-6 mt-4 lg:mt-8">
            <div className="h-10 bg-slate-200 rounded-xl animate-pulse"></div>
            <div className="h-10 bg-slate-300 rounded-xl animate-pulse"></div>
            <div className="w-3/4 h-10 bg-slate-200 rounded-xl animate-pulse"></div>
          </div>
          <div className="h-10 w-1/2 bg-slate-300 rounded-xl animate-pulse justify-self-end mt-auto hidden lg:block"></div>
        </div>
      </div>
    </>
  )
}
