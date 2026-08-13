"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { img } from "../assets/assest";

gsap.registerPlugin(ScrollTrigger);

const cardAccents = [
  { bg: "#95257b", text: "#ffffff" },
  { bg: "#95257b", text: "#ffffff" },
  { bg: "#95257b", text: "#ffffff" },
  { bg: "#95257b", text: "#ffffff" },
  { bg: "#95257b", text: "#ffffff" },
  { bg: "#95257b", text: "#ffffff" },
];

const services = [
  {
    id: "01",
    tag: "Mobile App Development",
    title: "Mobile App Development",
    description:
      "Ideas are transformed into functional, polished mobile apps that balance innovation, usability, and reliable performance from the first launch.",
    subtags: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    points: [
      { label: "Cross-Platform", desc: "Single codebase for iOS and Android with native-level performance." },
      { label: "Offline Support", desc: "Apps that work seamlessly even without an internet connection." },
      { label: "Push Notifications", desc: "Engage users with targeted, real-time push alerts." },
      { label: "App Store Ready", desc: "Optimized metadata, screenshots, and store listing strategy." },
    ],
    image: `${img.mobileappdevelopment}`,
  },
  {
    id: "02",
    tag: "SaaS Application",
    title: "SaaS Application",
    description:
      "Full-stack SaaS applications built for performance, scalability, and ease of use, covering intuitive interfaces, strong back-end systems, and cloud-ready infrastructure.",
    subtags: ["Multi-tenancy", "Subscription Logic", "Real-time Data", "Scalability"],
    points: [
      { label: "Multi-Tenant Ready", desc: "Isolated data, shared infrastructure built for scale from day one." },
      { label: "Subscription Billing", desc: "Flexible plans, trials, and payment flows handled out of the box." },
      { label: "Real-Time Sync", desc: "Live data updates across users with WebSocket or SSE support." },
      { label: "Cloud-Native Stack", desc: "Deployed on modern infrastructure for 99.9% uptime and speed." },
    ],
    image: `${img.saasservice}`,
  },
  {
    id: "03",
    tag: "Custom Software",
    title: "Custom Software",
    description:
      "Custom software built from scratch to solve specific business challenges, giving you better control over workflows, data, and digital operations.",
    subtags: ["Legacy Integration", "API Development", "Cloud Architecture"],
    points: [
      { label: "Fully Tailored", desc: "Built from scratch to match your exact business logic and workflows." },
      { label: "Scalable Architecture", desc: "Designed to grow with your business without costly rewrites." },
      { label: "Seamless Integration", desc: "Connects with your existing tools, APIs, and legacy systems." },
      { label: "End-to-End Delivery", desc: "From discovery to deployment, we own the full development cycle." },
    ],
    image: `${img.shreebhojanmockup}`,
  },
  {
    id: "04",
    tag: "Enterprise Software",
    title: "Enterprise Software",
    description:
      "Enterprise-grade systems designed to simplify complex workflows, improve team coordination, support data security, and scale with your organization.",
    subtags: ["ERP Solutions", "Data Analytics", "Workflow Automation"],
    points: [
      { label: "Role-Based Access", desc: "Granular permissions and access control across departments." },
      { label: "Advanced Analytics", desc: "Real-time dashboards and reports to drive informed decisions." },
      { label: "Workflow Automation", desc: "Eliminate repetitive tasks with smart, rule-based automation." },
      { label: "Enterprise Security", desc: "SOC 2 compliant architecture with audit trails and encryption." },
    ],
    image: `${img.EnterpriseSoftware}`,
  },
  {
    id: "05",
    tag: "SEO",
    title: "Search Engine Optimization (SEO)",
    description:
      "SEO strategies that improve search visibility, strengthen website structure, grow organic traffic, and connect your brand with people actively searching for your services.",
    subtags: ["Technical SEO", "Content Strategy", "Performance Optimization"],
    points: [
      { label: "Technical Audit", desc: "Crawl errors, Core Web Vitals, indexing issues, and site structure fixes." },
      { label: "Keyword Strategy", desc: "Search intent-based keyword mapping aligned with your business goals." },
      { label: "Content Optimization", desc: "On-page improvements that make your content clearer, more useful, and easier for search engines to understand." },
      { label: "Performance Tracking", desc: "Clear reporting with measurable KPIs, ranking movement, traffic insights, and improvement areas." },
    ],
    image: `${img.seoservice}`,
  },
  {
    id: "06",
    tag: "UI / UX Design",
    title: "UI / UX Design",
    description:
      "User-focused digital experiences designed around clear layouts, simple navigation, meaningful interactions, and long-term usability instead of short-lived design trends.",
    subtags: ["User Research", "Interactive Prototyping", "Design Systems"],
    points: [
      { label: "User Research", desc: "Understanding real user needs, behaviour, and pain points before planning the design." },
      { label: "Wireframes & Prototypes", desc: "Clickable layouts that help validate ideas before development begins." },
      { label: "Design Systems", desc: "Consistent, scalable design components that make future updates faster and easier." },
      { label: "Accessibility", desc: "Designs planned to work clearly for different users across devices and screen sizes." },
    ],
    image: `${img.uiux}`,
  },
];

