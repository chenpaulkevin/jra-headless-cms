type featuredImage = {
  readonly url: string
  readonly alt: string
}

type milestones = {
  readonly label: string
  readonly value: number
  readonly id: string
}

export type AboutProps = {
  readonly id?: string
  readonly header?: string
  readonly description?: string
  readonly featuredImage?: featuredImage
  readonly milestones?: Array<milestones>
}
