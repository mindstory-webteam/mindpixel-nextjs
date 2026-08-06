"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Register once on the client
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      // Lenis drives scroll — keep it simple and reliable
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      // Disable touch smooth so mobile never locks
      smoothTouch: false,
      touchMultiplier: 1,
      // Use the document scroller (not a custom wrapper element)
      // so GSAP ScrollTrigger can read the real scroll position
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger in sync on every Lenis scroll tick
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Use gsap ticker to drive Lenis RAF — avoids duplicated rAF calls
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    // Do NOT use lagSmoothing — it can stall Lenis near heavy animations
    gsap.ticker.lagSmoothing(false);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On route change: scroll to top + refresh ScrollTrigger positions
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Give the new page DOM time to paint before recomputing pin spacers
    const t = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 200);

    return () => clearTimeout(t);
  }, [pathname]);

  return <>{children}</>;
}