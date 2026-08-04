"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const skyRef = useRef(null);
  const heroCopyRef = useRef(null);
  const windowContainerRef = useRef(null);
  const heroHeaderRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const skyContainer = skyRef.current;
    const heroCopy = heroCopyRef.current;
    const windowContainer = windowContainerRef.current;
    const heroHeader = heroHeaderRef.current;
    const tagline = taglineRef.current;

    if (!skyContainer) return;
    const skyContainerHeight = skyContainer.offsetHeight;
    const viewportHeight = window.innerHeight;
    const skyMoveDistance = skyContainerHeight - viewportHeight;

    gsap.set(heroCopy, { yPercent: 100 });
    gsap.set(tagline, { opacity: 1, yPercent: 0 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: intro,
        start: "top top",
        end: `+=${window.innerHeight * 3}px`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          let windowScale;
          if (progress <= 0.5) {
            windowScale = 1 + (progress / 0.5) * 3;
          } else {
            windowScale = 4;
          }

          gsap.set(windowContainer, { scale: windowScale });
          gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });
          gsap.set(skyContainer, { y: -progress * skyMoveDistance });

          const taglineOpacity = progress <= 0.2
            ? 1 - (progress / 0.2)
            : 0;
          const taglineY = progress <= 0.2
            ? -(progress / 0.2) * 20
            : -20;
          gsap.set(tagline, { opacity: taglineOpacity, y: taglineY });

          let heroCopyY;
          if (progress <= 0.66) {
            heroCopyY = 100;
          } else if (progress >= 1) {
            heroCopyY = 0;
          } else {
            heroCopyY = 100 * (1 - (progress - 0.65) / 0.34);
          }

          gsap.set(heroCopy, { yPercent: heroCopyY });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const syne = { fontFamily: "'Syne', sans-serif" };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <section
        ref={introRef}
        className="relative w-full overflow-hidden"
        style={{
          height: "100dvh",
          perspective: "1000px",
          color: "#e3e3db",
        }}
      >
        <div
          ref={skyRef}
          className="absolute top-0 left-0 w-full"
          style={{ height: "350dvh", willChange: "transform" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={img.skyimg}
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={img.skyvideo} type="video/mp4" />
            <img
              src={img.skyimg}
              alt="sky"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        <div
          ref={windowContainerRef}
          className="absolute top-0 left-0 w-full"
          style={{ height: "100dvh", willChange: "transform", zIndex: 1 }}
        >
          <img
            src={img.computerimg}
            alt="window"
            className="hidden sm:block w-full h-full object-cover"
          />
          <img
            src={img.mobileimg}
            alt="mobile window"
            className="block sm:hidden w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ zIndex: 1 }}
          />
        </div>

        <div
          ref={taglineRef}
          className="absolute -top-4 left-0 w-full hidden sm:flex items-center justify-center"
          style={{
            height: "100dvh",
            zIndex: 5,
            pointerEvents: "none",
            willChange: "opacity, transform",
          }}
        >
          <p
            style={{
              ...syne,
              fontSize: "clamp(0.45rem, 0.5vw, 0.9rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Crafting the future of digital presence
          </p>
        </div>

        <div
          ref={heroHeaderRef}
          className="absolute top-0 left-0 w-full flex flex-col justify-end"
          style={{
            height: "100dvh",
            willChange: "transform",
            transformStyle: "preserve-3d",
            padding: "6rem 2rem 2rem",
            zIndex: 2,
          }}
        >
          <div className="w-full flex justify-between items-end">
            <div style={{ maxWidth: "340px" }}>
              <p
                style={{
                  ...syne,
                  fontSize: "clamp(2.5rem, 4vw, 5rem)",
                  lineHeight: 0.85,
                  marginBottom: "0.75rem",
                }}
              >
                150+
              </p>
              <p
                style={{
                  ...syne,
                  fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)",
                  lineHeight: 1.4,
                }}
              >
                Projects delivered for startups, brands, and enterprises across
                the globe.
              </p>
            </div>

            <div style={{ maxWidth: "340px", textAlign: "right" }}>
              {/* <p
                style={{
                  ...syne,
                  fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)",
                  lineHeight: 1.4,
                }}
              >
                Client satisfaction across every project because great work
                speaks for itself.
              </p> */}
            </div>
          </div>
        </div>

        <div
          ref={heroCopyRef}
          className="absolute top-0 left-0 w-full flex flex-col justify-center items-center text-center px-8"
          style={{
            height: "100dvh",
            willChange: "transform",
            zIndex: 10,
            transform: "translateY(100%)",
          }}
        >
          <p
            style={{
              ...syne,
              fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            WEB & SOFTWARE SOLUTIONS
          </p>
          <h1
            style={{
              ...syne,
              fontSize: "clamp(4rem, 9vw, 10rem)",
              fontWeight: 700,
              lineHeight: 0.85,
              textAlign: "center",
            }}
          >
            We Build <br /> The Web.
          </h1>
          <p
            style={{
              ...syne,
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              lineHeight: 1.5,
              maxWidth: "480px",
              marginTop: "2rem",
            }}
          >
            From bold landing pages to complex web apps turning your ideas into
            pixel-perfect reality.
          </p>
        </div>
      </section>
    </div>
  );
}