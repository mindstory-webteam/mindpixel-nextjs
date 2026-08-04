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

  // Portal + resize listener
  useEffect(() => {
    getPortalRoot();
    setPortalReady(true);

    const checkMd = () => setIsMd(window.innerWidth >= MD_BREAKPOINT);
    checkMd();
    window.addEventListener("resize", checkMd);
    return () => window.removeEventListener("resize", checkMd);
  }, []);

  // Trim stale refs when column count changes
  useEffect(() => {
    colRefs.current = colRefs.current.slice(0, column);
  }, [column]);

  const getCols = () => colRefs.current.filter(Boolean);

  // Animate overlay OUT after route change
  useEffect(() => {
    if (!isTransitioning.current) return;

    if (!isMd) {
      isTransitioning.current = false;
      return;
    }

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
      delay: 0.05,
      onComplete: () => {
        gsap.set(getCols(), { y: "100%" });
        isTransitioning.current = false;
      },
    });

    return () => tweenRef.current?.kill();
  }, [pathname, isMd]);

  const navigateTo = useCallback(
    (href) => {
      if (isTransitioning.current) return;
      if (pathname === href) return;

      if (!isMd) {
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
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.05,
        onComplete: () => router.push(href),
      });
    },
    [router, pathname, isMd]
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
            background: "#ff8c00",
            transform: "translateY(100%)",
            display: isMd ? "block" : "none",
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