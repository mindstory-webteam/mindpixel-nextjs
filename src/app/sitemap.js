import { client } from '@/lib/sanityClient';

const BASE_URL = 'https://mpxcode.com';

export default async function sitemap() {
  const currentDate = new Date();

  // Static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/enquiry`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Case study routes
  const caseStudyIds = [1, 2, 3, 4, 5, 6];
  const caseStudyRoutes = caseStudyIds.map((id) => ({
    url: `${BASE_URL}/ourwork/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic blog routes from Sanity
  let blogRoutes = [];
  try {
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }`
    );

    if (Array.isArray(posts)) {
      blogRoutes = posts.map((post) => ({
        url: `${BASE_URL}/blogs/${post.slug}`,
        lastModified: post._updatedAt || post.publishedAt || currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error);
  }

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
