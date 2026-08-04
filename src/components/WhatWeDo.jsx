import AnimatedButton from "./AnimatedButton";

const features = [
  {
    title: "Professional Team",
    desc: "With years of experience in tourism, making sure you enjoy every moment.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z"
          stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Flexibility",
    desc: "From historic landmarks to airports and ports we take you where you need to go.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1" />
        <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tailored Experiences",
    desc: "Every journey curated to match your pace, preferences, and sense of discovery.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M2 7C2 4.24 4.24 2 7 2s5 2.24 5 5-2.24 5-5 5S2 9.76 2 7z"
          stroke="currentColor" strokeWidth="1.1" />
        <path d="M5 7l1.5 1.5L9 5.5" stroke="currentColor" strokeWidth="1.1"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full px-8 md:px-16 font-[sans-serif]">
      <style>{`
        .img-zoom { overflow: hidden; border-radius: 14px; }
        .img-zoom img { transition: transform 0.7s ease; width: 100%; height: 100%; object-fit: cover; display: block; }

  

        .cta-link { transition: gap 0.3s ease, opacity 0.3s ease; }

        .feature-icon-wrap { transition: border-color 0.3s, color 0.3s; }
      
        .contact-btn {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 20px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          border: 1px solid #3d4a38;
          border-radius: 20px;
          color: #3d4a38;
          background: transparent;
          cursor: pointer;
          transition: background 0.25s, color 0.25s;
        }
        .contact-btn{ background: #000; color: #fff; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-5 mt-10 mb-12">


        <div className="flex flex-col gap-4">
          <div className="img-zoom" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Scenic landscape"
            />
          </div>

          <p style={{ fontSize: "0.78rem", color: "#8a8476", lineHeight: 1.7, fontWeight: 300 }}>
            From scenic routes to seamless transfers, every ride is crafted with care and local knowledge.
          </p>
          <div>
          <AnimatedButton
            bgColor="#1a1a1a"
            textColor="#f5f0e8"
            hoverBgColor="#ffb86a"
            hoverTextColor="#1a1a1a"
            >
            Know More
          </AnimatedButton>
            </div>
        </div>

        <div className="flex flex-col justify-start pt-16 px-2">
          <h2 style={{
            fontFamily: "sans-serif",
            fontSize: "clamp(1.55rem, 3.2vw, 2.05rem)",
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#2a2720",
            marginBottom: 18,
            letterSpacing: "-0.01em",
          }}>
            The Highest Level of Comfort, Convenience and Service
          </h2>

          <p style={{ fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.8, color: "#8a8476", marginBottom: 28 }}>
            At Armonia Excursions, we combine premium service with attention to detail.
            Whether it's a private journey tailored just for you, a shared group experience,
            or a seamless transfer we take care of everything, so you can enjoy every moment.
          </p>

          <div className="flex flex-col gap-5">
            {features.map(({ title, desc, icon }) => (
              <div key={title} className="feature-item flex gap-3 items-start">
                <div
                  className="feature-icon-wrap flex items-center justify-center shrink-0"
                  style={{
                    width: 28, height: 28,
                    border: "1px solid #c8c2b8",
                    borderRadius: 6,
                    color: "#8a8476",
                    marginTop: 1,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "#2a2720", marginBottom: 3 }}>
                    {title}
                  </p>
                  <p style={{ fontSize: "0.74rem", color: "#8a8476", lineHeight: 1.65, fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="img-zoom hidden md:block" style={{ marginTop: 170, maxHeight: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80"
            alt="Ancient columns"
          />
        </div>

      </div>
    </section>
  );
}