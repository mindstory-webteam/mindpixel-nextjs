import { img } from '@/assets/assest'
import React, { useRef, useEffect, useState, useSyncExternalStore } from 'react'
import Core from 'smooothy'
import fastdom from 'fastdom'

const slidesData = [
  { id: 1, text: "MindPixel delivered exactly what we needed for our business website. Their team was professional, responsive, and completed the project on time with excellent design quality.", username: "Rahul, Kochi", color: '#fafafa', stars: 4.5 },
  { id: 2, text: "We approached MindPixel for web development and branding support. The entire process was smooth, and the final output exceeded our expectations.", username: "Priya S, Bengaluru", color: '#fafafa', stars: 4 },
  { id: 3, text: "Highly satisfied with the website and support provided by MindPixel. Their attention to detail and technical expertise really helped our business grow online.", username: "Arjun N, Chennai", color: '#fafafa', stars: 5 },
  { id: 4, text: "MindPixel created a modern and user-friendly website for our company. The team understood our requirements clearly and delivered great results.", username: "Sneha K, Mumbai", color: '#fafafa', stars: 4.5 },
  { id: 5, text: "Excellent service and timely delivery. MindPixel helped us build a strong online presence with a clean and professional website.", username: "Vishnu R, Hyderabad", color: '#fafafa', stars: 4 },
  { id: 6, text: "Working with MindPixel was a great experience. Their team handled our website project professionally and provided continuous support throughout the process.", username: "Anjali Krishnan, Kochi", color: '#fafafa', stars: 4.5 },
  { id: 7, text: "MindPixel delivered a clean, fast, and modern website that perfectly matched our brand vision. Highly recommended for web and software solutions.", username: "Rohit V, Delhi", color: '#fafafa', stars: 5 },
  { id: 8, text: "The team at MindPixel understood our requirements quickly and transformed our ideas into a professional digital platform. Very happy with the outcome.", username: "Meera I, Chennai", color: '#fafafa', stars: 5 },
  { id: 9, text: "From design to development, MindPixel managed everything smoothly. Their communication and commitment to quality were impressive.", username: "Karthik R, Hyderabad", color: '#fafafa', stars: 4.5 },
  { id: 10, text: "We partnered with MindPixel for our company website and branding. The final result was professional, responsive, and delivered on schedule.", username: "Neha J, Pune", color: '#fafafa', stars: 4 },
]

const AUTO_SPEED = 0.6
const RESUME_DELAY = 1500

const StarRating = ({ count }) => (
  <div className="flex gap-1 items-center mt-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5"
        fill={star <= count ? '#f5a623' : 'none'}
        stroke={star <= count ? '#f5a623' : 'rgba(0,0,0,0.25)'}
        strokeWidth="2"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
)

/* ReviewCard layout from EnquiryReview.jsx */
function ReviewCardContent({ slide }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    fastdom.measure(() => {
      const isOverflowing = el.scrollHeight > el.clientHeight;
      fastdom.mutate(() => {
        setShouldShowReadMore(isOverflowing);
      });
    });
  }, [slide.text]);

  const namePart = slide.username.split(',')[0].trim();
  const initials = namePart.split(' ').slice(0, 2).map((n) => n[0]).join('');

  return (
    <>
      <div className="tst-quote-icon">“</div>

      <div className="tst-bottom">
        <p ref={textRef} className={`tst-desc ${isExpanded ? 'expanded' : 'collapsed'}`}>
          &ldquo;{slide.text}&rdquo;
        </p>
        {shouldShowReadMore && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="tst-readmore-btn"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="tst-top-row">
        <div className="tst-img-wrap">
          <div className="tst-avatar-circle">{initials}</div>
        </div>
        <div className="flex flex-col">
          <span className="tst-name">{slide.username}</span>
          <StarRating count={slide.stars} />
        </div>
      </div>
    </>
  );
}

/* Mobile/Tablet card */
const SlideCard = ({ slide, index }) => (
  <div
    className="shrink-0 w-[82vw] sm:w-[50vw] md:w-[42vw] lg:w-[32vw] max-w-105 rounded-[24px] flex flex-col justify-between p-6 sm:p-7 snap-center relative overflow-hidden"
    style={{ backgroundColor: slide.color || '#fafafa', border: '1px solid rgba(0,0,0,0.06)' }}
  >
    <ReviewCardContent slide={slide} />
  </div>
)

