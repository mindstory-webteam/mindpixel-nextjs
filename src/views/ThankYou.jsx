"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SEO from '../components/SEO';

export default function ThankYou() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_page_view",
      page_path: "/thank-you",
      page_title: "Thank You | MindPixel"
    });
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 20px",
      fontFamily: "'Syne', sans-serif",
      textAlign: "center"
    }}>
      <SEO 
        title="Thank You | MindPixel" 
        description="Thank you for your submission. We will get back to you shortly." 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={{ maxWidth: "640px", width: "100%" }}>
        {/* Lottie Animation */}
        <div className="fade-in-up" style={{ 
          width: "100%", 
          maxWidth: "280px", 
          margin: "0 auto -16px", // Negative bottom margin to pull the text up, counteracting Lottie padding
          display: "flex", 
          justifyContent: "center" 
        }}>
          <DotLottieReact
            src="https://lottie.host/cd8ac992-02a5-4cec-9e1d-891ee3737d97/5ubvWKi8MU.lottie"
            autoplay
          />
        </div>

        {/* Content */}
        <h1 className="fade-in-up delay-1" style={{
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 700,
          color: "#111111",
          margin: "0 0 12px 0",
          letterSpacing: "-0.02em"
        }}>
          Thank You
        </h1>
        
        <p className="fade-in-up delay-2" style={{
          fontSize: "clamp(15px, 3vw, 18px)",
          color: "#555555",
          lineHeight: "1.7",
          margin: "0 auto",
          maxWidth: "480px"
        }}>
          Your submission has been successfully received. A member of our team will review your enquiry and contact you shortly.
        </p>

        <div className="fade-in-up delay-2" style={{ marginTop: "40px" }}>
          <Link
            href="/enquiry"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#111111",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            className="hover:bg-[#e07a1b]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}