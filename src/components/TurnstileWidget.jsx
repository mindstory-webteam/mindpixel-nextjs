"use client";
import React, { useEffect, useRef } from "react";

const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/**
 * Cloudflare Turnstile CAPTCHA Component
 * SiteKey defaults to Cloudflare's official testing key (1x00000000000000000000AA) which always passes in local dev.
 */
export default function TurnstileWidget({
  siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "0x4AAAAAAEN5RWpMofin0t5v",
  onVerify,
  onExpire,
  onError,
  theme = "light",
  size = "normal",
  className = ""
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Keep callbacks in refs to avoid re-initializing Turnstile widget on parent state updates (typing)
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
    onErrorRef.current = onError;
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    let isMounted = true;
    let intervalId = null;

    const renderWidget = () => {
      if (!isMounted || !containerRef.current || !window.turnstile) return;

      // If already rendered, do not render duplicate
      if (widgetIdRef.current !== null) {
        return;
      }

      // Clear any existing children before rendering
      if (containerRef.current.hasChildNodes()) {
        containerRef.current.innerHTML = "";
      }

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
          size: size,
          callback: (token) => {
            if (isMounted && onVerifyRef.current) onVerifyRef.current(token);
          },
          "expired-callback": () => {
            if (isMounted && onExpireRef.current) onExpireRef.current();
          },
          "error-callback": (code) => {
            if (isMounted && onErrorRef.current) onErrorRef.current(code);
          }
        });
      } catch (err) {
        console.error("Turnstile rendering error:", err);
      }
    };

    const checkAndRender = () => {
      if (!isMounted) return;
      if (window.turnstile) {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        renderWidget();
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      let script = document.querySelector(`script[src*="challenges.cloudflare.com/turnstile"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = TURNSTILE_SCRIPT_URL;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      script.addEventListener("load", checkAndRender);
      intervalId = setInterval(checkAndRender, 100);
    }

    return () => {
      isMounted = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) { }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, size]);

  return <div ref={containerRef} className={`flex justify-start ${className}`} />;
}
