"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import gsap from "gsap";

const TRANSITION_MIN_WIDTH = 1025; // Disable transition overlay on mobile and tablet for optimal performance

function normalizePath(href) {
  if (!href) return "";
  let path = href.toLowerCase();
  try {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      path = new URL(href).pathname;
    }
  } catch (e) { }

  path = path.split("#")[0].split("?")[0];
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}

function shouldSkipTransition(href) {
  if (!href) return false;
  const path = normalizePath(href);

  // Skip for thank-you page
  if (path === "/thank-you" || path.startsWith("/thank-you/")) {
    return true;
  }

  // Skip for individual blog detail pages (e.g., /blogs/my-post-slug)
  if (path.startsWith("/blogs/")) {
    return true;
  }

  return false;
}

export const TransitionContext = createContext({ navigateTo: () => { } });
export const usePageTransition = () => useContext(TransitionContext);

function getPortalRoot() {
  let el = document.getElementById("transition-portal");
  if (!el) {
    el = document.createElement("div");
    el.id = "transition-portal";
    document.body.appendChild(el);
  }
  return el;
}

export default function TransitionProvider({ children, column = 6 }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const colRefs = useRef([]);
  const timelineRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const watchdogTimerRef = useRef(null);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    getPortalRoot();
    setPortalReady(true);
  }, []);

  useEffect(() => {
    colRefs.current = colRefs.current.slice(0, column);
  }, [column]);

  const getCols = () => colRefs.current.filter(Boolean);

  const resetOverlay = useCallback(() => {
    if (watchdogTimerRef.current) {
      clearTimeout(watchdogTimerRef.current);
      watchdogTimerRef.current = null;
    }
    timelineRef.current?.kill();
    const cols = getCols();
    if (cols.length) {
      gsap.set(cols, { y: "100%" });
    }
    isTransitioningRef.current = false;
  }, []);

  const animateOut = useCallback(() => {
    if (watchdogTimerRef.current) {
      clearTimeout(watchdogTimerRef.current);
      watchdogTimerRef.current = null;
    }

    const cols = getCols();
    if (!cols.length) {
      isTransitioningRef.current = false;
      return;
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    timelineRef.current?.kill();
    timelineRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(cols, { y: "100%" });
        isTransitioningRef.current = false;
      },
    });

    timelineRef.current.to(cols, {
      y: "-100%",
      duration: 0.36,
      ease: "power3.inOut",
      stagger: 0.025,
    });
  }, [lenis]);

  // When pathname changes, trigger OUT animation if currently transitioning
  useEffect(() => {
    if (isTransitioningRef.current) {
      animateOut();
    } else {
      resetOverlay();
    }
  }, [pathname, animateOut, resetOverlay]);

  useEffect(() => {
    return () => {
      resetOverlay();
    };
  }, [resetOverlay]);

  const navigateTo = useCallback(
    (href) => {
      if (!href) return;

      // Handle anchor hash links
      if (href.includes("#")) {
        const [targetPath, hash] = href.split("#");
        const currentClean = normalizePath(pathname);
        const targetClean = normalizePath(targetPath);

        if (!targetPath || targetClean === currentClean) {
          const el = document.getElementById(hash);
          if (el) {
            if (lenis) {
              lenis.scrollTo(el);
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
            return;
          }
        }
      }

      const currentNorm = normalizePath(pathname);
      const targetNorm = normalizePath(href);

      // If already on this page, do nothing
      if (currentNorm === targetNorm) {
        return;
      }

      // If already in middle of transition, do not duplicate
      if (isTransitioningRef.current) {
        return;
      }

      // Skip transition for tablet/mobile or specific skipped routes
      if (
        shouldSkipTransition(href) ||
        typeof window === "undefined" ||
        window.innerWidth < TRANSITION_MIN_WIDTH
      ) {
        router.push(href);
        return;
      }

      const cols = getCols();
      if (!cols.length) {
        router.push(href);
        return;
      }

      isTransitioningRef.current = true;
      timelineRef.current?.kill();

      // Safety Watchdog: If pathname change never fires within 900ms, force unlock and animate out
      if (watchdogTimerRef.current) {
        clearTimeout(watchdogTimerRef.current);
      }
      watchdogTimerRef.current = setTimeout(() => {
        if (isTransitioningRef.current) {
          animateOut();
        }
      }, 900);

      gsap.set(cols, { y: "100%" });

      timelineRef.current = gsap.timeline({
        onComplete: () => {
          router.push(href);
        },
      });

      timelineRef.current.to(cols, {
        y: "0%",
        duration: 0.26,
        ease: "power3.inOut",
        stagger: 0.02,
      });
    },
    [router, pathname, lenis, animateOut]
  );

  const overlay = (
    <div
      className="hidden lg:flex"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10000,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: column }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            colRefs.current[idx] = el;
          }}
          style={{
            width: `calc(100% / ${column} + 2px)`,
            marginLeft: idx === 0 ? 0 : "-2px",
            flexShrink: 0,
            height: "100%",
            background: "#f78624",
            transform: "translateY(100%)",
            willChange: "transform",
            outline: "1px solid #f78624",
          }}
        />
      ))}
    </div>
  );

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      {portalReady && createPortal(overlay, getPortalRoot())}
    </TransitionContext.Provider>
  );
}