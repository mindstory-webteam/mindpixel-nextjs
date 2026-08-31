"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { img } from '../assets/assest'
import { NavLink, useLocation } from '@/lib/react-router-dom-compat'
import { usePageTransition } from './TransitionProvider'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const activeNavLinks = [
  { to: '/enquiry#why-choose-us', label: 'Why Choose Us' },
  { to: '/enquiry#about', label: 'About' },
  { to: '/enquiry#services', label: 'Services' },
  { to: '/enquiry#testimonials', label: 'Testimonials' },
  { to: '/enquiry#faqs', label: 'FAQs' },
  { to: '/enquiry#contact', label: 'Contact' },
]


const ACCENT = '#f97316'
const LAYER_COLORS = ['#f97316', '#95257b']
const syneBase = { fontFamily: "'Syne', sans-serif", fontWeight: 400 }

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
}

const LottieIcon = () => (
  <DotLottieReact
    src="https://lottie.host/07a833a1-1561-4f7d-bc79-f00a20c8d107/pMA6xxWSo5.lottie"
    autoplay loop style={{ width: 22, height: 22 }}
  />
)


const EnquiryNavbar = () => {
  const { navigateTo } = usePageTransition()
  const location = useLocation()
  const isHome = location.pathname === "/"

  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return
      const isScrolled = window.scrollY > 60 || !isHome
      if (isScrolled && !scrolled) {
        setScrolled(true)
        gsap.to(navRef.current, {
          borderRadius: '50px', paddingLeft: '20px', paddingRight: '20px',
          paddingTop: '10px', paddingBottom: '10px', marginTop: '10px',
          backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.08)', duration: 0.5, ease: 'power3.out',
        })
      } else if (!isScrolled && scrolled) {
        setScrolled(false)
        gsap.to(navRef.current, {
          borderRadius: '0px', paddingLeft: '0px', paddingRight: '0px',
          paddingTop: '20px', paddingBottom: '20px', marginTop: '0px',
          backgroundColor: 'rgba(255,255,255,0)', backdropFilter: 'blur(0px)',
          boxShadow: '0 0px 0px rgba(0,0,0,0)', duration: 0.5, ease: 'power3.inOut',
        })
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled, isHome])

  const [menuOpen, setMenuOpen] = useState(false)
  const lenis = useLenis();

  const handleNavClick = useCallback((e, to) => {
    const hash = to.includes('#') ? to.substring(to.indexOf('#') + 1) : null;
    const isEnquiryPage = location.pathname === '/enquiry' || location.pathname === '/enquiry/';
    if (hash && isEnquiryPage) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        if (menuOpen) setMenuOpen(false);
        return;
      }
    }

    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => navigateTo(to), 320);
    } else {
      navigateTo(to);
    }
  }, [location.pathname, menuOpen, navigateTo, lenis]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .navbar-syne, .navbar-syne * {
          font-family: 'Syne', sans-serif !important;
        }
      `}</style>

      {/* ══ DESKTOP (xl+) ══ */}
      <div className="navbar-syne hidden xl:flex fixed top-0 left-0 right-0 z-50 justify-center items-center w-full pointer-events-none px-4 md:px-10 lg:px-15">
        <nav
          ref={navRef}
          className="pointer-events-auto relative flex flex-row items-center justify-between w-full"
          style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'rgba(255,255,255,0)', borderRadius: '0px', willChange: 'padding, background-color, border-radius' }}
        >
          {scrolled ? (
            <>
              <div className="shrink-0">
                <Image src={img.myndpixel} alt="MyndPixel Logo" width={112} height={32} priority className="w-28 h-auto cursor-pointer" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex flex-row gap-6">
                  {activeNavLinks.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to} onClick={(e) => handleNavClick(e, to)}
                        className={({ isActive }) => isActive ? 'text-black text-sm' : 'text-gray-600 hover:text-black transition-colors text-sm'}
                        style={syneBase}>{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-full p-2 cursor-pointer opacity-0 pointer-events-none"
                style={glassStyle}
              >
                <LottieIcon />
              </div>
            </>
          ) : (
            <>
              <div className="shrink-0">
                <Image src={img.myndpixel} alt="MyndPixel Logo" width={140} height={40} priority className="w-35 h-auto cursor-pointer" onClick={() => navigateTo('/')} />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex flex-row gap-8">
                  {activeNavLinks.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to} onClick={(e) => handleNavClick(e, to)}
                        className={`${isHome ? 'text-white' : 'text-black'} transition-colors`} style={syneBase}>{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-full p-2 cursor-pointer opacity-0 pointer-events-none"
                style={glassStyle}
              >
                <LottieIcon />
              </div>
            </>
          )}
        </nav>
      </div>

      {/*  MOBILE & TABLET (below xl)  */}
      <div className="navbar-syne xl:hidden">

        <div
          className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3"
          style={{
            zIndex: 60,
            backgroundColor: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <Image
            src={img.myndpixel}
            alt="MyndPixel Logo"
            width={100}
            height={28}
            priority
            className="h-7 w-auto cursor-pointer relative z-70"
            onClick={() => {
              if (menuOpen) setMenuOpen(false);
              navigateTo('/')
            }}
            draggable={false}
          />

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            type="button"
            aria-label="Open menu"
            className="relative z-60 p-2 text-gray-800 bg-transparent border-none outline-none focus:outline-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sidebar Overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 z-65 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar Drawer (Right-to-Left) */}
        <aside
          className={`fixed top-0 right-0 bottom-0 w-full bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col px-6 pb-6 overflow-y-auto`}
        >
          {/* Close button inside sidebar */}
          <div className="flex justify-end pt-5 pb-4">
            <button
              onClick={() => setMenuOpen(false)}
              type="button"
              aria-label="Close menu"
              className="p-2 -mr-2 text-gray-800 bg-transparent border-none outline-none focus:outline-none cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {activeNavLinks.map((it) => (
              <li key={it.to} className="border-b border-gray-100 pb-2">
                <a
                  href={it.to}
                  onClick={(e) => handleNavClick(e, it.to)}
                  className="block text-2xl font-bold text-gray-900 no-underline transition-colors hover:text-[#f97316] uppercase"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-1px' }}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}

export default EnquiryNavbar