export type ImageCarouselSlide = {
  image: any
  id: string
  url: string
  alt: string
}

export type ImageCarouselProps = {
  slider: ImageCarouselSlide[]
  id?: string
}
