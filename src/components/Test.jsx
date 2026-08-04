// WorkVideoAnimation.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

const DEVICE_W = 280;
const DEVICE_H = 340;

// ─── Pexels free CDN video URLs ───────────────────────────────────────────────
// Mobile  → person scrolling phone  (portrait 1080×1920)
// Laptop  → person working laptop   (landscape 1920×1080)
// Tablet  → person using tablet     (portrait 1080×1920)
const PEXELS_VIDEOS = {
  mobile: `${img.faqvideo}`,
  laptop: `${img.faqvideo}`,
  tablet: `${img.faqvideo}`,
};

const DEVICES = [
  {
    key: "mobile",
    label: "Mobile",
    frameImg: img.iphoneframe,
    sectionW: "220px",
    sectionH: "460px",
    finalRotate: -6,
    content: {
      eyebrow: "Seamless on Mobile",
      heading: "Power in\nYour Pocket",
      body: "Designed from the ground up for the smallest screen. Every interaction feels native, fast, and intuitive — wherever you are.",
    },
  },
  {
    key: "laptop",
    label: "Laptop",
    frameImg: img.laptopframe,
    sectionW: "320px",
    sectionH: "210px",
    finalRotate: 0,
    content: {
      eyebrow: "Built for Productivity",
      heading: "Command the\nFull Picture",
      body: "A workspace that expands with you. Rich dashboards, real-time data, and deep controls — all tuned for the desktop experience.",
    },
  },
  {
    key: "tablet",
    label: "Tablet",
    frameImg: img.tabframe,
    sectionW: "260px",
    sectionH: "345px",
    finalRotate: 6,
    content: {
      eyebrow: "Perfectly Balanced",
      heading: "Canvas for\nDeep Focus",
      body: "The tablet experience bridges touch and precision. Ideal for long-form reading, detailed views, and immersive control.",
    },
  },
];

