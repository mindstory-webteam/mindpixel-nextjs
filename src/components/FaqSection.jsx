import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedButton from "./AnimatedButton";
import TurnstileWidget from "./TurnstileWidget";

const SERVICES = [
  "SEO",
  "UI / UX Design",
  "Enterprise Software",
  "Custom Software",
  "SaaS Application",
  "Mobile App Development"
];

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
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setField = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
    setErrorMsg("");
  };

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !validateEmail(form.email)) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMsg("Please fill in all required fields with a valid email.");
      return;
    }

    if (!captchaToken) {
      setErrorMsg("Please complete the CAPTCHA verification.");
      return;
    }

    setStatus("submitting");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          subject: form.subject,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        },
        publicKey
      )
      .then(() => {
        setSubmitted(true);
        setStatus("idle");
        setForm({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
      })
      .catch((err) => {
        console.error("EmailJS submission error:", err);
        setErrorMsg("Failed to send message. Please try again or email us directly.");
        setStatus("error");
      });
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
        .custom-dropdown-menu {
          scrollbar-width: thin;
          scrollbar-color: #ffb86a rgba(255, 255, 255, 0.08);
        }
        .custom-dropdown-menu::-webkit-scrollbar {
          width: 6px;
          display: block;
        }
        .custom-dropdown-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }
        .custom-dropdown-menu::-webkit-scrollbar-thumb {
          background: #ffb86a;
          border-radius: 4px;
        }
        .custom-dropdown-menu::-webkit-scrollbar-thumb:hover {
          background: #ffa843;
        }
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
                  minHeight: "380px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: isMobile ? "32px 20px" : "48px 32px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#fff",
                    margin: "0 0 12px",
                  }}
                >
                  Message Sent
                </h3>
                <p
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    maxWidth: "340px",
                    margin: 0,
                  }}
                >
                  Thank you! We've received your brief and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
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
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  disabled={status === "submitting"}
                />
                <input
                  type="email"
                  style={inputStyle("email")}
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  disabled={status === "submitting"}
                />
                {/* Custom React Service / Subject Dropdown */}
                <div ref={dropdownRef} style={{ position: "relative", marginBottom: "20px" }}>
                  <div
                    onClick={() => status !== "submitting" && setIsDropdownOpen((prev) => !prev)}
                    style={{
                      ...inputStyle("subject"),
                      cursor: status === "submitting" ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      userSelect: "none",
                      color: form.subject ? "#fff" : "rgba(255,255,255,0.4)",
                      marginBottom: 0,
                    }}
                  >
                    <span>{form.subject || "Select Service / Subject *"}</span>
                    <span
                      style={{
                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      ▼
                    </span>
                  </div>

                  {isDropdownOpen && (
                    <div
                      className="custom-dropdown-menu"
                      data-lenis-prevent="true"
                      data-lenis-prevent-touch="true"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        zIndex: 50,
                        marginTop: "4px",
                        background: "#141414",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "12px",
                        maxHeight: "175px",
                        overflowY: "scroll",
                        overscrollBehavior: "contain",
                        WebkitOverflowScrolling: "touch",
                        boxShadow: "0 12px 36px rgba(0,0,0,0.6)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      {SERVICES.map((service) => (
                        <div
                          key={service}
                          onClick={() => {
                            setField("subject", service);
                            setIsDropdownOpen(false);
                          }}
                          style={{
                            padding: "12px 16px",
                            fontSize: "14px",
                            fontFamily: "'Syne', sans-serif",
                            color: form.subject === service ? "#ffb86a" : "rgba(255,255,255,0.85)",
                            background: form.subject === service ? "rgba(255,184,106,0.12)" : "transparent",
                            cursor: "pointer",
                            transition: "background 0.2s, color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            if (form.subject !== service) {
                              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                              e.currentTarget.style.color = "#fff";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (form.subject !== service) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                            }
                          }}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <textarea
                  style={{
                    ...inputStyle("message"),
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                  placeholder="Project goals *"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  disabled={status === "submitting"}
                />

                {/* Cloudflare Turnstile CAPTCHA */}
                <div style={{ margin: "12px 0 16px", display: "flex", justifyContent: "center" }}>
                  <TurnstileWidget
                    theme="dark"
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      setErrorMsg("");
                    }}
                    onExpire={() => setCaptchaToken(null)}
                    onError={() => setCaptchaToken(null)}
                  />
                </div>

                {errorMsg && (
                  <div
                    style={{
                      padding: "10px 14px",
                      marginBottom: "16px",
                      borderRadius: "8px",
                      background: "rgba(248, 113, 113, 0.15)",
                      border: "1px solid rgba(248, 113, 113, 0.3)",
                      color: "#f87171",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <AnimatedButton
                  type="submit"
                  disabled={status === "submitting"}
                  bgColor="#ffb86a"
                  textColor="#111"
                  hoverBgColor="#1a1a1a"
                  hoverTextColor="#fff"
                  style={{ width: "100%", padding: "16px" }}
                >
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
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
              </form>
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