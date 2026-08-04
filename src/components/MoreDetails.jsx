const services = ["UI/UX Design", "E-commerce", "Mobile App Development", "Cloud Services"];

const specs = [
  { label: "Language", value: "Magento PWA Studio / React / Android / iOS / Laravel / MySQL" },
  { label: "Timescale", value: "12 Weeks" },
  { label: "System", value: "Magento" },
];

export default function MoreDetails() {
  return (
    <section className="bg-white px-16 py-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 items-start max-w-6xl mx-auto">

        {/* Left */}
        <div>
          <p className="text-sm text-gray-500 mb-4">Services Provided</p>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-800"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h1 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-medium leading-snug text-gray-900 mb-5">
            Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch
          </h1>

          <p className="text-sm leading-7 text-gray-500 mb-8">
            IKEA, the multinational conglomerate, collaborated with Webandcrafts to develop a
            high-end webpage for online food essentials. Our team crafted an exquisite landing
            page that is on par with global standards and, at the same time, offers a flawless UI
            and user experience.
          </p>

          <div className="border-t border-gray-200">
            {specs.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center py-3.5 border-b border-gray-200"
              >
                <span className="text-sm text-gray-500">{label}</span>
                <span className="text-sm font-medium text-gray-900 text-right max-w-[65%]">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:opacity-70 transition-opacity"
            >
              View Live Site
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}