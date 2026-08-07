import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";
import FaviconBlinker from "@/components/FaviconBlinker";

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
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
