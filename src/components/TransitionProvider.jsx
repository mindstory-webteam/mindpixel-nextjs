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
import gsap from "gsap";

const MD_BREAKPOINT = 768;

// ─── Context ────────────────────────────────────────────────────────────────
export const TransitionContext = createContext({ navigateTo: () => {} });
export const usePageTransition = () => useContext(TransitionContext);

// ─── Portal root ─────────────────────────────────────────────────────────────
// Attach to a well-known id so HMR reloads re-use the existing node
// instead of appending a second one.
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
  const colRefs = useRef([]);
  const tweenRef = useRef(null);
  const isTransitioning = useRef(false);
  const [portalReady, setPortalReady] = useState(false);
  const [isMd, setIsMd] = useState(false);

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
      duration: 0.45,
      ease: "power3.inOut",
      stagger: 0.04,
      delay: 0.05,
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

      // Handle anchor hash links on the current page
      if (href.includes('#')) {
        const [targetPath, hash] = href.split('#');
        const currentCleanPath = pathname.replace(/\/$/, '');
        const targetCleanPath = targetPath ? targetPath.replace(/\/$/, '') : currentCleanPath;

        if (targetCleanPath === currentCleanPath || !targetPath) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
      }

      if (isTransitioning.current) return;
      if (pathname === href) return;

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
        duration: 0.45,
        ease: "power3.inOut",
        stagger: 0.04,
        onComplete: () => router.push(href),
      });
    },
    [router, pathname]
  );

  const overlay = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
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