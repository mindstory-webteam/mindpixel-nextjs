import React from 'react';
import localMarketImg from '../assets/local_market.png';
import communicationImg from '../assets/communication.png';
import expertsImg from '../assets/experts_icon.png';
import growthImg from '../assets/growth_icon2.png';

const reasons = [
  {
    image: localMarketImg.src || localMarketImg,
    title: "Local Market Understanding",
    desc: "Deep understanding of Thrissur and the wider Kerala consumer mindset, tailoring strategies that connect directly with regional audiences."
  },
  {
    image: communicationImg.src || communicationImg,
    title: "Clear & Honest Communication",
    desc: "No false promises or complex jargon. We provide absolute transparency with clear, metrics-driven reporting and recommendations."
  },
  {
    image: expertsImg.src || expertsImg,
    title: "Experienced Experts",
    desc: "Our team consists of specialists who are highly experienced in running paid campaigns, content management, and SEO auditing."
  },
  {
    image: growthImg.src || growthImg,
    title: "Long-Term Growth Focus",
    desc: "We steer clear of quick hacks that collapse. We build secure organic systems, brand consistency, and reliable lead channels for steady scaling."
  }
];

export default function EnquiryWhyChooseUs() {
  return (
    <section className="wcu-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');
        .wcu-section {
          background-color: #ffffff;
          padding: 24px 0 60px 0;
          color: #111;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }
        .wcu-inner {
          width: 100%;
          max-width: 1475px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .wcu-header {
          text-align: left;
          margin-bottom: 28px;
        }
        .wcu-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.35rem, 2.4vw, 1.85rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin: 0;
          color: #111111;
        }
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .wcu-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 20px;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .wcu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
        }
        .wcu-title {
          font-family: 'Poppins', sans-serif;
          font-size: 21px;
          font-weight: 600;
          margin: 0 0 14px 0;
          color: #111111;
          line-height: 1.25;
          position: relative;
          z-index: 1;
        }
        .wcu-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          line-height: 1.65;
          color: #555555;
          margin: 0;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .wcu-icon-bg {
          position: absolute;
          top: 50%;
          right: -15px;
          transform: translateY(-50%);
          width: 180px;
          height: 180px;
          object-fit: contain;
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
          mix-blend-mode: multiply;
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
          mask-image: radial-gradient(circle at center, black 40%, transparent 70%);
        }

        @media (max-width: 1200px) {
          .wcu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .wcu-grid {
            grid-template-columns: 1fr;
          }
          .wcu-section {
            padding: 16px 0 40px 0;
          }
          .wcu-heading {
            font-size: 24px;
          }
          .wcu-card {
            padding: 28px 22px;
            border-radius: 16px;
          }
          .wcu-title {
            font-size: 19px;
          }
        }
      `}</style>

      <div className="wcu-inner w-full max-w-[1475px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="wcu-header">
          <h2 className="wcu-heading">Why Businesses Choose Us</h2>
        </div>

        <div className="wcu-grid">
          {reasons.map((item, i) => (
            <div className="wcu-card" key={i}>
              <img src={item.image} alt={item.title} className="wcu-icon-bg" />
              <h3 className="wcu-title">{item.title}</h3>
              <p className="wcu-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
