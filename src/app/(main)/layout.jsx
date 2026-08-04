import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScorll";
import TransitionProvider from "@/components/TransitionProvider";
import { Suspense } from "react";

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <TransitionProvider column={7}>
        <Suspense fallback={null}>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </Suspense>
      </TransitionProvider>
    </SmoothScroll>
  );
}
