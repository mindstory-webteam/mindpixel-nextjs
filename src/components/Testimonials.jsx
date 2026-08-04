import { img } from '@/assets/assest'
import React, { useRef, useEffect, useState } from 'react'
import Core from 'smooothy'

const slidesData = [
  { text: "MindPixel delivered exactly what we needed for our business website. Their team was professional, responsive, and completed the project on time with excellent design quality.", username: "Rahul, Kochi", color: '#e6e7e8', stars: 4.5},
  { text: "We approached MindPixel for web development and branding support. The entire process was smooth, and the final output exceeded our expectations.", username: "Priya S, Bengaluru", color: '#e6e7e8', stars: 3.5 },
  { text: "Highly satisfied with the website and support provided by MindPixel. Their attention to detail and technical expertise really helped our business grow online.", username: "Arjun N, Chennai", color: '#e6e7e8', stars: 3 },
  { text: "MindPixel created a modern and user-friendly website for our company. The team understood our requirements clearly and delivered great results.", username: "Sneha K, Mumbai", color: '#e6e7e8', stars: 4.5 },
  { text: "Excellent service and timely delivery. MindPixel helped us build a strong online presence with a clean and professional website.", username: "Vishnu R, Hyderabad", color: '#e6e7e8', stars: 4 },
  { text: "Working with MindPixel was a great experience. Their team handled our website project professionally and provided continuous support throughout the process.", username: "Anjali Krishnan, Kochi", color: '#e6e7e8', stars: 3.5 },
  { text: "MindPixel delivered a clean, fast, and modern website that perfectly matched our brand vision. Highly recommended for web and software solutions.", username: "Rohit V, Delhi", color: '#e6e7e8', stars: 4.5 },
  { text: "The team at MindPixel understood our requirements quickly and transformed our ideas into a professional digital platform. Very happy with the outcome.", username: "Meera I, Chennai", color: '#e6e7e8', stars: 5 },
  { text: "From design to development, MindPixel managed everything smoothly. Their communication and commitment to quality were impressive.", username: "Karthik R, Hyderabad", color: '#e6e7e8', stars: 4.5 },
  { text: "We partnered with MindPixel for our company website and branding. The final result was professional, responsive, and delivered on schedule.", username: "Neha J, Pune", color: '#e6e7e8', stars: 3.5 },
]

const AUTO_SPEED = 0.6
const RESUME_DELAY = 1500

const StarRating = ({ count }) => (
  <div className="flex gap-1 mt-2 ml-11">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill={star <= count ? '#f5a623' : 'none'}
        stroke={star <= count ? '#f5a623' : 'rgba(0,0,0,0.25)'}
        strokeWidth="2"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
)

