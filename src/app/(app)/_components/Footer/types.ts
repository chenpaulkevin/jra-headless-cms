type Media = {
  id: number
  alt: string
  url?: string
  width?: number | null
  height?: number | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  updatedAt: string
  createdAt: string
}

type contactImageButton = {
  contactLink?: string
  imageButton?: {
    url?: string
    alt?: string
  }
}

type quickLinks = {
  label: string
  link: string
  id?: string | null
}

export type FooterProps = {
  id: number
  title: string
  subheader: string
  motto?: string | null
  logo: Media
  contactImage?: contactImageButton
}
