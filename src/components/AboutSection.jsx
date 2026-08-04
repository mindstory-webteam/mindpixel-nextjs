import React, { useEffect, useState, useRef } from "react";
import { BarChart3, Code2, LayoutDashboard, Rocket, ShieldCheck, Globe } from "lucide-react";
import { useInView, animate } from "framer-motion";
import { img } from "../assets/assest";

const cards = [
  { 
    icon: <Code2 size={20} />, 
    title: "Custom Web Development", 
    desc: "Building scalable, high-performance web applications using MERN stack and modern frameworks." 
  },
  { 
    icon: <LayoutDashboard size={20} />, 
    title: "UI/UX Design", 
    desc: "Crafting intuitive interfaces that prioritize user journey and pixel-perfect aesthetics." 
  },
  { 
    icon: <Globe size={20} />, 
    title: "E-commerce Solutions", 
    desc: "Seamless Shopify and custom storefronts designed to convert visitors into loyal customers." 
  },
  { 
    icon: <Rocket size={20} />, 
    title: "SEO & Performance", 
    desc: "Optimizing Core Web Vitals to ensure lightning-fast speeds and top-tier search rankings." 
  },
];

const metrics = [
  { endValue: 150, prefix: "", suffix: "+", label: "Projects Delivered" },
  { endValue: 99, prefix: "", suffix: "%", label: "Client Retention" },
  { endValue: 10, prefix: "", suffix: "x", label: "Average Speed Increase" },
  { endValue: 24, prefix: "", suffix: "/7", label: "Reliable Support" },
];

function Counter({ endValue, prefix = "", suffix = "+" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, endValue, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, endValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }} className="bg-white text-gray-900">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <section className="px-6 lg:px-16 pt-25 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:h-72">

          <div className="lg:col-span-1 h-56 lg:h-auto rounded-2xl overflow-hidden bg-slate-200">
            <img
              src={img.ourvision}
              alt="Clean Code"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex-1 rounded-2xl bg-[#F5F0E8] text-black px-6 py-6 lg:py-5 flex flex-col justify-between min-h-35 lg:min-h-0">
              <p className="text-[15px] uppercase tracking-widest font-normal text-[#f78829]">
                Our Vision
              </p>
              <p className="text-[16px] leading-snug font-medium">
                To redefine the digital landscape by creating web ecosystems where aesthetics meet absolute performance. We envision a web that is faster, more accessible, and more intuitive for every user globally.
              </p>
            </div>

            <div className="flex-1 rounded-2xl bg-[#F5F0E8] text-black px-6 py-6 lg:py-5 flex flex-col justify-between min-h-35 lg:min-h-0">
              <p className="text-[15px] uppercase tracking-widest font-normal text-[#f78829]">
                Our Mission
              </p>
              <p className="text-[16px] leading-snug font-medium">
                To create meaningful digital experiences by combining creativity, technology, and strategy helping brands grow, connect, and stand out in a constantly evolving digital world. We bridge the gap between bold ideas and functional excellence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 h-56 lg:h-auto rounded-2xl overflow-hidden bg-slate-200">
            <img
              src={img.ourmission}
              alt="Data and Analytics"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="px-6 lg:px-16 py-12 lg:py-16 text-center">
        <h2 className="text-[26px] lg:text-3xl font-normal max-w-7xl mx-auto mt-5 leading-snug">
          Transforming your digital presence with precision-engineered web solutions.
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center mt-10 lg:mt-12 gap-8 lg:gap-0">
          {metrics.map((m, i) => (
            <div key={i} className="flex-1 min-w-[40%] lg:min-w-0 max-w-none lg:max-w-40">
              <div className="text-4xl font-normal">
                <Counter endValue={m.endValue} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="text-[11px] text-gray-400 mt-2 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 min-h-37.5 flex flex-col justify-between transition-all duration-700 ${i === activeIndex ? "bg-[#95257b] text-white" : "bg-slate-100 text-gray-900"
                }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${i === activeIndex ? " text-black bg-slate-100" : "bg-slate-200 text-gray-600"}`}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className={`text-sm mt-1 leading-relaxed ${i === activeIndex ? "text-gray-300" : "text-gray-500"}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}