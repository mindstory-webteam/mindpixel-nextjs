"use client";
import Breadcrumb from "../components/BreadCrums";
import TechStack from "../components/TechStack";
import ServiceWhatWeDo from "../components/ServiceWhatWeDo";
import ServicesList from "../components/ServiceList";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SEO from '../components/SEO';

export default function ServicesPage() {
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
        title="Services | Web Design, SEO & Growth Marketing" 
        description="Discover MindPixel's services: Web Design & Development, UI/UX, SEO, and Growth Marketing. We build sites that sell and data-driven strategies." 
      />

      <div ref={containerRef} style={{ background: "#fff" }}>
        <div ref={sliderRef}>
          <Breadcrumb pageName="Service" />
        </div>
        <div style={{ background: "#fff", position: "relative", zIndex: 10 }}>
          <ServiceWhatWeDo />
          <ServicesList />
          <TechStack />
        </div>
      </div>
    </>
  );
}