import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowUp } from "react-icons/io";
import gsap from "gsap";
import { useNavigate } from '@/lib/react-router-dom-compat';
import { img } from '../assets/assest';

const PATH_A = "M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262";

const cards = [
  {
    id: 1,
    img: `${img.shreebhojanmockup}`,
    industry: 'E-COMMERCE',
    expertise: 'Custom Software',
    title: 'Shreebhojana',
    desc: 'Built a user-friendly platform for seamless ordering and improved customer retention.',
    ink: "#94267c",
    icons: [
      "https://cdn.simpleicons.org/shopify/7AB55C"
    ]
  },
  {
    id: 2,
    img: `${img.fuzemockup}`,
    industry: 'CORPORATE',
    expertise: 'Custom Software',
    title: 'Fuze Batteries',
    desc: 'Designed a fast and intuitive website enhancing product visibility and brand presence.',
    ink: "#94267c",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 3,
    img: `${img.happynexmockup}`,
    industry: 'E-COMMERCE',
    expertise: 'Custom Software',
    title: 'HappyNex',
    desc: 'Developed a responsive shopping experience focused on product discovery and smooth checkout.',
    ink: "#94267c",
    icons: [
      "https://cdn.simpleicons.org/shopify/7AB55C"
    ]
  },
  {
    id: 4,
    img: `${img.indelcorpmockup}`,
    industry: 'FINANCIAL',
    expertise: 'Custom Software',
    title: 'Indel Corporation',
    desc: 'Built a secure platform for managing foreign exchange and global transactions.',
    ink: "#94267c",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 5,
    img: `${img.chaipeedikamockup}`,
    industry: 'RESTAURANT',
    expertise: 'Custom Software',
    title: 'Chai Peedika',
    desc: 'Designed an engaging website showcasing menu, ambience, and dining experience.',
    ink: "#94267c",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 6,
    img: `${img.inspiremockup}`,
    industry: 'EDUCATION',
    expertise: 'Custom Software',
    title: 'Inspire Education Service',
    desc: 'Built a structured platform delivering academic guidance and global education support.',
    ink: "#94267c",
    icons: [
      "https://cdn.simpleicons.org/react/61DAFB"
    ]
  },
  {
    id: 7,
    img: `${img.indelremitmockup}`,
    industry: 'FINANCIAL',
    expertise: 'Custom Software',
    title: 'Indel Remit',
    desc: 'Developed a digital platform presenting lending and financial service solutions.',
    ink: "#94267c",
    icons: [
      "https://cdn.simpleicons.org/drupal/0678BE"
    ]

  },
  {
    id: 8,
    img: `${img.kairalifordmockup}`,
    industry: 'AUTOMOTIVE',
    expertise: 'Custom Software',
    title: 'Kairali Ford',
    desc: 'Designed a dynamic website to showcase vehicles and streamline customer inquiries.',
    ink: "#94267c",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    id: 9,
    img: `${img.distrikt9mockup}`,
    industry: 'HOSPITALITY',
    expertise: 'Custom Software',
    title: 'District 9',
    desc: 'Built an engaging platform highlighting ambience, offerings, and guest experience.',
    ink: "#94267c",
    icons: [
      "https://cdn.simpleicons.org/wordpress/21759B"
    ]
  },
  {
    id: 10,
    img: `${img.viralcatmockup}`,
    industry: 'AGENCY',
    expertise: 'Custom Software',
    title: 'Viral Cat',
    desc: 'Designed a modern website showcasing services and performance-driven marketing solutions.',
    ink: "#94267c",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  }
];

const INDUSTRIES = ['All', 'AGENCY', 'HOSPITALITY', 'AUTOMOTIVE', 'FINANCIAL', 'EDUCATION', 'RESTAURANT', 'E-COMMERCE', 'CORPORATE'];
const EXPERTISES = ['All', 'Custom Software', 'Mobile App Development', 'SEO', 'UI / UX Design', 'Enterprise Software', 'SaaS Application'];

