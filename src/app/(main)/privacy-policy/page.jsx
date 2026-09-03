import PrivacyPolicyPage from "@/views/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | MindPixel Web & Design Company",
  description: "Read the Privacy Policy of MindPixel to understand how we protect your data while providing top-tier web design and digital marketing services.",
  alternates: {
    canonical: "https://mpxcode.com/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
