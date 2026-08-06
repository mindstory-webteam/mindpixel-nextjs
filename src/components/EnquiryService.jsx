"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { img } from "../assets/assest";

const cardAccents = [
  { bg: "linear-gradient(135deg, #95257b 0%, #6b1958 100%)", text: "#ffffff" },
  { bg: "linear-gradient(135deg, #95257b 0%, #7c1d66 100%)", text: "#ffffff" },
  { bg: "linear-gradient(135deg, #95257b 0%, #6b1958 100%)", text: "#ffffff" },
  { bg: "linear-gradient(135deg, #95257b 0%, #7c1d66 100%)", text: "#ffffff" },
  { bg: "linear-gradient(135deg, #95257b 0%, #6b1958 100%)", text: "#ffffff" },
  { bg: "linear-gradient(135deg, #95257b 0%, #7c1d66 100%)", text: "#ffffff" },
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
      { label: "Content Optimization", desc: "On-page improvements that make your content clearer and easier for search engines." },
      { label: "Performance Tracking", desc: "Clear reporting with measurable KPIs, ranking movement, and traffic insights." },
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
      { label: "Design Systems", desc: "Consistent, scalable design components that make future updates faster." },
      { label: "Accessibility", desc: "Designs planned to work clearly for different users across devices and screen sizes." },
    ],
    image: `${img.uiux}`,
  },
];

const swirlPaths = [
  "M 1030 55 C 905 95, 808 58, 688 118 C 568 178, 528 305, 408 345 C 290 383, 182 322, 102 382 C 42 424, -30 505, -30 625",
  "M 180 -30 C 210 70, 280 160, 230 270 C 180 375, 70 390, 90 490 C 110 565, 250 600, 400 580 C 550 558, 660 490, 790 520 C 890 542, 960 590, 1030 585",
  "M 1030 410 C 920 390, 820 440, 700 375 C 580 310, 530 190, 390 165 C 265 143, 158 225, 65 185 C 15 163, -30 115, -30 50",
  "M 1030 75 C 905 55, 830 125, 795 230 C 758 335, 820 415, 775 500 C 730 572, 625 608, 505 588 C 385 568, 285 505, 162 525 C 82 540, 18 585, -30 625",
  "M -30 590 C 95 525, 175 445, 275 385 C 375 325, 435 225, 555 205 C 655 188, 758 248, 860 205 C 942 170, 985 100, 1030 35",
  "M 1030 55 C 905 95, 808 58, 688 118 C 568 178, 528 305, 408 345 C 290 383, 182 322, 102 382 C 42 424, -30 505, -30 625",
];

const N = services.length;
const STICKY_TOP = 85; // navbar height in px

