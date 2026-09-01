import { useState, useEffect } from "react";
import Image from "next/image";
import bgImage from "../assets/EnquiryBanner.png";
import bgImageSm from "../assets/enquiry-banner-sm-screen.png";
import bgImageMobile from "../assets/enquiry-banner-for-mobile.png";

function useWindowWidth() {
  const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1200));
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function EnquiryHero() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const currentImage = isMobile ? bgImageMobile : isTablet ? bgImageSm : bgImage;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#e6e8e6",
      }}
    >
      {/* Background Image */}
      <Image
        src={currentImage}
        alt="Team Meeting"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />


      {/* Dark overlay gradient at the bottom for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Bottom Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "40px 24px" : isTablet ? "50px 40px" : "60px 80px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          gap: "40px",
          zIndex: 10,
        }}
      >
        {/* Left Side Title */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: isMobile ? "24px" : isTablet ? "32px" : "40px",
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: "650px",
            letterSpacing: "-0.02em",
          }}
        >
          Empowering Digital Brands with Clarity and Purpose
        </h2>

        {/* Right Side Description & Button */}
        <div style={{ maxWidth: "380px" }}>
          {/*
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? "14px" : "16px",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            MindPixel is a creative agency crafting high-performing brand identities and websites that convert audiences into loyal customers.
          </p>
          */}
        </div>
      </div>
    </div>
  );
}
