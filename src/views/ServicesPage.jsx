"use client";
import React, { useEffect, useRef } from "react";
import Breadcrumb from "../components/BreadCrums";
import TechStack from "../components/TechStack";
import ServiceWhatWeDo from "../components/ServiceWhatWeDo";
import ServicesList from "../components/ServiceList";
import WorkProcess from "../components/WorkProcess";
import FaqSection from "../components/FaqSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";

const SERVICES_FAQS = [
  {
    q: "How does MindPixel structure service delivery?",
    a: "We work in structured agile sprints with full transparency. Every project begins with a deep discovery phase, followed by interactive wireframing, milestone-based engineering, continuous automated testing, and seamless deployment with post-launch hypercare.",
  },
  {
    q: "What technologies and frameworks do your teams specialize in?",
    a: "Our core engineering capabilities span Next.js, React, React Native, Node.js, Python, PostgreSQL, Redis, Docker, Azure, and AWS, coupled with Figma for human-centered UI/UX design systems.",
  },
  {
    q: "Can you collaborate with our existing in-house team?",
    a: "Yes. We frequently integrate with client engineering and product teams, operating as an autonomous squad or supplementing specific skill gaps in frontend, backend, UI/UX, or technical SEO.",
  },
  {
    q: "What is your typical project timeline and turnaround?",
    a: "Sprint timelines depend on project scope: targeted UI/UX prototypes and high-converting marketing websites take 3 to 6 weeks, while full-scale custom software, SaaS platforms, or mobile apps typically range between 8 to 16 weeks.",
  },
  {
    q: "Do you offer post-launch maintenance, monitoring, and updates?",
    a: "Yes. We offer SLA-backed maintenance packages covering proactive uptime monitoring, security patching, library updates, performance tuning, and ongoing feature iterations.",
  },
  {
    q: "Who owns the intellectual property and code upon completion?",
    a: "You retain 100% intellectual property ownership of all source code, databases, design assets, and production artifacts upon project completion.",
  },
];

export default function ServicesPage() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!sliderRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Services | Web Design, Custom Software & SEO"
        description="Discover MindPixel's end-to-end digital services: Mobile Apps, SaaS Platforms, Custom Software, Enterprise Systems, UI/UX Design, and Organic SEO."
      />

      <div ref={containerRef} style={{ background: "#fff" }}>
        {/* Intro Section Breadcrumb */}
        <div ref={sliderRef}>
          <Breadcrumb
            pageName="Services"
            title="Services"
          />
        </div>

        <div style={{ background: "#fff", position: "relative", zIndex: 10 }}>
          {/* What We Do Overview */}
          <ServiceWhatWeDo />

          {/* Services List with links to detail pages */}
          <ServicesList />

          {/* Skills & Tech Stack Section */}
          <section className="w-full bg-[#111111] text-white pt-14 sm:pt-20 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-12 border-b border-white/10">
                <div className="max-w-2xl">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal font-syne tracking-tight">
                    The technologies & skillsets we build with.
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-md font-syne">
                  We match the optimal modern tech stack to your business requirements, ensuring blazing performance, long-term scalability, and effortless maintainability.
                </p>
              </div>
            </div>

            <TechStack />
          </section>

          {/* Our Process Section */}
          <WorkProcess />

          {/* FAQ Section */}
          <FaqSection
            faqs={SERVICES_FAQS}
            heading="Services & Delivery FAQ"
          />
        </div>
      </div>
    </>
  );
}
