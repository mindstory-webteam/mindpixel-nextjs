import { useState, useEffect } from "react";
import { useNavigate } from '@/lib/react-router-dom-compat';
import SharedLeadForm from "./SharedLeadForm";

const FAQS = [
  { q: "What services does MindPixel offer?", a: "We offer end-to-end web design & development, brand identity, SEO, paid media, and growth marketing all under one roof as the creative arm of MindStory." },
  { q: "Where are you based?", a: "We're rooted in Thrissur, Kerala, but we serve brands across India and beyond. Great digital work knows no geography." },
  { q: "How long does a typical project take?", a: "A standard website takes 3–6 weeks from brief to launch. Brand identity projects vary from 2–4 weeks. We provide a detailed roadmap during our kickoff." },
  { q: "Do you work with startups?", a: "Absolutely. We love early-stage brands with a story to tell. Whether you're pre-launch or scaling fast, we tailor our process to your specific stage." },
  { q: "What is your design philosophy?", a: "We believe in 'Intentional Design.' Every pixel must serve a purpose either to strengthen your brand's story or to convert a visitor into a customer." },
  { q: "Do you provide ongoing support and maintenance?", a: "Yes, we offer flexible retainer packages and ongoing technical support to ensure your website and marketing campaigns continue running smoothly post-launch." },
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

export default function EnquiryFaq() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowWidth();
  const isMobile = width < 1024;

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

            <div
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: isMobile ? "24px 20px" : "32px 28px",
                background: "#fff",
              }}
            >
              <SharedLeadForm theme="light" buttonColor="#e07a1b" onSuccess={() => navigate('/thank-you')} />
              
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px 20px",
                  background: "rgba(0,0,0,0.03)",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    fontFamily: "'Syne', sans-serif",
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  Or reach us at{" "}
                  <strong style={{ color: "#111", fontWeight: 500 }}>
                    hello@mindstory.in
                  </strong>
                </p>
              </div>
            </div>
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
