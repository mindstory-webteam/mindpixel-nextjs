"use client";
import { useState } from "react";
import { NavLink, useLocation } from '@/lib/react-router-dom-compat';
import { img } from "../assets/assest";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa6";

const socials = [
  { label: "Twitter", Icon: FaXTwitter, href: "#" },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "#" },
  { label: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/mpxcode/" },
  { label: "Facebook", Icon: FaFacebookF, href: "https://www.facebook.com/myndpixel" },
];



const activeNavColumns = [
  {
    heading: "Main Menu",
    links: [
      { name: "Why Choose Us", path: "/enquiry#why-choose-us" },
      { name: "About", path: "/enquiry#about" },
      { name: "Services", path: "/enquiry#services" },
      { name: "Testimonials", path: "/enquiry#testimonials" },
      { name: "FAQs", path: "/enquiry#faqs" },
      { name: "Contact", path: "/enquiry#contact" }
    ],
  },
  {
    heading: "Reach Us",
    links: [
      { name: "hello@mindstory.in", path: "mailto:web@mindstory.com" },
      { name: "+91-8281001410", path: "tel:+918281001410" },
      { name: "Indel House Building, Opposite MTHS, Near Gossayikunnu, Kuriachira, Thrissur 680006", path: "#" }
    ],
  },
];