export default function EnquiryService() {
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 641px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        if (!cards.length) return;

        // Card 0 sits visible. Cards 1…N-1 start fully below the viewport.
        gsap.set(cards[0], { y: 0, force3D: true });
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], { y: "100vh", force3D: true });
        }



        // Scrubbed timeline — each card slides from 100vh → 0, perfectly clipped.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: `top ${STICKY_TOP}px`,
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < cards.length; i++) {
          const currentCard = cards[i];

          // Slide card up from 100vh (completely outside)
          tl.to(
            currentCard,
            { y: 0, ease: "none", duration: 1 },
            i - 1
          );
        }
      });

      // Refresh ScrollTrigger to ensure accurate pin start positions
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── DESKTOP & TABLET ─────────────────────────────────────────────── */}
      <div ref={trackRef} className="svc-track">
        <div className="svc-win">
          {services.map((svc, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <div
                key={svc.id}
                ref={(el) => (cardsRef.current[i] = el)}
                className="svc-slot"
                style={{ zIndex: i + 1 }}
              >
                <div
                  className="svc-card"
                  style={{ background: accent.bg, color: accent.text }}
                >
                  {/* decorative swirl */}
                  <svg className="svc-swirl" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden>
                    <path
                      className="svc-swirl-path"
                      d={swirlPaths[i]}
                      fill="none"
                      stroke="#e9d5ff"
                      strokeWidth="56"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="svc-grid">
                    {/* image */}
                    <div className="svc-img-wrap">
                      <img src={svc.image} alt={svc.title} className="svc-img" />
                      <span className="svc-img-tag">{svc.tag}</span>
                    </div>

                    {/* text */}
                    <div className="svc-body">
                      <p className="svc-desc" style={{ color: "rgba(255,255,255,0.82)" }}>
                        {svc.description}
                      </p>

                      <div className="svc-points">
                        {svc.points.map((pt) => (
                          <div className="svc-point-item" key={pt.label}>
                            <div className="svc-dot" />
                            <div className="svc-point-body">
                              <span className="svc-lbl">{pt.label}</span>
                              <span className="svc-ptdesc" style={{ color: "rgba(255,255,255,0.68)" }}>
                                {pt.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="svc-tags">
                        {svc.subtags.map((sub) => (
                          <span key={sub} className="svc-tag">
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
        </div>
      </div>

      {/* ── MOBILE ───────────────────────────────────────────────────────── */}
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
            <div className="svc-img-wrap" style={{ height: 220, borderRadius: 0 }}>
              <img src={svc.image} alt={svc.title} className="svc-img" />
              <span className="svc-img-tag">{svc.tag}</span>
            </div>
            <div className="svc-body" style={{ height: "auto", padding: "1.4rem 1.2rem" }}>
              <p className="svc-desc" style={{ color: "rgba(255,255,255,0.82)" }}>{svc.description}</p>
              <div className="svc-points">
                {svc.points.map((pt) => (
                  <div className="svc-point-item" key={pt.label}>
                    <div className="svc-dot" />
                    <div className="svc-point-body">
                      <span className="svc-lbl">{pt.label}</span>
                      <span className="svc-ptdesc" style={{ color: "rgba(255,255,255,0.68)" }}>{pt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="svc-tags" style={{ marginBottom: "0.5rem" }}>
                {svc.subtags.map((t) => (
                  <span key={t} className="svc-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── STYLES ──────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        /* ─ scroll track: N×100vh gives scroll distance for all N cards ─ */
        .svc-track {
          height: ${N * 100}vh;
          position: relative;
          margin-top: 0px;
          margin-bottom: 60px;
        }

        /* ─ sticky window: sticks until track ends ─ */
        .svc-win {
          position: sticky;
          top: ${STICKY_TOP}px;
          height: calc(100vh - ${STICKY_TOP}px);
          overflow: hidden;
          background: #fff;
        }

        /* ─ card slot: fills the sticky window ─ */
        .svc-slot {
          position: absolute;
          inset: 20px 60px;
          will-change: transform;
          transform: translateZ(0);
        }

        /* ─ card: rounded, NO shadows ─ */
        .svc-card {
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          will-change: transform;
          box-sizing: border-box;
        }

        .svc-swirl {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .svc-swirl-path {
          opacity: 0.3;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          height: 100%;
          position: relative;
          z-index: 1;
          align-items: stretch;
          min-height: 0;
        }

        .svc-img-wrap {
          position: relative;
          border-radius: 1.25rem;
          overflow: hidden;
          height: 100%;
          width: 100%;
          transform: translateZ(0);
        }

        .svc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .svc-card:hover .svc-img { transform: scale(1.05); }

        .svc-img-tag {
          position: absolute;
          bottom: 14px;
          left: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 2;
          color: #fff;
          background: rgba(0,0,0,0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.22);
        }

        .svc-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem 2rem;
          gap: 0.75rem;
          overflow: hidden;
          height: 100%;
          min-height: 0;
          box-sizing: border-box;
        }

        .svc-desc {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.62;
          margin: 0;
        }

        .svc-points {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .svc-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          transition: transform 0.25s ease;
        }
        .svc-point-item:hover { transform: translateX(3px); }

        .svc-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          margin-top: 0.38rem;
        }

        .svc-point-body {
          display: flex;
          flex-direction: column;
          gap: 0.08rem;
        }

        .svc-lbl {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1.3;
          color: #fff;
        }

        .svc-ptdesc {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.4;
        }

        .svc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.42rem;
        }

        .svc-tag {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 9999px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.4);
          opacity: 0.85;
          letter-spacing: 0.04em;
          cursor: default;
          transition: opacity 0.2s ease;
        }
        .svc-tag:hover { opacity: 1; }

        /* mobile hidden on desktop */
        .svc-mobile { display: none; }

        /* ─ responsive ─ */
        @media (max-width: 1280px) {
          .svc-slot { inset: 20px 40px; }
          .svc-desc { font-size: 14px; }
          .svc-lbl { font-size: 15px; }
          .svc-ptdesc { font-size: 13px; }
        }
        @media (max-width: 1024px) {
          .svc-slot { inset: 14px 24px; }
          .svc-grid { grid-template-columns: 1fr 1fr; }
          .svc-desc { font-size: 13px; line-height: 1.6; }
          .svc-lbl { font-size: 14px; }
          .svc-ptdesc { font-size: 12px; }
          .svc-body { padding: 1rem 1.3rem; gap: 0.8rem; }
          .svc-img-tag { font-size: 17px; }
          .svc-points { gap: 0.5rem; }
        }
        @media (max-width: 768px) {
          .svc-slot { inset: 10px 14px; }
          .svc-card { border-radius: 1.5rem; padding: 1.5rem; }
        }

        /* ─ mobile: plain stacked list ─ */
        @media (max-width: 640px) {
          .svc-track { display: none; }
          .svc-mobile {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 14px;
            margin-top: 40px;
            margin-bottom: 40px;
            background: #fff;
          }
          .svc-mobile-card {
            border-radius: 1.5rem;
            background: linear-gradient(135deg, #95257b 0%, #6b1958 100%);
            color: #fff;
            overflow: hidden;
          }
          .svc-mobile-card .svc-grid { grid-template-columns: 1fr; height: auto; }
          .svc-mobile-card .svc-desc   { font-size: 0.88rem; }
          .svc-mobile-card .svc-lbl    { font-size: 0.9rem; }
          .svc-mobile-card .svc-ptdesc { font-size: 0.8rem; }
          .svc-mobile-card .svc-img-tag { font-size: 0.9rem; }
        }
      `}</style>
    </>
  );
}
