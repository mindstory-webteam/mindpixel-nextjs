import BlogDetailPage from "@/views/BlogDetailPage";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  return {
    title: "Blog | MindPixel Insights",
    description: "Read the latest insights, news, and strategies on web development, SEO, and digital marketing from the experts at MindPixel.",
    alternates: {
      canonical: `https://mpxcode.com/blogs/${slug}`,
    },
  };
}

export default function Page() {
  return <BlogDetailPage />;
}