// ─── DeviceFrame ──────────────────────────────────────────────────────────────
// Frame PNG is transparent at the screen area.
// Video sits at z-index 1 (behind), frame PNG at z-index 2 (on top).
// The video shows through the transparent screen cutout naturally.
function DeviceFrame({ frameImg, videoSrc, width, height, innerRef }) {
  return (
    <div
      ref={innerRef}
      style={{ position: "relative", width, height, flexShrink: 0 }}
    >
      {/* Video — behind the frame */}
      {videoSrc && (
        <video
          src={videoSrc}
          loop
          muted
          playsInline
          autoPlay
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}

      {/* Frame PNG — screen area is transparent, video shows through */}
      <img
        src={frameImg}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 2,
          pointerEvents: "none",
          filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.14))",
        }}
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function WorkVideoAnimation({ ourWork }) {
  const sectionRefs = useRef([]);
  const finalSectionRef = useRef(null);
  const finalContentRef = useRef(null);
  const landingZoneRef = useRef(null);
  const deviceRefs = useRef([]);

  // Use Pexels videos by default; fall back to ourWork.videosRaw if provided
  const videos = [
    ourWork?.videosRaw?.[0] || PEXELS_VIDEOS.mobile,
    ourWork?.videosRaw?.[1] || PEXELS_VIDEOS.laptop,
    ourWork?.videosRaw?.[2] || PEXELS_VIDEOS.tablet,
  ];

  useEffect(() => {
    let rafId;
    let ctx;

    rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => {
        ctx = gsap.context(() => {

          // ── 1. Per-section text reveal ──────────────────────────────────
          DEVICES.forEach((_, i) => {
            const sec = sectionRefs.current[i];
            if (!sec) return;
            gsap.fromTo(
              sec.querySelectorAll(".anim-text"),
              { y: 50, opacity: 0 },
              {
                y: 0, opacity: 1,
                stagger: 0.12, duration: 0.9, ease: "power3.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 65%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });

          // ── 2. Final section heading reveal ─────────────────────────────
          if (finalContentRef.current) {
            gsap.fromTo(
              finalContentRef.current.querySelectorAll(".anim-text"),
              { y: 35, opacity: 0 },
              {
                y: 0, opacity: 1,
                stagger: 0.1, duration: 0.9, ease: "power3.out",
                scrollTrigger: {
                  trigger: finalSectionRef.current,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // ── 3. Pinned section — drop devices from above ─────────────────
          const finalEl = finalSectionRef.current;
          const landingEl = landingZoneRef.current;
          if (!finalEl || !landingEl) return;

          gsap.set(deviceRefs.current, {
            y: "-110vh", opacity: 0, scale: 0.9, rotate: 0,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: finalEl,
              start: "top top",
              end: "+=200%",
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
              onEnterBack() {
                gsap.set(deviceRefs.current, { y: 0, opacity: 1, scale: 1 });
                DEVICES.forEach((d, i) => {
                  gsap.set(deviceRefs.current[i], { rotate: d.finalRotate });
                });
              },
            },
          });

          DEVICES.forEach((device, i) => {
            const el = deviceRefs.current[i];
            if (!el) return;
            tl.to(
              el,
              { y: 0, opacity: 1, scale: 1, rotate: device.finalRotate, duration: 1.2, ease: "power4.out" },
              i * 0.18
            );
          });

          tl.to({}, { duration: 0.5 });
          ScrollTrigger.refresh();
        });
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <div className="bg-white font-syne">

      {DEVICES.map((device, i) => (
        <section
          key={device.key}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="min-h-screen flex items-center px-[6%] py-24 border-b border-[#e5e5e0]"
        >
          <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-16 items-center">

            <div className="flex justify-center items-center">
              <DeviceFrame
                frameImg={device.frameImg}
                videoSrc={videos[i]}
                width={device.sectionW}
                height={device.sectionH}
              />
            </div>

            <div className="flex flex-col gap-6">
              <p className="anim-text text-[11px] tracking-[0.2em] uppercase text-[#999]">
                {device.content.eyebrow}
              </p>
              <h2 className="anim-text text-[clamp(32px,4vw,56px)] font-light leading-[1.1] text-[#1a1a1a] whitespace-pre-line uppercase tracking-tight">
                {device.content.heading}
              </h2>
              <p className="anim-text text-[14px] leading-[1.9] text-[#666] max-w-sm">
                {device.content.body}
              </p>

              {/* Step pills */}
              <div className="flex gap-2 mt-4">
                {DEVICES.map((_, j) => (
                  <span
                    key={j}
                    className="block h-0.5 rounded-full transition-all duration-300"
                    style={{
                      width: j === i ? "32px" : "12px",
                      background: j === i ? "#1a1a1a" : "#ccc",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        ref={finalSectionRef}
        className="h-screen w-full flex flex-col items-center justify-between pt-16 pb-12 px-[6%] overflow-hidden"
      >
        <div ref={finalContentRef} className="text-center max-w-2xl shrink-0">
          <p className="anim-text text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3">
            Every Screen, Every Context
          </p>
          <h2 className="anim-text text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-[#1a1a1a] uppercase tracking-tight">
            One Platform,{" "}
            <em className="not-italic text-[#aaa]">All Devices</em>
          </h2>
          <p className="anim-text text-[14px] leading-[1.9] text-[#666] mt-4 max-w-md mx-auto">
            From the smallest pocket to the largest desk — consistent,
            beautiful, always fast.
          </p>
        </div>

        <div
          ref={landingZoneRef}
          className="w-full max-w-4xl mx-auto flex-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignItems: "flex-end",
            overflow: "visible",
            paddingBottom: "1.5rem",
          }}
        >
          {DEVICES.map((device, i) => (
            <div key={device.key} className="flex flex-col items-center gap-3">
              <DeviceFrame
                frameImg={device.frameImg}
                videoSrc={videos[i]}
                width={`${DEVICE_W}px`}
                height={`${DEVICE_H}px`}
                innerRef={(el) => (deviceRefs.current[i] = el)}
              />
              <p className="text-[11px] uppercase tracking-widest text-[#bbb]">
                {device.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}