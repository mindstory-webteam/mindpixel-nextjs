import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = [
  { id: "uiux", label: "UI/UX" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "cloud", label: "Cloud Platforms" },
  { id: "databases", label: "Databases" },
  { id: "devops", label: "DevOps" },
  { id: "ai", label: "AI & Analytics" },
  { id: "cms", label: "CMS" },
];

const techData = {
  frontend: [
    { name: "Html", icon: "/icons/html5.svg" },
    { name: "Css", icon: "/icons/css3.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "Next JS", icon: "/icons/nextjs.svg" },
    { name: "React JS", icon: "/icons/react.svg" },
    { name: "Javascript", icon: "/icons/javascript.svg" },
    { name: "JQuery", icon: "/icons/jquery.svg" },
    { name: "Typescript", icon: "/icons/typescript.svg" },
  ],
  backend: [
    { name: "Node JS", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Django", icon: "/icons/django.svg" },
    { name: "Express", icon: "/icons/express-dark.svg" },
  ],
  uiux: [
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Illustrator", icon: "/icons/illustrator.svg" },
  ],
  cloud: [
    { name: "Azure", icon: "/icons/azure.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Hostinger", icon: "/icons/hostinger.svg" },
    { name: "Vercel", icon: "/assets/vercel-white-logo.png" },
    { name: "Render", icon: "/icons/render.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    { name: "Clerk", icon: "/icons/clerk.svg" },
  ],
  devops: [
    { name: "Nginx", icon: "/icons/nginx.svg" },
    { name: "GitHub", icon: "/assets/github-white-logo.png" },
  ],
  ai: [
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "PyTorch", icon: "/icons/pytorch.svg" },
    { name: "Pandas", icon: "/icons/pandas.svg" },
    { name: "NumPy", icon: "/icons/numpy.svg" },
    { name: "OpenCV", icon: "/icons/opencv.svg" },
  ],
  cms: [
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "Shopify", icon: "/icons/shopify-green.svg" },
    { name: "Drupal", icon: "/icons/drupal.svg" },
    { name: "Strapi", icon: "/icons/strapi.svg" },
    { name: "Wix", icon: "/assets/wix-logo-white.png" },
  ],
};

const INTERVAL = 3000;

export default function TechStack() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const mobilTabsRef = useRef(null);

  const goTo = (idx) => {
    setActiveIdx(idx);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  useEffect(() => {
    if (paused) {
      cancelAnimationFrame(progressRef.current);
      return;
    }

    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= INTERVAL) {
        setActiveIdx((prev) => (prev + 1) % categories.length);
        startTimeRef.current = performance.now();
        setProgress(0);
      }

      progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [paused, activeIdx]);

  // Structured Data for AI & Search Engine Crawlers
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Technologies We Use for Custom Software Development",
    "itemListElement": categories.map((cat, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": cat.label,
      "description": (techData[cat.id] || []).map((t) => t.name).join(", "),
    })),
  };

  const TabButton = ({ cat, idx }) => {
    const isActive = activeIdx === idx;
    return (
      <button
        type="button"
        data-active={isActive}
        onClick={() => goTo(idx)}
        className="relative overflow-hidden transition-all duration-200"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 600,
          padding: "8px 18px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
          cursor: "pointer",
          flexShrink: 0,
          background: isActive ? "#f98522" : "transparent",
          color: isActive ? "#fff" : "rgba(255,255,255,0.82)",
          border: isActive
            ? "1px solid #f98522"
            : "1px solid rgba(255,255,255,0.22)",
        }}
      >
        {isActive && (
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgba(255,255,255,0.18)",
              width: `${progress}%`,
              borderRadius: "999px",
              transition: "none",
            }}
          />
        )}
        <span className="relative z-10">{cat.label}</span>
      </button>
    );
  };

  return (
    <>
      {/* Search Engine & AI Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style>{`
        .mobile-tabs-scroll::-webkit-scrollbar { display: none; }
        .mobile-tabs-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        .ts-page-wrapper {
          padding: 50px;
          background: transparent;
          font-family: 'Syne', sans-serif;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        @media (max-width: 640px) {
          .ts-page-wrapper {
            padding: 50px 1rem;
          }
        }
      `}</style>

      <div className="ts-page-wrapper offscreen-section">
        <section
          className="relative w-full flex flex-col items-center justify-center overflow-hidden mb-5"
          style={{
            background: "#000",
            borderRadius: "24px",
            padding: "clamp(32px,6vw,80px) clamp(16px,5vw,72px)",
          }}
        >
          {/* Crawlers & Screen Readers Semantic Content */}
          <div className="sr-only">
            {categories.map((cat) => (
              <div key={`crawler-${cat.id}`}>
                <h3>{cat.label}</h3>
                <ul>
                  {(techData[cat.id] || []).map((t) => (
                    <li key={`crawler-item-${t.name}`}>{t.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2
            className="text-center leading-tight mb-10 relative z-10 max-w-4xl px-4 text-xl sm:text-2xl md:text-[35px]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Technologies We Use for Custom Software Development
          </h2>

          {/* Mobile Tabs */}
          <div
            ref={mobilTabsRef}
            className="mobile-tabs-scroll sm:hidden w-full flex gap-2 overflow-x-auto pb-1 mb-5 relative z-10"
          >
            {categories.map((cat, idx) => (
              <TabButton key={cat.id} cat={cat} idx={idx} />
            ))}
          </div>

          {/* Desktop Layout */}
          <div
            className="relative z-10 w-full max-w-6xl hidden sm:flex flex-col md:flex-row gap-12 md:gap-16 items-start"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="shrink-0" style={{ width: "clamp(220px, 28%, 320px)" }}>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, idx) => (
                  <TabButton key={cat.id} cat={cat} idx={idx} />
                ))}
              </div>
            </div>

            {/* Desktop Grids for all categories */}
            <div className="flex-1 w-full">
              {categories.map((cat, idx) => (
                <div
                  key={`desktop-${cat.id}`}
                  className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 ${
                    activeIdx === idx ? "grid" : "hidden"
                  }`}
                >
                  {(techData[cat.id] || []).map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Grids for all categories */}
          <div
            className="sm:hidden w-full relative z-10"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {categories.map((cat, idx) => (
              <div
                key={`mobile-${cat.id}`}
                className={`gap-3 ${activeIdx === idx ? "grid" : "hidden"}`}
                style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
              >
                {(techData[cat.id] || []).map((tech) => (
                  <TechCard key={tech.name} tech={tech} isMobile />
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function TechCard({ tech, isMobile }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl cursor-default"
      style={{
        gap: isMobile ? "8px" : "12px",
        padding: isMobile ? "10px 6px" : "20px 10px",
        aspectRatio: "1 / 1",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#95257b";
        e.currentTarget.style.border = "1px solid #95257b";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.09)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Image
        src={tech.icon}
        alt={tech.name}
        width={isMobile ? 30 : 42}
        height={isMobile ? 30 : 42}
        unoptimized
        style={{
          width: isMobile ? "30px" : "42px",
          height: isMobile ? "30px" : "42px",
          objectFit: "contain",
        }}
      />
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: isMobile ? "0.65rem" : "0.75rem",
          fontWeight: 500,
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}