/* Mobile & Tablet swiper with container-only auto-scroll */
const MobileSwiper = () => {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const touchStart = useRef(null)
  const touchDelta = useRef(0)
  const isInteracting = useRef(false)
  const resumeTimer = useRef(null)

  const scrollToChild = (idx) => {
    const track = trackRef.current
    if (!track) return
    const child = track.children[idx]
    if (!child) return
    const childOffset = child.offsetLeft - (track.offsetWidth - child.offsetWidth) / 2
    track.scrollTo({ left: Math.max(0, childOffset), behavior: 'smooth' })
  }

  const goTo = (idx) => {
    const clamped = (idx + slidesData.length) % slidesData.length
    setCurrent(clamped)
    scrollToChild(clamped)
  }

  useEffect(() => {
    let isVisible = false
    let timer = null

    const startTimer = () => {
      if (timer) clearInterval(timer)
      timer = setInterval(() => {
        if (!isInteracting.current && isVisible) {
          setCurrent((prev) => {
            const next = (prev + 1) % slidesData.length
            scrollToChild(next)
            return next
          })
        }
      }, 3200)
    }

    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible) {
        startTimer()
      } else {
        if (timer) clearInterval(timer)
      }
    }, { threshold: 0.1 })

    observer.observe(track)

    return () => {
      observer.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [])

  const pauseAutoPlay = () => {
    isInteracting.current = true
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      isInteracting.current = false
    }, 3000)
  }

  const onTouchStart = (e) => {
    pauseAutoPlay()
    touchStart.current = e.touches[0].clientX
  }

  const onTouchMove = (e) => {
    touchDelta.current = e.touches[0].clientX - touchStart.current
  }

  const onTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 40) {
      goTo(touchDelta.current < 0 ? current + 1 : current - 1)
    }
    touchDelta.current = 0
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-5 py-6 bg-white overflow-hidden offscreen-section"
      onMouseEnter={pauseAutoPlay}
    >

      <div
        ref={trackRef}
        className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[8vw] sm:px-[6vw] pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slidesData.map((slide, i) => (
          <SlideCard key={i} slide={slide} index={i} />
        ))}
      </div>

      {/* Dots */}
      <div className="hidden sm:flex gap-1 mt-1 items-center">
        {slidesData.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial slide ${i + 1}`}
            onClick={() => {
              pauseAutoPlay()
              goTo(i)
            }}
            className="p-2 border-0 bg-transparent cursor-pointer flex items-center justify-center outline-none"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === current ? 22 : 8,
                height: 8,
                background: i === current ? '#111' : '#d1d1d1',
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

/* GSAP Desktop Slider (Stacked cards with rotation & lerp animation) */
const DesktopSlider = () => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const slides = [...wrapper.children]
    let slideWidth = slides[0]?.offsetWidth || (window.innerWidth * 0.24)
    let slideOffsets = slides.map((s) => s.offsetLeft)
    let wrapperWidth = wrapper.offsetWidth || window.innerWidth

    const measureLayout = () => {
      fastdom.measure(() => {
        if (!wrapperRef.current) return;
        slideWidth = slides[0]?.offsetWidth || (window.innerWidth * 0.24);
        slideOffsets = slides.map((s) => s.offsetLeft);
        wrapperWidth = wrapper.offsetWidth || window.innerWidth;
      });
    };
    window.addEventListener('resize', measureLayout, { passive: true })

    const preventSelect = (e) => e.preventDefault()
    wrapper.addEventListener('selectstart', preventSelect)

    const slider = new Core(wrapper, {
      infinite: false,
      snap: false,
      variableWidth: true,
      lerpFactor: 0.05,
      speedDecay: 0.97,
      bounceLimit: 0,
      setOffset: ({ itemWidth, totalWidth }) => {
        const gap = window.innerWidth * 0.015
        const lastSlideOffset = (slidesData.length - 1) * (itemWidth + gap)
        return totalWidth - lastSlideOffset
      },
      onUpdate: (instance) => {
        const vwOffset = window.innerWidth * 0.08
        for (let i = 0; i < slides.length; i++) {
          const slide = slides[i]
          const slideLeft = (slideOffsets[i] ?? 0) + instance.current
          const isLast = i === slidesData.length - 1

          if (slideLeft < 0 && !isLast) {
            const ratio = Math.min(1, Math.abs(slideLeft) / slideWidth)
            slide.style.transformOrigin = 'left 80%'
            slide.style.transform = `translateX(${instance.current + Math.abs(slideLeft) + ratio * vwOffset}px) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.3})`
            slide.style.zIndex = `${i + 1}`
          } else {
            slide.style.transform = `translateX(${instance.current}px)`
            slide.style.zIndex = `${i + 1}`
          }
        }
      },
    })

    let animId
    let autoDirection = -1
    let isAutoPlaying = true
    let resumeTimer = null
    let wasDragging = false
    let momentum = 0
    let isVisible = false
    const MOMENTUM_MULTIPLIER = 10
    const MOMENTUM_DECAY = 0.96

    function isLastVisible() {
      const lastOffset = slideOffsets[slidesData.length - 1] ?? 0
      return lastOffset + slider.target <= wrapperWidth - 100
    }

    function animate() {
      if (!isVisible) return
      slider.update()

      if (slider.isDragging) {
        isAutoPlaying = false; wasDragging = true; momentum = 0
        if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null }
      } else if (wasDragging) {
        momentum = slider.speed * MOMENTUM_MULTIPLIER
        wasDragging = false
        resumeTimer = setTimeout(() => { isAutoPlaying = true }, RESUME_DELAY)
      }

      if (Math.abs(momentum) > 0.5) {
        slider.target += momentum
        momentum *= MOMENTUM_DECAY
        slider.target = Math.max(slider.maxScroll, Math.min(0, slider.target))
      }

      if (isAutoPlaying) {
        if (autoDirection === -1 && isLastVisible()) autoDirection = 1
        if (autoDirection === 1 && slider.target >= 0) { slider.target = 0; autoDirection = -1 }
        slider.target += autoDirection * AUTO_SPEED
        slider.target = Math.max(slider.maxScroll, Math.min(0, slider.target))
      }

      animId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible) {
        cancelAnimationFrame(animId)
        animId = requestAnimationFrame(animate)
      }
    }, { threshold: 0.05 })

    observer.observe(wrapper)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animId)
      if (resumeTimer) clearTimeout(resumeTimer)
      wrapper.removeEventListener('selectstart', preventSelect)
      window.removeEventListener('resize', measureLayout)
      slider.destroy()
    }
  }, [])

  return (
    <div className="w-full h-[34vw] min-h-100 flex items-center bg-white relative overflow-hidden offscreen-section">

      <div className="absolute left-0 top-0 h-full w-15 bg-white z-20" />

      <div className="w-full h-full relative z-10 pl-20">
        <div ref={wrapperRef} className="flex h-full items-center will-change-transform">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`shrink-0 w-[24vw] h-[28vw] rounded-[24px] flex flex-col justify-between p-[1.8vw] relative overflow-hidden border border-black/5 ${index < slidesData.length - 1 ? 'mr-[1.5vw]' : ''}`}
              style={{ backgroundColor: slide.color || '#fafafa' }}
            >
              <ReviewCardContent slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-15 bg-white z-20" />
    </div>
  )
}

const subscribeDesktopQuery = (callback) => {
  const mq = window.matchMedia('(min-width: 1367px)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

const getDesktopSnapshot = () => window.matchMedia('(min-width: 1367px)').matches
const getServerSnapshot = () => false

const Testimonials = () => {
  const isDesktop = useSyncExternalStore(subscribeDesktopQuery, getDesktopSnapshot, getServerSnapshot)

  return (
    <>
      <style>{`
        .tst-quote-icon {
          font-family: serif;
          font-size: 80px;
          line-height: 1;
          color: #111;
          position: absolute;
          top: -10px;
          right: 18px;
          opacity: 0.05;
          pointer-events: none;
        }
        .tst-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }
        .tst-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #111;
          letter-spacing: 0.01em;
        }
        .tst-img-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #0E100F;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tst-avatar-circle {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .tst-bottom {
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .tst-desc {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          color: #222;
          line-height: 1.65;
          margin: 0;
        }
        @media (min-width: 640px) {
          .tst-desc {
            font-size: 17px;
          }
        }
        .tst-desc.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tst-desc.expanded {
          display: block;
        }
        .tst-readmore-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: #FF8709;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
          padding: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .tst-readmore-btn:hover {
          text-decoration: underline;
        }
      `}</style>
      {isDesktop ? <DesktopSlider /> : <MobileSwiper />}
    </>
  )
}

export default Testimonials