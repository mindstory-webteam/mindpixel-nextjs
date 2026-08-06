"use client";
import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 2, 
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger updated on scroll
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Sync GSAP's scroll refresh calculations back to Lenis
    const handleRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    // Dynamically update Lenis scroller limits whenever DOM changes (Sanity load, image load, accordion expand)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      resizeObserver.disconnect();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Defer refresh slightly to ensure new route DOM is fully painted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}