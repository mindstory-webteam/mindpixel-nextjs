"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero2 from '../components/Hero2';
import WhoWeAre from '../components/WhoWeAre';
import Portfolio from '../components/Portfolio';

const Services = dynamic(() => import('../components/Services'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const FaqSection = dynamic(() => import('../components/FaqSection'));

const ChatbotWidget = dynamic(() => import('../components/ChatbotWidget'), {
  ssr: false,
});

const Home = () => {
  const [mountChat, setMountChat] = useState(false);

  useEffect(() => {
    const onInteract = () => setMountChat(true);
    const events = ['scroll', 'touchstart', 'pointermove', 'click', 'keydown'];
    events.forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }));
    const timer = setTimeout(() => setMountChat(true), 3500);

    return () => {
      events.forEach((e) => window.removeEventListener(e, onInteract));
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Hero2 />
      <WhoWeAre />
      <Portfolio />
      <Services />
      <Testimonials />
      <FaqSection />

      {mountChat && (
        <ChatbotWidget
          brandColor="#1a1a1a"
          brandName="Elo"
          companyName="Mindpixel"
        />
      )}
    </>
  );
};

export default Home;