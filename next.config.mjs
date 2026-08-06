/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_CAREER_TEMPLATE_ID: process.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
    VITE_GOOGLE_APPS_SCRIPT_URL: process.env.VITE_GOOGLE_APPS_SCRIPT_URL,
    VITE_SANITY_PROJECT_ID: process.env.VITE_SANITY_PROJECT_ID,
    VITE_SANITY_DATASET: process.env.VITE_SANITY_DATASET,
  },
};

// Suppress native SWC binary warnings on old GLIBC environments (e.g. Hostinger shared hosting)
// in production (where we build using webpack), while avoiding Turbopack warnings in local development.
if (process.env.NODE_ENV === 'production') {
  nextConfig.experimental = {
    forceSwcTransforms: true,
  };
}

export default nextConfig;
