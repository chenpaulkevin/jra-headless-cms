import Blocks from '../_components/Blocks'
import fetchPage from '@/payload/utils/fetchPage'
import { orbitron } from '@/assets/fonts'

export const revalidate = 0

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await fetchPage(params.slug)
  if (page?.layout?.length === 0) {
    return (
      <>
        <div className="flex h-screen">
          <div className="container w-full h-full flex justify-center items-center">
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
    return <>{page && <Blocks blocks={page?.layout} locale="en" />}</>
  }
}

export default Page