/* Mobile/Tablet card */
const SlideCard = ({ slide, index }) => (
  <div
    className="shrink-0 w-[78vw] md:w-[44vw] rounded-3xl flex flex-col justify-between p-7 snap-center"
    style={{ backgroundColor: slide.color, boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}
  >
    <p className="text-[4.2vw] md:text-[2.4vw] font-medium leading-snug text-black" style={{ fontFamily: "'Syne', sans-serif" }}>
      "{slide.text}"
    </p>
    <div>
      <div className="flex items-center gap-3">
        <img
          src={`${img.userimg}`}
          alt={slide.username}
          className="w-9 h-9 rounded-full object-cover shrink-0"
        />
        <p className="text-[3.2vw] md:text-[1.8vw] font-bold tracking-tight text-black/50" style={{ fontFamily: "'Syne', sans-serif" }}>
          {slide.username}
        </p>
      </div>
      <StarRating count={slide.stars} />
    </div>
  </div>
)

/* Mobile swiper */
const MobileSwiper = () => {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const touchStart = useRef(null)
  const touchDelta = useRef(0)

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(slidesData.length - 1, idx))
    setCurrent(clamped)
    trackRef.current?.children[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchMove  = (e) => { touchDelta.current = e.touches[0].clientX - touchStart.current }
  const onTouchEnd   = () => {
    if (Math.abs(touchDelta.current) > 40) {
      goTo(touchDelta.current < 0 ? current + 1 : current - 1)
    }
    touchDelta.current = 0
  }

  return (
    <div className="w-full flex flex-col items-center gap-5 py-10 bg-white overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <div
        ref={trackRef}
        className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[11vw] md:px-[6vw] pb-2"
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
      <div className="flex gap-2 mt-1">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width:  i === current ? 20 : 8,
              height: 8,
              background: i === current ? '#111' : '#d1d1d1',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const DesktopSlider = () => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const slides = [...wrapper.children]

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
        slides.forEach((slide, i) => {
          const slideWidth = slide.offsetWidth
          const slideLeft  = slide.offsetLeft + instance.current
          const bgColor    = slidesData[i].color
          const isLast     = i === slidesData.length - 1

          if (slideLeft < 0 && !isLast) {
            const ratio = Math.min(1, Math.abs(slideLeft) / slideWidth)
            slide.style.cssText = `
              background-color: ${bgColor};
              transform-origin: left 80%;
              transform: translateX(${instance.current + Math.abs(slideLeft) + ratio * vwOffset}px) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.3});
              position: relative;
              z-index: ${i + 1};
            `
          } else {
            slide.style.cssText = `
              background-color: ${bgColor};
              box-shadow: 0 4px 20px rgba(0,0,0,0.10);
              transform: translateX(${instance.current}px);
              z-index: ${i + 1};
            `
          }
        })
      },
    })

    let animId
    let autoDirection = -1
    let isAutoPlaying = true
    let resumeTimer   = null
    let wasDragging   = false
    let momentum      = 0
    const MOMENTUM_MULTIPLIER = 10
    const MOMENTUM_DECAY      = 0.96

    function isLastVisible() {
      const triggerSlide = slides[slidesData.length - 1]
      if (!triggerSlide) return false
      return triggerSlide.offsetLeft + slider.target <= wrapper.offsetWidth - 100
    }

    function animate() {
      slider.update()

      if (slider.isDragging) {
        isAutoPlaying = false; wasDragging = true; momentum = 0
        if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null }
      } else if (wasDragging) {
        momentum     = slider.speed * MOMENTUM_MULTIPLIER
        wasDragging  = false
        resumeTimer  = setTimeout(() => { isAutoPlaying = true }, RESUME_DELAY)
      }

      if (Math.abs(momentum) > 0.5) {
        slider.target += momentum
        momentum       *= MOMENTUM_DECAY
        slider.target   = Math.max(slider.maxScroll, Math.min(0, slider.target))
      }

      if (isAutoPlaying) {
        if (autoDirection === -1 && isLastVisible()) autoDirection = 1
        if (autoDirection === 1  && slider.target >= 0) { slider.target = 0; autoDirection = -1 }
        slider.target += autoDirection * AUTO_SPEED
        slider.target   = Math.max(slider.maxScroll, Math.min(0, slider.target))
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      if (resumeTimer) clearTimeout(resumeTimer)
      wrapper.removeEventListener('selectstart', preventSelect)
      slider.destroy()
    }
  }, [])

  return (
    <div className="w-full h-[40vw] min-h-130 flex items-center bg-white relative overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="absolute left-0 top-0 h-full w-15 bg-white z-20" />

      <div className="w-full h-full relative z-10 pl-20">
        <div ref={wrapperRef} className="flex h-full items-center will-change-transform">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`shrink-0 pointer-events-none w-[22vw] h-[28vw] rounded-[1.5vw] flex flex-col justify-between p-[1.8vw] ${index < slidesData.length - 1 ? 'mr-[1.5vw]' : ''}`}
              style={{ backgroundColor: slide.color, boxShadow: '0 4px 20px rgba(0,0,0,0.30)' }}
            >
              <p className="text-[1.4vw] font-medium leading-tight text-black" style={{ fontFamily: "'Syne', sans-serif" }}>
                "{slide.text}"
              </p>
              <div>
                <div className="flex items-center gap-[0.6vw]">
                  <img
                    src={`${img.userimg}`}
                    alt={slide.username}
                    className="w-[2.2vw] h-[2.2vw] rounded-full object-cover shrink-0"
                  />
                  <p className="text-[1.1vw] font-bold tracking-tight text-black/50" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {slide.username}
                  </p>
                </div>
                <div className="flex gap-[0.2vw] mt-[0.4vw] ml-11">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 24 24" className="w-[1.1vw] h-[1.1vw]"
                      fill={star <= slide.stars ? '#f5a623' : 'none'}
                      stroke={star <= slide.stars ? '#f5a623' : 'rgba(0,0,0,0.25)'}
                      strokeWidth="2">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-15 bg-white z-20" />
    </div>
  )
}

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isDesktop ? <DesktopSlider /> : <MobileSwiper />
}

export default Testimonials