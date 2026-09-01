"use client";
import React, { useState, useEffect, useRef } from "react";

const COUNTRIES = [
  { iso: "in", name: "India", dial: "+91", flag: "🇮🇳" },
  { iso: "ae", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { iso: "sa", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { iso: "qa", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { iso: "om", name: "Oman", dial: "+968", flag: "🇴🇲" },
  { iso: "kw", name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { iso: "bh", name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { iso: "us", name: "United States", dial: "+1", flag: "🇺🇸" },
  { iso: "gb", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { iso: "ca", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { iso: "au", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { iso: "sg", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { iso: "my", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { iso: "de", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { iso: "fr", name: "France", dial: "+33", flag: "🇫🇷" },
  { iso: "nl", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { iso: "it", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { iso: "es", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { iso: "ch", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { iso: "se", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { iso: "no", name: "Norway", dial: "+47", flag: "🇳🇴" },
  { iso: "nz", name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { iso: "za", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { iso: "ie", name: "Ireland", dial: "+353", flag: "🇮🇪" },
  { iso: "ph", name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { iso: "lk", name: "Sri Lanka", dial: "+94", flag: "🇱🇰" },
  { iso: "bd", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { iso: "np", name: "Nepal", dial: "+977", flag: "🇳🇵" },
  { iso: "pk", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { iso: "ng", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { iso: "ke", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { iso: "gh", name: "Ghana", dial: "+233", flag: "🇬🇭" },
  { iso: "eg", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { iso: "th", name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { iso: "id", name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { iso: "vn", name: "Vietnam", dial: "+84", flag: "🇻🇳" },
  { iso: "br", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { iso: "mx", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { iso: "jp", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { iso: "kr", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { iso: "tr", name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { iso: "ru", name: "Russia", dial: "+7", flag: "🇷🇺" },
  { iso: "pl", name: "Poland", dial: "+48", flag: "🇵🇱" },
  { iso: "pt", name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { iso: "at", name: "Austria", dial: "+43", flag: "🇦🇹" },
  { iso: "be", name: "Belgium", dial: "+32", flag: "🇧🇪" },
  { iso: "dk", name: "Denmark", dial: "+45", flag: "🇩🇰" },
  { iso: "fi", name: "Finland", dial: "+358", flag: "🇫🇮" },
  { iso: "gr", name: "Greece", dial: "+30", flag: "🇬🇷" },
  { iso: "il", name: "Israel", dial: "+972", flag: "🇮🇱" },
  { iso: "ro", name: "Romania", dial: "+40", flag: "🇷🇴" },
  { iso: "cz", name: "Czech Republic", dial: "+420", flag: "🇨🇿" },
  { iso: "hu", name: "Hungary", dial: "+36", flag: "🇭🇺" },
  { iso: "mv", name: "Maldives", dial: "+960", flag: "🇲🇻" },
  { iso: "mu", name: "Mauritius", dial: "+230", flag: "🇲🇺" },
  { iso: "sc", name: "Seychelles", dial: "+248", flag: "🇸🇨" }
];

const GOOGLE_SHEET_WEBAPP_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || process.env.VITE_GOOGLE_APPS_SCRIPT_URL;

export default function SharedLeadForm({
  theme = "light",
  buttonColor = "#e07a1b",
  buttonText = "Get Free Quote",
  onSuccess
}) {
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const isDark = theme === "dark";

  const [form, setForm] = useState({
    name: "",
    company: "",
    phoneRaw: "",
    email: "",
    service: "-None-",
    budget: "-None-",
    startTimeline: "-None-",
    description: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // Default India +91
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef(null);

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hidden field refs for dynamic tracking values
  const returnUrlRef = useRef(null);
  const pageUrlRef = useRef(null);
  const utmSourceRef = useRef(null);
  const utmCampaignRef = useRef(null);
  const utmContentRef = useRef(null);

  // Close country dropdown when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Set tracking values on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (returnUrlRef.current) returnUrlRef.current.value = window.location.origin + "/thank-you";
      if (pageUrlRef.current) pageUrlRef.current.value = window.location.href;
      if (utmSourceRef.current) utmSourceRef.current.value = urlParams.get("utm_source") || "";
      if (utmCampaignRef.current) utmCampaignRef.current.value = urlParams.get("utm_campaign") || "";
      if (utmContentRef.current) utmContentRef.current.value = urlParams.get("utm_content") || "";
    }
  }, []);

  // Load and initialize Google reCAPTCHA v2
  useEffect(() => {
    if (typeof window === "undefined") return;

    const renderRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && !recaptchaRef.current.hasChildNodes()) {
        try {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: "6LdFqIQtAAAAAO8ZlutxG0RSjH__U8T2ycZiHjD5",
            theme: isDark ? "dark" : "light",
            callback: () => {
              setCaptchaVerified(true);
              setErrorMsg("");
            },
            "expired-callback": () => {
              setCaptchaVerified(false);
            },
          });
        } catch (err) {
          // Already rendered or handled
        }
      }
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
    } else {
      const existingScript = document.querySelector('script[src*="google.com/recaptcha/api.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            window.grecaptcha.ready(renderRecaptcha);
          } else {
            renderRecaptcha();
          }
        };
        document.head.appendChild(script);
      } else {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(renderRecaptcha);
        } else {
          existingScript.addEventListener("load", renderRecaptcha);
        }
      }
    }
  }, []);


  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrorMsg("");
  };

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!form.company.trim()) {
      setErrorMsg("Please enter your company name.");
      return;
    }
    if (!form.phoneRaw.trim()) {
      setErrorMsg("Please enter your mobile number.");
      return;
    }
    if (!form.email.trim() || !form.email.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (form.service === "-None-") {
      setErrorMsg("Please select a service you are interested in.");
      return;
    }
    if (form.startTimeline === "-None-") {
      setErrorMsg("Please select when you want to start.");
      return;
    }
    if (!form.description.trim()) {
      setErrorMsg("Please tell us about your requirement.");
      return;
    }

    if (!captchaVerified) {
      setErrorMsg("Please check the reCAPTCHA box before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Optional background sync to Google Sheets
    if (GOOGLE_SHEET_WEBAPP_URL) {
      try {
        const formData = new URLSearchParams();
        formData.append("name", form.name);
        formData.append("company", form.company);
        formData.append("phone", `${selectedCountry.dial}${form.phoneRaw.replace(/\D/g, "")}`);
        formData.append("email", form.email);
        formData.append("service", form.service);
        formData.append("budget", form.budget);
        formData.append("timeline", form.startTimeline);
        formData.append("description", form.description);
        fetch(GOOGLE_SHEET_WEBAPP_URL, { method: "POST", mode: "no-cors", body: formData }).catch(() => { });
      } catch (err) {
        // Continue
      }
    }

    if (formRef.current) {
      // Set returnURL dynamically so Zoho redirects to the correct origin
      // (localhost:3000 in dev, myndpixel.com in production)
      if (returnUrlRef.current) {
        returnUrlRef.current.value = window.location.origin + "/thank-you";
      }
      formRef.current.submit();
    }
  };

  const inputStyles = `w-full px-3.5 py-2.5 text-sm rounded-lg outline-none transition-colors border shadow-xs ${isDark
      ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500"
      : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-orange-500"
    }`;

  const labelStyles = `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? "text-gray-200" : "text-gray-700"
    }`;

  return (
    <div className="w-full">
      <form
        ref={formRef}
        action="https://bigin.zoho.com/crm/WebForm"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        className="flex flex-col gap-3.5 text-left font-sans"
      >
        {/* ── Hidden Zoho CRM Web-to-Record Integration Fields ── */}
        <input type="hidden" name="xnQsjsdp" value="98ea7a89a13df0f9f658580a9c875ee0d21ba946b68372ddf0da4593eef8fd0d" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="81a6928171067053d2d0cf6ca3a3a766a669f320f445ceae5ed81fcabe8440f54d3dee36d6eeb852887b36e4cbe363b7" />
        <input type="hidden" name="actionType" value="UG90ZW50aWFscw==" />
        <input type="hidden" name="returnURL" ref={returnUrlRef} defaultValue="https://myndpixel.com/thank-you" />
        <input type="hidden" name="Pipeline" value="Sales Pipeline Standard" />
        <input type="hidden" name="Stage" value="Qualification" />
        <input type="hidden" name="Lead Source" value="Official Website" />

        {/* Formatted phone value */}
        <input
          type="hidden"
          name="Contacts.Mobile"
          value={`${selectedCountry.dial}${form.phoneRaw.replace(/\D/g, "")}`}
        />

        {/* Tracking inputs */}
        <input type="hidden" name="POTENTIALCF4" ref={pageUrlRef} />
        <input type="hidden" name="POTENTIALCF5" ref={utmSourceRef} />
        <input type="hidden" name="POTENTIALCF7" ref={utmCampaignRef} />
        <input type="hidden" name="POTENTIALCF6" ref={utmContentRef} />

        {/* ── Row 1: Name & Company Name ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelStyles}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Potential Name"
              maxLength={120}
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange("name")}
              disabled={isSubmitting}
              className={inputStyles}
            />
          </div>

          <div>
            <label className={labelStyles}>
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Accounts.Account Name"
              maxLength={200}
              placeholder="Brand / Company name"
              value={form.company}
              onChange={handleChange("company")}
              disabled={isSubmitting}
              className={inputStyles}
            />
          </div>
        </div>

        {/* ── Row 2: Mobile with Country Selector & Email ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelStyles}>
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center" ref={dropdownRef}>
              {/* Country Code Trigger */}
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`h-10 px-2.5 border border-r-0 rounded-l-lg flex items-center gap-1.5 text-xs font-medium shrink-0 transition-colors ${isDark ? "bg-white/10 border-white/20 text-white hover:bg-white/15" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <span>{selectedCountry.flag}</span>
                <span>{selectedCountry.dial}</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Country Dropdown Panel */}
              {dropdownOpen && (
                <div className="absolute top-11 left-0 z-50 w-64 max-h-60 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col">
                  <div className="p-2 border-b border-gray-100 bg-gray-50">
                    <input
                      type="text"
                      placeholder="Search country or code..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-gray-200 rounded outline-none focus:border-orange-500 text-gray-800"
                    />
                  </div>
                  <div className="overflow-y-auto flex-1">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <button
                          key={`${country.iso}-${country.dial}`}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setDropdownOpen(false);
                            setCountrySearch("");
                          }}
                          className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-orange-50 transition-colors ${selectedCountry.iso === country.iso ? "bg-orange-50 font-semibold text-orange-600" : "text-gray-700"
                            }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <span>{country.flag}</span>
                            <span className="truncate">{country.name}</span>
                          </span>
                          <span className="text-gray-400 font-mono text-[11px] ml-2 shrink-0">{country.dial}</span>
                        </button>
                      ))
                    ) : (
                      <div className="p-3 text-xs text-gray-400 text-center">No countries found</div>
                    )}
                  </div>
                </div>
              )}

              {/* Phone Input */}
              <input
                type="tel"
                name="phone_display"
                maxLength={20}
                placeholder="Phone number"
                value={form.phoneRaw}
                onChange={(e) => setForm((prev) => ({ ...prev, phoneRaw: e.target.value }))}
                disabled={isSubmitting}
                className={`w-full h-10 px-3 py-2 text-sm rounded-r-lg outline-none transition-colors border shadow-xs ${isDark
                    ? "bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500"
                    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-orange-500"
                  }`}
              />
            </div>
          </div>

          <div>
            <label className={labelStyles}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="Contacts.Email"
              maxLength={100}
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange("email")}
              disabled={isSubmitting}
              className={`h-10 ${inputStyles}`}
            />
          </div>
        </div>

        {/* ── Row 3: Service & Budget ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelStyles}>
              Service Interested In? <span className="text-red-500">*</span>
            </label>
            <select
              name="POTENTIALCF1"
              value={form.service}
              onChange={handleChange("service")}
              disabled={isSubmitting}
              className={`h-10 cursor-pointer ${inputStyles}`}
            >
              <option value="-None-">- Select a Service -</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO">SEO</option>
              <option value="Website Development">Website Development</option>
              <option value="Video Production">Video Production</option>
              <option value="Influencer Marketing">Influencer Marketing</option>
              <option value="AI Videos">AI Videos</option>
            </select>
          </div>

          <div>
            <label className={labelStyles}>
              Monthly/Project Budget
            </label>
            <select
              name="POTENTIALCF3"
              value={form.budget}
              onChange={handleChange("budget")}
              disabled={isSubmitting}
              className={`h-10 cursor-pointer ${inputStyles}`}
            >
              <option value="-None-">- Select Budget Range -</option>
              <option value="Below ₹25K">Below ₹25K</option>
              <option value="₹25K–₹50K">₹25K–₹50K</option>
              <option value="₹50K–₹1L">₹50K–₹1L</option>
              <option value="₹1L–₹3L">₹1L–₹3L</option>
              <option value="₹3L+">₹3L+</option>
            </select>
          </div>
        </div>

        {/* ── Row 4: Start Timeline ── */}
        <div>
          <label className={labelStyles}>
            When do you want to start? <span className="text-red-500">*</span>
          </label>
          <select
            name="POTENTIALCF2"
            value={form.startTimeline}
            onChange={handleChange("startTimeline")}
            disabled={isSubmitting}
            className={`h-10 cursor-pointer ${inputStyles}`}
          >
            <option value="-None-">- Select Timeline -</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="1–3 months">1–3 months</option>
            <option value="Just Exploring">Just Exploring</option>
          </select>
        </div>

        {/* ── Row 5: Tell Us About Your Requirement ── */}
        <div>
          <label className={labelStyles}>
            Tell Us About Your Requirement <span className="text-red-500">*</span>
          </label>
          <textarea
            name="Description"
            rows={2}
            maxLength={32000}
            placeholder="Tell us more about your project and goals..."
            value={form.description}
            onChange={handleChange("description")}
            disabled={isSubmitting}
            className={`resize-y ${inputStyles}`}
            style={{ minHeight: "56px" }}
          />
        </div>

        {/* ── Error Notification ── */}
        {errorMsg && (
          <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-lg text-xs font-medium text-red-500 flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* ── Google reCAPTCHA v2 Widget ── */}
        <div className="w-full flex justify-start overflow-x-auto my-1">
          <div
            ref={recaptchaRef}
            id="shared-recap-widget"
          />
        </div>

        {/* ── Submit Button ── */}
        <div className="mt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ backgroundColor: buttonColor }}
            className="w-full px-7 py-3.5 text-white font-semibold text-sm rounded-lg hover:opacity-90 active:scale-98 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting to CRM..." : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
