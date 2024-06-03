import Blocks from '../_components/Blocks'
import fetchPage from '@/payload/utils/fetchPage'
import { orbitron } from '@/assets/fonts'
import PageParser from './PageParser'

export const revalidate = 0

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await fetchPage(params.slug)
  if (page?.layout?.length === 0) {
    return (
      <>
        <div />
        <div className="flex h-[400px]">
          <div className="container w-full flex justify-center items-center">
            <h1
              className={
                orbitron.className +
                ' header-clamp tracking-wide font-black text-center w-full text-primary'
              }
            >
              Site Under Construction
            </h1>
          </div>
        </div>
      </>
    )
  } else {
    return <>{page && <PageParser page={page} />}</>
  }
}

export default Page
