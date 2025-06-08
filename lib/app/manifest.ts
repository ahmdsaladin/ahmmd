import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahmd Saladin Photographer Portfolio',
    short_name: 'Ahmd Saladin',
    description: 'I craft meaningful design experiences across posters, products, and digital interfaces — where every visual is a world, every detail a decision, and every project a story worth telling.',
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