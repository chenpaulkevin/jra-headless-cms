import fetchPage from '@/payload/utils/fetchPage'
import { orbitron } from '@/assets/fonts'
import PageParser from './PageParser'

export const revalidate = 0

interface PageProps {
  params: {
    slug: string
  }
}

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
  const page = await fetchPage(slug)

  if (!page || page?.layout?.length === 0) {
    return (
      <div className="flex h-[400px]">
        <div className="container flex justify-center items-center w-full">
          <h1
            className={`${orbitron.className} header-clamp tracking-wide font-black text-center w-full text-primary`}
          >
            Site Under Construction
          </h1>
        </div>
      </div>
    )
  }

  return <PageParser page={page} />
}

export default Page
