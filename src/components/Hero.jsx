import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const windowContainer = document.querySelector(".window-container")
  const skyContainer = document.querySelector(".sky-container")
  const heroCopy = document.querySelector(".hero-copy")
  const heroHeader = document.querySelector(".hero-header")

  const skyContainerHeight = skyContainer.offsetHeight;
  const viewportHeight = window.innerHeight;
  const skyMoveDistance = skyContainerHeight - viewportHeight;

  gsap.set(heroCopy, { yPercent: 100 });

  ScrollTrigger.create({
    trigger: ".intro",
    start: "top top",
    end: `+=${window.innerHeight * 3}px`,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      const progress = self.progress;

      let windowScale;
      if (progress <= 0.5) {
        windowScale = 1 + (progress / 0.5) * 3;
      } else {
        windowScale = 4;
      }

      gsap.set(windowContainer, { scale: windowScale });
      gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });
      gsap.set(skyContainer, {
        y: -progress * skyMoveDistance,
      });

      let heroCopY;
      if (progress <= 0.66) {
        heroCopY = 100;
      } else if (progress >= 1) {
        heroCopY = 0;
      } else {
        heroCopY = 100 * (1 - (progress - 0.65) / 0.34)
      }

      gsap.set(heroCopy, { yPercent: heroCopY });
    },
  });
});