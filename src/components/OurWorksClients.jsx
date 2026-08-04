import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { img } from "../assets/assest";

const galleryImages = [
  { src: `${img.Kavalakkat}`, alt: "Kavalakkat" },
  { src: `${img.IndelMoney_mind}`, alt: "IndelMoney_mind" },
  { src: `${img.Viral_cat}`, alt: "Viral_cat" },
  { src: `${img.Indel_Corporation}`, alt: "Indel_Corporation" },
  { src: `${img.Koffynex}`, alt: "Koffynex" },
  { src: `${img.Ayur_street}`, alt: "Ayur_street" },
  { src: `${img.Happynex}`, alt: "Happynex" },
  { src: `${img.Inspire}`, alt: "Inspire" },
  { src: `${img.fuze}`, alt: "fuze" },
  { src: `${img.chaipeedika}`, alt: "chaipeedika" },
  { src: `${img.distrikt9}`, alt: "distrikt9" },
];

export default function OurWorkClients() {
  return (
    <section
      className="px-6 md:px-12 py-16 md:py-20 bg-white overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
        
        .gallery-swiper {
          overflow: visible !important;
          cursor: grab;
        }
        
        .gallery-swiper .swiper-wrapper {
          align-items: center;
          transition-timing-function: linear !important;
        }
        
        .gallery-slide {
          /* Force exact dimensions */
          height: 120px !important;
          width: 200px !important;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background: #f9f9f9; 
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px; 
          border: 1px solid #f0f0f0;
        }

        @media (min-width: 768px) {
          .gallery-slide {
            height: 100px !important;
            width: 200px !important;
            border-radius: 16px;
          }
        }

        .gallery-slide img {
          width: 80%;
          height: 80%;
          object-fit: contain; 
          transition: transform 0.5s ease;
          display: block;
        }

      `}</style>

      <p
        className="font-normal leading-snug pt-10 md:pt-0 mb-10"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
          letterSpacing: "-0.025em",
          maxWidth: "820px",
        }}
      >
        We partner with brands that are shaping the future through design and innovation.
      </p>

      <div className="relative -mx-6 md:-mx-12">
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}
          className="gallery-swiper"
        >
          {[...galleryImages, ...galleryImages].map((item, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
{/* 
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-8 gap-4">
        <p className="text-sm text-neutral-500 leading-relaxed">
          Ready to build your own success story?           
           <br />
          Let’s collaborate to turn your vision into a measurable digital reality.
        </p>
      </div> */}
    </section>
  );
}