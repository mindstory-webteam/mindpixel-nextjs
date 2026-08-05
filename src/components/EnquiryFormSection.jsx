import { useState, useEffect } from "react";
import { useNavigate } from '@/lib/react-router-dom-compat';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import SharedLeadForm from "./SharedLeadForm";

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


// ─── Social links data ────────────────────────────────────────────────────────
const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/myndpixel", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/mpxcode/", label: "Instagram" },
  { icon: <FaYoutube />, url: "#", label: "YouTube" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function EnquiryFormSection() {
  const navigate = useNavigate();
  const width = useWindowWidth();
  const isMobile = width < 1024;
  const isTablet = false;

  const brandOrange = "#e07a1b"; // Darker orange for better contrast on white

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color: rgba(0,0,0,0.3) !important; }
        .enq-social-btn {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; color: #333; text-decoration: none;
          transition: all 0.3s ease;
        }
        .enq-social-btn:hover { background: ${brandOrange}; color: #fff; border-color: ${brandOrange}; }
        .enq-input-row input:focus, .enq-input-row textarea:focus,
        input:focus, textarea:focus {
          border-bottom-color: ${brandOrange} !important;
        }
      `}</style>

      {/* ── FORM + INFO SECTION ─────────────────────────────────────────────── */}
      <div
        style={{
          background: "#ffffff",
          paddingTop: isMobile ? "80px" : isTablet ? "100px" : "120px",
          paddingBottom: "40px",
          paddingLeft: isMobile ? "24px" : isTablet ? "40px" : "80px",
          paddingRight: isMobile ? "24px" : isTablet ? "40px" : "80px",
        }}
      >
        <div
          style={{
            maxWidth: "100%", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1.2fr",
            gap: isMobile ? "40px" : isTablet ? "40px" : "80px",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Info Panel ──────────────────────────────────────────── */}
          <div style={isMobile || isTablet ? {} : { position: "sticky", top: "80px" }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "28px" : "36px",
                fontWeight: 500, color: "#111",
                lineHeight: 1.2, margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}
            >
              Always ready to answer<br />your questions.
            </h2>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "15px", color: "rgba(0,0,0,0.6)",
                lineHeight: 1.75, margin: "0 0 48px",
              }}
            >
              Our team is dedicated to providing the best strategic support. Whether
              you have a specific project in mind or just want to say hi — we're all ears.
            </p>

            {[
              { label: "Phone", value: "+91-8281001410" },
              { label: "Email", value: "hello@mindstory.in" },
              { label: "HQ Location", value: "Indel House Building, Kuriachira,\nThrissur 680006, Kerala" },
              { label: "Response Time", value: "Within 1 business day" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  marginBottom: "28px", paddingBottom: "28px",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: brandOrange, margin: "0 0 6px" }}>
                  {label}
                </p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", color: "#333", margin: 0, whiteSpace: "pre-line" }}>
                  {value}
                </p>
              </div>
            ))}

          </div>

          <div
            style={{
              background: "#f9f9f9",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "24px",
              padding: isMobile ? "28px 20px" : "44px 40px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? "22px" : "28px",
                fontWeight: 500, color: "#111",
                margin: "0 0 10px", letterSpacing: "-0.01em",
              }}
            >
              Get in Touch
            </h3>
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "14px", color: "rgba(0,0,0,0.6)",
                margin: "0 0 36px", lineHeight: 1.6,
              }}
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <SharedLeadForm theme="light" buttonColor={brandOrange} onSuccess={() => navigate("/thank-you")} />
          </div>
        </div>
      </div>
    </div>
  );
}
