export type ImageCarouselSlide = {
  id: string
  url: string
  alt: string
}

export type ImageCarouselProps = {
  slider: ImageCarouselSlide[]
  id?: string
}
