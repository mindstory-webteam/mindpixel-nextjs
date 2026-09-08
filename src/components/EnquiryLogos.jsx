"use client";
import React from 'react';
import { img } from '../assets/assest';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  { image: img.IndelMoney_mind, name: 'IndelMoney' },
  { image: img.Viral_cat, name: 'Viral Cat' },
  { image: img.Inspire, name: 'Inspire' },
  { image: img.Indel_Corporation, name: 'Indel Corporation' },
  { image: img.Ayur_street, name: 'Ayur Street' },
  { image: img.Kavalakkat, name: 'Kavalakkat' },
  { image: img.Happynex, name: 'Happynex' },
  { image: img.Koffynex, name: 'Koffynex' },
  { image: img.fuze, name: 'fuze' },
  { image: img.chaipeedika, name: 'chaipeedika' },
  { image: img.distrikt9, name: 'distrikt9' },
];

export default function EnquiryLogos() {
  return (
    <section className="pt-14 md:pt-20 pb-6 md:pb-8 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');
        .enquiry-marquee-wrapper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .enquiry-marquee-container {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .enquiry-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 104px;
          min-width: 210px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 20px 32px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .enquiry-logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
          border-color: rgba(0, 0, 0, 0.12);
        }
        .enquiry-logo-img {
          height: 60px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          opacity: 0.9;
          filter: grayscale(15%);
          transition: all 0.3s ease;
        }
        .enquiry-logo-card:hover .enquiry-logo-img {
          opacity: 1;
          filter: grayscale(0%);
        }
      `}</style>

      <div className="w-full max-w-[1475px] mx-auto px-4 sm:px-6 md:px-8 mb-12 md:mb-16 text-left">
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.35rem, 2.8vw, 2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111111",
            lineHeight: 1.3,
            margin: 0,
            maxWidth: "600px",
          }}
        >
          Trusted by 150+ Leading Brands
          <br />
          & Growing Businesses
        </h3>
      </div>

      <div className="enquiry-marquee-container overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3500}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={true}
          className="enquiry-marquee-wrapper w-full"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => {
            const imgSrc = logo.image?.src || logo.image;
            return (
              <SwiperSlide key={i} style={{ width: "auto" }}>
                <div className="enquiry-logo-card">
                  <img
                    src={imgSrc}
                    alt={logo.name}
                    className="enquiry-logo-img"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
