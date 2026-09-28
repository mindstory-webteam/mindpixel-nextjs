"use client";
import { useEffect } from "react";

export default function FaviconBlinker() {
  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      let isStroke = false;
      interval = setInterval(() => {
        // Find all icon link tags injected by Next.js
        const iconLinks = document.querySelectorAll("link[rel*='icon']");
        
        iconLinks.forEach((link) => {
          link.href = isStroke ? "/favicon.png" : "/faviconstroke.png";
        });
        
        isStroke = !isStroke;
      }, 1000);
    }, 2500);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