const ProjectCard = ({ card, index }) => {
  const navigate = useNavigate();
  const pathRef = useRef(null);
  const overlayRef = useRef(null);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathLengthRef.current = length;
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  const handleEnter = () => {
    gsap.killTweensOf(pathRef.current);
    gsap.killTweensOf(overlayRef.current);
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      attr: { "stroke-width": 1500 },
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, { opacity: 1, y: 0, duration: 0.4 });
  };

  const handleLeave = () => {
    gsap.killTweensOf(pathRef.current);
    gsap.killTweensOf(overlayRef.current);
    gsap.to(pathRef.current, {
      strokeDashoffset: pathLengthRef.current,
      attr: { "stroke-width": 100 },
      duration: 0.8,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, { opacity: 0, y: 15, duration: 0.3 });
  };

  const handleClick = () => {
    // window.scrollTo({ top: 0, behavior: "instant" });
    // navigate(`/ourwork/${card.id}`);
  };

  return (
    <div
      // onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="proj-card"
      style={{
        background: '#fff',
        border: '1px solid #f0f0f2',
        borderRadius: 24,
        overflow: 'hidden',
        position: 'relative',
        height: '380px',
        cursor: 'default',
        isolation: 'isolate',
        transform: 'translateZ(0)',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        animation: `fadeUp 0.6s ease ${index * 0.1}s both`,
      }}
    >
      <Image
        src={card.img}
        alt={card.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        priority={index < 3}
      />

      {/* SVG Ink Effect */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", transform: "scale(1.5)", overflow: "hidden" }}>
        <svg viewBox="0 0 2453 2273" fill="none" style={{ width: "100%", height: "100%" }}>
          <path
            ref={pathRef}
            d={PATH_A}
            stroke={card.ink || "#94267c"}
            strokeWidth="100"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Info Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 30, opacity: 0, transform: 'translateY(15px)',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 8, opacity: 0.8 }}>
          {card.industry}
        </span>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, margin: '0 0 10px', color: '#fff', lineHeight: 1.2 }}>
          {card.title}
        </h3>
        <p style={{ fontSize: 14, color: '#eee', lineHeight: 1.5, margin: 0 }}>
          {card.desc}
        </p>
        {/* Icons */}
        {card.icons && (
          <div style={{ display: "flex", gap: "12px", marginBottom: "14px", marginTop: "10px" }}>
            {card.icons.map((icon, idx) => (
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
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate(`/ourwork/${card.id}`);
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
};

const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative' }}>
      <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', fontWeight: 700 }}>{label}</span>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 16px', borderRadius: 10, minWidth: 160,
          border: '1.5px solid #000', background: '#fff', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 14, fontWeight: 500, color: '#0f0f14',
          transition: 'all 0.2s ease',
        }}
      >
        <span style={{ flex: 1, textAlign: 'left' }}>{value}</span>
        <IoIosArrowUp style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
          background: '#fff', border: '1px solid #eee', borderRadius: 12,
          zIndex: 100, overflow: 'hidden', animation: 'dropIn 0.2s ease-out',
        }}>
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              style={{
                padding: '12px 16px', fontSize: 13, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                color: value === opt ? '#f48220' : '#000',
                background: value === opt ? '#f8f8ff' : 'transparent',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f7'}
              onMouseLeave={e => e.currentTarget.style.background = value === opt ? '#f8f8ff' : 'transparent'}
            >
              {opt}
              {value === opt && <span style={{ fontSize: 10 }}>●</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OurWork = () => {
  const [indFilter, setIndFilter] = useState('All');
  const [expFilter, setExpFilter] = useState('All');

  const filtered = cards.filter(c =>
    (indFilter === 'All' || c.industry === indFilter) &&
    (expFilter === 'All' || c.expertise === expFilter)
  );

  return (
    <section className="pt-20 md:pt-15" style={{ background: '#fff', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px', fontFamily: "'DM Sans', sans-serif", color: '#0f0f14', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dropIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .work-grid { display: grid; gap: 24px; grid-template-columns: 1fr; }
        @media (min-width: 640px) { .work-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .work-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48, gap: 32, flexWrap: 'wrap', background: '#f9f9f9', padding: '40px 32px', borderRadius: '20px' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h1 style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.1, margin: 0 }} className='text-3xl md:text-5xl'>
              Work That Speaks <br />For Itself
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Dropdown label="Industry" options={INDUSTRIES} value={indFilter} onChange={setIndFilter} />
              <Dropdown label="Expertise" options={EXPERTISES} value={expFilter} onChange={setExpFilter} />
            </div>
            <p style={{ fontSize: 14, color: '#000', maxWidth: 420, lineHeight: 1.6, margin: 0 }}>
              Crafting digital experiences that drive impact across industries and disciplines.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="work-grid">
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0', color: '#999', fontSize: 16, border: '1px dashed #eee', borderRadius: 20 }}>
              No projects match your selection.
            </div>
          ) : (
            filtered.map((card, i) => (
              <ProjectCard key={card.id} card={card} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default OurWork;