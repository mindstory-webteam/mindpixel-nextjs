import SmoothScroll from "@/components/SmoothScorll";
import TransitionProvider from "@/components/TransitionProvider";
import { Suspense } from "react";

export default function ThankYouLayout({ children }) {
  return (
    <SmoothScroll>
      <TransitionProvider column={7}>
        <Suspense fallback={null}>
          <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {children}
          </main>
        </Suspense>
      </TransitionProvider>
    </SmoothScroll>
  );
}
