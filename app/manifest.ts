import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'X100 Photographer Portfolio',
    short_name: 'X100',
    description: 'A Next.js portfolio for professional photographers, designed to flawlessly showcase powerful visual stories.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}