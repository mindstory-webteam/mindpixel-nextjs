import { useEffect, useRef } from 'react';
import { Link } from '@/lib/react-router-dom-compat';
import { gsap } from 'gsap';

const AnimatedButton = ({
  children,
  href,
  onClick,
  bgColor      = '#060010',
  textColor    = '#ffffff',
  hoverBgColor = '#ffffff',
  hoverTextColor = '#060010',
  className    = '',
  style        = {},
  ease         = 'power3.out',
  disabled     = false,
  type         = 'button',
  ...rest
}) => {
  const pillRef    = useRef(null);
  const circleRef  = useRef(null);
  const labelRef   = useRef(null);
  const hoverRef   = useRef(null);
  const tlRef      = useRef(null);
  const activeTween = useRef(null);

  const layout = () => {
    const pill   = pillRef.current;
    const circle = circleRef.current;
    if (!pill || !circle) return;

    const w = pill.offsetWidth;
    const h = pill.offsetHeight;
    if (w === 0 || h === 0) return;

    const R      = ((w * w) / 4 + h * h) / (2 * h);
    const D      = Math.ceil(2 * R) + 2;
    const delta  = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
    const originY = D - delta;

    circle.style.width  = `${D}px`;
    circle.style.height = `${D}px`;
    circle.style.bottom = `-${delta}px`;

    gsap.set(circle, {
      xPercent: -50,
      scale: 0,
      transformOrigin: `50% ${originY}px`,
    });

    const label = labelRef.current;
    const hover = hoverRef.current;

    if (label) gsap.set(label, { y: 0 });
    if (hover) gsap.set(hover, { y: h + 12, opacity: 0 });

    tlRef.current?.kill();
    const tl = gsap.timeline({ paused: true });

    tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
    if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
    if (hover) {
      gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 });
      tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
    }

    tlRef.current = tl;
  };

  useEffect(() => {
    layout();
    const pill = pillRef.current;
    let ro;
    if (pill) {
      ro = new ResizeObserver(() => {
        layout();
      });
      ro.observe(pill);
    }
    window.addEventListener('resize', layout);
    document.fonts?.ready?.then(layout).catch(() => {});
    return () => {
      window.removeEventListener('resize', layout);
      if (ro) ro.disconnect();
    };
  }, [ease, children]);

  const handleEnter = () => {
    if (disabled) return;
    const tl = tlRef.current;
    if (!tl) return;
    activeTween.current?.kill();
    activeTween.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = () => {
    if (disabled) return;
    const tl = tlRef.current;
    if (!tl) return;
    activeTween.current?.kill();
    activeTween.current = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const inner = (
    <>
      <span
        ref={circleRef}
        aria-hidden="true"
        style={{
          position:       'absolute',
          left:           '50%',
          bottom:         0,
          borderRadius:   '50%',
          background:     hoverBgColor,
          zIndex:         1,
          display:        'block',
          pointerEvents:  'none',
          willChange:     'transform',
        }}
      />

      <span
        style={{
          position:   'relative',
          display:    'inline-block',
          lineHeight: 1,
          zIndex:     2,
        }}
      >
        <span
          ref={labelRef}
          style={{
            position:    'relative',
            display:     'inline-block',
            lineHeight:  1,
            zIndex:      2,
            willChange:  'transform',
            color:       textColor,
          }}
        >
          {children}
        </span>

        <span
          ref={hoverRef}
          aria-hidden="true"
          style={{
            position:   'absolute',
            left:       0,
            top:        0,
            display:    'inline-block',
            zIndex:     3,
            color:      hoverTextColor,
            willChange: 'transform, opacity',
          }}
        >
          {children}
        </span>
      </span>
    </>
  );

  const sharedProps = {
    ref:          pillRef,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    style: {
      position:       'relative',
      overflow:       'hidden',
      display:        'inline-flex',
      alignItems:     'center',
      justifyContent: 'center',
      borderRadius:   '9999px',
      paddingTop:     '10px',
      paddingBottom:  '10px',
      paddingLeft:    '24px',
      paddingRight:   '24px',
      background:     bgColor,
      border:         'none',
      cursor:         disabled ? 'not-allowed' : 'pointer',
      opacity:        disabled ? 0.5 : 1,
      fontWeight:     600,
      fontSize:       '0.95rem',
      letterSpacing:  '0.02em',
      textDecoration: 'none',
      userSelect:     'none',
      whiteSpace:     'nowrap',
      lineHeight:     1,
      ...style,
    },
    className,
    ...rest,
  };

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#');

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
          {inner}
        </a>
      );
    }
    return (
      <Link to={href} {...sharedProps}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={!disabled ? onClick : undefined} disabled={disabled} {...sharedProps}>
      {inner}
    </button>
  );
};

export default AnimatedButton;