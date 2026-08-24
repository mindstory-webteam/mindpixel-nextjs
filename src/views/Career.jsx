"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Breadcrumb from '../components/BreadCrums';
import CareerSection from '../components/CareerSection';
import SEO from '../components/SEO';


const Career = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ background: "#fff" }}>
      <SEO 
        title="Careers | Join MindPixel Web & Design Company" 
        description="Join the MindPixel team in Thrissur. We are a passionate digital marketing, SEO, and web design company crafting pixel-perfect experiences." 
      />

      <div ref={sliderRef} className="w-full">
        <Breadcrumb pageName="Careers" />
      </div>

      <div style={{
        background: "#fff",
        position: "relative",
        zIndex: 10,
      }}>
        <CareerSection />
      </div>
    </div>
  );
};

export default Career;