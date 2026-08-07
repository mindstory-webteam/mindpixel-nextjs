"use client";
import { useEffect } from "react";

export default function FaviconBlinker() {
  useEffect(() => {
    let isStroke = false;
    const interval = setInterval(() => {
      // Find all icon link tags injected by Next.js
      const iconLinks = document.querySelectorAll("link[rel*='icon']");
      
      iconLinks.forEach((link) => {
        link.href = isStroke ? "/favicon.png" : "/faviconstroke.png";
      });
      
      isStroke = !isStroke;
    }, 1000); // 1 second interval

    return () => clearInterval(interval);
  }, []);

  return null;
}
