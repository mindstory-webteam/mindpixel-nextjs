"use client";
import Portfolio from '../components/Portfolio'
import EnquiryService from '../components/EnquiryService'
import WhoWeAre from '../components/WhoWeAre'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'
import EnquiryFaq from '../components/EnquiryFaq'
import EnquiryReview from '../components/EnquiryReview'
import Hero2 from '../components/Hero2'
import ChatbotWidget from '../components/ChatbotWidget'

import EnquiryHero from '../components/EnquiryHero'
import EnquiryFormSection from '@/components/EnquiryFormSection'
import EnquiryWhyChooseUs from '../components/EnquiryWhyChooseUs'
import EnquiryAbout from '../components/EnquiryAbout'
import InteractivePopup from '../components/InteractivePopup'
import SEO from '../components/SEO';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';

const Landing = () => {
  return (
    <>
      <SEO
        title="Web Design & Growth Marketing | MindPixel"
        description="Elevate your brand with MindPixel. We offer high-performance web development, UI/UX design, SEO, and data-driven growth marketing strategies."
      />


      <div id="home">
        <EnquiryHero />
      </div>
      <div id="contact" style={{ scrollMarginTop: '85px' }}>
        <EnquiryFormSection />
      </div>
      <div id="why-choose-us" style={{ scrollMarginTop: '85px' }}>
        <EnquiryWhyChooseUs />
      </div>
      <div id="about" style={{ scrollMarginTop: '85px' }}>
        <EnquiryAbout />
      </div>
      <div id="services" style={{ scrollMarginTop: '85px' }}>
        <EnquiryService />
      </div>

      <div id="testimonials" style={{ scrollMarginTop: '85px' }}>
        <EnquiryReview />
      </div>
      <div id="faqs" style={{ scrollMarginTop: '85px' }}>
        <EnquiryFaq />
      </div>


      <InteractivePopup />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-100 flex flex-col gap-2">
        <a
          href="tel:+918281610051"
          className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-all hover:-translate-y-1"
          aria-label="Call Us"
        >
          <FaPhone size={18} />
        </a>
        <a
          href="https://wa.me/918281610051?text=Hello%20MPX%20Team%2C%20I'm%20looking%20for%20a%20professional%20website%20for%20my%20business.%20Please%20get%20in%20touch%20with%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:bg-[#20b958] transition-all hover:-translate-y-1"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </>
  );
}

export default Landing;