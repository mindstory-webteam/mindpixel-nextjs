"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from '@/lib/react-router-dom-compat';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqSection from "../components/FaqSection";
import AnimatedButton from "../components/AnimatedButton";
import { img } from "../assets/assest";
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export const WORK_DATA = [
  {
    id: 1,
    panels: [
      {
        title: "Shreebhojan",
        body: "A bold digital transformation for a next-generation retail experience.",
        industry: "Industry - Retail",
        img: `${img.shreebhojanbanner2}`,
      },
    ],
    sticky: {
      img: "https://images.pexels.com/photos/16129724/pexels-photo-16129724.jpeg",
      eyebrow: "Case Study",
      body: "Mindpixel partnered with a leading retail brand to craft a seamless digital storefront that bridges physical and online shopping experiences.",
      heading: "Redefining how people discover and shop for products in a mobile-first world.",
      liveUrl: "https://www.shreebhojana.com/",
    },
    ourWork: {
      heading: "Modernizing\nRetail Commerce",
      body: "We built a high-performance storefront that integrates real-time inventory, personalised recommendations, and a frictionless checkout flow across all devices.",
      cta: "Explore Works",
    },
    details: {
      services: ["UI/UX Design", "Web Development", "Performance Optimisation", "CMS Integration"],
      image: `${img.shreebhojanproductimg2}`,
      description:
        "Mindpixel collaborated with a leading retail chain to redesign their entire e-commerce presence from the ground up. Our team delivered a pixel-perfect, conversion-focused storefront built for speed and scalability reducing load time by 60% and increasing mobile conversions by 38% within the first quarter of launch.",
      specs: [
        { label: "Stack", value: "Next.js / TypeScript / Tailwind CSS / Sanity CMS" },
        { label: "Timescale", value: "16 Weeks" },
        { label: "Platform", value: "Vercel / Headless Shopify" },
      ],
      liveUrl: "https://www.shreebhojana.com/",
    },
  },
  {
    id: 2,
    panels: [
      {
        title: "Pulse",
        body: "Real-time grid analytics for the cities of tomorrow.",
        industry: "Industry - Energy",
        img: "https://images.pexels.com/photos/3932298/pexels-photo-3932298.jpeg",
      },
    ],
    sticky: {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      eyebrow: "Case Study",
      body: "Mindpixel built a live monitoring platform that gives energy operators full visibility into their smart grid infrastructure.",
      heading: "Smart grids need smarter interfaces we built both.",
      cta: "Discover Story",
    },
    ourWork: {
      heading: "Deep Heat,\nClean Future",
      body: "Aurora's closed-loop system extracts heat from depths of 3–5 km. Mindpixel designed the control layer that operators rely on daily.",
      cta: "Explore Works",
    },
    details: {
      services: ["Dashboard Design", "Backend Engineering", "IoT Integration", "DevOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
      description:
        "Mindpixel partnered with Aurora Energy to build a real-time analytics dashboard for smart grid monitoring. The platform ingests live telemetry from thousands of distributed sensors and surfaces actionable insights to grid operators across 14 countries all within a sub-200ms response window.",
      specs: [
        { label: "Stack", value: "React / Node.js / Python / InfluxDB / Grafana" },
        { label: "Timescale", value: "20 Weeks" },
        { label: "Infrastructure", value: "AWS / Kubernetes / Terraform" },
      ],
      liveUrl: "#",
    },
  },
  {
    id: 3,
    panels: [
      {
        title: "Pulse",
        body: "Real-time grid analytics for the cities of tomorrow.",
        industry: "Industry - Energy",
        img: "https://images.pexels.com/photos/3932298/pexels-photo-3932298.jpeg",
      },
    ],
    sticky: {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      eyebrow: "Case Study",
      body: "Mindpixel built a live monitoring platform that gives energy operators full visibility into their smart grid infrastructure.",
      heading: "Smart grids need smarter interfaces we built both.",
      cta: "Discover Story",
    },
    ourWork: {
      heading: "Deep Heat,\nClean Future",
      body: "Aurora's closed-loop system extracts heat from depths of 3–5 km. Mindpixel designed the control layer that operators rely on daily.",
      cta: "Explore Works",
    },
    details: {
      services: ["Dashboard Design", "Backend Engineering", "IoT Integration", "DevOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
      description:
        "Mindpixel partnered with Aurora Energy to build a real-time analytics dashboard for smart grid monitoring. The platform ingests live telemetry from thousands of distributed sensors and surfaces actionable insights to grid operators across 14 countries all within a sub-200ms response window.",
      specs: [
        { label: "Stack", value: "React / Node.js / Python / InfluxDB / Grafana" },
        { label: "Timescale", value: "20 Weeks" },
        { label: "Infrastructure", value: "AWS / Kubernetes / Terraform" },
      ],
      liveUrl: "#",
    },
  },
  {
    id: 4,
    panels: [
      {
        title: "Pulse",
        body: "Real-time grid analytics for the cities of tomorrow.",
        industry: "Industry - Energy",
        img: "https://images.pexels.com/photos/3932298/pexels-photo-3932298.jpeg",
      },
    ],
    sticky: {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      eyebrow: "Case Study",
      body: "Mindpixel built a live monitoring platform that gives energy operators full visibility into their smart grid infrastructure.",
      heading: "Smart grids need smarter interfaces we built both.",
      cta: "Discover Story",
    },
    ourWork: {
      heading: "Deep Heat,\nClean Future",
      body: "Aurora's closed-loop system extracts heat from depths of 3–5 km. Mindpixel designed the control layer that operators rely on daily.",
      cta: "Explore Works",
    },
    details: {
      services: ["Dashboard Design", "Backend Engineering", "IoT Integration", "DevOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
      description:
        "Mindpixel partnered with Aurora Energy to build a real-time analytics dashboard for smart grid monitoring. The platform ingests live telemetry from thousands of distributed sensors and surfaces actionable insights to grid operators across 14 countries all within a sub-200ms response window.",
      specs: [
        { label: "Stack", value: "React / Node.js / Python / InfluxDB / Grafana" },
        { label: "Timescale", value: "20 Weeks" },
        { label: "Infrastructure", value: "AWS / Kubernetes / Terraform" },
      ],
      liveUrl: "#",
    },
  },
  {
    id: 5,
    panels: [
      {
        title: "Pulse",
        body: "Real-time grid analytics for the cities of tomorrow.",
        industry: "Industry - Energy",
        img: "https://images.pexels.com/photos/3932298/pexels-photo-3932298.jpeg",
      },
    ],
    sticky: {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      eyebrow: "Case Study",
      body: "Mindpixel built a live monitoring platform that gives energy operators full visibility into their smart grid infrastructure.",
      heading: "Smart grids need smarter interfaces we built both.",
      cta: "Discover Story",
    },
    ourWork: {
      heading: "Deep Heat,\nClean Future",
      body: "Aurora's closed-loop system extracts heat from depths of 3–5 km. Mindpixel designed the control layer that operators rely on daily.",
      cta: "Explore Works",
    },
    details: {
      services: ["Dashboard Design", "Backend Engineering", "IoT Integration", "DevOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
      description:
        "Mindpixel partnered with Aurora Energy to build a real-time analytics dashboard for smart grid monitoring. The platform ingests live telemetry from thousands of distributed sensors and surfaces actionable insights to grid operators across 14 countries all within a sub-200ms response window.",
      specs: [
        { label: "Stack", value: "React / Node.js / Python / InfluxDB / Grafana" },
        { label: "Timescale", value: "20 Weeks" },
        { label: "Infrastructure", value: "AWS / Kubernetes / Terraform" },
      ],
      liveUrl: "#",
    },
  },
  {
    id: 6,
    panels: [
      {
        title: "Pulse",
        body: "Real-time grid analytics for the cities of tomorrow.",
        industry: "Industry - Energy",
        img: "https://images.pexels.com/photos/3932298/pexels-photo-3932298.jpeg",
      },
    ],
    sticky: {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      eyebrow: "Case Study",
      body: "Mindpixel built a live monitoring platform that gives energy operators full visibility into their smart grid infrastructure.",
      heading: "Smart grids need smarter interfaces we built both.",
      cta: "Discover Story",
    },
    ourWork: {
      heading: "Deep Heat,\nClean Future",
      body: "Aurora's closed-loop system extracts heat from depths of 3–5 km. Mindpixel designed the control layer that operators rely on daily.",
      cta: "Explore Works",
    },
    details: {
      services: ["Dashboard Design", "Backend Engineering", "IoT Integration", "DevOps"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
      description:
        "Mindpixel partnered with Aurora Energy to build a real-time analytics dashboard for smart grid monitoring. The platform ingests live telemetry from thousands of distributed sensors and surfaces actionable insights to grid operators across 14 countries all within a sub-200ms response window.",
      specs: [
        { label: "Stack", value: "React / Node.js / Python / InfluxDB / Grafana" },
        { label: "Timescale", value: "20 Weeks" },
        { label: "Infrastructure", value: "AWS / Kubernetes / Terraform" },
      ],
      liveUrl: "#",
    },
  },
];


const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export default function IntegratedWorkPage() {
  const { id } = useParams();
  const numericId = Number(id);
  const data = WORK_DATA.find((d) => d.id === numericId);

  if (!data) return <div className="text-white p-20">Project not found.</div>;

  return (
    <div className="bg-[#080808]">
      <SEO 
        title="Project Details | MindPixel Portfolio" 
        description="Explore our portfolio of high-performance websites and digital marketing campaigns. See how MindPixel turns browsers into believers." 
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&display=swap'); 
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
      <HeroPanels panels={data.panels} />
      <div className="relative z-10">
        <StickySection sticky={data.sticky} liveUrl={data.details.liveUrl} />
        <WorkHeader ourWork={data.ourWork} />
        <MoreDetails details={data.details} />
        <FaqSection />
      </div>
    </div>
  );
}

function HeroPanels({ panels }) {
  const panel = panels[0];
  return (
    <div className="sticky top-0 h-svh w-full z-0">
      <main className="relative w-full h-full overflow-hidden bg-black font-syne">
        <img
          src={panel.img}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-20">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-end md:gap-10">
            
            <h2
              className="font-normal uppercase leading-[0.85] text-[#f0ebe4] tracking-tighter order-1 md:order-2 w-full md:w-auto text-left md:text-right"
              style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}
            >
              {panel.title}
            </h2>

            <p className="hidden sm:block max-w-xs text-white font-light text-sm md:text-base order-2 md:order-1 leading-relaxed">
              {panel.body}
            </p>
          </div>

          <p className="text-white font-light text-[10px] sm:text-xs md:text-base pt-3 md:pt-5 uppercase tracking-widest opacity-70">
            {panel.industry}
          </p>
        </div>
      </main>
    </div>
  );
}


function StickySection({ sticky, liveUrl }) {
  const [progress, setProgress] = useState(0);
  const stickyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onScroll = () => {
      if (!stickyRef.current || window.innerWidth < 768) return;
      const parent = stickyRef.current.parentElement;
      const rect = parent.getBoundingClientRect();
      const totalScroll = parent.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.min(Math.max(scrolled / totalScroll, 0), 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="bg-[#f9f9f7] font-syne px-5 sm:px-8 pt-12 pb-14">
        {/* Eyebrow */}
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#888] mb-3">
          {sticky.eyebrow}
        </p>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-normal text-[#1a1a1a] leading-snug mb-5">
          {sticky.heading}
        </h2>

        {/* Image */}
        <div className="w-full h-52 sm:h-64 mb-5 rounded-xl overflow-hidden">
          <img
            src={sticky.img}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Body */}
        <p className="text-sm leading-relaxed text-[#555] mb-7">{sticky.body}</p>

        {/* CTA */}
        <AnimatedButton
          bgColor="#1a1a1a"
          textColor="#ffffff"
          hoverBgColor="#ffb86a"
          hoverTextColor="#1a1a1a"
          href={liveUrl}
        >
          Discover Story
        </AnimatedButton>
      </div>
    );
  }

  const ep = ease(progress);
  const top = lerp(300, 0, ep);
  const left = lerp(47, 0, ep);
  const right = lerp(10, 0, ep);
  const height = lerp(400, window.innerHeight || 900, ep);
  const br = lerp(4, 0, ep);

  return (
    <div className="relative bg-[#f9f9f7] font-syne">
      <div style={{ height: "300vh" }}>
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen overflow-hidden bg-[#f9f9f7]"
        >
          <div
            className="absolute inset-0 p-[80px_10%]"
            style={{ opacity: Math.max(1 - progress * 2.5, 0) }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-[1fr_1.2fr] gap-10">
              <div>
                <p className="text-[30px] tracking-[0.15em] uppercase text-[#888] mb-10 mt-10">
                  {sticky.eyebrow}
                </p>
                <p className="text-sm leading-relaxed text-[#555] max-w-70 pt-40">
                  {sticky.body}
                </p>
              </div>
              <div className="pt-10">
                <h2 className="text-2xl font-light text-[#1a1a1a] mb-8">
                  {sticky.heading}
                </h2>
                <AnimatedButton
                  bgColor="#1a1a1a"
                  textColor="#ffffff"
                  hoverBgColor="#ffb86a"
                  hoverTextColor="#1a1a1a"
                  href={liveUrl}
                >
                  Discover Story
                </AnimatedButton>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: `${top}px`,
              left: `${left}%`,
              right: `${right}%`,
              height: `${height}px`,
              zIndex: 5,
            }}
          >
            <img
              src={sticky.img}
              className="w-full h-full object-cover"
              style={{ borderRadius: `${br}px`, filter: "brightness(0.8)" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function WorkHeader({ ourWork }) {
  return (
    <section className="bg-white font-syne pt-12 sm:pt-16 md:pt-24 pb-10 sm:pb-12 px-5 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* Heading */}
        <h1
          className="font-light text-[#1a1a1a] whitespace-pre-line uppercase tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(22px, 4vw, 42px)" }}
        >
          {ourWork.heading}
        </h1>

        {/* Body */}
        <div className="flex flex-col md:pl-10">
          <p className="text-[13px] sm:text-[14px] leading-[1.8] text-[#555] mb-6 md:mb-8 w-full md:max-w-md">
            {ourWork.body}
          </p>
          <div className="w-fit">
            <AnimatedButton
              bgColor="#1a1a1a"
              textColor="#ffffff"
              hoverBgColor="#ffb86a"
              hoverTextColor="#1a1a1a"
              href="/portfolio"
            >
              {ourWork.cta}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreDetails({ details }) {
  if (!details) return null;
  const { services, image, description, specs, liveUrl } = details;

  return (
    <section className="bg-white px-5 sm:px-8 md:px-16 py-12 md:py-16 font-syne">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start max-w-7xl mx-auto">

        {/*  Left column  */}
        <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
          {/* Services */}
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
              Services Provided
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm text-gray-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="w-full overflow-hidden rounded-2xl shadow-sm">
              <img
                src={image}
                alt="Project visual"
                className="w-full h-52 sm:h-64 md:h-80 object-cover"
              />
            </div>
          )}
        </div>

        {/*  Right column  */}
        <div className="order-1 md:order-2">
          {/* Section heading */}
          <h3
            className="font-medium leading-snug text-gray-900 mb-5 md:mb-6"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)" }}
          >
            Crafting a High-Performance Digital Storefront Built for Scale and
            Conversion
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-6 md:mb-8">
            {description}
          </p>

          {/* Specs table */}
          <div className="border-t border-gray-100">
            {specs.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row justify-between sm:items-center py-3 sm:py-4 border-b border-gray-100 gap-0.5 sm:gap-1"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-tighter text-gray-400">
                  {label}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-900">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-8 w-full sm:w-fit">
            <AnimatedButton
              href={liveUrl || "#"}
              bgColor="#ffb86a"
              textColor="#1a1a1a"
              hoverBgColor="#1a1a1a"
              hoverTextColor="#ffffff"
            >
              View Live
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}