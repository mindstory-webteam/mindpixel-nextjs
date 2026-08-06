import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ isLoading, onComplete }) => {
  const containerRef = useRef(null);
  const loadingRoundRef = useRef(null);
  const iconRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const frames = ["/favicon.png", "/faviconstroke.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const pathRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(iconRef.current, {
        scale: 0.85,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.65,
        ease: "power3.inOut"
      }, "-=0.1")
      // Animate the SVG path to flatten out with a bounce
      .to(pathRef.current, {
        attr: { d: "M 0 0 L 100 0 Q 50 0 0 0" },
        duration: 0.45,
        ease: "power2.out"
      }, "-=0.45");
    }
  }, [isLoading, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff', 
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible' // Changed to visible so SVG can be seen
      }}
    >
      <div 
        ref={iconRef}
        style={{
          position: 'relative',
          width: '75px',
          height: '75px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img 
          src={frames[frameIndex]} 
          alt="Loading..." 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
        
        <div style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: -1
        }} />
      </div>

      {/* Curved bouncy bottom end */}
      <svg 
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          height: '150px', // Increased height for more curve
          pointerEvents: 'none'
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path 
          ref={pathRef}
          d="M 0 0 L 100 0 Q 50 100 0 0" 
          fill="#ffffff" 
        />
      </svg>
    </div>
  );
};

export default Preloader;