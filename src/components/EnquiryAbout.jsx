"use client";
import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "pillar-1",
    title: "Conversion-First Architecture",
    description:
      "We design interfaces tailored to human psychology. Every headline, layout decision, and call-to-action is structured to guide visitors effortlessly into paying clients.",
    highlights: [
      "Custom UI/UX (Zero generic templates)",
      "Mobile-first responsive hierarchy",
      "Frictionless conversion journeys",
    ],
  },
  {
    id: "pillar-2",
    title: "Sub-Second Performance",
    description:
      "Built with high-speed modern technologies for instant page loads, flawless mobile responsiveness, and clean code that search engines love to rank.",
    highlights: [
      "Next.js & React scalable architecture",
      "95+ Google Core Web Vitals score",
      "Clean, scalable, enterprise-ready code",
    ],
  },
  {
    id: "pillar-3",
    title: "Data-Driven Marketing Synergy",
    description:
      "As the web arm of MindStory, our sites are engineered from day one to connect directly with high-intent SEO, paid ad campaigns, and qualified lead generation.",
    highlights: [
      "Built-in technical SEO foundations",
      "Automated lead tracking & attribution",
      "Direct integration with ad campaigns",
    ],
  },
];

const metrics = [
  { value: "150+", label: "Brands Elevated", detail: "Across Kerala, India & GCC" },
  { value: "98%", label: "Client Satisfaction", detail: "Long-term agency partnerships" },
  { value: "3–6 Wks", label: "Average Delivery", detail: "Agile, transparent sprints" },
  { value: "100%", label: "Custom Architecture", detail: "Zero sluggish page builders" },
];

export default function EnquiryAbout() {
  return (
    <section className="bg-white pt-6 md:pt-8 pb-16 md:pb-24 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .about-text-card {
          background: #fafafa;
          border: 1px solid #eaeaea;
          border-radius: 18px;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
      `}</style>

      <div className="w-full max-w-[1475px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-left">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
              fontWeight: 600,
              color: "#111111",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              margin: "0 0 12px 0",
              maxWidth: "840px",
            }}
          >
            Where Technical Precision Meets Creative Business Growth.
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#555555",
              margin: 0,
              maxWidth: "780px",
            }}
          >
            MindPixel is the specialized web development & design arm of MindStory, based in Thrissur, Kerala. We engineer high-converting digital platforms, custom web applications, and growth infrastructure that turn visitors into loyal paying customers.
          </p>
        </div>

        {/* 3 Core Pillars — Pure Typography & Highlights, ZERO IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.id}
              className="about-text-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div>
                {/* Pillar Title */}
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#111111",
                    lineHeight: 1.3,
                    margin: "0 0 12px 0",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    color: "#555555",
                    margin: "0 0 24px 0",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div
                style={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.07)",
                  paddingTop: "20px",
                }}
              >
                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  {item.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center gap-2.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13.5px",
                        color: "#333333",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#f97316",
                          flexShrink: 0,
                        }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone Strip — Clean Metrics Banner, ZERO IMAGES */}
        <motion.div
          style={{
            background: "#111111",
            borderRadius: "18px",
            padding: "36px 32px",
            border: "1px solid #242424",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className={`flex flex-col ${
                  mIdx !== 0 ? "md:border-l md:border-white/10 md:pl-8" : ""
                }`}
              >
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "4px",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14.5px",
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.95)",
                    marginBottom: "2px",
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12.5px",
                    color: "rgba(255, 255, 255, 0.55)",
                  }}
                >
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
