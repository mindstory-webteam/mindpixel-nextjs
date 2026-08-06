import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'ridwsomf'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_TOKEN

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // direct API fetch for fresh data
  apiVersion: '2024-01-01',
  ...(token ? { token } : {}),
})

// Helper for generating image URLs from Sanity asset references
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  if (!source || (!source.asset && !source._ref)) {
    return {
      width: () => urlFor(source),
      height: () => urlFor(source),
      fit: () => urlFor(source),
      crop: () => urlFor(source),
      auto: () => urlFor(source),
      url: () => '',
    }
  }
  return builder.image(source)
}
