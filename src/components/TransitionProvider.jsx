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

const MD_BREAKPOINT = 768;

// ─── Routes that should NOT trigger the page transition overlay ──────────────
function shouldSkipTransition(href) {
  if (!href) return false;

  // Clean and normalize the href string
  let path = href.toLowerCase();

  try {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      path = new URL(href).pathname;
    }
  } catch (e) { }

  // Ensure it starts with a leading slash
  if (!path.startsWith("/")) {
    path = "/" + path;
  }

  // Strip trailing slash for consistent matching
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Skip for thank-you page
  if (path === "/thank-you" || path.startsWith("/thank-you/")) {
    return true;
  }

  // Skip for individual blog detail pages (e.g., /blogs/my-post-slug)
  // while keeping transitions active on the main /blogs listing page.
  if (path.startsWith("/blogs/")) {
    return true;
  }

  return false;
}

// ─── Context ────────────────────────────────────────────────────────────────
export const TransitionContext = createContext({ navigateTo: () => { } });
export const usePageTransition = () => useContext(TransitionContext);

// ─── Portal root ─────────────────────────────────────────────────────────────
function getPortalRoot() {
  let el = document.getElementById("transition-portal");
  if (!el) {
    el = document.createElement("div");
    el.id = "transition-portal";
    document.body.appendChild(el);
  }
  return el;
}

// ─── Provider ────────────────────────────────────────────────────────────────
export default function TransitionProvider({ children, column = 6 }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const colRefs = useRef([]);
  const tweenRef = useRef(null);
  const isTransitioning = useRef(false);
  const [portalReady, setPortalReady] = useState(false);

  // Portal root initialization
  useEffect(() => {
    getPortalRoot();
    setPortalReady(true);
  }, []);

  // Trim stale refs when column count changes
  useEffect(() => {
    colRefs.current = colRefs.current.slice(0, column);
  }, [column]);

  const getCols = () => colRefs.current.filter(Boolean);

  // Animate overlay OUT after route change
  useEffect(() => {
    if (!isTransitioning.current) return;

    const cols = getCols();
    if (!cols.length) {
      isTransitioning.current = false;
      return;
    }

    tweenRef.current?.kill();
    tweenRef.current = gsap.to(cols, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.05,
      delay: 0.02,
      onComplete: () => {
        gsap.set(getCols(), { y: "100%" });
        isTransitioning.current = false;
      },
    });

    return () => tweenRef.current?.kill();
  }, [pathname]);

  const navigateTo = useCallback(
    (href) => {
      if (!href) return;

      // Handle anchor hash links on the current page — never animate
      if (href.includes('#')) {
        const [targetPath, hash] = href.split('#');
        const currentCleanPath = pathname.replace(/\/$/, '');
        const targetCleanPath = targetPath ? targetPath.replace(/\/$/, '') : currentCleanPath;

        if (targetCleanPath === currentCleanPath || !targetPath) {
          const el = document.getElementById(hash);
          if (el) {
            if (lenis) {
              lenis.scrollTo(el);
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
            return;
          }
        }
      }

      if (isTransitioning.current) return;
      if (pathname === href) return;

      // Skip transition overlay for blog detail pages, thank-you, and small screens
      if (shouldSkipTransition(href) || window.innerWidth < MD_BREAKPOINT) {
        router.push(href);
        return;
      }

      const cols = getCols();
      if (!cols.length) {
        router.push(href);
        return;
      }

      isTransitioning.current = true;
      tweenRef.current?.kill();

      gsap.set(cols, { y: "100%" });
      tweenRef.current = gsap.to(cols, {
        y: "0%",
        duration: 0.32,
        ease: "power3.inOut",
        stagger: 0.025,
        onComplete: () => router.push(href),
      });
    },
    [router, pathname]
  );

  const overlay = (
    <div
      className="hidden md:flex"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      {Array.from({ length: column }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => { colRefs.current[idx] = el; }}
          style={{
            flex: 1,
            height: "100%",
            background: "#f78624",
            transform: "translateY(100%)",
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