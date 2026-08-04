import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from '@/lib/react-router-dom-compat';
import "swiper/css";
import { img } from "../assets/assest";

const tours = [
  { id: 1, title: "shreebhojan", img: `${img.shreebhojanmockup}` },
  { id: 2, title: "dfhdfhfsdh", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" },
  { id: 3, title: "fdsgkkm gdfkgkdf", img: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=600&q=80" },
  { id: 4, title: "fdsgfm  sgkfkdgfd", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80" },
  { id: 5, title: "sfsdfs  dsfsdfd ", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80" },
  { id: 6, title: "sdfd fsfdfs", img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80" },
];

function Card({ id, title, img }) {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/ourwork/${id}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden h-80 cursor-pointer group" onClick={handleClick}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/99 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <p className="font-normal text-base mb-1">{title}</p>
        {/* <p className="text-xs opacity-80 font-normal uppercase tracking-wider">Explore Project</p> */}
      </div>
    </div>
  );
}

const btnStyle = (disabled) => ({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "none",
  background: disabled ? "#C8C8C8" : "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: disabled ? "not-allowed" : "pointer",
  transition: "background 0.3s ease",
  pointerEvents: disabled ? "none" : "auto",
});

export default function OurWorksSwiper() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateBoundaries = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="px-6 sm:px-12 pt-20" style={{ fontFamily: "'Syne', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
        <h1 className="font-normal tracking-tight text-3xl sm:text-5xl leading-[1.1]">
          Find your perfect
          <br />
          Website experience
        </h1>

        <div className="hidden sm:flex items-center gap-2">
          <button onClick={() => swiperRef.current?.slidePrev()} style={btnStyle(isBeginning)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} style={btnStyle(isEnd)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {tours.map((t) => (
          <Card key={t.id} {...t} />
        ))}
      </div>

      <div className="hidden sm:block">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateBoundaries(swiper);
          }}
          onSlideChange={updateBoundaries}
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {tours.map((t) => (
            <SwiperSlide key={t.id}>
              <Card {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}