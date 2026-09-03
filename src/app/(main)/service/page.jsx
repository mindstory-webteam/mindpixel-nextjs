import ServicesPage from "@/views/ServicesPage";

export const metadata = {
  title: "Services | Web Design, SEO & Growth Marketing",
  description: "Discover MindPixel's services: Web Design & Development, UI/UX, SEO, and Growth Marketing. We build sites that sell and data-driven strategies.",
  alternates: {
    canonical: "https://mpxcode.com/service",
  },
};

export default function Page() {
  return <ServicesPage />;
}
