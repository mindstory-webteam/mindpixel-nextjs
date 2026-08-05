import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";

// ─── GOOGLE SHEET CONFIGURATION ──────────────────────
// Paste your deployed Google Apps Script Web App URL below:
const GOOGLE_SHEET_WEBAPP_URL = process.env.VITE_GOOGLE_APPS_SCRIPT_URL;

/**
 * Submit form data to Google Sheet using modern fetch with no-cors.
 * 
 * WHY: fetch() with mode: 'no-cors' performs a simple request, bypassing CORS preflight
 * blocks just like a standard HTML form, without needing heavy iframe-injection logic.
 */
const submitToGoogleSheet = (data) => {
  return new Promise((resolve) => {
    if (!GOOGLE_SHEET_WEBAPP_URL) {
      console.warn("GOOGLE_SHEET_WEBAPP_URL is not set. Lead recorded locally only.");
      resolve();
      return;
    }

    // Use URLSearchParams to send data as application/x-www-form-urlencoded
    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key] != null ? data[key] : "");
    }

    fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      // Passing URLSearchParams directly automatically sets the correct Content-Type header
      body: formData
    })
    .then(() => {
      resolve();
    })
    .catch((err) => {
      console.error("Google Sheet submission error:", err);
      resolve(); // resolve anyway to avoid blocking user flow
    });
  });
};

