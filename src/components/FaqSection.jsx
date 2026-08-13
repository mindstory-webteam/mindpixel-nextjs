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

  return (
    <div className="w-full h-auto bg-white pt-5">
      <section className="faq-section-wrapper">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');

          .faq-section-wrapper {
            width: calc(100% - 24px);
            margin: 15px auto 50px auto;
            background: #000;
            color: #fff;
            overflow: hidden;
            position: relative;
            border-radius: 16px;
          }
          @media (min-width: 640px) {
            .faq-section-wrapper {
              width: calc(100% - 48px);
              margin: 20px auto 60px auto;
              border-radius: 20px;
            }
          }
          @media (min-width: 1024px) {
            .faq-section-wrapper {
              width: calc(100% - 120px);
              margin: 30px auto 80px auto;
              border-radius: 24px;
            }
          }

          .faq-container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 40px 14px 40px 14px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          @media (min-width: 400px) {
            .faq-container {
              padding: 48px 20px 48px 20px;
            }
          }
          @media (min-width: 640px) {
            .faq-container {
              padding: 56px 32px 56px 32px;
              gap: 56px;
            }
          }
          @media (min-width: 1024px) {
            .faq-container {
              padding: 60px 60px 80px 60px;
              grid-template-columns: 1fr 1.2fr;
              gap: 100px;
            }
          }

          .faq-form-sticky {
            position: static;
          }
          @media (min-width: 1024px) {
            .faq-form-sticky {
              position: sticky;
              top: 80px;
            }
          }

          .faq-form-card {
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 20px 14px;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(8px);
            width: 100%;
            box-sizing: border-box;
          }
          @media (min-width: 400px) {
            .faq-form-card {
              padding: 24px 20px;
            }
          }
          @media (min-width: 640px) {
            .faq-form-card {
              padding: 28px 24px;
            }
          }
          @media (min-width: 1024px) {
            .faq-form-card {
              padding: 32px 28px;
            }
          }

          .faq-heading {
            font-family: 'Syne', sans-serif;
            font-size: 22px;
            font-weight: 400;
            color: #fff;
            margin: 0 0 24px;
          }
          @media (min-width: 400px) {
            .faq-heading {
              font-size: 26px;
              margin: 0 0 28px;
            }
          }
          @media (min-width: 640px) {
            .faq-heading {
              font-size: 30px;
            }
          }
          @media (min-width: 1024px) {
            .faq-heading {
              font-size: 38px;
              margin: 0 0 32px;
            }
          }

          .faq-input {
            width: 100%;
            font-family: 'Syne', sans-serif;
            font-size: 16px; /* 16px prevents iOS Safari auto-zoom on iPhone SE */
            font-weight: 400;
            padding: 12px 0;
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            outline: none;
            color: #fff;
            transition: border-color 0.3s;
            margin-bottom: 20px;
            box-sizing: border-box;
            border-radius: 0;
          }
          .faq-input:focus {
            border-bottom-color: rgba(255, 255, 255, 0.8);
          }
          .faq-input-error {
            border-bottom: 2px solid #f87171 !important;
          }
          input::placeholder, textarea::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          .faq-item {
            padding: 16px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            cursor: pointer;
            transition: opacity 0.3s;
          }
          @media (min-width: 640px) {
            .faq-item {
              padding: 20px 0;
            }
          }
          .faq-item:hover {
            opacity: 1 !important;
          }

          .faq-q-title {
            font-family: 'Syne', sans-serif;
            font-size: 15px;
            font-weight: 400;
            margin: 0 0 8px;
            color: #fff;
            line-height: 1.4;
          }
          @media (min-width: 400px) {
            .faq-q-title {
              font-size: 16px;
            }
          }
          @media (min-width: 640px) {
            .faq-q-title {
              font-size: 17px;
              margin: 0 0 10px;
            }
          }
          @media (min-width: 1024px) {
            .faq-q-title {
              font-size: 19px;
            }
          }

          .faq-a-text {
            font-family: 'Syne', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.65);
            line-height: 1.6;
            margin: 0;
          }
          @media (min-width: 640px) {
            .faq-a-text {
              font-size: 16px;
              line-height: 1.65;
            }
          }
          @media (min-width: 1024px) {
            .faq-a-text {
              font-size: 18px;
              line-height: 1.7;
            }
          }

          .turnstile-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 12px 0 16px;
            overflow: hidden;
          }
          @media (max-width: 360px) {
            .turnstile-wrapper > div {
              transform: scale(0.85);
              transform-origin: center center;
            }
          }
          @media (max-width: 325px) {
            .turnstile-wrapper > div {
              transform: scale(0.75);
              transform-origin: center center;
            }
          }

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

        <div className="faq-container">
          {/* LEFT — Contact Form */}
          <div className="faq-form-sticky">
            <h2 className="faq-heading">Send us a brief.</h2>

            {submitted ? (
              <div
                style={{
                  minHeight: "340px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px 20px",
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
                    fontSize: "22px",
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
                    fontSize: "14px",
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
              <form onSubmit={handleSubmit} noValidate className="faq-form-card">
                <input
                  className={`faq-input ${errors.name ? "faq-input-error" : ""}`}
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  disabled={status === "submitting"}
                />
                <input
                  type="email"
                  className={`faq-input ${errors.email ? "faq-input-error" : ""}`}
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  disabled={status === "submitting"}
                />
                {/* Custom React Service / Subject Dropdown */}
                <div ref={dropdownRef} style={{ position: "relative", marginBottom: "20px" }}>
                  <div
                    onClick={() => status !== "submitting" && setIsDropdownOpen((prev) => !prev)}
                    className={`faq-input ${errors.subject ? "faq-input-error" : ""}`}
                    style={{
                      cursor: status === "submitting" ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      userSelect: "none",
                      color: form.subject ? "#fff" : "rgba(255,255,255,0.4)",
                      marginBottom: 0,
                    }}
                  >
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {form.subject || "Select Service *"}
                    </span>
                    <span
                      style={{
                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.6)",
                        marginLeft: "8px",
                        flexShrink: 0,
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
                        overflowY: "auto",
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
                  className={`faq-input ${errors.message ? "faq-input-error" : ""}`}
                  style={{
                    minHeight: "90px",
                    resize: "vertical",
                  }}
                  placeholder="Project goals *"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  disabled={status === "submitting"}
                />

                {/* Cloudflare Turnstile CAPTCHA */}
                <div className="turnstile-wrapper">
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
                  style={{ width: "100%", padding: "14px 16px" }}
                >
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </AnimatedButton>

                <div
                  style={{
                    marginTop: "20px",
                    padding: "14px 16px",
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
                      wordBreak: "break-word",
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
            <h2 className="faq-heading">Common Questions</h2>

            <div>
              {FAQS.map((f, i) => (
                <div
                  key={i}
                  className="faq-item"
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setActiveIndex(i);
                    }
                  }}
                  style={{ opacity: activeIndex === i ? 1 : 0.4 }}
                >
                  <h4 className="faq-q-title">{f.q}</h4>
                  {activeIndex === i && <p className="faq-a-text">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}