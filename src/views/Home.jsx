"use client";
import dynamic from 'next/dynamic';
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import WhoWeAre from '../components/WhoWeAre'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'
import Hero2 from '../components/Hero2'
import SEO from '../components/SEO';

const ChatbotWidget = dynamic(() => import('../components/ChatbotWidget'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <SEO
        title="Mind Pixel | Best Web Development Company in Thrissur"
        description="Mind Pixel is a leading web development company in Thrissur, delivering custom websites, eCommerce solutions, and responsive web applications for businesses."
      />

      <Hero2 />
      <WhoWeAre />
      <Portfolio />
      <Services />
      <Testimonials />
      <FaqSection />

      <ChatbotWidget
        brandColor="#1a1a1a"
        brandName="Elo"
        companyName="Mindpixel"
      />

    </>
  );
}

export default Home;