const swirlPaths = [
  `M 1030 55 C 905 95, 808 58, 688 118 C 568 178, 528 305, 408 345 C 290 383, 182 322, 102 382 C 42 424, -30 505, -30 625`,
  `M 180 -30 C 210 70, 280 160, 230 270 C 180 375, 70 390, 90 490 C 110 565, 250 600, 400 580 C 550 558, 660 490, 790 520 C 890 542, 960 590, 1030 585`,
  `M 1030 410 C 920 390, 820 440, 700 375 C 580 310, 530 190, 390 165 C 265 143, 158 225, 65 185 C 15 163, -30 115, -30 50`,
  `M 1030 75 C 905 55, 830 125, 795 230 C 758 335, 820 415, 775 500 C 730 572, 625 608, 505 588 C 385 568, 285 505, 162 525 C 82 540, 18 585, -30 625`,
  `M -30 590 C 95 525, 175 445, 275 385 C 375 325, 435 225, 555 205 C 655 188, 758 248, 860 205 C 942 170, 985 100, 1030 35`,
  `M 1030 55 C 905 95, 808 58, 688 118 C 568 178, 528 305, 408 345 C 290 383, 182 322, 102 382 C 42 424, -30 505, -30 625`,
];

export default function Services() {
  const cardRefs = useRef([]);
  const outroRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Enable GSAP pin & scale animation ONLY on lg screens (desktop: min-width 1280px)
    mm.add("(min-width: 1280px)", () => {
      const cards = cardRefs.current.filter(Boolean);

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const inner = card.querySelector(".svc-stack-inner");

        ScrollTrigger.create({
          trigger: card,
          start: "top 65px",
          endTrigger: outroRef.current,
          end: "top 100%",
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        if (!isLast) {
          gsap.to(inner, {
            scale: 0.95,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 100%",
              end: "top 40px",
              scrub: true,
            },
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* ── DESKTOP ONLY: PINNED STACKING CARDS (lg screens) ──────────────── */}
      <section className="svc-stack-section">
        {services.map((service, index) => {
          const accent = cardAccents[index % cardAccents.length];
          const isLight = accent.text === "#ffffff";
          return (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="svc-card-block"
            >
              <div
                className="svc-stack-inner"
                style={{
                  background: accent.bg,
                  color: accent.text,
                  border: `1px solid ${isLight ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)"}`,
                }}
              >
                <svg
                  className="svc-swirl-svg"
                  viewBox="0 0 1000 600"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d={swirlPaths[index]}
                    fill="none"
                    stroke="#e9d5ff"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.38"
                  />
                </svg>

                <div className="svc-stack-grid">
                  <div className="svc-stack-img-wrap">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="svc-stack-img"
                    />
                    <span className="svc-img-tag">{service.tag}</span>
                  </div>

                  <div className="svc-stack-text">
                    <p
                      className="svc-desc"
                      style={{
                        color: isLight ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.6)",
                      }}
                    >
                      {service.description}
                    </p>

                    <div className="svc-points">
                      {service.points.map((pt) => (
                        <div className="svc-point-item" key={pt.label}>
                          <div className="svc-point-dot" />
                          <div className="svc-point-body">
                            <span className="svc-point-label" style={{ color: accent.text }}>
                              {pt.label}
                            </span>
                            <span
                              className="svc-point-desc"
                              style={{
                                color: isLight ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)",
                              }}
                            >
                              {pt.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="svc-subtags">
                      {service.subtags.map((sub) => (
                        <span
                          key={sub}
                          className="svc-stack-subtag bg-white text-black"
                          style={{
                            border: `1px solid ${isLight ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.3)"}`,
                          }}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={outroRef} className="svc-outro-spacer" />
      </section>

      {/* ── MOBILE & TABLETS (sm, iPad mini, iPad, iPad Pro): OLD CARDS & ANIMATION ── */}
      <div className="svc-mobile">
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            className="svc-mobile-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          >
            <div className="svc-mobile-img-wrap">
              <img src={svc.image} alt={svc.title} className="svc-mobile-img" />
              <span className="svc-img-tag">{svc.tag}</span>
            </div>
            <div className="svc-mobile-body">
              <p className="svc-desc" style={{ color: "rgba(255,255,255,0.85)" }}>
                {svc.description}
              </p>
              <div className="svc-points">
                {svc.points.map((pt) => (
                  <div className="svc-point-item" key={pt.label}>
                    <div className="svc-point-dot" />
                    <div className="svc-point-body">
                      <span className="svc-point-label" style={{ color: "#ffffff" }}>
                        {pt.label}
                      </span>
                      <span className="svc-point-desc" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {pt.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="svc-subtags">
                {svc.subtags.map((t) => (
                  <span key={t} className="svc-stack-subtag bg-white text-black">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        /* ─ DESKTOP PINNED STACKING ─ */
        .svc-stack-section {
          position: relative;
          width: 100%;
          background: #fff;
          padding-bottom: 10px;
        }

        .svc-card-block {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 40px;
          box-sizing: border-box;
        }

        .svc-stack-inner {
          width: calc(100% - 144px);
          height: 75vh;
          border-radius: 2rem;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          will-change: transform;
          box-sizing: border-box;
        }

        .svc-swirl-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .svc-stack-grid {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 0;
          position: relative;
          z-index: 1;
          height: 100%;
          align-items: stretch;
          min-height: 0;
        }

        .svc-stack-img-wrap {
          position: relative;
          border-radius: 1.25rem;
          overflow: hidden;
          height: 100%;
          max-height: 100%;
          width: 100%;
        }

        .svc-stack-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .svc-img-tag {
          position: absolute;
          bottom: 10px;
          left: 12px;
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 9999px;
          opacity: 0.92;
          pointer-events: none;
          z-index: 2;
          color: #fff;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(8px);
        }

        .svc-stack-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem 2rem;
          gap: 1rem;
          overflow: hidden;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
        }

        .svc-desc {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
          margin: 0;
        }

        .svc-points {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .svc-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .svc-point-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          margin-top: 0.35rem;
        }

        .svc-point-body {
          display: flex;
          flex-direction: column;
          gap: 0.12rem;
        }

        .svc-point-label {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1.3;
        }

        .svc-point-desc {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.55;
        }

        .svc-subtags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .svc-stack-subtag {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 9999px;
          letter-spacing: 0.04em;
          cursor: default;
        }

        .svc-outro-spacer { height: 1px; }

        /* ─ HIDE MOBILE CARDS ON LARGE SCREENS ─ */
        @media (min-width: 1280px) {
          .svc-mobile { display: none; }
        }

        /* ─ MOBILE & TABLETS (sm, iPad mini, iPad, iPad Pro): HIDE STACKING & SHOW OLD CARDS ─ */
        @media (max-width: 1279px) {
          .svc-stack-section { display: none !important; }

          .svc-mobile {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: calc(100% - 32px);
            margin: 20px auto 40px auto;
            background: #fff;
            box-sizing: border-box;
          }

          .svc-mobile-card {
            border-radius: 1.8rem;
            background: linear-gradient(135deg, #95257b 0%, #6b1958 100%);
            color: #fff;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          }

          .svc-mobile-img-wrap {
            position: relative;
            height: 240px;
            width: 100%;
            overflow: hidden;
          }

          .svc-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .svc-mobile-body {
            padding: 1.75rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }
        }

        /* ─ iPad Mini, Air, Pro 11" (768px to 1023px): match Navbar md:px-6 (48px) & increase img height ─ */
        @media (min-width: 768px) and (max-width: 1023px) {
          .svc-mobile {
            width: calc(100% - 48px);
            margin: 30px auto 50px auto;
          }
          .svc-mobile-img-wrap {
            height: 420px;
          }
          .svc-mobile-body {
            padding: 2rem 1.75rem;
          }
        }

        /* ─ iPad Pro 12.9" / Tablet Landscape (1024px to 1279px): match Navbar lg:px-[68px] (136px) & increase img height ─ */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .svc-mobile {
            width: calc(100% - 136px);
            margin: 35px auto 55px auto;
          }
          .svc-mobile-img-wrap {
            height: 480px;
          }
          .svc-mobile-body {
            padding: 2.25rem 2rem;
          }
        }

        /* ─ sm screen only: subtag capsule becomes border-only (no white fill),
             with white text. Desktop stacking cards and tablets are untouched. ─ */
        @media (max-width: 640px) {
          .svc-mobile {
            width: calc(100% - 24px);
            margin: 20px auto 40px auto;
            gap: 18px;
          }
          .svc-mobile-img-wrap {
            height: 220px;
          }
          .svc-mobile-body {
            padding: 1.4rem 1.2rem;
            gap: 1rem;
          }
          .svc-desc { font-size: 14px; }
          .svc-point-label { font-size: 15px; }
          .svc-point-desc { font-size: 13px; }

          .svc-mobile .svc-stack-subtag {
            background: transparent !important;
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.6) !important;
          }
        }
      `}</style>
    </>
  );
}