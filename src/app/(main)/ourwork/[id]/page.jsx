import OurWorksDetailPage from "@/views/OurWorksDetailPage";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id || "";
  return {
    title: "Case Study | Our Work",
    description: "Explore detailed case studies of digital transformation, web design, and growth marketing success stories by MindPixel.",
    alternates: {
      canonical: `https://mpxcode.com/ourwork/${id}`,
    },
  };
}

export default function Page() {
  return <OurWorksDetailPage />;
}
