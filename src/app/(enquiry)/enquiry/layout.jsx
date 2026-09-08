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
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
            .enquiry-layout-root {
              font-family: 'Inter', sans-serif;
            }
            .enquiry-layout-root h1,
            .enquiry-layout-root h2,
            .enquiry-layout-root h3,
            .enquiry-layout-root h4 {
              font-family: 'Poppins', sans-serif;
            }
          `}</style>
          <div className="enquiry-layout-root" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
