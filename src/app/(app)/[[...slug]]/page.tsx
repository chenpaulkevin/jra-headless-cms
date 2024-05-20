import Blocks from '../_components/Blocks'
import fetchPage from '@/payload/utils/fetchPage'

export const revalidate = 0

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await fetchPage(params.slug)
  return <Blocks blocks={page?.layout} locale="en" />
}

export default Page