export default function EnquiryFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();



  const handleNavClick = (e, path) => {
    if (location.pathname === '/enquiry' && path.includes('#')) {
      e.preventDefault();
      const sectionId = path.split('#')[1];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono-dm { font-family: 'Syne', sans-serif; }
        @media (max-width: 767px) {
          .mobile-footer-scroll { padding-bottom: 24px; }
        }

        .brand-img-wrap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .brand-img-item {
          display: flex;
          align-items: start;
          gap: 10px;
        }

        .brand-img-item img {
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .brand-img-item:hover img {
          filter: grayscale(0%);
        }
      `}</style>

      {/* DESKTOP FOOTER */}
      <div className="hidden xl:block" style={{ padding: "0 50px" }}>
        <footer
          className="relative font-syne"
          style={{
            borderRadius: "44px 44px 0 0",
            background: "#e6e7e8",
          }}
        >
          <div className="relative z-10 max-w-375 mx-auto px-10 pt-16 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-black/[0.07]">

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <img src={img.myndpixel} alt="Mynd Pixel Logo" className="h-8 w-auto object-contain" />
                </div>
                <p className="font-mono-dm text-[0.78rem] leading-relaxed max-w-62.5 mb-7" style={{ fontWeight: 400 }}>
                  We craft digital experiences at the intersection of bold ideas and pixel-perfect execution.
                </p>
                <div className="flex gap-3">
                  {socials.map(({ label, Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? "_blank" : "_self"}
                      rel="noreferrer"
                      aria-label={label}
                      className="w-9 h-9 border border-black/10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-orange-300 hover:border-orange-300 group"
                    >
                      <Icon className="text-sm group-hover:text-[#080b10]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* NAV COLUMNS */}
              {activeNavColumns.map(({ heading, links }) => (
                <div key={heading}>
                  <h4 className="font-mono-dm text-[0.66rem] tracking-[0.16em] uppercase text-orange-400 mb-5" style={{ fontWeight: 400 }}>{heading}</h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <NavLink to={link.path} onClick={(e) => handleNavClick(e, link.path)} className="text-[0.87rem] transition-colors duration-200 hover:text-orange-400" style={{ fontWeight: 400 }}>
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* BRAND IMAGES — DESKTOP */}
              <div>
                <h4 className="font-mono-dm text-[0.66rem] tracking-[0.16em] uppercase text-orange-400 mb-5 pl-10" style={{ fontWeight: 400 }}>Our Brands</h4>
                <div className="brand-img-wrap pl-10 pr-4">

                  <div className="brand-img-item  items-center flex rounded-2xl">
                    <a href="https://mindstory.in/" target="_blank" rel="noreferrer">
                      <img src={img.mindstory} alt="MindStory" style={{ width: "120px", height: "40px" }} />
                    </a>
                  </div>

                  <div className="brand-img-item  items-center flex rounded-2xl">
                    <a href="https://seorankbird.com/" target="_blank" rel="noreferrer">
                      <img src={img.rankbird} alt="Rankbird" style={{ width: "85px", height: "30px" }} />
                    </a>
                  </div>

                  <div className="brand-img-item  items-center flex rounded-2xl">
                    <a href="https://viralcatmeow.com/" target="_blank" rel="noreferrer">
                      <img src={img.vc} alt="VC" style={{ width: "75px", height: "35px" , paddingRight:"10px"}} />
                    </a>
                  </div>

                  <div className="brand-img-item items-center flex rounded-2xl">
                    <a href="https://21fiftyone.com/" target="_blank" rel="noreferrer">
                      <img src={img.twentyonefiftyone} alt="twentyonefiftyone" style={{ width: "60px", height: "35px", paddingLeft:"4px" }} />
                    </a>
                  </div>

                </div>
              </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-7 flex-wrap">
              <p className="font-mono-dm text-[0.74rem]" style={{ fontWeight: 400 }}>© 2026 <span className="text-orange-400" style={{ fontWeight: 400 }}>MindPixel</span>. All rights reserved.</p>
              {location.pathname !== '/enquiry' && (
                <div className="flex gap-6">
                  <NavLink to="/privacy-policy" className="font-mono-dm text-[0.74rem] transition-colors duration-200 hover:text-orange-400" style={{ fontWeight: 400 }}>Privacy Policy</NavLink>
                  <NavLink to="/terms" className="font-mono-dm text-[0.74rem] transition-colors duration-200 hover:text-orange-400" style={{ fontWeight: 400 }}>Terms & Condition</NavLink>
                </div>
              )}
            </div>
          </div>
        </footer>
      </div>

      {/* MOBILE FOOTER */}
      <div className="xl:hidden">
        <div className="mobile-footer-scroll font-syne" style={{ background: "#e6e7e8", borderRadius: "0", padding: "32px 20px 20px" }}>
          <div className="flex items-center gap-3 mb-4">
            <img src={img.myndpixel} alt="Mynd Pixel Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="font-mono-dm text-[0.75rem] leading-relaxed text-black/60 mb-5" style={{ fontWeight: 400 }}>
            We craft digital experiences at the intersection of bold ideas and pixel-perfect execution.
          </p>
          <div className="flex gap-2 mb-8">
            {socials.map(({ label, Icon, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" aria-label={label} className="w-8 h-8 border border-black/10 rounded-lg flex items-center justify-center">
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 pb-8 border-b border-black/[0.07] mb-8">
            {activeNavColumns.slice(0, 1).map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="font-mono-dm text-[0.6rem] tracking-[0.16em] uppercase text-orange-400 mb-3" style={{ fontWeight: 400 }}>{heading}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.name}><NavLink to={link.path} onClick={(e) => handleNavClick(e, link.path)} className="text-[0.8rem]" style={{ fontWeight: 400 }}>{link.name}</NavLink></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pb-8 border-b border-black/[0.07] mb-8">
            <h4 className="font-mono-dm text-[0.6rem] tracking-[0.16em] uppercase text-orange-400 mb-3" style={{ fontWeight: 400 }}>Reach Us</h4>
            <ul className="flex flex-col gap-2">
              {activeNavColumns[1].links.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('http') || link.path.startsWith('mailto') ? (
                    <a href={link.path} className="text-[0.8rem]" style={{ fontWeight: 400 }}>{link.name}</a>
                  ) : (
                    <span className="text-[0.8rem]" style={{ fontWeight: 400 }}>{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* BRAND IMAGES — MOBILE */}
          <div className="pb-8 border-b border-black/[0.07] mb-8">
            <h4 className="font-mono-dm text-[0.6rem] tracking-[0.16em] uppercase text-orange-400 mb-3" style={{ fontWeight: 400 }}>Our Brands</h4>
            <div className="grid grid-cols-2 gap-3">

              <div className="brand-img-item">
                <a href="https://mindstory.in/" target="_blank" rel="noreferrer">
                  <img src={img.mindstory} alt="MindStory" style={{ width: "100px", height: "30px" }} />
                </a>
              </div>

              <div className="brand-img-item">
                <a href="https://seorankbird.com/" target="_blank" rel="noreferrer">
                  <img src={img.rankbird} alt="Rankbird" style={{ width: "85px", height: "28px" }} />
                </a>
              </div>

              <div className="brand-img-item">
                <a href="https://viralcatmeow.com/" target="_blank" rel="noreferrer">
                  <img src={img.vc} alt="VC" style={{ width: "60px", height: "40px" }} />
                </a>
              </div>

              <div className="brand-img-item">
                <a href="https://21fiftyone.com/" target="_blank" rel="noreferrer">
                  <img src={img.twentyonefiftyone} alt="twentyonefiftyone" style={{ paddingRight:"40px", width: "110px", height: "25px" }} />
                </a>
              </div>

            </div>
          </div>

          <div className="flex flex-col items-center gap-2 pt-2 pb-4">
            <p className="font-mono-dm text-[0.7rem] text-black/50 text-center" style={{ fontWeight: 400 }}>
              © 2026 <span className="text-orange-400" style={{ fontWeight: 400 }}>MindPixel</span>. All rights reserved.
            </p>
            {location.pathname !== '/enquiry' && (
              <div className="flex gap-5">
                <NavLink to="/privacy-policy" className="font-mono-dm text-[0.7rem] text-black/40" style={{ fontWeight: 400 }}>Privacy Policy</NavLink>
                <NavLink to="/terms" className="font-mono-dm text-[0.7rem] text-black/40" style={{ fontWeight: 400 }}>Terms & Condition</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
