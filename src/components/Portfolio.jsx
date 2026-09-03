import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { img } from "../assets/assest";
import { useInView, animate } from "framer-motion";
import { useNavigate } from '@/lib/react-router-dom-compat';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const categories = [
  {
    id: 1,
    label: "Shreebhojana",
    subHead: "User-friendly e-commerce platform designed for seamless ordering and improved customer retention.",
    img: `${img.shreebhojanmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.simpleicons.org/shopify/7AB55C"
    ]
  },
  {
    id: 2,
    label: "Fuze Batteries",
    subHead: "Fast and intuitive corporate website enhancing product visibility and brand presence.",
    img: `${img.fuzemockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 3,
    label: "HappyNex",
    subHead: "Responsive e-commerce experience focused on product discovery and smooth checkout.",
    img: `${img.happynexmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.simpleicons.org/shopify/7AB55C"
    ]
  },
  {
    id: 4,
    label: "Indel Remit",
    subHead: "Secure financial platform for managing foreign exchange and global transactions.",
    img: `${img.indelremitmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.simpleicons.org/drupal/0678BE"
    ]
  },
  {
    id: 5,
    label: "Chai Peedika",
    subHead: "Engaging restaurant website showcasing menu, ambience, and dining experience.",
    img: `${img.chaipeedikamockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 6,
    label: "Inspire Education Service",
    subHead: "Structured platform delivering academic guidance and global education support.",
    img: `${img.inspiremockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.simpleicons.org/react/61DAFB",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    ]
  },
  {
    id: 7,
    label: "Indel Corporation",
    subHead: "Digital platform presenting lending and financial service solutions.",
    img: `${img.indelcorpmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 8,
    label: "Kairali Ford",
    subHead: "Dynamic automotive website showcasing vehicles and streamlining customer inquiries.",
    img: `${img.kairalifordmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 9,
    label: "District 9",
    subHead: "Hospitality website highlighting ambience, offerings, and guest experience.",
    img: `${img.distrikt9mockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.simpleicons.org/wordpress/21759B"
    ]
  },
  {
    id: 10,
    label: "Viral Cat",
    subHead: "Modern agency website showcasing services and performance-driven marketing solutions.",
    img: `${img.viralcatmockup}`,
    inkA: "#94267c",
    inkB: "#f7f7f7",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  }
];

const PATH_A = "M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262";
const PATH_B = "M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012";

function Counter({ endValue, suffix = "+" }) {
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

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function Tile({ cat }) {
  const pathARef = useRef(null);
  const pathBRef = useRef(null);
  const infoRef = useRef(null);
  const lensRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const paths = [pathARef.current, pathBRef.current];
    lensRef.current = paths.map((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      return len;
    });
  }, []);

  const handleEnter = () => {
    const paths = [pathARef.current, pathBRef.current];
    gsap.killTweensOf([...paths, infoRef.current]);
    gsap.to(paths, { strokeDashoffset: 0, attr: { "stroke-width": 800 }, duration: 1.2, ease: "power2.out" });
    gsap.to(infoRef.current, { opacity: 1, y: 0, duration: 0.4, delay: 0.2 });
  };

  const handleLeave = () => {
    const paths = [pathARef.current, pathBRef.current];
    gsap.killTweensOf([...paths, infoRef.current]);
    gsap.to(paths, { strokeDashoffset: (idx) => lensRef.current[idx], attr: { "stroke-width": 100 }, duration: 0.8, ease: "power2.in" });
    gsap.to(infoRef.current, { opacity: 0, y: 10, duration: 0.3 });
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="tile-card"
      style={{
        position: "relative",
        cursor: "default",
        borderRadius: 16,
        overflow: "hidden",
        background: "#eee",
        width: "100%",
        isolation: "isolate",
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <Image
        src={cat.img}
        alt={cat.label}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />

      <div style={{ position: "absolute", inset: 0, transform: "scale(1.4)", pointerEvents: "none", overflow: "hidden" }}>
        <svg viewBox="0 0 2453 2273" fill="none" style={{ width: "100%", height: "100%" }}>
          <path ref={pathARef} d={PATH_A} stroke={cat.inkA} strokeWidth="100" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ position: "absolute", inset: 0, transform: "scale(1.4)", pointerEvents: "none", overflow: "hidden" }}>
        <svg viewBox="0 0 2250 2535" fill="none" style={{ width: "100%", height: "100%" }}>
          <path ref={pathBRef} d={PATH_B} stroke={cat.inkB} strokeWidth="100" strokeLinecap="round" />
        </svg>
      </div>

      <div
        ref={infoRef}
        style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "30px", opacity: 0, transform: "translateY(10px)",
        }}
      >
        <div style={{ color: "#000", fontSize: 22, fontFamily: "'Syne', sans-serif" }}>
          {cat.label}
        </div>
        <div style={{ color: "#000", fontSize: 16, marginBottom: "12px", fontFamily: "'Syne', sans-serif" }}>
          {cat.subHead}
        </div>

        {/* Icons */}
        {cat.icons && (
          <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
            {cat.icons.map((icon, idx) => (
              <Image
                key={idx}
                src={icon}
                alt="tech"
                width={32}
                height={32}
                unoptimized
                style={{ objectFit: "contain" }}
              />
            ))}
          </div>
        )}

        {/* <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/ourwork/${cat.id}`);
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#1a1a1a",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "9px 18px",
            fontFamily: "'Syne', sans-serif",
            fontSize: "12px",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          View Details
        </button> */}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }} className="px-5 pb-10 lg:pt-5 lg:pb-5 md:px-16">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      {/* Desktop — lg and above only */}
      <div className="hidden lg:flex gap-10 max-w-7xl mx-auto w-full">
        <div style={{ minWidth: 280, maxWidth: 300 }}>
          <p style={{ fontSize: "3.5rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif", margin: 0 }}>
            Our Works
          </p>
          <p style={{ fontSize: 16, color: "#000", maxWidth: 220, marginBottom: 30 }}>
            Creating digital experiences with creativity, usability, and impact.
          </p>
          <div style={{ backgroundColor: "#fafafa", borderRadius: "14px", padding: "35px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "35px", textAlign: "center" }}>
            <div style={{ display: "flex", gap: 30, justifyContent: "center", width: "100%" }}>
              <div>
                <div style={{ fontSize: "2.2rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}><Counter endValue={150} /></div>
                <div style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(0,0,0,0.6)", fontFamily: "'Syne', sans-serif" }}>Projects</div>
              </div>
              <div>
                <div style={{ fontSize: "2.2rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}><Counter endValue={100} /></div>
                <div style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(0,0,0,0.6)", fontFamily: "'Syne', sans-serif" }}>Happy Clients</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 30, justifyContent: "center", width: "100%" }}>
              <div>
                <div style={{ fontSize: "2.2rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}><Counter endValue={5} /></div>
                <div style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(0,0,0,0.6)", fontFamily: "'Syne', sans-serif" }}>Countries</div>
              </div>
              <div>
                <div style={{ fontSize: "2.2rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}><Counter endValue={10} /></div>
                <div style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(0,0,0,0.6)", fontFamily: "'Syne', sans-serif" }}>Years</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={16}
            slidesPerView={2.2}
            breakpoints={{
              1280: { slidesPerView: 2.4 },
              1536: { slidesPerView: 2.6 },
            }}
            loop={true}
            freeMode={true}
            speed={6000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            style={{ width: "100%" }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}><Tile cat={cat} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile + Tablet — sm and md (below lg) */}
      <div className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 style={{ fontSize: "2.4rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif", margin: "0 0 10px" }}>
            Our Works
          </h2>
          <p style={{ fontSize: 14, color: "#000", margin: 0 }}>
            Crafting impactful digital experiences that blend creativity.
          </p>
        </div>

        <div style={{ backgroundColor: "#fafafa", borderRadius: "14px", padding: "30px 20px" }}>
          <div className="grid grid-cols-2 gap-6 text-center">
            {[{ val: 120, label: "Projects" }, { val: 80, label: "Happy Clients" }, { val: 120, label: "Countries" }, { val: 80, label: "Years" }].map(({ val, label }) => (
              <div key={label}>
                <div style={{ fontSize: "2rem", color: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}><Counter endValue={val} /></div>
                <div style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(0,0,0,0.6)", marginTop: 4, fontFamily: "'Syne', sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={14}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.8 },
            }}
            loop={true}
            freeMode={true}
            speed={6000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            style={{ width: "100%" }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}><Tile cat={cat} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-wrapper { transition-timing-function: linear !important; }
        .tile-card { height: 420px; }
        @media (max-width: 1023px) { .tile-card { height: 380px; } }
      `}</style>
    </div>
  );
}