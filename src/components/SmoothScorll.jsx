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
    const update = (time) => {
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.raf(time * 1000);
        ScrollTrigger.update(); // keep GSAP in sync with Lenis's virtual scroll position
      }
    };

    // Tell GSAP's ScrollTrigger to use Lenis's scroll position
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        const lenis = lenisRef.current?.lenis;
        if (arguments.length && lenis) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis ? lenis.scroll : window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    });

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Sync GSAP's scroll refresh calculations back to Lenis
    const handleRefresh = () => {
      lenisRef.current?.lenis?.resize();
    };
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    // Dynamically update Lenis scroller limits whenever DOM changes (Sanity load, image load, accordion expand)
    const resizeObserver = new ResizeObserver(() => {
      lenisRef.current?.lenis?.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      gsap.ticker.remove(update);
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      ScrollTrigger.clearScrollMemory(); // remove the scrollerProxy on unmount
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