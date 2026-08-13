import React, { useRef, useEffect } from 'react'
import { img } from '../assets/assest'
import { IoIosArrowForward } from "react-icons/io"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import AnimatedButton from './AnimatedButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NavLink } from '@/lib/react-router-dom-compat'


const logos = [
  { image: img.IndelMoney_mind, name: 'IndelMoney' },
  { image: img.Viral_cat, name: 'Viral Cat' },
  { image: img.Inspire, name: 'Inspire' },
  { image: img.Indel_Corporation, name: 'Indel Corporation' },
  { image: img.Ayur_street, name: 'Ayur Street' },
  { image: img.Kavalakkat, name: 'Kavalakkat' },
  { image: img.Happynex, name: 'Happynex' },
  { image: img.Koffynex, name: 'Koffynex' },
  { image: img.fuze, name: "fuze" },
  { image: img.chaipeedika, name: "chaipeedika" },
  { image: img.distrikt9, name: "distrikt9" },
]

const WhoWeAre = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const paraRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      gsap.set(
        [headingRef.current, buttonRef.current, paraRef.current,
        card1Ref.current, card2Ref.current, card3Ref.current,
        marqueeRef.current],
        { opacity: 0, y: 48 }
      )

      tl
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.55')
        .to(card1Ref.current, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.4')
        .to(card2Ref.current, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to(card3Ref.current, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to(marqueeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .btn-hover:hover { background: #333 !important; transform: translateY(-1px); }
        .arrow-hover:hover { background: rgba(255,255,255,0.1); }
        .arrow-hover-dark:hover { background: rgba(0,0,0,0.06); }
        .swiper-wrapper { transition-timing-function: linear !important; }
        .marquee-container {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .logo-img {
          height: 70px;
          width: auto;
          max-width: 110px;
          object-fit: contain;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .logo-img:hover {
          opacity: 1;
        }
      `}</style>

      <section ref={sectionRef} className="syne px-5 pt-10 pb-10 lg:px-15 box-border">

        <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:justify-between lg:items-start lg:mb-16">
          <div>
            <h1 ref={headingRef} className="syne text-4xl lg:text-6xl font-normal text-[#1a1a1a] leading-[1.1] max-w-full lg:max-w-85 mb-6 lg:mb-7">
              Who we are
            </h1>
            <div ref={buttonRef}>
              <AnimatedButton
                bgColor="#1a1a1a"
                textColor="#f5f0e8"
                hoverBgColor="#ffb86a"
                hoverTextColor="#1a1a1a"
              >
                Know More
              </AnimatedButton>
            </div>
          </div>
          <p ref={paraRef} className="syne max-w-full lg:max-w-95 text-base leading-[1.7] text-black font-light lg:pt-2">
            MindPixel is the web and design division of MindStory in Thrissur, Kerala. We build websites, software, and digital experiences with clean design, fast performance, and user-friendly features that help businesses grow and succeed online.
          </p>
        </div>

        {/*  Cards  */}
        <div className="grid grid-cols-1 gap-4 lg:grid lg:gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>

          {/* Mobile & Tablet layout (iPad Mini, iPad Air, iPad Pro) */}
          <div className="flex flex-col gap-4 xl:hidden">
            <div ref={card1Ref} className="relative overflow-hidden rounded-[20px] min-h-64 sm:min-h-72 flex flex-col justify-between p-7 md:p-8">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                <source src={img.WhatWeDoVideo} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/40 rounded-[20px] z-1" />
              <div className="relative z-10">
                <span className="syne inline-block text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-5 text-white/70">digital marketing · thrissur</span>
                <h2 className="syne text-[1.4rem] sm:text-[1.7rem] font-normal leading-[1.2] text-white mb-3">Where strategy<br />meets story</h2>
                <p className="syne text-[0.85rem] sm:text-[0.95rem] leading-[1.6] font-light text-white/65 m-0 max-w-xl">From brand identity to performance campaigns we build digital presence that drives real results.</p>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <div className="syne text-[2.2rem] sm:text-[2.6rem] leading-none text-white/90">150+</div>
                  <div className="syne text-[0.72rem] text-white/45 mt-1 font-light">brands elevated</div>
                </div>
                <NavLink to="/contact">
                  <button className="arrow-hover w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center cursor-pointer text-white/70 text-base transition-colors duration-200">
                    <IoIosArrowForward />
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div ref={card2Ref} className="relative overflow-hidden rounded-[20px] bg-black flex flex-col justify-between min-h-56 sm:min-h-64 p-5 md:p-7">
                <div>
                  <span className="syne inline-block text-[0.65rem] sm:text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-4 text-white/70">Web Design & Develop</span>
                  <h2 className="syne text-[1.1rem] sm:text-[1.4rem] font-normal leading-[1.2] text-white mb-2">Sites that sell,<br />not just shine</h2>
                  <p className="syne text-[0.78rem] sm:text-[0.88rem] leading-[1.6] font-light text-white/65 m-0">Conversion-focused UI by MindPixel.</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="syne text-[0.65rem] sm:text-[0.72rem] text-white/40 font-light">SEO · UX</div>
                  <NavLink to="/contact">
                    <button className="arrow-hover w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white/70 transition-colors">
                      <IoIosArrowForward />
                    </button>
                  </NavLink>
                </div>
              </div>

              <div ref={card3Ref} className="relative overflow-hidden rounded-[20px] bg-[#fafafa] border border-[#ddd9ce] flex flex-col justify-between min-h-56 sm:min-h-64 p-5 md:p-7">
                <div>
                  <span className="syne inline-block text-[0.65rem] sm:text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-4 text-black">Growth Marketing</span>
                  <h2 className="syne text-[1.1rem] sm:text-[1.4rem] font-normal leading-[1.2] text-[#1a1a1a] mb-2">Data-driven<br />growth</h2>
                  <p className="syne text-[0.78rem] sm:text-[0.88rem] leading-[1.6] font-light text-[#6a6a6a] m-0">SEO, paid ads & social that convert.</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="syne text-[0.65rem] sm:text-[0.72rem] text-[#999] font-light">ROI-focused</div>
                  <NavLink to="/contact">
                    <button className="arrow-hover-dark w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#1a1a1a] transition-colors">
                      <IoIosArrowForward />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop layout (Large Desktop) */}
          <div className="hidden xl:grid gap-4" style={{ gridTemplateColumns: '1.8fr 1fr 1fr' }}>
            <div ref={card1Ref} className="card-hover relative overflow-hidden rounded-[20px] min-h-65 flex flex-col justify-between p-9">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                <source src={img.WhatWeDoVideo} type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-black/40 rounded-[20px] z-1" />
              <div className="relative z-10">
                <span className="syne inline-block text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-5 text-white/70">digital marketing · thrissur</span>
                <h2 className="syne text-[1.6rem] font-normal leading-[1.2] text-white mb-3">Where strategy<br />meets story</h2>
                <p className="syne text-[1rem] leading-[1.6] font-light text-white/65 m-0">From brand identity to performance campaigns we build digital presence that drives real results.</p>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <div className="syne text-[2.6rem] leading-none text-white/90">150+</div>
                  <div className="syne text-[0.72rem] text-white/45 mt-1 font-light">brands elevated</div>
                </div>
                <NavLink to="/contact">
                  <button className="arrow-hover w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center cursor-pointer text-white/70 text-base transition-colors duration-200">
                    <IoIosArrowForward />
                  </button>
                </NavLink>
              </div>
            </div>

            <div ref={card2Ref} className="card-hover relative overflow-hidden rounded-[20px] bg-black flex flex-col justify-between min-h-65 p-9">
              <div>
                <span className="syne inline-block text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-5 text-white/70">Web Design & Develop</span>
                <h2 className="syne text-[1.6rem] font-normal leading-[1.2] text-white mb-3">Sites that sell,<br />not just shine</h2>
                <p className="syne text-[1rem] leading-[1.6] font-light text-white/65 m-0">MindPixel crafts high-performance websites with obsessive attention to UX, speed, and conversion.</p>
              </div>
              <div className="flex justify-between items-end">
                <div className="syne text-[0.75rem] text-white/40 font-light">SEO<br />UI/UX</div>
                <NavLink to="/contact">
                  <button className="arrow-hover w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white/70 transition-colors">
                    <IoIosArrowForward />
                  </button>
                </NavLink>
              </div>
            </div>

            <div ref={card3Ref} className="card-hover relative overflow-hidden rounded-[20px] bg-[#fafafa] border border-[#ddd9ce] flex flex-col justify-between min-h-65 p-9">
              <div>
                <span className="syne inline-block text-[0.7rem] font-medium tracking-widest uppercase py-1 mb-5 text-[#5a5a5a]">Growth Marketing</span>
                <h2 className="syne text-[1.6rem] font-normal leading-[1.2] text-black mb-3">Data-driven<br />growth</h2>
                <p className="syne text-[1rem] leading-[1.6] font-light text-black m-0">SEO, paid media, and social strategies engineered to grow your audience and revenue not just your follower count.</p>
              </div>
              <div className="flex justify-between items-end">
                <div className="syne text-[0.75rem] text-[#999] font-light">ROI-focused strategy,<br />measurable outcomes</div>
                <NavLink to="/contact">
                  <button className="arrow-hover-dark w-9 h-9 rounded-full border border-black/15 bg-transparent flex items-center justify-center text-[#1a1a1a] transition-colors">
                    <IoIosArrowForward />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/*  Marquee  */}
        <div ref={marqueeRef} className="mt-12 lg:mt-16 flex items-center gap-6 lg:gap-10">
          <span className="syne text-[0.72rem] font-medium tracking-[0.06em] uppercase text-[#999] whitespace-nowrap shrink-0">
            Trusted by
          </span>
          <div className="marquee-container flex-1 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={3000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              slidesPerView="auto"
              spaceBetween={26}
              freeMode={true}
              className="w-full"
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <SwiperSlide key={i} style={{ width: 'auto' }}>
                  <div className="flex items-center h-30 bg-[#f9f9f9] rounded-2xl p-5">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="logo-img"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </section>
    </>
  )
}

export default WhoWeAre