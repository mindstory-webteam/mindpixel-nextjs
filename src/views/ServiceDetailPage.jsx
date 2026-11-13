"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams, Link } from "@/lib/react-router-dom-compat";
import Breadcrumb from "../components/BreadCrums";
import FaqSection from "../components/FaqSection";
import AnimatedButton from "../components/AnimatedButton";
import SEO from "../components/SEO";
import { getServiceBySlug, getAllServices } from "../assets/servicesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_COMMITMENTS = [
  {
    num: "01",
    title: "Zero Architectural Shortcuts",
    desc: "Every line of code, database schema, and component is crafted to enterprise standards with strict type safety, modular design, and high test coverage.",
  },
  {
    num: "02",
    title: "100% Code & Asset Ownership",
    desc: "You retain full, unencumbered ownership of every code repository, design token, database, and asset from day one. No vendor lock-in.",
  },
  {
    num: "03",
    title: "Transparent, Agile Sprints",
    desc: "Direct access to your dedicated engineering team with weekly live progress demos, staging environments, and fixed milestone predictability.",
  },
  {
    num: "04",
    title: "Post-Launch Hypercare & SLA",
    desc: "We stand firmly behind our delivery with proactive uptime monitoring, swift bug resolution, and SLA-backed maintenance so your product thrives.",
  },
];

export default function ServiceDetailPage({ serviceSlug }) {
  const params = useParams();
  const slug = serviceSlug || params?.slug || "";
  const service = getServiceBySlug(slug) || getAllServices()[0];
  const commitments =
    service?.commitments && service.commitments.length > 0
      ? service.commitments
      : DEFAULT_COMMITMENTS;

  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!sliderRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: "+=120%",
        pin: true,
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-syne bg-white px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-neutral-500 mb-6 text-sm sm:text-base">The requested service could not be located.</p>
        <Link to="/service" className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium">
          Back to Services
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
  ];

  return (
    <>
      <SEO
        title={`${service.title} | MindPixel Services`}
        description={service.shortDescription}
      />

      <div ref={containerRef} className="bg-white font-syne">
        {/* Intro Section Breadcrumb */}
        <div ref={sliderRef}>
          <Breadcrumb
            pageName={service.title}
            title={service.title}
            breadcrumbs={breadcrumbs}
          />
        </div>

        <div className="relative z-10 bg-white">
          {/* Service Overview & Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="w-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug tracking-tight text-neutral-900 mb-3 sm:mb-5">
                  {service.subtitle}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8">
                  {service.fullDescription}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-medium text-neutral-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <AnimatedButton
                    href="/contact"
                    bgColor="#1a1a1a"
                    textColor="#f5f0e8"
                    hoverBgColor="#ffb86a"
                    hoverTextColor="#1a1a1a"
                  >
                    Start Your Project
                  </AnimatedButton>
                  <AnimatedButton
                    href="/service"
                    bgColor="transparent"
                    textColor="#1a1a1a"
                    hoverBgColor="#1a1a1a"
                    hoverTextColor="#f5f0e8"
                    style={{ border: "1px solid rgba(0,0,0,0.15)" }}
                  >
                    All Services
                  </AnimatedButton>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="w-full">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950 aspect-[16/10] sm:aspect-[4/3] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#ffb86a] font-semibold mb-1">
                      {service.title}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-normal leading-snug">
                      {service.detail}
                    </p>
                  </div>
                </div>

                {/* Key Metrics / Stats Strip - Compact & Small */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-neutral-50 border border-neutral-200/80 text-center"
                    >
                      <p className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-neutral-500 font-medium mt-0.5 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities & Features Grid */}
          <section className="bg-neutral-950 text-white py-14 sm:py-20 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight">
                  {service.capabilitiesHeading || "What we build & solve for you."}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-neutral-400 mt-3 sm:mt-4 leading-relaxed">
                  {service.capabilitiesDesc || "Every feature is engineered to perform reliably, scale effortlessly, and align with your target user needs."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-neutral-900/70 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#ffb86a] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-white/5 border border-white/10">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-normal mb-2 sm:mb-3 text-white">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed m-0">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tangible Deliverables Row */}
              <div className="mt-10 sm:mt-14 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 border border-white/10">
                <h3 className="text-base sm:text-lg md:text-xl font-normal text-white mb-3 sm:mb-4">
                  {service.deliverablesHeading || "What You Receive (Tangible Deliverables)"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e74c3c] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skill & Technologies Section for this Service */}
          <section className="py-14 sm:py-20 md:py-24 bg-neutral-50 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
                    {service.technologiesHeading || `Tools & stacks tailored for ${service.title}`}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                  {service.technologiesDesc || "We use verified, production-grade tools that minimize technical debt and maximize velocity."}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {service.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col items-center text-center hover:border-black transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 flex items-center justify-center p-2 mb-2 sm:mb-3">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-900 mb-0.5">
                      {tech.name}
                    </p>
                    <span className="text-[10px] sm:text-[11px] text-neutral-400">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service-Specific Process Section */}
          <section className="py-14 sm:py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10 sm:mb-14 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
                  {service.processHeading || `How we execute ${service.title}`}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 mt-2.5 sm:mt-3">
                  {service.processDesc || "A disciplined, transparent delivery framework designed for predictability and speed."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-neutral-800 shadow-md flex flex-col justify-between text-white"
                  >
                    <div>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-[#e74c3c]">
                        {step.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-white mt-3 sm:mt-4 mb-1.5 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OUR COMMITMENT Section */}
          <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-10 sm:mb-14 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
                  {service.commitmentsHeading || "Our Commitment"}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 mt-2.5 sm:mt-3 leading-relaxed">
                  {service.commitmentsDesc || "We build partnerships rooted in craft, accountability, and measurable business outcomes. Here is what we promise on every project."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                {commitments.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service FAQ Accordion */}
          <FaqSection
            faqs={service.faqs}
            heading={`${service.title} FAQs`}
          />
        </div>
      </div>
    </>
  );
}
