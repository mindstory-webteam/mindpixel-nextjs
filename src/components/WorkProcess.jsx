import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

const CARDS = [
  {
    bg: "#f78829",
    color: "#fff",
    num: "01",
    title: "Discovery",
    desc: "We understand your goals and gather all the essential requirements.",
  },
  {
    bg: "#96267d",
    color: "#fff",
    num: "02",
    title: "Planning & Design",
    desc: "We plan the structure and design intuitive, user-friendly interfaces.",
  },
  {
    bg: "#f78829",
    color: "#fff",
    num: "03",
    title: "Development",
    desc: "We build robust, scalable solutions tailored to your requirements.",
  },
  {
    bg: "#96267d",
    color: "#fff",
    num: "04",
    title: "Testing & QA",
    desc: "We test thoroughly to ensure quality, performance, and reliability.",
  },
  {
    bg: "#f78829",
    color: "#fff",
    num: "05",
    title: "Deployment",
    desc: "We launch the solution smoothly across all required platforms.",
  },
  {
    bg: "#96267d",
    color: "#fff",
    num: "06",
    title: "Support & Maintenance",
    desc: "We provide ongoing support to keep things running smoothly.",
  },
];

const WorkProcess = () => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const stickyBase = isLg ? 200 : 100;
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>

      <section className="font-syne w-full relative px-4 sm:px-6 py-12 sm:py-16 lg:py-32 box-border bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 sm:gap-12 lg:gap-20 w-full max-w-7xl mx-auto items-start">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:sticky lg:top-50">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[60px] leading-[1.1] m-0 text-black text-center sm:text-left">
              Our process, crafted for results.
            </h2>
            <p className="text-[13px] sm:text-[14px] lg:text-[18px] leading-[1.75] font-medium m-0 opacity-65 text-black text-center sm:text-left max-w-md mx-auto sm:mx-0">
              From the first conversation to long-term support, every step in
              our workflow is intentional. We don't just deliver projects we
              build partnerships rooted in clarity, craft, and accountability.
            </p>
            <div className="w-fit mx-auto sm:mx-0">
              <Link href="/contact">
                <AnimatedButton
                  className="mt-2"
                  bgColor="#1a1a1a"
                  textColor="#f5f0e8"
                  hoverBgColor="#ffb86a"
                  hoverTextColor="#1a1a1a"
                >
                  Contact Us
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* RIGHT card stack */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 pb-10">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 lg:p-12 flex flex-col justify-center box-border shadow-sm"
                style={{
                  position: "sticky",
                  top: `calc(${stickyBase}px + ${i * 14}px)`,
                  backgroundColor: card.bg,
                  color: card.color,
                  minHeight: "clamp(180px, 35vw, 450px)",
                  zIndex: i + 1,
                }}
              >
                {/* Step label */}
                <div className="mb-3 lg:mb-0 lg:absolute lg:top-12 lg:left-12">
                  <span className="text-[10px] sm:text-[11px] lg:text-[14px] font-semibold tracking-[0.12em] opacity-60 uppercase">
                    Step {card.num}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="flex flex-col items-start">
                  <div className="text-[22px] sm:text-[26px] lg:text-[42px] leading-[1.05] mb-3 lg:mb-4 tracking-[-0.02em] font-normal">
                    {card.title}
                  </div>
                  <div className="text-[12px] sm:text-[13px] lg:text-[16px] font-normal opacity-85 leading-[1.65] max-w-70 sm:max-w-[320px] lg:max-w-xs">
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WorkProcess;