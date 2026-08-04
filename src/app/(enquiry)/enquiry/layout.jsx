import EnquiryNavbar from "@/components/EnquiryNavbar";
import EnquiryFooter from "@/components/EnquiryFooter";
import SmoothScroll from "@/components/SmoothScorll";
import TransitionProvider from "@/components/TransitionProvider";
import { Suspense } from "react";

export default function EnquiryLayout({ children }) {
  return (
    <SmoothScroll>
      <TransitionProvider column={7}>
        <Suspense fallback={null}>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
