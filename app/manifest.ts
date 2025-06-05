import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahmd Photographer Portfolio',
    short_name: 'Ahmd',
    description: 'A Design Architect working across visual identity, product, and interface design. My work spans the tactile world of posters and magazines to the dynamic realms of UI/UX. I believe design should not only function—it should resonate. Every layout, every pixel, every interaction is a moment of dialogue between object and observer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'public\Logo.png',
      },
    ],
  }
}