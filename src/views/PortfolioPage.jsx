"use client";
import React from 'react'
import Breadcrumb from '../components/BreadCrums'
import OurWorkClients from '../components/OurWorksClients'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurWork from '../components/OurWork'
import SEO from '../components/SEO';

const Portfolio = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO 
        title="Portfolio | Web Design & Digital Marketing Work" 
        description="View the work of MindPixel. We have elevated 150+ brands through expert web design, UI/UX, SEO, and growth marketing in Thrissur, Kerala." 
      />

      <div ref={containerRef} style={{ background: "#fff" }}>
        <div ref={sliderRef}>
          <Breadcrumb pageName="Portfolio" />
        </div>
        <div style={{ background: "#fff", position: "relative", zIndex: 10 }}>
          {/* <OurWorksSwiper /> */}
          <OurWork/>
          <OurWorkClients/>
        </div>
      </div>
    </>
  )
}

export default Portfolio