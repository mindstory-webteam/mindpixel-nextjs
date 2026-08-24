import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { img } from "../assets/assest";

const jobs = [
  {
    title: "Frontend Developer",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "We are looking for a creative Frontend Developer with strong experience in building responsive and modern web interfaces. The ideal candidate should have a good understanding of UI/UX principles and frontend frameworks.",
  },
  {
    title: "Full-Stack Developer",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "Seeking a Full-Stack Developer capable of developing scalable web applications with both frontend and backend expertise. Candidates should be comfortable working with APIs, databases, and modern frameworks.",
  },
  {
    title: "Project Manager",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "As a Project Manager, you'll oversee end-to-end delivery of client projects coordinating timelines, budgets, and cross-functional teams. Strong communication and problem-solving skills are essential to keep everything on track.",
  },
  {
    title: "WordPress Developer",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "We are hiring a WordPress Developer to build and maintain custom WordPress websites, themes, and plugin integrations for business and e-commerce projects.",
  },
  {
    title: "Shopify Developer",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "We are looking for a Shopify Developer with experience in building custom Shopify stores, theme customization, and e-commerce integrations.",
  },
  {
    title: "UI/UX Designer",
    location: "WFO · Kozhikode · ",
    type: "Full Time",
    description: "Looking for a passionate UI/UX Designer to create intuitive and visually engaging digital experiences for websites and applications.",
  },
];

