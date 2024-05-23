export type Card = {
  image: {
    url: string
    alt: string
  }
  label: string
  description: string
}

export type CardWithTitleProps = {
  cards: Card[]
  id?: string
}
