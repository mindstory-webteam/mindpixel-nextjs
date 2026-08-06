import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'ridwsomf'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_TOKEN

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Use CDN for public query requests
  apiVersion: '2024-01-01',
  ...(token ? { token } : {}),
})

// Helper for generating image URLs from Sanity asset references or fallback image URLs
const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  if (!source) {
    const chain = {
      width: () => chain,
      height: () => chain,
      fit: () => chain,
      crop: () => chain,
      auto: () => chain,
      url: () => '',
    };
    return chain;
  }

  const directUrl =
    typeof source === 'string'
      ? source
      : source?.asset?.url || (typeof source?.asset === 'string' ? source.asset : null);

  if (directUrl && typeof directUrl === 'string' && directUrl.startsWith('http')) {
    const chain = {
      width: () => chain,
      height: () => chain,
      fit: () => chain,
      crop: () => chain,
      auto: () => chain,
      url: () => directUrl,
    };
    return chain;
  }

  try {
    return builder.image(source);
  } catch (err) {
    const fallbackUrl = directUrl || '';
    const chain = {
      width: () => chain,
      height: () => chain,
      fit: () => chain,
      crop: () => chain,
      auto: () => chain,
      url: () => fallbackUrl,
    };
    return chain;
  }
}
