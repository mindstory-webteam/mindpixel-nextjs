import ThankYou from "@/views/ThankYou";

export const metadata = {
  title: "Thank You | MindPixel",
  description: "Thank you for your submission. We will get back to you shortly.",
  alternates: {
    canonical: "https://mpxcode.com/thank-you",
  },
};

export default function Page() {
  return <ThankYou />;
}
