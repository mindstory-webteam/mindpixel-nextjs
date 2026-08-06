import React from 'react';
import { Link } from '@/lib/react-router-dom-compat';
import { img } from '../assets/assest';

const CLIP_ID = 'breadcrumb-shape-clip';

const Breadcrumb = ({
  pageName,
  backgroundImage = `${img.breadcrumimg}`,
}) => {
  return (
    <div
      className="hidden md:block"
      style={{
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingBottom: '16px',
        paddingTop: '80px',
        boxSizing: 'border-box',
        width: '100%',
        fontFamily: "'Syne', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>

      <svg
        viewBox="0 0 1366 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', display: 'block' }}
      >
        <defs>
          <clipPath id={CLIP_ID} clipPathUnits="userSpaceOnUse">
            <path d="M54.08,18c-16.51,3.57-29.36,19.5-31.04,39.35l.04,318.74c3.19,23.17,17.98,36.99,37.53,38.6l953.78-.07c15.67-1.67,29.83-14.49,33.97-32.44,2.27-9.84.83-19,4.13-28.5,4.73-13.62,16.75-24.09,29.24-25.36,20.71-2.1,60.38-2.11,81.1,0,13.75,1.4,26.53,14.58,30.07,30.14,2.1,9.26.88,17.9,3.54,26.88,4.86,16.38,18.45,27.46,32.86,29.15,15.88,1.87,71.38,2.52,85.31-1.58,16.21-4.78,27.79-22.89,28.35-42.52l-.06-310.69c-1.73-22.12-15.3-40.41-34.6-42.05L54.08,18Z" />
          </clipPath>
          <linearGradient id="breadcrumb-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(0,0,0,0.75)" />
            <stop offset="50%"  stopColor="rgba(0,0,0,0.45)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
          </linearGradient>
        </defs>

        <image
          href={backgroundImage}
          x="0" y="0"
          width="1366" height="420"
          clipPath={`url(#${CLIP_ID})`}
          preserveAspectRatio="xMidYMid slice"
        />

        <rect
          x="0" y="0"
          width="1366" height="420"
          fill="rgba(0,0,0,0.35)"
          clipPath={`url(#${CLIP_ID})`}
        />

        {/* <rect
          x="0" y="0"
          width="683" height="420"
          fill="url(#breadcrumb-grad)"
          clipPath={`url(#${CLIP_ID})`}
        /> */}

        <foreignObject x="60" y="40" width="40" height="40">
          <img
            src={img.favicon}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </foreignObject>

        <text
          x="62"
          y="360"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          fontSize="50"
          fontWeight="400"
          fontFamily="'Syne', sans-serif"
        >
          {pageName}
        </text>

        <foreignObject x="1075" y="350" width="240" height="36">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              gap: '5px',
              fontSize: '13px',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 400,
            }}
          >
            <Link to="/" style={{ color: '#000', textDecoration: 'none', fontWeight: 400 }}>
              Home
            </Link>
            <span style={{ color: '#B2BEB5' }}>/</span>
            <span style={{ color: '#e74c3c', fontWeight: 400 }}>{pageName}</span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Breadcrumb;