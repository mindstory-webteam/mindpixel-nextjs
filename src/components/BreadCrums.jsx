import React, { useId } from 'react';
import Image from 'next/image';
import { Link } from '@/lib/react-router-dom-compat';
import { img } from '../assets/assest';

const Breadcrumb = ({
  pageName = 'Page',
  title,
  backgroundImage = `${img.breadcrumimg}`,
  breadcrumbs,
}) => {
  const reactId = useId().replace(/:/g, '');
  const clipId = `breadcrumb-clip-${reactId}`;

  const resolvedImage = backgroundImage || `${img.breadcrumimg}`;
  const displayName = title || pageName;

  const trail =
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { label: 'Home', href: '/' },
          { label: pageName },
        ];

  // Dynamically calculate font size so long titles fit gracefully inside the banner
  const titleFontSize =
    displayName && displayName.length > 28
      ? '32'
      : displayName && displayName.length > 20
      ? '38'
      : displayName && displayName.length > 14
      ? '44'
      : '50';

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
        fontFamily: "var(--font-syne, 'Syne'), sans-serif",
      }}
    >
      <svg
        viewBox="0 0 1366 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', display: 'block' }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path d="M54.08,18c-16.51,3.57-29.36,19.5-31.04,39.35l.04,318.74c3.19,23.17,17.98,36.99,37.53,38.6l953.78-.07c15.67-1.67,29.83-14.49,33.97-32.44,2.27-9.84.83-19,4.13-28.5,4.73-13.62,16.75-24.09,29.24-25.36,20.71-2.1,60.38-2.11,81.1,0,13.75,1.4,26.53,14.58,30.07,30.14,2.1,9.26.88,17.9,3.54,26.88,4.86,16.38,18.45,27.46,32.86,29.15,15.88,1.87,71.38,2.52,85.31-1.58,16.21-4.78,27.79-22.89,28.35-42.52l-.06-310.69c-1.73-22.12-15.3-40.41-34.6-42.05L54.08,18Z" />
          </clipPath>
        </defs>

        <image
          href={resolvedImage}
          x="0"
          y="0"
          width="1366"
          height="420"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />

        <rect
          x="0"
          y="0"
          width="1366"
          height="420"
          fill="rgba(0,0,0,0.40)"
          clipPath={`url(#${clipId})`}
        />

        <foreignObject x="60" y="40" width="40" height="40">
          <Image
            src={img.favicon}
            alt="Favicon"
            width={40}
            height={40}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </foreignObject>

        <text
          x="62"
          y="360"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          fontSize={titleFontSize}
          fontWeight="400"
          fontFamily="'Syne', sans-serif"
        >
          {displayName}
        </text>

        <foreignObject x="1075" y="350" width="240" height="36">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              gap: '6px',
              fontSize: '13px',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 400,
            }}
          >
            {trail.map((item, idx) => {
              const isLast = idx === trail.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <span style={{ color: '#B2BEB5' }}>/</span>}
                  {item.href ? (
                    <Link
                      to={item.href}
                      style={{
                        color: isLast ? '#e74c3c' : '#000',
                        textDecoration: 'none',
                        fontWeight: 400,
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span style={{ color: '#e74c3c', fontWeight: 400 }}>
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Breadcrumb;
