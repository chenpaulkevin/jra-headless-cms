import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JRA Home Builders Corporation',
    short_name: 'JRA Home Builders ',
    description:
      'Trusted Home Construction in Bacolod & Iloilo City – Quality, affordable services tailored to your needs. Contact us for a free consultation and start building your dream home!',
    start_url: 'https://www.jrahomebuilderscorp.com/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/iconPrimary.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
