import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";
import FaviconBlinker from "@/components/FaviconBlinker";

export const metadata = {
  metadataBase: new URL("https://mpxcode.com"),
  alternates: {
    canonical: "https://mpxcode.com",
  },
  title: "Mind Pixel | Best Web Development Company in Thrissur",
  description: "Mind Pixel is a leading web development company in Thrissur, delivering custom websites, eCommerce solutions, and responsive web applications for businesses.",
  verification: {
    google: "-8PcddQJ4_laeS7eWcqi__mSLlTuAtv4yw-rgajKLaA",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "https://mpxcode.com/",
  "image": "https://mpxcode.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmyndpixel.843680e1.png&w=256&q=75",
  "@id": "",
  "url": "https://mpxcode.com/",
  "telephone": "8281610051",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HiLITE Business Park",
    "addressLocality": "Kozhikode",
    "postalCode": "673014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2477892,
    "longitude": 75.8340558
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/mpxcode/",
    "https://www.facebook.com/myndpixel"
  ]
};

const corporationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Mind pixel",
  "alternateName": "Mind pixel",
  "url": "https://mpxcode.com/",
  "logo": "https://mpxcode.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmyndpixel.843680e1.png&w=256&q=75",
  "sameAs": [
    "https://www.instagram.com/mpxcode/",
    "https://www.facebook.com/myndpixel"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does MindPixel offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MindPixel offers web design and development, custom software, mobile app development, SaaS applications, enterprise software, UI/UX design, SEO, paid media, and growth marketing under one roof as the creative and web arm of MindStory."
      }
    },
    {
      "@type": "Question",
      "name": "Where are you based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are based in Thrissur, Kerala, and work with businesses that need professional websites, software solutions, digital design, and online growth support."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on the project size, features, design requirements, and approval process. A simple website may take less time, while custom software, SaaS platforms, or mobile apps need detailed planning, development, testing, and launch support."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with startups, small businesses, growing brands, and established companies. Whether you need a basic website, an MVP, a custom platform, or digital growth support, we plan the work based on your current stage and goals."
      }
    },
    {
      "@type": "Question",
      "name": "What is your design philosophy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our design approach is simple to make it clear, useful, and memorable. We focus on clean visuals, easy navigation, fast-loading pages, and digital experiences that support both the user and the business goal."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign our existing website or application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We conduct a thorough audit of your existing platform to modernize the UI/UX, improve loading speed, and optimize for conversions while preserving your valuable data."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://mpxcode.com/service"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://mpxcode.com/contact"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* JSON-LD Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Global ChunkLoadError Auto-Recovery Script */}
        <Script
          id="chunk-error-handler"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                var message = e.message || '';
                var isChunkError = /Loading chunk/i.test(message) || /ChunkLoadError/i.test(e.name || '') || /CSS_CHUNK_LOAD_FAILED/i.test(message);
                if (isChunkError) {
                  console.warn('Chunk load failed. Force reloading page...');
                  window.location.reload(true);
                }
              }, true);
            `,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NCJP8LHF');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCJP8LHF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <FaviconBlinker />
        {children}
      </body>
    </html>
  );
}
