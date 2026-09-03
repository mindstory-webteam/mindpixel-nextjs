import BlogPage from "@/views/BlogPage";

export const metadata = {
  title: "Blogs | MindPixel Insights",
  description: "Read the latest insights, news, and strategies on web development, SEO, and digital marketing from the experts at MindPixel.",
  alternates: {
    canonical: "https://mpxcode.com/blogs",
  },
};

export default function Page() {
  return <BlogPage />;
}
