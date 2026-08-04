"use client";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { img } from '../assets/assest'
import { NavLink, useLocation } from '@/lib/react-router-dom-compat'
import { usePageTransition } from './TransitionProvider'
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


const ACCENT       = '#f97316'
const LAYER_COLORS = ['#f97316', '#95257b']
const syneBase     = { fontFamily: "'Syne', sans-serif", fontWeight: 400 }

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

  const [menuOpen, setMenuOpen]   = useState(false)
  const [textLines, setTextLines] = useState(['Menu', 'Close'])

  const menuOpenRef    = useRef(false)
  const busyRef        = useRef(false)
  const panelRef       = useRef(null)
  const preLayersRef   = useRef(null)
  const preLayerElsRef = useRef([])

  const toggleBtnRef  = useRef(null)
  const iconRef       = useRef(null)
  const plusHRef      = useRef(null)
  const plusVRef      = useRef(null)
  const textInnerRef  = useRef(null)

  const openTlRef     = useRef(null)
  const closeTweenRef = useRef(null)
  const spinTweenRef  = useRef(null)
  const textCycleRef  = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel        = panelRef.current
      const preContainer = preLayersRef.current
      if (!panel) return

      const preLayers = preContainer
        ? Array.from(preContainer.querySelectorAll('.sm-prelayer'))
        : []
      preLayerElsRef.current = preLayers

      gsap.set([panel, ...preLayers], { xPercent: 100, opacity: 1 })
      gsap.set(preContainer,          { xPercent: 0,   opacity: 1 })
      gsap.set(plusHRef.current,      { transformOrigin: '50% 50%', rotate: 0 })
      gsap.set(plusVRef.current,      { transformOrigin: '50% 50%', rotate: 90 })
      gsap.set(iconRef.current,       { rotate: 0, transformOrigin: '50% 50%' })
      gsap.set(textInnerRef.current,  { yPercent: 0 })
      gsap.set(toggleBtnRef.current,  { color: '#111111' })
    })
    return () => ctx.revert()
  }, [])

  const buildOpenTimeline = useCallback(() => {
    const panel  = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    closeTweenRef.current?.kill()
    closeTweenRef.current = null

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })

    const tl = gsap.timeline({ paused: true })

    layers.forEach((el, i) => {
      tl.fromTo(el,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.5, ease: 'power4.out' },
        i * 0.07
      )
    })

    const lastTime      = layers.length ? (layers.length - 1) * 0.07 : 0
    const panelStart    = lastTime + (layers.length ? 0.08 : 0)
    const panelDuration = 0.65

    tl.fromTo(panel,
      { xPercent: 100 },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelStart
    )

    if (itemEls.length) {
      tl.to(itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: 0.08 },
        panelStart + panelDuration * 0.15
      )
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null
    const panel  = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return

    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: 100, duration: 0.32, ease: 'power3.in', overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'))
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        busyRef.current = false
      },
    })
  }, [])

  const animateIcon = useCallback((opening) => {
    spinTweenRef.current?.kill()
    spinTweenRef.current = opening
      ? gsap.to(iconRef.current, { rotate: 225, duration: 0.8, ease: 'power4.out',    overwrite: 'auto' })
      : gsap.to(iconRef.current, { rotate: 0,   duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' })
  }, [])

  const animateText = useCallback((opening) => {
    textCycleRef.current?.kill()
    const current = opening ? 'Menu' : 'Close'
    const target  = opening ? 'Close' : 'Menu'
    const seq     = [current]
    let last      = current
    for (let i = 0; i < 3; i++) { last = last === 'Menu' ? 'Close' : 'Menu'; seq.push(last) }
    if (last !== target) seq.push(target)
    seq.push(target)

    setTextLines(seq)

    requestAnimationFrame(() => {
      const inner = textInnerRef.current
      if (!inner) return
      gsap.set(inner, { yPercent: 0 })
      textCycleRef.current = gsap.to(inner, {
        yPercent: -((seq.length - 1) / seq.length) * 100,
        duration: 0.5 + seq.length * 0.07,
        ease: 'power4.out',
      })
    })
  }, [])

  const openMenu = useCallback(() => {
    if (menuOpenRef.current) return
    menuOpenRef.current = true
    setMenuOpen(true)
    playOpen()
    animateIcon(true)
    animateText(true)
  }, [playOpen, animateIcon, animateText])

  const closeMenu = useCallback(() => {
    if (!menuOpenRef.current) return
    menuOpenRef.current = false
    setMenuOpen(false)
    playClose()
    animateIcon(false)
    animateText(false)
  }, [playClose, animateIcon, animateText])

  const toggleMenu = useCallback(() => {
    menuOpenRef.current ? closeMenu() : openMenu()
  }, [openMenu, closeMenu])

  const handleNavClick = useCallback((e, to) => {
    e.preventDefault();
    if (location.pathname === '/enquiry') {
      const routeToId = {
        '/enquiry#services': 'services',
        '/enquiry#why-choose-us': 'why-choose-us',
        '/enquiry#about': 'about',
        '/enquiry#testimonials': 'testimonials',
        '/enquiry#faqs': 'faqs',
        '/enquiry#contact': 'contact'
      };
      const sectionId = routeToId[to];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          if (menuOpenRef.current) closeMenu();
          return;
        }
      }
    }

    if (menuOpenRef.current) {
      closeMenu();
      setTimeout(() => navigateTo(to), 320);
    } else {
      navigateTo(to);
    }
  }, [location.pathname, closeMenu, navigateTo]);

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (
        panelRef.current     && !panelRef.current.contains(e.target) &&
        toggleBtnRef.current && !toggleBtnRef.current.contains(e.target)
      ) closeMenu()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen, closeMenu])

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
                <img src={img.myndpixel} alt="Logo" className="w-28 cursor-pointer" />
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
                <img src={img.myndpixel} alt="Logo" className="w-35 cursor-pointer" onClick={() => navigateTo('/')} />
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
            zIndex: menuOpen ? 70 : 60,
            backgroundColor: 'rgba(255,255,255,0.97)',
            backdropFilter: menuOpen ? 'none' : 'blur(12px)',
            WebkitBackdropFilter: menuOpen ? 'none' : 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            transition: 'background-color 0.3s',
          }}
        >
          <img
            src={img.myndpixel} alt="Logo"
            className="h-7 w-auto cursor-pointer"
            onClick={() => navigateTo('/')}
            draggable={false}
          />

          {/* Toggle button  */}
          <button
            ref={toggleBtnRef}
            onClick={toggleMenu}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative inline-flex items-center bg-transparent border-none cursor-pointer font-medium text-sm leading-none select-none"
            style={{ color: '#111111', fontFamily: "'Syne', sans-serif", fontWeight: 500 }}
          >
            {/* Cycling text */}
            <span
              className="relative inline-block overflow-hidden"
              style={{ height: '1em' }}
              aria-hidden="true"
            >
              <span
                ref={textInnerRef}
                className="flex flex-col"
                style={{ lineHeight: 1, fontFamily: "'Syne', sans-serif" }}
              >
                {textLines.map((l, i) => (
                  <span key={i} className="block" style={{ height: '1em', lineHeight: 1, fontFamily: "'Syne', sans-serif" }}>{l}</span>
                ))}
              </span>
            </span>

            <span ref={iconRef} style={{ display: 'none' }} aria-hidden="true">
              <span ref={plusHRef} />
              <span ref={plusVRef} />
            </span>
          </button>
        </div>

        <div className="fixed inset-0 z-65 overflow-hidden pointer-events-none">

          <div ref={preLayersRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {LAYER_COLORS.map((c, i) => (
              <div key={i} className="sm-prelayer absolute inset-0" style={{ background: c, opacity: 0 }} />
            ))}
          </div>

          <aside
            ref={panelRef}
            className="absolute inset-0 flex flex-col overflow-y-auto pointer-events-auto bg-white"
            style={{ paddingTop: '5rem', paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingBottom: '2rem' }}
          >
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {activeNavLinks.map((it) => (
                <li key={it.to} className="relative overflow-hidden" style={{ lineHeight: 1 }}>
                  <a
                    href={it.to}
                    onClick={(e) => handleNavClick(e, it.to)}
                    className="relative inline-block font-bold uppercase no-underline"
                    style={{
                      fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                      letterSpacing: '-2px',
                      lineHeight: 1.05,
                      color: '#000',
                      transition: 'color 0.2s',
                      fontFamily: "'Syne', sans-serif",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#000')}
                  >
                    <span className="sm-panel-itemLabel inline-block" style={{ transformOrigin: '50% 100%' }}>
                      {it.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}

export default EnquiryNavbar