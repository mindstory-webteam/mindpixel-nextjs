import React, { useEffect, useRef, useState } from 'react';

const mockReviews = [
  {
    id: 1,
    name: "Rahul, Kochi",
    description: "MindPixel delivered exactly what we needed for our business website. Their team was professional, responsive, and completed the project on time with excellent design quality.",
  },
  {
    id: 2,
    name: "Priya S, Bengaluru",
    description: "We approached MindPixel for web development and branding support. The entire process was smooth, and the final output exceeded our expectations.",
  },
  {
    id: 3,
    name: "Arjun N, Chennai",
    description: "Highly satisfied with the website and support provided by MindPixel. Their attention to detail and technical expertise really helped our business grow online.",
  },
  {
    id: 4,
    name: "Sneha K, Mumbai",
    description: "MindPixel created a modern and user-friendly website for our company. The team understood our requirements clearly and delivered great results.",
  },
  {
    id: 5,
    name: "Vishnu R, Hyderabad",
    description: "Excellent service and timely delivery. MindPixel helped us build a strong online presence with a clean and professional website.",
  },
  {
    id: 6,
    name: "Anjali Krishnan, Kochi",
    description: "Working with MindPixel was a great experience. Their team handled our website project professionally and provided continuous support throughout the process.",
  },
  {
    id: 7,
    name: "Rohit V, Delhi",
    description: "MindPixel delivered a clean, fast, and modern website that perfectly matched our brand vision. Highly recommended for web and software solutions.",
  },
  {
    id: 8,
    name: "Meera I, Chennai",
    description: "The team at MindPixel understood our requirements quickly and transformed our ideas into a professional digital platform. Very happy with the outcome.",
  },
  {
    id: 9,
    name: "Karthik R, Hyderabad",
    description: "From design to development, MindPixel managed everything smoothly. Their communication and commitment to quality were impressive.",
  },
  {
    id: 10,
    name: "Neha J, Pune",
    description: "We partnered with MindPixel for our company website and branding. The final result was professional, responsive, and delivered on schedule.",
  }
];

function ReviewCard({ rev, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const isOverflowing = el.scrollHeight > el.clientHeight;
    setShouldShowReadMore(isOverflowing);
  }, [rev.description]);

  const namePart = rev.name.split(',')[0].trim();
  const initials = namePart.split(' ').slice(0, 2).map(n => n[0]).join('');

  return (
    <div className="rev-card" key={`${rev.id}-${index}`}>
      <div className="rev-quote-icon">“</div>
      
      <div className="rev-bottom">
        <p
          ref={textRef}
          className={`rev-desc ${isExpanded ? 'expanded' : 'collapsed'}`}
        >
          {rev.description}
        </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rev-readmore-btn"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      <div className="rev-top-row">
        <div className="rev-img-wrap">
          <div className="rev-avatar-circle">
            {initials}
          </div>
        </div>
        <span className="rev-name">{rev.name}</span>
      </div>
    </div>
  );
}

export default function EnquiryReview() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }
      track.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (track) {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="rev-section">
      <style>{`
        .rev-section {
          background: #fff;
          padding: 0px 0 20px 0;
          overflow: hidden;
        }
        .rev-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .rev-header {
          margin: 0 0 48px;
        }
        .rev-heading {
          font-family: 'Syne', sans-serif;
          font-size: 60px;
          font-weight: 400;
          color: #1a1a1a;
          margin: 0;
          text-transform: none;
          line-height: 1.1;
        }
        .rev-track-outer {
          overflow: hidden;
          width: 100%;
          cursor: grab;
        }
        .rev-track {
          display: flex;
          gap: 16px;
          align-items: stretch;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          padding: 10px 0;
        }
        .rev-track::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .rev-card {
          flex: 0 0 380px; 
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: #fafafa;
          border-radius: 24px;
          padding: 36px 32px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
      
        .rev-quote-icon {
          font-family: serif;
          font-size: 100px;
          line-height: 1;
          color: #111;
          position: absolute;
          top: -10px;
          right: 20px;
          opacity: 0.04;
          pointer-events: none;
        }
        .rev-top-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 32px;
        }
        .rev-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #111;
          letter-spacing: 0.02em;
        }
        .rev-img-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rev-avatar-circle {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rev-bottom {
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .rev-desc {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }
        .rev-desc.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rev-desc.expanded {
          display: block;
        }
        .rev-readmore-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: #ff0000;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
          padding: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rev-readmore-btn:hover {
          text-decoration: underline;
        }
        @media (max-width: 1200px) {
          .rev-inner {
            padding: 0 40px;
          }
        }
        @media (max-width: 768px) {
          .rev-heading { font-size: 36px; }
        }
        @media (max-width: 600px) {
          .rev-section { padding: 0px 0 20px 0; }
          .rev-inner { padding: 0 16px; }
          .rev-header { margin: 0 0 24px; }
          .rev-card { flex: 0 0 320px; padding: 24px; }
          .rev-top-row { margin-top: 24px; }
          .rev-track { gap: 16px; }
        }
      `}</style>
      <div className="rev-inner">
        <div className="rev-header">
          <h2 className="rev-heading">Customer Reviews</h2>
        </div>
        <div className="rev-track-outer">
          <div className="rev-track" ref={trackRef}>
            {[...mockReviews, ...mockReviews].map((rev, index) => (
              <ReviewCard key={`${rev.id}-${index}`} rev={rev} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
