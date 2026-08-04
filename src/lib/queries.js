// GROQ query: fetch all blog posts for listing page (newest first)
export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage {
    asset->{_id, url},
    alt
  },
  author,
  publishedAt,
  categories
}`

// GROQ query: fetch a single post by slug
export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage {
    asset->{_id, url},
    alt
  },
  author,
  publishedAt,
  categories,
  body,
  seoTitle,
  seoDescription,
  canonicalUrl
}`

// GROQ query: fetch recent posts excluding the current one
export const RECENT_POSTS_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...5] {
  _id,
  title,
  slug,
  coverImage {
    asset->{_id, url}
  },
  publishedAt
}`