export default function SharedLeadForm({ theme = "light", buttonColor = "var(--purple)", onSuccess }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [form, setForm] = useState({
    name: "", email: "", phone: "", brand: "", budget: "", website: "", description: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = theme === "dark";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(""); // Clear errors on typing
  };

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const missingFields = [];
    if (!form.name.trim()) missingFields.push("Name");
    if (!form.email.trim()) missingFields.push("Email ID");
    if (!form.phone.trim()) missingFields.push("Phone Number");

    if (missingFields.length > 0) {
      setErrorMsg(`Please fill in required fields: ${missingFields.join(", ")}.`);
      return;
    } else if (!validateEmail(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Send data directly to Google Sheets
    submitToGoogleSheet({
      name: form.name,
      email: form.email,
      phone: form.phone,
      brand: form.brand,
      budget: form.budget,
      website: form.website,
      description: form.description
    }).then(() => {
      setStatus("success");
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", phone: "", brand: "", budget: "", website: "", description: "" });
      }, 4000);
    }).catch((err) => {
      console.error("Google Sheets submission error:", err);
      setErrorMsg("Something went wrong. Please try again later.");
      setStatus("error");
    });
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "30px 10px", animation: "fadeIn 0.4s ease forwards" }}>
        <div style={{ fontSize: "52px", color: isDark ? "#fff" : "var(--purple)", marginBottom: "16px" }}>✓</div>
        <h3 style={{ color: isDark ? "#fff" : "var(--purple)", fontSize: "22px", fontWeight: 800, margin: "0 0 10px 0", lineHeight: 1.3 }}>
          Thank You!
        </h3>
        <p style={{ color: isDark ? "rgba(255,255,255,0.7)" : "#555", fontSize: "14.5px", lineHeight: 1.6, marginBottom: "20px" }}>
          Your message has been sent. We'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .shared-lead-form {
          font-family: 'Syne', sans-serif;
          width: 100%;
        }
        .shared-form-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .shared-form-row {
          display: flex;
          gap: 16px;
        }
        .shared-form-row .shared-form-group {
          flex: 1;
        }
        .shared-form-group label {
          font-size: 13px;
          font-weight: 700;
          color: ${isDark ? 'rgba(255,255,255,0.8)' : '#334155'};
        }
        .shared-form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.2)' : '#e2e8f0'};
          border-radius: 8px;
          font-family: inherit;
          font-size: 14px;
          background: ${isDark ? 'rgba(255,255,255,0.05)' : '#fff'};
          color: ${isDark ? '#fff' : '#1e293b'};
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .shared-form-input:focus {
          outline: none;
          border-color: ${isDark ? 'rgba(255,255,255,0.5)' : 'var(--purple)'};
          box-shadow: 0 0 0 3px ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(131, 58, 137, 0.1)'};
        }
        .shared-form-input::placeholder {
          color: ${isDark ? 'rgba(255,255,255,0.4)' : '#94a3b8'};
        }
        .shared-form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23ffffff' : '%23475569'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
        }
        .shared-form-select option {
          color: #1e293b;
          background: #fff;
        }
        .shared-popup-btn {
          padding: 14px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          width: 100%;
        }
        .shared-popup-btn-primary {
          background: ${buttonColor};
          color: ${isDark ? '#111' : 'white'};
        }
        .shared-popup-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          opacity: 0.9;
        }
        .shared-popup-btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        .shared-form-error-msg {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(234, 67, 53, 0.1);
          color: ${isDark ? '#ff8a80' : '#ea4335'};
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          margin-top: 16px;
        }
        .shared-form-error-msg svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .shared-form-row {
            flex-direction: column;
            gap: 0px;
          }
        }
      `}</style>
      <form className="shared-lead-form" onSubmit={handleSubmit} noValidate>
        <div className="shared-form-row">
          <div className="shared-form-group">
            <label htmlFor="shared-name">Name *</label>
            <input type="text" id="shared-name" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className="shared-form-input" />
          </div>
          <div className="shared-form-group">
            <label htmlFor="shared-email">Email ID *</label>
            <input type="email" id="shared-email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className="shared-form-input" />
          </div>
        </div>
        <div className="shared-form-row">
          <div className="shared-form-group">
            <label htmlFor="shared-phone">Phone Number *</label>
            <input type="tel" id="shared-phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter your phone number" className="shared-form-input" />
          </div>
          <div className="shared-form-group">
            <label htmlFor="shared-brand">Brand/Company Name</label>
            <input type="text" id="shared-brand" name="brand" value={form.brand} onChange={handleChange} placeholder="Your brand/company name" className="shared-form-input" />
          </div>
        </div>
        <div className="shared-form-row">
          <div className="shared-form-group">
            <label htmlFor="shared-budget">Marketing Budget (optional)</label>
            <select id="shared-budget" name="budget" value={form.budget} onChange={handleChange} className="shared-form-input shared-form-select">
              <option value="">Your current marketing budget (optional)</option>
              <option value="Below ₹50,000/month">Below ₹50,000/month</option>
              <option value="₹50,000 - ₹1,00,000/month">₹50,000 - ₹1,00,000/month</option>
              <option value="₹1,00,000 - ₹5,00,000/month">₹1,00,000 - ₹5,00,000/month</option>
              <option value="Above ₹5,00,000/month">Above ₹5,00,000/month</option>
            </select>
          </div>
          <div className="shared-form-group">
            <label htmlFor="shared-website">Website/URL</label>
            <input type="text" id="shared-website" name="website" value={form.website} onChange={handleChange} placeholder="Your website/URL (optional)" className="shared-form-input" />
          </div>
        </div>
        <div className="shared-form-group">
          <label htmlFor="shared-description">Description</label>
          <textarea id="shared-description" name="description" value={form.description} onChange={handleChange} rows="3" placeholder="Tell us more about your goals (optional)" className="shared-form-input"></textarea>
        </div>
        
        {errorMsg && (
          <div className="shared-form-error-msg">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <span className="error-text">{errorMsg}</span>
          </div>
        )}
        
        <div style={{ marginTop: "24px", width: "100%" }}>
          <AnimatedButton 
            type="submit" 
            disabled={status === "submitting"} 
            bgColor={buttonColor}
            textColor={isDark ? '#111' : 'white'}
            hoverBgColor={isDark ? 'white' : '#111'}
            hoverTextColor={isDark ? '#111' : 'white'}
            style={{ width: "100%", padding: "14px 24px", fontSize: "15px" }}
          >
            {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
          </AnimatedButton>
        </div>
      </form>
    </>
  );
}
