import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

const FAQS = [
  {
    q: "What services does MindPixel offer?",
    a: "MindPixel offers web design and development, custom software, mobile app development, SaaS applications, enterprise software, UI/UX design, SEO, paid media, and growth marketing under one roof as the creative and web arm of MindStory."
  },
  {
    q: "Where are you based?",
    a: "We are based in Thrissur, Kerala, and work with businesses that need professional websites, software solutions, digital design, and online growth support."
  },
  {
    q: "How long does a typical project take?",
    a: "The timeline depends on the project size, features, design requirements, and approval process. A simple website may take less time, while custom software, SaaS platforms, or mobile apps need detailed planning, development, testing, and launch support."
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with startups, small businesses, growing brands, and established companies. Whether you need a basic website, an MVP, a custom platform, or digital growth support, we plan the work based on your current stage and goals."
  },
  {
    q: "What is your design philosophy?",
    a: "Our design approach is simple to make it clear, useful, and memorable. We focus on clean visuals, easy navigation, fast-loading pages, and digital experiences that support both the user and the business goal."
  }
];

function useWindowWidth() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function FaqSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const width = useWindowWidth();
  const isMobile = width < 768;

  const setField = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const inputStyle = (key) => ({
    width: "100%",
    fontFamily: "'Syne', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    padding: "13px 0",
    background: "transparent",
    border: "none",
    borderBottom: errors[key] ? "2px solid #f87171" : "1px solid rgba(255,255,255,0.3)",
    outline: "none",
    color: "#fff",
    transition: "border-color 0.3s",
    marginBottom: "20px",
    boxSizing: "border-box",
  });

  return (
    <div className="w-full h-auto bg-white pt-5 ">

      <section
        style={{
          width: isMobile ? "calc(100% - 32px)" : "calc(100% - 120px)",
          margin: isMobile ? "15px 16px 70px 16px" : "30px 60px 80px 60px",
          background: "#000",
          color: "#fff",
          overflow: "hidden",
          position: "relative",
          borderRadius: isMobile ? "16px" : "24px",
        }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');
        .faq-item { padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.15); cursor: pointer; transition: opacity 0.3s; }
        .faq-item:hover { opacity: 1 !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.4); }
        `}</style>

        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: isMobile ? "60px 20px 50px 20px" : "60px 60px 60px",
            paddingBottom: isMobile ? "50px" : "80px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
            gap: isMobile ? "56px" : "100px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Contact Form */}
          <div style={isMobile ? {} : { position: "sticky", top: "80px" }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "28px" : "38px",
                fontWeight: 400,
                color: "#fff",
                margin: "0 0 32px",
              }}
            >
              Send us a brief.
            </h2>

            {submitted ? (
              <div
                style={{
                  padding: "48px 32px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 400,
                    color: "#fff",
                  }}
                >
                  Message Sent
                </h3>
              </div>
            ) : (
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "16px",
                  padding: isMobile ? "24px 20px" : "32px 28px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <input
                  style={inputStyle("name")}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
                <input
                  style={inputStyle("email")}
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
                <textarea
                  style={{
                    ...inputStyle("message"),
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  placeholder="Project goals"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                />

                <AnimatedButton
                  bgColor="#ffb86a"
                  textColor="#111"
                  hoverBgColor="#1a1a1a"
                  hoverTextColor="#fff"
                  style={{ width: "100%", padding: "16px" }}
                >
                  Submit Inquiry
                </AnimatedButton>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      fontFamily: "'Syne', sans-serif",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Or reach us at{" "}
                    <strong style={{ color: "#fff", fontWeight: 500 }}>
                      hello@mindstory.in
                    </strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — FAQs */}
          <div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "28px" : "38px",
                fontWeight: 400,
                color: "#fff",
                margin: "0 0 32px",
              }}
            >
              Common Questions
            </h2>

            <div>
              {FAQS.map((f, i) => (
                <div
                  key={i}
                  className="faq-item"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => !isMobile && setActiveIndex(i)}
                  style={{ opacity: activeIndex === i ? 1 : 0.4 }}
                >
                  <h4
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: isMobile ? "16px" : "19px",
                      fontWeight: 400,
                      margin: "0 0 10px",
                      color: "#fff",
                    }}
                  >
                    {f.q}
                  </h4>
                  {activeIndex === i && (
                    <p
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}