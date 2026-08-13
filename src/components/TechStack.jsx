import { useState, useEffect, useRef } from "react";

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
    { name: "Html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "JQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  backend: [
    { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/68D391" },
  ],
  uiux: [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  ],
  cloud: [
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger/673DE6" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/6C47FF" },
  ],
  devops: [
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },



  ],
  ai: [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  ],
  cms: [
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/96BF48" },
    { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
    { name: "Strapi", icon: "https://cdn.simpleicons.org/strapi/2E7EEA" },
    { name: "Wix", icon: "https://cdn.simpleicons.org/wix/000000" },
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

  const active = categories[activeIdx].id;
  const techs = techData[active] || [];

  const goTo = (idx) => {
    setActiveIdx(idx);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // useEffect(() => {
  //   if (mobilTabsRef.current) {
  //     const activeBtn = mobilTabsRef.current.querySelector("[data-active='true']");
  //     if (activeBtn) {
  //       activeBtn.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  //     }
  //   }
  // }, [activeIdx]);

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

  const TabButton = ({ cat, idx }) => {
    const isActive = activeIdx === idx;
    return (
      <button
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .mobile-tabs-scroll::-webkit-scrollbar { display: none; }
        .mobile-tabs-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        .ts-page-wrapper {
          padding: 50px;
          background: transparent;
          font-family: 'Syne', sans-serif;
        }

        @media (max-width: 640px) {
          .ts-page-wrapper {
            padding: 50px 1rem;
          }
        }
      `}</style>

      <div className="ts-page-wrapper">
        <section
          className="relative w-full flex flex-col items-center justify-center overflow-hidden mb-5"
          style={{
            background: "#000",
            borderRadius: "24px",
            padding: "clamp(32px,6vw,80px) clamp(16px,5vw,72px)",
          }}
        >
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

          <div
            ref={mobilTabsRef}
            className="mobile-tabs-scroll sm:hidden w-full flex gap-2 overflow-x-auto pb-1 mb-5 relative z-10"
          >
            {categories.map((cat, idx) => (
              <TabButton key={cat.id} cat={cat} idx={idx} />
            ))}
          </div>

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

            <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {techs.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div
            className="sm:hidden w-full grid gap-3 relative z-10"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {techs.map((tech) => (
              <TechCard key={tech.name} tech={tech} isMobile />
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
      <img
        src={tech.icon}
        alt={tech.name}
        style={{
          width: isMobile ? "30px" : "42px",
          height: isMobile ? "30px" : "42px",
          objectFit: "contain",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
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