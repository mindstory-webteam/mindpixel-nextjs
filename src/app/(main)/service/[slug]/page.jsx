import ServiceDetailPage from "@/views/ServiceDetailPage";
import { getServiceBySlug, getAllServices } from "@/assets/servicesData";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service | MindPixel",
      description: "Digital transformation, web design, and software engineering services by MindPixel.",
    };
  }

  return {
    title: `${service.title} | MindPixel Services`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://mpxcode.com/service/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  return <ServiceDetailPage serviceSlug={slug} />;
}

