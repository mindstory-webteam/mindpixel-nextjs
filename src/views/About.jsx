"use client";
import React from 'react'
import Breadcrumb from '../components/BreadCrums'
import AboutSection from '../components/AboutSection'
import OurMembers from '../components/OurMembers'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkProcess from '../components/WorkProcess'
import SEO from '../components/SEO';

const About = () => {
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
        title="About Us | MindPixel Web & Design Company" 
        description="Learn about MindPixel, the web design and development arm of MindStory in Thrissur, Kerala. Where strategy meets story to build your digital presence." 
      />

      <div ref={containerRef} style={{ background: "#fff" }}>
        <div ref={sliderRef}>
          <Breadcrumb pageName="About" />
        </div>
        <div style={{ background: "#fff", position: "relative", zIndex: 10 }}>
          <AboutSection />
          <WorkProcess/>
          <OurMembers />
        </div>
      </div>
    </>
  )
}

export default About