export default function CareerSection() {
  const [applyForm, setApplyForm] = useState({
    name: "", email: "", mobile: "", position: "", message: "",
  });
  const [applyStatus, setApplyStatus] = useState("idle");
  const [expandedJob, setExpandedJob] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);

  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
      setTurnstileToken(token);
    };
    window.onTurnstileExpired = () => {
      setTurnstileToken(null);
    };
    return () => {
      try {
        delete window.onTurnstileSuccess;
        delete window.onTurnstileExpired;
      } catch (e) {
        window.onTurnstileSuccess = undefined;
        window.onTurnstileExpired = undefined;
      }
    };
  }, []);

  const inputBase =
    "w-full border border-gray-200 rounded px-3 py-2 text-xs outline-none focus:border-orange-500 bg-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed";

  const toggleJob = (i) => setExpandedJob((prev) => (prev === i ? null : i));

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the Turnstile verification.");
      return;
    }
    setApplyStatus("submitting");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID,
        {
          from_name: applyForm.name,
          from_email: applyForm.email,
          mobile: applyForm.mobile,
          position: applyForm.position,
          message: applyForm.message || "No additional message provided.",
          time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          "g-recaptcha-response": turnstileToken,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setApplyStatus("success");
        setApplyForm({ name: "", email: "", mobile: "", position: "", message: "" });
        setTurnstileToken(null);
        if (window.turnstile) {
          window.turnstile.reset();
        }
      })
      .catch((err) => {
        console.error("EmailJS career error:", err);
        setApplyStatus("error");
        setTurnstileToken(null);
        if (window.turnstile) {
          window.turnstile.reset();
        }
      });
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif" }} className="bg-white text-gray-900">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .job-desc { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.32s ease; }
        .job-desc.open { grid-template-rows:1fr; }
        .job-desc-inner { overflow:hidden; }
        .arrow-btn { transition:transform 0.3s ease, background 0.2s ease, border-color 0.2s ease; }
        .arrow-btn.rotated { transform:rotate(90deg); }
      `}</style>

      {/*  JOBS LIST SECTION  */}
      <section className="px-8 md:px-14 pt-25 pb-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">HIRING POSITIONS AVAILABLE</p>
            <h1 className="text-2xl lg:text-3xl md:text-4xl font-normal leading-tight">
              Begin Your Career Here
            </h1>
          </div>
          <p className="text-[14px] text-gray-500 max-w-xs leading-relaxed md:text-right">
            Come and join our team in the full-time positions. Help us grow and make a real difference with your experience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Job list */}
          <div className="flex-1">
            {jobs.map((job, i) => {
              const isOpen = expandedJob === i;
              return (
                <div key={i} className="border-b border-gray-100">
                  <div
                    className="flex items-center justify-between py-4 group cursor-pointer"
                    onClick={() => toggleJob(i)}
                  >
                    <div className="w-1/3">
                      <p className={`text-sm font-semibold transition-colors ${isOpen ? "text-orange-600" : "group-hover:text-orange-600"}`}>
                        {job.title}
                      </p>
                    </div>

                    <div className="w-1/3 flex justify-center">
                      <span className="text-orange-600  text-[13px] text-gray-400 font-normal">
                        {job.location}
                        <span className="font-medium">{job.type}</span>
                      </span>
                    </div>

                    <div className="w-1/3 flex justify-end">
                      <div className={`arrow-btn w-7 h-7 rounded-full border flex items-center justify-center transition-all
      ${isOpen
                          ? "bg-orange-600 border-orange-600 text-white rotated"
                          : "border-gray-200 text-gray-500 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white"
                        }`}>
                        <IoIosArrowForward size={11} />
                      </div>
                    </div>
                  </div>
                  <div className={`job-desc ${isOpen ? "open" : ""}`}>
                    <div className="job-desc-inner">
                      <div className="pb-4 pl-1 pr-10">
                        <p className="text-[11.5px] text-gray-500 leading-relaxed pl-3">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-72 flex flex-col gap-5 shrink-0">
            <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 h-44 flex items-center justify-center relative">
              <img
                src={img.questionmark}
                alt="Careers illustration"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/30 to-transparent" />
            </div>

            <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
              <h3 className="text-sm font-normal mb-1">Get In Touch With Us</h3>
              <p className="text-[16px] text-gray-400 leading-relaxed mb-4">
                If you have any questions, feel free to contact us. We are here to help you find full-time roles.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Our Location",
                    value: "Indel House Building, Opposite MTHS, Near Gossayikunnu, Kuriachira, Thrissur 680006",
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "hello@mindstory.in",
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone Number",
                    value: "+91-8281610051  +91-9778189712 ",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-gray-700">{item.label}</p>
                      <p className="text-[14px] text-gray-400 leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY FORM SECTION ── */}
      <section id="apply-form" className="mx-8 md:mx-14 mb-16 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row">

          <div className="w-full md:w-72 shrink-0 min-h-64">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 p-8">
            <h2 className="text-xl md:text-2xl font-normal leading-snug mb-2">
              Our Team Will Respond To You Within 24 Hrs
            </h2>
            <p className="text-[13px] text-gray-400 mb-6">
              Fill out the form below and attach your resume link if applicable.
            </p>

            {applyStatus === "success" && (
              <div className="mb-5 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
                Application submitted successfully! We'll get back to you within 24 hours.
              </div>
            )}
            {applyStatus === "error" && (
              <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleApplySubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className={inputBase}
                  placeholder="Your Name *"
                  required
                  value={applyForm.name}
                  onChange={e => setApplyForm(f => ({ ...f, name: e.target.value }))}
                  disabled={applyStatus === "submitting"}
                />
                <input
                  className={inputBase}
                  type="email"
                  placeholder="Your Email *"
                  required
                  value={applyForm.email}
                  onChange={e => setApplyForm(f => ({ ...f, email: e.target.value }))}
                  disabled={applyStatus === "submitting"}
                />
                <input
                  className={inputBase}
                  placeholder="Mobile Number *"
                  required
                  value={applyForm.mobile}
                  onChange={e => setApplyForm(f => ({ ...f, mobile: e.target.value }))}
                  disabled={applyStatus === "submitting"}
                />
                <select
                  className={`${inputBase} text-gray-400`}
                  required
                  value={applyForm.position}
                  onChange={e => setApplyForm(f => ({ ...f, position: e.target.value }))}
                  disabled={applyStatus === "submitting"}
                >
                  <option value="">Select Job Position *</option>
                  {jobs.map((j, i) => (
                    <option key={i} value={j.title}>{j.title}</option>
                  ))}
                </select>
              </div>

              <textarea
                className={`${inputBase} resize-none mb-5`}
                rows={3}
                placeholder="Additional message (include your Google Drive resume link here if applicable)"
                value={applyForm.message}
                onChange={e => setApplyForm(f => ({ ...f, message: e.target.value }))}
                disabled={applyStatus === "submitting"}
              />

              <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 mb-5">
                <div className="overflow-hidden flex justify-center w-full lg:w-auto">
                  <div
                    className="cf-turnstile"
                    data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    data-callback="onTurnstileSuccess"
                    data-expired-callback="onTurnstileExpired"
                    data-theme="light"
                  />
                </div>
                <button
                  type="submit"
                  disabled={applyStatus === "submitting" || !turnstileToken}
                  className="bg-orange-600 text-white text-xs font-semibold px-6 py-2.5 rounded hover:bg-orange-700 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed max-lg:w-full"
                >
                  {applyStatus === "submitting" ? "Sending…" : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
