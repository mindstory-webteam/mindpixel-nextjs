import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const token = import.meta.env.VITE_SANITY_TOKEN

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ridwsomf',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: !token,          // CDN for public datasets; direct API when using a token
  apiVersion: '2024-01-01',
  ...(token ? { token } : {}),
})

// Helper for generating image URLs from Sanity asset references
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
