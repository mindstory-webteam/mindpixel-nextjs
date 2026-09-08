"use client";
import { useState, useEffect } from "react";
import SharedLeadForm from "./SharedLeadForm";
import Auralis from "./ui/auralis";

function useWindowWidth() {
  const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1200));
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

function AnimatedCounter({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function EnquiryHero() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;

  const brandOrange = "#e07a1b";

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Auralis WebGL Ambient Background */}
      <Auralis
        colors={["#922c80", "#6d1f60", "#4a1240"]}
        speed={0.25}
        grain={0.45}
        height="100%"
        className="!absolute inset-0"
      />

      {/* Hero Content Container — overlays the WebGL canvas */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto",
          padding: isMobile
            ? "110px 20px 50px"
            : isTablet
              ? "120px 32px 55px"
              : "130px 48px 65px",
          display: "grid",
          gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 520px",
          gap: isMobile ? "32px" : isTablet ? "40px" : "54px",
          alignItems: "center",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side Title, Subtitle & Stats */}
        <div style={{ color: "#fff" }}>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              margin: "0 0 18px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Websites Engineered to Turn Visitors Into Paying Clients.
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? "14px" : "16px",
              color: "rgba(255, 255, 255, 0.82)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "580px",
            }}
          >
            MindPixel builds ultra-fast, custom websites, SaaS platforms, and conversion-focused web solutions engineered to turn your ad traffic into consistent revenue.
          </p>

          {/* Stats Row with Animated Number Counters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "24px" : "40px",
              marginTop: isMobile ? "28px" : "36px",
            }}
          >
            {[
              { number: 150, suffix: "+", label: "Brands Elevated" },
              { number: 98, suffix: "%", label: "Client Satisfaction" },
              { number: 50, suffix: "+", label: "Custom Projects" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "26px" : "34px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? "12px" : "13px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginTop: "4px",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Form Card — Glassmorphism */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "20px",
            padding: isMobile ? "20px 18px 22px" : "24px 24px 26px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >

          <SharedLeadForm theme="dark" buttonColor={brandOrange} />
        </div>
      </div>
    </div>
  );
}
