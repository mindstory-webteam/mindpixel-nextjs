"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { img } from "../assets/assest";

const services = [
  {
    id: "01",
    tag: "Mobile App Development",
    title: "Mobile App Development",
    description:
      "Ideas are transformed into functional, polished mobile apps that balance innovation, usability, and reliable performance from the first launch.",
    subtags: ["iOS & Android", "React Native", "Flutter", "App Store Ready"],
    image: `${img.mobileappdevelopment}`,
  },
  {
    id: "02",
    tag: "SaaS Application",
    title: "SaaS Application",
    description:
      "Full-stack SaaS applications built for performance, scalability, and ease of use, covering intuitive interfaces, strong back-end systems, and cloud infrastructure.",
    subtags: ["Multi-tenancy", "Subscription Logic", "Real-time Sync", "Cloud-Native"],
    image: `${img.saasservice}`,
  },
  {
    id: "03",
    tag: "Custom Software",
    title: "Custom Software",
    description:
      "Custom software built from scratch to solve specific business challenges, giving you complete control over workflows, data, and digital operations.",
    subtags: ["Tailored Logic", "API Development", "Legacy Integration"],
    image: `${img.shreebhojanmockup}`,
  },
  {
    id: "04",
    tag: "Enterprise Software",
    title: "Enterprise Software",
    description:
      "Enterprise-grade systems designed to simplify complex workflows, improve team coordination, support high data security, and scale across departments.",
    subtags: ["ERP Solutions", "Role-Based Access", "Workflow Automation"],
    image: `${img.EnterpriseSoftware}`,
  },
  {
    id: "05",
    tag: "SEO",
    title: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies that improve search visibility, strengthen site architecture, grow organic traffic, and connect your brand with high-intent buyers.",
    subtags: ["Technical SEO", "Content Strategy", "Core Web Vitals"],
    image: `${img.seoservice}`,
  },
  {
    id: "06",
    tag: "UI / UX Design",
    title: "UI / UX Design",
    description:
      "User-focused digital experiences designed around clean layouts, intuitive navigation, meaningful interactions, and conversion-focused usability.",
    subtags: ["User Research", "Wireframes & Prototypes", "Design Systems"],
    image: `${img.uiux}`,
  },
];

export default function EnquiryService() {
  const lenis = useLenis();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      if (lenis) {
        lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-white pt-6 md:pt-8 pb-16 md:pb-24 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .syne {
          font-family: 'Poppins', sans-serif;
        }

        .service-square-card {
          border-radius: 0px !important;
          background: #111111;
          border: 1px solid #262626;
          min-height: 620px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
        }

        .service-square-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
          border-color: #444444;
        }

        @media (max-width: 640px) {
          .service-square-card {
            min-height: 520px;
          }
        }
      `}</style>

      <div className="w-full max-w-[1475px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Square / Rectangular Sharp Cards Grid with 5px Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px]">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              className="service-square-card group"
              onClick={scrollToContact}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            >
              {/* Visual Mockup Preview - Fills the card width edge-to-edge */}
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  overflow: "hidden",
                  borderRadius: "0px",
                  background: "#080808",
                  borderBottom: "1px solid #222222",
                  position: "relative",
                }}
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    borderRadius: "0px",
                  }}
                  className="group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body with Padding */}
              <div
                style={{
                  padding: "32px 30px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="syne text-2xl lg:text-[27px] font-semibold text-white leading-tight mb-3"
                    style={{ margin: "0 0 12px" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.65,
                      color: "rgba(255, 255, 255, 0.75)",
                      margin: 0,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Card Bottom: Subtags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    marginTop: "20px",
                  }}
                >
                  {svc.subtags.map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "5px 12px",
                        borderRadius: "0px",
                        background: "rgba(255, 255, 255, 0.06)",
                        color: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
