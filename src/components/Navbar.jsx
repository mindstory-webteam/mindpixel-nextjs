"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { img } from '../assets/assest'
import { NavLink, useLocation } from '@/lib/react-router-dom-compat'
import { usePageTransition } from './TransitionProvider'
import { useLenis } from 'lenis/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const defaultNavLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
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


const Navbar = () => {
  const { navigateTo } = usePageTransition()
  const location = useLocation()
  const isHome = location.pathname === "/"
  const activeNavLinks = defaultNavLinks;

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

      {/* ══ DESKTOP & TABLET (md+) ══ */}
      <div className="navbar-syne hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center items-center w-full pointer-events-none px-3 sm:px-5 md:px-6 lg:px-[68px] xl:px-[72px]">
        <nav
          className="pointer-events-auto relative flex flex-row items-center justify-between w-full max-w-[1340px] lg:max-w-none"
          style={{
            paddingLeft: '22px',
            paddingRight: '22px',
            paddingTop: '10px',
            paddingBottom: '10px',
            marginTop: '10px',
            backgroundColor: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '50px',
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)'
          }}
        >
          <div className="shrink-0 flex items-center">
            <img src={img.myndpixel} alt="Logo" className="w-24 sm:w-26 md:w-28 cursor-pointer" onClick={() => navigateTo('/')} />
          </div>
          <div className="flex-1 flex justify-center px-2 sm:px-4">
            <ul className="flex flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-7 items-center m-0 p-0">
              {activeNavLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} onClick={(e) => handleNavClick(e, to)}
                    className={({ isActive }) => isActive ? 'text-black text-xs sm:text-xs md:text-[13px] lg:text-sm font-semibold' : 'text-gray-600 hover:text-black transition-colors text-xs sm:text-xs md:text-[13px] lg:text-sm'}
                    style={syneBase}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="shrink-0 rounded-full p-2 cursor-pointer transition-transform hover:scale-105"
            style={glassStyle}
            onClick={() => navigateTo('/contact')}
          >
            <LottieIcon />
          </div>
        </nav>
      </div>

      {/*  MOBILE (below md)  */}
      <div className="navbar-syne md:hidden">

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
          <img
            src={img.myndpixel} alt="Logo"
            className="h-7 w-auto cursor-pointer relative z-[70]"
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
            className="relative z-[60] p-2 text-gray-800 bg-transparent border-none outline-none focus:outline-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sidebar Overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 z-[65] transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar Drawer (Right-to-Left) */}
        <aside
          className={`fixed top-0 right-0 bottom-0 w-full bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
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

export default Navbar