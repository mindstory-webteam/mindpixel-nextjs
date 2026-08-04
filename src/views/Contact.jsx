"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Breadcrumb from '../components/BreadCrums';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: "+=100%", 
        pin: true,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="contact-page-wrapper pb-10"
    >
      <SEO 
        title="Contact Us | MindPixel Web Development Company" 
        description="Contact MindPixel, a leading web design and digital marketing company in Thrissur, Kerala. Let's build a digital presence that drives real results." 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        
        .contact-page-wrapper {
          background: #fff; 
          min-height: 100vh; 
          font-family: 'Syne', sans-serif;
        }

      `}</style>

      <div ref={sliderRef} style={{ width: '100%' }}>
        <Breadcrumb pageName="Contact" />
      </div>

      <div style={{ 
        background: '#fff', 
        position: 'relative', 
        zIndex: 10,
      }}>
        <ContactSection />

      </div>
    </div>
  );
};

export default Contact;