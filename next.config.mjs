/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_CAREER_TEMPLATE_ID: process.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
    VITE_GOOGLE_APPS_SCRIPT_URL: process.env.VITE_GOOGLE_APPS_SCRIPT_URL,
    VITE_SANITY_PROJECT_ID: process.env.VITE_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ridwsomf',
    VITE_SANITY_DATASET: process.env.VITE_SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'ridwsomf',
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
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
