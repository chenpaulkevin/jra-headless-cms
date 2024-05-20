//import type { Page } from '../../../../../payload-types'
//export type HeroProps = Extract<Page['layout'], { blockType: 'hero' }>
type MainFeature = {
  readonly featuredImage: {
    readonly url: string
    readonly alt: string
  }
  readonly title: string
  readonly slug: string
}

export type HeroProps = {
  readonly id?: string
  readonly headline: string
  readonly subHeadline: string
  readonly ctaHeadline: string
  readonly mainFeature: MainFeature
  readonly secondFeature?: MainFeature | undefined
  readonly thirdFeature?: MainFeature | undefined
}
