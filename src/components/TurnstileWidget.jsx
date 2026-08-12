"use client";
import React, { useEffect, useRef } from "react";

const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/**
 * Cloudflare Turnstile CAPTCHA Component
 * SiteKey defaults to Cloudflare's official testing key (1x00000000000000000000AA) which always passes in local dev.
 */
export default function TurnstileWidget({
  siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA",
  onVerify,
  onExpire,
  onError,
  theme = "light"
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

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;

      // Only remove if container has child nodes and a widget ID exists
      if (widgetIdRef.current !== null) {
        if (containerRef.current.hasChildNodes()) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {}
        }
        widgetIdRef.current = null;
      }

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
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

      const handleLoad = () => {
        if (window.turnstile && isMounted) {
          renderWidget();
        }
      };

      script.addEventListener("load", handleLoad);

      return () => {
        script.removeEventListener("load", handleLoad);
        if (widgetIdRef.current !== null && window.turnstile && containerRef.current?.hasChildNodes()) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {}
        }
        isMounted = false;
      };
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile && containerRef.current?.hasChildNodes()) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {}
      }
      isMounted = false;
    };
  }, [siteKey, theme]);

  return <div ref={containerRef} className="my-3 flex justify-center" />;
}
