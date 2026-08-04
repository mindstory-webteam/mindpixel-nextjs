import { useEffect } from "react";
import { useLocation } from '@/lib/react-router-dom-compat';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    ScrollTrigger.refresh();
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;