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
  const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1200));
  useEffect(() => {
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
    <div className="w-full h-auto bg-white pt-5 pb-16 md:pb-24">
      <div className="w-full max-w-[1475px] mx-auto px-4 sm:px-6 md:px-8">
        <section
          style={{
            width: "100%",
            margin: "0 auto",
            background: "#000",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
            borderRadius: isMobile ? "16px" : "24px",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');
            .faq-item { padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.15); cursor: pointer; transition: opacity 0.3s; }
            .faq-item:hover { opacity: 1 !important; }
            .enquiry-faq-form input::placeholder,
            .enquiry-faq-form textarea::placeholder {
              color: #888888 !important;
              opacity: 1 !important;
            }
          `}</style>

          <div
            className="w-full max-w-[1300px] mx-auto px-4 py-8 sm:px-6 sm:py-12 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-12 lg:gap-20 items-start box-border"
          >
            {/* LEFT — Contact Form */}
            <div className="w-full lg:sticky lg:top-20">
              <div
                className="enquiry-faq-form w-full border border-black/10 rounded-2xl p-4 sm:p-6 md:p-8 bg-white text-gray-900 shadow-xl box-border"
              >
                <SharedLeadForm theme="light" buttonColor="#e07a1b" onSuccess={() => navigate('/thank-you')} />
              </div>
            </div>

            {/* RIGHT — FAQs */}
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? "28px" : "38px",
                  fontWeight: 500,
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
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "16px" : "19px",
                        fontWeight: 500,
                        margin: "0 0 10px",
                        color: "#fff",
                      }}
                    >
                      {f.q}
                    </h4>
                    {activeIndex === i && (
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "16px",
                          color: "rgba(255,255,255,0.7)",
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
    </div>
  );
}
