export type BlogCollectionProps = {
  blockHeader: string
  mainFeature: {
    blogImage: {
      url: string
      alt: string
    }
    readTime: number
    categories: {
      title: string
    }
    title: string
    slug: string
  }
  secondaryFeature: {
    blogImage: {
      url: string
      alt: string
    }
    readTime: number
    categories: {
      title: string
    }
    title: string
    slug: string
  }
  thirdFeature: {
    blogImage: {
      url: string
      alt: string
    }
    readTime: number
    categories: {
      title: string
    }
    title: string
    slug: string
  }
  cta: {
    ctaLink: {
      slug: string
    }
    ctaLabel: string
  }[]
}
