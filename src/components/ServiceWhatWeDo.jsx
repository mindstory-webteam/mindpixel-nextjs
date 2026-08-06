import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "../assets/assest";

const whatWeDo = {
  image: `${img.servicewhatwedoimg}`,
  tagline: "What We Do",
  heading: "We build digital products that perform.",
  body: "From strategy to launch, we partner with ambitious brands to design, develop, and grow world-class digital experiences. Whether it's a mobile app, an enterprise platform, or a brand identity every pixel we ship is intentional.",
};

export default function ServiceWhatWeDo() {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img     = imgRef.current;
    const content = contentRef.current;

    if (!section || !img || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "center center",
          scrub: 1.2,
        },
      });

      tl.fromTo(img,
        { y: 80, opacity: 0.8 },
        { y: 0, opacity: 1, ease: "none" },
        0
      );

      tl.fromTo(
        Array.from(content.children),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power1.out"
        },
        0
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white overflow-hidden pt-20 md:pt-0"
      style={{ fontFamily: "'Syne', sans-serif"  }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center py-5 px-6 md:px-15"
      >
        <div ref={imgRef} className="w-full">
          <div className="relative aspect-video md:aspect-4/3 overflow-hidden">
            <img
              src={whatWeDo.image}
              alt="What we do"
              className="w-full h-full object-cover block rounded-3xl "
            />
          </div>
        </div>

        <div ref={contentRef} className="flex flex-col justify-center px-0 md:px-10 mt-10 md:mt-0">
          <p
            className="text-[0.7rem] tracking-[0.2em] uppercase text-gray-400 mb-4 font-medium"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {whatWeDo.tagline}
          </p>
          <h2
            className="text-3xl md:text-5xl font-normal text-[#1a1a1a] leading-[1.2] mb-6 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {whatWeDo.heading}
          </h2>
          <p
            className="text-sm md:text-base text-[#6b6560] leading-relaxed max-w-md"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {whatWeDo.body}
          </p>
        </div>
      </div>
    </section>
  );
}