"use client";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  // Sync GSAP ticker with Lenis raf and handle dynamic height resizing
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger (only updates when scrolling occurs)
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    const update = (time) => {
      const l = lenisRef.current?.lenis;
      if (l) {
        l.raf(time * 1000);
      }
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Sync GSAP's scroll refresh calculations back to Lenis
    const handleRefresh = () => {
      lenisRef.current?.lenis?.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    // Debounced ResizeObserver to prevent continuous layout recalculations during DOM updates
    let resizeTimer = null;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lenisRef.current?.lenis?.resize();
      }, 200);
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
      }
      gsap.ticker.remove(update);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeObserver.disconnect();
    };
  }, []);

  // Handle route change scrolling
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Defer refresh slightly to ensure new route DOM is fully painted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}