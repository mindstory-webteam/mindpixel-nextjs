import EnquiryNavbar from "@/components/EnquiryNavbar";
import EnquiryFooter from "@/components/EnquiryFooter";
import SmoothScroll from "@/components/SmoothScorll";
import TransitionProvider from "@/components/TransitionProvider";
import { Suspense } from "react";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default function EnquiryLayout({ children }) {
  return (
    <SmoothScroll>
      <TransitionProvider column={7}>
        <Suspense fallback={null}>
          <style>{`
            .enquiry-layout-root {
              font-family: var(--font-inter, 'Inter'), sans-serif;
            }
            .enquiry-layout-root h1,
            .enquiry-layout-root h2,
            .enquiry-layout-root h3,
            .enquiry-layout-root h4 {
              font-family: var(--font-poppins, 'Poppins'), sans-serif;
            }
          `}</style>
          <div className={`enquiry-layout-root ${inter.variable} ${poppins.variable}`} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <EnquiryNavbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <EnquiryFooter />
          </div>
        </Suspense>
      </TransitionProvider>
    </SmoothScroll>
  );
}
